var x_z = 0;
var y_z = 0;
var k = 0;
var flag = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
function s(x,y,k_s){//初期
x_z = Math.floor( Math.random() * x+1 ) ;
y_z = Math.floor( Math.random() * y+1 ) ;
k = k_s;
flag = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
}

function hantei(c_x,c_y){
        if(x_z < c_x){
        	if(y_z < c_y){
            	document.getElementById(c_x+"_"+c_y).src="";
            	}else if(y_z > c_y){
            	document.getElementById(c_x+"_"+c_y).src="";
            	}else if(y_z == c_y){
            	document.getElementById(c_x+"_"+c_y).src="";
            	}
        }else if(x_z > c_x){
        	if(y_z < c_y){
            	document.getElementById(c_x+"_"+c_y).src="";
        	}else if(y_z > c_y){
            	document.getElementById(c_x+"_"+c_y).src="";
        	}else if(y_z == c_y){
            	document.getElementById(c_x+"_"+c_y).src="";
            	}
        }else if(x_z == c_x){
        	if(y_z < c_y){
            	document.getElementById(c_x+"_"+c_y).src="";
        	}else if(y_z > c_y){
            	document.getElementById(c_x+"_"+c_y).src="";
        	}else if(y_z == c_y){
            	modal(2);
            	}
        }
        //弾数減らす
        k += -1;
        tama();
        //弾数0以下なら
            if(k < 1){
                //ゲームオーバー
                modal(3);
            }
    }
function tama(){
    document.getElementById("").innerHTML=k;
}
function reset(){
    tama();
    flag = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    for(var i=0;i<25;i++){
        document.getElementById(""+i).src="";
    }
}
function cleartrue(clearnum){
    window.localStorage.setItem(clearnum,true);
}

function modal(modal_content){
    //モーダルダイアログに表示させる内容
    switch (modal_content){
        case 0:
            document.getElementById("modal-content").innerHTML="<p style='margin-top:300px;'></p>";
            document.getElementById("modal-content").innerHTML+="<div class='center'><input type='button' id='modal-close' class='tojiru'></div>";
            break;
        case 1:
            document.getElementById("modal-content").innerHTML="<p style='margin-top:300px;'></p>";
            document.getElementById("modal-content").innerHTML+="<div class='center'><input type='button' id='modal-close' class='tojiru'></div>";
            break;
        case 2:
            window.localStorage.setItem("senkan_3",true);
            document.getElementById("modal-content").innerHTML="<p style='margin-top:300px;'>おめでとう！ステージクリア！</p>";
            document.getElementById("modal-content").innerHTML+="<div class='center'><input type='button' class='mapback' onclick='mapjump()'></div>";
            break;
        case 3:
            document.getElementById("modal-content").innerHTML="<p style='margin-top:300px;'>ゲームオーバー</p>";
            document.getElementById("modal-content").innerHTML+="<div><input type='button' class='leftbtn mapback'  onclick='mapjump()'><input type='button' class='rightbtn yarinaosi' onclick='reset()' id='modal-close'></div>";
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
function mapjump(){
    window.location.href = 'map.html';
}
