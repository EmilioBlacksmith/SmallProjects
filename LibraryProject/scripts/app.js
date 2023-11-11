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

bookShelf.push(new Book("Atomic Habits", "James Clear", 2018, 320, "checked", bookShelf.length));
bookShelf.push(new Book("Models: Attract Women Through Honesty", "Mark Manson", 2011, 260, "unchecked", bookShelf.length));
bookShelf.push(new Book("Code Complete", "Steve McConnell", 1993, 914, "unchecked", bookShelf.length));
bookShelf.push(new Book("The 48 Laws of Power", "Robert Greene", 1998, 480, "unchecked", bookShelf.length));

function updateBookshelf() {

    let oldEntries = document.querySelectorAll("[data-card-type='Book']");
    oldEntries.forEach((el) => {
        el.remove();
    })
    
    for(let i = 0; i < bookShelf.length; i++){
        let newBook = document.createElement('div');
        newBook.classList.add('BookCard');
        newBook.dataset.cardType = 'Book';
        newBook.id = i;
        newBook.innerHTML = 
        `
            <div class="bookTitle">` + bookShelf[i].title + `</div>
            <div class="authorName">By ` + bookShelf[i].author + `</div>
            <div class="bookYear">Published in ` + bookShelf[i].year + `</div>
            <div class="bookPages">Pages: ` + bookShelf[i].pages + `</div>
            <form>
                <label for="bookRead">Read? </label>
                <input type="checkbox" id="bookRead" `+ bookShelf[i].read +`>
            </form>
            <input type="button" id="deleteEntry" value="🗑" data-book-id="` + i + `">
        `

        booksContainer.appendChild(newBook);

        let button = document.querySelector("[data-book-id='" + i + "']");
        button.addEventListener("click", () => {
            deleteBookFromArray(i);
        });
    }
}

updateBookshelf();

// Add new Book

const bookTitleInput = document.getElementById('bookTitle');
const bookAuthorInput = document.getElementById('bookAuthor');
const bookYearInput = document.getElementById('bookYear');
const bookPagesInput = document.getElementById('bookPages');
const bookReadInput = document.getElementById('read');

const addBookButton = document.getElementById('addNewBookButton');

function addNewBook(){ 
    let newBook = new Book(bookTitleInput.value,
        bookAuthorInput.value,
        bookYearInput.value,
        bookPagesInput.value, 
        (bookReadInput.checked) ? "checked" : "unchecked",
        bookShelf.length);
    
    bookShelf.push(newBook);
    bookTitleInput.value = '';
    bookAuthorInput.value = '';
    bookYearInput.value = '';
    bookPagesInput.value = '';
    bookReadInput.checked = false;

    updateBookshelf();
    showNewBookForm();
}

addBookButton.addEventListener('click', addNewBook);

// Delete Book

function deleteBookFromArray(id){
    bookShelf.splice(parseInt(id), 1);
    updateBookshelf();
}