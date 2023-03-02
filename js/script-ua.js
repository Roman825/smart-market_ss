const isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },

    any: function() {
        return (
            isMobile.Android() || 
            isMobile.BlackBerry() || 
            isMobile.iOS() || 
            isMobile.Opera() ||
            isMobile.Windows()
        );
    }
};
if (isMobile.any()) {
    document.body.classList.add('_touch')
    let alert = document.querySelector(".alert")
    alert.classList.add('_active')
    function reload_interval(time){
        setTimeout(function(){
            location.reload();
        }, time);
    }
} else {
    document.body.classList.add('_pc')

}
timedInfo(); // вызов функции, обязателен, иначе не сработает
function timedInfo() {
  setTimeout(one, 3000) 
}
function one() {
    var load = document.getElementById('load');
    load.classList.add('_stop__load')
  }

  document.querySelectorAll('.button1').forEach(button => button.addEventListener('click', e => {
    if(!button.classList.contains('loading')) {

        button.classList.add('loading');

        setTimeout(() => button.classList.remove('loading'), 3700);

    }
    e.preventDefault();
}));





var InfoLocal = [];
var aa = localStorage.getItem('tel')
var nI = InfoLocal.length


if (aa != null && aa != undefined){
    var b = localStorage.getItem('tel')
    b = JSON.parse(b)
    InfoLocal = [b]
    localStorage.setItem('tel', JSON.stringify(InfoLocal))
} else {
    InfoLocal = [];
}



function iph14(){
    InfoLocal.unshift(' Iphone 14')
    localStorage.setItem('tel', JSON.stringify(InfoLocal));   
    localStorage.reload
}
function x10(){
    InfoLocal.unshift(' Xiaomi 10')
    localStorage.setItem('tel', JSON.stringify(InfoLocal));    
    localStorage.reload
}
function sams22(){
    InfoLocal.unshift(' Samsung s22')
    localStorage.setItem('tel', JSON.stringify(InfoLocal));    
    localStorage.reload
}
function oppoR8(){
    InfoLocal.unshift(' Oppo R8')
    localStorage.setItem('tel', JSON.stringify(InfoLocal));    
    localStorage.reload
}


var b = localStorage.getItem('tel')
b = JSON.parse(b)

//

var bask = b
var pst = document.querySelector('.pst')
var parentDiv = document.getElementById("bask__con");

if (b.length > 0){
    pst.classList.add('_ok')
    console.log(b.length)

    document.body.onload = addElement;
    var my_div = newDiv1 = null;
    var my_div1 = newDiv2 = null;
    var my_div2 = newDiv3 = null;
    
      function addElement() {
        var b = localStorage.getItem('tel')
        b = JSON.parse(b)
        // Создаём новый элемент div
        // и добавляем в него немного контента
        var my_div = document.getElementById("baskt");

        var newDiv1 = document.createElement("div")
        newDiv1.classList.add('csd')
        newDiv1.innerHTML = b[0];
        parentDiv.insertBefore(newDiv1, my_div.nextSibling);


        //var newDiv2 = document.createElement("div")
        //newDiv2.innerHTML = b[1];
        //parentDiv.insertBefore(newDiv2, my_div.nextSibling);


        //var newDiv3 = document.createElement("div")
        //newDiv3.innerHTML = b[2];
        //parentDiv.insertBefore(newDiv3, my_div.nextSibling);
    
}
//if (b.length = 1){
//    var newDiv1 = document.createElement("div")
//    newDiv1.innerHTML = b[0];
//}
//if (b.length = 2){
//    var newDiv1 = document.createElement("div")
//    newDiv1.innerHTML = b[0];
//    var newDiv2 = document.createElement("div")
//    newDiv2.innerHTML = b[1];
//}
//if (b.length = 3){
//    document.body.onload = addElement;
//    var my_div = newDiv1 = null;
//    var my_div1 = newDiv2 = null;
//    var my_div2 = newDiv3 = null;
    
//      function addElement() {
//        var b = localStorage.getItem('tel')
//        b = JSON.parse(b)
//        // Создаём новый элемент div
//        // и добавляем в него немного контента
//        var my_div = document.getElementById("baskt");

//        var newDiv1 = document.createElement("div")
//        newDiv1.innerHTML = b[0];
//        parentDiv.insertBefore(newDiv1, my_div.nextSibling);


//        var newDiv2 = document.createElement("div")
//        newDiv2.innerHTML = b[1];
//        parentDiv.insertBefore(newDiv2, my_div.nextSibling);


//        var newDiv3 = document.createElement("div")
//        newDiv3.innerHTML = b[2];
//        parentDiv.insertBefore(newDiv3, my_div.nextSibling);
    
//      }

//}
//if (b.length = 4){
//    var newDiv1 = document.createElement("div")
//    newDiv1.innerHTML = b[0];
//    var newDiv2 = document.createElement("div")
//    newDiv2.innerHTML = b[1];
//    var newDiv3 = document.createElement("div")
//    newDiv3.innerHTML = b[2];
//    var newDiv4 = document.createElement("div")
//    newDiv4.innerHTML = b[3];

//}
//if (b.length > 4){
//    alert('Больше 4 телефонов заказать нельзя!')
}
function clearBask(){
    localStorage.clear()
    window.location.reload()
}
function locationEnd(){
    window.location.href = 'https://my-smart-market.netlify.app/ua/#end__cart'
    window.location.reload()
}

