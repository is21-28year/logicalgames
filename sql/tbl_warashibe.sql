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
-- テーブルの構造 `tbl_warashibe`
--

CREATE TABLE `tbl_warashibe` (
  `number_warashibe` int(2) NOT NULL,
  `bunsho_warashibe` text COLLATE utf8_bin NOT NULL,
  `contents_warashibe` text COLLATE utf8_bin NOT NULL,
  `hint_warashibe` text COLLATE utf8_bin NOT NULL,
  `gameover_warashibe` text COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- テーブルのデータのダンプ `tbl_warashibe`
--

INSERT INTO `tbl_warashibe` (`number_warashibe`, `bunsho_warashibe`, `contents_warashibe`, `hint_warashibe`, `gameover_warashibe`) VALUES
(1, '<img style="width:28vw; height:15vh;" src="../image/warashibe_bunsho.png">', '   <div class="box" id="box1">\n            <div id="gitem"></div>\n            <div id="c0" class="chara1" onclick="koukan(0)"></div>\n            <div id="c1" class="chara1" onclick="koukan(1)"></div>\n        </div>\n        <div class="box" id="box2">\n            <div id="myitem"></div>\n            <div id="c2" class="chara1" onclick="koukan(2)"></div>\n            <div id="c3" class="chara1" onclick="koukan(3)"></div>\n        </div>', '<p style=''margin-top:25vh;''><img src=''../image/H_W1.png'' style=''width:50vw; height:12vh;''></p>', '<p style=''margin-top:25vh;''><img src=''../image/warashibe_gameover.png'' style=''width:35vw; height:12.5vh;''></p>'),
(2, '<img style="width:28vw; height:15vh;" src="../image/warashibe_bunsho.png">', '    <div class="box" id="box1">\n            <div id="gitem"></div>\n            <div id="c0" class="chara2" onclick="koukan(0)"></div>\n            <div id="c1" class="chara2" onclick="koukan(1)"></div>\n            <div id="c2" class="chara2" onclick="koukan(2)"></div>\n        </div>\n        <div class="box" id="box2">\n            <div id="myitem"></div>\n            <div id="c3" class="chara2" onclick="koukan(3)"></div>\n            <div id="c4" class="chara2" onclick="koukan(4)"></div>\n            <div id="c5" class="chara2" onclick="koukan(5)"></div>\n        </div>\n        ', '<p style=''margin-top:25vh;''><img src=''../image/H_W.2png'' style=''width:50vw; height:12vh;''></p>', ' <p style=''margin-top:25vh;''><img src=''../image/warashibe_gameover.png'' style=''width:35vw; height:12.5vh;''></p>'),
(3, '<img style="width:28vw; height:15vh;" src="../image/warashibe_bunsho.png">', '<div class="box" id="box1">\n            <div id="gitem"></div>\n            <div id="c0" class="chara3" onclick="koukan(0)"></div>\n            <div id="c1" class="chara3" onclick="koukan(1)"></div>\n            <div id="c2" class="chara3" onclick="koukan(2)"></div>\n            <div id="c3" class="chara3" onclick="koukan(3)"></div>\n        </div>\n        <div class="box" id="box2">\n            <div id="myitem"></div>\n            <div id="c4" class="chara3" onclick="koukan(4)"></div>\n            <div id="c5" class="chara3" onclick="koukan(5)"></div>\n            <div id="c6" class="chara3" onclick="koukan(6)"></div>\n            <div id="c7" class="chara3" onclick="koukan(7)"></div>\n        </div>', '<img style="width:28vw; height:15vh;" src="../image/warashibe_bunsho.png">', '<p style=''margin-top:25vh;''><img src=''../image/warashibe_gameover.png'' style=''width:35vw; height:12.5vh;''></p>');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_warashibe`
--
ALTER TABLE `tbl_warashibe`
  ADD PRIMARY KEY (`number_warashibe`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
