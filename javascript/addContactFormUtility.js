
let stateList = [
    ["Jharkhand","Jamshedpur"],["Jharkhand","Ranchi"],["Jharkhand", "Dhanbad"],
    ["Karnataka","Bangalore"],["Karnataka", "Mysore"],["Karnataka", "Mangalore"],
    ["Maharashtra","Mumbai"],["Maharashtra", "Pune"],["Maharashtra", "Nasik"],
    ["Punjab","Amritsar"],["Punjab", "Ludhiana"],["Punjab", "Jalandhar"],
    ["West Bengal","Kolkata"],[ "West Bengal","Durgapur"],[ "West Bengal","Asansol"]
]
 
function createCityList(list,stateinput){
    const cityList= list.filter(state => state[0] === stateinput).map(s => s[1]);
    const cityfield = document.querySelector("#city");
    cityfield.innerHTML = "";
    cityList.forEach(city => {
        const option = document.createElement("option");
        option.textContent = city;
        option.value = city;
        cityfield.appendChild(option);
    });
}

function showCities(){
    const stateinput = getInputValue("#state");
    createCityList(stateList,stateinput);
}

document.querySelector("#state").addEventListener("change",showCities);

window.addEventListener('DOMContentLoaded', () => {
    const name = document.querySelector('#name');
    const nameError = document.querySelector('.name-error');
    const validName = document.querySelector(".valid-name");
    name.addEventListener('input', function() {
        if(name.value.length === 0){
            nameError.textContent = "";
            validName.textContent = "";
            return;
        } 
        try{
            (new Contact()).name = name.value;
                nameError.textContent = "";
                validName.textContent = 'Valid';
                document.querySelector("#submitButton").disabled = false;
            } catch (error) {
                nameError.textContent = error;
                validName.textContent = "";
                document.querySelector("#submitButton").disabled = true;
            }    
    });
}); 

window.addEventListener('DOMContentLoaded', () => {
    const addressError = document.querySelector('.address-error');
    const validAddress = document.querySelector(".valid-address");
    const line1 = document.querySelector('#address1');
    line1.addEventListener('input', function() {
        if(line1.value.length === 0){
            addressError.textContent = "";
            validAddress.textContent = "";
            return;
        } 
        try{
            (new Contact()).address = line1.value;
                addressError.textContent = "";
                validAddress.textContent = 'Valid';
                document.querySelector("#submitButton").disabled = false;
            } catch (error) {
                addressError.textContent = error;
                validAddress.textContent = "";
                document.querySelector("#submitButton").disabled = true;
            }    
    });
    const line2 = document.querySelector('#address2');
    line2.addEventListener('input', function() {
        if(line2.value.length === 0){
            addressError.textContent = "";
            validAddress.textContent = "";
            return;
        } 
        try{
            (new Contact()).address = combineAddress(line1.value,line2.value);
                addressError.textContent = "";
                validAddress.textContent = 'Valid';
                document.querySelector("#submitButton").disabled = false;
            } catch (error) {
                addressError.textContent = error;
                validAddress.textContent = "";
                document.querySelector("#submitButton").disabled = true;
            }    
    });
});

window.addEventListener('DOMContentLoaded', () => {
    const phone = document.querySelector('#phoneNumber');
    const phoneError = document.querySelector('.phoneNumber-error');
    const validPhone = document.querySelector(".valid-phoneNumber");
    phone.addEventListener('input', function() {
        if(phone.value.length === 0){
            phoneError.textContent = "";
            validPhone.textContent = "";
            return;
        } 
        try{
            (new Contact()).phoneNumber = phone.value;
                phoneError.textContent = "";
                validPhone.textContent = 'Valid';
                document.querySelector("#submitButton").disabled = false;
            } catch (error) {
                phoneError.textContent = error;
                validPhone.textContent = "";
                document.querySelector("#submitButton").disabled = true;
            }    
    });
}); 

window.addEventListener('DOMContentLoaded', () => {
    const zip = document.querySelector('#zip');
    const zipError = document.querySelector('.zip-error');
    const validZip = document.querySelector(".valid-zip");
    zip.addEventListener('input', function() {
        if(zip.value.length === 0){
            zipError.textContent = "";
            validZip.textContent = "";
            return;
        } 
        try{
            (new Contact()).zip = zip.value;
                zipError.textContent = "";
                validZip.textContent = 'Valid';
                document.querySelector("#submitButton").disabled = false;
            } catch (error) {
                zipError.textContent = error;
                validZip.textContent = "";
                document.querySelector("#submitButton").disabled = true;
            }    
    });
});

window.addEventListener('DOMContentLoaded', () => {
    const email = document.querySelector('#email');
    const emailError = document.querySelector('.email-error');
    const validEmail = document.querySelector(".valid-email");
    email.addEventListener('input', function() {
        if(email.value.length === 0){
            emailError.textContent = "";
            validEmail.textContent = "";
            return;
        } 
        try{
            (new Contact()).email = email.value;
                emailError.textContent = "";
                validEmail.textContent = 'Valid';
                document.querySelector("#submitButton").disabled = false;
            } catch (error) {
                emailError.textContent = error;
                validEmail.textContent = "";
                document.querySelector("#submitButton").disabled = true;
            }    
    });
}); 

const save = () => {
    try{
        let contactData = createContact();
        alert("Contact added: " + contactData.toString());
    }
    catch(error)
    {
        alert(error);
        return;
    }
    
};

const createContact = () => {
    let contactData = new Contact();
    try{    
        contactData.name = getInputValue('#name');
        contactData.address = combineAddress(getInputValue('#address1'),getInputValue('#address2'));
        contactData.state = getInputValue('#state');
        contactData.city = getInputValue('#city');
        contactData.zip = getInputValue('#zip');
        contactData.phoneNumber = getInputValue('#phoneNumber');
        contactData.email = getInputValue('#email');
    } catch (error) {
        alert(error);
        return;
    }
    return contactData;
}

const getInputValue = (id) => {
    let value = document.querySelector(id).value;
    return value;
}

const combineAddress = (line1,line2) => {
    let address = line1 + " " + line2;
    return address;
}



