//image non citation


const getData = () => {
    fetch ("https://thesimpsonsquoteapi.glitch.me/quotes")
    .then((response) => response.json())
    .then((data) => {
        const quote = data[0].quote;
        const character = data[0].character;
        const image = data[0].image;

        console.log(quote);
        console.log(character);
        console.log(image);

        //console.log(quote, character, image);

    })
}

getData();
