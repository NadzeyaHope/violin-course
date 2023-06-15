import {attrToString} from '../lib/html.js';

export default (attr = {}) => {
  return `
<style>
.input {
    display: block;
    width: 100%;
    height: 57px;
    background: #FFFFFF;
    border-radius: 8px;
    border: none;
    outline: none;
    font-size: 18px;
    padding: 0 12px;
}
</style>
<input class="input" ${attrToString(attr)} />  
  `
}