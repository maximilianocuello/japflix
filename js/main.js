let pelis = undefined;
let busqueda = undefined;
let pelisFilter = undefined;

function showData(arr){
  
 let htmlContentToShow = '';
 /* ME DA ERROR AL INICIAR LA FUNCION ONCLIC EN LA DIV  */
 for (let peli of arr) {
  debugger
  let {title, overview, genres, vote_average, tagline, badget, release_date,revenue, runtime,} = peli;
  let generos = ''
  for (let {name} of genres) {
    
    generos += `${name}   `;
  }
  htmlContentToShow += `<button class="btn btn-primary btn-item" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop">${title}</button>
   
   <h1 class="text-secondary">${tagline}</h1><div>`
   for(let i = 0; i<5; i++){
    debugger
    if (i<(vote_average/2)) {

   htmlContentToShow +=`<span class="fa fa-star checked"></span>`;
  }
   else{
    htmlContentToShow +=`<span class="fa fa-star" style="color: black"></span>`
    }
  }
   htmlContentToShow += `
   </div>
   <div class="offcanvas offcanvas-top" tabindex="1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
   <div class="offcanvas-header">
   <h5 class="offcanvas-title" id="offcanvasTopLabel">${title}</h5>
   <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
   </div>
   <div class="offcanvas-body" style="z-index:1000;overflow:hidden;">
   <p>${overview}</p>
   <p>${generos}</p>
   
   <div class="btn-group" role="group" style="z-index:1000;">
   <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="true" style="position: right; z-index:1000; overflow:hidden;">
     More
   </button>
   <ul class="dropdown-menu" style="z-index:1000; position:absolute;">
     <li><a class="dropdown-item" href="#" style="z-index:1000; position:relative;">Year:  ${release_date} </a></li>
     <li><a class="dropdown-item" href="#" style="z-index:1000; position:relative;">Runtime:  ${runtime} </a></li>
     <li><a class="dropdown-item" href="#" style="z-index:1000; position:relative;">Budget: ${badget}  </a></li>
     <li><a class="dropdown-item" href="#" style="z-index:1000; position:;">Revenue:   ${revenue}  </a></li>
   </ul>
 </div>
   
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
