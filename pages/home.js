import Navigation from '../components/Navigation.js';
import HeroSection from '../sections/home/HeroSection.js';
import Layout from '../components/Layout.js';
import TextAboutUs from '../sections/home/TextAboutUs.js';
import PriceSection from '../sections/home/priceSection.js';
import classes from '../sections/home/classes.js';
import footer from '../sections/home/footer.js'
export default (params) => {
  return `
${Layout(`
    ${Navigation()}
    ${HeroSection()}
    ${TextAboutUs()}
    ${PriceSection()}
    ${classes()}
    ${footer()}
`)}  
  `
}