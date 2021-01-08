console.log('cela fonctionne');


$(document).ready(function () {
    $('.submit').click(function () {
        
        console.log('Cliqué')

        var email = $('.email').val()
        var nom = $('.name').val()
        var message = $('.message').val()
        var statusElm = $('.status')
        statusElm.empty()

        if (email.length >= 5 && email.includes('@') && email.includes('.') && email.includes){
            statusElm.append(`<div> C'est bon</div>`)
        } else{
            event.preventDefault()
            statusElm.append(`<div> C'est pas bon du tout </div>`)

        }
        
    }
    );
})