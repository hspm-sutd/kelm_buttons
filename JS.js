let sum = 0;
parseInt(sum);
let num = prompt('Введите числа через пробел');
let arr = num.split(' ');

for (let i = 0; i < arr.length; i++) {
    sum = sum + parseInt(arr[i]);
}
alert('Сумма = ' + (sum));

function Click1() {
    document.body.style.fontFamily = 'Times New Roman';
    document.body.style.color = "blue";
};

function Click2() {
    document.getElementById('div2').style.background = "linear-gradient(LightCoral, Red)";
    document.getElementById('text2').style.background = "white";
    document.getElementById('text2').style.mixBlendMode = "screen";
    document.getElementById('text2').style.color = "black";
};