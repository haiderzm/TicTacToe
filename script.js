var count = 0;
var clicked = new Array(0,0,0,0,0,0,0,0,0);

function checkUnClickCount(){
    let c = 0;
    for (let i = 0; i <clicked.length; ++i){
        if(clicked[i] == 0){
            c++;
        }
    }
    return c;
}

function checkWinStatus(){
    var p1 = document.getElementById("p1").innerHTML;
    var p2 = document.getElementById("p2").innerHTML;
    var p3 = document.getElementById("p3").innerHTML;
    var p4 = document.getElementById("p4").innerHTML;
    var p5 = document.getElementById("p5").innerHTML;
    var p6 = document.getElementById("p6").innerHTML;
    var p7 = document.getElementById("p7").innerHTML;
    var p8 = document.getElementById("p8").innerHTML;
    var p9 = document.getElementById("p9").innerHTML;

    if(p1 == p2 && p2 == p3){
        if(p1 == 'X'){
            document.getElementById('res').innerHTML = 'Player 1 won the match!'
        }
        else{
            document.getElementById('res').innerHTML = 'Player 2 won the match!'
        }
    }
    else if(p4 == p5 && p5 == p6){
        if(p4 == 'X'){
            document.getElementById('res').innerHTML = 'Player 1 won the match!'
        }
        else{
            document.getElementById('res').innerHTML = 'Player 2 won the match!'
        }
    }
    else if(p7 == p8 && p8 == p9){
        if(p7 == 'X'){
            document.getElementById('res').innerHTML = 'Player 1 won the match!'
        }
        else{
            document.getElementById('res').innerHTML = 'Player 2 won the match!'
        }
    }
    else if(p1 == p5 && p5 == p9){
        if(p1 == 'X'){
            document.getElementById('res').innerHTML = 'Player 1 won the match!'
        }
        else{
            document.getElementById('res').innerHTML = 'Player 2 won the match!'
        }
    }
    else if(p3 == p5 && p5 == p7){
        if(p3 == 'X'){
            document.getElementById('res').innerHTML = 'Player 1 won the match!'
        }
        else{
            document.getElementById('res').innerHTML = 'Player 2 won the match!'
        }
    }
    else if(p1 == p4 && p4 == p7){
        if(p1 == 'X'){
            document.getElementById('res').innerHTML = 'Player 1 won the match!'
        }
        else{
            document.getElementById('res').innerHTML = 'Player 2 won the match!'
        }
    }
    else if(p2 == p5 && p5 == p8){
        if(p2 == 'X'){
            document.getElementById('res').innerHTML = 'Player 1 won the match!'
        }
        else{
            document.getElementById('res').innerHTML = 'Player 2 won the match!'
        }
    }
    else if(p3 == p6 && p6 == p9){
        if(p3 == 'X'){
            document.getElementById('res').innerHTML = 'Player 1 won the match!'
        }
        else{
            document.getElementById('res').innerHTML = 'Player 2 won the match!'
        }
    }
    else{
        if(checkUnClickCount() == 0){
            document.getElementById('res').innerHTML = 'Match Draw!'
        }
    }
}

function Clicked1(){
    var btnpos = document.getElementById("p1").innerHTML;
    if(clicked[btnpos-1] == 0){
    if(count % 2 == 0){
        document.getElementById("p1").innerHTML = 'X'
        count++;
        clicked[btnpos-1] = 1;
    }
    else{
        document.getElementById("p1").innerHTML = 'O'
        count++;
        clicked[btnpos-1] = 1;
    }
    }
    checkWinStatus()
}
function Clicked2(){
    var btnpos = document.getElementById("p2").innerHTML;
    if(clicked[btnpos-1] == 0){
        if(count % 2 == 0){
            document.getElementById("p2").innerHTML = 'X'
            count++;
            clicked[btnpos-1] = 1;
        }
        else{
            document.getElementById("p2").innerHTML = 'O'
            count++;
            clicked[btnpos-1] = 1;
        }
        }
        checkWinStatus()
}
function Clicked3(){
    var btnpos = document.getElementById("p3").innerHTML;
    if(clicked[btnpos-1] == 0){
        if(count % 2 == 0){
            document.getElementById("p3").innerHTML = 'X'
            count++;
            clicked[btnpos-1] = 1;
        }
        else{
            document.getElementById("p3").innerHTML = 'O'
            count++;
            clicked[btnpos-1] = 1;
        }
        }
        checkWinStatus()
}
function Clicked4(){
    var btnpos = document.getElementById("p4").innerHTML;
    if(clicked[btnpos-1] == 0){
        if(count % 2 == 0){
            document.getElementById("p4").innerHTML = 'X'
            count++;
            clicked[btnpos-1] = 1;
        }
        else{
            document.getElementById("p4").innerHTML = 'O'
            count++;
            clicked[btnpos-1] = 1;
        }
        }
        checkWinStatus()
}
function Clicked5(){
    var btnpos = document.getElementById("p5").innerHTML;
    if(clicked[btnpos-1] == 0){
        if(count % 2 == 0){
            document.getElementById("p5").innerHTML = 'X'
            count++;
            clicked[btnpos-1] = 1;
        }
        else{
            document.getElementById("p5").innerHTML = 'O'
            count++;
            clicked[btnpos-1] = 1;
        }
        }
        checkWinStatus()
}
function Clicked6(){
    var btnpos = document.getElementById("p6").innerHTML;
    if(clicked[btnpos-1] == 0){
        if(count % 2 == 0){
            document.getElementById("p6").innerHTML = 'X'
            count++;
            clicked[btnpos-1] = 1;
        }
        else{
            document.getElementById("p6").innerHTML = 'O'
            count++;
            clicked[btnpos-1] = 1;
        }
        }
        checkWinStatus()
}
function Clicked7(){
    var btnpos = document.getElementById("p7").innerHTML;
    if(clicked[btnpos-1] == 0){
        if(count % 2 == 0){
            document.getElementById("p7").innerHTML = 'X'
            count++;
            clicked[btnpos-1] = 1;
        }
        else{
            document.getElementById("p7").innerHTML = 'O'
            count++;
            clicked[btnpos-1] = 1;
        }
        }
        checkWinStatus()
}
function Clicked8(){
    var btnpos = document.getElementById("p8").innerHTML;
    if(clicked[btnpos-1] == 0){
        if(count % 2 == 0){
            document.getElementById("p8").innerHTML = 'X'
            count++;
            clicked[btnpos-1] = 1;
        }
        else{
            document.getElementById("p8").innerHTML = 'O'
            count++;
            clicked[btnpos-1] = 1;
        }
        }
        checkWinStatus()
}
function Clicked9(){
    var btnpos = document.getElementById("p9").innerHTML;
    if(clicked[btnpos-1] == 0){
        if(count % 2 == 0){
            document.getElementById("p9").innerHTML = 'X'
            count++;
            clicked[btnpos-1] = 1;
        }
        else{
            document.getElementById("p9").innerHTML = 'O'
            count++;
            clicked[btnpos-1] = 1;
        }
        }
        checkWinStatus()
}
