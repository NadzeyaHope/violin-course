import Navigation from '../components/Navigation.js';
import Layout from '../components/Layout.js';
import TextAboutUs from '../ui/sections/home/TextAboutUs.js';
import PriceSection from '../ui/sections/home/PriceSection.js';
import Classes from '../ui/sections/home/Classes.js';
import Footer from '../ui/sections/home/Footer.js';
import HeroSection from '../components/HeroSection.js';

export default () => {
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