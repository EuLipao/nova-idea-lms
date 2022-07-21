function registrar(){
    let quantidade = document.getElementById('txtquant').value

    if(quantidade <= 0){
        window.alert("Digite uma quantidade!")
    }else{
        window.alert("Resgistrado")
        window.location.href="../index.html"
    }
}