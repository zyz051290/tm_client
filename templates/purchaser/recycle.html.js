/**
 * Created by ASia on 2017-06-15.
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
$("#menu .btn").click(function () {
    if($("#fun_1").hasClass('active')){
        var a = $("#fun_1").val();
        $(".fun_1").show(500);
        $("#next").show(500);
        $(".panel-body").hide(500);
        $(".fun_3").hide(500)
    }
    if($("#fun_2").hasClass('active')){
        var a = $("#fun_2").val();
        $(".panel-body").show(500);
        $(".username").css('display','none');
        $(".anonymous").css('display','block');
        $(".fun_1").hide(500);
        $(".fun_3").hide(500)
    }
    if($("#fun_3").hasClass('active')){
        var a = $("#fun_3").val();
        $(".panel-body").hide(400);
        $(".fun_1").hide(500);
        $(".fun_3").show(500)
    }
});


