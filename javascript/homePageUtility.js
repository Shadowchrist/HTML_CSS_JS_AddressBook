let employeeList;
window.addEventListener("DOMContentLoaded", () => {
    employeeList = getEmployeesFromStorage();
    document.querySelector(".emp-count").textContent = employeeList.length;
    createInnerHtml();
});

const getEmployeesFromStorage = () => {
    return localStorage.getItem("Employee List: ") ?
        JSON.parse(localStorage.getItem("Employee List: ")) : [];
};

const createInnerHtml = () => {
    const headerHtml =
        "<th></th>" +
        "<th>Name</th>" +
        "<th>Gender</th>" +
        "<th>Department</th>" +
        "<th>Salary</th>" +
        "<th>Start Date\nMM/DD/YYYY() </th>" +
        "<th>Actions</th>";
    let innerHtml = `${headerHtml}`;
    if (employeeList.length == 0) {
        return;
    }
    for (let employee of employeeList) {
        innerHtml = `${innerHtml}
        <tr>
            <td><img class="profile" alt="" src="${employee._profilePic}"></td>
            <td>${employee._name}</td>
            <td>${employee._gender}</td>
            <td>${getDepartmentHtml(employee._departments)}</td>
            <td>${employee._salary}</td>
            <td>${dateString(employee._startDate)}</td>
            <td>
                <img id="${employee._id}" onclick="remove(this)" alt="delete" src="../assets/icons/delete-black-18dp.svg">
                <img id="${employee._id}" onclick="update(this)" alt="edit" src="../assets/icons/create-black-18dp.svg">
            </td>
        </tr>
        `;
    }
    document.querySelector("#display").innerHTML = innerHtml;
};

const getDepartmentHtml = (departments) => {
    let departmentHtml = "";
    for (let department of departments) {
        departmentHtml = `${departmentHtml} <div class="dept-label">${department}</div>`;
    }
    return departmentHtml;
};

const remove = (temp) => {
    let employeeData = employeeList.find(employee => employee._id == temp._id);
    if (!employeeData) {
      return;
    }
    let index = employeeList
                .map(employee => employee._id)
                .indexOf(employeeData._id);
    employeeList.splice(index, 1);
    localStorage.setItem("Employee List: ", JSON.stringify(employeeList));
    document.querySelector(".emp-count").textContent = employeeList.length;
    window.location.reload();
    createInnerHTML();
  }

const dateString = (date) => {
    let startDate= new Date(date);
    return startDate.toLocaleDateString();
};

let site_properties = {
    HomePage: "../pages/homePage.html",
    AddEmployee: "../pages/employeeDataInput.html"
};