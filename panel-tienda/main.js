console.log (`aloja`)
/*EL PROGRAMA TIENE DOS PARTES. UNA SIMULACION DE BACKEND DONDE EL ADMIN CARGA PRODUCTOS. CADA PRODUCTO ES UN OBJETO, CADA OBJETO SE GUARDA EN UN ARRAY. LA IDEA ES QUE ESE ARRAY SE ALMACENE EN EL STORAGE Y LUEGO SE DESPLIEGUE COMO PRODUCTOS A LA VENTA EN OTRO HTML DEL MISMO NAVEGADOR. ESTO ES SOLO UNA SIMULACION DE BACKEND-FRONTEND EN UN MARKETPLACE, PARA QUE FUNCIONE REALMENTE SERIA NECESARIA GUARDAR LOS DATOS EN UNA BASE DE DATOS REAL   */



let idProducto = 0

let contenido = document.getElementById(`contenido`)
let listador = document.getElementById(`listador`)
let formulario = document.getElementById(`formulario`)
let actualizar = document.getElementById(`boton-actualizar`)
let productosTienda = document.getElementById(`productos-tienda`)
let borrarTienda = document.getElementById(`boton-reinicio`)
let buscadorImagen = document.getElementById(`inputBuscador`)
let searchBtn = document.getElementById(`searchBtn`)
let producto = document.getElementById(`producto`)
let ayuda = document.getElementById(`boton-ayuda`)

Swal.fire({
    title: '<strong><u>Simulador backend panel</u></strong>',
    icon: 'info',
    iconColor: `red`,
    grow: 'fullscreen',
    html:
      `<p>Carga productos, los guarda en un array y los envia al localstorage. Luego en el market.html ese storage se recupera al cargar la web y se distribuyen los productos en el marketplace</p>
      <p><b>BOTON BUSCAR LINK:</b> Si el usuario no tiene el link web de la imagen, abre un popup con una imagen que coincide con el producto que esta intentando cargar</p>
      <p><b>BOTON AGREGAR PRODUCTO:</b>  Agrega el producto al array (no a la tienda)</p>
      <p><b>BOTON ACTUALIZAR TIENDA:</b>  Toma todos los productos que se estan cargando, y los envia a la tienda uniendolos a los que la tienda ya tenia cargados</p>
      <p><b>BOTON REINICIAR TIENDA:</b> Borra todos los productos cargados en la tienda</p>
      <p><b>BOTON LINK A TIENDA:</b> Abre la tienda en una nueva pestania y muestra todos los productos ya cargados</p>
      <p><b>BOTON AYUDA:</b>  Abre esta referencia en cualquier momento/p>`,
    showCloseButton: true,
    showCancelButton: false,
    focusConfirm: false,
    confirmButtonText:
      '<i class="fa fa-thumbs-up"></i> OK',
    confirmButtonAriaLabel: 'Thumbs up, great!',
    cancelButtonText:
      '<i class="fa fa-thumbs-down"></i>',
    cancelButtonAriaLabel: 'Thumbs down'
  })

  ayuda.addEventListener ((`click`),()=>{
    Swal.fire({
        title: '<strong><u>Simulador backend panel</u></strong>',
        icon: 'info',
        iconColor: `red`,
        grow: 'fullscreen',
        html:
          `<p>Carga productos, los guarda en un array y los envia al localstorage. Luego en el market.html ese storage se recupera al cargar la web y se distribuyen los productos en el marketplace</p>
          <p><b>BOTON BUSCAR LINK:</b> Si el usuario no tiene el link web de la imagen, abre un popup con una imagen que coincide con el producto que esta intentando cargar</p>
          <p><b>BOTON AGREGAR PRODUCTO:</b>  Agrega el producto al array (no a la tienda)</p>
          <p><b>BOTON ACTUALIZAR TIENDA:</b>  Toma todos los productos que se estan cargando, y los envia a la tienda uniendolos a los que la tienda ya tenia cargados</p>
          <p><b>BOTON REINICIAR TIENDA:</b> Borra todos los productos cargados en la tienda</p>
          <p><b>BOTON LINK A TIENDA:</b> Abre la tienda en una nueva pestania y muestra todos los productos ya cargados</p>
          <p><b>BOTON AYUDA:</b>  Abre esta referencia en cualquier momento/p>`,
        showCloseButton: true,
        showCancelButton: false,
        focusConfirm: false,
        confirmButtonText:
          '<i class="fa fa-thumbs-up"></i> OK',
        confirmButtonAriaLabel: 'Thumbs up, great!',
        cancelButtonText:
          '<i class="fa fa-thumbs-down"></i>',
        cancelButtonAriaLabel: 'Thumbs down'
      })
  })

searchBtn.addEventListener((`click`),()=>{
    let busqueda = producto.value.replace(/ /g,"+")
    let url = `https://www.elektracomics.com.ar/search/?q=`+busqueda
    console.log(url)
    console.log(producto.value)
    const ventana = window.open(
        url,
        'popUpWindow','height=700,width=800,left=500,top=200,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no,status=yes'
        )
        if(!ventana || ventana.closed || typeof ventana.closed=='undefined') 
        { 
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Ventana emergente bloqueada',
              })
        }
})
//en este array se van a guardar los objetos. Cada objeto es un producto.
let arrayProductos = []
console.log(Swal)
//constructor de objetos
 class productos {
    constructor (nombre, precio, imagen, productoId) {
        this.nombre = nombre
        this.precio = precio
        this.imagen = imagen
        this.productoId = productoId
    }
 }
 if(typeof(productosTienda) != 'undefined' && productosTienda != null){
    console.log('Existe en la pagina');
} else{
    console.log('No existe en la pagina');
}

function varciarArray (array){
    console.log(`se esta borrando el array`+ array)
    return array.length = 0
}
 //ESTE EVENTO ALMACENA LOS PRODUCTOS QUE VAN A IR A LA TIENDA EN EL STORAGE. PERO SI YA EXISTE UN ARRAY GUARDADO, LO RECUPERA, LO FUSIONA CON EL QUE SE ESTA CREANDO Y LO DEVUELVE AL STORAGE
    borrarTienda.addEventListener (`click`,()=>{
        Swal.fire({
            title: 'Estas segur@?',
            text: "Estas por borrar todos los productos de la tienda.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, borralos'
          }).then((result) => {
            if (result.isConfirmed) {
                localStorage.clear()
                Swal.fire(
                'Productos borrados!',
                'La tienda ahora esta vacia',
                'success'
              )
            }
          })
    })
    actualizar.addEventListener(`click`,()=>{
    if (arrayProductos.length == 0){
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'No hay productos agregados',
            showConfirmButton: false,
            timer: 1500
          })
    } else if(localStorage.getItem(`productos`)=== null){
    localStorage.setItem(`productos`, JSON.stringify(arrayProductos),
    console.log(arrayProductos))
    Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Tienda actualizada',
            showConfirmButton: false,
            timer: 1500
      })
    }
    else {
    const arrayRecuperado = JSON.parse(localStorage.getItem('productos'))
    arrayProductos.reverse()
    const arrayNuevo = arrayProductos.concat(arrayRecuperado)
    localStorage.setItem(`productos`, JSON.stringify(arrayNuevo))
    console.log(arrayProductos)
    /*arrayProductos.forEach((el)=>{
    let i = arrayProductos.indexOf(el)
    arrayProductos.splice(i,1)
    })*/Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Tienda actualizada',
        showConfirmButton: false,
        timer: 1500
      })}
    while (listador.firstChild) {
        listador.removeChild(listador.lastChild);
      }
    varciarArray(arrayProductos)})
    
 //formulario que va a proporcionar los datos para cada objeto mediante un evento submit.
formulario.addEventListener("submit", (e)=> {
    e.preventDefault();
    console.log(producto.value)
    producto = document.getElementById(`producto`)
    let precio = document.getElementById(`precio`)
    let imagen = document.getElementById(`imagen`)
//aca tengo que poner un verificador de entradas con alerta
    if (producto.value == "" || precio.value == "" || imagen.value == ""){
        Swal.fire ({
            title: `Producto no cargado`,
            text: `Te falto ingresar algun dato`,
            icon: `error`,
            showConfirmButton: false,
            timer: 1500
        })
//Si los datos son correctos, primeramente se interviene el doc creando un div. giEste div va a contener una card de bootstrap donde muestre datos del objeto. Es una preview de como se va a ver el producto en la tienda. Es importante que el objeto aun no esta creado, solo se capturan los datos necesarios.
    } else {
        let manga = document.createElement(`div`)   
        let idManga = `manga-ID-${idProducto}`
        manga.setAttribute("id", idManga)
        manga.setAttribute("class", `d-inline-flex p-2`)
        listador.prepend(manga)
        manga.innerHTML =  `<div class="card" style="width: 13rem;">
        <img src="${imagen.value}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="precio">$${precio.value}</h5>
          <p class="card-text">${producto.value}</p>
          <a href="#" class="btn btn-primary" id="agregar">Agregar al carrito</a>
          <button onclick="eliminarProducto(${idProducto})">X</button>
        </div>
        </div>`
//Ahora si se crea el objeto con las reglas del constructor. Todos los valores son los ingresados por el usuario, excepto el ID. El ID es el mismo que se le asigno el div que contiene visualmente los datos del objeto. Si bien no es recomendable tener un mismo ID a dos cosas diferentes creo que al estar ligadas (el objeto, y la card que muestra los datos del objeto) no es necesario crear dos ID diferentes y es mejor aprovechar la variable. Se agrega el nuevo objeto al array de productos.
        let nuevoProducto = new productos (producto.value, precio.value, imagen.value, idManga )
        arrayProductos.push (nuevoProducto)
        producto.value =""
        precio.value = ""
        imagen.value = ''
        console.log(arrayProductos)
        idProducto++
        console.log(document)
    }
} )
//esta es la funcion que ensenio el profesor para eliminar sus tareas con alguna modificacion. Principalmente que ademas de eliminar la card que muestra los datos del objeto, tambien busca el indice del objeto que corresponde a esa card, y elimina el objeto del array.
function eliminarProducto(id) {
    let identificador = `manga-ID-${id}`
    let borrar = document.getElementById(identificador);
    listador.removeChild(borrar)
    let i = arrayProductos.indexOf(arrayProductos.find(e=>e.productoId === `manga-ID-${id}`))
    console.log(i)
    arrayProductos.splice (i,1)
    console.log(arrayProductos)
}

//PROGRAMA GUARDADO COMPLETO EN GIT
