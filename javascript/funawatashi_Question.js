//初期変数宣言
//アイテムがある位置左＝0　右＝1
var basho;
//難易度数字
var diff;
var gameflag=false;
var fune=null;
var funebasho;
var funeanime=false;
var idouanime=false;
//座標部分
var funeX;
var funeY;
var aitemX;
var aitemY;


//問題初期化部分
function shoki(diffnum){
    //難易度セット
    diff=diffnum;
    if(diff==2){
        //動物が入る場所の変数
        migi=[0,0,0];
        hidari=[0,0,0];
        //船がいる場所の判定 0=左 1=右
        funebasho=0;

    }else if(diff==1){
        migi=[0,0,0];
        hidari=[0,0,0];
        funebasho=0;
    }else{
        migi=[0,0,0];
        hidari=[0,0,0];
        funebasho=0;
    }   

}
//枠内のアイテムを船へ移動させる処理
function animeidou(basho){

    //アニメ処理中は動けない
    if(idouanime==false){
        //左の時,右の時の処理の処理
        if(funebasho==0){
            //船の座標
            funeX='16vw';
            funeY='42vh';

            //アニメーション処理
            //船にものがないアニメーション処理
            if(basho=='r1' || basho=='r2' || basho=='r3'){}else{
                if(fune==null){
                    $(function() {
                        idouanime=true;
                        funeanime=true;
                        $.when(
                            $("#"+basho).animate({
                                left:funeX,
                                top:funeY,
                                width:-0.05,
                                height:-0.05,
                            }, 2000 )
                        )
                        .done(function() {
                            //船の位置で消える
                            document.getElementById(basho).style.display="none";

                            idouanime=false;
                            funeanime=false;
                            //船にアイテムを入れる
                            fune=basho;
                            
                        })
                        .fail(function() {
                            // エラーがあった時
                            console.log('error');
                        }); 
                    });
                }else{//船にものがあるときの処理
                    //アイテムを戻す場所の座標設定
                    if(fune=='l1'){
                        aitemX='0vw';
                        aitemY='0vh';
                    }else if(fune=='l2'){
                        aitemX='0vw';
                        aitemY='20vh';
                    }else if(fune=='l3'){
                        aitemX='0vw';
                        aitemY='40vh';
                    }
                     $(function() {
                        idouanime=true;
                        funeanime=true;
                        $.when(
                            $("#"+basho).animate({
                                left:funeX,
                                top:funeY,
                                width:-0.05,
                                height:-0.05,
                            }, 2000,function(){
                                document.getElementById(fune).style.display="block";
		                         $("#"+fune).animate({
                                    left:aitemX,
                                    top:aitemY,
                                    width:'40%',
                                    height:'18%'
                                }, 2000).dequeue();
                            }
                            )
                        )
                        .done(function() {
                            //船の位置で消える
                            document.getElementById(basho).style.display="none";
                            //if文で入るものの数値を入れる処理
                            idouanime=false;
                            funeanime=false;
                            //船にアイテムを入れる
                            fune=basho;
                            
                        })
                        .fail(function() {
                            // エラーがあった時
                            console.log('error');
                        }); 
                    });
                }
            }
        }else{//右の時の処理
            //船の座標
            funeX='-8vw';
            funeY='42vh';
            
            //アニメーション処理
            //船にものがないアニメーション処理
            if(basho=='l1' || basho=='l2' || basho=='l3'){}else{
                if(fune==null){
                    $(function() {
                        idouanime=true;
                        funeanime=true;
                        $.when(
                            $("#"+basho).animate({
                                left:funeX,
                                top:funeY,
                                width:-0.05,
                                height:-0.05,
                            }, 2000 )
                        )
                        .done(function() {
                            //船の位置で消える
                            document.getElementById(basho).style.display="none";
                            //if文で入るものの数値を入れる処理
                            idouanime=false;
                            funeanime=false;
                            //船にアイテムを入れる
                            fune=basho;
                            
                        })
                        .fail(function() {
                            // エラーがあった時
                            console.log('error');
                        }); 
                    });
                }else{//船にものがあるときの処理
                    //アイテムを戻す場所の座標設定
                    if(fune=='r1'){
                        aitemX='0vw';
                        aitemY='0vh';
                    }else if(fune=='r2'){
                        aitemX='0vw';
                        aitemY='20vh';
                    }else if(fune=='r3'){
                        aitemX='0vw';
                        aitemY='40vh';
                    }
                     $(function() {
                        idouanime=true;
                        funeanime=true;
                        $.when(
                            $("#"+basho).animate({
                                left:funeX,
                                top:funeY,
                                width:-0.05,
                                height:-0.05,
                            }, 2000,function(){
                                document.getElementById(fune).style.display="block";
		                         $("#"+fune).animate({
                                    left:aitemX,
                                    top:aitemY,
                                    width:'40%',
                                    height:'18%'
                                }, 2000).dequeue();
                            }
                            )
                        )
                        .done(function() {
                            //船の位置で消える
                            document.getElementById(basho).style.display="none";
                            //if文で入るものの数値を入れる処理
                            idouanime=false;
                            funeanime=false;
                            //船にアイテムを入れる
                            fune=basho;
                            
                        })
                        .fail(function() {
                            // エラーがあった時
                            console.log('error');
                        }); 
                    });//船にものがあるときの処理
                    
                }
            }
        }

        
    }

    
}
//船を向こう岸へ移動させる処理
function animefune(){
    if(funeanime==false){
        //animetion処理の後にクリア判定
        funeanime=true;
        idouanime=true;
        if(funebasho==0){
            //船にものがあるアニメとないあにめ
            $(function() {
            $.when(
                $("#fune").animate({
                    left:'+=30vw',
                }, 2000 )
            )
            .done(function() {
                //if文で入るものの数値を入れる処理
                //船の座標変更
                funebasho=1;
                funeanime=false;
                idouanime=false;
                
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
                    funeanime=false;
                    idouanime=false;
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