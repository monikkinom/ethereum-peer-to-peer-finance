$(document).ready(function() {
	var address = "";
	$('#addrd').text(addressd);
	var tid = "0xe7a5d668786d536c5a3ac590bb5f5ee0dcbc641a";
	var drl = "500000";
	var dper = "17";
	var dtai = "400000";
	var dac = "10";
	var dwa = "2";
	$('#dtid').text(tid);
	$('#drl').text(drl);
	$('#dper').text(dper);
	$('#dtai').text(dtai);
	$('#dac').text(dac);
	$('#dwa').text(dwa);

	$('#dsub').click(function() {
		$('#alert').removeClass('invisible');
	});
});