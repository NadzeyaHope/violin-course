export default () => {
    return `
    <style>
    .section-price {
        color: #FFFFFF;
        display: block;
        margin-top: 100px;
    }
    .section-price h2 {
        font-weight: 100;
        font-size: 200%;
    }
    .section-price hr {
        margin: 10px 0 60px 0;
    }
    .section-price .price-cards {
        display: flex;
    }
    .section-price .price-cards .price-card button {
        background-color: #86E5DC;
        padding: 20px;
        margin-top: 16px;
        border-radius: 11px;
        font-size: 15px;
    }
    .section-price .price-cards .price-card h3{
        color: #30CD8E;
        font-size: 120%;
        text-align: center;
        margin-top: 0px;
    
    }
    
    .section-price .price-cards .price-card div {
        margin-top: 16px;
        font-size: 30px;
    }
    .section-price .price-cards .price-card {
        padding: 30px 20px 30px 20px;
        background-color: #272727;
    }
    .section-price .price-cards .price-card + div {
        margin-left: 30px;
    }
    .section-price .price-cards .active-price {
        border:2px #30CD8E solid;
        background-color: #1d1817;
    }
    .section-price .price-cards .price-card p {
        font-size: 120%;
        margin-top: 16px;
        color: #FFE9E9;
        font-weight: 100;
        opacity: 0.6;
        letter-spacing: 1px;
        font-style: normal;
        line-height: 30px;
    }
    </style>
    <section class="section-price">
        <div class="container">
            <h2>Pricing</h2>
            <hr>
            <div class="price-cards">
                <div class="price-card">
                    <h3>Individual lessons</h3>
                    <div>$ 90 / yr</div>
                    <p>For regular weekly piano lessons, the annual contract is the most common and, above all, cheapest option</p>
                    <button>Try it now</button>
                </div>
                <div class="price-card active-price">
                    <h3>37 lessons</h3>
                    <div>$ 90 / yr</div>
                    <p>For regular weekly piano lessons, the annual contract is the most common and, above all, cheapest option</p>
                    <button>Try it now</button>
                </div>
                <div class="price-card">
                    <h3>Individual lessons</h3>
                    <div>$ 90 / yr</div>
                    <p>For regular weekly piano lessons, the annual contract is the most common and, above all, cheapest option</p>
                    <button>Try it now</button>
                </div>
                <div class="price-card">
                    <h3>Individual lessons</h3>
                    <div>$ 90 / yr</div>
                    <p>For regular weekly piano lessons, the annual contract is the most common and, above all, cheapest option</p>
                    <button>Try it now</button>
                </div>
            </div>
        </div>
    </section>
    `
}