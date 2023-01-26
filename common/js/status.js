fetch("https://script.google.com/macros/s/AKfycbyN4OM2IhtonIAfBcaSRnA9zH3XbVbpvLqOQPLyFXwSYGxS5_Z0-HURrtLQ8gPuBx0z/exec")
.then(function (fetch_data) {
    return fetch_data.json();
})
.then(function (json) {
var status_server1 = json[0][0][0];
var status_server2 = json[1][0][0];
var status_server3 = json[2][0][0];
var status_lobby = json[3][0][0];
var status_reset_shigen = json[4][0][0];
var status_shigen_server = json[5][0][0];
var status_relay_server = json[6][0][0];

// HTML内のステータステキストを取得
var txt_server1 = document.getElementById("txt_server1");
var txt_server2 = document.getElementById("txt_server2");
var txt_server3 = document.getElementById("txt_server3");
var txt_lobby = document.getElementById("txt_lobby");
var txt_reset_shigen = document.getElementById("txt_reset_shigen");
var txt_shigen_server = document.getElementById("txt_shigen_server");
var txt_relay_server = document.getElementById("txt_relay_server");

var info = document.getElementById("info");

// HTML内のステータスランプを取得
var lamp_server1 = document.getElementById("lamp_server1");
var lamp_server2 = document.getElementById("lamp_server2");
var lamp_server3 = document.getElementById("lamp_server3");
var lamp_lobby = document.getElementById("lamp_lobby");
var lamp_reset_shigen = document.getElementById("lamp_reset_shigen");
var lamp_shigen_server = document.getElementById("lamp_shigen_server");
var lamp_relay_server = document.getElementById("lamp_relay_server");

if (status_server1 == 0) {
    txt_server1.innerHTML = "稼働中";
    lamp_server1.innerHTML = '<div id="lamp_server1" class="spinner-grow text-success" role="status"><span class="sr-only"></span></div>';
} else if(status_server1 == 1) {
    txt_server1.innerHTML = "停止中";
    lamp_server1.innerHTML = '<div id="lamp_server1" class="spinner-grow text-danger" role="status"><span class="sr-only"></span></div>';
}

if (status_server2 == 0) {
    txt_server2.innerHTML = "稼働中";
    lamp_server2.innerHTML = '<div id="lamp_server2" class="spinner-grow text-success" role="status"><span class="sr-only"></span></div>';
} else if(status_server2 == 1) {
    txt_server2.innerHTML = "停止中";
    lamp_server2.innerHTML = '<div id="lamp_server2" class="spinner-grow text-danger" role="status"><span class="sr-only"></span></div>';
}

if (status_server3 == 0) {
    txt_server3.innerHTML = "稼働中";
    lamp_server3.innerHTML = '<div id="lamp_server3" class="spinner-grow text-success" role="status"><span class="sr-only"></span></div>';
} else if(status_server3 == 1) {
    txt_server3.innerHTML = "停止中";
    lamp_server3.innerHTML = '<div id="lamp_server3" class="spinner-grow text-danger" role="status"><span class="sr-only"></span></div>';
}

if (status_lobby == 0) {
    txt_lobby.innerHTML = "稼働中";
    lamp_lobby.innerHTML = '<div id="lamp_lobby" class="spinner-grow text-success" role="status"><span class="sr-only"></span></div>';
} else if(status_lobby == 1) {
    txt_lobby.innerHTML = "停止中";
    lamp_lobby.innerHTML = '<div id="lamp_lobby" class="spinner-grow text-danger" role="status"><span class="sr-only"></span></div>';
}

if (status_reset_shigen == 0) {
    txt_reset_shigen.innerHTML = "稼働中";
    lamp_reset_shigen.innerHTML = '<div id="lamp_reset_shigen" class="spinner-grow text-success" role="status"><span class="sr-only"></span></div>';
} else if(status_reset_shigen == 1) {
    txt_reset_shigen.innerHTML = "停止中";
    lamp_reset_shigen.innerHTML = '<div id="lamp_reset_shigen" class="spinner-grow text-danger" role="status"><span class="sr-only"></span></div>';
}

if (status_shigen_server == 0) {
    txt_shigen_server.innerHTML = "稼働中";
    lamp_shigen_server.innerHTML = '<div id="lamp_shigen_server" class="spinner-grow text-success" role="status"><span class="sr-only"></span></div>';
} else if(status_shigen_server == 1) {
    txt_shigen_server.innerHTML = "停止中";
    lamp_shigen_server.innerHTML = '<div id="lamp_shigen_server" class="spinner-grow text-danger" role="status"><span class="sr-only"></span></div>';
}

if (status_relay_server == 0) {
    txt_relay_server.innerHTML = "稼働中";
    lamp_relay_server.innerHTML = '<div id="lamp_relay_server" class="spinner-grow text-success" role="status"><span class="sr-only"></span></div>';
} else if(status_relay_server == 1) {
    txt_relay_server.innerHTML = "停止中";
    lamp_relay_server.innerHTML = '<div id="lamp_relay_server" class="spinner-grow text-danger" role="status"><span class="sr-only"></span></div>';
}
}
);
//info.innerHTML = '[2022.12.16]　小学10年生インフォアプリをリリースしました。\n[2022.01.24]　人事部がアップデートしました。即時ホワリス追加できるようになりました。\n[2021.12.27]　1.16.2から1.16.5へ変更しました。\n[2021.12.10]　第４次生活鯖がオープンしました。\n[2021.12.10]　Ver.1.16.2新生活鯖を公開しました。それに伴い、各ワールドの説明を変更しました。\n[2018.09.03]　9/03(金)緊急メンテナンスが終了しました。\n[2021.09.03]　9/03(金)16:00より緊急メンテナンスを実施します。\n[2021.09.03]　第３次生活鯖がオープンしました。';
