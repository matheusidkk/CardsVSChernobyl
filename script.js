const body = document.querySelector('body');
let arrastavel = document.querySelectorAll('.arrastavel');
const bloco = document.querySelector('.bloco');
const pal = document.querySelectorAll('.pal');
const resultado = document.querySelector('.resultado');
const organizador = document.querySelector('.organizador');
const main = document.querySelector('main')
const chatBotao = document.querySelector('.chatBotao');
const chat = document.querySelector('.chat');
const pontuacao = document.querySelector('.pontuacao')
let temporizador = document.querySelector('.tempo');
const testar = document.querySelector('.testar');
const screenshotImg = document.querySelectorAll('.screenshot-img');
const imagens = document.querySelector('.imagens');
const messagens = document.querySelector('.messagens');


const nome = localStorage.getItem('nome');

console.log(nome)

let chatAtivado = false;
let tempoCronometro = 15;
let cardnamesa;
let frente = 8;
let printGanhador;


function organizar() {
arrastavel[0].style.left = '5%';
arrastavel[0].style.transform = 'rotate(-20deg)'
arrastavel[0].style.zIndex = '1';
arrastavel[1].style.left = '15%';
arrastavel[1].style.transform = 'rotate(-15deg)'
arrastavel[1].style.zIndex = '2';
arrastavel[2].style.left = '25%';
arrastavel[2].style.transform = 'rotate(-10deg)'
arrastavel[2].style.zIndex = '3';
arrastavel[3].style.left = '35%';
arrastavel[3].style.transform = 'rotate(-5deg)'
arrastavel[3].style.zIndex = '4';
arrastavel[4].style.left = '45%';
arrastavel[4].style.transform = 'rotate(0deg)'
arrastavel[4].style.zIndex = '5';
arrastavel[5].style.left = '55%';
arrastavel[5].style.transform = 'rotate(5deg)'
arrastavel[5].style.zIndex = '6';
arrastavel[6].style.left = '65%';
arrastavel[6].style.transform = 'rotate(10deg)'
arrastavel[6].style.zIndex = '7';
arrastavel[7].style.left = '75%';
arrastavel[7].style.transform = 'rotate(15deg)'
arrastavel[7].style.zIndex = '8';
arrastavel.forEach (item =>
    item.style.top = '500px');
    frente = 8;
};

organizador.addEventListener('click', function() {
    organizar();
})


function escolherGanhador() {
    for (let i = 0; i < arrastavel.length; i ++) {

        if (arrastavel[i].offsetLeft > -10 && arrastavel[i].offsetLeft < 870 && arrastavel[i].offsetTop > -10 && arrastavel[i].offsetTop < 225) {

            maoEscolhida = cartasPossiveis[Math.floor(Math.random() * cartasPossiveis.length)];
            const corAleatoria = Math.floor(Math.random() * cores.length);
            const corEscolhida = cores[corAleatoria];
            arrastavel[i].style.background = corEscolhida;
            arrastavel[i].innerHTML = maoEscolhida;
        }
    }

    arrastavel.forEach(item =>
    item.style.display = 'none'
    );
    bloco.style.display = 'none';
    organizador.disabled = true;
    testar.style.display = 'block';

    testar.addEventListener('click', function() {
        jogando();
    });

    imagens.style.display = 'flex';
};


function jogando() {
    screenshotImg.forEach(imagem => {
        imagem.style.filter == 'none';
    });

    bloco.style.display = 'flex';
    organizador.disabled = false;
    testar.style.display = 'none';
    resultado.disabled = false;
    imagens.style.display = 'none';

    pal.forEach(item =>
        item.innerHTML = ' ');

    organizar()
        
    arrastavel.forEach(item =>
        item.style.display = 'flex'
    )
};


chatBotao.addEventListener('click', function() {
if (chatAtivado == false) {
    chatBotao.style.marginRight = '255px';
    pontuacao.style.marginRight = '255px';
    chat.style.marginRight = '0';
    chatAtivado = true;
} else {
    chatBotao.style.marginRight = '0';
    pontuacao.style.marginRight = '0';
    chat.style.marginRight = '-250px';
    chatAtivado = false;
};
});

// Define o array com as cores das cartas
const cores = [
'#98c6f5',
'#ba98f5',
'#f598bd',
'#f5ac98',
'#f3f598',
'#a1f598',
'white',
]

// Função para escolher aleatoriamente uma cor e aplicar nas cartas
function coresLoad() {
arrastavel[0].style.left = '5%';
arrastavel[0].style.transform = 'rotate(-20deg)'
arrastavel[1].style.left = '15%';
arrastavel[1].style.transform = 'rotate(-15deg)'
arrastavel[2].style.left = '25%';
arrastavel[2].style.transform = 'rotate(-10deg)'
arrastavel[3].style.left = '35%';
arrastavel[3].style.transform = 'rotate(-5deg)'
arrastavel[4].style.left = '45%';
arrastavel[4].style.transform = 'rotate(0deg)'
arrastavel[5].style.left = '55%';
arrastavel[5].style.transform = 'rotate(5deg)'
arrastavel[6].style.left = '65%';
arrastavel[6].style.transform = 'rotate(10deg)'
arrastavel[7].style.left = '75%';
arrastavel[7].style.transform = 'rotate(15deg)'

arrastavel.forEach(item => {
maoEscolhida = cartasPossiveis[Math.floor(Math.random() * cartasPossiveis.length)];
item.innerHTML = maoEscolhida;
const corAleatoria = Math.floor(Math.random() * cores.length);
const corEscolhida = cores[corAleatoria];
item.style.background = corEscolhida;
})
};


// Variáveis para armazenar as palavras escolhidas
let maoEscolhida
let escolhida1;
let escolhida2;
let escolhida3;
let escolhida4;

// Arrays com as palavras possíveis
let cartasPossiveis = [
'coco',
'peido',
'xixi',
'vagina',
'thais carla',
'mordor',
'fortnite',
'chernobyl',
'raluca',
'e cometi suicidio',
'e fiz um genocidio',
'e comi ranho',
'e entrei em uma escola com uma machadinha',
'e martelei ele',
'e atirei nele',
'e bati nele',
'no cemiterio',
'gil do vigor',
'wesker',
'ana julia tomoko',
'cu',
'tua mãe',
'Eu comi o cu do',
'Eu dei uma pingolada no',
'Eu mijei no',
'bruno',
'tiquinha',
'al',
'E fiz uma guerra',
'Eu sequestrei o',
'Eu enfiei o dedo no cu do',
'Eu caguei no',
'bluezão',
'é uma merda',
'thiago',
'rafael biel',
]


let palavras1 = [
    'Se eu ver o',
    'Não tem nada pior do que o',
    'Eu caguei no',
    'Eu bati com o',
    'Matei o',
    'Eu joguei o',
    'Eu peidei no',
    'Eu enfiei o rodo no'
];

let palavras2 = [
'meu coco',
'abajur',
'dildo',
'ninja',
'kami',
'bluezão',
'deus de chernobyl',
'diabo',
'nando moura',
'ralador de queijo',
'rodo',
'computador',
'everson zoio',
'bruno',
'tiquinha',
'al'
'thiago',
'rafael biel',
];

let palavras3 = [
'no vaso',
'na cozinha',
'na cracolandia',
'na arabia',
'em chernobyl',
'ao vivo',
];

let palavras4 = [
'e gostei',
'e odiei',
'e chorei',
'e caguei',
'e acabei todo mijado',
'e depois vomitei la',
'e tirei uma foto',
'e dei um mortal',
];

// Adiciona um evento de clique ao resultado para escolher aleatoriamente as palavras
resultado.addEventListener('click', function() {

    resultado.disabled = true;

    let intervalId = setInterval(atualizarTempo, 1000);
    let tempoAtual = tempoCronometro;

    function atualizarTempo() {
        temporizador.innerHTML = '⏳' + tempoAtual;
        tempoAtual --;

        if (tempoAtual < 0) {
                // Usando html2canvas para capturar a div e gerar uma imagem
            html2canvas(main).then(canvas => {
                const imgData = canvas.toDataURL('image/png');
    
                    // Armazenando a imagem em um elemento img para exibi-la mais tarde
                screenshotImg.forEach (imagem =>
                    imagem.src = imgData);
            }
        );

            clearInterval(intervalId);
            tempoAtual = tempoCronometro;
            escolherGanhador();
        }
    }
    // Escolhe aleatoriamente uma posição para deixar em branco
let vazio = Math.floor(Math.random() * 4 + 1);

        // Escolhe uma palavra aleatoriamente para cada posição, exceto a que foi escolhida para ficar em branco
if (vazio !== 1)
{
    escolhida1 = palavras1[Math.floor(Math.random() * palavras1.length)]
} else {
    escolhida1 = ' ';
};

if (vazio !== 2)
{
    escolhida2 = palavras2[Math.floor(Math.random() * palavras2.length)];
} else {
    escolhida2 = ' ';
};

if (vazio !== 3)
{
    escolhida3 = palavras3[Math.floor(Math.random() * palavras3.length)];
} else {
    escolhida3 = ' ';
};

if (vazio !== 4)
{
    escolhida4 = palavras4[Math.floor(Math.random() * palavras4.length)];
} else {
    escolhida4 = ' ';
};


pal[0].innerHTML = escolhida1;
pal[1].innerHTML = escolhida2;
pal[2].innerHTML = escolhida3;
pal[3].innerHTML = escolhida4;
});


let namesa = 0;
pal[0].addEventListener('mouseover', function() {
namesa = 1;
});
pal[1].addEventListener('mouseover', function() {
namesa = 2;
});
pal[2].addEventListener('mouseover', function() {
namesa = 3;
});
pal[3].addEventListener('mouseover', function() {
namesa = 4;
});

// Aplica as palavras escolhidas aos elementos HTML correspondentes
pal[0].addEventListener('mouseout', resetNamesa);
pal[1].addEventListener('mouseout', resetNamesa);
pal[2].addEventListener('mouseout', resetNamesa);
pal[3].addEventListener('mouseout', resetNamesa);

function resetNamesa() {
    namesa = false;
}

let mouseX, mouseY, escolhido;


for (i = 0; i < arrastavel.length; i++) {

    arrastavel[i].addEventListener ('mousedown', function() {
        escolhido = this;
        frente ++;
    });

    document.addEventListener('mousemove', function(e) {
        mouseX = e.clientX - 90;
        mouseY = e.clientY - 90;

        if (escolhido != null) {
            escolhido.style.left = mouseX + 'px';
            escolhido.style.top = mouseY + 'px';
            escolhido.style.zIndex = frente;

            
            //Girar a carda dependendo do lugar em que ela esta
            let cardX = escolhido.offsetLeft;
            let bodyX = body.offsetWidth;
            let angle = cardX / bodyX * 60;
            let cardY = escolhido.offsetTop;
            escolhido.style.transform = `rotate(${angle - 27}deg)`;
        }
    });

    document.addEventListener('mouseup', function() {

        if (escolhido != null) {
            if (escolhido.offsetLeft >= -10 && escolhido.offsetLeft <= 170 && escolhido.offsetTop >= -10 && escolhido.offsetTop <= 225) {
                cardnamesa = 1;
                escolhido.style.left = '52px';
                escolhido.style.top = '97px';
                escolhido.style.height = '250px';
                escolhido.style.width = '200px';
                escolhido.style.transform = 'rotate(0deg)';
                escolhido.style.boxShadow = 'none';
            } else if (escolhido.offsetLeft > 220 && escolhido.offsetLeft <= 410 && escolhido.offsetTop >= -10 && escolhido.offsetTop <= 225) {
                cardnamesa = 2;
                escolhido.style.left = '291px';
                escolhido.style.top = '97px';
                escolhido.style.height = '250px';
                escolhido.style.width = '200px';
                escolhido.style.transform = 'rotate(0deg)';
                escolhido.style.boxShadow = 'none';
            } else if (escolhido.offsetLeft > 450 && escolhido.offsetLeft <= 640 && escolhido.offsetTop >= -10 && escolhido.offsetTop <= 225) {
                cardnamesa = 3;
                escolhido.style.left = '530px';
                escolhido.style.top = '97px';
                escolhido.style.height = '250px';
                escolhido.style.width = '200px';
                escolhido.style.transform = 'rotate(0deg)';
                escolhido.style.boxShadow = 'none';
            } else if (escolhido.offsetLeft > 680 && escolhido.offsetLeft <= 870 && escolhido.offsetTop >= -10 && escolhido.offsetTop <= 225) {
                cardnamesa = 4;
                escolhido.style.left = '769px';
                escolhido.style.top = '97px';
                escolhido.style.height = '250px';
                escolhido.style.width = '200px';
                escolhido.style.transform = 'rotate(0deg)';
                escolhido.style.boxShadow = 'none';
            } else {
                cardnamesa = 0;
                escolhido.style.height = '200px';
                escolhido.style.width = '150px';
                escolhido.style.boxShadow = '5px 5px 15px';
            }
            escolhido = null;
        }
    });
    
};
