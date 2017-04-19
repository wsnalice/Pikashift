var absenceForm = `<center><h3>New Absence Form</h3></center>
      <br>
      <div class="bootstrap-iso">
       <div class="container-fluid">
        <div class="row">
        <div class="col-md-1"></div>

         <div class="col-md-10">
          <form method="form-horizontal">
           <div class="form-group ">
            <div class="row vertical-align">
              <label class="control-label requiredField col-md-4" for="absence-date">
               Date
               <span class="asteriskField">
                *
               </span>
              </label>
              <div class="controls col-md-8">
                <input type="date" name="absence-date" min="2000-01-01" style="width:100%">
              </div>
            </div>
           </div>
           <div class="form-group ">
            <div class="row vertical-align">
              <label class="control-label requiredField col-md-4" for="absence-start-time">
               Start time
               <span class="asteriskField">
                *
               </span>
              </label>
              <div class="controls col-md-8">
                <select class="select form-control" id="absence-start-time" name="absence-start-time">
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
              <label class="control-label requiredField col-md-4" for="absence-end-time">
               End time
               <span class="asteriskField">
                *
               </span>
              </label>
              <div class="controls col-md-8">
                <select class="select form-control" id="absence-end-time" name="absence-end-time">
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
           <div class="form-group " id="div_absence-reason">
            <div class="row vertical-align">
              <label class="control-label requiredField col-md-4" for="absence-end-time">
               Reason
               <span class="asteriskField">
                *
               </span>
              </label>
              <div class="controls col-md-8">
                <select class="select form-control" id="absence-end-time" name="absence-end-time">
                  <option disabled selected value> -- select an option -- </option>
                 <option value="sickness">
                  Sickness
                 </option>
                 <option value="vacation">
                  Vacation
                 </option>
                 <option value="family">
                  Family
                 </option>
                 <option value="other">
                  Other
                 </option>
                </select>
              </div>
            </div>
           </div>
          </form>
           
    
          <div>
           <button id="absence-cancel-btn" class="btn pull-left">Cancel</button>
           <button id="absence-submit-btn" class="btn btn-primary pull-right" name="submit" type="submit">
            Submit
           </button>
          </div>
             
         </div>
         <div class="col-md-1"></div>
        </div>
       </div>
      </div>`;

var absenceTable = `<button type="button" id="newAbsence" class="btn btn-primary btn-block"> New Absence</button>

      <table style="width:100%">
        <tr class="lower-border">
          <td align="center">
            <h5>Mar 15, 2017</h5>
          </td>
          <td align="center">
            <h5>1pm - 2pm</h5>
          </td>
          <td align="center">
            <h5>Family</h5>
          </td>
        </tr>
        <tr class="lower-border">
          <td align="center">
            <h5>Mar 10, 2017</h5>
          </td>
          <td align="center">
            <h5>6pm - 9pm</h5>
          </td>
          <td align="center">
            <h5>Vacation</h5>
          </td>
        </tr>
      </table>`;

$(document).on('click', "#newAbsence", function() {
	document.getElementById("absences").innerHTML = absenceForm;
});

$(document).on('click', "#absence-cancel-btn", function(evt){
  document.getElementById("absences").innerHTML = absenceTable;
});

$(document).on('click', "#absence-submit-btn", function(evt){
	absenceTable = `<button type="button" id="newAbsence" class="btn btn-primary btn-block"> New Absence</button>

      <table style="width:100%">
        <tr class="lower-border">
          <td align="center">
            <h5>Mar 17, 2017</h5>
          </td>
          <td align="center">
            <h5>6pm - 7pm</h5>
          </td>
          <td align="center">
            <h5>Family</h5>
          </td>
        </tr>
        <tr class="lower-border">
          <td align="center">
            <h5>Mar 15, 2017</h5>
          </td>
          <td align="center">
            <h5>1pm - 2pm</h5>
          </td>
          <td align="center">
            <h5>Family</h5>
          </td>
        </tr>
        <tr class="lower-border">
          <td align="center">
            <h5>Mar 10, 2017</h5>
          </td>
          <td align="center">
            <h5>6pm - 9pm</h5>
          </td>
          <td align="center">
            <h5>Vacation</h5>
          </td>
        </tr>
      </table>`;
  document.getElementById("absences").innerHTML = absenceTable;

});

$(document).on('shown.bs.tab', 'a[data-toggle="tab"]', function(e) {
  var target = $(e.target).attr("href") // activated tab
  if (!$(target).is('absences')) {
  	document.getElementById("absences").innerHTML = absenceTable;	
  }
})