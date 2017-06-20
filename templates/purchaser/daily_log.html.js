/**
 * Created by Administrator on 2017/6/15 0015.
 */

$('.btn-group>.btn').click(function () {
    var parentEle = $(this).parent();
    if (parentEle.hasClass('single-check')) {
        parentEle.find('.btn').each(function () {
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