(() => {
    'use strict'

    // Fetch all forms to apply custom Bootstrap validation
    const forms = document.querySelectorAll('.needs-validation')
    
    // Loop over those forms and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if(!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }

            form.classList.add('was-validated')
        }, false)
    })
})()