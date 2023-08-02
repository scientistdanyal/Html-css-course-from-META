const textareaE1 = document.getElementById('textarea');
const totalCounterE1 = document.getElementById("total-counter")
const remainingCounterE1 = document.getElementById("remaining-counter")

textareaE1.addEventListener("keyup",()=>{
    updateCounter()
})


function updateCounter(){
    totalCounterE1.innerHTML = textareaE1.value.length;
    remainingCounterE1.innerHTML = textareaE1.getAttribute("maxlength") - textareaE1.value.length;
    
}