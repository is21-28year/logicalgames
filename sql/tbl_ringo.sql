-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2016 年 12 朁E22 日 11:55
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
-- テーブルの構造 `tbl_ringo`
--

CREATE TABLE `tbl_ringo` (
  `number_ringo` int(2) NOT NULL,
  `bunsho_ringo` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `contents_ringo` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `hint_ringo` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `gameover_ringo` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- テーブルのデータのダンプ `tbl_ringo`
--

INSERT INTO `tbl_ringo` (`number_ringo`, `bunsho_ringo`, `contents_ringo`, `hint_ringo`, `gameover_ringo`) VALUES
(0, '<img style="width:28vw; height:17vh;" src="../image/ringo_bunsho.png">', '        <!--リンゴ拾い問題部分-->\n        <!--リンゴ拾いz-indexを使用してレイヤーの配置を重ならないようにする-->\n        <!--道やpointのレイヤー-->\n        <div id="road_easy">\n            <img src="../image/miti_1.png" alt="">\n            <div id="point">\n                <div id="point0" class="easy" onclick="idou(0)"><img src="../image/point.png" alt=""></div>\n                <div id="point1" class="easy" onclick="idou(1)"><img src="../image/point.png" alt=""></div>\n                <div id="point2" class="easy" onclick="idou(2)"><img src="../image/point.png" alt=""></div>\n                <div id="point3" class="easy" onclick="idou(3)"><img src="../image/point.png" alt=""></div>\n            </div>\n            <div id="ringo">\n                <div id="ringo0" class="easy"><img src="../image/ringo.png" alt=""></div>\n                <div id="ringo1" class="easy"><img src="../image/ringo.png" alt=""></div>\n                <div id="ringo2" class="easy"><img src="../image/ringo.png" alt=""></div>\n                <div id="ringo3" class="easy"><img src="../image/ringo.png" alt=""></div>\n                <div id="ringo4" class="easy"><img src="../image/ringo.png" alt=""></div>\n            </div>\n                <div>\n                    <img id="chara" src="../image/chara.png" alt="">\n                </div>\n            </div>\n        </div>\n', '        <p style=''margin-top:25vh;''><img src=''../image/H_R1.png'' style=''width:25vw; height:10vh;''></p>\n        <div class=''center''><input type=''button'' id=''modal-close1'' class=''tojiru''></div>\n', '        <p style=''margin-top:25vh;''><img src=''../image/ringo_gameover.png'' style=''width:35vw; height:12.5vh;''></p>\n        <div><input type=''button'' class=''leftbtn mapback''  onclick=''mapjump()''><input type=''button'' onclick="shoki(0)" id=''modal-close3'' class=''rightbtn yarinaosi''></div>\n'),
(1, '<img style="width:28vw; height:17vh;" src="../image/ringo_bunsho.png">', '        <!--リンゴ拾い問題部分-->\n        <!--リンゴ拾いz-indexを使用してレイヤーの配置を重ならないようにする-->\n        <!--道やpointのレイヤー-->\n        <div id="road">\n            <img src="../image/miti_2.png" alt="">\n            <div id="point">\n                <div id="point0" class="normal" onclick="idou(0)"><img src="../image/point.png" alt=""></div>\n                <div id="point1" class="normal" onclick="idou(1)"><img src="../image/point.png" alt=""></div>\n                <div id="point2" class="normal" onclick="idou(2)"><img src="../image/point.png" alt=""></div>\n                <div id="point3" class="normal" onclick="idou(3)"><img src="../image/point.png" alt=""></div>\n                <div id="point4" class="normal" onclick="idou(4)"><img src="../image/point.png" alt=""></div>\n                <div id="point5" class="normal" onclick="idou(5)"><img src="../image/point.png" alt=""></div>\n            </div>\n            <div id="ringo">\n                <div id="ringo0" class="normal"><img src="../image/ringo.png" alt=""></div>\n                <div id="ringo1" class="normal"><img src="../image/ringo.png" alt=""></div>\n                <div id="ringo2" class="normal"><img src="../image/ringo.png" alt=""></div>\n                <div id="ringo3" class="normal"><img src="../image/ringo.png" alt=""></div>\n                <div id="ringo4" class="normal"><img src="../image/ringo.png" alt=""></div>\n                <div id="ringo5" class="normal"><img src="../image/ringo.png" alt=""></div>\n                <div id="ringo6" class="normal"><img src="../image/ringo.png" alt=""></div>\n                <div id="ringo7" class="normal"><img src="../image/ringo.png" alt=""></div>\n            </div>\n                <div>\n                    <img id="chara" src="../image/chara.png" alt="">\n                </div>\n            </div>\n        </div>\n', '        <p style=''margin-top:25vh;''><img src=''../image/H_R.png'' style=''width:50vw; height:12vh;''></p>\n        <div class=''center''><input type=''button'' id=''modal-close1'' class=''tojiru''></div>\n', '        <p style=''margin-top:25vh;''><img src=''../image/ringo_gameover.png'' style=''width:35vw; height:12.5vh;''></p>\n        <div><input type=''button'' class=''leftbtn mapback''  onclick=''mapjump()''><input type=''button'' onclick="shoki(1)" id=''modal-close3'' class=''rightbtn yarinaosi''></div>\n'),
(2, '<img style="width:28vw; height:17vh;" src="../image/ringo_bunsho.png">', '        <!--リンゴ拾い問題部分-->\n        <!--リンゴ拾いz-indexを使用してレイヤーの配置を重ならないようにする-->\n        <!--道やpointのレイヤー-->\n        <div id="road">\n            <img src="../image/miti_3.png" alt="">\n            <div id="point">\n                <div id="point0" class="hard" onclick="idou(0)"><img src="../image/point.png" alt=""></div>\n                <div id="point1" class="hard" onclick="idou(1)"><img src="../image/point.png" alt=""></div>\n                <div id="point2" class="hard" onclick="idou(2)"><img src="../image/point.png" alt=""></div>\n                <div id="point3" class="hard" onclick="idou(3)"><img src="../image/point.png" alt=""></div>\n                <div id="point4" class="hard" onclick="idou(4)"><img src="../image/point.png" alt=""></div>\n                <div id="point5" class="hard" onclick="idou(5)"><img src="../image/point.png" alt=""></div>\n            </div>\n            <div id="ringo">\n                <div id="ringo0" class="hard"><img src="../image/ringo.png" alt=""></div>\n                <div id="ringo1" class="hard"><img src="../image/ringo.png" alt=""></div>\n                <div id="ringo2" class="hard"><img src="../image/ringo.png" alt=""></div>\n                <div id="ringo3" class="hard"><img src="../image/ringo.png" alt=""></div>\n                <div id="ringo4" class="hard"><img src="../image/ringo.png" alt=""></div>\n                <div id="ringo5" class="hard"><img src="../image/ringo.png" alt=""></div>\n                <div id="ringo6" class="hard"><img src="../image/ringo.png" alt=""></div>\n                <div id="ringo7" class="hard"><img src="../image/ringo.png" alt=""></div>\n                <div id="ringo8" class="hard"><img src="../image/ringo.png" alt=""></div>\n                <div id="ringo9" class="hard"><img src="../image/ringo.png" alt=""></div>\n            </div>\n                <div>\n                    <img id="chara" src="../image/chara.png" alt="">\n                </div>\n            </div>\n        </div>\n', '        <p style=''margin-top:25vh;''><img src=''../image/H_R.png'' style=''width:50vw; height:12vh;''></p>\n        <div class=''center''><input type=''button'' id=''modal-close1'' class=''tojiru''></div>\n', '        <p style=''margin-top:25vh;''><img src=''../image/ringo_gameover.png'' style=''width:35vw; height:12.5vh;''></p>\n        <div><input type=''button'' class=''leftbtn mapback''  onclick=''mapjump()''><input type=''button'' onclick="shoki(2)" id=''modal-close3'' class=''rightbtn yarinaosi''></div>\n');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_ringo`
--
ALTER TABLE `tbl_ringo`
  ADD PRIMARY KEY (`number_ringo`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
