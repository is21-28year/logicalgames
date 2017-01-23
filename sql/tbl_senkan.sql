-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2016 年 12 朁E16 日 09:23
-- サーバのバージョン： 10.1.10-MariaDB
-- PHP Version: 7.0.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_question`
--

-- --------------------------------------------------------

--
-- テーブルの構造 `tbl_senkan`
--

CREATE TABLE `tbl_senkan` (
  `number_senkan` int(2) NOT NULL,
  `bunsho_senkan` text NOT NULL,
  `contents_senkan` text NOT NULL,
  `hint_senkan` text NOT NULL,
  `gameover_senkan` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- テーブルのデータのダンプ `tbl_senkan`
--

INSERT INTO `tbl_senkan` (`number_senkan`, `bunsho_senkan`, `contents_senkan`, `hint_senkan`, `gameover_senkan`) VALUES
(1, '<img id="M_T" src="../image/M_T.png">\n    <img style="width:25vw; height:30vh;" src="../image/senkan_bunsho.png">', '<ul class="wrap" id="w1">\n            <li class="box1"><img id="ship0" src="../image/senkan_teki.png" onclick="senkan_hantei(0)"></li>\n            <li class="box1"><img id="ship2" src="../image/senkan_teki.png" onclick="senkan_hantei(2)"></li>\n            <li class="box1"><img id="ship4" src="../image/senkan_teki.png" onclick="senkan_hantei(4)"></li>\n        </ul>\n        <ul class="wrap">\n            <li class="box2"><img id="ship1" src="../image/senkan_teki.png" onclick="senkan_hantei(1)"></li>\n            <li class="box2"><img id="ship3" src="../image/senkan_teki.png" onclick="senkan_hantei(3)"></li>\n        </ul>\n        <img id="cannon" src="../image/cannon_1.png" alt="">\n        <img id="zan_tama" src="" alt="">', '<p style=''margin-top:0vh;''><img src=''../image/H_S.png'' style=''width:50vw; height:70vh;''></p>\n        <div class=''center''><input type=''button'' id=''modal-close1'' class=''tojiru''></div>', '<p style=''margin-top:25vh;''><img src=''../image/senkan_gameover.png'' style=''width:35vw; height:12.5vh;''></p>\n        <div><input type=''button'' class=''leftbtn mapback''  onclick=''mapjump()''><input type=''button''  id=''modal-close3'' class=''rightbtn yarinaosi'' onclick=''reset()''></div>'),
(2, '<img id="M_T" src="../image/M_T.png">\n    <img style="width:25vw; height:30vh;" src="../image/senkan_bunsho.png">', '<ul class="wrap" id="w1">\n            <li class="box1"><img id="ship0" src="../image/senkan_teki.png" onclick="senkan_hantei(0)"></li>\n            <li class="box1"><img id="ship2" src="../image/senkan_teki.png" onclick="senkan_hantei(2)"></li>\n            <li class="box1"><img id="ship4" src="../image/senkan_teki.png" onclick="senkan_hantei(4)"></li>\n            <li class="box1"><img id="ship6" src="../image/senkan_teki.png" onclick="senkan_hantei(6)"></li>\n        </ul>\n        <ul class="wrap">\n            <li class="box2"><img id="ship1" src="../image/senkan_teki.png" onclick="senkan_hantei(1)"></li>\n            <li class="box2"><img id="ship3" src="../image/senkan_teki.png" onclick="senkan_hantei(3)"></li>\n            <li class="box2"><img id="ship5" src="../image/senkan_teki.png" onclick="senkan_hantei(5)"></li>\n        </ul>\n        <img id="cannon" src="../image/cannon_1.png" alt="">\n        <img id="zan_tama" src="" alt="">', '<p style=''margin-top:0vh;''><img src=''../image/H_S.png'' style=''width:50vw; height:70vh;''></p>\n        <div class=''center''><input type=''button'' id=''modal-close1'' class=''tojiru''></div>', '<p style=''margin-top:25vh;''><img src=''../image/senkan_gameover.png'' style=''width:35vw; height:12.5vh;''></p>\n        <div><input type=''button'' class=''leftbtn mapback''  onclick=''mapjump()''><input type=''button''  id=''modal-close3'' class=''rightbtn yarinaosi'' onclick=''reset()''></div>'),
(3, '<img id="M_T" src="../image/M_T.png">\n    <img style="width:25vw; height:30vh;" src="../image/senkan_bunsho.png">', '<ul class="wrap" id="w1">\n            <li class="box1"><img id="ship0" src="../image/senkan_teki.png" onclick="senkan_hantei(0)"></li>\n            <li class="box1"><img id="ship2" src="../image/senkan_teki.png" onclick="senkan_hantei(2)"></li>\n            <li class="box1"><img id="ship4" src="../image/senkan_teki.png" onclick="senkan_hantei(4)"></li>\n            <li class="box1"><img id="ship6" src="../image/senkan_teki.png" onclick="senkan_hantei(6)"></li>\n            <li class="box1"><img id="ship8" src="../image/senkan_teki.png" onclick="senkan_hantei(8)"></li>\n            <li class="box1"><img id="ship10" src="../image/senkan_teki.png" onclick="senkan_hantei(10)"></li>\n        </ul>\n        <ul class="wrap">\n            <li class="box2"><img id="ship1" src="../image/senkan_teki.png" onclick="senkan_hantei(1)"></li>\n            <li class="box2"><img id="ship3" src="../image/senkan_teki.png" onclick="senkan_hantei(3)"></li>\n            <li class="box2"><img id="ship5" src="../image/senkan_teki.png" onclick="senkan_hantei(5)"></li>\n            <li class="box2"><img id="ship7" src="../image/senkan_teki.png" onclick="senkan_hantei(7)"></li>\n            <li class="box1"><img id="ship9" src="../image/senkan_teki.png" onclick="senkan_hantei(9)"></li>\n        </ul>\n        <img id="cannon" src="../image/cannon_1.png" alt="">\n        <img id="zan_tama" src="" alt="">', '<p style=''margin-top:0vh;''><img src=''../image/H_S.png'' style=''width:50vw; height:70vh;''></p>\n        <div class=''center''><input type=''button'' id=''modal-close1'' class=''tojiru''></div>', '<p style=''margin-top:25vh;''><img src=''../image/senkan_gameover.png'' style=''width:35vw; height:12.5vh;''></p>\n        <div><input type=''button'' class=''leftbtn mapback''  onclick=''mapjump()''><input type=''button''  id=''modal-close3'' class=''rightbtn yarinaosi'' onclick=''reset()''></div>');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
