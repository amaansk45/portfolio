import React from 'react';
import {
  FaPython,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaLocationDot,
  FaGraduationCap,
  FaBriefcase,
  FaFilePdf,
  FaMoon,
  FaSun,
  FaBars,
  FaXmark,
  FaArrowRight,
  FaDownload,
  FaEye,
  FaCheck,
  FaTerminal,
  FaCode,
  FaDatabase,
  FaServer,
  FaLaptopCode,
  FaAward,
  FaArrowUp,
  FaPaperPlane,
  FaLayerGroup,
  FaLightbulb,
} from 'react-icons/fa6';
import {
  SiDjango,
  SiPostman,
  SiMongodb,
  SiMysql,
  SiTailwindcss,
  SiPhp,
} from 'react-icons/si';

const iconMap = {
  FaPython,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaLocationDot,
  FaGraduationCap,
  FaBriefcase,
  FaFilePdf,
  FaMoon,
  FaSun,
  FaBars,
  FaXmark,
  FaArrowRight,
  FaDownload,
  FaEye,
  FaCheck,
  FaTerminal,
  FaCode,
  FaDatabase,
  FaServer,
  FaLaptopCode,
  FaAward,
  FaArrowUp,
  FaPaperPlane,
  FaLayerGroup,
  FaLightbulb,
  SiDjango,
  SiPostman,
  SiMongodb,
  SiMysql,
  SiTailwindcss,
  SiPhp,
};

export const TechIcon = ({ name, className = '', style = {} }) => {
  const IconComponent = iconMap[name];
  if (!IconComponent) {
    return <FaCode className={className} style={style} />;
  }
  return <IconComponent className={className} style={style} />;
};

export default TechIcon;
