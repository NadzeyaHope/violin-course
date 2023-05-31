import Navigation from '../components/Navigation.js';
import Layout from '../components/Layout.js';
import heroSectionAboutUs from '../sections/aboutUs/heroSectionAboutUs.js'
import footer from '../sections/home/footer.js';
import Ourteam from '../sections/aboutUs/ourteam.js';
import TextAboutUs from '../sections/home/TextAboutUs.js';
export default (params) => {
  return `
${Layout(`
    ${Navigation()}
    ${heroSectionAboutUs()}
    ${Ourteam()}
    ${TextAboutUs()}
    ${footer()}
`)}  
  `
}