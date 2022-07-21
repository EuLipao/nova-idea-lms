function login(){
let userId = document.getElementById('user').value

if(userId.length <= 0){
    window.alert('Digite um usuário válido!')
}else if( userId == 'lfernandes'){
    window.location.href="auxlog/auxlog1.html"
}else if( userId == 'auxlog01'){
    window.location.href="auxlog/auxlog1.html"
}else if( userId == 'operador01'){
    window.location.href="operador/operadorEmpilhadeira.html"
}else if( userId == 'auxlog02'){
    window.location.href="auxlog2/auxlog2.html"}
else{
    window.alert('Digite um usuário valido!')
}

}

