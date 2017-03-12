var Menu = {
    LeerOpciones: function() {
        try {
            WebService.Consumir(
                'data/data.json',
                '',
                function() { Mensajeria.CargardoInicio(); },
                function(data) {
                    var obj = data; //$.parseJSON(data.d);
                    window.console && console.log(obj);

                    if (obj.estado) {
                        $.each(obj.menu,
                            function(i, item) {
                                window.console && console.log(item);
                            }
                        );
                    }

                    /*if (!obj.estado) {
                        Error.Alerta('[REP018] Ha ocurrido un error al procesar el reporte, comuniquese con sistemas.', obj.mensaje, true);
                    } else {
                        $('#ReporteCabecera').html('');

                        var table = $('#GrillaReporte').DataTable();
                        table.clear().draw();

                        $.each(obj.objeto.nombrecolumnas,
                            function (i, item) {
                                $('#ReporteCabecera').append('<th>' + item + '</th>');
                            }
                        );
                    }*/

                    Mensajeria.CargardoFin();
                },
                function(data) {
                    Error.Alerta("[REP019] No se ha logrado procesar el reporte, comuniquese con sistemas.", data, true);
                }
            );
        } catch (e) {
            var mensajeComun = "Error al leer las opciones del menu, comuniquese con el administrador del sitio.";
            var mensajeError = mensajeComun;
            var mensajeInterno = mensajeComun + " [" + e.name + "] :" + e.message;
            Error.Alerta(mensajeError, mensajeInterno, false);
        }

        return false;
    }
}