import Navigation from '../ui/components/Navigation.js';
import Layout from '../ui/components/Layout.js';
import HeroSection from '../ui/components/HeroSection.js';
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