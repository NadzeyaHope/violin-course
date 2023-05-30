import Navigation from '../components/Navigation.js';
import Layout from '../components/Layout.js';
import AboutUsSection from '../sections/aboutUs/AboutUsSection.js'
export default (params) => {
  return `
${Layout(`
    ${Navigation()}
    ${AboutUsSection()}
`)}  
  `
}