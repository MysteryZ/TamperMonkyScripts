// ==UserScript==
// @name                CSDN优雅美化脚本,去广告，保留了导航栏
// @description         还你一个经典版的CSDN：作者信息和顶部导航栏保留，去掉右边评论区；内容自动展开；去广告；屏宽自动适配；净化剪贴板。

// @namespace    https://github.com/MysteryZ/TamperMonkyScripts
// @version      0.1
// @author       0x153
// @match        http*://blog.csdn.net/*/article/details/*
// @match        http*://*.blog.csdn.net/*/article/details/*
// @match        http*://csdnnews.blog.csdn.net/article/details/*
// @run-at       document-end
// @grant        none
// @license      CC-BY-NC-3.0
// @supportURL   https://github.com/MysteryZ/TamperMonkyScripts/issues
// @date         09/16/2021
// ==/UserScript==

(function () {
    'use strict';
    //未登录复制代码限制
    $('code').css({'user-select':'unset'})
    $('#content_views pre').css({'user-select':'unset'})
    //阅读全文
    $('.hide-article-box').remove();
    $('#article_content').css({
        'height': 'initial'
    });
    //vip免广告 按钮
    // $('.meau-gotop-box').remove();
    //未登录提示
    // $('.unlogin-box').remove();
    //去除剪切板劫持
    csdn.copyright.init("", "", "");
    //移除左侧最新评论
    // $('#asideNewComments').remove();
    //移除左侧CSDN联系方式
    // $('.persion_article').remove();
    //移除右侧工具栏
    // $('.tool-box').remove()
    //下部推荐
    // $('.recommend-box').remove();
    //两栏处理，删除了全部左侧栏，这里想保存 导航栏
    // $('#sId li:not(.horizontal)');
    $('.blog_container_aside > div:not(#asidedirectory)').remove();
    // $('.nodata .container').css({'width':'1318px !important'})
    // $('.nodata .tool-box .meau-list .btn-like-box p').css({'display': 'block'})
    // $('.recommend-right').css({'display':'none'})
    // $('.container').css({'width':'1318px'})
    // $('.container main').css({'width': '1010px'})
    // $('.container main .recommend-box .type_blog .content .desc').css({'width': '81%'})
    // $('.container main .recommend-box .type_blog .content .blog_title_box').css({'width': '18%'})
    // $("#mainBox > main").css("float","left");  //感谢 ID:potoo 的反馈
    // $("aside").css("float","right");
    // $("aside").css("padding-left","10px");
    // $('body').css({'min-width':'0'});
    // $('.csdn-toolbar').css({'min-width':'0'});
    //去广告
    // $('.pulllog-box').remove();
    // $('.fourth_column').remove();
    // $('.mb8').remove();
    // $('newsfeed').remove();
    // $('#asideFooter').remove();
    $("li:contains('VIP会员')").remove();
    // $('.light-box').remove();
    // $("a[data-type='vip']").remove();
    // $(".csdn-side-toolbar").remove();
    // $(".vip-caise").remove();
    $('.csdn-tracking-statistics').remove();
    $('#addAdBox').remove();
    $('#recommendAdBox').remove();

    // //显示评论区
    // $('.comment-list-box').css({'display':'block'});
    // $('.comment-list-box').css({'max-height':'870px'});

    //去掉右侧的抽盲盒广告
    $(".csdn-side-toolbar ").remove();
    //$(".csdn-common-logo-advert ").remove();
    $('frame').remove();
})();