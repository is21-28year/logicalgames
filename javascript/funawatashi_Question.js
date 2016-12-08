//初期変数宣言
var basho;
var diff;
var gameflag=flase;
var migi;
var hidari;
var fune;
var funebasho;
var funeanime=false;

//問題初期化部分
function shoki(diffnum){
    //難易度セット
    diff=diffnum;
    if(diff==2){
        //動物が入る場所の変数
        hidari=[1,1,1];
        migi=[0,0,0];
        //船がいる場所の判定 0=左 1=右
        funebasho=0;

    }else if(diff==1){
        basho=[0,0,0];
    }else{
        basho=[0,0,0];
    }   

}
//枠内のアイテムを船へ移動させる処理
function animeidou(saki){

    //船の場所によって移動先座標編変更
    //アニメーション処理　船にあるアイテムの変数が必要
    if(funebasho==0){
        //船にものがあるアニメとないあにめ
        $(function() {
        $.when(
            $("#"+saki).animate({
                left:'16vw',
                top:'42vh',
                width:-0.05,
                height:-0.05,
            }, 2000 )
        )
        .done(function() {
            document.getElementById(saki).style.display="none";
            //if文で入るものの数値を入れる処理
        })
        .fail(function() {
            // エラーがあった時
            console.log('error');
        }); 
    });
    }else{
        $(function() {
        $.when(
            $("#"+saki+".img").animate({
                left:'-8vw',
                top:'42vh',
                width:-0.05,
                height:-0.05,
            }, 2000 )
        )
        .done(function() {
            document.getElementById(saki).style.display="none";
            //if文で入るものの数値を入れる処理
        })
        .fail(function() {
            // エラーがあった時
            console.log('error');
        }); 
    });
    }
}
//船を向こう岸へ移動させる処理
function animefune(){
    if(funeanime==false){
        //animetion処理の後にクリア判定
        if(funebasho==0){
            //船にものがあるアニメとないあにめ
            $(function() {
            funeanime=true;
            $.when(
                $("#fune").animate({
                    left:'+=30vw',
                }, 2000 )
            )
            .done(function() {
                //if文で入るものの数値を入れる処理
                funebasho=1;
                funeanime=false;
                
            })
            .fail(function() {
                // エラーがあった時
                console.log('error');
            }); 
        });
        }else{
            //船にものがあるアニメとないあにめ
            $(function() {
                $.when(
                    $("#fune").animate({
                        left:'-=30vw',
                    }, 2000 )
                )
                .done(function() {
                funebasho=0;
                    //if文で入るものの数値を入れる処理
                })
                .fail(function() {
                    // エラーがあった時
                    console.log('error');
                }); 
            });
        }
    }

}

function clearhantei(){
    /*基本的なゲームクリア判定*/ 
    overhantei();
    gameflag=true
    for(var i in basho){
        if(i==0){
            gameflag=false
        }
    }

    if(gameflag==true){
        modal(2);
    }else{
      overhantei();
    }
}
//ゲームオーバーしたかの判定
function overhantei(){
    if(diff==2){
        //難易度むずかしいの判定
        //船の場所の判定
        if(funebasho==0){
            //オオカミとヒツジの判定
            if(migi[0]==1 && migi[1]==1){
                modal(3);
            }
            //ヒツジとキャベツの判定
            if(migi[1]==1 && migi[2]==1){
                modal(3);
            }
        //船が右なら
        }else{
            //オオカミとヒツジの判定
            if(hidari[0]==0 && hidari[1]==0){
                modal(3);
            }
            //ヒツジとキャベツの判定
            if(hidari[1]==0 && hidari[2]==0){
                modal(3);
            }
        }

    }else if(diff==1){

    }else{

    }
}