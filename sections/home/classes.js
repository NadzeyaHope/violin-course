export default () => {
    return `
    <style>
    section.classes {
        color: #FFFFFF;
        display: block;
        margin-top: 100px;
        padding-top: 70px;
        padding-bottom: 100px;
        background-color: #242323;
    }
    section.classes h2 {
        font-weight: 100;
        font-size: 200%;
    }
    section.classes hr{
        margin: 10px 0 60px 0;
    }
    
    section.classes .classes-cards{
        display: flex;
    }
    section.classes .classes-cards .classes-card + div{
        margin-left: 20px;
    }
    section.classes .classes-cards .classes-card {
        background-color: #272727;
    }
    section.classes .classes-cards .classes-card .card-text {
        padding: 20px;
    }
    section.classes .classes-cards .classes-card h3{
        margin-bottom: 20px;
    }
    section.classes .classes-cards .classes-card img{
        width: 100%;
    }
    section.classes .classes-cards .classes-card .classes-card-time{
        margin-top: 20px;
        display: flex;
        width: 100%;
    }
    section.classes .classes-cards .classes-card .classes-card-time p{
        margin: 0 10px 0 10px;
    }
    section.classes .classes-cards .classes-card .classes-card-time img{
        width: 20px;
    }
    </style>
    <section class="classes">
        <div class="container">
            <h2>Classes</h2>
            <hr>
            <div class="classes-cards">
                <div class="classes-card">
                    <div><img src="/img/koncert-na-skripke-v-muzykalnoj-shkole.jpg" alt=""></div>
                    <div class="card-text">
                        <div><h3>Violin for begginer</h3></div>
                        <div><p>Although Eminem and other rappers have attracted a great deal of attention for violent song lyrics, most of the public attention about the impact of media violence on youth </p></div>
                        <div class="classes-card-time"><img src="/img/material-symbols_price-change-rounded.png" alt=""><p>$300</p><img src="/img/ic_baseline-access-time.png" alt=""><p>34 hrs</p></div>
                    </div>
                </div>
                <div class="classes-card">
                    <div><img src="/img/koncert-na-skripke-v-muzykalnoj-shkole.jpg" alt=""></div>
                    <div class="card-text">
                        <div><h3>Violin for begginer</h3></div>
                        <div><p>Although Eminem and other rappers have attracted a great deal of attention for violent song lyrics, most of the public attention about the impact of media violence on youth </p></div>
                        <div class="classes-card-time"><img src="/img/material-symbols_price-change-rounded.png" alt=""><p>$300</p><img src="/img/ic_baseline-access-time.png" alt=""><p>34 hrs</p></div>
                    </div>
                </div>
                <div class="classes-card">
                    <div><img src="/img/koncert-na-skripke-v-muzykalnoj-shkole.jpg" alt=""></div>
                    <div class="card-text">
                        <div><h3>Violin for begginer</h3></div>
                        <div><p>Although Eminem and other rappers have attracted a great deal of attention for violent song lyrics, most of the public attention about the impact of media violence on youth </p></div>
                        <div class="classes-card-time"><img src="/img/material-symbols_price-change-rounded.png" alt=""><p>$300</p><img src="/img/ic_baseline-access-time.png" alt=""><p>34 hrs</p></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    `
}