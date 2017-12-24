var form = document.querySelector('#myForm');

form.addEventListener('submit', saveBookmark);

function saveBookmark(e){


	var siteName = document.querySelector('#siteName').value;
	var siteUrl = document.querySelector('#siteUrl').value;


	var bookmark = {
		name: siteName,
		url: siteUrl
	}

/*
	localStorage.setItem('test', 'hello world');
	console.log(localStorage.getItem('test'));
	localStorage.removeItem('test');
	console.log(localStorage.getItem('test'));
*/

if(localStorage.getItem('bookmarks') === null){

	var bookmarks = [];

	bookmarks.push(bookmark);

	localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
	
} else {
	var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

	bookmarks.push(bookmark);

	localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

}

	e.preventDefault();
}


function fetchBookmarks(){

	var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

	console.log(bookmarks);
}



