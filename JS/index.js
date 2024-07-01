$(document).ready(function(){
    $("#bt2").click(function(){
        $("#myModal").modal();
    });
    $("#bt1").click(function(){
        $("#myModaldangnhap").modal();
    });
    $("#btndathangtc").click(function(){
        alert("Đặt thành công")
    });

    //Kiểm tra đăng kí
    function kiemTraTen(){
        let regexTen=/^[A-Z][a-zA-Z]*(\s[A-Z][a-zA-Z]*)*$/;
        if($("#Name").val()==""){
            $("#tbName").html("Họ tên không được để trống");
            return false;
        }
        if(!regexTen.test($("#Name").val())){
            $("#tbName").html("Họ tên không hợp lệ");
            return false;
        }
        $("#tbName").html("*");
            return true;
    }
    $("#Name").blur(kiemTraTen);



    function KTMail() {
        var regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if ($("#Em").val() == "") {
            $("#tbEm").html("Email không được bỏ trống");
            return false;
        }
        if (!regexEmail.test($("#Em").val())) {
            $("#tbEm").html("Email không hợp lệ");
            return false;
        }
        $("#tbEm").html("*");
        return true;
    }
    $("#Em").blur(KTMail);


    function kiemTraDiaChi(){
        if($("#DC").val()==""){
            $("#tbDc").html("Địa chỉ không được bỏ trống");
            return false;
        }
        $("#tbDc").html("*");
            return true;
    }
    $("#DC").blur(kiemTraDiaChi);

    function kiemTraNS(){
        if($("#NS").val()==""){
            $("#tbNS").html("Ngày sinh không được bỏ trống");
            return false;
        }
        var day = new Date($("#NS").val());
        var today = new Date();
        today.setDate(today.getDate());
        if (day > today) {
            $("#tbNS").html("Ngày sinh không được sau ngày hiện hành");
            return false;
        }
        $("#tbNS").html("*");
            return true;
    }
    $("#NS").blur(kiemTraNS);

    function kiemTraSDT(){
        let regexSoDienThoai=/(09|07|08)+(\d{8})\b/g;
        if($("#SDT").val()==""){
            $("#tbSDT").html("Số điện thoại không được bỏ trống");
            return false;
        }
        if(!regexSoDienThoai.test($("#SDT").val())){
            $("#tbSDT").html("Số điện thoại phải có 10 số và bắt đầu bằng 09, 08 hoặc 07");
            return false;
        }
        $("#tbSDT").html("*");
            return true;
    }
    $("#SDT").blur(kiemTraSDT);

    function kiemTraMK(){
        let regexMatKhau=/[a-zA-Z0-9\W]{6,15}/;
        if($("#MK").val()==""){
            $("#tbMK").html("*Bắt buộc nhập");
            return false;
        }
        if(!regexMatKhau.test($("#MK").val())){
            $("#tbMK").html("Mật khẩu phải có từ 6-15 ký tự");
            return false;
        }
        $("#tbMK").html("*");
            return true;
    }
    $("#MK").blur(kiemTraMK);

    function kiemTraTK(){
        let regexTaiKhoan=/[a-zA-Z0-9]{8,15}/;
        if($("#TK").val()==""){
            $("#tbTK").html("Tên tài khoản không được bỏ trống");
            return false;
        }
        if(!regexTaiKhoan.test($("#TK").val())){
            $("#tbTK").html("Nhập từ 8 đến 15 không kí tự đặc biệt");
            return false;
        }
        $("#tbTK").html("*");
            return true;
    }
    $("#TK").blur(kiemTraTK);


    function kiemTraNLMK(){
        
        if($("#NLMK").val() == ""){
            $("#tbNLMK").html("*Bắt buộc nhập");
            return false;
        }
        if($("#NLMK").val() != $("#MK").val()){
            
            $("#tbNLMK").html("Nhập sai");
            return false;
        }
        $("#tbNLMK").html("*");
            return true;
    }
    $("#NLMK").blur(kiemTraNLMK);
    
    var i=1;
    $("#Save").click(function(){
        if(kiemTraMK()==true && kiemTraDiaChi()==true && kiemTraNS()==true && kiemTraNLMK()==true && kiemTraSDT()==true &&  kiemTraTK()==true && KTMail()==true &&kiemTraTen()==true){
            row ="<tr>";
            row +="<th>"+(i++)+"</th>";
            row +="<th>"+$("#Name").val()+"</th>";
            row +="<th>"+$("#Em").val()+"</th>";
            row +="<th>"+$("#NS").val()+"</th>";
            row +="<th>"+$("#GT").val()+"</th>";
            row +="<th>"+$("#DC").val()+"</th>";
            row +="<th>"+$("#SDT").val()+"</th>";
            $("#danhSach").append(row);
            $("#myModal").modal("hide");     
        }
    })
    //kiểm tra đăng nhập
    function kiemTraTKDN(){
        let mauKT=/[a-zA-Z0-9]{8,15}/;
        if($("#TKDN").val()==""){
            $("#tbTKDN").html("*Bắt buộc nhập");
            return false;
        }
        if(!mauKT.test($("#TKDN").val())){
            $("#tbTKDN").html("Nhập từ 8 đến 15 không kí tự đặc biệt");
            return false;
        }
        $("#tbTKDN").html("*");
            return true;
    }
    $("#TKDN").blur(kiemTraTKDN);

    function kiemTraMKDN(){
        let mauKT=/[a-zA-Z0-9]{8,15}/;
        if($("#MKDN").val()==""){
            $("#tbMKDN").html("*Bắt buộc nhập");
            return false;
        }
        if(!mauKT.test($("#MKDN").val())){
            $("#tbMKDN").html("Nhập từ 8 đến 15 không kí tự đặc biệt");
            return false;
        }
        $("#tbMKDN").html("*");
            return true;
    }
    $("#MKDN").blur(kiemTraMKDN);

    $("#dangNhap").click(function(){
        if( kiemTraTKDN()==true &&kiemTraMKDN()==true){
            $("#dangnhapbtn").html("ĐĂNG NHẬP");
        }
    });
});