var signs = ["Aquarius", "Pisces", "Aries", "Taurus", "Gemini", "Cancer" , "Leo" , "Virgo" , "Libra" , "Scorpio" , "Sagittarius", "Capricorn" ];
var pre_message = "you are a";
var messages = [
    pre_message + signs[0] ,
    pre_message + signs[1],
    pre_message + signs[2] ,
    pre_message + signs[3],
    pre_message + signs[4],
    pre_message + signs[5],
    pre_message + signs[6],
    pre_message + signs[7],
    pre_message + signs[8],
    pre_message + signs[9],
    pre_message + signs[10],
    pre_message + signs[11]
];
var images = [];
function go(){
    onSubmit();
}

function onSubmit() {
    var day  = document.getElementById("day").value
    var month  = document.getElementById("month").value

    console.log(determineSign(day,month));
    var userSign = determineSign(day, month);
    console.log( signs[determineSign(day, month)]);
    console.log(messages[userSign]);
}


function determineSign(day, month){
//january
if(month == 0){
    if(day > 31){
        return 0;
    } else {
        if (day <= 20) {
            return 12;
        } else {
            return 1;
        }
    }
//February

if(month == 1){
    if(day > 28){
        return 1;
    } else {
        if (day <= 19) {
            return 2;
        }
    }

//march
if(month == 2){
    if(day > 31){
        return 2;
    } else {
        if (day <= 21) {
            return 3;
        }
    }

//april
if(month == 3){
    if(day > 30){
        return 3;
    } else {
        if (day <= 20) {
            return 4;
        }
    }

//may
if(month == 4){
    if(day > 31){
        return 4;
    }else {
        if (day <= 21) {
            return 5;
        }
    }
//june
if(month == 5){
    if(day > 30){
        return 5;
    } else {
        if (day <= 21) {
            return 6;
        }
    }

//july
if(month == 6){
    if(day > 31){
        return 6;
    } else {
        if (day <= 23) {
            return 7;
        }
    }

//august
if(month == 7){
    if(day > 31){
        return 7
    } else {
        if (day <= 23) {
            return 8;
        }
    }
//september
if(month == 8){
    if(day > 30){
        return 8;
    } else {
        if (day <= 23) {
            return 9;
        }
    }

//october
if(month == 9){
    if(day >31){
        return 9;
    } else {
        if (day <= 23) {
            return 10;
        }
    }

//november
if(month == 10){
    if(day > 30){
        return 10;
    } else {
        if (day <= 22) {
            return 11;
        }
    }

//december
if(month == 11){
    if(day > 31){
        return 11;
    } else {
    if (day <= 22) {
        return 0;
    }
}
