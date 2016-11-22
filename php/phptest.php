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
    <title>phptest</title>
</head>
<body>
<?php
    echo "{$data['bunsho_kaiten']}";
    echo "{$data['contents_kaiten']}";
    echo "{$data['hint_kaiten']}";
?>
</body>
</html>