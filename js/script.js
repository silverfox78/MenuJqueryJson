var Menu = {
    LeerOpciones: function() {
        try {
            $.getJSON('data/data.json', function(data) {
                if (data.estado) {

                    var itemsMenu = [];
                    $.each(data.menu,
                        function(i, item) {
                            window.console && console.log(item);
                            items.push("<li><a href=" + item[1] + ">" + item[0] + "</a></li>");
                        }
                    );

                    $("#MenuDinamico").html(items.join(""));
                }

                /*var items = [];
                $.each(data, function(key, val) {
                    
                });

                $("<ul/>", {
                    "class": "my-new-list",
                    html: items.join("")
                }).appendTo("body");*/
            });

        } catch (e) {
            var mensajeComun = "Error al leer las opciones del menu, comuniquese con el administrador del sitio.";
            var mensajeError = mensajeComun;
            var mensajeInterno = mensajeComun + " [" + e.name + "] :" + e.message;
            Error.Alerta(mensajeError, mensajeInterno, false);
        }

        return false;
    }
}