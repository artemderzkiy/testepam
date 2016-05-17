//функция которая должна бы конвертить число в вид длоллара


$(function(){
    $('#price').focusout(function(){
        this.value = accounting.formatMoney(this.value);
    });
});


