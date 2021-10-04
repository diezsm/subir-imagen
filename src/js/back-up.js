
const jokeUrl = 'https://api.chucknorris.io/jokes/random';

/** 
fetch( jokeUrl ).then( resp => {

     
    //resp.json().then ( data => {

    //    console.log(data);
    //});
    
    

    resp.json().then ( ({id, value}) => {

        console.log(id);
        console.log(value);
    });

    console.log(resp);

}) ;

*/

fetch( jokeUrl )
    .then ( resp => resp.json())
    .then ( ({id, value}) => {
        console.log(id, value);
    });
    //.then (console.log);


