//初期設定
//場所:0~7
var place = [0,1,2,3,4,5,6,7];
//キャラクターが持っているアイテム
var haveitem = [0,1,2,3,4,5,6,7];
//キャラクターが欲しがっているアイテム
var wantitem =[1,2,3,4,5,6,7,0];
//※場所、haveアイテム、wantアイテムは常に同じ組み合わせになる
//交換済フラグ
var done = [0,0,0,0,0,0,0,0];
//表示する画像
var img = [0,0,0,0,0,0,0,0,0];
//自分が持っているアイテム
var myitem = 0;
//目標のアイテム
var gitem = 1;
//交換用変数
var item;
var tmpA;
//シャッフル処理
function shuffle(){
    for(var k=7;k>0;k--){
        //0からkまでのK+1個から１つ選択
        var t = Math.floor( Math.random() * (k+1) ) ;
        //選択された要素をk番目の要素と入れ替える
        tmpA = place[t];
        place[t] = place[k];
        place[k] = tmpA;
        tmpA = haveitem[t];
        haveitem[t] = haveitem[k];
        haveitem[k] = tmpA;
        tmpA = wantitem[t];
        wantitem[t] = wantitem[k];
        wantitem[k] = tmpA;
    }
}

//交換処理
function koukan(disp){
    //交換済でないなら
    if(done[disp] != 1){
        //持っているアイテムが相手の欲しがっているアイテムなら
        if(myitem == wantitem[disp]){
            //交換する
            item = myitem;
            myitem = haveitem[disp];
            haveitem[disp] = item;
            //交換済フラグ更新
            done[disp] = 1;
            //更新
            renewal();
            //自分が持っているアイテムが目標のアイテムなら
            if(myitem == gitem){
                //クリアする
                modal(2);
            }else{
                //ゲームオーバー判定
                var goflag = 1;
                for(var s=0;s<8;s++){
                    //自分のアイテムを欲しがっている人がいる かつ その人物が交換済みでないなら
                    if(myitem == wantitem[s] && done[s] != 1){
                        //ゲームオーバーフラグをオフ
                        var goflag = 0;
                    }
                }
                if(goflag == 1){
                    //ゲームオーバー
                    modal(3);
                }
            }
        }
    }
}
//表示更新処理
function renewal(){
    //自分が持っているアイテム
    document.getElementById("myitem").innerHTML=myitem;
    for(var i=0;i<8;i++){
        //場所
        document.getElementById("c"+i).innerHTML="場所";
        document.getElementById("c"+i).innerHTML+=place[i];
        //キャラクターが現在持っているアイテム
        document.getElementById("c"+i).innerHTML+="持";
        document.getElementById("c"+i).innerHTML+=haveitem[i];
        //キャラクターが欲しがっているアイテム
        //まだ取得していないなら
        if(done[i] == 0){
            document.getElementById("c"+i).innerHTML+="欲";
            document.getElementById("c"+i).innerHTML+=wantitem[i];
        }else{
        //持っているなら
            document.getElementById("c"+i).innerHTML+="交換済";
        }
    }
}



var modal_content;
/*クリアフラグ三つ毎*/ 
function cleartrue(clearnum){
    window.localStorage.setItem(clearnum,true);
}
//モーダルダイアログの表示
function modal(modal_content){
    //モーダルダイアログに表示させる内容
    switch (modal_content){
        case 0:
            /*styleタグ画面上のどこに置くかを指定している*/ 
            document.getElementById("modal-content").innerHTML="<p style='margin-top:25vh;'><img src='../image/B_K2.png' style='width:40vw; height:25vh;'></p>";
            document.getElementById("modal-content").innerHTML+="<div class='center'><input type='button' id='modal-close' class='tojiru'></div>";
            break;
        case 1:
            document.getElementById("modal-content").innerHTML="<?={$data['hint_kaiten']}?>";
            break;
        case 2:
            document.getElementById("modal-content").innerHTML="<p style='margin-top:25vh;'><img src='../image/kaiten_clear.png' style='width:40vw; height:8vh;'></p>";
            document.getElementById("modal-content").innerHTML+="<div class='center'><input type='button' class='mapback' onclick='mapjump()'></div>";
            break;
        case 3:
            document.getElementById("modal-content").innerHTML="<?={$data['gameover_kaiten']}?>";
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

//問題のランダム出力
function questionrand(kakudo){
    var rand = Math.floor( Math.random() * 4 )*kakudo;
    $("#sentaku img").rotate(rand);
}

function mapjump(){
    window.location.href = 'map.html';
}
function  localput(warashibe){
                                                    //どの難易度をクリアしたのかの判定をつける
    //回転クリアフラグ
    if(warashibe == "warashibe_1"){
    window.localStorage.setItem("warashibe_1",true);
    }
    if(warashibe == "warashibe_2"){
    window.localStorage.setItem("warashibe_2",true);
    }
    if(warashibe == "warashibe_3"){
    window.localStorage.setItem("warashibe_3",true);
    } 
}
/*
function  localput(){
    //回転クリアフラグput
    window.localStorage.setItem("kaiten_3",true); 
}
*/
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