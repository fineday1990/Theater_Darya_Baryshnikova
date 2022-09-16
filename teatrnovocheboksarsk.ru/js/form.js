document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');
    form.addEventListener('submit', formSend);

    async function formSend(e) {
        e.preventDefault();

        var error = formValidate(form);

        if (error === 0) {
            var form_data = jQuery(this).serialize(); // Собираем данные из полей
            jQuery.ajax({
                type: 'POST', // Метод отправки
                url: 'sendform.php', // Путь к PHP обработчику sendform.php
                data: form_data,
                success: swal({
                    title: 'Спасибо за заявку!',
                    type: 'success',
                    showConfirmButton: false,
                    timer: 2000,
                }),
            });
        } else {
            alert('Заполните обязательные поля');
        }
    }

    function formValidate(e) {
        let error = 0;
        let formReq = document.querySelectorAll('._req');

        for (let index = 0; index < formReq.length; index++) {
            const input = formReq[index];
            formRemoveError(input);

            if (
                input.getAttribute('type') === 'checkbox' &&
                input.checked === false
            ) {
                formAddError(input);
                error++;
            } else {
                if (input.value === '') {
                    formAddError(input);
                    error++;
                }
            }
        }
        return error;
    }

    function formAddError(input) {
        input.parentElement.classList.add('_error');
        input.classList.add('_error');
    }
    function formRemoveError(input) {
        input.parentElement.classList.remove('_error');
        input.classList.remove('_error');
    }
});
