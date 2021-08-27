let bookListItems = document.querySelector('#book-list ul');

bookListItems.addEventListener('click', function(e){
    if (e.target.className === 'delete') {
        bookListItems.removeChild(e.target.parentNode);
    }
});

let addBookForm = document.forms['add-book'];

addBookForm.addEventListener('submit', function(e){
    e.preventDefault();
    let value = addBookForm.querySelector('input[type="text"]').value;
    
    let li = document.createElement('li');
    let nameSpan = document.createElement('span');
    let deleteButton = document.createElement('span');

    nameSpan.classList.add('name');
    deleteButton.classList.add('delete');

    nameSpan.textContent = value;
    deleteButton.textContent = 'delete';

    li.appendChild(nameSpan);
    li.appendChild(deleteButton);

    bookListItems.appendChild(li);
});

let searchBar = document.forms['search-books'].querySelector('input');

searchBar.addEventListener('keyup',function(e){
    let inputKeyword = e.target.value.toLowerCase();
    let books = Array.from( bookListItems.getElementsByTagName('li'));
    books.forEach(
        function(book){
            let bookTitle = book.firstElementChild.textContent;
            if (bookTitle.toLocaleLowerCase().indexOf(inputKeyword) != -1) {
                book.firstElementChild.style.backgroundColor = '#eee';
            } else{
                book.style.display = 'none';
            }
        }
    );
});