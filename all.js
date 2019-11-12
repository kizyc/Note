// 1. 資料 model 
// 2. 事件 event 
// 3. 介面 view

var data = JSON.parse(localStorage.getItem('listData')) || [];
var convey = document.querySelector('.btn');
var item = document.querySelector('.list');

function addlist(e) {
    e.preventDefault(); //取消預設行為
    var list = document.querySelector('.text').value;
    if (list == '') {  //若是空值
        alert('請輸入清單');
        return;
    };
    data.push(list); //新增
    updateList(data); //更新
    localStorage.setItem('listData', JSON.stringify(data));
}

function updateList(strip) {
    str ='';
    for (var i = 0; i < strip.length; i++) {
        str += '<li><span>' + strip[i] + '</span><a href="#" data-index=' + i + '><button type="button" class="close">&times;</a></button></li>';
    }
    item.innerHTML = str; //列印
}

function deletList(e) {
    var index = e.target.dataset.index;
    if (e.target.nodeName !== 'A') { return };
    data.splice(index, 1); //刪除一個
    localStorage.setItem('listData', JSON.stringify(data));
    updateList(data);
}

//監聽
convey.addEventListener('click', addlist, false);
item.addEventListener('click', deletList, false);
updateList(data);