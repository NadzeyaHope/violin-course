import {attrToString} from '../lib/html.js';

export default (attr = {}) => {
  const {label, ...rest} = attr;
  return `
<style>
.button {
    display: block;
    width: 100%;
    height: 57px;
    background: #242323;
    border-radius: 8px;
    border: 2px #86E5DC solid;
    outline: none;
    font-size: 18px;
    padding: 0 24px;
    color: #ffffff;
}
</style>
<button class="button" ${attrToString(rest)}>${label}</button>  
  `
}