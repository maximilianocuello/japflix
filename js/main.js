let pelis = undefined;
let busqueda = undefined;
let pelisFilter = undefined;

function showData(arr){
  
 let htmlContentToShow = '';
 /* ME DA ERROR AL INICIAR LA FUNCION ONCLIC EN LA DIV  */
 for (let peli of arr) {
  debugger
  let {title, overview, genres, vote_average, tagline} = peli;
  let generos = ''
  for (let {name} of genres) {
    console.log(name)
    generos += `${name}   `;
  }
  htmlContentToShow += `<button class="btn btn-primary btn-item" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">${title}</button>
   <div>
   <h1 class="text-secondary">${tagline}</h1>
   <h1 class="text-danger">${vote_average}</h1>
   </div>
   <div class="offcanvas offcanvas-top" tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
   <div class="offcanvas-header">
   <h5 class="offcanvas-title" id="offcanvasTopLabel">${title}</h5>
   <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
   </div>
   <div class="offcanvas-body">
   <p>${overview}</p>
   <p>${generos}</p>
   <p></p>
   </div>
   </div>
    
  
    `;
 }
 document.getElementById('lista').innerHTML = htmlContentToShow;
 
 
}


/*CARGANDO DATA  */
window.addEventListener('DOMContentLoaded', function loadScreen(){
  
  getJSONDATA(url).then(function(resultObj){
    if (resultObj.status === "ok"){
      pelis = resultObj.data
      
    }}
    )
  })
  

  
  document.getElementById('btnBuscar').addEventListener('click', (e)=>{
    e.preventDefault;
    busqueda = document.getElementById('inputBuscar').value;
    
    
    pelisFilter = pelis.filter(({title, genres , overview, tagline})=>{
      let [{name}] = genres
      return title.toLowerCase().indexOf(busqueda.toLowerCase()) > -1 || overview.toLowerCase().indexOf(busqueda.toLowerCase()) > -1 || tagline.toLowerCase().indexOf(busqueda.toLowerCase()) > -1 ||  name.toLowerCase().indexOf(busqueda.toLowerCase()) > -1;
     
      
     
    })
    showData(pelisFilter);
 })
