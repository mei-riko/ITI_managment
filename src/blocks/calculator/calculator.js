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

    let refundStart = Math.round( (startValueRub*13)/100 );
    if( refundStart > 42000 ){
        refundStart = 42000;
    }
    $("#refundData").text( (new Intl.NumberFormat("ru-RU", { useGrouping: true, minimumFractionDigits: 0 })).format(Number(refundStart)) );

    let yeildStart = Math.round( (startValueRub*(1 + percent*period/100) + refundStart*period) );
    $("#yieldData").text( (new Intl.NumberFormat("ru-RU", { useGrouping: true, minimumFractionDigits: 0 })).format(Number(yeildStart)) );


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
                
                let refund = Math.round( (value*13)/100 );
                if( refund > 42000 ){
                    refund = 42000;
                }
                let refundConv = (new Intl.NumberFormat("ru-RU", { useGrouping: true, minimumFractionDigits: 0 })).format(Number(refund));
                $("#refundData").text(refundConv);

                let result = Math.round( (value*(1 + percent*period/100) + refund*period) );
                let resultConv = (new Intl.NumberFormat("ru-RU", { useGrouping: true, minimumFractionDigits: 0 })).format(Number(result));
                $("#yieldData").text(resultConv);
            }
        });
    }

    $(".calculator .calculator__link").on('click', function(e){
        e.preventDefault();
        $(".calculator .calculator__modal").addClass('calculator__modal--active');
        $(".calculator .calculator__modal").slideDown();
    });

    $(".calculator .calculator__modal .calculator__modal-close").on('click', function(e){
        e.preventDefault();
        $(".calculator .calculator__modal").removeClass('calculator__modal--active');
        $(".calculator .calculator__modal").slideUp();
    });
});