// サーバーステータス 0:起動中 1:停止中
var status_server1= 1;
var status_server2= 0;
var status_server3= 0;
var status_lobby= 0;
var status_reset_shigen= 0;
var status_shigen_server= 0;
var status_relay_server= 0;

{
if (status_server1 == 0) {
  // id名pass_failのHTML内に「合格です」というテキストを入力する
  document.getElementById("server1").innerHTML ="<div class="spinner-grow text-success" role="status"><span class="sr-only"></span></div>";
} else {
  document.getElementById("server1").innerHTML ="<div class="spinner-grow text-danger" role="status"><span class="sr-only"></span></div>";}
