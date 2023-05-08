const args = process.argv.slice(2);

// sort the arguments in ascending order
args.sort((a, b) => a - b);

// set the alarms
args.forEach((arg) => {
  setTimeout(() => {
    process.stdout.write('\x07');
  }, arg * 1000);
});