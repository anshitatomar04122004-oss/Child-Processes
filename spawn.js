
const{spawn} = require('child_process');

console.log('Starting computation...');

const child = spawn('cmd',['/c', 'echo %cd%']);

child.stdout.on('data',(data)=>{
    console.log(data.toString());
})

child.stderr.on('data',(err)=>{
    console.error(err.toString());
})

child.on('close',(code)=>{
    console.log('Child process closed', code);
})


console.log('Computation done!');
