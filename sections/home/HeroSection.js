export default () => {
  return `
<style>
section.hero {
    background: #030303;
    padding: 200px 0 62px;
}

section.hero h1 {
    color: #86E5DC;
    font-weight: 700;
    font-size: 55px;
    line-height: 63px;
}

section.hero h2 {
    color: #FFFFFF;
    font-weight: 500;
    font-size: 41px;
    line-height: 47px;
    margin-top: 30px;
}

section.hero a {
    display: inline-block;
    background: #86E5DC;
    color: #000000;
    border-radius: 9px;
    padding: 16px 30px;
    margin-top: 90px;
}
</style>

<section class="hero">
    <div class="container">
        <h1>Piano Academy Berlin</h1>
        <h2>
            Berlin’s Piano school for<br />
            the beginners Student
        </h2>
        <a href="#">Register</a>
    </div>
</section>
  `
}