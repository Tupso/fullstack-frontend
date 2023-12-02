$(function() {

    $("form").on('submit', (e) => {
        if ( nombre.value == '') {
            e.preventDefault();
            $('#labelnombre').css('color', 'red');
            $('#nombre').css('borderBlockColor', 'red');
            alert('El campo de "Nombre" es obligatorio');
        }
        if ( apellidos.value == '') {
            e.preventDefault();
            $('#labelapellidos').css('color', 'red');
            $('#apellidos').css('borderBlockColor', 'red');
            alert('El campo de "Apellidos" es obligatorio');
        }
})
})

