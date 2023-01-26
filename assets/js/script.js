function getData() {
    let name = document.getElementById('name').value
    let email = document.getElementById('email').value
    let telp = document.getElementById('telp').value
    let subject = document.getElementById('subject').value
    let message = document.getElementById('message').value



    if (name == "") {
        const submit = document.querySelector('#submit')
        submit.addEventListener('click', function () {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                footer: '<a href="">Please fill in your name </a>'
            })
        })

    } else if (email == "") {
        const submit = document.querySelector('#submit')
        submit.addEventListener('click', function () {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                footer: '<a href="">Please fill in your email </a>'
            })
        })

    } else if (telp == "") {
        const submit = document.querySelector('#submit')
        submit.addEventListener('click', function () {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                footer: '<a href="">Please fill in your phone number </a>'
            })
        })

    } else if (subject == "") {
        const submit = document.querySelector('#submit')
        submit.addEventListener('click', function () {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                footer: '<a href="">Please fill in your subject </a>'
            })
        })

    } else if (message == "") {
        const submit = document.querySelector('#submit')
        submit.addEventListener('click', function () {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                footer: '<a href="">Please fill in your message </a>'
            })
        })

    } else {

        const myEmail = "halimawaludienkhafifie@gmail.com"

        let mailTo = document.createElement('a')
        mailTo.href = `mailTO:${myEmail}?subject=${subject}&body=Hallo perkenalkan nama saya ${name}, saya ingin ${subject} untuk ${message} tolong hubungi saya ${telp}.`
        mailTo.click()

        const submit = document.querySelector('#submit')
        submit.addEventListener('click', function () {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your work has been saved',
                showConfirmButton: false,
                timer: 1500
            })
        })
        let form = document.getElementById("form");
        form.reset();


    }

}
