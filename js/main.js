let pelis = undefined;
let busqueda = undefined;
window.addEventListener('DOMContentLoaded', function loadScreen(){
  
  getJSONDATA(url).then(function(resultObj){
    if (resultObj.status === "ok"){
      pelis = resultObj.data
      
    }}
    )
  })
  function filterSearch(search) {
    return pelis.filter((element)=>{
      debugger
      element.title.toLowerCase().indexOf(search.toLowerCase()) > -1
      console.log(element.title);
    })}
    document.getElementById('btnBuscar').addEventListener('click', (e)=>{
      e.preventDefault;
       busqueda = document.getElementById('inputBuscar').value;
      
      filterSearch(busqueda)
    })
/*  HACER OTRO FILTER PARA QUE APAREZCAN PELICULAS SIMILARES */
/*  HACER UN SHOW PELIS */ 