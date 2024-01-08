// fetch data
fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(data => loadData(data))




// loop on data(countries)
const loadData = (countries) => {
    const countryContainer = document.getElementById('country-container');
    for (const country of countries) {
       
        // create element
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country');
        countryDiv.innerHTML = `
        <div class="card w-full bg-base-100 shadow-xl">
            <div class="card-body">
                <h2 class="card-title">${country.name.common}</h2>
                <p>Capital: ${country.capital}</p>
                <div class="card-actions justify-end">
                    <button onclick="getDetails('${country.cca2}')" class="btn btn-primary">Details</button>
                </div>
            </div>
        </div>
        `;
        countryContainer.appendChild(countryDiv);
    }
}


// get data from another url
const getDetails = (cca2) => { // function used in buttons onclick
    const url = `https://restcountries.com/v3.1/alpha/${cca2}`;
    fetch(url)
    .then(response => response.json())
    .then(data => showDetails(data) )
}


// show details
const showDetails = (details) => {
    const detailsContainer = document.getElementById('details-container');
    console.log(details[0].flags.alt);
    detailsContainer.innerHTML = `
    <div class="p-5">
        <h1 class="text-3xl">${details[0].name.common}</h1>
        <hr class="py-2">
        <img src="${details[0].flags.png}" >
        <p>${details[0].flags.alt ? details[0].flags.alt : 'Description not found'}</p>
    </div>
    `;
}