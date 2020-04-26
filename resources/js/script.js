const date = new Date();

const formatUnit = unit => ("0"+unit).slice(-2);

const hr = formatUnit(date.getHours());
const min = formatUnit(date.getMinutes());
const sec = formatUnit(date.getSeconds());

let i = 0;
let dots = 0;
const welcome = document.getElementById("welcometxt");
const { innerHTML } = welcome;
welcome.innerHTML="";

const typing = () => {
    if (dots<=16) {         
        welcome.innerHTML += "."; 
        if (dots%4===0) welcome.innerHTML="";
        dots++;
        setTimeout(typing, 150)
    }
    else {
        writeWelcome()
    }
}

const writeWelcome = () => {
    if (i<innerHTML.length) {
        welcome.innerHTML+=innerHTML.charAt(i);
        setTimeout(writeWelcome, 15);
    } else {
        document.getElementById("welcometime").innerHTML = `✓ Seen at ${hr}:${min}:${sec}`;
    }
    i++;


}