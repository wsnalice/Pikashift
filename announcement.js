
var postNum = 10;
var FromPerson = "Moltres";
var initialDate 

var Header = ` <div class="row"> 
        <div class="col col-md-9">
          <div class="row post-person"> Pikachu 
          <span class="glyphicon glyphicon-triangle-right " aria-hidden="true"></span>`


var headToTime = `</div><div class="row post-time"> `
 
var timeToButtons = ` </div> </div> <!-- To From Stuff --> 
        <div class="col col-md-3 no-side-margin"> `

var startDelete = '<button class="btn btn-xs  post-del" id="post-del-btn-'
var endDelete = '"> <span class="glyphicon glyphicon-remove " aria-hidden="true"></span> </button>'
          
var startEdit = '<button class="btn btn-xs post-edit" id="post-edit-btn-'
var endEdit = '"> <span class="glyphicon glyphicon-edit " aria-hidden="true" data-toggle="modal" data-target="#postEditModal"></span> </button>'

var ButtonToContent = `</div> <!-- End of Edit/ Remove Button Stuff -->
        </div> <!-- End Post Header -->
       <div class="row"> `

var msgStart = '<div class="col col-md-12 post-details gappy" id="post-details-';  
var Footer = '</div> </div>';

// RES = header + waiter + headToTime + Time + 


function constructPost(inpText, toPerson, postNum) {

  var postString = postNum.toString()
  var ToStaff = '<span id="post-to-' + postString + '">' + toPerson + '</span>';
  var delBtn = startDelete + postString + endDelete;
  var editBtn = startEdit + postString + endEdit;
  var msgHTML = msgStart + postString + '">' + inpText; 


  var curDate = new Date(); // for now
  console.log(curDate, initialDate);
  var minsPassed = curDate.getMinutes() - initialDate.getMinutes(); 
  var timeString = minsPassed.toString() + ' mins';

  var result = Header + ToStaff + headToTime + timeString + timeToButtons;
  result = result + delBtn + editBtn + ButtonToContent + msgHTML + Footer; 
    return result;
  
}

$(document).on('click', "#post-btn", function(evt)
{
  if ($('#new-post-input').val() == ''){
      $('#empty-msg').html("Cannot post nothing");
  }
  else {
      $('#empty-msg').html("");
  var inpText = $('#new-post-input').val();
  var toPost = $('#post-to').val();

  postNum = postNum + 1;
  var newPost = document.createElement('div');
  //console.log("Post Id" + postNum);
  newPost.innerHTML = constructPost( inpText, toPost, postNum);
  newPost.id = "post-" + postNum;
  newPost.className = "announcement";
  //console.log(newPost);
  $('#all-posts').prepend(newPost);

  // Clear the Current Post
  $('#new-post-input').val("");

  }
});


// Deleting a post 
$(document).on('click', ".post-del", function(evt)
{
   var delBtnId = $(this).attr('id');
   var id = delBtnId.substring(13);  
   var post = $("#post-" + id).remove();
   console.log(id);
});

// Glo
var currentPostId;

// Editing  a post 
$(document).on('click', ".post-edit", function(evt)
{
   var editBtnId = $(this).attr('id');
   var id = editBtnId.substring(14);  
   currentPostId = id;

   console.log("Editing Post", currentPostId);
   var msgText = $('#edit-post-input');
   var postDetails = $('#post-details-'+ id);
   var postTo = $('#post-to-' + currentPostId).text();

   console.log("Setting Post to Val to:", postTo );

   var editPostTo = document.getElementById('edit-post-to');

   if (postTo == "Manager") {
      editPostTo.value = "1";
   }
   if (postTo == "Waiters") {
      editPostTo.value = "2";
   }
   if (postTo == "PassOn") {
      editPostTo.value = "3";
   } 

   console.log("Edit Post To:", $('#edit-post-to'))
   console.log("Post Details:", postDetails)
   msgText.val(postDetails.text());

});

$(document).ready(function() {
  console.log("Here")
  initialDate = new Date(); // for now

});


// Saving a post
$(document).on('click', "#edit-save-btn", function(evt)
{
   
  console.log(" Saving Post", currentPostId);
  var msgText = $('#edit-post-input');
  var postDetails = $('#post-details-'+ currentPostId);
  var postTo = $('#post-to-' + currentPostId);
  var editTo = $('#edit-post-to');

  postDetails.text( msgText.val());
  
  
   if (editTo.val()== "1") {
      postTo.text("Manager");
   }
   if (editTo.val()== "2") {
      postTo.text("Waiters");
   }
   if (editTo.val()== "3") {
      postTo.text("PassOn");
   }
  


  console.log("Saved Details:", msgText.val(), editTo.val(), editTo.text());


});







