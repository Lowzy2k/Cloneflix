'use strict';

const api_key = '648de0ec5061e1a003ce0f85503a6224';
const imageBaseURL = 'https://image.tmdb.org/t/p/';


/**
 * fetch data from a server using the url and passes the result in the JSON data to a 'callback' function, along with an optional parameter if has 
 * 'optionaParam'
 */


const fetchDataFromServer = function (url, callback, optionalParam) {
    fetch(url)
    .then(response => response.json())
    .then(data => callback(data, optionalParam));
}


export { imageBaseURL, api_key, fetchDataFromServer};