
export default () =>{
    return `
    <style>
    
footer {
    margin-top: 100px;
    color: #FFFFFF;
    text-align: center;
    margin-bottom: 100px;
}
footer .footer-elems {
    display: flex;
    justify-content: space-between;
}
footer .footer-elem h3{
    font-size: 120%;
    text-align: center;
    font-weight: normal;
    margin-top: 0px;
    margin-bottom: 20px;
}
footer .footer-elem p{
    margin-top: 20px;
}

    </style>
    <footer>
    <div class="container">
        <div class="footer-elems">
        <div class="footer-elem"><img src="/img/logo.png" alt=""></div>
        <div class="footer-elem">
            <h3>Our contacts</h3>
            <p>+375298989343 (A1)</p>
            <p>polinela@gmail.com</p>
        </div>
        <div class="footer-elem">
            <h3>Social Media</h3>
            <img src="/img/instagram.png" alt="">
        </div>
        </div>
    </div>
</footer>

    `
}