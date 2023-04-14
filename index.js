const imgMenu = document.getElementById('icono--menu');
const navegacion = document.getElementById('navegacion');

imgMenu.addEventListener('click',()=>{
    const nombreImagen = imgMenu.src.split('/')[4];
    if(nombreImagen == 'abrir-menu.svg'){
        imgMenu.src = 'imagenes/cerrar-menu.svg';
    }else{
        imgMenu.src = 'imagenes/abrir-menu.svg';
    }
    navegacion.classList.toggle('navegacion--dinamico');
});

document.addEventListener('DOMContentLoaded',()=>{
    if(window.innerWidth > 992){
        navegacion.classList.add('navegacion--dinamico');   
    }
});
