import Navigation from '../components/Navigation.js';
import HeroSection from '../sections/home/HeroSection.js';
import Layout from '../components/Layout.js';
export default () => {
    return `
    ${Layout(
        `${Navigation()}
        ${HeroSection()}
        `
    )}
    `
}