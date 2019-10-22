let x = process.argv.slice(2).sort();
x.forEach(element => {
  if ((Number(element) > 0 )) {
    setTimeout(() => {
    process.stdout.write('\x07')
  }, element * 1000)
  }
});
