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


function deleteBookmark(url){

	var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

	for(var i=0;i < bookmarks.length; i++){
		if(bookmarks[i].url == url){
			bookmarks.splice(i,1);
		}
	}

	localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

	fetchBookmarks();
}

function fetchBookmarks(){

	var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

	var bookmarksResults = document.querySelector('#bookmarksResults');

	bookmarksResults.innerHTML = '';

	for(var i=0; i<bookmarks.length;i++){
			var name = bookmarks[i].name;
			var url = bookmarks[i].url;

	bookmarksResults.innerHTML += '<div class="well">'+
								   '<h3>'+name+
								   ' <a class="btn btn-default" target="_blank" href="'+url+'">Visit</a>'+
								   ' <a onclick="deleteBookmark(\''+url+'\')" class="btn btn-danger" href="#">Delete</a>'+

								   '</h3>'+
								   '</div>';

	}

}



