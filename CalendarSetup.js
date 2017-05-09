///set up the My Schedule calendar
function myScheduleSetup() {
	$('#calendar').fullCalendar({
      defaultView: 'agendaWeek', 
      editable: true,
      //eventLimit: true, // allow "more" link when too many events
      header: {
        left: 'prev, next today',
        center: 'title',
        right: 'agendaWeek, agendaDay'
      },
      height: 'auto',
      minTime: '9:00',
      maxTime: '21:00',
      allDaySlot: false,
      slotDuration: "1:00:00",
      selectable: true,
      selectConstraint: 
        {
          dow: [1,3,5],
          start: '13:00',
          end: '21:00',
        },
      events: [
        // {
        //     title  : 'absent',
        //     id     : 'absences',
        //     start  : '2017-05-12T13:00:00',
        //     end    : '2017-05-12T14:00:00',
        //     color  :'red',
        //     startEditable : false,
        //     durationEditable : false
        // },
        // {
        //     title  : 'absent',
        //     id     : 'absences',
        //     start  : '2017-04-10T18:00:00',
        //     end    : '2017-04-10T21:00:00',
        //     color  :'red',
        //     startEditable : false,
        //     durationEditable : false,
        // },
        {
            title  : 'workhour',
            id     : 'workhour',
            dow    : [1,3,5],
            start  : '13:00',
            end    : '21:00',
            color  :'blue',
            startEditable : false,
            durationEditable : false,
            rendering: 'background',
        }
      ],
      eventSources: [myHelpoutSources, absenceSources],
      
      ////////////////////////////////////////
      ///selecting absence time on calendar///
      //////////////////////////////////////// 
      select: function(startDate, endDate, jsEvent, view) {
        startTime = startDate._d;
        startTime.setHours(startTime.getHours() + 4); //actual start time
        endTime = endDate._d;
        endTime.setHours(endTime.getHours() + 4); //actual end time
        
        //bring up new absence form & populates it
        $("#newAbsence").trigger('click');

        var dateText = new Date();
        var month = startTime.getMonth() + 1
        var date = startTime.getDate();
        if (startTime.getMonth() < 10) {
          month = '0' + month;
        }
        if (startTime.getDate() < 10) {
          date = '0' + date;
        }
        dateText = startTime.getFullYear() + '-' + month + '-' + date; 
        $("#absence-date").val(dateText);
        var startText = startTime.getHours() + "am";
        var endText = endTime.getHours() + 'am';
        if (startTime.getHours() > 12) {startText = (startTime.getHours() - 12)+ 'pm';}
        else if (startTime.getHours() == 12) {startText = startTime.getHours() + 'pm';}
        if (endTime.getHours() > 12) { endText = (endTime.getHours() - 12) + 'pm';}
        else if (endTime.getHours() == 12) {endText = endTime.getHours() + 'pm';}
      
        $("#absence-start-time").val(startText);
        $("#absence-end-time").val(endText);

        // WANT: submit - if input valid - call on addEvent()
        // $(document).on('click', "#absence-submit-btn", function(evt)
        // {
        //   var startInput = $('#absenceModal #absence-start-time').val();
        //   var endInput = $('#absenceModal #absence-end-time').val();
        //   var absenceDate = $('#absence-date').val();
        //   addAbsence(absenceDate, startInput, endInput, 'hello');
        // });
    },

    // eventRender: function eventRender( event, element, view ) {
    // 	console.log(['all', event.id].indexOf($('#school_selector').val()) == 1)
    // 	if (event.id == "workhour") {
    // 		return 
    // 	}
    //     return ['all', event.id].indexOf($('#school_selector').val()) == 1
    // }
     // eventRender: function eventRender(event, element, view) {
     // 	console.log(['all', event.d] == 'absences')
     // 	return ['all', event.id] == "absences";

     // }
     //   var checkedEvents = [   
     //   {
     //        title  : 'workhour',
     //        id     : 'workhour',
     //        dow    : [1,3,5],
     //        start  : '13:00',
     //        end    : '21:00',
     //        color  :'blue',
     //        startEditable : false,
     //        durationEditable : false,
     //        rendering: 'background',
     //    }];
     //   if (document.getElementById('show-absences').checked == true) {
     //     checkedEvents = checkedEvents.concat(['all', event.id] == 'absences');
     //   }
     //   if (document.getElementById('show-helpouts').checked == true) {
     //     checkedEvents = checkedEvents.concat(['all', event.id] == 'helpouts');
     //   }
     //   console.log(checkedEvents);
     //   return checkedEvents;
     //   //return ['all', event.school].indexOf($('#school_selector').val()) >= 0
     // }
  });
}
