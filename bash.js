const pwd = require('./pwd');
// require('./pwd');

// // Output prompt
process.stdout.write('promt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data' , (data) =>{
  const cmd = data.toString().trim(); // remove the newline
    if (cmd === 'pwd'){
      pwd();
      // console.log(require('./pwd'));
      // process.stdout.write(__dirname);
    }else{
      process.stdout.write('You typed: ' + cmd);
    }
  process.stdout.write('\nprompt > ');
})



// // --dirname

