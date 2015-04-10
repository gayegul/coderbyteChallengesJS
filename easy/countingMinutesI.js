'use strict';

/*
Have the function CountingMinutesI(str) take the str parameter
being passed which will be two times (each properly formatted with
a colon and am or pm) separated by a hyphen and return the total
number of minutes between the two times. The time will be in a 12 hour
clock format. For example: if str is 9:00am-10:00am then the output
should be 60.
*/

function CountingMinutesI(str) {
  var twoTimes =  str.split(/\-/);
  var secondTime = timeToMinute(twoTimes[1]);
  var firstTime = timeToMinute(twoTimes[0]);
  result = secondTime - firstTime;
  if(result < 0) {
    result += 1440;
  }
  return result;
}

function timeToMinute(str) {
    var timeSplitted = str.split(/(:|a|p)/);
    var hour = Number(timeSplitted[0]);
    var minute = Number(timeSplitted[2]);
    var isPM = timeSplitted[3] === 'p';
    if(isPM) {
      hour = (hour === 12) ? hour : hour + 12;
    } else {
      hour = (hour === 12) ? 0 : hour;
    }
    return hour * 60 + minute;
}
