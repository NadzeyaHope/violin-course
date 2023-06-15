import Navigation from "../components/Navigation.js";
import RegisterForm from "../ui/sections/register/RegisterForm.js";
import Layout from "../components/Layout.js";

export default () => {
    return `
  ${Layout(`
      ${Navigation()}
      ${RegisterForm()}
  `)}  
    `
  }