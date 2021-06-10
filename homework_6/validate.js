window.addEventListener('load', function () {
    let form = document.querySelector("form");
    let inputs = document.querySelectorAll("input[type='text']");

    form.addEventListener('submit', onsubmitHandler)
    for (input of inputs) {
        input.addEventListener('change', handleChange)
    }

    function validate(elem, pattern) {
        let res = pattern.test(elem.value);
        if (res === false || elem.value.trim() === '') {
             elem.className = "invalid";
         }
         else {
             elem.className = "valid";
        }
    }

    function handleChange(e) {
         let target = e.target;
         let pattern;
         let inputName = target.getAttribute('name')
         if (inputName === 'userName') {
             pattern = /\S/;
         } else if (inputName === 'email') {
             pattern =  /\b[a-z0-9._]+@[a-z0-9.-]+\.[a-z]{2,4}\b/i;
         } else if (inputName === 'zip') {
             pattern = /\d{5}/;
        }
        validate(target, pattern)
    }
    
    function onsubmitHandler(e) {
        let valid;
        let elements = this.elements;

        for (let i = 0; i < elements.length - 1; ++i) {
            let element = elements[i];
            
            if (element.className == 'valid' && !!element.className) {
                valid = true;
            } else {
                valid = false;
            }
        }
        
        if (!valid) {
            alert('Fill up the form correctly');
            e.preventDefault();
            return false;
        }
    }
})