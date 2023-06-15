import Navigation from '../components/Navigation.js';
import Layout from '../components/Layout.js';
import HeroSection from '../components/HeroSection.js';
export default () => {
    return `
${Layout(`
    ${Navigation()}
    ${HeroSection({
        title: 'Price title',
        subTitle: 'Price sub title'
    })}
`)}
`
}