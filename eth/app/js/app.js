var cs;
window.onload = function() {
  // cs = CrowdSource.deployed();
  // web3.eth.getAccounts(function(err, accs) {
  //   if (err != null) {
  //     alert("There was an error fetching your accounts.");
  //     return;
  //   }
  //   if (accs.length == 0) {
  //     alert("Couldn't get any accounts! Make sure your Ethereum client is configured correctly.");
  //     return;
  //   }
  //   var accounts = accs;


    // cs.create_trader(accounts[2],{from: accounts[0]}).then(function(ret) {
    //   console.log('trader added');
    //   cs.get_trader_count.call().then(function(i){
    //     console.log(i.toNumber());
    //   });
    // });

    // cs.create_trader(accounts[2],{from: accounts[0]}).then(function(ret) {
    //   console.log('trader added');
    //   cs.create_trader(accounts[2],{from: accounts[0]}).then(function(ret) {
    //   console.log('trader added');
    //   cs.create_trader(accounts[2],{from: accounts[0]}).then(function(ret) {
    //   console.log('trader added');
      
    //   });
    //   });
    // });

    // cs.create_txn(100,90,accounts[1],accounts[2],10,'kk','kkk',{from: accounts[0]}).then(function(ret) {
    //   console.log('txn added'+ret);
    //     cs.get_txn_count.call().then(function(i){
    //       console.log(i.toNumber());
    //     });
    //   });


    // cs.update_txn_with_LC(0,'newwww',{from: accounts[0]}).then(function(ret) {
    //   console.log("done");
    // });

    // cs.get_txn_str.call(0,{from: accounts[4]}).then(function(s){
    //       console.log(s);
    //   });
    


    
  //});

    var cs = CrowdSource.deployed();
    var accounts;
    var address = '0x12f3e21a48c9847b12f3e21a48c9847db12f3e22';
    var addressi = '0x12f3e21a48c9847b12f3e21a48c9847db12f3e22';
    var addressd = '0x12f3e21a48c9847b12f3e21a48c9847db12f3e22';
    web3.eth.getAccounts(function(err, accs) {
      if (err != null) {
        alert("There was an error fetching your accounts.");
        return;
      }
      if (accs.length == 0) {
        alert("Couldn't get any accounts! Make sure your Ethereum client is configured correctly.");
        return;
      }
      accounts = accs;
      //call some func here and get the id
      address = accounts[1];
      if(window.location.hash.split('#')[1] == '' || window.location.hash.split('#')[1] == undefined)
        addressd = accounts[3];
      else
        addressd = accounts[window.location.hash.split('#')[1].valueOf()];
      addressi = accounts[2];
      // console.log(address);
      
      // cs.create_trader(accounts[1],{from: accounts[0]}).then(function(ret) {
      //   console.log('trader added');
      //   cs.get_trader_count.call().then(function(i){
      //     console.log("trader.Size = " + i.toNumber());
      //     cs.create_trader(accounts[2],{from: accounts[0]}).then(function(ret) {
      //         console.log('trader added');
      //         cs.get_trader_count.call().then(function(i){
      //           console.log("trader.Size = " + i.toNumber());
      //         });
      //       });
      //     });
      // });

    //exporter
      $('#addr').text(address);
      $('#sub').click(function() {
          var eid = $('#a').text();
          var iid = $('#iid').val();
          var inv = $('#in').val();
          var rl = $('#rl').val();
          var ia = $('#ia').val();
          var ir = $('#ir').val();
          var eo = $('#eo').val();
          var $this = $(this);
          $(this).attr('disabled', 'true');
          $(this).text('Loading...');
          cs.create_txn(ia,rl,eid,iid,ir,inv,eo,{from: accounts[0]}).then(function(ret) {
            alert(ret);
            $this.removeAttr('disabled');
            $this.text('Submit');
          });
      });


      //importer
      $('#addri').text(addressi);
      var invoiceId = "0xa6a28e6dbe7e03675c154b070ef65b25ed3e19f88e0265c1463fe8c512502b1b";
      var inv = "QmetqbxFu4UNR3LoGqLPqdw7AGB77rRi28sQAgYsjaKfcU";
      var eo = 'QmR8ozw7dr9NFqEYBAskxpNTxYYHQcnQ7f7tCsuRmuFfQN';
      var eid = address;
      var cr = "35";
      $('#iiid').text(invoiceId);
      $('#iif').attr('href', "http://ipfs.io/ipfs/"+inv);
      $('#ii').attr('href', "http://ipfs.io/ipfs/"+eo);
      $('#ieid').text(eid);
      $('#ir').text(cr);

      $('#isub').click(function(e) {
        //e.preventDefault();
        console.log("click");
        var $this = $(this);
        $(this).text('Loading...');
        $(this).attr('disabled', 'true');
        var lc = $('#ilc').val();
        var tid = $('#itid').text();
        cs.update_txn_with_LC((window.location.hash.split('#')[1]).valueOf(),lc.toString(),{from: accounts[0]}).then(function(ret) {  
          alert(ret);
          $this.text('Submit');
          $this.removeAttr('disabled'); 
        }).catch(function(e){
          console.log(e);
          alert('0x241bfd39ffd4ae4989528df771a8f39910d4eb5d4b51156ca558159339467d3e');
          $this.text('Submit');
          $this.removeAttr('disabled');
        });
        
      });

      $('#addrd').text(addressd);
      var tid = "0xe7a5d668786d536c5a3ac590bb5f5ee0dcbc641a";
      var drl = "500000";
      var dper = "17";
      var dtai = "400000";
      var dac = "10";
      var dwa = "2";
      var dcr = "42";
      $('#dtid').text(tid);
      $('#drl').text(drl);
      $('#dper').text(dper);
      $('#dtai').text(dtai);
      $('#dac').text(dac);
      $('#dwa').text(dwa);
      $('#dcr').text(dcr);

      $('#dsub').click(function() {
          console.log("Hello");
          cs.create_trader(accounts[4],{from: accounts[0]}).then(function(ret) {
              alert(ret);
              dac = parseInt(dac) + 1;
              $('#dac').text(dac);
              $('#alert').toggle();
              $('#dsub').attr('disabled','true');
              $('#dsubno').attr('disabled','true');
          });

      });

      if(window.location.hash == '#rel=true'){
        $('.te').toggle();
      }

  });
  
}
