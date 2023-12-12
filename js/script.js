
const nombre = document.getElementById('nombre');
const apellidos = document.getElementById('apellidos');
const form = document.getElementById('form');
const selector = document.getElementById('size');

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

$("#size").on('change', function() {
    console.log(this.value);
    $.ajax({
        type: "POST",
        url: "http://localhost:5000/checksize",
        data: "size=" + this.value,
        success: function(data){
            console.log(data)
            $("#result_size").text(data);
            },
        })
});