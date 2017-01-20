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
var aitemX='0.5vw';
var aitemY='1vh';
var sizeX='4vw';
var sizeY='8vh';
//難易度初級の変数
var count=0;
//問題初期化部分
function shoki(diffnum){
    if(idouanime==false || funeanime==false){
        //難易度セット
        diff=diffnum;
        if(diff==2){
            //動物が入る場所の変数
            migi=[0,0,0];
            hidari=[1,1,1];
            //船がいる場所の判定 0=左 1=右
            funebasho=0;
            fune=null;
            //画像の初期位置判定
            $(function(){
                $('#fune').css({'left':'15vw','top':'40vh'});
                $("#fune img").attr('src', '../image/fune_L.png');
                $('#fune img').css({'display':''});
                $('#l1 img').css({'width':'4vw','height':'8vh', 'left':'0.5vw','top':'1vh','display':'block'});
                $('#l2 img').css({'width':'4vw','height':'8vh', 'left':'0.5vw','top':'1vh','display':'block'});
                $('#l3 img').css({'width':'4vw','height':'8vh', 'left':'0.5vw','top':'1vh','display':'block'});
                $('#r1 img').css('display','none');
                $('#r2 img').css('display','none');
                $('#r3 img').css('display','none');
            })

        }else if(diff==1){
            migi=[0,0,0];
            hidari=[1,1,1];
            funebasho=0;
            fune=null;
            $(function(){
                $('#fune').css({'left':'15vw','top':'40vh'});
                $("#fune img").attr('src', '../image/fune_L.png');
                $('#fune img').css({'display':''});
                $('#l1 img').css({'width':'4vw','height':'8vh', 'left':'0.5vw','top':'1vh','display':'block'});
                $('#l2 img').css({'width':'4vw','height':'8vh', 'left':'0.5vw','top':'1vh','display':'block'});
                $('#l3 img').css({'width':'4vw','height':'8vh', 'left':'0.5vw','top':'1vh','display':'block'});
                $('#r1 img').css('display','none');
                $('#r2 img').css('display','none');
                $('#r3 img').css('display','none');
            })
        }else if(diff==0){
            migi=[0,0,0];
            hidari=[1,1,1];
            funebasho=0;
            fune=null;
            $(function(){
                $('#fune').css({'left':'15vw','top':'40vh'});
                $("#fune img").attr('src', '../image/fune_L.png');
                $('#fune img').css({'display':''});
                $('#l1 img').css({'width':'4vw','height':'8vh', 'left':'0.5vw','top':'1vh','display':''});
                $('#l2 img').css({'width':'2vw','height':'4vh', 'left':'1.5vw','top':'3vh','display':''});
                $('#l3 img').css({'width':'3vw','height':'6vh', 'left':'1vw','top':'2vh','display':''});
                $('#r1 img').css('display','none');
                $('#r2 img').css('display','none');
                $('#r3 img').css('display','none');
            })
        }   
    }

}
//枠内のアイテムを船へ移動させる処理
function animeidou(basho){
    //アニメ処理中は動けない
    if(idouanime==false || funeanime==false){
        //左の時,右の時の処理の処理
        if(funebasho==0){
            if(diff==0){
                if(fune=='l1'){
                    sizeX='4vw';
                    sizeY='8vh';
                    aitemX='0.5vw';
                    aitemY='1vh';
                }else if(fune=='l2'){
                    sizeX='2vw';
                    sizeY='4vh';
                    aitemX='1.5vw';
                    aitemY='3vh';
                }else if(fune=='l3'){
                    sizeX='3vw';
                    sizeY='6vh';
                    aitemX='1vw';
                    aitemY='2vh';
                }
            }
            //船の座標
            if(basho=='l1'){
                funeX='13vw';
                funeY='36.5vh';
            }else if(basho=='l2'){
                funeX='13vw';
                funeY='16.5vh';
            }else if(basho=='l3'){
                funeX='13vw';
                funeY='-3.5vh';
            }
            
            
            //アニメーション処理
            //船にものがないアニメーション処理
            if(basho=='r1' || basho=='r2' || basho=='r3'){}else{
                if(basho=='l1'){
                    if(hidari[0]==0){
                        return;
                    }
                }else if(basho=='l2'){
                    if(hidari[1]==0){
                        return;
                    }
                }else if(basho=='l3'){
                    if(hidari[2]==0){
                        return;
                    }
                }
                if(fune==null){
                   
                    $(function() {
                        idouanime=true;
                        funeanime=true;
                        $.when(
                            $("#"+basho+" img").animate({
                                left:funeX,
                                top:funeY,
                                width:0,
                                height:0,
                            }, 1000 )
                        )
                        .done(function() {
                            //船の位置で消える
                            $('#'+basho+" img").css('display','none');
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
                    //モノを戻す処理
                    if(basho==fune){
                         $(function() {
                            idouanime=true;
                            funeanime=true;
                            $.when(
                                    $('#'+fune+" img").css('display','block'),
                                    $("#"+fune+" img").animate({
                                        left:aitemX,
                                        top:aitemY,
                                        width:sizeX,
                                        height:sizeY
                                    }, 1000)
                            )
                            .done(function() {
                                //if文で入るものの数値を入れる処理
                                idouanime=false;
                                funeanime=false;
                                //船にアイテムを入れる
                                fune=null;
                                
                            })
                            .fail(function() {
                                // エラーがあった時
                                console.log('error');
                            }); 
                        });
                    }else{
                        //モノを交換する処理
                        $(function() {
                            idouanime=true;
                            funeanime=true;
                            $.when(
                                $("#"+basho+" img").animate({
                                    left:funeX,
                                    top:funeY,
                                    width:0,
                                    height:0,
                                }, 1000)
                            )
                            .done(function() {
                                    $.when(
                                        $('#'+fune+" img").css('display','block'),
                                        $("#"+fune+" img").animate({
                                            left:aitemX,
                                            top:aitemY,
                                            width:sizeX,
                                            height:sizeY
                                        }, 1000)
                                    )
                                    .done(function(){
                                        //船の位置で消える
                                        $('#'+basho+" img").css('display','none');
                                        //if文で入るものの数値を入れる処理
                                        idouanime=false;
                                        funeanime=false;
                                        //船にアイテムを入れる
                                        fune=basho;
                                        }
                                    )
                                
                            })
                            .fail(function() {
                                // エラーがあった時
                                console.log('error');
                            }); 
                        });
                    }
                }
            }
        }else{//右の時の処理
            //船の座標
            if(diff==0){
                if(fune=='r1'){
                    sizeX='4vw';
                    sizeY='8vh';
                    aitemX='0.5vw';
                    aitemY='1vh';
                }else if(fune=='r2'){
                    sizeX='2vw';
                    sizeY='4vh';
                    aitemX='1.5vw';
                    aitemY='3vh';
                }else if(fune=='r3'){
                    sizeX='3vw';
                    sizeY='6vh';
                    aitemX='1vw';
                    aitemY='2vh';
                }
            }
            //船の座標
            if(basho=='r1'){
                funeX='-10vw';
                funeY='36.5vh';
            }else if(basho=='r2'){
                funeX='-10vw';
                funeY='16.5vh';
            }else if(basho=='r3'){
                funeX='-10vw';
                funeY='-3.5vh';
            }
            
            
            //アニメーション処理
            //船にものがないアニメーション処理
            if(basho=='l1' || basho=='l2' || basho=='l3'){}else{
                if(basho=='r1'){
                    if(migi[0]==0){
                        return;
                    }
                }else if(basho=='r2'){
                    if(migi[1]==0){
                        return;
                    }
                }else if(basho=='r3'){
                    if(migi[2]==0){
                        return;
                    }
                }

                if(fune==null){
                    $(function() {
                        idouanime=true;
                        funeanime=true;
                        $.when(
                            $("#"+basho+" img").animate({
                                left:funeX,
                                top:funeY,
                                width:0,
                                height:0,
                            }, 1000 )
                        )
                        .done(function() {
                            //船の位置で消える
                             $('#'+basho+" img").css('display','none');
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
                    if(basho==fune){
                         $(function() {
                            idouanime=true;
                            funeanime=true;
                            $.when(
                                    $('#'+fune+" img").css('display','block'),
                                    $("#"+fune+" img").animate({
                                        left:aitemX,
                                        top:aitemY,
                                        width:sizeX,
                                        height:sizeY
                                    }, 1000)
                            )
                            .done(function() {
                                //if文で入るものの数値を入れる処理
                                idouanime=false;
                                funeanime=false;
                                //船にアイテムを入れる
                                fune=null;
                                
                            })
                            .fail(function() {
                                // エラーがあった時
                                console.log('error');
                            }); 
                        });
                    }else{
                             $(function() {
                            idouanime=true;
                            funeanime=true;
                            $.when(
                                $("#"+basho+" img").animate({
                                    left:funeX,
                                    top:funeY,
                                    width:0,
                                    height:0,
                                }, 1000)
                            )
                            .done(function() {
                                    $.when(
                                        $('#'+fune+" img").css('display','block'),
                                        $("#"+fune+" img").animate({
                                            left:aitemX,
                                            top:aitemY,
                                            width:sizeX,
                                            height:sizeY
                                        }, 1000)
                                    )
                                    .done(function(){
                                        //船の位置で消える
                                        $('#'+basho+" img").css('display','none');
                                        //if文で入るものの数値を入れる処理
                                        idouanime=false;
                                        funeanime=false;
                                        //船にアイテムを入れる
                                        fune=basho;
                                        }
                                    )
                                
                            })
                            .fail(function() {
                                // エラーがあった時
                                console.log('error');
                            }); 
                        });
                    }
                    
                }
            }
        }

        
    }

    
}
//船を向こう岸へ移動させる処理
function animefune(){
    if(funeanime==false || idouanime==false){
        //animetion処理の後にクリア判定
        funeanime=true;
        idouanime=true;
        if(funebasho==0){//左から右へ移動する処理
            $("#fune img").attr('src', '../image/fune_L.png');
            if(diff==0){
                if(fune=='l1'){
                    sizeX='4vw';
                    sizeY='8vh';
                    aitemX='0.5vw';
                    aitemY='1vh';
                }else if(fune=='l2'){
                    sizeX='2vw';
                    sizeY='4vh';
                    aitemX='1.5vw';
                    aitemY='3vh';
                }else if(fune=='l3'){
                    sizeX='3vw';
                    sizeY='6vh';
                    aitemX='1vw';
                    aitemY='2vh';
                }
            }

            $(function() {
            $.when(
                //船の移動処理
                $("#fune").animate({
                    left:'+=30vw',
                }, 1000 )
            )
            .done(function() {
                //if文で入るものの数値を入れる処理
                //船の座標変更
                funebasho=1;
                //船にアイテムがあるのなら
                if(fune!=null){
                    if(fune=='l1'){
                        $(function() {
                            $.when(
                                //船の場所から出現
                                $("#r1 img").css('left','-10vw'),
                                $("#r1 img").css('top','36.5vh'),
                                $("#r1 img").css('width','0'),
                                $("#r1 img").css('height','0'),
                                $("#r1 img").css('display','block'),
                                $("#r1 img").animate({
                                    left:aitemX,
                                    top:aitemY,
                                    width:sizeX,
                                    height:sizeY
                                }, 1000)
                            )
                            .done(function() {
                                //aitemuを除去
                                fune=null;
                                //左から右へ移動
                                hidari[0]=0;
                                migi[0]=1;
                                //ゲームクリア判定
                                clearhantei();
                                //if文で入るものの数値を入れる処理
                                idouanime=false;
                                funeanime=false;
                                
                            })
                            .fail(function() {
                                // エラーがあった時
                                console.log('error');
                            }); 
                        });
                        
                    }else if(fune=='l2'){
                         $(function() {
                            $.when(
                                //船の場所から出現
                                $("#r2 img").css('left','-10vw'),
                                $("#r2 img").css('top','16.5vh'),
                                $("#r2 img").css('width','0'),
                                $("#r2 img").css('height','0'),
                                $("#r2 img").css('display','block'),
                                $("#r2 img").animate({
                                    left:aitemX,
                                    top:aitemY,
                                    width:sizeX,
                                    height:sizeY
                                }, 1000)
                            )
                            .done(function() {
                                //aitemuを除去
                                fune=null;
                                //左から右へ移動
                                hidari[1]=0;
                                migi[1]=1;
                                //ゲームクリア判定
                                clearhantei();
                                //if文で入るものの数値を入れる処理
                                idouanime=false;
                                funeanime=false;
                            })
                            .fail(function() {
                                // エラーがあった時
                                console.log('error');
                            }); 
                        });
                    }else{
                        $(function() {
                            $.when(
                                //船の場所から出現
                                $("#r3 img").css('left','-10vw'),
                                $("#r3 img").css('top','-3.5vh'),
                                $("#r3 img").css('width','0'),
                                $("#r3 img").css('height','0'),
                                $("#r3 img").css('display','block'),
                                $("#r3 img").animate({
                                    left:aitemX,
                                    top:aitemY,
                                    width:sizeX,
                                    height:sizeY
                                }, 1000)
                            )
                            .done(function() {
                                //aitemuを除去
                                fune=null;
                                //左から右へ移動
                                hidari[2]=0;
                                migi[2]=1;
                                //ゲームクリア判定
                                 clearhantei();
                                  //if文で入るものの数値を入れる処理
                                idouanime=false;
                                funeanime=false;
                            })
                            .fail(function() {
                                // エラーがあった時
                                console.log('error');
                            }); 
                        });
                    }
                }
                if(fune==null){
                    //ゲームクリア判定
                    clearhantei();
                    //if文で入るものの数値を入れる処理
                    idouanime=false;
                    funeanime=false;
                }
                
            })
            .fail(function() {
                // エラーがあった時
                console.log('error');
            }); 
        });
        }else{//右から左へ移動する処理
            if(diff==0 && fune!=null){
                funeanime=false;
                idouanime=false;
                animeidou(fune);
            }else{
                $("#fune img").attr('src', '../image/fune_R.png');
                $(function() {
                    $.when(
                        $("#fune").animate({
                            left:'-=30vw',
                        }, 1000 )
                    )
                    .done(function() {
                        funebasho=0;
                        //船にアイテムがあるのなら
                        if(fune!=null){
                            if(fune=='r1'){
                                $(function() {
                                    $.when(
                                        //船の場所から出現
                                        $("#l1 img").css('left','13vw'),
                                        $("#l1 img").css('top','36.5vh'),
                                        $("#l1 img").css('width','0'),
                                        $("#l1 img").css('height','0'),
                                        $("#l1 img").css('display','block'),
                                        $("#l1 img").animate({
                                            left:aitemX,
                                            top:aitemY,
                                            width:sizeX,
                                            height:sizeY
                                        }, 1000)
                                    )
                                    .done(function() {
                                        //aitemuを除去
                                        fune=null;
                                        //左から右へ移動
                                        hidari[0]=1
                                        migi[0]=0;
                                        //ゲームクリア判定
                                        clearhantei();
                                        //if文で入るものの数値を入れる処理
                                        idouanime=false;
                                        funeanime=false;
                                        
                                    })
                                    .fail(function() {
                                        // エラーがあった時
                                        console.log('error');
                                    }); 
                                });
                                
                            }else if(fune=='r2'){
                                $(function() {
                                    $.when(
                                        //船の場所から出現
                                        $("#l2 img").css('left','13vw'),
                                        $("#l2 img").css('top','16.5vh'),
                                        $("#l2 img").css('width','0'),
                                        $("#l2 img").css('height','0'),
                                        $("#l2 img").css('display','block'),
                                        $("#l2 img").animate({
                                            left:aitemX,
                                            top:aitemY,
                                            width:sizeX,
                                            height:sizeY
                                        }, 1000)
                                    )
                                    .done(function() {
                                        //aitemuを除去
                                        fune=null;
                                        //左から右へ移動
                                        hidari[1]=1
                                        migi[1]=0;
                                        //ゲームクリア判定
                                        clearhantei();
                                         //if文で入るものの数値を入れる処理
                                        idouanime=false;
                                        funeanime=false;
                                    })
                                    .fail(function() {
                                        // エラーがあった時
                                        console.log('error');
                                    }); 
                                });
                            }else{
                                $(function() {
                                    $.when(
                                        //船の場所から出現
                                        $("#l3 img").css('left','13vw'),
                                        $("#l3 img").css('top','-3.5vh'),
                                        $("#l3 img").css('width','0'),
                                        $("#l3 img").css('height','0'),
                                        $("#l3 img").css('display','block'),
                                        $("#l3 img").animate({
                                            left:aitemX,
                                            top:aitemY,
                                            width:sizeX,
                                            height:sizeY
                                        }, 1000)
                                    )
                                    .done(function() {
                                        //aitemuを除去
                                        fune=null;
                                        //左から右へ移動
                                        hidari[2]=1
                                        migi[2]=0;
                                        //ゲームクリア判定
                                        clearhantei();
                                        //if文で入るものの数値を入れる処理
                                        idouanime=false;
                                        funeanime=false;
                                    })
                                    .fail(function() {
                                        // エラーがあった時
                                        console.log('error');
                                    }); 
                                });
                            }
                        }
                        if(fune==null){
                            //ゲームクリア判定
                            clearhantei();
                            //if文で入るものの数値を入れる処理
                            funeanime=false;
                            idouanime=false;
                        }
                        
                    })
                    .fail(function() {
                        // エラーがあった時
                        console.log('error');
                    }); 
                });
            }
        }
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
            }else if(migi[1]==1 && migi[2]==1){
                modal(3);
            }
        //船が右なら
        }else{
            //オオカミとヒツジの判定
            if(hidari[0]==1 && hidari[1]==1){
                modal(3);
            }else if(hidari[1]==1 && hidari[2]==1){
                modal(3);
            }
        }

    }else if(diff==1){
        if(funebasho==0){
            //オオカミとヒツジの判定
            if(migi[0]==1 && migi[2]==1){
                modal(3);
            }else if(migi[1]==1 && migi[2]==1){
                modal(3);
            }
        //船が右なら
        }else{
            //オオカミとヒツジの判定
            if(hidari[0]==1 && hidari[2]==1){
                modal(3);
            }else if(hidari[1]==1 && hidari[2]==1){
                modal(3);
            }
        }
    }else if(diff==0){
        if(funebasho==0){
            //船が左に移動した際

        }else{
            //難易度easyの部分
            if(hidari[0]==1 && hidari[1]==1 && hidari[2]==1){
                //最初の時の判定　移動をしていないとき
            }else{
                //一回目の移動
                if(count==0){
                     if(hidari[0]==1 && hidari[1]==0 && hidari[2]==1){
                          count++;
                    }else{
                        modal(3);
                    }
                }else if(count==1){
                      if(hidari[0]==1 && hidari[1]==0 && hidari[2]==1){
                    }else{
                        if(hidari[0]==1 && hidari[1]==0 && hidari[2]==0){
                        }else{
                            modal(3);
                        }
                    }
                }
            }
        }
    }
}

function clearhantei(){
    /*基本的なゲームクリア判定*/ 
    gameflag=true;
    if(migi[0]==0 || migi[1]==0 || migi[2]==0){
        gameflag=false;
    }
    if(gameflag==true){
        cleartrue('funawatashi_'+(diff+1));
        modal(2);
    }else{
      overhantei();
    }
}
