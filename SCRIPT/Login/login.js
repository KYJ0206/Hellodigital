function login(){
    var loginForm = document.loginForm;
    var userId = loginForm.userId.value;
    var password = loginForm.password.value;
    
    if(!userId || !password){
        alert("아이디와 비밀번호를 모두 입력해주세요.")
    }else{
        loginForm.submit();
    }
}