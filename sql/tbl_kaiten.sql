-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2016 年 12 朁E22 日 14:54
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
-- テーブルの構造 `tbl_kaiten`
--

CREATE TABLE `tbl_kaiten` (
  `number_kaiten` int(2) NOT NULL,
  `bunsho_kaiten` text COLLATE utf8_bin NOT NULL,
  `contents_kaiten` text COLLATE utf8_bin NOT NULL,
  `hint_kaiten` text COLLATE utf8_bin NOT NULL,
  `gameover_kaiten` text COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- テーブルのデータのダンプ `tbl_kaiten`
--

INSERT INTO `tbl_kaiten` (`number_kaiten`, `bunsho_kaiten`, `contents_kaiten`, `hint_kaiten`, `gameover_kaiten`) VALUES
(1, '<img style="width:25vw; height:15vh;" src="../image/kaiten_bunsho.png">', '<div id="border"><img  src="../image/Puzzle_b_1.3.png" alt="" id="kaiten"></div>\n        <div id="sentaku">\n            <div id="1" onclick="answer(1)">\n            </div>\n            <div id="2" onclick="answer(2)">\n            </div>\n            <div id="3" onclick="answer(3)">\n            </div>\n        </div>', '<p style=''margin-top:25vh;''><img src=''../image/H_K.png'' style=''width:50vw; height:12vh;''></p>\n        <div class=''center''><input type=''button'' id=''modal-close1'' class=''tojiru''></div>', '<p style=''margin-top:25vh;''><img src=''../image/kaiten_gameover.png'' style=''width:35vw; height:12.5vh;''></p>\n        <div><input type=''button'' class=''leftbtn mapback''  onclick=''mapjump()''><input type=''button''  id=''modal-close3'' onclick=''reset();'' class=''rightbtn yarinaosi''></div>'),
(2, '<img style="width:25vw; height:15vh;" src="../image/kaiten_bunsho.png">', '<div id="border"><img  src="../image/Puzzle_b_2.2.png" alt="" id="kaiten"></div>\n        <div id="sentaku">\n            <div id="1" onclick="answer(1)">\n            </div>\n            <div id="2" onclick="answer(2)">\n            </div>\n            <div id="3" onclick="answer(3)">\n            </div>\n<div id="4" onclick="answer(4)">\n            </div>\n        </div>', '<p style=''margin-top:25vh;''><img src=''../image/H_K.png'' style=''width:50vw; height:12vh;''></p>\n        <div class=''center''><input type=''button'' id=''modal-close1'' class=''tojiru''></div>', '<p style=''margin-top:25vh;''><img src=''../image/kaiten_gameover.png'' style=''width:35vw; height:12.5vh;''></p>\n        <div><input type=''button'' class=''leftbtn mapback''  onclick=''mapjump()''><input type=''button''  id=''modal-close3'' onclick=''reset();'' class=''rightbtn yarinaosi''></div>'),
(3, '<img style="width:25vw; height:15vh;" src="../image/kaiten_bunsho.png">', '<div id="border"><img  src="../image/Puzzle_b_3.1.png" alt="" id="kaiten"></div>\n        <div id="sentaku">\n            <div id="1" onclick="answer(1)">\n            </div>\n            <div id="2" onclick="answer(2)">\n            </div>\n            <div id="3" onclick="answer(3)">\n            </div>\n<div id="4" onclick="answer(4)">\n            </div>\n        </div>', '<p style=''margin-top:25vh;''><img src=''../image/H_K.png'' style=''width:50vw; height:12vh;''></p>\n        <div class=''center''><input type=''button'' id=''modal-close1'' class=''tojiru''></div>', '<p style=''margin-top:25vh;''><img src=''../image/kaiten_gameover.png'' style=''width:35vw; height:12.5vh;''></p>\n        <div><input type=''button'' class=''leftbtn mapback''  onclick=''mapjump()''><input type=''button''   id=''modal-close3'' onclick=''reset();'' class=''rightbtn yarinaosi''></div>');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
