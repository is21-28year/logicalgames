//初期変数宣言
var basho;
var diff;
var gameflag=flase;
var migi;
var hidari;
var fune;


//問題初期化部分
function shoki(diffnum){
    //難易度セット
    diff=diffnum;
    if(diff==2){
        //動物が入る場所の変数
        hidari=[1,1,1];
        migi=[0,0,0];
        //船がいる場所の判定 0=左 1=右
        fune=0;

    }else if(diff==1){
        basho=[0,0,0];
    }else{
        basho=[0,0,0];
    }   

}
//枠内のアイテムを船へ移動させる処理
function animeidou(){

}
//船を向こう岸へ移動させる処理
function animefune(){

}

function clearhantei(){
    /*基本的なゲームクリア判定*/ 
    gameflag=true
    for(var i in basho){
        if(i==0){
            gameflag=false
        }
    }

    if(gameflag==true){
        modal(2);
    }else{
      overhantei();
    }
}
//ゲームオーバーしたかの判定
function overhantei(){
    if(diff==2){
        //難易度むずかしいの判定
        //船の場所の判定
        if(fune==0){
            //オオカミとヒツジの判定
            if(migi[0]==1 && migi[1]==1){
                modal(3);
            }
            //ヒツジとキャベツの判定
            if(migi[1]==1 && migi[2]==1){
                modal(3);
            }
        //船が右なら
        }else{
            //オオカミとヒツジの判定
            if(hidari[0]==1 && hidari[1]==1){
                modal(3);
            }
            //ヒツジとキャベツの判定
            if(hidari[1]==1 && hidari[2]==1){
                modal(3);
            }
        }

    }else if(diff==1){

    }else{

    }
}