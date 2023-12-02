
const nombre = document.getElementById('nombre');
const apellidos = document.getElementById('apellidos');
const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
        if ( nombre.value == '') {
            e.preventDefault();
            document.getElementById("labelnombre").style.color = "red";
            document.getElementById("nombre").style.borderBlockColor = "red";
            alert('El campo de "Nombre" es obligatorio');
        }

        if ( apellidos.value == '') {
            e.preventDefault();
            document.getElementById("labelapellidos").style.color = "red";
            document.getElementById("apellidos").style.borderBlockColor = "red";
            alert('El campo de "Apellidos" es obligatorio');
        }
    })