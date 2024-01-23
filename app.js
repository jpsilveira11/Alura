const gap=10;
let attempts;
let number;
let numbers=[];

newGame();

function print(tag,content){
    let element=document.querySelector(tag);
    element.innerHTML=content;
    responsiveVoice.speak(content, 'Brazilian Portuguese Female', {rate:1.2})
}

function clearInput(){
    field=document.querySelector('input');
    field.value='';
}

function generateNumber(){
    let number=parseInt(Math.random()*gap+1);
    let lenghtOfNumbers=numbers.length;

    if (lenghtOfNumbers==3) numbers=[];

    if (numbers.includes(number)) {
        return generateNumber();
    }else{
        numbers.push(number);
        return number;
    }
}

function verificarChute(){
    let answer=document.querySelector('input').value;
    const biggerOrLower=answer>number? 'menor':'maior';
    const feedback=attempts==1?'Você acertou em uma única tentativa!':`Você acertou em ${attempts} tentativas.`

    if (answer==number){
        print('h1','Parabéns!');
        print('p',feedback);
        document.querySelector('button').setAttribute('disabled',true);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        print('p',`O número é ${biggerOrLower} que ${answer}`)
        attempts++;
        clearInput();
        }
}

function newGame(){
    number=generateNumber();
    attempts=1;
    print('h1','Adivinhe o Número');
    print('p',`Chute um número entre 1 e ${gap}`);
    document.querySelector('button').removeAttribute('disabled');
    document.getElementById('reiniciar').setAttribute('disabled',true);
}

function reloadPage(){
    location.reload();
}