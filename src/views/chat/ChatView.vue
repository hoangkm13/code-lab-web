<template>
  <div id="wrapper" class="theme-m-content snipcss-q4ooT style-wLV5Z">
    <menu-header></menu-header>
    <div id="side-navigation">
    </div>
    <div id="verifyaccount">
    </div>
    <div id="ajax-msg-wrap">
      <div id="ajax-msg" class="style-M8pH4">
      <span class="ajax-loader">
      </span>
        <span class="ajax-msg">
      </span>
      </div>
    </div>
    <div id="breadcrumb" class="style-39M2k">
      <div class="content-header">
        <div class="container">
          <div class="clearfix">
            <ol itemscope="" itemtype="http://schema.org/BreadcrumbList" class="pull-left mdT msB pjT bcrumb">
            </ol>
            <div class="pull-right hide domain-scores">
              <div class="pull-left badge-progress">
              </div>
              <div class="pull-right pdT brcumb-points">
              <span class="zeta bold">
                Points:
              </span>
                <span class="bold domain-score">
              </span>
                <span class="domain-rank-span">
                <span class="zeta bold">
                  Rank:
                </span>
                <span class="bold msR domain-rank ">
                </span>
              </span>
              </div>
            </div>
            <div class="social-share-wrap-2 hide">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="flash">
    </div>
    <div id="followbanner">
    </div>
    <div id="submission-success-messages">
    </div>
    <div id="contestwide-broadcast">
    </div>
    <div id="content" class="main_content">
      <div class="messagethread-view">
        <div class="container">
          <div class="layout_sidebar messaging_sidebar">
            <header class="messaging_header">
              <strong>
                Conversations
              </strong>
              <a class="pull-right msT btn btn-text btn-small hr_send_new_message" data-analytics="InboxSendNewMessage">
                <i class="icon-edit cursor">
                </i>
                New
              </a>
            </header>
            <ul class="threads-list-wrap messaging_threads">
              <p class="gray">
                You have no messages
              </p>
            </ul>
          </div>
          <div class="layout_content messaging_content">
            <p class="gray">
              No Conversation Selected
            </p>
          </div>
        </div>
      </div>
    </div>
    <div id="hacker">
    </div>
  </div>

</template>
<script setup lang="ts">
import {ref} from 'vue'
import MenuHeader from "@/components/menu-header/MenuHeader.vue";
let user=localStorage.getItem('user')
async function test() {
 await console.log(JSON.parse(user).token)
}
</script>
<style scoped>
@font-face {
  font-weight:normal;
  font-style:normal;
  font-family:"OpenSans";
  src:local("Open Sans"),local("OpenSans"),url(https://hrcdn.net/hackerrank/assets/open-sans-ddaf0766d02a3d9f4a36ed235f6056b286453141fcbcdec878a9964efcb0ee05.woff2) format("woff2"),url(https://hrcdn.net/hackerrank/assets/open-sans-fe640f52967c9e03a524ce5e21369203dca41289d748d9f36d93c911cd517eaf.woff) format("woff");
}
@font-face {
  font-weight:normal;
  font-style:normal;
  font-family:"SourceCodePro";
  src:local("Source Code Pro"),local("SourceCodePro-Regular"),url(https://hrcdn.net/hackerrank/assets/source-code-pro-924bfb6e3fe3dabba02ee440b88f6a214a3b2b66e13f6f4bbd6a5d0595df1ea5.woff2) format("woff2"),url(https://hrcdn.net/hackerrank/assets/source-code-pro-17b470e98bc25c6d1fd6076a95afb3d7f05387f7a6cd27ae2845fc68ced5c294.woff) format("woff");
}
@font-face {
  font-family:'hricons';
  src:url("https://hrcdn.net/hackerrank/assets/hricons-b048929a750eb423a4bacd1643ea50c7a58556d707bf34210d1712a6a01771ef.eot");
  src:url("https://hrcdn.net/hackerrank/assets/hricons-b048929a750eb423a4bacd1643ea50c7a58556d707bf34210d1712a6a01771ef.eot?#iefix") format("embedded-opentype"),url("https://hrcdn.net/hackerrank/assets/hricons-8a768928ee5bfb69e99e96815d613a3be9601c2a71c0a0dfcc0649cfc0b48ce9.woff") format("woff"),url("https://hrcdn.net/hackerrank/assets/hricons-8db7e4bf7e1bf97202926f4ebe508600987ce2d883953bed00e3e0fdf51b7d7f.ttf") format("truetype"),url("https://hrcdn.net/hackerrank/assets/hricons-26b62ce8049f83a11d36f7518cf5e244c052143ff0e456795f31b904165637fa.svg#hricons") format("svg");
  font-weight:normal;
  font-style:normal;
}
@media all{
  body {
    border:   0;
    font:   inherit;
    font-size:   100%;
    margin:   0;
    outline:   0;
    padding:   0;
    vertical-align:   baseline;
    background:  #fff;
    height:  inherit;
    color:  #39424e;
    font-weight:  normal;
    line-height:  1.4em;
    -webkit-font-smoothing:  antialiased;
    -moz-osx-font-smoothing:  grayscale;
    font-family: "Whitney SSm A", "Whitney SSm B", "Avenir", "Segoe UI", "Ubuntu", "Helvetica Neue", Helvetica, Arial, sans-serif;
  }

  html {
    border:   0;
    font:   inherit;
    font-size:   100%;
    margin:   0;
    outline:   0;
    padding:   0;
    vertical-align:   baseline;
    height:  100%;
    overflow:  auto;
    -webkit-text-size-adjust:  100%;
    -moz-text-size-adjust:  100%;
    text-size-adjust:  100%;
    background:  #ffffff;
    width: 100%;
  }

  div {
    border: 0;
    font: inherit;
    font-size: 100%;
    margin: 0;
    outline: 0;
    padding: 0;
    vertical-align: baseline;
  }

  .theme-m-content *  {
    font-family: "OpenSans";
  }

  #followbanner {
    position: relative;
  }

  .main_content  {
    height:  100%;
    margin: auto;
  }

  .page-header-wrapper.theme-m-section {
    position: relative;
    font-family: "OpenSans";
  }

  #ajax-msg-wrap #ajax-msg  {
    color: black;
    background-color: #F5EEB9;
    border: 1px solid #E8C461;
    font-weight: bold;
    padding: 5px 15px 5px 10px;
    position: fixed;
    z-index: 9999;
    left: 50%;
    text-align: right;
    border-radius: 0 0 5px 5px;
  }

  .content-header {
    background: #fff;
    border-bottom: 1px solid #e0e4e8;
  }

  nav {
    display: block;
    border:  0;
    font:  inherit;
    font-size:  100%;
    margin:  0;
    outline:  0;
    padding:  0;
    vertical-align:  baseline;
  }

  .page-header-wrapper.theme-m-section .community-header  {
    height: 60px;
    background: #39424e;
  }

  span {
    border: 0;
    font: inherit;
    font-size: 100%;
    margin: 0;
    outline: 0;
    padding: 0;
    vertical-align: baseline;
  }

  .container {
    box-sizing:  border-box;
    margin-left:  auto;
    margin-right:  auto;
    position:  relative;
    max-width:  1240px;
    min-width:  1024px;
    padding-left:  20px;
    padding-right:  20px;

  }
}

@media screen and (min-width: 1030px){
  .container {
    position: relative;
  }
}

@media all{
  .btn-group:before,.breadcrumbs:before,.modal-footer:before,.clearfix:before,ul.horizontal:before,ol.horizontal:before,.container:before,.container--static:before,.container--flex:before,.row:before,.formgroup.horizontal:before,.page_full:before,.formgroup.inline:before,.ui-menu-item:before ,header:before ,.nav-tabs:before,.mega_select:before,.sidebar_list-item.media:before,.content--list_header:before,.content--list_footer:before,.page_header_navigation:before,.dropdown-toggle:before ,.container--inner:before,.btn-group:after,.breadcrumbs:after,.modal-footer:after,.clearfix:after,ul.horizontal:after,ol.horizontal:after,.container:after,.container--static:after,.container--flex:after,.row:after,.formgroup.horizontal:after,.page_full:after,.formgroup.inline:after,.ui-menu-item:after ,header:after ,.nav-tabs:after,.mega_select:after,.sidebar_list-item.media:after,.content--list_header:after,.content--list_footer:after,.page_header_navigation:after,.dropdown-toggle:after ,.container--inner:after {
    content: "";
    display: table;
  }

  .btn-group:after,.breadcrumbs:after,.modal-footer:after,.clearfix:after,ul.horizontal:after,ol.horizontal:after,.container:after,.container--static:after,.container--flex:after,.row:after,.formgroup.horizontal:after,.page_full:after,.formgroup.inline:after,.ui-menu-item:after ,header:after ,.nav-tabs:after,.mega_select:after,.sidebar_list-item.media:after,.content--list_header:after,.content--list_footer:after,.page_header_navigation:after,.dropdown-toggle:after ,.container--inner:after {
    clear: both;
  }

  .page-header-wrapper.theme-m-section .container  {
    display: flex;
    box-sizing: border-box;
    height: 60px;
    align-items: center;
    justify-content: space-between;
  }

  .page-header-wrapper.theme-m-section .container:after ,.page-header-wrapper.theme-m-section .container:before  {
    content: none;
  }

  .clearfix {
    clear:  both;

  }

  .layout_sidebar {
    box-sizing:   border-box;
    position:  relative;
    width: 30%;
    float: left;
  }

  .layout_content {
    box-sizing:   border-box;
    position:  relative;
    padding-left: 20px;
    float: right;
    width: 70%;
  }

  .messaging_content {
    border-left: 1px solid #C2C7D0;
    left: -1px;
  }

  .nav-buttons.theme-m-section {
    display: flex;
    align-items: center;
  }

  ol {
    border:   0;
    font:   inherit;
    font-size:   100%;
    margin:   0;
    outline:   0;
    padding:   0;
    vertical-align:   baseline;
    list-style: decimal;
  }

  .msB {
    margin-bottom: 10px;
  }

  .mdT {
    margin-top: 15px;
  }

  .pjT {
    padding-top: 30px;
  }

  .pull-left {
    float: left;
  }

  .bcrumb {
    color: #979faf;
  }

  ol.bcrumb {
    padding-top: 30px;
    list-style-type: none;
  }

  .bcrumb  {
    padding: 15px 0px !important;
    font-size: 90%;
  }

  .pull-right {
    float: right;
  }

  .hide {
    display: none;
  }

  header {
    display: block;
    border:  0;
    font:  inherit;
    font-size:  100%;
    margin:  0;
    outline:  0;
    padding:  0;
    vertical-align:  baseline;
  }

  .messaging_header {
    border-bottom: 1px solid #C2C7D0;
    border-right: 1px solid #C2C7D0;
    line-height: 60px;
    padding: 0 20px;
  }

  ul {
    border:   0;
    font:   inherit;
    font-size:   100%;
    margin:   0;
    outline:   0;
    padding:   0;
    vertical-align:   baseline;
    list-style: disc;
  }

  .messaging_threads {
    background: white;
    list-style: none;
    overflow-x: hidden;
    overflow-y: scroll;
    height: calc(100vh - 260px);
    width: 100%;
    min-height: 370px;
  }

  p {
    border:   0;
    font:   inherit;
    font-size:  1em;
    margin:  0;
    outline:   0;
    padding:   0;
    vertical-align:   baseline;
    font-family:  "Whitney SSm A", "Whitney SSm B", "Avenir", "Segoe UI", "Ubuntu", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-weight:  normal;
    line-height: 1.5em;
  }

  .gray {
    color: #555;
    font-size: 14px;
    font-style: italic;
    padding-top: 50px;
    padding-bottom: 50px;
    text-align: center;
  }

  .nav-links.theme-m-section .nav-links  {
    display: flex;
    align-items: center;
  }

  .psR {
    padding-right: 10px;
  }

  .nav-buttons.theme-m-section ul  {
    float: none;
  }

  .mmL {
    margin-left: 5px;
  }

  .nav-buttons.theme-m-section .nav-wrap  {
    display: flex;
    margin-top: 0;
    align-items: center;
  }

  .pdT {
    padding-top: 15px;
  }

  .brcumb-points {
    height: 40px;
    line-height: 40px;
  }

  strong {
    border:  0;
    font:  inherit;
    font-size:  100%;
    margin:  0;
    outline:  0;
    padding:  0;
    vertical-align:  baseline;
    font-weight: 600;
  }

  a {
    border:  0;
    font:  inherit;
    font-size:  100%;
    margin:  0;
    outline:  0;
    padding:  0;
    vertical-align:  baseline;
    color: #4691f6;
    text-decoration: none;
    font-family: "Whitney SSm A", "Whitney SSm B", "AvenirNext-Regular", "Segoe UI", "Ubuntu", "Helvetica Neue", Helvetica, Arial, sans-serif;
    transition: 0.3s color ease;
  }

  .btn {
    box-sizing: border-box;
  }

  .msT {
    margin-top: 10px;
  }

  .btn {
    font-family: "Whitney SSm A", "Whitney SSm B", "Avenir", "Segoe UI", "Ubuntu", "Helvetica Neue", Helvetica, Arial, sans-serif;
    box-sizing: border-box;
    cursor: pointer;
    display: inline-block;
  }

  .btn-small {
    padding: 5px 9px;
    font-size: 13px;
    line-height: 16px;
  }

  .btn-text {
    background: none;
    border: none;
    box-shadow: none;
    color: #979faf;
    cursor: pointer;
    font-size: inherit;
    font-weight: inherit;
    padding: 10px 0;
    text-decoration: underline !important;
  }

  a:hover {
    color: #0076b9;
  }

  .btn:active,.btn:hover:not(.disabled) {
    background: #1CB557;
    border-color: transparent;
    box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.1);
    color: #FFFFFF !important;
    transition: none;
  }

  .btn-text:hover:not(.disabled) {
    background: transparent;
    box-shadow: none;
    color: #4691f6 !important;
    text-decoration: underline !important;
  }

  li {
    border: 0;
    font: inherit;
    font-size: 100%;
    margin: 0;
    outline: 0;
    padding: 0;
    vertical-align: baseline;
  }

  .page-header-wrapper.theme-m-section li  {
    list-style: none;
  }

  .nav-links.theme-m-section .nav-link-item  {
    margin-right: 30px;
  }

  .nav-links.theme-m-section .logo-wrap  {
    margin-right: 30px;
  }

  .input-icon {
    position: relative;
  }

  .dropdown {
    position: relative;
  }

  .nav-buttons.theme-m-section .dropdown  {
    box-sizing: border-box;
    padding: 10px;
    height: 40px;
    border-radius: 5px;
  }

  .zeta {
    color: #979faf;
  }

  .bold {
    font-weight: 600;
  }

  i {
    border: 0;
    font: inherit;
    font-size: 100%;
    margin: 0;
    outline: 0;
    padding: 0;
    vertical-align: baseline;
  }

[class^="icon-"] {
  position: relative;
  top: 1px;
}

  .cursor {
    cursor: pointer;
  }

  .btn-text i  {
    top: 2px;
  }

[class^="icon-"]:before,[class*=" icon-"]:before  {
  font-family: 'hricons';
  font-style: normal;
  font-weight: normal;
  speak: none;
  display: inline-block;
  text-decoration: inherit;
  text-align: center;
  line-height: 1em;
  margin-right: 5px;
  font-size: 120%;
  position: relative;
}

  .icon-edit:before {
    content: '\e814';
  }

  .btn [class^="icon-"]:before ,[class^="icon-"]:before ,.btn-inverse.btn-inverse--alt:hover [class^="icon-"]:before ,[class*=" icon-"]:before ,.btn-inverse.btn-inverse--alt:hover [class*=" icon-"]:before ,label:before  {
    line-height: inherit;
  }

  .cursor:selection {
    background: transparent;
  }

  .nav-links.theme-m-section .logo-link  {
    display: inline-block;
  }

  .nav-links.theme-m-section .nav-link-item .logo-link  {
    margin: 0;
  }

  .nav-links.theme-m-section .nav-link  {
    position: relative;
    display: inline-block;
    box-sizing: border-box;
    height: 60px;
    color: #b7c9cc;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 14px;
    font-family: inherit;
    line-height: 60px;
  }

  .nav-links.theme-m-section .nav-link:hover  {
    color: white;
  }

  .theme-m-content.new-search {
    position: relative;
    width: 100px;
    transition: all 300ms ease;
  }

  .nav-buttons.theme-m-section a.nav_link  {
    color: #b7c9cc;
  }

  .nav-buttons.theme-m-section a.nav_link:hover  {
    color: white;
  }



  .notify_dropdown .dropdown-menu  {
    border: none;
    width: 300px;
    right: 0;
    left: auto;
    top: 40px;
    border-radius: 5px 0 5px 5px;
    font-size: 14px;
    overflow: hidden;
  }

  .theme-m-dropdown.dropdown-menu {
    position: absolute;
    top: 40px;
    right: 0;
    left: auto;
    z-index: 100;
    margin-top: 10px;
    width: 450px;
    border: 0;
    border-radius: 0 !important;
    background: white;
    font-size: 14px;
    box-shadow: 0 6px 16px 0 rgba(0,0,0,0.2);
  }

  .notify_dropdown .dropdown-menu.large  {
    width: 450px;
  }

  .dropdown-menu:not(.daterangepicker):before,.dropdown-menu:not(.daterangepicker):after {
    display: none !important;
  }

  .profile-menu-item.theme-m-content {
    position: relative;
    margin-left: 10px;
    padding: 0;
  }

  .nav-buttons.theme-m-section .dropdown.profile-menu-item  {
    padding: 0;
    height: auto;
  }

  .msR {
    margin-right: 10px;
  }

  img {
    border: 0;
    font: inherit;
    font-size: 100%;
    margin: 0;
    outline: 0;
    padding: 0;
    vertical-align: baseline;
  }

  .nav-links.theme-m-section .logo-img-small  {
    margin-bottom: 0;
    height: 20px;
    vertical-align: middle;
  }

  .new-feature-badge {
    position: absolute;
    top: 10px;
    left: calc(100% - 10px);
    display: inline-block;
    padding: 0 5px;
    border-radius: 8px;
    background: #097bbf;
    color: #fff;
    font-weight: bold;
    font-size: 10px;
    line-height: 1.5;
  }

  .search-input {
    display: inline-block;
    padding-bottom: 5px;
    padding-left: 0;
    padding-right: 0;
    padding-top: 5px;
  }

  .search-input  {
    display: inline-block;
    padding-bottom: 5px;
    padding-left: 0;
    padding-right: 0;
    padding-top: 5px;
  }

  .nav-buttons.theme-m-section .hide  {
    display: none;
  }

[class^="icon-"], [class*=" icon-"] {
  position: relative;
  top: 1px;
}

  .message-dropdown.theme-m-content .icon-theme-m-message  {
    font-size: 18px;
  }

  .icon-theme-m-message:before {
    content: '\e8a8';
  }

  .icon--single:before {
    margin-right: 0;
  }

  .hidden {
    display:  none !important;
    visibility:  hidden !important;
  }

  .theme-m-content .number-indicator  {
    position: absolute;
    top: 0;
    right: 0;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #db2644;
    text-align: center;
    font-size: 10px;
    line-height: 16px;
  }

  .text-center {
    text-align: center !important;
  }

  .psT {
    padding-top: 10px;
  }

  .psB {
    padding-bottom: 10px;
  }

  .notify_dropdown .dropdown-menu header  {
    background:  #232931;
    color:  white;
    height: 20px;
  }

  .theme-m-dropdown.dropdown-menu .menu-header  {
    background: #0e141e;
    color: white;
  }

  .notify_dropdown .dropdown-menu .dropdown-body  {
    border-left: 1px solid #C2C7D0;
    border-right: 1px solid #C2C7D0;
  }

  footer {
    display: block;
    border:  0;
    font:  inherit;
    font-size:  100%;
    margin:  0;
    outline:  0;
    padding:  0;
    vertical-align:  baseline;
  }

  .notify_dropdown .dropdown-menu footer  {
    border:  1px solid #C2C7D0;
    border-radius: 0 0 5px 5px;
  }

  .theme-m-dropdown.dropdown-menu .show-all  {
    border-top: 1px solid #b7c9cc;
    border-radius: 0;
    text-align: center;
  }

  .icon-theme-m-notification:before {
    content: '\e8a7';
  }

  .psA {
    padding: 10px;
  }

  .dropdown-menu.pull-right {
    right: 0;
    left: auto;
  }

  .profile-menu-item.theme-m-content .dropdown-menu  {
    position: absolute;
    top: 45px;
    right: 0;
    z-index: 10;
    width: 200px;
    background: white;
    box-shadow: 0 6px 16px 0 rgba(0,0,0,0.2);
  }

  input {
    font-size:  14px;
    font-weight:  normal;
    line-height:  18px;
    font-family: "Whitney SSm A", "Whitney SSm B", "AvenirNext-Regular", "Segoe UI", "Ubuntu", "Helvetica Neue", Helvetica, Arial, sans-serif;
  }

  input[type="text"] {
    border: 1px solid #C2C7D0;
    border-radius: 5px;
    box-shadow: inset 0 1px 2px rgba(151,159,175,0.1),inset 0 1px 15px rgba(151,159,175,0.05);
    box-sizing: border-box;
    color: #39424e;
    display: inline-block;
    font-size: 1em;
    line-height: 1.5em;
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    margin-bottom: 10px;
    padding: 7px 10px;
    transition: all 0.3s ease;
  }

  .theme-m-content input  {
    font-family: "SourceCodePro";
  }

  .input-icon input[type="text"]  {
    padding-left: 35px;
  }

  .theme-m-content.new-search .new-search-query  {
    box-sizing: border-box;
    margin: 0;
    padding: 7px 10px;
    padding-left: 35px;
    width: 100%;
    height: 30px;
    border: none;
    background: none;
    box-shadow: none;
    color: white;
    font-size: 14px;
  }

  .input-icon i  {
    position: absolute;
    top: 10px;
    left: 5px;
    line-height: 100%;
    height: 18px;
    width: 22px;
    font-size: 15px;
    padding: 0 3px 0 5px;
    bottom: 10px;
    margin: auto;
    margin-top: 0;
    text-align: center;
  }

  .search_form i  {
    top: 21px;
    left: 8px;
    color: #fff;
  }

  .main-hr-search i  {
    top: 24px;
    left: 4px;
  }

  .theme-m-content.new-search .icon-search  {
    position:  absolute;
    top:  50%;
    left:  5px;
    z-index:  1;
    padding:  0;
    width:  20px;
    height:  20px;
    transform:  translateY(-50%);
    color: #738f93;
    font-size: 18px;
  }

  .icon-search:before {
    content: '\e028';
  }

  ul.unstyled {
    list-style: none;
  }

  .notify_dropdown .dropdown-menu ul  {
    position:  relative;
    max-height:  none;
    overflow:  auto;
  }

  .dropdown-menu a  {
    display: block;
    padding: 8px 15px;
    clear: both;
    line-height: 18px;
    color: #333333;
    white-space: nowrap;
    cursor: pointer;
    font-size: 14px;
    transition: none;
  }

  .notify_dropdown .dropdown-menu footer a  {
    color: #4691f6;
    border: none;
    border-radius: 0 0 5px 5px;
  }

  .theme-m-dropdown.dropdown-menu .show-all-link  {
    display: block;
    padding: 10px;
    border: 0;
    background: none;
    color: #576871;
  }

  .theme-m-dropdown.dropdown-menu .show-all-link:hover  {
    color: #576871 !important;
    text-decoration: underline !important;
    font-weight: 600;
  }

  .notify_dropdown .dropdown-menu header a  {
    color: inherit;
    font-size: 12px;
    padding: 4px 0 0 0;
    opacity: .6;
  }

  .notify_dropdown .dropdown-menu .archive  {
    padding: 0;
    color: white;
    font-weight: normal;
    font-size: 14px;
    opacity: 1;
  }

  .notify_dropdown .dropdown-menu header a:hover  {
    opacity: 1;
  }

  .notify_dropdown .dropdown-menu .archive:hover  {
    text-decoration: underline;
  }

  .notify_dropdown .dropdown-menu .hr_nav_notifications_list  {
    overflow: auto;
    max-height: 360px;
  }

  .avatar {
    border-radius: 5px;
  }

  .nav-buttons.theme-m-section .avatar  {
    margin-right: 5px;
    width: 30px;
    height: 30px;
    vertical-align: middle;
  }

  .mmR {
    margin-right: 5px;
  }

  .profile-menu-item.theme-m-content .profile-username  {
    font-weight: bold;
    font-size: 14px;
  }

  .icon-down-open:before {
    content: '\e75c';
  }

  .notify_dropdown .dropdown-menu .icon-folder-open  {
    display: none;
  }

  .icon-folder-open:before {
    content: '\e84f';
  }

  .profile-menu-item.theme-m-content .profile-nav-item  {
    margin: 0 20px;
    border-bottom: 1px solid #e7eeef;
    line-height: 40px;
  }

  .profile-menu-item.theme-m-content .dropdown-menu li  {
    list-style: none;
  }

  .profile-menu-item.theme-m-content .hackos-count  {
    box-sizing: border-box;
    margin-top: 20px;
    background: #4691f6;
    color: white;
    text-align: center;
  }

  .profile-menu-item.theme-m-content .dropdown-menu a  {
    display: block;
    padding: 0 10px;
    color: #0e141e;
    font-weight: normal;
    font-size: 16px;
    line-height: inherit;
    cursor: pointer;
  }

  .profile-menu-item.theme-m-content .dropdown-menu a.hackos-count  {
    color: white;
  }

  .dropdown-menu li > a:hover  {
    text-decoration: none;
    background: #ebf3fe;
  }

  .profile-menu-item.theme-m-content .dropdown-menu a:hover  {
    background-color: white;
    font-weight: 600;
  }

  .profile-menu-item.theme-m-content .dropdown-menu a.hackos-count:hover  {
    background: #4691f6;
  }

  .profile-menu-item.theme-m-content .theme-progress-bar  {
    overflow: hidden;
    margin-bottom: 10px;
    height: 10px;
    border-radius: 5px;
    background: #e7eeef;
  }

  .profile-menu-item.theme-m-content .progress-filler  {
    height: 100%;
    background: #1ba94c;
  }
}


/* These were inline style tags. Uses id+class to override almost everything */
#wrapper.style-wLV5Z {
  min-height: 640px;
}
#style-HHhZ5.style-HHhZ5 {
  display: block;
}
#style-GixQ3.style-GixQ3 {
  width: 30%;
}
#ajax-msg.style-M8pH4 {
  margin-left: -0.2px;
  display: none;
}
#breadcrumb.style-39M2k {
  display: none;
}

</style>
