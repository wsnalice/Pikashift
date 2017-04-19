/*$(document).on('click', "#msg-seen-a", function(evt){
  
  	console.log('Clicked');
  	var seenLabel = $('#msg-status-a');
  	seenLabel.addClass('label-success');
  	seenLabel.removeClass('label-danger');
  	seenLabel.text('Seen');
});
*/

function toggleMsgStatusBtn(btn){
	if (btn.hasClass('btn-success')){
  		btn.removeClass('btn-success');
  		btn.addClass('btn-danger');
  		btn.text('Mark Seen');
  	}else{
  		btn.addClass('btn-success');
  		btn.removeClass('btn-danger');
  		btn.text('Mark Unseen');
  	}
}

$(document).on('click', "#msg-seen-b", function(evt){
  
  	//console.log('Message B Status Clicked');
  	var btn = $('#msg-seen-b');
  	toggleMsgStatusBtn(btn);
});

$(document).on('click', "#msg-seen-a", function(evt){
  
  	//console.log('Message A Status Clicked');
  	var btn = $('#msg-seen-a');
  	toggleMsgStatusBtn(btn);
});

$(document).on('click', "#msg-seen-understaff", function(evt){
  
    //console.log('Message B Status Clicked');
    var btn = $('#msg-seen-understaff');
    toggleMsgStatusBtn(btn);
});

$(document).on('click', "#msg-seen-absence", function(evt){
  
    //console.log('Message A Status Clicked');
    var btn = $('#msg-seen-absence');
    toggleMsgStatusBtn(btn);
});


$(document).on('click', "#new-msg-btn", function(evt){
    //window.location.href = "./NewMessage.html";
    var notifTab = $('#notif-tab');
    var absenceTab = $('#absence-tab');
    notifTab.removeClass('active');
    absenceTab.addClass('active');
});

$(document).on('click', "#new-msg-cancel-btn", function(evt){
  window.location.href = "./LayoutPage.html";

});

$(document).ready(function()
{
   

});

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


$(document).on('click', "#new-msg-send-btn", function(evt){
  console.log('Send Clicked');
  // (TODO ) : Send confirmation Message. 
  /*
  var successString = '<div class="alert alert-success alert-dismissable col-md-10 fade in" id="new-msg-success"><a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a><strong>Success!</strong> Your Message has been sent.</div>'
  var successAlert = $.parseHTML(successString);
  await sleep(700);
  */
  window.location.href = "./LayoutPage.html";
  
});