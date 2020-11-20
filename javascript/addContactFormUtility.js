
let stateList = [
    ["Jharkhand", "Jamshedpur"], ["Jharkhand", "Ranchi"], ["Jharkhand", "Dhanbad"],
    ["Karnataka", "Bangalore"], ["Karnataka", "Mysore"], ["Karnataka", "Mangalore"],
    ["Maharashtra", "Mumbai"], ["Maharashtra", "Pune"], ["Maharashtra", "Nasik"],
    ["Punjab", "Amritsar"], ["Punjab", "Ludhiana"], ["Punjab", "Jalandhar"],
    ["West Bengal", "Kolkata"], ["West Bengal", "Durgapur"], ["West Bengal", "Asansol"]
]

let loadContact = {};

function createCityList(list, stateinput) {
    const cityList = list.filter(state => state[0] === stateinput).map(s => s[1]);
    const cityfield = document.querySelector("#city");
    cityfield.innerHTML = "";
    cityList.forEach(city => {
        const option = document.createElement("option");
        option.textContent = city;
        option.value = city;
        cityfield.appendChild(option);
    });
}

function showCities() {
    const stateinput = getInputValue("#state");
    createCityList(stateList, stateinput);
}

document.querySelector("#state").addEventListener("change", showCities);

window.addEventListener('DOMContentLoaded', () => {
    const name = document.querySelector('#name');
    const nameError = document.querySelector('.name-error');
    const validName = document.querySelector(".valid-name");
    name.addEventListener('input', function () {
        if (name.value.length === 0) {
            nameError.textContent = "";
            validName.textContent = "";
            return;
        }
        try {
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
    line1.addEventListener('input', function () {
        if (line1.value.length === 0) {
            addressError.textContent = "";
            validAddress.textContent = "";
            return;
        }
        try {
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
    line2.addEventListener('input', function () {
        if (line2.value.length === 0) {
            addressError.textContent = "";
            validAddress.textContent = "";
            return;
        }
        try {
            (new Contact()).address = combineAddress(line1.value, line2.value);
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
    phone.addEventListener('input', function () {
        if (phone.value.length === 0) {
            phoneError.textContent = "";
            validPhone.textContent = "";
            return;
        }
        try {
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
    zip.addEventListener('input', function () {
        if (zip.value.length === 0) {
            zipError.textContent = "";
            validZip.textContent = "";
            return;
        }
        try {
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
    email.addEventListener('input', function () {
        if (email.value.length === 0) {
            emailError.textContent = "";
            validEmail.textContent = "";
            return;
        }
        try {
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

window.addEventListener('DOMContentLoaded', () => {
    const editContact = localStorage.getItem("editContact");
    updateContact = (editContact) ? true : false;
    if (!updateContact) return;
    loadContact = JSON.parse(editContact);
    setForm();
});

const save = () => {
    try {
        let contactData= new Contact();
        createContact(contactData);
        if(checkIfPresent(contactData.phoneNumber))
        {
            alert("Phone Number already present.");
            document.querySelector("#submitButton").disabled = true;
            return;
        }
        alert("Contact added: " + contactData.toString());
        storeContact(contactData);
        resetForm();
        return;
    }
    catch (error) {
        alert(error);
        return;
    }
};

const createContact = (contactData) => {
    if(!contactData)
    {
        contactData = new Contact();
        try {
            contactData._name = getInputValue('#name');
            contactData._address = combineAddress(getInputValue('#address1'), getInputValue('#address2'));
            contactData._state = getInputValue('#state');
            contactData._city = getInputValue('#city');
            contactData._zip = getInputValue('#zip');
            contactData._phoneNumber = getInputValue('#phoneNumber');
            contactData._email = getInputValue('#email');
        } catch (error) {
            alert(error);
            return;
        }
        return contactData;
    }
    else{
    try {
        contactData._name = getInputValue('#name');
        contactData._address = combineAddress(getInputValue('#address1'), getInputValue('#address2'));
        contactData._state = getInputValue('#state');
        contactData._city = getInputValue('#city');
        contactData._zip = getInputValue('#zip');
        contactData._phoneNumber = getInputValue('#phoneNumber');
        contactData._email = getInputValue('#email');
    } catch (error) {
        alert(error);
        return;
    }
    return contactData;
}
}

function storeContact() {
    let contactList = JSON.parse(localStorage.getItem("Contact List: "));

    if (contactList) {
        let contactData = contactList.find(contact => contact._phoneNumber == loadContact._phoneNumber);
        if (!contactData) {
            contactList.push(createContact());
        } else {
            const index = contactList.map(contact => contact._phoneNumber).indexOf(contactData._phoneNumber);
            contactList.splice(index, 1, createContact(contactData));
        }
    } else {
        contactList = [createContact()];
    }
    alert("Contact updated in local storage.");
    localStorage.setItem("Contact List: ", JSON.stringify(contactList));
}

const setForm = () => {
    setValue('#name', loadContact._name);
    let addressArray = breakAddress(loadContact._address);
    setValue('#address1', addressArray[0]);
    setValue('#address2', addressArray[1])
    setValue('#state', loadContact._state);
    showCities();
    setValue('#city', loadContact._city);
    setValue('#zip', loadContact._zip);
    setValue('#phoneNumber', loadContact._phoneNumber);
    setValue('#email', loadContact._email);
}

const resetForm = () => {
    setValue("#name", "");
    setMessage(".name-error");
    setMessage(".valid-name");
    setValue("#address1", "");
    setValue("#address2", "");
    setMessage(".address-error");
    setMessage(".valid-address");
    setValue("#state", "");
    clearDropdownList("#city");
    setValue("#zip", "");
    setMessage(".zip-error");
    setMessage(".valid-zip");
    setValue("#phoneNumber", "");
    setMessage(".phoneNumber-error");
    setMessage(".valid-phoneNumber");
    setValue("#email", "");
    setMessage(".email-error");
    setMessage(".valid-email");
};

function checkIfPresent(phone) {
    contactList = getContactsFromStorage();
    let contactData = contactList.find(contact => contact._phoneNumber === phone);
    if (!contactData)
        return false;
    else
        return true;
}

const getContactsFromStorage = () => {
    return localStorage.getItem("Contact List: ") ?
        JSON.parse(localStorage.getItem("Contact List: ")) : [];
};

const getInputValue = (id) => {
    let value = document.querySelector(id).value;
    return value;
}

const setValue = (id, value) => {
    const element = document.querySelector(id);
    element.value = value;
};

const setMessage = (id) => {
    const contentElement = document.querySelector(id);
    contentElement.textContent = "";
};

const clearDropdownList = (id) => {
    const field = document.querySelector(id);
    field.innerHTML = '<option disabled selected hidden>Select City</option> <option disabled >Select a state first.</option>';
}

const combineAddress = (line1, line2) => {
    let address = line1 + "_" + line2;
    return address;
}

const breakAddress = (address) => {
    let str1 = "", str2 = "";
    let addressArray = new Array();
    let pos=0;
    for(let i=0; i<address.length; i++)
    {
        if(address.charAt(i)=='_')
        {
            pos=i+1;
            break;
        }
        str1+=address.charAt(i);     
    }
    addressArray[0]=str1;
    for(let j=pos; j<address.length; j++)
    {
        str2+=address.charAt(j);
    }
    addressArray[1]=str2;
    return addressArray;
}



