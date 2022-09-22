let pelis = undefined;
let busqueda = undefined;
let pelisFilter = undefined;

function showData(arr){
 let htmlContentToAppend = '';
 /* ME DA ERROR AL INICIAR LA FUNCION ONCLIC EN LA DIV  */
 for (let peli of arr) {
  
   htmlContentToAppend += `<li>
    <div onclick="showPeli(${peli})" cursor active>
      <h1 class="text-white">${peli.title}</h1>
      <h1 class="text-primary">${peli.tagline}</h1>
      <h1 class="text-danger">${peli.vote_average}</h1>
    </div>
    </li>`;
 }
 document.getElementById('lista').innerHTML = htmlContentToAppend;
 
 
}
function showPeli({title}){
  let htmlContentToAppend = '';
  htmlContentToAppend = `<button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">Toggle top offcanvas</button>

  <div class="offcanvas offcanvas-top" tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasTopLabel">Offcanvas top</h5>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <p>${title} </p>
    </div>
  </div>
   `;
   document.getElementById('lista').innerHTML = htmlContentToAppend;
   
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
