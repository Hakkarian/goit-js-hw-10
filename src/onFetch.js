//on this function we're...
const onFetch = (value) => {
  //...fetching the link with dynamic input value
    return fetch(`https://restcountries.com/v3.1/name/${value}?fields=name,capital,population,flags,languages`)
    .then(r => r.json())
        .catch(error => console.log(error));
}

export { onFetch }