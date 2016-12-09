//初期変数宣言
var ringo;
var point;
var basho;
var ibasho;
var gameflag;
var idousakiX;
var idousakiY;
var idouflag;
//難易度の判定
var diff=0;

//初期判定
//リンゴの数、ポイントの数、回数制限の数の指定
function shoki(diffnum){
    //難易度セット
    diff=diffnum;
    if(diff==2){
        ringo=[0,0,0,0,0,0,0,0,0,0];
        point=[0,0,0,0,0,0];
        //初期変数の決定
        ibasho=10;
        gameflag=true;
        idousakiX=0;
        idousakiY=0;
        idouflag=0;
        //画像の初期化
        document.getElementById("chara").style.display="none";
        for(var i=0;i<ringo.length;i++){
            document.getElementById("ringo"+i).style.display="";
        }
    }else if(diff==1){
        ringo =[0,0,0,0,0,0,0,0];
        point =[0,0,0,0,0,0];
        //初期変数の決定
        ibasho=10;
        gameflag=true;
        idousakiX=0;
        idousakiY=0;
        idouflag=0;
        //画像の初期化
        document.getElementById("chara").style.display="none";
        for(var i=0;i<ringo.length;i++){
            document.getElementById("ringo"+i).style.display="";
        }
    }else{
        ringo =[0,0,0,0,0];
        point =[0,0,0,0];
        //初期変数の決定
        ibasho=10;
        gameflag=true;
        idousakiX=0;
        idousakiY=0;
        idouflag=0;
        //画像の初期化
        document.getElementById("chara").style.display="none";
        for(var i=0;i<ringo.length;i++){
            document.getElementById("ringo"+i).style.display="";
        }
    }

}
//問題クリア判定    
function answer(){
     //アニメーション処理を行う
    //キャラクター移動とリンゴが消える処理
    //自分の場所から移動できるかの判定出来ないなら正解判定
    //難易度難しいの判定
    if(diff==2){
         if(point[0]==true){
            if(ringo[0]==true && ringo[1]==true && ringo[2]==true){
                ans();
            }
        }else if(point[1]==true){
            if(ringo[0]==true && ringo[4]==true && ringo[6]==true){
                ans();
            }
        }else  if(point[2]==true){
            if(ringo[2]==true && ringo[3]==true && ringo[4]==true && ringo[5]==true){
                ans();
            }
        }else  if(point[3]==true){
            if(ringo[1]==true && ringo[3]==true && ringo[7]==true && ringo [8]==true){
                ans();
            }
        }else  if(point[4]==true){
            if(ringo[5]==true && ringo[6]==true && ringo[7]==true && ringo [9]==true){
                ans();
            }
        }else  if(point[5]==true){
            if(ringo[8]==true && ringo[9]==true){
                ans();
            }
        }
    }else if(diff==1){
       if(point[0]==true){
            if(ringo[0]==true && ringo[1]==true && ringo[2]==true){
                ans();
            }
        }else if(point[1]==true){
            if(ringo[0]==true && ringo[4]==true && ringo[6]==true){
                ans();
            }
        }else  if(point[2]==true){
            if(ringo[2]==true && ringo[3]==true && ringo[4]==true && ringo[5]==true){
                ans();
            }
        }else  if(point[3]==true){
            if(ringo[1]==true && ringo[3]==true && ringo[7]==true && ringo [8]==true){
                ans();
            }
        }else  if(point[4]==true){
            if(ringo[5]==true && ringo[6]==true && ringo[7]==true && ringo [9]==true){
                ans();
            }
        }else  if(point[5]==true){
            if(ringo[8]==true && ringo[9]==true){
                ans();
            }
        }
    }else{
        if(point[0]==true){
            if(ringo[0]==true && ringo[1]==true && ringo[2]==true){
                ans();
            }
        }else if(point[1]==true){
            if(ringo[0]==true && ringo[3]==true){
                ans();
            }
        }else  if(point[2]==true){
            if(ringo[1]==true && ringo[4]==true){
                ans();
            }
        }else  if(point[3]==true){
            if(ringo[2]==true && ringo[3]==true && ringo[4]==true){
                ans();
            }
        }
    }
        
}
function ans(){
    for(var i in ringo){
        //判定エラーでゲームオーバーモーダル+フラグ＝false
        if(i==null){
            //ゲームおーばーモーダル
            gameflag=flase;
        }
    }
//判定通るとゲームクリア表示
    if(gameflag==true){
        modal(3);
    }else{
        modal(2);
    }
}
//問題移動処理
//難易度難しい完了
function idoushori(ibasho,basho,ringo){
    var bashoL=0;
    var bashoR=0;
    var bashoT=0;
    var bashoB=0;
    var X=0;
    var Y=0;
    var flagchange=function(){
        idouflag=0;
    }

    bashoL = parseInt($('#point'+basho).css('left'));
    bashoR = parseInt($('#point'+basho).css('right'));
    bashoT = parseInt($('#point'+basho).css('top'));
    bashoB = parseInt($('#point'+basho).css('bottom'));

    X=bashoL-bashoR;
    Y=bashoT-bashoB;

    ibashoL = parseInt($('#point'+ibasho).css('left'));
    ibashoR = parseInt($('#point'+ibasho).css('right'));
    ibashoT = parseInt($('#point'+ibasho).css('top'));
    ibashoB = parseInt($('#point'+ibasho).css('bottom'));
    
    ringoX=((bashoL-bashoR)+(ibashoL-ibashoR))/2;
    ringoY=((bashoT-bashoB)+(ibashoT-ibashoB))/2;


    //アニメーション
    $(function() {
        idouflag=1;
        $.when(
            $('#chara').animate({
                left:ringoX,
                top:ringoY,
            }, 1000 )
        )
        .done(function() {
            document.getElementById(ringo).style.display="none";
            setTimeout(flagchange,1000);
            $('#chara').animate({
                left:X,
                top:Y,
            }, 1000 )
            setTimeout("answer()", 1000);
        })
        .fail(function() {
            // エラーがあった時
            console.log('error');
        }); 
    });
}

function charaset(basho){

	// 座標を計算する
	var bashoL = parseInt($('#point'+basho).css('left'));
    var bashoR = parseInt($('#point'+basho).css('right'));
    var bashoT = parseInt($('#point'+basho).css('top'));
    var bashoB = parseInt($('#point'+basho).css('bottom'));
    
    var X=bashoL-bashoR;
    var Y=bashoT-bashoB;


     $.when(
            $('#chara').animate({
                left:X,
                top:Y
            },10 )
        )
        .done(function() {
            // すべて成功した時の処理
            document.getElementById("chara").style.display="block";
        })
        .fail(function() {
            // エラーがあった時
            console.log('error');
        }); 
    

}
//移動判定
function idouhantei(basho){
    if(diff==2){
        if(ibasho==0 && basho==1 || ibasho==1 && basho==0){
            //間のリンゴの判定
            if(ringo[0]==true){
               
            }else{
                ringo[0]=true;
                //pointで場所交換処理を追加
                point[ibasho]=null;
                point[basho]=true;
                idoushori(ibasho,basho,"ringo0");
            }
        }
        if(ibasho==0 && basho==3 || ibasho==3 && basho==0){
            //間のリンゴの判定
            if(ringo[1]==true){

            }else{
                ringo[1]=true;
                //pointで場所交換処理を追加
                point[ibasho]=null;
                point[basho]=true;
                idoushori(ibasho,basho,"ringo1");
            }
        }
        if(ibasho==0 && basho==2 || ibasho==2 && basho==0){
            //間のリンゴの判定
            if(ringo[2]==true){

    //問題移動処理
            }else{
                ringo[2]=true;
                //pointで場所交換処理を追加
                point[ibasho]=null;
                point[basho]=true;
                idoushori(ibasho,basho,"ringo2");
            }//左下処理
        }
        if((ibasho==2 && basho==3) || (ibasho==3 && basho==2)){
            //間のリンゴの判定
            if(ringo[3]==true){

            }else{
                ringo[3]=true;
                //pointで場所交換処理を追加
                point[ibasho]=null;
                point[basho]=true;
                idoushori(ibasho,basho,"ringo3");
            }
        }
        if((ibasho==1 && basho==2) || (ibasho==2 && basho==1)){
            //間のリンゴの判定
            if(ringo[4]==true){

            }else{
                ringo[4]=true;
                //pointで場所交換処理を追加
                point[ibasho]=null;
                point[basho]=true;
                idoushori(ibasho,basho,"ringo4");
            }
        }
        if((ibasho==2 && basho==4) || (ibasho==4 && basho==2)){
            //間のリンゴの判定
            if(ringo[5]==true){

            }else{
                ringo[5]=true;
                //pointで場所交換処理を追加
                point[ibasho]=null;
                point[basho]=true;
                idoushori(ibasho,basho,"ringo5");
            }
        }
        if((ibasho==1 && basho==4) || (ibasho==4 && basho==1)){
            //間のリンゴの判定
            if(ringo[6]==true){

            }else{
                ringo[6]=true;
                //pointで場所交換処理を追加
                point[ibasho]=null;
                point[basho]=true;
                idoushori(ibasho,basho,"ringo6");
            }
        }
        if((ibasho==3 && basho==4) || (ibasho==4 && basho==3)){
            //間のリンゴの判定
            if(ringo[7]==true){

            }else{
                ringo[7]=true;
                //pointで場所交換処理を追加
                point[ibasho]=null;
                point[basho]=true;
                idoushori(ibasho,basho,"ringo7");
            }
        }
        if((ibasho==3 && basho==5) || (ibasho==5 && basho==3)){
            //間のリンゴの判定
            if(ringo[8]==true){

            }else{
                ringo[8]=true;
                //pointで場所交換処理を追加
                point[ibasho]=null;
                point[basho]=true;
                idoushori(ibasho,basho,"ringo8");
            }
        }
        if((ibasho==4 && basho==5) || (ibasho==5 && basho==4)){
            //間のリンゴの判定
            if(ringo[9]==true){

            }else{
                ringo[9]=true;
                //pointで場所交換処理を追加
                point[ibasho]=null;
                point[basho]=true;
                idoushori(ibasho,basho,"ringo9");
            }
        }
        //難易度
    }else if(diff==1){
        if(ibasho==0 && basho==1 || ibasho==1 && basho==0){
            //間のリンゴの判定
            if(ringo[0]==true){
               
            }else{
                ringo[0]=true;
                //pointで場所交換処理を追加
                point[ibasho]=null;
                point[basho]=true;
                idoushori(ibasho,basho,"ringo0");
            }
        }
        if(ibasho==0 && basho==2 || ibasho==2 && basho==0){
            //間のリンゴの判定
            if(ringo[1]==true){

            }else{
                ringo[1]=true;
                //pointで場所交換処理を追加
                point[ibasho]=null;
                point[basho]=true;
                idoushori(ibasho,basho,"ringo1");
            }
        }
        if(ibasho==1 && basho==2 || ibasho==2 && basho==1){
            //間のリンゴの判定
            if(ringo[2]==true){

    //問題移動処理
            }else{
                ringo[2]=true;
                //pointで場所交換処理を追加
                point[ibasho]=null;
                point[basho]=true;
                idoushori(ibasho,basho,"ringo2");
            }//左下処理
        }
        if((ibasho==1 && basho==3) || (ibasho==3 && basho==1)){
            //間のリンゴの判定
            if(ringo[3]==true){

            }else{
                ringo[3]=true;
                //pointで場所交換処理を追加
                point[ibasho]=null;
                point[basho]=true;
                idoushori(ibasho,basho,"ringo3");
            }
        }
        if((ibasho==3 && basho==2) || (ibasho==2 && basho==3)){
            //間のリンゴの判定
            if(ringo[4]==true){

            }else{
                ringo[4]=true;
                //pointで場所交換処理を追加
                point[ibasho]=null;
                point[basho]=true;
                idoushori(ibasho,basho,"ringo4");
            }
        }
        if((ibasho==3 && basho==4) || (ibasho==4 && basho==3)){
            //間のリンゴの判定
            if(ringo[5]==true){

            }else{
                ringo[5]=true;
                //pointで場所交換処理を追加
                point[ibasho]=null;
                point[basho]=true;
                idoushori(ibasho,basho,"ringo5");
            }
        }
        if((ibasho==5 && basho==4) || (ibasho==4 && basho==5)){
            //間のリンゴの判定
            if(ringo[6]==true){

            }else{
                ringo[6]=true;
                //pointで場所交換処理を追加
                point[ibasho]=null;
                point[basho]=true;
                idoushori(ibasho,basho,"ringo6");
            }
        }
        if((ibasho==5 && basho==4) || (ibasho==4 && basho==5)){
            //間のリンゴの判定
            if(ringo[7]==true){

            }else{
                ringo[7]=true;
                //pointで場所交換処理を追加
                point[ibasho]=null;
                point[basho]=true;
                idoushori(ibasho,basho,"ringo7");
            }
        }
    }else{
         if(ibasho==0 && basho==1 || ibasho==1 && basho==0){
            //間のリンゴの判定
            if(ringo[0]==true){
               
            }else{
                ringo[0]=true;
                //pointで場所交換処理を追加
                point[ibasho]=null;
                point[basho]=true;
                idoushori(ibasho,basho,"ringo0");
            }
        }
        if(ibasho==0 && basho==2 || ibasho==2 && basho==0){
            //間のリンゴの判定
            if(ringo[1]==true){

            }else{
                ringo[1]=true;
                //pointで場所交換処理を追加
                point[ibasho]=null;
                point[basho]=true;
                idoushori(ibasho,basho,"ringo1");
            }
        }
        if(ibasho==0 && basho==3 || ibasho==3 && basho==0){
            //間のリンゴの判定
            if(ringo[2]==true){

    //問題移動処理
            }else{
                ringo[2]=true;
                //pointで場所交換処理を追加
                point[ibasho]=null;
                point[basho]=true;
                idoushori(ibasho,basho,"ringo2");
            }//左下処理
        }
        if((ibasho==1 && basho==3) || (ibasho==3 && basho==1)){
            //間のリンゴの判定
            if(ringo[3]==true){

            }else{
                ringo[3]=true;
                //pointで場所交換処理を追加
                point[ibasho]=null;
                point[basho]=true;
                idoushori(ibasho,basho,"ringo3");
            }
        }
        if((ibasho==3 && basho==2) || (ibasho==2 && basho==3)){
            //間のリンゴの判定
            if(ringo[4]==true){

            }else{
                ringo[4]=true;
                //pointで場所交換処理を追加
                point[ibasho]=null;
                point[basho]=true;
                idoushori(ibasho,basho,"ringo4");
            }
        }
        
    }
        
}
//引数で自分の場所を確認
function idou(basho){
    //今のtrueフラグがどこか取得
    if(idouflag==1){
        //フラグがないため移動処理ができない部分
    }else{
        for(var i=0;i<point.length;i++){
         if(point[i]==true){
             ibasho=i;
         }
     }
     
     if(ibasho==10){
         //初期位置置き場
         point[basho]=true;
         charaset(basho);
     }else{
         //順次処理を行うようにする
        idouhantei(basho);
        //  ちょっと判定を待ってもらう
     }
    }
}

/*画面の縦横判定共通部分前頁共通*/
function viewhantei(){

    $(function(){
		if($(window).height()<$(window).width()){
			
		}else{
			 $(function(){

    //モーダルウィンドウを出現させるクリックイベント
    $(function(){

        //キーボード操作などにより、オーバーレイが多重起動するのを防止する
        $( this ).blur() ;	//ボタンからフォーカスを外す
        if( $( "#modal-overlay" )[0] ) return false ;		//新しくモーダルウィンドウを起動しない (防止策1)
        //if($("#modal-overlay")[0]) $("#modal-overlay").remove() ;		//現在のモーダルウィンドウを削除して新しく起動する (防止策2)

        //オーバーレイを出現させる
        $( "body" ).append( '<div id="modal-overlay"></div>' ) ;
        $( "#modal-overlay" ).fadeIn( "slow" ) ;

        //コンテンツをセンタリングする
        centeringModalSyncer() ;

        //コンテンツをフェードインする
        $( "#viewchange" ).fadeIn( "slow" ) ;

    } ) ;

    //リサイズされたら、センタリングをする関数[centeringModalSyncer()]を実行する
    $( window ).resize( centeringModalSyncer ) ;

        //センタリングを実行する関数
        function centeringModalSyncer() {

            //画面(ウィンドウ)の幅、高さを取得
            var w = $( window ).width() ;
            var h = $( window ).height() ;

            // コンテンツ(#modal-content)の幅、高さを取得
            // jQueryのバージョンによっては、引数[{margin:true}]を指定した時、不具合を起こします。
    //		var cw = $( "#modal-content" ).outerWidth( {margin:true} );
    //		var ch = $( "#modal-content" ).outerHeight( {margin:true} );
            var cw = $( "#viewchange" ).outerWidth();
            var ch = $( "#viewchange" ).outerHeight();

            //センタリングを実行する
            $( "#viewchange" ).css( {"left": ((w - cw)/2) + "px","top": ((h - ch)/2) + "px"} ) ;

        }

    } ) ;
		}
	})

}

function viewchange(){
    $(window).bind("resize load",function(){
        if($(window).height()<$(window).width()){
            $( "#viewchange,#modal-overlay" ).fadeOut( "slow" , function(){

                        //[#modal-overlay]を削除する
                        $('#modal-overlay').remove() ;
                    } ) ;
        }else{
        viewhantei();
        }
    } ) ;
}
function mapjump(){
    window.location.href = 'map.html';
}

//モーダルダイアログの表示
function modal(modal_content){
    //モーダルダイアログに表示させる内容
    switch (modal_content){
        case 0:
            /*styleタグ画面上のどこに置くかを指定している*/ 
            document.getElementById("modal-content").innerHTML="<p style='margin-top:25vh;'><img src='../image/B_R.png' style='width:40vw; height:25vh;'></p>";
            document.getElementById("modal-content").innerHTML+="<div class='center'><input type='button' id='modal-close' class='tojiru'></div>";
            break;
        case 1:
            document.getElementById("modal-content").innerHTML="<?={$data['hint_ringo']}?>";
            break;
        case 2:
            document.getElementById("modal-content").innerHTML="<p style='margin-top:25vh;'><img src='../image/ringo_clear.png' style='width:40vw; height:8vh;'></p>";
            document.getElementById("modal-content").innerHTML+="<div class='center'><input type='button' class='mapback' onclick='mapjump()'></div>";
            break;
        case 3:
            document.getElementById("modal-content").innerHTML="<?={$data['gameover_ringo']}?>";
    }
    $(function(){

    //モーダルウィンドウを出現させるクリックイベント
    $(function(){

        //キーボード操作などにより、オーバーレイが多重起動するのを防止する
        $( this ).blur() ;	//ボタンからフォーカスを外す
        if( $( "#modal-overlay" )[0] ) return false ;		//新しくモーダルウィンドウを起動しない (防止策1)
        //if($("#modal-overlay")[0]) $("#modal-overlay").remove() ;		//現在のモーダルウィンドウを削除して新しく起動する (防止策2)

        //オーバーレイを出現させる
        $( "body" ).append( '<div id="modal-overlay"></div>' ) ;
        $( "#modal-overlay" ).fadeIn( "slow" ) ;

        //コンテンツをセンタリングする
        centeringModalSyncer() ;

        //コンテンツをフェードインする
        $( "#modal-content" ).fadeIn( "slow" ) ;

        if(modal_content == 2 || modal_content == 3){
            //クリックしても閉じない
            $( "#modal-close" ).unbind().click( function(){

                //[#modal-content]と[#modal-overlay]をフェードアウトした後に…
                $( "#modal-content,#modal-overlay" ).fadeOut( "slow" , function(){

                    //[#modal-overlay]を削除する
                    $('#modal-overlay').remove() ;
                } ) ;

            } ) ;
        }else{
            //[#modal-overlay]、または[#modal-close]をクリックしたら…
            $( "#modal-overlay,#modal-close" ).unbind().click( function(){

                //[#modal-content]と[#modal-overlay]をフェードアウトした後に…
                $( "#modal-content,#modal-overlay" ).fadeOut( "slow" , function(){

                    //[#modal-overlay]を削除する
                    $('#modal-overlay').remove() ;
                } ) ;

            } ) ;
        }

    } ) ;
    

    //リサイズされたら、センタリングをする関数[centeringModalSyncer()]を実行する
    $( window ).resize( centeringModalSyncer ) ;

        //センタリングを実行する関数
        function centeringModalSyncer() {

            //画面(ウィンドウ)の幅、高さを取得
            var w = $( window ).width() ;
            var h = $( window ).height() ;

            // コンテンツ(#modal-content)の幅、高さを取得
            // jQueryのバージョンによっては、引数[{margin:true}]を指定した時、不具合を起こします。
    //		var cw = $( "#modal-content" ).outerWidth( {margin:true} );
    //		var ch = $( "#modal-content" ).outerHeight( {margin:true} );
            var cw = $( "#modal-content" ).outerWidth();
            var ch = $( "#modal-content" ).outerHeight();

            //センタリングを実行する
            $( "#modal-content" ).css( {"left": ((w - cw)/2) + "px","top": ((h - ch)/2) + "px"} ) ;

        }

    } ) ;
}