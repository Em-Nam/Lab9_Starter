let log = document.getElementById('log');
log.addEventListener('click', function () 
{
    console.log("First operand: " + document.getElementById('first-num').value);
    console.log("Second operand: " + document.getElementById('second-num').value);
    console.log(document.getElementById('operator').value);
    console.log(document.getElementById('result').value);
});

let error = document.getElementById('error');
error.addEventListener('click', function () 
{
    if ((document.getElementById('second-num').value == 0) && (document.getElementById('operator').value == '/')){
        console.error("Cannot divide by zero");
    }
});

let count = document.getElementById('count');
count.addEventListener('click', function () 
{
    console.count('Console Count clicked:' );
});

let warn = document.getElementById('warn');
warn.addEventListener('click', function () 
{
    if ((document.getElementById('second-num').value == 0) && (document.getElementById('operator').value == '/')){
        console.warn("Tried to divide by zero");
    }
});

let assert = document.getElementById('assert');
assert.addEventListener('click', function () 
{
    let expected;
    let result = document.getElementById('result').value;
    let op1 = parseInt(document.getElementById('first-num').value);
    let op2 = parseInt(document.getElementById('second-num').value);
    let op = document.getElementById('operator').value;
    
    if (op == '+'){
        expected = op1 + op2;
    }
    if (op == '*'){
        expected = op1 * op2;
    }
    if (op == '-'){
        expected = op1 - op2;
    }
    if (op == '/' && op2 != 0){
        expected = op1 / op2;
    }

    console.assert(expected == result);

});


let clear = document.getElementById('clear');
clear.addEventListener('click', function () 
{
    console.clear();
});

let dir = document.getElementById('dir');
dir.addEventListener('click', function () 
{
    console.dir(document.head);
});

let dirxml = document.getElementById('dirxml');
dirxml.addEventListener('click', function () 
{
    console.dirxml(document.head);
});


let groupStart = document.getElementById('groupStart');
groupStart.addEventListener('click', function () 
{
    console.group("Group");
});


let groupEnd = document.getElementById('groupEnd');
groupEnd.addEventListener('click', function () 
{
    console.groupEnd("Group");
});


let table = document.getElementById('table');
table.addEventListener('click', function () 
{
    let op1 = parseInt(document.getElementById('first-num').value);
    let op2 = parseInt(document.getElementById('second-num').value);
    console.table([
        {first: op1, 
        second: op2}
    ]);
});

let startTimer = document.getElementById('startTimer');
startTimer.addEventListener('click', function () 
{
    console.time();
});


let endTimer = document.getElementById('endTimer');
endTimer.addEventListener('click', function () 
{
    console.timeEnd();
});


let trace = document.getElementById('trace');
trace.addEventListener('click', function () 
{
    console.trace();
});