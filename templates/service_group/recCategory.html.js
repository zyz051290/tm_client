/**
 * Created by Administrator on 2017/6/20 0020.
 */
function CancelOrder(){
    if(confirm("是否取消订单？")){
        window.location.href="#/service_group/home";
    }
}
$("#recycle_tab td input").blur(function () {
   var a = $(this).val();
   var b =$(this).parent;
   alert(b);
});