const refs = {
    inputsEl: document.querySelectorAll('input'),
    formEl: document.querySelector('.login-form'),

};

refs.formEl.addEventListener('submit', onFormSubmit);



function onFormSubmit(event) {
    event.preventDefault();

    refs.inputsEl.forEach(input => {
        if (input.value === '') {
            alert("error: Всі поля повинні бути заповнені !!!!!");
            return;
        };
        const formData = new FormData(event.currentTarget);
        formData.forEach((value, name) => {
            console.log('name:', name);
            console.log('value:', value);
            
        });
        
    });
    
};

