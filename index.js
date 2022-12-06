import Book from './modules/book.js';
import LocalStorage, { Interface } from './modules/localStorage.js';

document.addEventListener('DOMContentLoaded', Interface.booksDisplay);

const form = document.getElementById('form');
const bookList = document.getElementById('book-list');

const home = document.getElementById('home');
const add = document.getElementById('add');
const contact = document.getElementById('contact');

const gethome = document.getElementById('get-home');
const getadd = document.getElementById('get-add');
const getcontact = document.getElementById('get-contact');

const addSingleBook = (e) => {
  e.preventDefault();
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const book = new Book(title, author);
  Interface.addBook(book);
  LocalStorage.addBookToStorage(book);
  Interface.clearValues();
};

const removeSingleBook = (e) => {
  Interface.removeBook(e.target);
  LocalStorage.removeBookFromStorage(e.target
    .parentElement
    .previousElementSibling
    .previousElementSibling
    .previousElementSibling
    .textContent);
};

const showContact = (e) => {
  e.preventDefault();
  home.style.display = 'none';
  contact.style.display = 'block';
  add.style.display = 'none';
};

const showAdd = (e) => {
  e.preventDefault();
  home.style.display = 'none';
  contact.style.display = 'none';
  add.style.display = 'block';
};

const showHome = (e) => {
  e.preventDefault();
  home.style.display = 'block';
  contact.style.display = 'none';
  add.style.display = 'none';
};

form.addEventListener('submit', (e) => {
  addSingleBook(e);
});

bookList.addEventListener('click', (e) => {
  removeSingleBook(e);
});

getcontact.addEventListener('click', (e) => {
  showContact(e);
});

getadd.addEventListener('click', (e) => {
  showAdd(e);
});

gethome.addEventListener('click', (e) => {
  showHome(e);
});

function clock() {
  const date = document.getElementById('date');
  const dateToString = new Date().toLocaleString();
  const dateFormat = dateToString.replace(', ', ' | ');
  date.textContent = dateFormat;
}
setInterval(clock, 1000);
