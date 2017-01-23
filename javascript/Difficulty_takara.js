/*変数の初期宣言+初回かどうかのフラグ*/ 
    var takara_tutorial;
    /*画像常時のための変数*/
    /*てすと*/
    var clear_1;
    var clear_2;
    var clear_3;
    var clear_omake; 
    
//ローカルデータの取得よう

    function localget(){
        //チュートリアル閲覧フラグ取得
        takara_tutorial=window.localStorage.getItem("takara_tutorial");
        //船渡し各問題クリアフラグ取得
        clear_1=window.localStorage.getItem("takara_1");
        clear_2=window.localStorage.getItem("takara_2");
        clear_3=window.localStorage.getItem("takara_3");
        clear_omake=window.localStorage.getItem("takara_omake");
}   


//localstorageにデータを挿入
    function  localput(){
        //チュートリアル閲覧フラグput
        window.localStorage.takara_tutorial=("takara_tutorial",takara_tutorial);
}

//モーダルダイアログの表示
function modal(){
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

        //[#modal-overlay]、または[#modal-close]をクリックしたら…
        $( "#modal-overlay,#modal-close" ).unbind().click( function(){
            //動画停止
            stop();
            //[#modal-content]と[#modal-overlay]をフェードアウトした後に…
            $( "#modal-content,#modal-overlay" ).fadeOut( "slow" , function(){

                //[#modal-overlay]を削除する
                $('#modal-overlay').remove() ;
            } ) ;

        } ) ;

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

//難易度にセッションのデータを送るオンクリックイベント

//リンクを移動するよう
function mapjump(){
    window.location.href = 'map.html';
}

//遊び方動画の初回用判定
function tutorialhantei(){
    if(takara_tutorial != "true"){
        modal();
        takara_tutorial = "true";
    }

}
/*画像表示部分*/ 
function clearhantei(clear,id){
    //クリア済みかの判定
    if(clear=="true"){
          //指定位置に画像の表示
        document.getElementById(id).innerHTML="<img style='position:relative;z-index: 2;' src='../image/star.png' class='clearimage'>";
    }else{
        document.getElementById(id).innerHTML="";
    } 
}

//全問題クリア済み画像表示
function cleardisp(){
    //クリア画像表示１
    clearhantei(clear_1,"clear1");
    //クリア画像表示2
    clearhantei(clear_2,"clear2");
    //クリア画像表示3
    clearhantei(clear_3,"clear3");
    //クリア画像表示4
    clearhantei(clear_omake,"clear4");
}

function omake(){
    /*難易度3つクリア済みならおまけを表示 */
    if(clear_1=="true" && clear_2=="true" && clear_3=="true"){
        document.getElementById('omake').innerHTML="<form action='takara_Question.html' method='post' name='frm4'><div style=' position: absolute; top: 70vh; left:42%;'><div id='clear4'></div><input type='button' id='e' class='difficlty_box' onclick='document.frm4.submit();'><input type='hidden' value='4' name='nanido'></div> </form>";
    }else{
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
//メイン動作部分に変更
function main(){
    localget();
    omake();
    cleardisp();
    localput();
    viewhantei();
    viewchange();
    tutorialhantei();
}
