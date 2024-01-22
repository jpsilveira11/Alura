alert('Olá!');

const range=100;
const key=Math.floor(Math.random() * range) + 1;
//const key=5;

let attempts=1;
let answer=prompt(`Escolha um número entre 1 e ${range}`);

while (answer!=key){
    const biggerOrLower=answer>key ? 'menor':'maior'
    answer=prompt(`A resposta é ${biggerOrLower} que ${answer}, tente outra vez.`);
    attempts++;
}

const result= attempts==1 ? 'Você achou a resposta em uma única tentativa! Mandou bem!' : `Parabéns, você acertou em ${attempts} tentativas!`;
alert(result);