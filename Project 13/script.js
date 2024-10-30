const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerSet = "abcdefghijklmnopqrstuvwxyz";
const numberSet = "1234567890";
const symbolSet = "~!@#$%^&*()_+/";

const passBox = document.getElementById('passBox');
const totalChar = document.getElementById('total-char');
const upperCase = document.getElementById('upperCase');
const lowerCase = document.getElementById('lowerCase');
const number = document.getElementById('number');
const symbols = document.getElementById('symbols');

const getRandomData = (dataSet) => {
    return dataSet[Math.floor(Math.random() * dataSet.length)]
}

const generatePassword = (password = "") => {
    if(upperCase.checked){
        password += getRandomData(upperSet);
    }
    if(lowerCase.checked){
        password += getRandomData(lowerSet);
    }
    if(number.checked){
        password += getRandomData(numberSet);
    }
    if(symbols.checked){
        password += getRandomData(symbolSet);
    }
    if(password.length < totalChar.value){
        return generatePassword(password);
    }
    passBox.innerText = truncateString(password , totalChar.value);
}

document.getElementById('btn').addEventListener(
    "click" , 
    function(){
        generatePassword();
    }
)

function truncateString(str , num){
    if(str.length > num){
        let subStr = str.substring(0 , num);
        return subStr;
    }else{
        return str;
    }
}

