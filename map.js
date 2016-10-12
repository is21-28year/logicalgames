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
    alert(senkan_1);
}
//localstorageにデータを挿入
function  localput(){
    //戦艦クリアフラグput
    window.localStorage.senkan_1=senkan_1;
    window.localStorage.setItem("senkan_2",senkan_2);
    window.localStorage.setItem("senkan_3",senkan_3); 
    //わらしべクリアフラグput
    window.localStorage.setItem("warashibe_1",warashibe_1);
    window.localStorage.setItem("warashibe_2",warashibe_2);
    window.localStorage.setItem("warashibe_3",warashibe_3); 
    //りんごクリアフラグput
    window.localStorage.setItem("ringo_1",ringo_1);
    window.localStorage.setItem("ringo_2",ringo_2);
    window.localStorage.setItem("ringo_3",ringo_3); 
    //宝クリアフラグput
    window.localStorage.setItem("takara_1",takara_1);
    window.localStorage.setItem("takara_2",takara_2);
    window.localStorage.setItem("takara_3",takara_3); 
    //船渡しクリアフラグput
    window.localStorage.setItem("funawatashi_1",funawatashi_1);
    window.localStorage.setItem("funawatashi_2",funawatashi_2);
    window.localStorage.setItem("funawatashi_3",funawatashi_3); 
    //回転クリアフラグput
    window.localStorage.setItem("kaiten_1",kaiten_1);
    window.localStorage.setItem("kaiten_2",kaiten_2);
    window.localStorage.setItem("kaiten_3",kaiten_3); 
    alert(senkan_1);
}
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
    //チュートリアルフラグ削除
    alert("sakujyo");
}
//クリア済みのものに画像を表示
function cleardisp(clearflag){
    //クリア済みかの判定
    if(clearflag==true){
        //指定位置に画像の表示
        //画像の範囲元がhtmlに表示するため解決する
            var image_disp = document.getElementById("senkan_kunsho");
            image_disp.src="senkan.png";
            image_disp.onload();
        }   
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

//meintest
//test用localstorage使用の判定
if (!window.localStorage) {
    alert("お使いのブラウザはlocalstorageに対応してません。");
}
localget();
cleardisp(senkan_1);
localput();
