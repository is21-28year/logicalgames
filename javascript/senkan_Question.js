var ship_ans = 2;
var ship_zan = 8;
var ship_flag = [0,0,0,0,0,0,0,0,0]

function senkan_hantei(click_num){
    //クリック済かどうかの判定
    if(ship_flag[click_num] == 1){
        //クリック済なら何もしない
    }else{
        ship_flag[click_num] = 1;
        //船爆破
        document.getElementById("ship"+click_num).src="../image/oukan.png";
        setTimeout(function(){
            document.getElementById("ship"+click_num).src="../image/Puzzle_3.1.png";
        },500);
        //弾数減らす
        ship_zan += -1;
        tama();
        //弾数0以下なら
        if(ship_ans == click_num){
            //ゲームクリア
            modal(2);
        }else{
            if(ship_zan < 1){
                //ゲームオーバー
                modal(3);
            }
        }
    }
}
function tama(){
    document.getElementById("zan_tama").innerHTML=ship_zan;
}
function reset(){
    ship_zan = 8;
    tama();
    ship_flag = [0,0,0,0,0,0,0,0,0];
    for(var i=0;i<9;i++){
        document.getElementById("ship"+i).src="../image/senkan_teki.png";
    }
}
function animation(num){
    document.getElementById("ship"+num).src="../image/Puzzle_3.1.png";
}

function modal(modal_content){
    //モーダルダイアログに表示させる内容
    switch (modal_content){
        case 0:
            document.getElementById("modal-content").innerHTML="<p></p>";
            document.getElementById("modal-content").innerHTML+="<div class='center'><input type='button' id='modal-close' value='閉じる'></div>";
            break;
        case 1:
            document.getElementById("modal-content").innerHTML="<p></p>";
            document.getElementById("modal-content").innerHTML+="<div class='center'><input type='button' id='modal-close' value='閉じる'></div>";
            break;
        case 2:
            //window.localStorage.setItem("senkan_3",true);
            document.getElementById("modal-content").innerHTML="<p>おめでとう！ステージクリア！</p>";
            document.getElementById("modal-content").innerHTML+="<div class='center'><input type='button' value='マップへ戻る' onclick='mapjump()'></div>";
            break;
        case 3:
            document.getElementById("modal-content").innerHTML="<p>ゲームオーバー</p>";
            document.getElementById("modal-content").innerHTML+="<div><input type='button' class='leftbtn' value='マップへ戻る' onclick='mapjump()'><input type='button' class='rightbtn' id='modal-close' value='やり直す' onclick='reset()'></div>";
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

        if(modal_content == 2){
            //クリックしても閉じない
            
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
function mapjump(){
    window.location.href = 'map.html';
}
