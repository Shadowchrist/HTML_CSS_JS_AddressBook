class Employee{

    get id()
    {
        return this._id;
    }

    set id(id)
    {
        this._id = id;
    }

    get name()
    {
        return this._name;
    }

    set name(name)
    {
        let nameRegex = RegExp("^[A-Z]{1}[a-z]{2,}([ ][A-Z]{1}[a-z]{2,})?$");
        if(nameRegex.test(name))
        this._name = name;
        else 
        throw 'Name is incorrect';
    }

    get profilePic()
    {
        return this._profilePic;
    }

    set profilePic(profilePic)
    {
        this._profilePic = profilePic;
    }

    get gender()
    {
        return this._gender;
    }

    set gender(gender)
    {
        this._gender = gender;
    }

    get departments()
    {
        return this._department;
    }

    set departments(departments) {
        if (departments.length != 0) {
            this._departments = departments;
        } 
        else 
        throw "No Department Entered!";
    }

    get salary()
    {
        return this._salary;
    }

    set salary(salary)
    {
        this._salary = salary;
    }

    get note()
    {
        return this._note;
    }

    set note(note)
    {
        this._note = note;
    }

    get startDate()
    {
        return this._startDate;
    }

    set startDate(startDate)
    {
        let today = new Date();
        if(startDate<=today)
        {
        this._startDate = startDate;
        }
        else
        throw 'Start Date incorrect';
    }

    toString()
    {
        const dateFormat = {year:'numeric', month:'long', day:'numeric'};
        const date = (this.startDate === undefined) ? "undefined" :
                      this.startDate.toLocaleDateString("en-US",dateFormat);
        return "[ id: " + this.id + ", name: " + this.name + ", gender: " + this.gender + ", profilePicture: " + this._profilePicture +
               ", salary: " + this.salary + ", startDate: " + date + ", departments: " + this.departments + ", note: " + this._note + " ]" + "\n";
    }

}