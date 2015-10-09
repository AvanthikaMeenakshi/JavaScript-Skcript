$(document).ready(function() {
    $('#thisTable th').click(function(){
        $(this).attr('data-order', ($(this).attr('data-order') === 'desc'));
        sorttable(this, $('#thisTable th').index(this));
    });
});
function sorttable(header, index){
 var $tbody = $('table tbody');
 var order = $(header).attr('data-order');
 $tbody.find('tr').sort(function (a, b) {
 var tda = $(a).find('td:eq(' + index + ')').text();
 var tdb = $(b).find('td:eq(' + index + ')').text();
 return (order === 'desc' ? (tda > tdb ? 1 : tda < tdb ? -1 : 0) : (tda < tdb ? 1 : tda > tdb ? -1 : 0));
}).appendTo($tbody);
}