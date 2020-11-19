
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

const getInputValue = (id) => {
    let value = document.querySelector(id).value;
    return value;
}




