let productosTienda = document.getElementById(`productos-tienda`)
const arrayTienda = []
console.log(document)

if(typeof(productosTienda) != 'undefined' && productosTienda != null){
    console.log('Existe en la pagina');
    const arrayRecuperado = JSON.parse(localStorage.getItem('productos'))
    console.log(arrayRecuperado)
    arrayRecuperado.forEach(el => {
    let nombre = el.nombre
    let precio = el.precio
    let imagen = el.imagen
    let item = document.createElement (`div`)
    item.setAttribute ("class", "contenedor-item")
    productosTienda.appendChild(item)
    item.innerHTML = `<div class="card card-tienda" style="width: 18rem;">
    <img src="${imagen}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="precio">$${precio}</h5>
      <p class="card-text">${nombre}</p>
      <a href="#" class="btn btn-primary" id="agregar">Agregar al carrito</a>
    </div>
    </div>`
    console.log(`cada pasada crea un div`)
    console.log(document)
    });
} else{
    console.log('No existe en la pagina');
}

//YA TENGO LA ENTRADA DE DATOS POR BACKEND, Y EL RECUPERO DE ARRAY CON DESPLIEGUE DE NODOS EN EL MARKET
//ME FALTA QUE LO QUE MUESTRE EL MARKET SEAN LAS CARDS CORRECTAS CON LOS DATOS DE LOS PRODUCTOS Y LUEGO EL DISENIO.

/*item.innerHTML `<div class="card" style="width: 18rem;">
    <img src="${element.imagen.value}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="precio">$${element.precio.value}</h5>
      <p class="card-text">${element.producto.value}</p>
      <a href="#" class="btn btn-primary" id="agregar">Agregar al carrito</a>
      <button onclick="eliminarProducto(${element.idProducto.value})">X</button>
    </div>
    </div>`*/