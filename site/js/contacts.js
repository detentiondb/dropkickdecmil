$('td.twitter').each(function (i, contact) {
	var twitterUrl = 'https://twitter.com/' + contact.innerHTML.substring(1);
	var contactLink = '<a href="' + twitterUrl + '" target="_blank">' + contact.innerHTML + '</a>';
	contact.innerHTML = contactLink;
});

$('td.mail').each(function (i, contact) {
	var mailUrl = 'mailto:' + contact.innerHTML;
	var contactLink = '<a href="' + mailUrl + '" target="_blank">' + contact.innerHTML + '</a>';
	contact.innerHTML = contactLink;
});

