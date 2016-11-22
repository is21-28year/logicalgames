<?php
//MySQLに接続
    $con = mysqli_connect("localhost","root","","db_question");
    //tbl_kaiinからすべてのレコード取得
    $sql = "select * from tbl_kaiten";
    $rst = mysqli_query($con,$sql) or die("失敗");
    $data = mysqli_fetch_array($rst);
?>
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <title>問題ページ 回転命令</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
    <script type="text/javascript" src="../javascript/jQueryRotate.js"></script>
    <script type="text/javascript" src="../javascript/kaiten_Question.js"></script>
    <link rel="stylesheet" type="text/css" href="../css/Question.css">
    <link rel="stylesheet" type="text/css" href="../css/kaiten_Question.css">
</head>
<body onload="viewhantei();viewchange();imgkaiten();modal(0);questionrand(90);">
    <!-- ここからモーダルウィンドウ -->
    <div id="modal-content">
	    <!-- モーダルウィンドウのコンテンツ開始 -->
	    <!-- ここの内容はQuestion.jsで表記しています -->
	    <!-- モーダルウィンドウのコンテンツ終了 -->
    </div>
    <div id="viewchange">
        <!-- モーダルウィンドウのコンテンツ開始 -->
        <img src="../image/view_text.png" id="deltext" alt="">
        <!-- モーダルウィンドウのコンテンツ終了 -->
    </div>
    <header>
        <!--前の画面へ戻るボタン-->
        <input type="button" class="hidari modoru" onclick="location.href='Difficulty_kaiten.html'">
        <img id="title" src="../image/kaiten_title.png" alt="">
        <input type="button" class="migi hint" onclick="modal(1)">
    </header>
    <div class="clam_left">
    <!--問題文章div-->
    <div id="bunsho" class="b">
    <?php
            echo "{$data['bunsho_kaiten']}";
        ?>
    </div>
    
    <!--リセットボタン配置-->
    
    <div id="reset">
        <!--
        <input type="button" class="migi" value="リセット">
        -->
    </div>
    
    </div>
    <div class="clam_right">
        <!--問題動作div-->
        <!--<h1><ruby><rb>問題</rb><rp>(</rp><rt>もんだい</rt><rp>)</rp></ruby></h1>-->
        <?php
            echo "{$data['contents_kaiten']}";
        ?>
        <!-- デバッグ用 -->
        <!--
        <input type="button" value="クリア" onclick="modal(2)">
        <input type="button" value="ゲームオーバー" onclick="modal(3)">
        -->
    </div>
</body>
</html>