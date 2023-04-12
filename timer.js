
const setTimer = function(input) {
  let timer = (input[0])
  console.log(timer);
  let alarms = timer.filter(alarm => ((alarm > 0) && (Number(alarm) !== NaN)));
  console.log(alarms);
  let sortedAlarms = alarms.sort((a, b) => a - b);
  console.log(sortedAlarms);

  for (let alarm of sortedAlarms) {


    setTimeout(() => {
      process.stdout.write('\x07');
      process.stdout.write(`BEEP @ ${alarm} seconds \n`);
    }, alarm * 1000);
  }
};


setTimer([process.argv.slice(2)])
// setTimer([1, -2, "taco", 4, 6, 3]);