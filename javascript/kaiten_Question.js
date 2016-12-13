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
var modal_content;
/*クリアフラグ三つ毎*/ 
function cleartrue(clearnum){
    window.localStorage.setItem(clearnum,true);
}
//モーダルダイアログの表示
function modal(mc){
    //モーダルダイアログに表示させる内容
    /*
    switch (modal_content){
        case 0:
            /*styleタグ画面上のどこに置くかを指定している 
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
    */
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
        $( "#modal-content"+mc ).fadeIn( "slow" ) ;
        if(mc == 2 || mc == 3){
            //クリックしても閉じない
            $( "#modal-close" ).unbind().click( function(){

                //[#modal-content]と[#modal-overlay]をフェードアウトした後に…
                $( "#modal-overlay,#modal-content"+mc ).fadeOut( "slow" , function(){

                    //[#modal-overlay]を削除する
                    $('#modal-overlay').remove() ;
                } ) ;

            } ) ;
        }else{
            //[#modal-overlay]、または[#modal-close]をクリックしたら…
            $( "#modal-overlay,#modal-close" ).unbind().click( function(){

                //[#modal-content]と[#modal-overlay]をフェードアウトした後に…
                $( "#modal-overlay,#modal-content"+mc ).fadeOut( "slow" , function(){

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
            var cw = $( "#modal-content"+mc ).outerWidth();
            var ch = $( "#modal-content"+mc ).outerHeight();

            //センタリングを実行する
            $( "#modal-content"+mc ).css( {"left": ((w - cw)/2) + "px","top": ((h - ch)/2) + "px"} ) ;

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