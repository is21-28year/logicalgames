var x_z = 0;
var y_z = 0;
var s_x = 0;
var s_y = 0;
var s_k = 0;
var k = 0;
var flag1 = [0,0,0,0,0];
var flag2 = [0,0,0,0,0];
var flag3 = [0,0,0,0,0];
var flag4 = [0,0,0,0,0];
var flag5 = [0,0,0,0,0];
var fl = 0;
var flog = 0;
function s(x,y,k_s){//初期
if(flog==1){}else{
s_x = x;
s_y = y;
x_z = Math.floor( Math.random() * x+1 ) ;
y_z = Math.floor( Math.random() * y+1 ) ;
k = k_s;
s_k = k_s;
tama();
flag1 = [0,0,0,0,0];
flag2 = [0,0,0,0,0];
flag3 = [0,0,0,0,0];
flag4 = [0,0,0,0,0];
flag5 = [0,0,0,0,0];
}
}
function hantei(c_x,c_y){
if(flog==1){}else{
switch (c_x){
  case 1:
    if(flag1[c_y] == 1){
    fl = 1;
    }
    break;
  case 2:
    if(flag2[c_y] == 1){
    fl = 1;
    }
    break;
  case 3:
    if(flag3[c_y] == 1){
    fl = 1;
    }
    break;
  case 4:
    if(flag4[c_y] == 1){
    fl = 1;
    }
    break;
  case 5:
    if(flag5[c_y] == 1){
    fl = 1;
    }
    break;
}
 if(fl == 1){
    }else{
        
switch (c_x){
  case 1:
    flag1[c_y] = 1
    break;
  case 2:
    flag2[c_y] = 1
    break;
  case 3:
    flag3[c_y] = 1
    break;
  case 4:
    flag4[c_y] = 1
    break;
  case 5:
    flag5[c_y] = 1
    break;
}
document.getElementById(c_x+"_"+c_y).innerHTML="<img id='ten' src='../image/pick.png 'width='50%' height='100%'>";
$(function() {
flog=1;
        $.when(
		$({deg:50}).animate({deg:-50}, {
			duration:500,
			progress:function() {
				$("#ten").css({
					transform:'rotate(' + this.deg + 'deg)'
				})
			}
		})
      )
        .done(function() {
        k += -1;
        tama();
flog=0;
        if(x_z < c_x){
        	if(y_z < c_y){
            	document.getElementById(c_x+"_"+c_y).innerHTML="<img src='../image/hidariue.png'>";
            	}else if(y_z > c_y){
            	document.getElementById(c_x+"_"+c_y).innerHTML="<img src='../image/migiue.png'>";
            	}else if(y_z == c_y){
            	document.getElementById(c_x+"_"+c_y).innerHTML="<img src='../image/ue.png'>";
            	}
        }else if(x_z > c_x){
        	if(y_z < c_y){
            	document.getElementById(c_x+"_"+c_y).innerHTML="<img src='../image/hidarisita.png'>";
        	}else if(y_z > c_y){
            	document.getElementById(c_x+"_"+c_y).innerHTML="<img src='../image/migisita.png'>";
        	}else if(y_z == c_y){
            	document.getElementById(c_x+"_"+c_y).innerHTML="<img src='../image/sita.png'>";
            	}
        }else if(x_z == c_x){
        	if(y_z < c_y){
            	document.getElementById(c_x+"_"+c_y).innerHTML="<img src='../image/hidari.png'>";
        	}else if(y_z > c_y){
            	document.getElementById(c_x+"_"+c_y).innerHTML="<img src='../image/migi.png'>";
        	}else if(y_z == c_y){
            	modal(2);
            	}
        }
            if(k < 1){
                //ゲームオーバー
                modal(3);
            }
        })
        .fail(function() {
            // エラーがあった時
            console.log('error');
        }); 
    });
}
        }

    
    fl = 0;
}
function tama(){
var kai="<img src='../image/s_pick";
var suu=".png'>";
    document.getElementById("kaisuu").innerHTML=kai+k+suu;
}
function reset(){
    tama();
flag1 = [0,0,0,0,0];
flag2 = [0,0,0,0,0];
flag3 = [0,0,0,0,0];
flag4 = [0,0,0,0,0];
flag5 = [0,0,0,0,0];
    for(var i=1;i<s_x+1;i++){
    	for(var d=1;d<s_y+1;d++){
        document.getElementById(i+"_"+d).innerHTML="<img src='../image/kiretsu.png'>";
    	}
    }
}
function cleartrue(clearnum){
    window.localStorage.setItem(clearnum,true);
}


function mapjump(){
    window.location.href = 'map.html';
}
