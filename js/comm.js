$("#finish").click(function () {
    /*
     根据数量进行对比
     */
    $(".modal-footer").css('display', 'none');
    $(".table tr").not(":eq(0)").each(function () {
        var num = $(this).find("td:eq(1)>input").val();
        if (num != 0) {
            window.location.href = "#/purchaser/recList";
            return false;
        }
        $("#myModal").css('display', 'block');
        $("#myModal").addClass("in");
        $("#myModal").fadeToggle(2000);
        $(".modal-body").text("请至少选择一项输入数量！");
    })

});
/**
 * 取消
 */
$("#cancel").click(function () {
    $("#myModal").css({'display': 'block'});
    $(".modal-footer").css('display', 'block');
    $("#myModal").addClass("in");
    $(".modal-body").text("确定取消？");
    $("#goback").click(function () {
        window.location.href = '#/purchaser/home';
    });
});
/**
 *
 */
$(".table tr").each(function () {
    var val = $(this).find("td:eq(1)>input");
    var total = $(this).find("td:eq(3)>span")
    var unit = $(this).find("td:eq(2)").text();
    $(this).find("td:eq(1)>input").focus(function () {
        if (this.value == 0) {
            this.value = "";
        }
    });
    $(this).find("td:eq(1)>input").blur(function () {
        if (this.value == '') {
            this.value = 0;
            total.text(unit * this.value);
        }
        if (this.value != '') {
            if (!isNaN(this.value)) {
                total.text(unit * this.value);
            } else {
                this.value = 0;
                $("#myModal").css('display', 'block');
                $("#myModal").addClass("in");
                $("#myModal").fadeToggle(2000);
                $(".modal-body").text("请填写数字！");
            }
        }
    });
});