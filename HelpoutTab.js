var helpoutForm = `
	  <center><h3>New Helpout Form</h3></center>
	  <br>
	  <div class="bootstrap-iso">
	   <div class="container-fluid">
	    <div class="row">
	    <div class="col-md-1"></div>

	     <div class="col-md-10">
	      <form method="form-horizontal">

	       <div class="form-group ">
	        <div class="row vertical-align">
	          <label class="control-label requiredField col-md-4" for="helpout-date">
	           Date
	           <span class="asteriskField">
	            *
	           </span>
	          </label>
	          <div class="controls col-md-8">
	            <input type="date" name="helpout-date" min="2000-01-01" style="width:100%">
	          </div>
	        </div>
	       </div>

	       <div class="form-group ">
	        <div class="row vertical-align">
	          <label class="control-label requiredField col-md-4" for="helpout-start-time">
	           Start time
	           <span class="asteriskField">
	            *
	           </span>
	          </label>
	          <div class="controls col-md-8">
	            <select class="select form-control" id="helpout-start-time" name="helpout-start-time">
	              <option disabled selected value> -- select an option -- </option>
	             <option value="9am">
	              9am
	             </option>
	             <option value="10am">
	              10am
	             </option>
	             <option value="11am">
	              11am
	             </option>
	             <option value="12pm">
	              12pm
	             </option>
	             <option value="1pm">
	              1pm
	             </option>
	             <option value="2pm">
	              2pm
	             </option>
	             <option value="3pm">
	              3pm
	             </option>
	             <option value="4pm">
	              4pm
	             </option>
	             <option value="5pm">
	              5pm
	             </option>
	             <option value="6pm">
	              6pm
	             </option>
	             <option value="7pm">
	              7pm
	             </option>
	             <option value="8pm">
	              8pm
	             </option>
	            </select>
	          </div>
	        </div>
	       </div>

	       <div class="form-group ">
	        <div class="row vertical-align">
	          <label class="control-label requiredField col-md-4" for="helpout-end-time">
	           End time
	           <span class="asteriskField">
	            *
	           </span>
	          </label>
	          <div class="controls col-md-8">
	            <select class="select form-control" id="helpout-end-time" name="helpout-end-time">
	              <option disabled selected value> -- select an option -- </option>
	             <option value="10am">
	              10am
	             </option>
	             <option value="11am">
	              11am
	             </option>
	             <option value="12pm">
	              12pm
	             </option>
	             <option value="1pm">
	              1pm
	             </option>
	             <option value="2pm">
	              2pm
	             </option>
	             <option value="3pm">
	              3pm
	             </option>
	             <option value="4pm">
	              4pm
	             </option>
	             <option value="5pm">
	              5pm
	             </option>
	             <option value="6pm">
	              6pm
	             </option>
	             <option value="7pm">
	              7pm
	             </option>
	             <option value="8pm">
	              8pm
	             </option>
	             <option value="9pm">
	              9pm
	             </option>
	            </select>
	          </div>
	        </div>
	       </div>
	      </form>
	     
	      <div>
	       <button id="helpout-cancel-btn" class="btn pull-left">Cancel</button>
	       <button id="helpout-submit-btn" class="btn btn-primary pull-right" name="submit" type="submit">
	        Submit
	       </button>
	      </div>
	               
	     </div>
	     <div class="col-md-1"></div>
	    </div>
	   </div>
	  </div>
	</div>
	`

$(document).on('click', "#helpout-cancel-btn", function(evt){
	document.getElementById("helpouts").innerHTML = document.getElementById("dummy").innerHTML;
});

$(document).on('click', "#helpout-submit-btn", function(evt){
	helpoutTable = `
      <button type="button" class="btn btn-primary btn-block" id = "newHelpout"> New Helpout</button>

      <div class="helpout-title" style="padding-top: 10px"><h4> Upcoming Helpouts</h4></div>
      <table style="width:100%">
        <tr class="lower-border top-border">
          <td align="center">
            <h5>Apr 21, 2017</h5>
          </td>
          <td align="center">
            <h5>1pm - 2pm</h5>
          </td>
        </tr>
        <tr class="lower-border">
          <td align="center">
            <h5>Apr 25, 2017</h5>
          </td>
          <td align="center">
            <h5>6pm - 9pm</h5>
          </td>
        </tr>
        <tr class="lower-border">
          <td align="center">
            <h5>Apr 28, 2017</h5>
          </td>
          <td align="center">
            <h5>6pm - 8pm</h5>
          </td>
        </tr>
      </table>

      <div class="helpout-title"><h4> Previous Helpouts</h4></div>
      <table style="width:100%">
        <tr class="lower-border top-border">
          <td align="center">
            <h5>Mar 15, 2017</h5>
          </td>
          <td align="center">
            <h5>1pm - 2pm</h5>
          </td>
        </tr>
        <tr class="lower-border">
          <td align="center">
            <h5>Mar 10, 2017</h5>
          </td>
          <td align="center">
            <h5>6pm - 9pm</h5>
          </td>
        </tr>
      </table>
	`
	document.getElementById("helpouts").innerHTML = helpoutTable;
	$('#allAbsences').fullCalendar('removeEvents', 'help1');
});





