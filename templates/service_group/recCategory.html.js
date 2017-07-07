/**
 * Created by Administrator on 2017/6/20 0020.
 */
function CancelOrder(){
    if(confirm("是否取消订单？")){
        window.location.href="#/service_group/home";
    }
}

$(".table tr").each(function () {
    var val = $(this).find("td:eq(1)>input");
    var total = $(this).find("td:eq(3)>span");
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
                alert("请填写数字！");
            }
        }
    });
});