document.querySelector('#submit').onclick=function(){
    let user= new InfoUser();
    user.email=document.querySelector('#email').value;
    user.password=document.querySelector('#password').value;
    user.name=document.querySelector('#name').value;
    user.gender=document.querySelector('#gender').value;
    user.phone=document.querySelector('#phone').value;
    let promise= axios({
        url:'https://shop.cyberlearn.vn/api/Users/signup',
        method:'POST',
        data:user
    })
    promise.then(function(result){
        console.log(result.data)
        alert("Đăng ký tài khoản thành công")
    })
    promise.catch(function(err){
        console.log('err');
        alert("Đăng ký tài khoản thất bại")
    })
}