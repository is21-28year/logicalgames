//回転速度を一定に修正する
//候補秒刊に複数回行う
//ふつうにずっと回す


function imgkaiten(){
    //旧コード一応残す
    /*$(function(){
    // ボタンをクリックした時
        // degという変数を0から360まで3秒かけて変化させる。
        $({deg:0}).animate({deg:360}, {
            duration:3000,
            // 途中経過
            progress:function() {
                $('img.img').css({
                    transform:'rotate(' + this.deg + 'deg)'
                });
            },
        });
    });*/
    //回転される部分　プラグイン使用している
    var angle = 0;
    setInterval(function(){
        angle+=5;
    $("#kaiten").rotate(angle);
    },50);
}


//問題のランダム出力
function questionrand(kakudo){
    var rand = Math.floor( Math.random() * 4 )*kakudo;
    $("#sentaku img").rotate(rand);
}

function  localput(kaiten){
                                                    //どの難易度をクリアしたのかの判定をつける
    //回転クリアフラグ
    if(kaiten == "kaiten_1"){
    window.localStorage.setItem("kaiten_1",true);
    }
    if(kaiten == "kaiten_2"){
    window.localStorage.setItem("kaiten_2",true);
    }
    if(kaiten == "kaiten_3"){
    window.localStorage.setItem("kaiten_3",true);
    } 
}
