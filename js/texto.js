const element = document.querySelector("#test");
const text = "Ola me chamo Raphael,é um prazer velo aqui, sou um programador junior com foco em web backend,anida aprendendo sobre esse vasto universo da programação de computadores. Atualmente estoufocado em melhororar meinhas habilidades em React Js, e Java, mas possuo experiencia em liguagens como python,c, javascript, e em banco de dados, sou comunicativo e trabalho bem em equipe, tenho um gosto,por musica classica e jogos de video game, espero criar um blog sobre programação e fantaisa utilizando meus conhecimentos em um futuro proximo";

const intervalo = 65;

function showText(element, text, intervalo){

    const char = text.split("").reverse();

    const typer = setInterval(() =>{

    if(!char.length){

        return clearInterval(typer);
    }

        const next = char.pop();
        console.log(next);

        element.innerHTML += next;

    }, intervalo);

}

showText(element, text, intervalo);



