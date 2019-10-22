const stdin = process.stdin;
// don't worry about these next two lines of setup work.
stdin.setRawMode(true);
stdin.setEncoding('utf8');

////////////
// Event Handling for User Input
////////////
numbers = {
  1:1,
  2:2,
  3:3,
  4:4,
  5:5,
  6:6,
  7:7,
  8:8,
  9:9
}; 

// on any input from stdin (standard input), output a "." to stdout
stdin.on('data', (key) => {
  if (key === 'b') {
    process.stdout.write('\x07')
  } else if (key === '\u0003') {
    console.log("Thanks for using me, caio!")
    process.exit();
  } else if (key in numbers) {
    setTimeout(() => {
      process.stdout.write('\x07')
    }, 1000 * key)
  }

  })






console.log('after callback');