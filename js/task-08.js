// const formEl = document.querySelector('.login-form');

// formEl.addEventListener('submit', onFormSubmit);


// function onFormSubmit(event) {
//     event.preventDefault();
    
//     const {email, password} = event.currentTarget.elements;

//     if (email.value === '' || password.value === '') {
//         alert("error: Всі поля повинні бути заповнені !!!!!");
//         return;
//     } 
//     const formData = {
//         email: email.value,
//         password: password.value,
//     }
//     console.log(formData);
   
//     event.currentTarget.reset();
   
    
    
// }




// спосіб 2 треба доробити
const refs = {
    form: document.querySelector('.login-form'),
    inputs: document.querySelectorAll('input'),
};
 

refs.form.addEventListener('submit', onFormSubmit );

function onFormSubmit(event) {
    event.preventDefault();
    
    refs.inputs.forEach(input => {

        if (input.value === '') {
            alert("error: Усі поля повинні бути заповнені!!!");
            return;
        }
    });
    
    const formData = new FormData(event.currentTarget);
    formData.forEach((value, name) => {
        console.log(`name :`, name );
        console.log(`value :`, value);
    });
    
    
    event.currentTarget.reset();
}




//   const formData =  new FormData(event.currentTarget);

//   console.log(formData);
//    
//   formData.forEach((value, name) => {
//     console.log(`name`, name );
//     console.log(`value`, value);
//   });

//   document.getElementById("login-form").reset();
// }
// function validate_form ()
// {
//     valid = true;

//         if ( document.login-form.email.password.value == "" )
//         {
//                 alert ( "Все поля должны быть заполнены." );
//                 valid = false;
//         }

//         return valid;
// }
// inputs.foreach(input => {
//     if (input.value.trim() === '') { 
//     alert("error")
//     }
// }
//     const inputs = document.querySelectorAll('input');
