var ta = document.getElementById('Terminal')
var msg = ""
var ut = navigator.userAgent;

if(ut.indexOf('iPhone') > 0 ){
console.log("SmartPhon");
}else if(ut.indexOf('iPad') > 0 ){
console.log("Tablet");
alert("このサイトはスマホ向けサイトです。スマホ以外でのアクセスでは表示が崩れることがあります。");
}else{
console.log("Personal Computer");

if(window.outerWidth > 1000){
   

    alert("このサイトはスマホ向けサイトです。スマホ以外でのアクセスでは表示が崩れることがあります。PCの場合はブラウザのウインドウをスマホと同じ縦横比（縦長）にすると正常に表示できます。")
    window.open("https://kaitokid3rd.github.io/app.10th-grade/", "", "width=668,height=1107");
}


}

ta.textContent = msg
