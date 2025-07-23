import data from './data.js';

const tabs = $('#tabs');
const tabs_1 = tabs.find('#tabs-1');

// 객체 생성
const tabMenu = function (idx1, idx2, idx3) {
    tabs_1.html(`
        <div>
            <div><img src="${data[idx1].img}" alt="${data[idx1].txt}"></div>
            <h3>1위. ${data[idx1].txt}</h3>
        </div>
        <div>
            <div><img src="${data[idx2].img}" alt="${data[idx2].txt}"></div>
            <h3>2위. ${data[idx2].txt}</h3>
        </div>
        <div>
            <div><img src="${data[idx3].img}" alt="${data[idx3].txt}"></div>
            <h3>3위. ${data[idx3].txt}</h3>
        </div>
    `);
}

export default tabMenu;