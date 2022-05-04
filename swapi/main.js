let button = document.querySelector(`.get-button`);
let names = document.querySelector(`.resident-names`);

const getResidents = (event) => {
    event.preventDefault();
     
    axios.get(`https://swapi.dev/api/planets/2/?name=alderaan`)
        .then((res) => {
            let residents = res.data.residents;
            for (let i = 0; i < residents.length; i++) {
                // console.log(residents[i]);

                axios.get(residents[i])
                    .then(res => {
                        // console.log(res.data);
                        // console.log(site);
                        let residenti = document.createElement(`h2`);
                        residenti.textContent = res.data.name;
                        // document.appendChild(residenti);
                        console.log(residenti);
                        names.appendChild(residenti);
                        // let character = res.data;
                        // site.appendChild(`<h2>${character}</h2>`);
                    })
                    .catch(err => {

                    })

            }
        })
        .catch((err) => {
            console.log(err);
        })

    // console.log(`hello`)
}

button.addEventListener(`click`, getResidents)