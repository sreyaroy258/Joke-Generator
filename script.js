const button = document.querySelector(".container");
const joketext = document.querySelector ('.container p');
document.addEventListener('DOMContentLoaded', getjoke)

button.addEventListener ('click', getjoke);

async function getjoke (){
    const jokedata = await fetch ('https://icanhazdadjoke.com/',{
        headers : {
            'Accept' : 'application/json'
        }
    });
const jokeobject = await jokedata.json();
        joketext.innerHTML = jokeobject.joke;
};
