/**
 * Created by ASia on 2017-06-15.
 */
var userType = 0;
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
        userType = $(this).val();
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
$("#rset").css('display', 'none');
$("#rset").click(function () {
    parent.location.reload();
});
$("#menu .btn").click(function () {
    $("#rset").css({'display': 'inline-block', 'margin-left': '25px'});
    if($("#fun_1").hasClass('active')){
        var a = $("#fun_1").val();
        $(".fun_1").show();
        $("#next").show();
        $(".userinfo").hide();
        $(".fun_3").hide()
    }
    if($("#fun_2").hasClass('active')){
        var a = $("#fun_2").val();
        $(".userinfo").show();
        $(".username").css('display','none');
        $(".anonymous").css('display','block');
        $(".fun_1").hide();
        $(".fun_3").hide()
    }
    if($("#fun_3").hasClass('active')){
        var a = $("#fun_3").val();
        $(".userinfo").hide();
        $(".fun_1").hide();
        $(".fun_3").show()
    }
});


