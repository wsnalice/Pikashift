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


$(document).on('click', "#new-msg-btn", function(evt){
    window.location.href = "./NewMessage.html";

});

$(document).on('click', "#new-msg-cancel-btn", function(evt){
  console.log('Cancel Clicked');
  //window.location.href = "./LayoutPage.html";

});

$(document).on('click', "#new-msg-send-btn", function(evt){
  console.log('Send Clicked');
  //window.location.href = "./LayoutPage.html";

});