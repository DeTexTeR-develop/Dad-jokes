const jokeHOne = document.querySelector("h1")
const btn = document.querySelector("button");

let joke = "";


const getDadJokes = async() =>{
    try{
        const config = { headers: { Accept: 'application/json' }};
        const res = await axios.get('https://icanhazdadjoke.com/', config)
        joke = res.data.joke;
        console.log(joke)
        jokeHOne.innerText = joke;
    }
    catch(err){
        jokeHOne.innerText = "No Jokes Available Sorry!! :(";
    }
}

btn.addEventListener('click', getDadJokes)
