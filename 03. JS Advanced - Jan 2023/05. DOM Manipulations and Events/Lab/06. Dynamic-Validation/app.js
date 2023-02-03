function validate() {

    let input = document.getElementById('email');
    
    input.addEventListener('change', onChange);
    
    function onChange(event) {
        let mailValidation = /^[a-z]+[\._-]*[a-z][\._-]*[a-z]+@[a-z]+\.[a-z]+/gm;

        if(mailValidation.test(event.currentTarget.value)){
            event.currentTarget.classList.remove('error');
        }else{
            event.currentTarget.classList.add('error');
        }
        
    }

}