let imagemEstrada;
let imagemAtor;
let imagemCarro;
let imagemCarro2;
let imagemCarro3;
let imagemCarros;

let somTrilha;
let somColisao;
let somPonto;

function preload() {
    imagemEstrada = loadImage("imgs/estrada.png");
    imagemAtor = loadImage("imgs/ator-1.png");
    imagemCarro = loadImage("imgs/carro-1.png");
    imagemCarro2 = loadImage("imgs/carro-2.png");
    imagemCarro3 = loadImage("imgs/carro-3.png");
    imagemCarros = [imagemCarro, imagemCarro2, imagemCarro3, imagemCarro, imagemCarro2, imagemCarro3];

    somTrilha = loadSound("sons/trilha.mp3");
    somColisao = loadSound("sons/colidiu.mp3");
    somPonto = loadSound("sons/pontos.wav");
}
