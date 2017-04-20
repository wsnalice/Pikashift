var classMsgUnderstaff = 'btn-danger';
var classMsgAbsence = 'btn-danger';

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

function getButtonClass(btn) {
  if (btn.hasClass('btn-success')){
    return 'btn-success';
  }else{
    return 'btn-danger';
  }
} 


function setButtonClasses() {

  var btnA = $('#msg-seen-absence');
  if (!btnA.hasClass(classMsgAbsence)){
    toggleMsgStatusBtn(btnA);
  }

  var btnB = $('#msg-seen-understaff');
  if (!btnB.hasClass(classMsgUnderstaff)){
    toggleMsgStatusBtn(btnB);
  }
}

$(document).on('click', "#msg-seen-understaff", function(evt){
  
    //console.log('Message B Status Clicked');
    var btn = $('#msg-seen-understaff');
    toggleMsgStatusBtn(btn);
    classMsgUnderstaff= getButtonClass(btn);
});

$(document).on('click', "#msg-seen-absence", function(evt){
  
    //console.log('Message A Status Clicked');
    var btn = $('#msg-seen-absence');
    toggleMsgStatusBtn(btn);
    classMsgAbsence = getButtonClass(btn);
});


var NewMsgSuccessAlert = `<div class="alert alert-success alert-dismissable">
    <a href="#" class="close" data-dismiss="alert" aria-label="close">×</a>
    <strong>Success!</strong> Your Message has been sent.
  </div>`;

var NewMessageButton = '<button type="button" class="btn btn-primary btn-block" id="new-msg-btn"> New Message</button> <br>';

var NotifTable =  `<div id="msg-inbox" class="col-md-12">
        
        <!-- Begin Message 1 : Understaffed Alert --> 
        <div id="msg-inbox-understaff" class="msg-card">
          <!-- Message Header --> 
          <div class="row" >
            <div class="col-md-5 red-font "><h4> Understaffed </h4> </div>
            <div class="col-md-4"> <h5>4pm - 10pm, April 17 </h5> </div>
            <div class="col-md-3"> 
              <button type="button" class="btn btn-danger btn-sm" id="msg-seen-understaff"> Mark Seen </button> 
            </div>
          </div>
        <!--- Message Body --> 
          <div class="row">
            <div class="col-md-12 well"> 
                Only 3 out of 6 waiters available.  
            </div>
          </div>
        </div>  <!-- End Of Message 1 -->


        <!-- Begin Message 2 --> 
        <div id="msg-inbox-absence" class="msg-card">
          <!-- Message Header --> 
          <div class="row" >
            <div class="col-md-5"><h4> Absence </h4> </div>
            <div class="col-md-4"> <h5>1pm -2pm, April 17 </h5> </div>
            <div class="col-md-3"> 
              <button type="button" class="btn btn-danger btn-sm" id="msg-seen-absence"> Mark Seen </button> 
            </div>
          </div>
        <!--- Message Body --> 
          <div class="row">
            <div class="col-md-12 well"> Waiter Pikachu absent due to family reasons. </div>
          </div>
        </div>  <!-- End Of Message 2 -->

      </div> <!-- Msg Inbox -->`

var NotifForm = `<form class="form-horizontal col-md-12" id="msg-new-form">
      <fieldset>
      <!-- Form Name -->
      <legend>New Message</legend>

      <!-- Select Basic -->
      <div class="form-group">
        <label class="col-md-2 control-label" for="new-msg-to">To</label>
        <div class="col-md-8">
          <select id="new-msg-to" name="new-msg-to" class="form-control">
            <option value="1">Manager</option>
            <option value="2">All Waiters</option>
            <option value="3">Moltres</option>
            <option value="4">Vaporeon</option>
          </select>
        </div>
      </div>




      <!-- Textarea -->
      <div class="form-group">
        <label class="col-md-2 control-label" for="new-msg-text">Message</label>
        <div class="col-md-8">                     
          <textarea class="form-control" id="new-msg-text" name="new-msg-text"></textarea>
        </div>
      </div>
      </fieldset>
    </form>

     <!-- Button -->
    <div class="col-md-10">    
      <button id="new-msg-cancel-btn" class="btn pull-left">Cancel</button>
      <button id="new-msg-send-btn" class="btn btn-primary pull-right">Send</button>
    </div>`;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

$(document).on('shown.bs.tab', 'a[data-toggle="tab"]', function(e) {
  var target = $(e.target).attr("href") // activated tab
  if (!$(target).is('notifs')) {
    document.getElementById("notifs").innerHTML = NewMessageButton + NotifTable; 
    setButtonClasses();
  }
})

$(document).on('click', "#new-msg-btn", function(evt){
    document.getElementById('notifs').innerHTML = NotifForm;
});

$(document).on('click', "#new-msg-cancel-btn", function(evt){
  //window.location.href = "./LayoutPage.html";
  document.getElementById('notifs').innerHTML = NewMessageButton+ NotifTable;
  setButtonClasses();

});

$(document).on('click', "#new-msg-send-btn", function(evt){
  console.log('Send Clicked');
  var NotifSuccess = NewMessageButton + NewMsgSuccessAlert + NotifTable;
  document.getElementById('notifs').innerHTML = NotifSuccess;
  setButtonClasses();
  
});