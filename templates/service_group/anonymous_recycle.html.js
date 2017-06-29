/**
 * Created by Administrator on 2017/6/20 0020.
 */
$(function () {
$("#anonymous_form").validate({
    focusInvalid : true,
    onkeyup : false,
    submitHandler:function(form){
        form.submit();
    },
    rules: {
        username: {
            required:true
        },
        cperson: "required",
        cphone: {
            required:true,
            number:true,
            rangelength:[11,11]
        },
        address: "required"
    },
    messages: {
        username: {
            required:"请输入单位名称"
        },
        cperson: "请输入联系人",
        cphone: {
            required:"请输入联系方式",
            number:"请输入数字",
            rangelength:"请输入正确的联系方式（电话号码前加区号）"
        },
        address: "请输入地址"
    }
});
});