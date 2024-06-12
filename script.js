document.getElementById('jokeBtn').addEventListener('click', generateJoke);

async function generateJoke() {
    const jokeElement = document.getElementById('joke');
    jokeElement.innerText = 'Loading...';

    try {
        const response = await fetch('https://v2.jokeapi.dev/joke/Any');
        const data = await response.json();

        let joke = '';
        if (data.type === 'single') {
            joke = data.joke;
        } else {
            joke = `${data.setup} ... ${data.delivery}`;
        }

        jokeElement.innerText = joke;
    } catch (error) {
        jokeElement.innerText = 'Oops! Something went wrong. Try again later.';
    }
}
