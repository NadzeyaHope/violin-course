
export default ()=>{
    return `
    <style>
    section.About-us-home-page {
        color: #FFFFFF;
        margin-top: 100px;
        
    }
    section.About-us-home-page h2{
        font-weight: 100;
        font-size: 200%;
    }
    section.About-us-home-page hr {
        margin: 10px 0 60px 0;
    }
    section.About-us-home-page .about-us-container{
        display: flex;
    }
    section.About-us-home-page .about-us-container img {
        width: 500px;
        margin-right: 46px;
    }
    section.About-us-home-page .about-us-container .about-us-text{
        margin-left: 46px;
    }
    section.About-us-home-page .about-us-container .about-us-text h3 {
        font-weight: 100;
        font-size: 150%;
        margin-top: 30px;
    }
    section.About-us-home-page .about-us-container .about-us-text h4 {
        font-size: 120%;
        color: #FFE9E9;
        font-weight: 100;
        opacity: 0.6;
        margin-top: 60px;
        letter-spacing: 1px;
        font-style: normal;
        line-height: 30px;
    }
    </style>
    <section class="About-us-home-page">
        <div class="container">
            <h2>About us</h2>
            <hr>
            <div class="about-us-container">
                <div><img src="/img/student-img.jpg" alt="student-img"></div>
                <div class="about-us-text">
                    <h3>Persure your passion create your life</h3>
                    <h4>The lessons mostly take place during school hours, with each pupil following a rotating timetable that aims to ensure that no child misses the same classroom lesson every week, thus being able to follow the school lessons without loss. This system, widespread in institutions in the United Kingdom, makes it possible for all of the children to add further musical education to their curriculum and acquire and develop a sense of discipline and self-confidence, whilst strengthening their ability to learn, analyse, memorise and concentrate.</h4>
                </div>
            </div>
        </div>
    </section>
    `
}