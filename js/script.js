var Menu = {
    LeerOpciones: function() {
        try {
            $.getJSON('data/data.json', function(data) {
                if (data.estado) {

                    var itemsMenu = [];
                    $.each(data.menu,
                        function(i, item) {
                            window.console && console.log(item);
                            itemsMenu.push("<li><a href=" + item[1] + ">" + item[0] + "</a></li>");
                        }
                    );

                    var menuFinal = itemsMenu.join("");
                    window.console && console.log(menuFinal);
                    $("#MenuDinamico").html(menuFinal);
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