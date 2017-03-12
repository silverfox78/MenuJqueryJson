var Menu = {
    LeerOpciones: function() {
        try {
            $.getJSON('data/data.json', function(data) {
                var items = [];
                $.each(data, function(key, val) {
                    items.push("<li id='" + key + "'>" + val + "</li>");
                });

                $("<ul/>", {
                    "class": "my-new-list",
                    html: items.join("")
                }).appendTo("body");
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