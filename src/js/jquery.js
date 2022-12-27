$(document).ready(function () {
    //REGISTRAZIONE.HTML
    $('#submit_registrazione').click(function () {
        $("#form_registrazione").hide(300);
        $("#check_validazione").show(300);
        $("#check_validazione i").show(1000);
        setTimeout(function () {
            $("#redirectmessage").fadeToggle(1000);
        }, 4000);
        setTimeout(function () {
            window.location.replace("index.html");
        }, 10000);

    });
    //INDEX.HTML
    var giornosettimana = $("#dayweek").html();
    controllagiornisettimana(giornosettimana);
    caroselloimmagini();

});
function controllagiornisettimana(giorno) {
    if (giorno == "Monday") {
        $("#lun").addClass("giornoattuale");
    }
    else if (giorno == "Tuesday") {
        $("#mar").addClass("giornoattuale");
    }
    else if (giorno == "Wednesday") {
        $("#mer").addClass("giornoattuale");
    }
    else if (giorno == "Thursday") {
        $("#gio").addClass("giornoattuale");
    }
    else if (giorno == "Friday") {
        $("#ven").addClass("giornoattuale");
    }
    else if (giorno == "Saturday") {
        $("#sab").addClass("giornoattuale");
    }
    else if (giorno == "Sunday") {
        $("#dom").addClass("giornoattuale");
    }
}
function caroselloimmagini() {
    const arraysources = ["../assets/img/carousel_img/carousel1.jpg", "../assets/img/carousel_img/carousel2.jpg", "../assets/img/carousel_img/carousel3.jpg",
        "../assets/img/carousel_img/carousel4.jpg", "../assets/img/carousel_img/carousel5.jpg"];
    const arrayparagraphs = ["Crediamo nei sogni e nella possibilità di realizzarli grazie ad un insieme di sforzi collettivi",
        "Crediamo nella libertà di essere se stessi e crediamo che un mondo diverso sia possibile",
        "Crediamo nelle persone come mezzo di diffusione di idee e soluzioni a problematiche",
        "Ci spingiamo oltre i nostri limiti per difendere ogni giorno ciò a cui più teniamo: il nostro pianeta",
        "Costruiamo ponti fra persone, per garantire una solida diffusione delle tematiche che weAct supporta"];
    $("#imgcarosello").attr("src", arraysources[0]);
    $("#pcarosello").html(arrayparagraphs[0]);
    $("#indicecarosello").html("1/"+arraysources.length);
    $("#avanti").click(function () {
        var src = $("#imgcarosello").attr("src");
        var posizione = arraysources.indexOf(src);
        $("#indietro").prop("disabled", false);
        if (posizione == arraysources.length - 2) {
            $("#avanti").prop("disabled", true);
            
        }
        posizione++;
        $("#imgcarosello").attr("src", arraysources[posizione]);
        $("#pcarosello").html(arrayparagraphs[posizione]);
        $("#indicecarosello").html((posizione+1)+"/"+arraysources.length);
    })
    $("#indietro").click(function () {
        var src = $("#imgcarosello").attr("src");
        var posizione = arraysources.indexOf(src);
        $("#avanti").prop("disabled", false);
        if (posizione == 1) {
            $("#indietro").prop("disabled", true);
        }
        posizione--;
        $("#imgcarosello").attr("src", arraysources[posizione]);
        $("#pcarosello").html(arrayparagraphs[posizione]);
        $("#indicecarosello").html((posizione+1)+"/"+arraysources.length);
    })
}