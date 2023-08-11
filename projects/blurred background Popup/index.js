const containerE1 = document.querySelector('.container');

const btnE1 = document.querySelector('.btn');

const popupContainerE1 = document.querySelector('.popup-container');
const closeIconE1 = document.querySelector('.close-icon');

btnE1.addEventListener("click",() =>{
    popupContainerE1.classList.add("active");
})