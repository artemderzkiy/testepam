$(function(){
    $('#price').focusout(function(){
        this.value = accounting.formatMoney(this.value);
    });
});


