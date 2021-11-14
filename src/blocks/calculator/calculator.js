import $ from 'jquery';

$(function() {
    let percent = $(".calculator").data("percent");
    let stragery = $(".calculator").data("stragery");
    let period = $(".calculator").data("period");
    // Минимальная сумма
    let minValue = $(".calculator").data("min");
    let minValueRub = Math.round(minValue*100000);
    // Максимальная сумма
    let maxValue = $(".calculator").data("max");

    // Стартовая сумма
    let startValue = $(".calculator").data("start");
    let startValueRub = Math.round(startValue*100000);
    $("#incomingData").text( (new Intl.NumberFormat("ru-RU", { useGrouping: true, minimumFractionDigits: 0 })).format(Number(startValueRub)) );

    let yeildStart = Math.round( (startValueRub*period*percent)/100 );
    $("#yieldData").text( (new Intl.NumberFormat("ru-RU", { useGrouping: true, minimumFractionDigits: 0 })).format(Number(yeildStart)) );

    let refundStart = Math.round( (yeildStart*13)/100 );
    $("#refundData").text( (new Intl.NumberFormat("ru-RU", { useGrouping: true, minimumFractionDigits: 0 })).format(Number(refundStart)) );

    if( $("#calculatorSlider").length > 0 ){
        $("#calculatorSlider").slider({
            range: "min",
            value: startValue,
            min: minValue,
            max: maxValue,
            slide : function(event, ui) {
                let value = Math.round(ui.value*100000);
                let valueConv = (new Intl.NumberFormat("ru-RU", { useGrouping: true, minimumFractionDigits: 0 })).format(Number(value));
                $("#incomingData").text(valueConv);
                
                let result = Math.round( (period*value*percent)/100 );
                let resultConv = (new Intl.NumberFormat("ru-RU", { useGrouping: true, minimumFractionDigits: 0 })).format(Number(result));
                $("#yieldData").text(resultConv);
    
                let refund = Math.round( (result*13)/100 );
                let refundConv = (new Intl.NumberFormat("ru-RU", { useGrouping: true, minimumFractionDigits: 0 })).format(Number(refund));
                $("#refundData").text(refundConv);
            }
        });
    }
});