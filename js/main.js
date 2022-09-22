let pelis = undefined;
let busqueda = undefined;
let pelisFilter = undefined;

/*CARGANDO DATA  */
window.addEventListener('DOMContentLoaded', function loadScreen(){
  
  getJSONDATA(url).then(function(resultObj){
    if (resultObj.status === "ok"){
      pelis = resultObj.data
      
    }}
    )
  })


  /*function filterSearch(search) {
  })}*/
  document.getElementById('btnBuscar').addEventListener('click', (e)=>{
    e.preventDefault;
    busqueda = document.getElementById('inputBuscar').value;
    
    pelisFilter = pelis.filter(({title, overview, tagline})=>{
      debugger
      return title.toLowerCase().indexOf(busqueda.toLowerCase()) > -1;
     
      
     /* filterSearch(busqueda)*/
    })})
/*  HACER OTRO FILTER PARA QUE APAREZCAN PELICULAS SIMILARES */
/*  HACER UN SHOW PELIS */ 