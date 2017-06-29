/**
 * Created by Administrator on 2017/6/23 0023.
 */
$('#attention').hide();
function select() {
    if(($('#scanning').val()==""||$('#scanning').val()==null) && ($('#username').val()==""||$('#username').val()==null)){
        $('#attention').show();
    }else {
        $('#attention').hide();
        if($('#scanning').val()=="12321"||$('#username').val()=="ttj"){
            kk.submit();
        }else{
            $('#myModal').show();
        }
    }
}