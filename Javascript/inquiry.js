const name = document.getElementById("name")
const email = document.getElementById("email")
const form = document.getElementById("form")

form.addEventListener("submit",(event)=>{
    event.preventDefault()
    let namevalue = name.value;
    let emailvalue = email.value;
    alert(`hi ${namevalue} your booking has been confirmed`)
})

