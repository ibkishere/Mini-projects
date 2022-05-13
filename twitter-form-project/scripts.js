document.addEventListener("DOMContentLoaded", () => {
        document.querySelectorAll(".form_input").forEach( function (input) {
            input.addEventListener('input', () => {
                input.className = input.className.replace(/.form_input_error ?/, "")})
        })
    }) 
