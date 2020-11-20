let contactList;
window.addEventListener("DOMContentLoaded", () => {
    contactList = getContactsFromStorage();
    document.querySelector(".contact-count").textContent = contactList.length;
    createInnerHtml();
});

const getContactsFromStorage = () => {
    return localStorage.getItem("Contact List: ") ?
        JSON.parse(localStorage.getItem("Contact List: ")) : [];
};

const createInnerHtml = () => {
    const headerHtml =
        "<th>Name</th>" +
        "<th>Address</th>" +
        "<th>City</th>" +
        "<th>State</th>" +
        "<th>Zipcode</th>" +
        "<th>Phone</th>" +
        "<th>Email ID</th>" +
        "<th>Actions</th>";
    let innerHtml = `${headerHtml}`;
    if (contactList.length == 0) {
        return;
    }
    for (let contact of contactList) {
        innerHtml = `${innerHtml}
        <tr>
            <td>${contact._name}</td>
            <td>${contact._address}</td>
            <td>${contact._city}</td>
            <td>${contact._state}</td>
            <td>${contact._zip}</td>
            <td>${contact._phoneNumber}</td>
            <td>${contact._email}</td>
            <td>
                <img id="${contact._phoneNumber}" onclick="remove(this)" alt="delete" src="../assets/icons/delete-black-18dp.svg">
                <img id="${contact._phoneNumber}" onclick="update(this)" alt="edit" src="../assets/icons/create-black-18dp.svg">
            </td>
        </tr>
        `;
    }
    document.querySelector("#display").innerHTML = innerHtml;
};

let site_properties = {
    HomePage: "../pages/homePage.html",
    AddContact: "../pages/addContactsForm.html"
};