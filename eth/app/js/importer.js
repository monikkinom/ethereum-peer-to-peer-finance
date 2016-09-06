$(document).ready(function() {
	var address = "";
	var invoiceId = "456feds3";
	var inv = "QmetqbxFu4UNR3LoGqLPqdw7AGB77rRi28sQAgYsjaKfcU";
	var eo = 'QmR8ozw7dr9NFqEYBAskxpNTxYYHQcnQ7f7tCsuRmuFfQN';
	var eid = "0xe7a5d668786d536c5a3ac590bb5f5ee0dcbc641a";
	var cr = "35";
	$('#a').text(address);
	$('#iiid').text(invoiceId);
	$('#iif').attr('href', "http://ipfs.io/ipfs/"+inv);
	$('#ii').attr('href', "http://ipfs.io/ipfs/"+eo);
	$('#ieid').text(eid);
	$('#ir').text(cr);

	$('#isub').click(function(e) {
		//e.preventDefault();
		console.log("click");
		$(this).text('Loading...');
		$(this).attr('disabled', 'true');
		var lc = $('#ilc').val();
		var tid = $('#itid').text();
		var hash = "here";//Update transaction;
		while(!hash) ;
		$(this).text('Submit');
		$(this).removeAttr('disabled');
	});
});