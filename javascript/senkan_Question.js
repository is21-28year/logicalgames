var ship_ans = 0;
var ship_zan = 0;
var ship_flag;
var run_flag = false;
var mode;
function senkan_s(seki,zan){//初期
ship_ans = Math.floor( Math.random() * seki ) ;
ship_zan = zan;
}
function chmode(level){
    mode = level;
}
function senkan_hantei(click_num){
    //実行中かどうかの判定
    if(run_flag == false){
        run_flag = true;
        //クリック済かどうかの判定
        if(ship_flag[click_num] == 1){
            //クリック済なら何もしない
        }else{
            ship_flag[click_num] = 1;
            //砲弾発射
            document.getElementById("cannon").src="../image/cannon_2.png";
            //船爆破
            document.getElementById("ship"+click_num).src="../image/explosion.png";
            setTimeout(function(){
        	    if(ship_ans < click_num){
                document.getElementById("ship"+click_num).src="../image/senkan_teki_3.png";
                }else if(ship_ans > click_num){
                document.getElementById("ship"+click_num).src="../image/senkan_teki_4.png";
                }
                document.getElementById("cannon").src="../image/cannon_3.png";
            },250);
            setTimeout(function(){
                document.getElementById("cannon").src="../image/cannon_1.png";
            },500);
            //弾数減らす
            ship_zan += -1;
            tama();
            //弾数0以下なら
            if(ship_ans == click_num){
                //ゲームクリア
                cleartrue('senkan_'+mode);
                modal(2);
            }else{
                if(ship_zan < 1){
                    //ゲームオーバー
                    modal(3);
                }
            }
        }
        setTimeout(function(){
            run_flag = false;
        },750);
    }
}
function tama(){
    //document.getElementById("zan_tama").innerHTML=ship_zan;
    document.getElementById("zan_tama").src="../image/s_tama"+ship_zan+".png";
}
function reset(){
    if(run_flag == false){
        switch(mode){
            case 1:
                senkan_s(5,3);
                break;

            case 2:
                senkan_s(7,3);
                break;

            case 3:
                senkan_s(11,4);
        }
        /*
        if(mode == 1){
            senkan_s(7,5);
        }
        if(mode == 2){
            senkan_s(7,3);
        }
        if(mode == 3){
            senkan_s(11,4);
        }
        */
        tama();
        ship_flag = [0,0,0,0,0,0,0,0,0,0,0];
        for(var i=0;i<11;i++){
            document.getElementById("ship"+i).src="../image/senkan_teki.png";
        }
        document.getElementById("cannon").src="../image/cannon_1.png";
    }
}

function  localput(senkan){
                                                    //どの難易度をクリアしたのかの判定をつける
    //回転クリアフラグ
    if(senkan == "senkan_1"){
    window.localStorage.setItem("senkan_1",true);
    }
    if(senkan == "senkan_2"){
    window.localStorage.setItem("senkan_2",true);
    }
    if(senkan == "senkan_3"){
    window.localStorage.setItem("senkan_3",true);
    } 
}