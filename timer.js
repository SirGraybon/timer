
const setTimer = function(input) {
  let alarms = input[0].filter(alarm => ((alarm > 0) && (Number(alarm) !== NaN)));
  for (let alarm of alarms) {
    setTimeout(() => {
      process.stdout.write('\x07');
      process.stdout.write(`BEEP @ ${alarm} seconds \n`);
    }, alarm * 1000);
  }
};


setTimer([process.argv.slice(2)])
// setTimer([1, -2, "taco", 4, 6, 3]);