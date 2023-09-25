import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="container">
    <div class="website-title">Library</div>
    <div class="box-books">
        <div class="book">
          <div class="name">
            title
          </div>
          <div class="name">
            author
          </div>
          <div class="name">
            year
          </div>
          <div class="name">
            pages
          </div>
        </div>
        
        <!-- NEW BOOK Section-->
        <div class="new-book">
        <h3>Add New Book</h3>
        <form>
          <label>Book Title</label>
          <input></input>
          <label>Book Author</label>
          <input></input>
          <label>Read?</label>
          <input type="checkbox"></input>
          <label>Pages Number</label>
          <input type="number"></input>
          <button>Submit</button>
        </form>
      </div>
      </div>
  </div>
`

