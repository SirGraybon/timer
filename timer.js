
const setTimer = function(timer) {
  console.log(timer)
  let alarms = timer.sort((a,b) => a - b)
  let filteredAlarms = alarms.filter(alarm => ((alarm > 0) && (typeof(alarm) === "number")) )
  console.log(alarms)
  console.log(filteredAlarms)
 
  for (let alarm of filteredAlarms) {


    setTimeout(() => {
      process.stdout.write('\x07')
      process.stdout.write(`BEEP @ ${alarm} seconds \n`);
    }, alarm * 1000);
  }
};
  

setTimer(process.argv.slice(2))