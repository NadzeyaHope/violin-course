import Layout from "../components/Layout.js";
import Navigation from "../components/Navigation.js";
import LoginForm from "../ui/sections/login/LoginForm.js";
export default () => {
    return `${Layout(`
    ${Navigation()}
    ${LoginForm()}
`)}  
    `
}