/*$(document).on('click', "#msg-seen-a", function(evt){
  
  	console.log('Clicked');
  	var seenLabel = $('#msg-status-a');
  	seenLabel.addClass('label-success');
  	seenLabel.removeClass('label-danger');
  	seenLabel.text('Seen');
});
*/

$(document).on('click', "#new-helpout-btn", function(evt){
    window.location.href = "./NewMessage.html";
});

$(document).on('click', "#helpout-cancel-btn", function(evt){
  console.log("cancel")
  window.location.href = "./LayoutPage.html";
});

$(document).on('click', "#helpout-submit-btn", function(evt){
  console.log("submit")
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