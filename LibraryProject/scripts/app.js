// Show and Hide New Book Form
const newBookButton = document.getElementById("newBookButton");
const newBookForm = document.getElementById("newBookForm");
const cancelButton = document.getElementById("cancelForm");

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
cancelButton.addEventListener("click", showNewBookForm);

// Library Storage

const booksContainer = document.getElementById("bookshelf");
let bookShelf = [];

function Book(title, author, year, pages, read, id){
    this.title = title;
    this.author = author;
    this.year = year;
    this.pages = pages;
    this.read = read;
    this.id = id;
}

bookShelf.push(new Book("Atomic Habits", "James Clear", 2018, 320, "unchecked", bookShelf.length));
bookShelf.push(new Book("Example Book 2", "Example Author 2", 2023, 420, "checked", bookShelf.length));

function updateBookshelf() {
    

    for(let i = 0; i < bookShelf.length; i++){
        let newBook = document.createElement('div');
        newBook.classList.add('BookCard');
        newBook.innerHTML = 
        `
            <div class="BookCard">
                <div class="bookTitle">` + bookShelf[i].title + `</div>
                <div class="authorName">By ` + bookShelf[i].author + `</div>
                <div class="bookYear">Published in ` + bookShelf[i].year + `</div>
                <div class="bookPages">Pages: ` + bookShelf[i].pages + `</div>
                <form>
                    <label for="bookRead">Read? </label>
                    <input type="checkbox" id="bookRead" `+ bookShelf[i].read +`>
                </form>
                <input type="button" id="deleteEntry" value="🗑">
            </div>
        `
        booksContainer.appendChild(newBook);
    }
}

updateBookshelf();
