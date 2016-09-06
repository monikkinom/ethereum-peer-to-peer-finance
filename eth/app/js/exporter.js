$(document).ready(function() {
	var cs = CrowdSource.deployed();
  	var address = '0x12f3e21a48c9847b12f3e21a48c9847db12f3e22';
  	web3.eth.getAccounts(function(err, accs) {
	    if (err != null) {
	      alert("There was an error fetching your accounts.");
	      return;
	    }
	    if (accs.length == 0) {
	      alert("Couldn't get any accounts! Make sure your Ethereum client is configured correctly.");
	      return;
	    }
	    var accounts = accs;
		//call some func here and get the id
		address = accounts[2];
	});
	console.log(address);
	$('#addr').text(address);

	$('#sub').click(function() {
		var eid = $('#a').text();
		var iid = $('#iid').val();
		var inv = $('#in').val();
		var rl = $('#rl').val();
		var ia = $('#ia').val();
		var ir = $('#ir').val();
		var eo = $('#eo').val();
		$(this).attr('disabled', 'true');
		$(this).text('Loading...');
		var hash = "here";//shyamsFunction();
		while(!hash) ;
		console.log(hash);
		$(this).removeAttr('disabled');
		$(this).text('Submit');
	});
});