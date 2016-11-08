//マップページJS機能
//初期変数宣言
//戦艦ゲーム変数
    var senkan_1=false;
    var senkan_2=false;
    var senkan_3=false;
//わらしべ長者変数
    var warashibe_1=false;
    var warashibe_2=false;
    var warashibe_3=false;
//リンゴ拾い変数
    var ringo_1=false;
    var ringo_2=false;
    var ringo_3=false;
//宝探し変数
    var takara_1=false;
    var takara_2=false;
    var takara_3=false;
//船渡し変数
    var funawatashi_1=false;
    var funawatashi_2=false;
    var funawatashi_3=false;
//回転命令変数
    var kaiten_1=false;
    var kaiten_2=false;
    var kaiten_3=false;

//localstorageからデータを取得
function localget(){
    //戦艦問題クリアフラグ取得
    senkan_1=window.localStorage.getItem("senkan_1");
    senkan_2=window.localStorage.getItem("senkan_2");
    senkan_3=window.localStorage.getItem("senkan_3");
     //わらしべ長者問題クリアフラグ取得
    warashibe_1=window.localStorage.getItem("warashibe_1");
    warashibe_2=window.localStorage.getItem("warashibe_2");
    warashibe_3=window.localStorage.getItem("warashibe_3");
     //戦艦問題クリアフラグ取得
    ringo_1=window.localStorage.getItem("ringo_1");
    ringo_2=window.localStorage.getItem("ringo_2");
    ringo_3=window.localStorage.getItem("ringo_3");
     //戦艦問題クリアフラグ取得
    takara_1=window.localStorage.getItem("takara_1");
    takara_2=window.localStorage.getItem("takara_2");
    takara_3=window.localStorage.getItem("takara_3");
     //戦艦問題クリアフラグ取得
    funawatashi_1=window.localStorage.getItem("funawatashi_1");
    funawatashi_2=window.localStorage.getItem("funawatashi_2");
    funawatashi_3=window.localStorage.getItem("funawatashi_3");
     //戦艦問題クリアフラグ取得
    kaiten_1=window.localStorage.getItem("kaiten_1");
    kaiten_2=window.localStorage.getItem("kaiten_2");
    kaiten_3=window.localStorage.getItem("kaiten_3");
}
//localstorageにデータを挿入


                            //ハッシュ化が必要

//localstorageの全データを削除
function localdelete(){
    //戦艦ゲームフラグ削除
    window.localStorage.removeItem("senkan_1");
    window.localStorage.removeItem("senkan_2");
    window.localStorage.removeItem("senkan_3");
     //わらしべ長者ゲームフラグ削除
    window.localStorage.removeItem("warashibe_1");
    window.localStorage.removeItem("warashibe_2");
    window.localStorage.removeItem("warashibe_3");
     //戦艦ゲームフラグ削除
    window.localStorage.removeItem("ringo_1");
    window.localStorage.removeItem("ringo_2");
    window.localStorage.removeItem("ringo_3");
     //戦艦ゲームフラグ削除
    window.localStorage.removeItem("takara_1");
    window.localStorage.removeItem("takara_2");
    window.localStorage.removeItem("takara_3");
     //戦艦ゲームフラグ削除
    window.localStorage.removeItem("funawatashi_1");
    window.localStorage.removeItem("funawatashi_2");
    window.localStorage.removeItem("funawatashi_3");
     //戦艦ゲームフラグ削除
    window.localStorage.removeItem("kaiten_1");
    window.localStorage.removeItem("kaiten_2");
    window.localStorage.removeItem("kaiten_3");
    //項目追記必要部分
    //チュートリアル削除
    window.localStorage.removeItem("funawatashi_tutorial");
    window.localStorage.removeItem("kaiten_tutorial");
    window.localStorage.removeItem("ringo_tutorial");
    window.localStorage.removeItem("senkan_tutorial");
    window.localStorage.removeItem("takara_tutorial");
    window.localStorage.removeItem("warashibe_tutorial");

}
//クリア済みのものに画像を表示
//要修正画像がちらちらする
function clearhantei(clear1,clear2,clear3,id){
    //クリア済みかの判定
    if(clear1=="true" && clear2=="true" && clear3=="true"){
        //指定位置に画像の表示
            document.getElementById(id).innerHTML="<img src='../image/oukan.png' width='100px' height='100'>";
        }else{
            document.getElementById(id).innerHTML="";
        } 
    }
//全問題クリア済み画像表示
function cleardisp(){
    //戦艦クリア表示
    clearhantei(senkan_1,senkan_2,senkan_3,"senkan");
    //回転クリア表示
    clearhantei(kaiten_1,kaiten_2,kaiten_3,"kaiten");
    //船渡しクリア表示
    clearhantei(funawatashi_1,funawatashi_2,funawatashi_3,"funawatashi");
    //リンゴクリア表示
    clearhantei(ringo_1,ringo_2,ringo_3,"ringo");
    //わらしべクリア表示
    clearhantei(warashibe_1,warashibe_2,warashibe_3,"warashibe");
    //宝クリア表示
    clearhantei(takara_1,takara_2,takara_3,"takara");

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



/*画面の縦横判定*/
function main(){
    viewhantei();
    viewchange();
    localget();
    cleardisp();
}
