//firstly, we're creating a library with debounce (a small delay for input)

import debounce from 'lodash.debounce';
//for displaying an alert in the console
import Notiflix from 'notiflix';
//we're adding a little bit of styles
import './css/styles.css';
import { onListMarkup, onCountryMarkup } from './onMarkup';
import { onFetch } from './onFetch';


//we're setting the delay
const DEBOUNCE_DELAY = 300;
//we're instanciating an input, ul and div for further information
const input = document.querySelector('input');
const ul = document.querySelector('.country-list');
const div = document.querySelector('.country-info');


//on this function we're...
function onInput() {
  //placing a dynamic trimmed value of the input into a variable
  const name = input.value.trim()
  //if this value equals to null..., ul and div also becomes null
  if (name === '') {
    //...ul and div also becomes null
    return (ul.innerHTML = ''), (div.innerHTML = '')
  }
//while typing we will call for fetch function...
  onFetch(name)
    .then(ro => {
      console.log(ro)
      //and if length of the information from backend equals to 1, we're...
      if (ro.length === 1) {
        //...returning an empty div, ul and inserting the markup to the div
        return (div.innerHTML = ''), (ul.innerHTML = ''), (div.insertAdjacentHTML('beforeend', onCountryMarkup(ro)));

      }
      //if the length of the information from backend less than 10, we will...
      if (ro.length < 10) {
        //emptying the ul, div and inserting the markup to the ul
        return (ul.innerHTML = ''), (div.innerHTML = ''), (ul.insertAdjacentHTML('beforeend', onListMarkup(ro)))
      }
      //if length of the information from the backend more than or equals to 10, notify a success operation
      else if (ro.length >= 10) {
        Notiflix.Notify.success("Too many matches found. Please enter a more specific name.")
        
        //if none of the requests are non fulfilled, just insert inside of the ul markup of the names of countries 
      } else {
        ul.insertAdjacentHTML('beforeend', onListMarkup(ro))
      }
    })
    //on error we will execute a function with failure notification
    .catch(onError);
}

//like I said
const onError = () => {
  Notiflix.Notify.failure("Oops, there is no country with that name");
}

//the most important - we're adding a listener to the input 
input.addEventListener("input", debounce(onInput, DEBOUNCE_DELAY));















