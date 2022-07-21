function login(){
let userId = document.getElementById('user').value

if(userId.length <= 0){
    window.alert('Digite um usuário válido!')
}else if( userId == 'lfernandes'){
    window.location.href="auxlog/auxlog1.html"
}else{
    window.alert('Digite um usuário valido!')
}

}

