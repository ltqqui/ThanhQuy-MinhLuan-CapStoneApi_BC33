function createHeader() {
    return ` <header class="header">
    <div class="header-top">
        <div class="logo">
            <img src="../img/image 3.png" alt="">
        </div>
        <div class="login-register">
            <i class="fa-solid fa-cart-shopping">(1)</i>
            <a href="#">Login</a>
            <a href="">Register</a>
        </div>
        </div>
        <div class="header-bottom">
            <nav>
                <a class="home" href="#">Home</a>
                <a href="#">Men</a>
                <a href="#">Woman</a>
                <a href="#">Kid</a>
                <a href="#">Sport</a>
            </nav>
        </div>
    </div>
 </header>`
}
document.querySelector("#header").innerHTML = createHeader()