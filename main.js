
const{fork} = require('child_process');

console.log('Starting computation...');

const child = fork('file1.js');
child.send({ number: 40 });

child.on('message',(data)=>{
    console.log('Respone received,', data);
})

console.log('Computation done!');
//console.log(fib(40));
