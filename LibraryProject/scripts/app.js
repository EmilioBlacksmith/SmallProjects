// Show and Hide New Book Form
const newBookButton = document.getElementById("newBookButton");
const newBookForm = document.getElementById("newBookForm");

function showNewBookForm() {
    if(newBookForm.classList.contains("hidden")){
        newBookForm.classList.remove("hidden");
        newBookForm.classList.add("show");
    }else{
        newBookForm.classList.add("hidden");
        newBookForm.classList.remove("show");
    }
}

newBookButton.addEventListener("click", showNewBookForm);

// 