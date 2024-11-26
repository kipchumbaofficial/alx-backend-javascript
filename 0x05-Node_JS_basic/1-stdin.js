// Program that uses STDIN

console.log('Welcome to Holberton School, what is your name?');

// Handle user input from stdin
process.stdin.on('data', (data) => {
  const input = data.toString().trim();
  console.log(`Your name is: ${input}`);
});

// Handle graceful exit when the program is terninated
process.on('SIGINT', () => {
  console.log('This important software is now closing');
  process.exit(0);
});
