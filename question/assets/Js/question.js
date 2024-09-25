
function openForm(){
    form.style.display = "block";
    form.style.transition = " 0.5s";
}

function closeForm(){
    form.style.display = "none";
}

btn.onclick = openForm;
btnClose.onclick = closeForm; 

function back(){
    window.history.back();
};