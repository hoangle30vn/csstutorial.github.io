let stores = ["store1", "store2", "store3", "store4"];
var store = document.getElementById("store");

function renderOption(store) {
    return `<option>${store}</option>`
}



Highcharts.chart('containerChart', {

    title: {
        text: 'MONTHLY TREND'
    },

    subtitle: {
        text: '_______________________________________'
    },

    yAxis: {
        title: {
            text: 'Number'
        }
    },

    xAxis: {
        title: {
            text: 'Month'
        }
        // accessibility: {
        //     rangeDescription: 'CHAOOOOOO MOI NGUOIIIIIIIIIIIIIIIIIIIIIIIIIIIIII'
        // }
    },

    // legend: {
    //     layout: 'vertical',
    //     align: 'right',
    //     verticalAlign: 'middle'
    // },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 1
        }
    },

    series: [{
        name: 'store',
        data: [40000, 40000, 40000, 40000, 40000, 19931, 40000, 40000, 40000, 40000, 40000]
    }, {
        name: 'store1',
        data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434, 50434, 30434, 10434]
    }, {
        name: 'store2',
        data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387, 40434, 50434, 60434]
    }, {
        name: 'store3',
        data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227, 30434, 50434, 30434]
    }, {
        name: 'store4',
        data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111, 10434, 14434, 20434]
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});


var tableDalyTrendList = document.getElementById("tableDalyTrendList");
console.log(tableDalyTrendList);
const data = [{
        Day: 'Monday',
        Last_month: 2000,
        This_month: '42%',
        Changes: '8%',
        increase: true,
    },
    {
        Day: 'Tueday',
        Last_month: 2000,
        This_month: '42%',
        Changes: '8%',
        increase: false,
    },
    {
        Day: 'Wednesday',
        Last_month: 2000,
        This_month: '42%',
        Changes: '8%',
        increase: true,
    },
    {
        Day: 'Thursday',
        Last_month: 2000,
        This_month: '42%',
        Changes: '8%',
        increase: false,
    },
    {
        Day: 'Saturday',
        Last_month: 2000,
        This_month: '42%',
        Changes: '8%',
        increase: true,
    },
    {
        Day: 'Sunday',
        Last_month: 2000,
        This_month: '42%',
        Changes: '8%',
        increase: false,
    }

];


function renderRowDalyTrend(item) {
    return `<tr class="tableTrThis">
  <td>${item.Day}</td>
  <td>${item.Last_month}</td>
  <td>${item.This_month}</td>` + renderIcon(item.increase, item.Changes) +
        '</tr>'
}

function renderIcon(increase, changes) {
    console.log(increase, changes);
    let value = increase == true ? '<i class="fas fa-arrow-up">' : '<i class="fas fa-arrow-down">';
    let res = '<td>' + value + ' ' + changes + '</i>' + '</td>';
    return res;
}

var tableReportAll = document.getElementById("tableAllList");
const dataAll = [{
        // No: 'Monday',
        Store: 'Store',
        Total_Visitor: 555,
        Visit_Duration: '15min',
        Total_Customer: 321,
        Returning_Customer: '3%',
        Cross_Shopping: '3%',
        Sale_Convertion: '3%'
    },
    {
        // No: 'Monday',
        Store: 'Store',
        Total_Visitor: 555,
        Visit_Duration: '15min',
        Total_Customer: 321,
        Returning_Customer: '3%',
        Cross_Shopping: '3%',
        Sale_Convertion: '3%'
    },
    {
        // No: 'Monday',
        Store: 'Store',
        Total_Visitor: 555,
        Visit_Duration: '15min',
        Total_Customer: 321,
        Returning_Customer: '3%',
        Cross_Shopping: '3%',
        Sale_Convertion: '3%'
    },
    {
        // No: 'Monday',
        Store: 'Store',
        Total_Visitor: 555,
        Visit_Duration: '15min',
        Total_Customer: 321,
        Returning_Customer: '3%',
        Cross_Shopping: '3%',
        Sale_Convertion: '3%',


    },
    {
        // No: 01,
        Store: 'Store',
        Total_Visitor: 555,
        Visit_Duration: '15min',
        Total_Customer: 321,
        Returning_Customer: '3%',
        Cross_Shopping: '3%',
        Sale_Convertion: '3%',

    }

];



function renderRowReportAll(item) {

    return `<tr>
  <td>${num}</td>
  <td>${item.Store}</td>
  <td>${item.Total_Visitor}</td>
  <td>${item.Visit_Duration}</td>
  <td>${item.Total_Customer}</td>
  <td>${item.Returning_Customer }</td>
  <td>${item.Cross_Shopping}</td>
  <td>${item.Sale_Convertion}</td>
  </tr>`

}
// tableTrThis.onclick = function() {
//     console.log(this);
// };

// var tableAllList = document.getElementById('tableAllList');
// var tableTrThis = document.getElementById('tableTrThis');
// $('#tableAllList').on('click', '.tableTrThis', function() {
//     $(this).closest('tr').remove();
//     // $(this) is the button
//     console.log(this);
// });


window.onload = (() => {

    for (let x of stores) {
        console.log(x);
        store.innerHTML += renderOption(x);
    }
    data.forEach(e => {
        tableDalyTrendList.innerHTML += renderRowDalyTrend(e);
    });
    num = 1;
    dataAll.forEach(e => {
        tableReportAll.innerHTML += renderRowReportAll(e);
        num = num + 1;
    });
})