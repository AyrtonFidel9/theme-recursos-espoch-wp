function submit_sugerencias_form()
{
    var fd = new FormData();
    fd.append('sugerenciasFormSubmit','1');
    fd.append('Nombre',$("#nombre").val());
    fd.append('Correo',$("#email").val());
    fd.append('Sugerencia',$("#sugerencia").val()); 
    js_submit(fd,submit_sugerencias_form_callback);
}

function submit_sugerencias_form_callback(data)
{
    console.log(data);
    var jdata = JSON.parse(data);
    if(jdata.success == 1)
    {
        var mess = jdata.message;

        $("#response_div").html(mess);

    }
}

function js_submit(fd,callback){
    var submitUrl = 'http://www.recursoswebpage.local/wp-content/plugins/sugerencias-form/process/';
    $.ajax({
        url:submitUrl,
        type:'post',
        data:fd, 
        contentType:false, 
        processData:false,
        success: function(response){ 
            console.log(response);
            callback(response);
        },
    });
}