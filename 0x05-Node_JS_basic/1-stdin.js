// Program that uses STDIN

process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Handle user input from stdin
process.stdin.on('readable', () => {
  const input = process.stdin.read();

  if (input) {
    process.stdout.write(`Your name is: ${input}`);
  }
});

// Handle graceful exit when the program is terninated
process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
