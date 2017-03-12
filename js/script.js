var Menu = {
    LeerOpciones: function() {
        Mensajeria.CargardoInicio();

        try {
            $.getJSON('data/data.json', function(data) {
                if (data.estado) {

                    var itemsMenu = [];
                    $.each(data.menu,
                        function(i, item) {
                            var obj = $.parseJSON(item);
                            window.console && console.log(obj);
                            itemsMenu.push("<li><a href=" + obj[1] + ">" + obj[0] + "</a></li>");
                        }
                    );

                    var menuFinal = itemsMenu.join("");
                    window.console && console.log(menuFinal);
                    $("#MenuDinamico").html(menuFinal);
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