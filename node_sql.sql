/*
SQLyog Community v13.1.6 (64 bit)
MySQL - 8.0.20 : Database - blog
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`blog` /*!40100 DEFAULT CHARACTER SET utf8 */ /*!80016 DEFAULT ENCRYPTION='N' */;

USE `blog`;

/*Table structure for table `post` */

DROP TABLE IF EXISTS `post`;

CREATE TABLE `post` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT '文章id',
  `title` varchar(32) NOT NULL COMMENT '文章标题',
  `firstDate` datetime NOT NULL COMMENT '创建时间',
  `lastDate` datetime NOT NULL COMMENT '修改时间',
  `classify` varchar(99) NOT NULL COMMENT '文章分类',
  `label` varchar(99) NOT NULL COMMENT '文章标签',
  `word_count` int NOT NULL COMMENT '总字数',
  `duration` int NOT NULL COMMENT '阅读时长',
  `path` varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '文章地址',
  `digest` varchar(500) NOT NULL COMMENT '摘要',
  `cover` varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '封面 图片地址',
  `main_part` mediumtext NOT NULL COMMENT '正文',
  `is_open` tinyint(1) NOT NULL DEFAULT '1' COMMENT '公开 发布',
  `choiceness` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

/*Data for the table `post` */

-- insert  into `post`(`id`,`title`,`firstDate`,`lastDate`,`classify`,`label`,`word_count`,`duration`,`path`,`digest`,`cover`,`main_part`,`is_open`,`choiceness`) values 
-- (1,'测试文章2','2020-09-22 00:00:00','2020-09-22 00:00:00','Test,Demo','Test,Demo',400,2,'/post/test','我们在使用后台传过来的数据的时候，有时候我们会得到树状结构的数据，虽然有时候，后端会处理掉，但，毕竟我们也可以在前端给它处理一下，一方面也锻炼一下脑子，天天写页面都没思考能力了。',NULL,'我们在使用后台传过来的数据的时候，有时候我们会得到树状结构的数据，虽然有时候，后端会处理掉，但，毕竟我们也可以在前端给它处理一下，一方面也锻炼一下脑子，天天写页面都没思考能力了。',1,0),
-- (2,'测试文章3','2020-09-22 00:00:00','2020-09-22 00:00:00','Test,Demo','Test,Demo',400,2,'/post/test','我们在使用后台传过来的数据的时候，有时候我们会得到树状结构的数据，虽然有时候，后端会处理掉，但，毕竟我们也可以在前端给它处理一下，一方面也锻炼一下脑子，天天写页面都没思考能力了。',NULL,'我们在使用后台传过来的数据的时候，有时候我们会得到树状结构的数据，虽然有时候，后端会处理掉，但，毕竟我们也可以在前端给它处理一下，一方面也锻炼一下脑子，天天写页面都没思考能力了。',1,0),
-- (3,'测试文章4','2020-09-22 00:00:00','2020-09-22 00:00:00','Test,Demo','Test,demo',400,2,'/post/test','我们在使用后台传过来的数据的时候，有时候我们会得到树状结构的数据，虽然有时候，后端会处理掉，但，毕竟我们也可以在前端给它处理一下，一方面也锻炼一下脑子，天天写页面都没思考能力了。',NULL,'我们在使用后台传过来的数据的时候，有时候我们会得到树状结构的数据，虽然有时候，后端会处理掉，但，毕竟我们也可以在前端给它处理一下，一方面也锻炼一下脑子，天天写页面都没思考能力了。',1,0),
-- (4,'测试数据库','2020-10-10 16:42:09','2020-10-10 16:42:09','testdb','testdb',256,1,'/post/%E6%B5%8B%E8%AF%95%E6%95%B0%E6%8D%AE%E5%BA%93','testd...',NULL,'testdbtestdbtestdbtestdbtestdbtestdbtestdb\n\n\n\ntestdbtestdbtestdbtestdbtestdbtestdbtest\n\ndbtestdbtestdbtestdbtestdbtestdbtestdbtestdbtest\ndbtestdbtestdbtestdbtestdbtestdbtestdbtestdbtestdb\ntestdbtestdbtestdbtestdbtestdbtestdbtestdbtestdbtestdb\ntestdb\n\n测试数据库',1,0);

/*Table structure for table `site` */

DROP TABLE IF EXISTS `site`;

CREATE TABLE `site` (
  `author` varchar(15) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '' COMMENT '博客作者',
  `domain_name` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '' COMMENT '域名',
  `license` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '' COMMENT '许可证',
  `license_url` varchar(999) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '' COMMENT '链接',
  `head_back_color` char(7) NOT NULL DEFAULT '#fafafa' COMMENT '头部背景颜色',
  `head_active_back_color` char(7) NOT NULL DEFAULT '#fafafa' COMMENT '激活的背景颜色',
  `head_back_img_isShow` tinyint(1) NOT NULL DEFAULT '1' COMMENT '背景图片是否显示',
  `head_back_img` char(50) NOT NULL COMMENT '背景图片地址',
  `head_color` char(7) NOT NULL DEFAULT '#555' COMMENT '字体颜色',
  `head_active_color` char(7) NOT NULL DEFAULT '#555' COMMENT '激活的字体颜色',
  `sidebar_back_color` char(7) NOT NULL DEFAULT '#ffffff' COMMENT '侧边栏背景颜色',
  `sidebar_active_back_color` char(7) NOT NULL DEFAULT '' COMMENT '激活的背景颜色',
  `sidebar_main_color` char(7) NOT NULL DEFAULT '#303133',
  `sidebar_active_main_color` char(7) NOT NULL DEFAULT '#409EFF',
  `sidebar_minor_color` char(7) NOT NULL DEFAULT '',
  `sidebar_active_minor_color` char(7) NOT NULL DEFAULT '',
  `L2Dwidget_isRender` tinyint(1) NOT NULL DEFAULT '0' COMMENT '看板娘是否显示',
  `L2Dwidget_modelName` char(20) NOT NULL DEFAULT 'koharu' COMMENT '模型名称',
  `L2Dwidget_tagMode` tinyint(1) NOT NULL DEFAULT '0' COMMENT '标签模式',
  `L2Dwidget_debug` tinyint(1) NOT NULL DEFAULT '0' COMMENT '调试',
  `L2Dwidget_model_scale` double NOT NULL DEFAULT '1' COMMENT '缩放',
  `L2Dwidget_display_superSample` double NOT NULL DEFAULT '2' COMMENT '超采样等级',
  `L2Dwidget_display_position` char(5) NOT NULL DEFAULT 'right',
  `L2Dwidget_display_vWidth` int NOT NULL DEFAULT '200',
  `L2Dwidget_display_vHeight` int NOT NULL DEFAULT '300',
  `L2Dwidget_display_hOffset` int NOT NULL DEFAULT '-20',
  `L2Dwidget_display_vOffset` int NOT NULL DEFAULT '-40',
  `L2Dwidget_react_opacityDefault` double NOT NULL DEFAULT '1' COMMENT '默认透明度',
  `L2Dwidget_react_opacityOnHover` double NOT NULL DEFAULT '0.5' COMMENT '鼠标移上透明度',
  `L2Dwidget_dev_border` tinyint(1) NOT NULL DEFAULT '0' COMMENT '在canvas周围显示边界',
  `L2Dwidget_mobile_show` tinyint(1) NOT NULL DEFAULT '1' COMMENT '是否在移动设备上显示',
  `L2Dwidget_mobile_scale` double NOT NULL DEFAULT '0.5' COMMENT '移动设备上的缩放',
  `L2Dwidget_mobile_motion` tinyint(1) NOT NULL DEFAULT '1' COMMENT '开启重力感应',
  `L2Dwidget_log` tinyint(1) NOT NULL DEFAULT '1',
  `L2Dwidget_dialog_enable` tinyint(1) NOT NULL DEFAULT '0',
  `L2Dwidget_dialog_hitokoto` tinyint(1) NOT NULL DEFAULT '0',
  `site_back_color` char(7) NOT NULL DEFAULT '#eeeeee',
  `site_isShow` tinyint(1) NOT NULL DEFAULT '0',
  `site_back_img` char(100) NOT NULL DEFAULT '',
  `canvas_nest_isShow` tinyint(1) DEFAULT '0',
  `canvas_nest_color` char(11) DEFAULT '0,0,255',
  `canvas_nest_opacity` double DEFAULT '0.7',
  `canvas_nest_zIndex` int NOT NULL DEFAULT '-2',
  `canvas_nest_count` int NOT NULL DEFAULT '99'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `site` */

insert  into `site`(`author`,`domain_name`,`license`,`license_url`,`head_back_color`,`head_active_back_color`,`head_back_img_isShow`,`head_back_img`,`head_color`,`head_active_color`,`sidebar_back_color`,`sidebar_active_back_color`,`sidebar_main_color`,`sidebar_active_main_color`,`sidebar_minor_color`,`sidebar_active_minor_color`,`L2Dwidget_isRender`,`L2Dwidget_modelName`,`L2Dwidget_tagMode`,`L2Dwidget_debug`,`L2Dwidget_model_scale`,`L2Dwidget_display_superSample`,`L2Dwidget_display_position`,`L2Dwidget_display_vWidth`,`L2Dwidget_display_vHeight`,`L2Dwidget_display_hOffset`,`L2Dwidget_display_vOffset`,`L2Dwidget_react_opacityDefault`,`L2Dwidget_react_opacityOnHover`,`L2Dwidget_dev_border`,`L2Dwidget_mobile_show`,`L2Dwidget_mobile_scale`,`L2Dwidget_mobile_motion`,`L2Dwidget_log`,`L2Dwidget_dialog_enable`,`L2Dwidget_dialog_hitokoto`,`site_back_color`,`site_isShow`,`site_back_img`,`canvas_nest_isShow`,`canvas_nest_color`,`canvas_nest_opacity`,`canvas_nest_zIndex`,`canvas_nest_count`) values 
('天火流光','http://localhost:3000/#',' CC BY-NC-SA 3.0','https://creativecommons.org/licenses/by-nc-sa/3.0/','#fafafa','#fafafa',1,'','#555','#555','#ffffff','','#303133','#409EFF','','',0,'koharu',0,0,1,2,'right',200,300,-20,-40,1,0.5,0,1,0.5,1,1,0,0,'#eeeeee',0,'',0,'0,0,255',0.7,-2,99);

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
