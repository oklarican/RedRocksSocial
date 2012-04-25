function dtConverter(datetime) {
/* Richard Twiggs, October 28, 2011
   How this works:
   The parameter datetime is the time the message was posted to the wall.
   This function returns a string that says how long ago datetime occurred:
   ex. If datetime was 30 seconds ago(from the time this function was run)
   it will return: '30 seconds ago'
   
   This happens because this function subtracts datetime from currenttime and
   decides how long ago that happened.
  
   If the difference is >= 1 month worth of milliseconds return the date it was
   posted, not '1 month ago'.
   
   I be tossin, enforcin, my style is awesome
   I'm causin more Family Feud's than Richard Dawson
   And the survey said -- ya dead
   Fatal Flying Guillotine chops off your fuckin head.
                  -Wu Tang Clan
*/

/*
   1 second = 1000 milliseconds
   1 minute = 60000 milliseconds
   1 hour = 3600000 milliseconds
   1 day = 86400000 milliseconds
   1 week = 604800000 milliseconds
*/

   var curr_dt = new Date();
   var outputDTString = null;
   /* JavaScript is dumb so you can't just send it a partial date+time string and
      expect it to figure it out.  You have to re-constitute the partial string
      back into a date object.  That's what this next few lines does.
   */
   thepattern = /(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})/g;
   var dateArray = thepattern.exec(datetime); 
   dateObject = new Date(
       dateArray[1],
       dateArray[2]-1, // Careful, month starts at 0!
       dateArray[3],
       dateArray[4],
       dateArray[5],
       dateArray[6]
   );
   
   /* diff is important.  It is the difference between the current time and the
      datetime parameter pass to this program in milliseconds.
   */
   diff = curr_dt.getTime() - dateObject.getTime();

   if(diff < 60000)  {  //seconds
      outputDTString = (Math.round(diff/1000) + " seconds ago");
   }
   
   if(diff < 3600000 && diff > 60000)  {   // lt 1 hour and gt 1 minute
      min = Math.floor(diff / 60000);
      
      if(diff < 120000) {  //not yet more than 1 minute
         outputDTString = min + " minute ago";
      }  else  {
         outputDTString = min + " minutes ago";
      }
   }
   
   if(diff < 86400000 && diff > 3600000)  {  // lt 1 day and gt 1 hour
         minms = diff % 3600000;
         min = Math.floor(minms / 60000);
         hour = Math.floor(diff/3600000);
         
      if(diff < 7200000) { //not yet 2 hours
         if(min == 1) {
            outputDTString = hour + " hour, " + min + " minute ago";
         }  else  {
            outputDTString = hour + " hour, " + min + " minutes ago";
         }
      }  else  {
         if(min == 1)   {
            outputDTString = hour + " hours, " + min + " minute ago";
         }  else  {
         outputDTString = hour + " hours, " + min + " minutes ago";
         }
         
      }
   }
   
   if(diff < 604800000 && diff > 86400000)  {   // lt 1 week and gt 1 day
         day = Math.floor(diff/86400000);
         hour = Math.floor((diff % 86400000)/3600000);   //after #days this is remainder of hours.
         
      if(diff < 172800000) {  // not yet 2 days
         if(hour < 2) { //not yet 2 hours
            outputDTString = day + " day " + hour + " hour ago"  ;
         }  else  {
            outputDTString = day + " day " + hour + " hours ago"  ;
         }
      }  else  {
         if(hour < 2) { //not yet 2 hours
            outputDTString = day + " days " + hour + " hour ago"  ;
         }  else  {
            outputDTString = day + " days " + hour + " hours ago"  ;
         }
      }
   }
   
   if(diff > 604800000)  { // gt one week just show the date string.
       month=null;
       if(dateArray[2] == 1) { month= "January";}
       if(dateArray[2] == 2) { month= "Febuary";}
       if(dateArray[2] == 3) { month= "March";}
       if(dateArray[2] == 4) { month= "April";}
       if(dateArray[2] == 5) { month= "May";}
       if(dateArray[2] == 6) { month= "June";}
       if(dateArray[2] == 7) { month= "July";}
       if(dateArray[2] == 8) { month= "August";}
       if(dateArray[2] == 9) { month= "September";}
       if(dateArray[2] == 10) { month= "October";}
       if(dateArray[2] == 11) { month= "November";}
       if(dateArray[2] == 12) { month= "December";}
       outputDTString = month + " " + dateArray[3] + ", " + dateArray[1];
   }
   return outputDTString;
}
