//回転速度を一定に修正する
//候補秒刊に複数回行う
//ふつうにずっと回す
var ans = 0;
var kazu = 0;
var dif = 0;
var kaku = 0;
var suu = 0;


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
//easy:1 normal:2 hard:3
function questionrand(kakudo,kazu,diff){
	dif = diff;
	kaku = kakudo;
	suu = kazu;
    var rand = 0;
	ans = Math.floor( Math.random() * kazu )+1 ;
	var min = kazu-1;
	var max = 1;
	for(var i=1;i<6;i++){
        rand = Math.floor( Math.random() * 4 )*kakudo;
        if(i==ans){
            document.getElementById(i).innerHTML="<img src='../image/Puzzle_kotae"+diff+".png'>";
        }else{
           document.getElementById(i).innerHTML="<img src='../image/Puzzle_"+diff+'.'+(Math.floor( Math.random() * min )+max)+".png'>";
        }
        $("#"+i+" img").rotate(rand);
	}
}

function answer(cl){
	if(ans == cl){
	if(dif == 4){
	cleartrue('kaiten_omake');
	}else{
  	cleartrue('kaiten_'+dif);
    	}
	modal(2);
	}else{
	modal(3);
	}
}

function reset(){
questionrand(kaku,suu,dif);
}
