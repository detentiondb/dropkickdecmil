var section = $('.hd-footnote-section');
var refno = 0; 
$('.hd-footnote').each(function (i, fn) {
	refno++; 
	section.append('<li>' + fn.innerHTML + '</li>');
	fn.innerHTML = '<a href="#fn' + refno + '">' + refno + '</a>';
});

