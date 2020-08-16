document.addEventListener("click",e=>{

  if(e.target.classList.contains('myBtn')){

    const precio = e.target.dataset.price;
    const nombre = e.target.dataset.name;

    let cadena;

    if (localStorage.getItem("listaProductos") === null) {
      cadena = "";
    }else{
        cadena = localStorage.getItem("listaProductos");
    }
  
    const $tbl = document.getElementById("tbl");
  
    cadena += `<tr>
                  <th>${nombre}</th>
                  <th>${precio}</th>
              </tr>`;
  
    localStorage.setItem("listaProductos", cadena);
    tbl.querySelector("tbody").innerHTML = cadena;
  
    $("#alerta").modal("show");

  }
})

document.addEventListener("DOMContentLoaded", (e) => {
  if (localStorage.getItem("listaProductos") !== null) {

    let cadena = localStorage.getItem("listaProductos");
    const $tbl = document.getElementById("tbl");

    $tbl.querySelector("tbody").innerHTML = cadena;
  }
});
