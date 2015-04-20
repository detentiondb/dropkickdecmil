var section = $('.hd-footnote-section');
var refno = 0; 
$('.hd-footnote').each(function (i, fn) {
	refno++;
	var id = 'fn' + refno; 
	var reference = '<li id="' + id + '">' + fn.innerHTML + '</li>'; 
	section.append(reference);
	fn.innerHTML = '<a href="#' + id + '">' + refno + '</a>';
});

