let control = document.getElementById(`control-vista`)
let x = document.getElementById(`pass`)
let y = document.getElementById(`hide1`)
let z = document.getElementById(`hide2`)

let inputUsuario = document.getElementById(`usuario`)
let inputPass = document.getElementById (`pass`)
let ingresar = document.getElementById(`ingresar`)




ingresar.addEventListener ((`submit`), (e) => {
    e.preventDefault();
    console.log(`click`)
   fetch(`admin.json`).then((resp) => resp.json())
    .then((data) => {
        let nombre = (data[0].user === inputUsuario.value)
        let key = (data[0].pass === inputPass.value)
        if (nombre == true && key == true) {
            console.log(`logueaste`)
            window.location = "./panel-tienda/index.html"
        } else {
            console.log(`no logueaste`)
        }
    }    )
})

function myFunction () {
    
    if (x.type ===`password`){
        x.type =`text`;
        y.style.display = `block`;
        z.style.display = `none`;
    } else {
        x.type =`password`;
        y.style.display = `none`;
        z.style.display = `block`;
    }
}

control.addEventListener((`click`), () => {
    console.log(`click`)
    myFunction()
})


//QUE SIGUE? TENGO QUE UNIRLO A MI PROYECTO ANTERIOR. ES DECIR QUE EL LOGIN CORRECTO ME LLEVE AL PANEL DE ADMINISTRADOR. LUEGO PROLIJAR EL LOGIN CON REQUIRED Y SENIALES DE EXITO O RECHAZO DEL LOGIN