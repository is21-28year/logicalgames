//マップページJS機能
//初期変数宣言
var senkan_1="";
//test用localstorage使用の判定
if (!window.localStorage) {
    alert("お使いのブラウザはlocalstorageに対応してません。");
}
//localstorageからデータを取得
function localget(){
    //戦艦問題クリアフラグ取得
    senkan_1=window.localStorage.getItem("senkan_1");
}
//localstorageにデータを挿入
function  localput(){
    window.localStorage.setItem("senkan_1",senkan_1);
}
//localstorageの全データを削除
function localdelete(){
    window.localStorage.removeItem("senkan_1");
}
//クリア済みのものに画像を表示
function cleardisp(){
    //クリア済みかの判定
    if(senkan_1==true){
        //指定位置に画像の表示
            document.write("OKaaaa");
            document.getElementById("senkan_kunsho").style.visibility="visible";
        }else{
            document.getElementById("senkan_kunsho").style.visibility="hidden";
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
localget();
cleardisp();
senkan_1=false;
localput();
document.write("OKaaaa");

//モータルウィンドウの表示機能
//難しいのであと回し