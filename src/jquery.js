$(document).ready(function () {
    //REGISTRAZIONE.HTML
    $('#submit_registrazione').click(function () {
        $("#form_registrazione").hide(300);
        $("#check_validazione").show(300);
        $("#check_validazione i").show(1000);
        setTimeout(function(){
            $("#redirectmessage").fadeToggle(1000);
        }, 4000);
        setTimeout(function(){
            window.location.replace("index.html");
        }, 10000);

    });
    //EVENTI.HTML
});