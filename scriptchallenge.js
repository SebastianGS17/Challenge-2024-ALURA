function condicionMensajeUsuario(){
    let mensajeUsuario = document.getElementById('mensajeUsuario').value;
     mensajeUsuario = mensajeUsuario
        .toLowerCase()
        .normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        replace(/[^a-zA-Z0-9 ]/g, '');
    return document.querySelector('.textarea__input__cuadro').value === mensajeUsuario;
}



function botonEcriptarMensaje() {
   let mensajeAEncriptar = document.getElementById('mensajeUsuario').value;
        mensajeAEncriptar=mensajeAEncriptar
        .toLowerCase()
        .normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        let mensajeEncriptado = mensajeAEncriptar
            .replace(/e/g, "enter")
            .replace(/i/g, "imes")
            .replace(/a/g, "ai")
            .replace(/o/g, "ober")
            .replace(/u/g, "ufat");
        console.log(mensajeEncriptado); 
    document.querySelector('.textarea__output').value = mensajeEncriptado;
    document.getElementById("botonCopiar").style.display="block";
    document.getElementById("imagenMuñeco").style.display ="none";
    document.getElementById("mensajeUsuario").value ="";
    return;
}

function botonCopiarMensaje() {
    let mensajeCopiado = document.querySelector('.textarea__output').value;
    navigator.clipboard.writeText(mensajeCopiado);
    document.getElementById("botonCopiar").click(
        Swal.fire({
        position: "center",
        icon: "success",
        title: "El codigo encriptado fué guardado",
        showConfirmButton: false,
        timer: 1500
      })
)
    console.log(mensajeCopiado);
    document.getElementById("mensajeEncriptado").value ="";
    document.getElementById("imagenMuñeco").style.display ="block";
    return;
}


function limpiarEncriptador(){
    document.querySelector('.textarea__output').value = "";
    document.getElementById("botonCopiar").style.display="none";
    document.getElementById("imagenMuñeco").style.display ="block";
    Swal.fire({
        title: "¡¡Vayamos en busca de mas secretos!!.",
        width: 600,
        padding: "2em",
        color: "#E1D7B7",
        background: "#E5E5E5  url(./assets/pngtree-the-sky-is-dotted-with-stars-and-light-spots-png-image_4201016.png)",
        backdrop: `
          rgba(0,0,123,0.4)
          url("./assets/cat-rainbow.gif")
          top
          no-repeat
        `
});
    return;
}

function botonDesencriptarMensaje(){
    let mensajeADesencriptar = document.getElementById('mensajeUsuario').value;
        mensajeEncriptado = mensajeADesencriptar
            .replace(/enter/g, 'e' )
            .replace(/imes/g, "i")
            .replace(/ai/g, "a")
            .replace(/ober/g, "o")
            .replace(/ufat/g, "u");
        console.log(mensajeADesencriptar);
        document.querySelector('.textarea__output').value = mensajeEncriptado;
        document.getElementById("botonCopiar").style.display="none";
        document.getElementById("imagenMuñeco").style.display ="none";
        document.getElementById("mensajeUsuario").value ="";
        setTimeout(limpiarEncriptador,3000);
    return;
}
