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
  
  function showData(arr){
    debugger
   let htmlContentToAppend = '';
   for (let {title, tagline, vote_average} of arr) {
    
     htmlContentToAppend += `<li>
      <div>
        <h1 class="text-white">${title}</h1>
        <h1 class="text-primary">${tagline}</h1>
        <h1 class="text-danger">${vote_average}</h1>
      </div>
      </li>`;
   }
   document.getElementById('lista').innerHTML = htmlContentToAppend;
   
   
  }

  
  document.getElementById('btnBuscar').addEventListener('click', (e)=>{
    e.preventDefault;
    busqueda = document.getElementById('inputBuscar').value;
    
    
    pelisFilter = pelis.filter(({title, genres , overview, tagline})=>{
      let [{name}] = genres
      return title.toLowerCase().indexOf(busqueda.toLowerCase()) > -1 || overview.toLowerCase().indexOf(busqueda.toLowerCase()) > -1 || tagline.toLowerCase().indexOf(busqueda.toLowerCase()) > -1 ||  name.toLowerCase().indexOf(busqueda.toLowerCase()) > -1;
     
      
     
    })
    showData(pelisFilter);
 })
