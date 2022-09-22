const url = 'https://japceibal.github.io/japflix_api/movies-data.json';

let getJSONDATA = function(url){
    let result = {};
    return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }else{
        
      }
    })
    .then(function(response) {
          result.status = 'ok';
          result.data = response;
          return result;
    })
    .catch(function(error) {
        result.status = 'error';
        result.data = error;
        return result;
    });
}