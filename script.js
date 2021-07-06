const title = document.getElementById('title');
const author = document.getElementById('author');
const year = document.getElementById('year');
const btn = document.getElementById('btn');
const bookList = document.getElementById('bookList');

btn.addEventListener('click', function (e)
{
    e.preventDefault();
    // if(title.value=='' && author.value=='' && year.value==''){
    //     alert('Please Enter input');
    // }

    if (title.value == '')
    {
        alert('Please Enter a title :)');
    }
    else if (author.value == '')
    {
        alert('Please enter the author name :)');
    }
    else if (year.value == '')
    {
        alert('Please enter the year of publication :)');
    }

    else
    {
        const newRow = document.createElement('tr');
        newRow.style.backgroundColor = 'black';
        newRow.style.color = 'white';


        // for passing title
        const newTitle = document.createElement('td');
        newTitle.innerHTML = title.value;
        newRow.appendChild(newTitle);
        title.value = '';

        // for passing author name
        const newAuthor = document.createElement('td');
        newAuthor.innerHTML = author.value;
        newRow.appendChild(newAuthor);
        author.value = '';

        // for passing year
        const newYear = document.createElement('td');
        newYear.innerHTML = year.value;
        newRow.appendChild(newYear);
        year.value = '';

        // for trash button
        const trash = document.createElement('td');
        trash.innerHTML = '<i class="fas fa-trash"></i>';
        trash.addEventListener('click', function ()
        {
            trash.parentElement.remove();
        });
        newRow.appendChild(trash);
        trash.style.color = 'red';

        // adding new row in booklist
        bookList.appendChild(newRow);
    }

});























