let pelis = undefined;
let busqueda = undefined;
let pelisFilter = undefined;

function showData(arr){
  
 let htmlContentToShow = '';
 /* ME DA ERROR AL INICIAR LA FUNCION ONCLIC EN LA DIV  */
 for (let peli of arr) {
  debugger
  let {title, overview, genres, vote_average, tagline, budget, release_date,revenue, runtime,id} = peli;
  let generos = ''
  for (let {name} of genres) {
    generos += `${name}   `;
  }
  htmlContentToShow += `<button class="btn btn-primary btn-item" onclick="mostrarInfo(${id})" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">${title}</button>
   <div>
   <h1 class="text-secondary">${tagline}</h1>
   `
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
   <div class="offcanvas offcanvas-top" tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
   <div class="offcanvas-header">
   <h5 class="offcanvas-title" id="offcanvasTopLabel"></h5>
   <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
   </div>
   <div style="overflow:hidden;margin-bottom;-5;margin-left:1%;">
   <p id="over"></p>
   </div>
    <hr>
   <div style="display: flex; width: 100%;">
   <p style="color:grey;margin-left:1%;" id="gen">${generos}</p>
   <div class="btn-group" role="group" style="width:10%;float:right;margin-left:75%; margin-bottom:1%;">
   <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="true" style=" float:right; overflow:hidden;">
     More
   </button>
   <ul class="dropdown-menu">
     <li><a class="dropdown-item" href="#" style="z-index:1000; position:static;" id="Year">Year: </a></li>
     <li><a class="dropdown-item" href="#" style="z-index:1000; position:static;" id="Runtime">Runtime: </a></li>
     <li><a class="dropdown-item" href="#" style="z-index:1000; position:static;" id="Budget">Budget: </a></li>
     <li><a class="dropdown-item" href="#" style="z-index:1000; position:static;" id="Revenue">Revenue: </a></li>
 </div>
   
   </div>
   
   </div>
    
  
    `;
    console.log(id);
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

 function mostrarInfo(idp){
    const peli1 = pelisFilter.find(({id})=>id === idp);
    if(peli1){
      console.log(peli1);
      let generos2 = ''
      let {genres} = peli1;
      for (let {name} of genres) {
        generos2 += `${name}   `;
      }
      document.getElementById('offcanvasTopLabel').innerHTML = peli1.title;
      document.getElementById('over').innerHTML = peli1.overview;
      document.getElementById('gen').innerHTML = generos2;
      document.getElementById('Year').innerHTML = `Year: ${peli1.release_date}`;
      document.getElementById('Runtime').innerHTML = `Runtime: ${peli1.runtime}`;
      document.getElementById('Budget').innerHTML = `Budget: ${peli1.budget}`;
      document.getElementById('Revenue').innerHTML = `Revenue: ${peli1.revenue}`;
    }
 }
