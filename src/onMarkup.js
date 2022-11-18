//on this function we're...
const onListMarkup = (ro) => {
  //mapping the markup with destructured properties of flags and name
    const markup = ro.map(({ flags, name }) => {
        
      return  `<li class="list-item">
    <img class="item-img" src=${flags.svg} alt="The country of ${name.official} width = "30" height = "30"></img>
    <h3>${name.official}</h3>
    </li>`}).join(' '); //<---- joining him to create a markup
    //and returning ready-to-go markup
    return markup;
}

//on this function we're...
const onCountryMarkup = (ro) => {
  //mapping again, but also adding additional destructured tokens
    const markup = ro.map(({ flags, name, capital, population, languages }) => {
        return `<ul>
    <li class="list-item"> <img class="main-img" src=${flags.svg} alt="The country of ${name.official} width="30" height="30"></img>
    <h1>${name.official}</h1> </li>
    <h3><b>Capital: </b>${capital}</h3>
    <h3><b>Population: </b>${population}</h3>
    <h3><b>Language: </b>${Object.values(languages).join(', ')}</h3> </ul>`}).join(''); //important - an array of languages as an object of values, and joining all of elements
  return markup;
}
export {onListMarkup, onCountryMarkup}
