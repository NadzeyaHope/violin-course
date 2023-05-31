import Navigation from '../ui/components/Navigation.js';
import Layout from '../ui/components/Layout.js';
import TextAboutUs from '../ui/sections/home/TextAboutUs.js';
import PriceSection from '../ui/sections/home/priceSection.js';
import Classes from '../ui/sections/home/classes.js';
import Footer from '../ui/sections/home/footer.js'
import HeroSection from '../ui/components/HeroSection.js';

export default (params) => {
  return `
${Layout(`
    ${Navigation()}
    ${HeroSection({
      title: 'Piano Academy Berlin', 
      subTitle: 'Berlin’s Piano school for<br />the beginners Student'
    })}
    ${TextAboutUs()}
    ${PriceSection()}
    ${Classes()}
    ${Footer()}
`)}  
  `
}