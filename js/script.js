var Menu = {
    LeerOpciones: function() {
        Mensajeria.CargardoInicio();

        try {
            $.getJSON('data/data.json', function(data) {
                if (data.estado) {

                    var itemsMenu = [];
                    $.each(data.menu,
                        function(key, val) {
                            itemsMenu.push("<li><a href=" + val.pagina + ">" + val.opcion + "</a></li>");
                        }
                    );

                    $("#MenuDinamico").html(itemsMenu.join(""));
                }
            });

        } catch (e) {
            var mensajeComun = "Error al leer las opciones del menu, comuniquese con el administrador del sitio.";
            var mensajeError = mensajeComun;
            var mensajeInterno = mensajeComun + " [" + e.name + "] :" + e.message;
            Error.Alerta(mensajeError, mensajeInterno, false);
        }

        Mensajeria.CargardoFin();
        return false;
    }
}