
var postNum = 10;
var FromPerson = "Moltres";
var initialDate 

var Header = ` <div class="row"> 
        <div class="col col-md-9">
          <div class="row post-person"> Moltres 
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
  var minsPassed = curDate.getMinutes() - initialDate.getMinutes(); 
  var timeString = minsPassed.toString() + ' mins ago';

  var result = Header + ToStaff + headToTime + timeString + timeToButtons;
  result = result + editBtn + delBtn + ButtonToContent + msgHTML + Footer; 
    return result;
  
}


$(document).on('click', "#post-btn", function(evt)
{
  if ($('#new-post-input').val() == ''){
      $('#empty-msg-manager').html("Post cannot be empty");
  }
  else {
      $('#empty-msg-manager').html("");

  var inpText = $('#new-post-input').val();
  var toPost = $('#post-to').val();

  postNum = postNum + 1;
  var newPost = document.createElement('div');
  newPost.innerHTML = constructPost( inpText, toPost, postNum);
  newPost.id = "post-" + postNum;
  newPost.className = "announcement";
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
});

// Glo
var currentPostId;

// Editing  a post 
$(document).on('click', ".post-edit", function(evt)
{
   var editBtnId = $(this).attr('id');
   var id = editBtnId.substring(14);  
   currentPostId = id;

   var msgText = $('#edit-post-input');
   var postDetails = $('#post-details-'+ id);
   var postTo = $('#post-to-' + currentPostId).text();

   var editPostTo = document.getElementById('edit-post-to');

   if (postTo == "Waiters") {
      editPostTo.value = "1";
   }
   if (postTo == "Chefs") {
      editPostTo.value = "2";
   }
   if (postTo == "Cashiers") {
      editPostTo.value = "3";
   } 
   if (postTo == "All") {
      editPostTo.value = "4";
   }

   msgText.val(postDetails.text());

});

$(document).ready(function() {
  initialDate = new Date(); // for now

});


// Saving a post
$(document).on('click', "#edit-save-btn", function(evt)
{
  if ( $('#edit-post-input').val() == '') {
      $('#empty-edit-manager').html("Post cannot be empty");
  }
  else {
      $('#empty-edit-manager').html("");

    var msgText = $('#edit-post-input');
    var postDetails = $('#post-details-'+ currentPostId);
    var postTo = $('#post-to-' + currentPostId);
    var editTo = $('#edit-post-to');

    postDetails.text( msgText.val());
    
     if (editTo.val()== "1") {
        postTo.text("Waiters");
     }
     if (editTo.val()== "2") {
        postTo.text("Chefs");
     }
     if (editTo.val()== "3") {
        postTo.text("Cashiers");
     }
     if (editTo.val()== "4") {
        postTo.text("All");
     }
  }

});







