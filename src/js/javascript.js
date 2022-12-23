//CHARTJS

//CANVAS
Chart.defaults.global.defaultFontFamily = 'Poppins';
Chart.defaults.global.defaultFontSize = 12;
Chart.defaults.global.defaultFontColor = 'black';
var date, measureinfo, geoplacename, indicatorname, value;
var xmlhttp = new XMLHttpRequest();
var chart;
var myObj;
xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        myObj = JSON.parse(this.responseText);
        date = myObj.map(function (e) {
            return String(e.start_date).substring(0, 10);
        });
        measureinfo = myObj.map(function (e) {
            return e.measure_info;
        });
        geoplacename = myObj.map(function (e) {
            return String(e.geo_place_name);
        });
        indicatorname = myObj.map(function (e) {
            return String(e.name);
        });
        value = myObj.map(function (e) {
            return e.data_value;
        });
        var ctx = document.getElementById('canvas').getContext('2d');
        var config = {
            type: 'bar',
            data: {
                labels: places,
                datasets: [{
                    label: 'NOx',
                    data: valueNOx,
                    backgroundColor: '#f2e5e5',
                },
                {
                    label: 'Concentrazione media di Benzene nell\'aria',
                    data: valueAirTox,
                    backgroundColor: '#2b3a55',
                },
                {
                    label: 'SO2',
                    data: valueSO2,
                    backgroundColor: '#ce7777',
                }
                ]
            },
            options: {
                legend: {
                    display: true,
                    position: 'top',
                    labels: {
                        fontColor: 'black',
                        pointStyle: 'circle',
                        usePointStyle: true,
                    }
                },
                layout: {
                    padding: {
                        left: 50,
                        right: 0,
                        bottom: 0,
                        top: 0
                    }
                },
                tooltips: {
                    enabled: true
                }
            }
        };
        chart = new Chart(ctx, config);
        assigndatacanvas();
//PIECHART
        var barColors = ["#f2e5e5", "#2b3a55", "#ce7777"];
        var labels1 = ["NOx", "Benzene", "SO2"];
        const data1 = calcolavaloriny();
        new Chart("piechart", {
            type: "pie",
            data: {
                labels: labels1,
                datasets: [{
                    backgroundColor: barColors,
                    data: data1
                }]
            },
            options: {
                legend: {
                    display: true,
                    position: 'top',
                    labels: {
                        fontColor: 'black',
                        pointStyle: 'circle',
                        usePointStyle: true,
                    }
                }
            }
        });
    }
};
xmlhttp.open("GET", "https://data.cityofnewyork.us/resource/c3uy-2p5r.json", true);
xmlhttp.send();
const places = ["New York City", "Bronx", "Manhattan", "Queens", "Staten Island", "Brooklyn"];
const valueNOx = [];
const valueAirTox = [];
const valueSO2 = [];
function assigndatacanvas() {
    if (document.getElementById("tuttibutton").disabled == false) {
        document.getElementById("tuttibutton").classList.add("buttoncanvasselected");
        document.getElementById("tuttibutton").classList.remove("buttoncanvas");
        document.getElementById("tuttibutton").disabled = true;
        document.getElementById("nordbutton").classList.add("buttoncanvas");
        document.getElementById("nordbutton").classList.remove("buttoncanvasselected");
        document.getElementById("nordbutton").disabled = false;
    }
    for (var i = 0; i < date.length; i++) {
        if (indicatorname[i] == "Boiler Emissions- Total NOx Emissions") {
            for (var j = 0; j < places.length; j++) {
                if (places[j] == geoplacename[i]) {
                    var k = valueNOx.length;
                    valueNOx[k] = value[i];
                }
            }
        }
        if (indicatorname[i] == "Air Toxics Concentrations- Average Benzene Concentrations") {
            for (var j = 0; j < places.length; j++) {
                if (places[j] == geoplacename[i]) {
                    var k = valueAirTox.length;
                    valueAirTox[k] = value[i];
                }
            }
        }
        if (indicatorname[i] == "Boiler Emissions- Total SO2 Emissions") {
            for (var j = 0; j < places.length; j++) {
                if (places[j] == geoplacename[i]) {
                    var k = valueSO2.length;
                    valueSO2[k] = value[i];
                }
            }
        }

    }
    chart.data.labels = places;
    chart.data.datasets[0].data = valueNOx;
    chart.data.datasets[1].data = valueAirTox;
    chart.data.datasets[2].data = valueSO2;
    chart.update();
}
function mostranordcanvas() {
    if (document.getElementById("nordbutton").disabled == false) {
        document.getElementById("nordbutton").classList.add("buttoncanvasselected");
        document.getElementById("nordbutton").classList.remove("buttoncanvas");
        document.getElementById("nordbutton").disabled = true;
        document.getElementById("tuttibutton").classList.add("buttoncanvas");
        document.getElementById("tuttibutton").classList.remove("buttoncanvasselected");
        document.getElementById("tuttibutton").disabled = false;
    }
    const nplaces = ["Bronx", "Manhattan", "Queens"];
    const nvalueNOx = [];
    const nvalueAirTox = [];
    const nvalueSO2 = [];
    for (var i = 0; i < places.length; i++) {
        for (var j = 0; j < nplaces.length; j++) {
            if (places[i] == nplaces[j]) {
                nvalueNOx[j] = valueNOx[i];
                nvalueAirTox[j] = valueAirTox[i];
                nvalueSO2[j] = valueSO2[i];
            }
        }
    }
    chart.data.labels = nplaces;
    chart.data.datasets[0].data = nvalueNOx;
    chart.data.datasets[1].data = nvalueAirTox;
    chart.data.datasets[2].data = nvalueSO2;
    chart.update();
}
function calcolavaloriny() {
    const datany = [valueNOx[0], valueAirTox[0], valueSO2[0]];
    return datany;
}
//2.0

