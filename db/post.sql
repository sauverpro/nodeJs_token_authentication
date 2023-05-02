-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 12, 2023 at 03:16 AM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.4.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `post`
--

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `id` int(11) NOT NULL,
  `student_id` text NOT NULL,
  `firstname` text NOT NULL,
  `lastname` text NOT NULL,
  `gender` text NOT NULL,
  `address` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`id`, `student_id`, `firstname`, `lastname`, `gender`, `address`) VALUES
(1, '8836697d-3231-4d8d-9154-c75a410e2ec4', 'cyusa', 'tresall ', 'male', 'gikondo'),
(2, '0c85d301-1e38-4be9-a570-e7c4ce55bdd6', 'cyusa', 'tresall ', 'male', 'gikondo'),
(5, '5f7b5155-5695-43a9-8f22-5f2733845f08', 'sauverpro', '', '', ''),
(7, 'd3064cd1-57f5-4e5f-8596-99dac5bf9c55', 'waww', '', '', ''),
(8, 'f8426dff-93ff-4e1e-be7e-211b2ac6563a', '[object Object]', '', '', ''),
(9, '999352f0-327c-4587-b760-73deefeccb6e', 'waww', '', '', ''),
(10, '2eb79f45-74dd-4422-a679-264e37689f08', 'waww', '', '', ''),
(11, 'c3aa9c32-fa9f-4809-8ecd-50aadddd7203', 'kelly', 'mutiganda ', 'male', 'bugesera'),
(13, '27f63f74-c0fa-46b4-9a25-c80ed43495aa', '12345', '', '', ''),
(14, 'fb56b96a-ebc9-4e8e-8647-82cf70a113ff', '1', '', '', ''),
(17, '3c32d42b-f5f3-44c2-9fe4-7d4ba832ba1d', 'tuyizere', 'jean sauveur', 'male', 'kigali'),
(18, 'b205e9f5-b5d5-4a6d-b635-c51b33a8528d', 'kelia', 'mutesi ', 'female', 'rwamagana');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
