//マップページJS機能
//初期変数宣言
var senkan_1="";
//test用localstorage使用の判定
if (!window.localStorage) {
    alert("お使いのブラウザはlocalstorageに対応してません。");
}
//localstorageからデータを取得
function localget(){
    //戦艦問題クリアフラグ取得
    senkan_1=window.localStorage.getItem("senkan_1");
}
//localstorageにデータを挿入
function  localput(){
    window.localStorage.setItem("senkan_1",senkan_1);
}
//localstorageの全データを削除
function localdelete(){
    window.localStorage.removeItem("senkan_1");
}
//クリア済みのものに画像を表示
function cleardisp(){
    //クリア済みかの判定
    if(senkan_1==true){
        //指定位置に画像の表示
    }
}
//モータルウィンドウの表示機能
//難しいのであと回し