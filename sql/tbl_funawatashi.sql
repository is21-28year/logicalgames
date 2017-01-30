-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2017 年 1 朁E13 日 09:24
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
-- テーブルの構造 `tbl_funawatashi`
--

CREATE TABLE `tbl_funawatashi` (
  `number_funawatashi` int(2) NOT NULL,
  `bunsho_funawatashi` text COLLATE utf8_bin NOT NULL,
  `contents_funawatashi` text COLLATE utf8_bin NOT NULL,
  `hint_funawatashi` text COLLATE utf8_bin NOT NULL,
  `gameover_funawatashi` text COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- テーブルのデータのダンプ `tbl_funawatashi`
--

INSERT INTO `tbl_funawatashi` (`number_funawatashi`, `bunsho_funawatashi`, `contents_funawatashi`, `hint_funawatashi`, `gameover_funawatashi`) VALUES
(1, '<img style="width:30vw; height:17vh;" src="../image/funawatashi_bunsho1.png">', '<div id="lbox" class="box">\n            <div class="easy" onclick="animeidou(''l1'')" id="l1"><img src="../image/sheep.png" alt=""></div>\n            <div class="easy" onclick="animeidou(''l2'')" id="l2"><img src="../image/sheep.png" alt=""></div>\n            <div class="easy" onclick="animeidou(''l3'')" id="l3"><img src="../image/sheep.png" alt=""></div>\n        </div>\n        <div id="fune" onclick="animefune()">\n            <img id="funeimg" src="../image/fune_L.png" alt="">\n        </div>\n        <div id="rbox" class="box">\n            <div class="easy" onclick="animeidou(''r1'')" id="r1"><img src="../image/sheep.png" alt=""></div>\n            <div class="easy" onclick="animeidou(''r2'')" id="r2"><img src="../image/sheep.png" alt=""></div>\n            <div class="easy" onclick="animeidou(''r3'')" id="r3"><img src="../image/sheep.png" alt=""></div>\n        </div>', ' <p style=''margin-top:25vh;''><img src=''../image/H_F.png'' style=''width:30vw; height:12vh;''></p>\n        <div class=''center''><input type=''button'' id=''modal-close1'' class=''tojiru''></div>', '<p style=''margin-top:25vh;''><img src=''../image/funawatashi_gameover.png'' style=''width:35vw; height:12.5vh;''></p>\n        <div><input type=''button'' class=''leftbtn mapback''  onclick=''mapjump()''><input type=''button''  id=''modal-close3'' class=''rightbtn yarinaosi'' onclick=''shoki(0)'' ></div>'),
(2, '<img style="width:25vw; height:25vh;" src="../image/funawatashi_bunsho2.png">', '<div id="lbox" class="box">\n            <div onclick="animeidou(''l1'')" id="l1"><img src="../image/sheep.png" alt=""></div>\n            <div onclick="animeidou(''l2'')" id="l2"><img src="../image/sheep.png" alt=""></div>\n            <div onclick="animeidou(''l3'')" id="l3"><img src="../image/wolf.png" alt=""></div>\n        </div>\n        <div id="fune" onclick="animefune()">\n            <img src="../image/fune_L.png" alt="">\n        </div>\n        <div id="rbox" class="box">\n            <div onclick="animeidou(''r1'')" id="r1"><img src="../image/sheep.png" alt=""></div>\n            <div onclick="animeidou(''r2'')" id="r2"><img src="../image/sheep.png" alt=""></div>\n            <div onclick="animeidou(''r3'')" id="r3"><img src="../image/wolf.png" alt=""></div><img id="kankei1" src="../image/kankei_1.png">\n        </div>', '      <p style=''margin-top:25vh;''><img src=''../image/H_F2.png'' style=''width:50vw; height:12vh;''></p>\n        <div class=''center''><input type=''button'' id=''modal-close1'' class=''tojiru''></div>', ' <p style=''margin-top:25vh;''><img src=''../image/funawatashi_gameover.png'' style=''width:35vw; height:12.5vh;''></p>\n        <div><input type=''button'' class=''leftbtn mapback''  onclick=''mapjump()''><input type=''button''  id=''modal-close3'' class=''rightbtn yarinaosi'' onclick=''shoki(1)''></div>'),
(3, ' <img style="width:25vw; height:25vh;" src="../image/funawatashi_bunsho2.png">', '<div id="lbox" class="box">\n            <div onclick="animeidou(''l1'')" id="l1"><img src="../image/wolf.png" alt=""></div>\n            <div onclick="animeidou(''l2'')" id="l2"><img src="../image/sheep.png" alt=""></div>\n            <div onclick="animeidou(''l3'')" id="l3"><img src="../image/cabbage.png" alt=""></div>\n        </div>\n        <div id="fune" onclick="animefune()">\n            <img src="../image/fune_L.png" alt="">\n        </div>\n        <div id="rbox" class="box">\n            <div onclick="animeidou(''r1'')" id="r1"><img src="../image/wolf.png" alt=""></div>\n            <div onclick="animeidou(''r2'')" id="r2"><img src="../image/sheep.png" alt=""></div>\n            <div onclick="animeidou(''r3'')" id="r3"><img src="../image/cabbage.png" alt=""></div><img id="kankei2" src="../image/kankeizu.png">\n        </div>', ' <p style=''margin-top:25vh;''><img src=''../image/H_F2.png'' style=''width:50vw; height:12vh;''></p>\n        <div class=''center''><input type=''button'' id=''modal-close1'' class=''tojiru''></div>', ' <p style=''margin-top:25vh;''><img src=''../image/funawatashi_gameover.png'' style=''width:35vw; height:12.5vh;''></p>\n        <div><input type=''button'' class=''leftbtn mapback''  onclick=''mapjump()''><input type=''button''  id=''modal-close3'' class=''rightbtn yarinaosi'' onclick=''shoki(2)''> </div>');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_funawatashi`
--
ALTER TABLE `tbl_funawatashi`
  ADD PRIMARY KEY (`number_funawatashi`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
