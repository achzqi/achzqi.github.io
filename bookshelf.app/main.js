let books = [];
let editId = null;
function saveToLocalStorage() {
  localStorage.setItem("books", JSON.stringify(books));
}
function loadFromLocalStorage() {
  const storedBooks = localStorage.getItem("books");
  if (storedBooks) {
    books = JSON.parse(storedBooks);
  }
}


const form = document.getElementById("bookForm");
const titleInput = document.getElementById("bookFormTitle");
const authorInput = document.getElementById("bookFormAuthor");
const yearInput = document.getElementById("bookFormYear");
const completeCheckbox = document.getElementById("bookFormIsComplete");
const submitBtn = document.getElementById("bookFormSubmit");

const incompleteList = document.getElementById("incompleteBookList");
const completeList = document.getElementById("completeBookList");


form.addEventListener("submit", function(e) {
  e.preventDefault();

  const title = titleInput.value.trim();
  const author = authorInput.value.trim();
  const year = Number(yearInput.value.trim());
  const isComplete = completeCheckbox.checked;
    console.log(typeof year); 
    console.log(year);
  if (editId) {

    const book = books.find(b => b.id === editId);
    book.title = title;
    book.author = author;
    book.year = year;
    book.isComplete = isComplete;
    saveToLocalStorage();
    renderAllBooks();
    editId = null;
    submitBtn.innerHTML = `Masukkan Buku ke rak <span>Belum selesai dibaca</span>`;
  } else {

    const newBook = {
      id: Date.now(),
      title,
      author,
      year,
      isComplete
    };
    books.push(newBook);
    saveToLocalStorage();
    renderBook(newBook);
  }

  form.reset();
});


function renderBook(book) {
  const card = document.createElement("div");
  card.className = "bookCard";
  card.setAttribute("data-bookid", book.id);
  card.setAttribute("data-testid", "bookItem");

  card.innerHTML = `
    <h3 data-testid="bookItemTitle">${book.title}</h3>
    <p data-testid="bookItemAuthor">Penulis: ${book.author}</p>
    <p data-testid="bookItemYear">Tahun: ${book.year}</p>
    <div>
      <button data-testid="bookItemIsCompleteButton" class="btnComplete">
        ${book.isComplete ? "Belum selesai" : "Selesai dibaca"}
      </button>
      <button data-testid="bookItemDeleteButton" class="btnDellete">Hapus Buku</button>
      <button data-testid="bookItemEditButton" class="btnEdit">Edit Buku</button>
    </div>
  `;


  card.querySelector(".btnDellete").addEventListener("click", () => {
    books = books.filter(b => b.id !== book.id);
    card.remove();
    saveToLocalStorage();
  });


  card.querySelector(".btnEdit").addEventListener("click", () => {
    titleInput.value = book.title;
    authorInput.value = book.author;
    yearInput.value = book.year;
    completeCheckbox.checked = book.isComplete;

    editId = book.id;
    submitBtn.innerText = "Update Buku";
  });


  card.querySelector(".btnComplete").addEventListener("click", () => {
    book.isComplete = !book.isComplete;
    saveToLocalStorage();
    renderAllBooks(); 
  });


  if (book.isComplete) {
    completeList.appendChild(card);
  } else {
    incompleteList.appendChild(card);
  }
}


function renderAllBooks() {
  incompleteList.innerHTML = "";
  completeList.innerHTML = "";
  books.forEach(renderBook);
}

const searchForm = document.getElementById("searchBook");
const searchInput = document.getElementById("searchBookTitle");


searchForm.addEventListener("submit", function(e) {
  e.preventDefault();
  
  const keyword = searchInput.value.trim().toLowerCase();

  if (keyword === "") {

    renderAllBooks();
    return;
  }


  const filteredBooks = books.filter(b => 
    b.title.toLowerCase().includes(keyword)
  );


  incompleteList.innerHTML = "";
  completeList.innerHTML = "";


  filteredBooks.forEach(renderBook);
});
document.body.onload = () => {
  loadFromLocalStorage();
  renderAllBooks();
};


// achmad zidan al baihaqi
// f269d5y0031