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

    // console.log( startValueRub );

    let refundStart = Math.round( (startValueRub*13)/100 );
    if( refundStart > 42000 ){
        if( startValueRub >= 400000){
            refundStart = 52000;
        }else{
            refundStart = 42000;
        }
    }
    $("#refundData").text( (new Intl.NumberFormat("ru-RU", { useGrouping: true, minimumFractionDigits: 0 })).format(Number(refundStart)) );

    // let yeildStart = Math.round( (startValueRub*(1 + percent*period/100) + refundStart*period) );
    let yeildStart = Math.round( startValueRub*( Math.pow( (1+ percent/100), period ) ) + refundStart);
    
    // console.log( 'сумма инвестиции: ' + startValueRub);
    // console.log( 'возврат от государства: ' + refundStart);
    // console.log( 'сложный процент: ' + Math.pow( (1+ percent/100), period ) );

    $("#yieldData").text( (new Intl.NumberFormat("ru-RU", { useGrouping: true, minimumFractionDigits: 0 })).format(Number(yeildStart)) );

    if( $("#calculatorSlider").length > 0 ){
        $("#calculatorSlider").slider({
            range: "min",
            value: startValue,
            min: minValue,
            step: 0.5,
            max: maxValue,
            slide : function(event, ui) {
                let value = Math.round(ui.value*100000);
                let valueConv = (new Intl.NumberFormat("ru-RU", { useGrouping: true, minimumFractionDigits: 0 })).format(Number(value));
                $("#incomingData").text(valueConv);
                
                // console.log(value);

                let refund = Math.round( (value*13)/100 );
                if( refund > 42000 ){
                    if( value >= 400000){
                        refund = 52000;
                    }else{
                        refund = 42000;
                    }
                }
                let refundConv = (new Intl.NumberFormat("ru-RU", { useGrouping: true, minimumFractionDigits: 0 })).format(Number(refund));
                $("#refundData").text(refundConv);

                // let result = Math.round( (value*(1 + percent*period/100) + refund*period) );
                let result = Math.round( value*( Math.pow( (1+ percent/100), period ) ) + refund);
                // let result = 0;
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