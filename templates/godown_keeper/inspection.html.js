/**
 * Created by Administrator on 2017/6/15 0015.
 */

$('.btn-group>.btn').click(function() {
    var parentEle = $(this).parent();
    if (parentEle.hasClass('single-check')) {
        parentEle.find('.btn').each(function() {
            $(this).removeClass('active');
            $(this).removeClass('btn-success');
            $(this).addClass('btn-default');
        });
        $(this).addClass('active');
        $(this).removeClass('btn-default');
        $(this).addClass('btn-success');
    } else {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $(this).addClass('active');
        }
        if ($(this).hasClass('btn-success')) {
            $(this).removeClass('btn-success');
        } else {
            $(this).addClass('btn-success');
        }
    }
});
$('#types .btn').click(function() {
    if($('#btn_1').hasClass('active')){
        $('#tb1').show();
        $('#tb1_btn').show();
        $('#tb2').hide();
        $('#tb3').hide();
    }
    if($('#btn_2').hasClass('active')){
        $('#tb2').show();
        $('#tb1_btn').hide();
        $('#tb1').hide();
        $('#tb3').hide();
    }
    if($('#btn_3').hasClass('active')){
        $('#tb3').show();
        $('#tb1_btn').hide();
        $('#tb2').hide();
        $('#tb1').hide();
    }
});
$("#check").click(function(){//全选 或全不选
    var aa=$(":checkbox[name='sem']");
    if(this.checked){
        for(i=0;i<aa.length;i++){
            aa[i].checked=true;//把对应项的checked属性设置为true
        }
    }else{
        for(i=0;i<aa.length;i++){
            aa[i].checked=false;//把对应项的checked属性设置为true
        }
    }
});
function selectRadio(i){
    if(i==1){
        window.location.href='#/godown_keeper/uninspected';
    }
    if(i==2){
        window.location.href='#/godown_keeper/inspected';
    }
    if(i==3){
        window.location.href='#/godown_keeper/hanging';
    }
}