export default () => {
    return `
    <style>
    section.out-team {
        color: #FFFFFF;
        display: block;
        margin-top: 100px;
    }
    section.out-team h2{
        font-weight: 100;
    }
    section.out-team .our-team-cards{
        margin-top: 50px;
        width: 200px;
        display: flex;
        justify-content: space-between;
    }
    section.out-team .our-team-card + div{
        margin-left: 200px;
    }
    section.out-team .our-team-card img{
        margin-bottom: 40px;
        width: 200px;
        height: 200px;
        border-radius: 500px;
    }
    section.out-team .our-team-card h2 {
        margin-bottom: 20px;
        font-weight: 100;
        color: #30CD8E;
    }
    section.out-team .our-team-card p {
        font-size: 15px;
        opacity: 0.8;
    }
    </style>
    <section class="out-team">
    <div class="container">
        <h2>Our team</h2>
        <div class="our-team-cards">
            <div class="our-team-card">
                <img src="/img/4d5e3ba14f40afa65a8332277cfe.jpg" alt="">
                <h2>Mark</h2>
                <p class="our-team-position">Teacher of violin</p>
                <p>More than two years practice for teach people</p>
            </div>
            <div class="our-team-card">
                <img src="/img/4d5e3ba14f40afa65a8332277cfe.jpg" alt="">
                <h2>Mark</h2>
                <p class="our-team-position">Teacher of violin</p>
                <p>More than two years practice for teach people</p>
            </div>
            <div class="our-team-card">
                <img src="/img/4d5e3ba14f40afa65a8332277cfe.jpg" alt="">
                <h2>Mark</h2>
                <p class="our-team-position">Teacher of violin</p>
                <p>More than two years practice for teach people</p>
            </div>
        </div>
    </div>
</section>
    `
}