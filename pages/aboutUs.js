import Navigation from '../ui/components/Navigation.js';
import Layout from '../ui/components/Layout.js';
import Footer from '../ui/sections/home/Footer.js';
import Ourteam from '../ui/sections/aboutUs/Ourteam.js';
import TextAboutUs from '../ui/sections/home/TextAboutUs.js';
import HeroSection from '../ui/components/HeroSection.js';

export default (params) => {
  return `
${Layout(`
    ${Navigation()}
    ${HeroSection({
    title: 'About us',
    subTitle: 'We are small team in Gomel<br />'
  })}
    ${Ourteam()}
    ${TextAboutUs()}
    ${Footer()}
`)}  
  `
}