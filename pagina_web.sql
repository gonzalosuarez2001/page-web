-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 13-05-2023 a las 02:34:55
-- Versión del servidor: 8.0.31
-- Versión de PHP: 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `pagina_web`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `novedades`
--

DROP TABLE IF EXISTS `novedades`;
CREATE TABLE IF NOT EXISTS `novedades` (
  `id` int NOT NULL AUTO_INCREMENT,
  `titulo` varchar(255) COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `subtitulo` text COLLATE utf8mb3_unicode_ci,
  `cuerpo` text COLLATE utf8mb3_unicode_ci,
  `img_id` varchar(255) COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=51 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Volcado de datos para la tabla `novedades`
--

INSERT INTO `novedades` (`id`, `titulo`, `subtitulo`, `cuerpo`, `img_id`) VALUES
(50, 'prueba', 'prueba', 'prueba', 'dlowldf3mgiujtyuttpn'),
(47, 'Aprende HTML', 'Subtitulo', 'Lore dolorem, alias soluta? Tempora, debitis doloremque natus consectetur eveniet sed dolore voluptas voluptatum animi quo commodi quos nesciunt dicta quisquam voluptas voluptatum animi.', 'wwrc0kj6gdoe0igga7eo'),
(46, 'Aprende Bootstrap', 'Subtitulo', 'Lore dolorem, alias soluta? Tempora, debitis doloremque natus consectetur eveniet sed dolore voluptas voluptatum animi quo commodi quos nesciunt dicta quisquam voluptas voluptatum animi.', 'htumpbgjmqaesf3qfaxi'),
(48, 'Aprende JavaScript', 'Subtitulo', 'Lore dolorem, alias soluta? Tempora, debitis doloremque natus consectetur eveniet sed dolore voluptas voluptatum animi quo commodi quos nesciunt dicta quisquam voluptas voluptatum animi.', 'jdiqt4in4qnqbqibemma'),
(49, 'Aprende React', 'Subtitulo', 'Lore dolorem, alias soluta? Tempora, debitis doloremque natus consectetur eveniet sed dolore voluptas voluptatum animi quo commodi quos nesciunt dicta quisquam voluptas voluptatum animi.', 'wouszxi2gzzoendq59vb');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int NOT NULL,
  `usuario` varchar(255) COLLATE utf8mb3_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb3_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `password`) VALUES
(1, 'gonzalosuarez', 'e4a7e1e03438ff2a3bc4cd887ab102b8');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
