class Validator{

    constructor(){
        this.validations =[
            'data-min-length',

        ]
    }
    //iniciar a validação de todos os campos
    validate(form){
        //pegar os inputs
        let inputs = form.getElementsByTagName('input');
     
        //ele vem em HTMLColletion para Array(transfomar)
        let inputsArray = [...inputs];

        //loop no inputs e validação mediante ao que for encontrado
        inputsArray.forEach(function(input) {
            
            //loop em todas as validações existentes
            for(let i = 0; this.validations.length > i; i++){
                if(input.getAttribute(this.validations[i])!=null){
                    
                    console.log('achou validação');
                }
            }

        }, this);
       
    }
}


let form = document.querySelector("form#register-form")
let submit = document.querySelector("input#btn-submit")

let validator = new Validator();

//evento que dispara as validações
submit.addEventListener('click',function(e) {
 
        e.preventDefault();

        validator.validate(form);
})