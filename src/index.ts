
import panda from './assets/image/panda.jpg';

console.log('图片测试');
console.log(panda);

const img = document.querySelector('img');
img.src = panda;
const span = document.querySelector('span');
span.innerText = '我和我的祖国';

console.log(img);
