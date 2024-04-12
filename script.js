/* checkbox functionality */

let checkboxs = document.querySelectorAll(".checkMark");
checkboxs.forEach(function(checkBox) {
checkBox.addEventListener("click",()=>{
    checkBox.classList.toggle("clicked");
})
});