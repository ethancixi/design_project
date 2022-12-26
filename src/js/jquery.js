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
    //INDEX.HTML
    var giornosettimana=$("#dayweek").html();
    controllagiornisettimana(giornosettimana);
    
});
function controllagiornisettimana(giorno){
    if(giorno=="Monday"){
        $("#lun").addClass("giornoattuale");
    }
    else if(giorno=="Tuesday"){
        $("#mar").addClass("giornoattuale");
    }
    else if(giorno == "Wednesday"){
        $("#mer").addClass("giornoattuale");
    }
    else if(giorno == "Thursday"){
        $("#gio").addClass("giornoattuale");
    }
    else if(giorno == "Friday"){
        $("#ven").addClass("giornoattuale");
    }
    else if(giorno == "Saturday"){
        $("#sab").addClass("giornoattuale");
    }
    else if(giorno == "Sunday"){
        $("#dom").addClass("giornoattuale");
    }
}