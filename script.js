const jokeHOne = document.querySelector("h1")
const btn = document.querySelector("button");

let joke = "";


const getDadJokes = async() =>{
    const config = { headers: { Accept: 'application/json' }};
    const res = await axios.get('https://icanhazdadjoke.com/', config)
    joke = res.data.joke;
    console.log(joke)
    jokeHOne.innerText = joke;
}

btn.addEventListener('click', getDadJokes)
