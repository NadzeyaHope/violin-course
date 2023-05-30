export default () => {
  return `
<style>
section.menu {
    background: #030303;
}

section.menu .menu-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
}

section.menu a {
    color: white;
    font-size: 16px;
}

section.menu input {
    border: 1px solid #FFFFFF;
    border-radius: 11px;
    height: 54px;
    background: url("/img/search.png") no-repeat right 15px top 20px;
    color: #FFFFFF;
    font-size: 18px;
    padding: 0 40px 0 10px;
}

section.menu a.menu-sign-in {
    display: flex;
    align-items: center;
    border-radius: 9px;
    height: 54px;
    background: #FFFFFF;
    color: black;
    padding: 0 27px;
}

section.menu .menu-search {
    display: flex;
}

section.menu .menu-search > input + a {
    margin-left: 20px;
}

section.menu .menu-items > a + a {
    margin-left: 54px;
}    
</style>

<section class="menu">
    <div class="container">
        <div class="menu-wrapper">
            <img src="/img/logo.png" alt="logo"/>
            <div class="menu-items">
                <a href="/">Home</a>
                <a href="/about-us">About us</a>
                <a href="#">Price</a>
                <a href="#">News</a>
                <a href="#">Contact us</a>
            </div>
            <div class="menu-search">
                <input/>
                <a href="#" class="menu-sign-in">Sign in</a>
            </div>
        </div>
    </div>
</section>
  `
}