<script>
const CONATCT_NO = "+91 7972303958";
</script>
<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
    <link rel="shortcut icon" href="images/favicon.png" />
    <meta name="format-detection" content="telephone=no">
    <title>Online School Management – E-School</title>
    <style>
    .fooReveal {
        visibility: hidden;
    }
    </style>
    <link href="{{ url('web/css/stylesheetec92.css?v=') }}" rel="stylesheet" type="text/css" />
    <link href="{{ url('web/css/images_localec92.css?v=') }}" rel="stylesheet" type="text/css" />

    <style>
    @font-face {
        font-family: "Flaticon";
        src: url("{{ url('web/fonts/flaticon.eot') }}");
        src: url("{{url('web/fonts/flaticon.eot#iefix')}}") format("embedded-opentype"),
        url("{{url('web/fonts/flaticon.woff')}}") format("woff"),
        url("{{url('web/fonts/flaticon.ttf')}}") format("truetype"),
        url("{{url('web/fonts/flaticon.svg')}}") format("svg");
        font-weight: normal;
        font-style: normal;
    }
    </style>
    <link href="{{ url('web/css/flaticonec92.css?v=') }}" rel="stylesheet" type="text/css" />
    <link href="{{ url('web/css/styleec92.css?v=') }}" rel="stylesheet" type="text/css" />
    <link href="{{url('web/css/owl.carousel.minec92.css?v=')}}" rel="stylesheet" type="text/css" />
    <link href="{{url('web/css/owl.theme.default.minec92.css?v=')}}" rel="stylesheet" type="text/css" />

    <script type="text/javascript" src="{{ url('web/js/jquery-1.9.1.min.js') }}"></script>
    <!--<script type="text/javascript" src="js/jquery.min.js"></script>-->
    <script type="text/javascript" src="{{ url('web/js/owl.carousel.js') }}"></script>

    <!--[if IE]>
            <script src="js/html5.js"></script>
        <![endif]-->
    <!--[if IE]><script src="//cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7/html5shiv.js"></script><![endif]-->
    <link href="{{url('web/css/screenec92.css?v=')}}" rel="stylesheet" type="text/css" />
    <script>
    (function(i, s, o, g, r, a, m) {
        i['GoogleAnalyticsObject'] = r;
        i[r] = i[r] || function() {
            (i[r].q = i[r].q || []).push(arguments)
        }, i[r].l = 1 * new Date();
        a = s.createElement(o),
            m = s.getElementsByTagName(o)[0];
        a.async = 1;
        a.src = g;
        m.parentNode.insertBefore(a, m)
    })(window, document, 'script', '../www.google-analytics.com/analytics.js', 'ga');

    ga('create', 'UA-96794520-1', 'auto');
    ga('send', 'pageview');
    </script>
</head>

<body>
    <div class="main-header">

        <header id='header' class="header">
            <div id="mainnav_bar">
                <div class='wrapper-fix logowrapper'>
                    <div class="top-header">
                        <a class="logo" href="./" title="School Management Software it's that easy as thinking">
                            <img src="{{ url('web/images/logo.png') }}" title="Onine School ERP"
                                alt="School Management Software" class='logowhite' />
                            <img src="{{ url('web/images/logo2.png') }}" title="Onine School ERP"
                                alt="School Management Software" class='logoblue' />
                        </a>
                        <nav class="top_nav">
                            <a class="toggleMenu" href="#">
                                <div id="nav-icon4">
                                    <i></i>
                                    <i></i>
                                    <i></i>
                                </div>
                            </a>
                            <ul class='nav familiar_probold'>
                                <!--      <li class="dropicon"><a href="#" title="Features" class="new-ftre">Features</a>-->
                                <!-- 		 <ul class='dropdownul'>-->
                                <!--              <li>-->
                                <!--                  <a href='#'>Fees Management</a>-->
                                <!--              </li>-->
                                <!--              <li>-->
                                <!--                  <a href='#'>Student Management</a>-->
                                <!--              </li>-->
                                <!--              <li>-->
                                <!-- 				<a href='#'>Employee Management</a>-->
                                <!-- 			 </li>-->
                                <!--              <li>-->
                                <!-- 				<a href='#'>Timetabling Management</a>-->
                                <!-- 			 </li>-->
                                <!--              <li>-->
                                <!--  				<a href='#'>Transport Management</a>-->
                                <!--  			 </li>-->
                                <!--              <li>-->
                                <!-- 				<a href='#'>Graphical Reports</a>-->
                                <!-- 			 </li>-->
                                <!--              <li>-->
                                <!-- 				<a href='#'>Inventory</a>-->
                                <!-- 			 </li>-->
                                <!--              <li>-->
                                <!-- 				<a href='#'>Library Management</a>-->
                                <!-- 			 </li>-->
                                <!--              <li>-->
                                <!-- 				<a href='#'>Reporting System</a>-->
                                <!-- 			 </li>-->
                                <!--              <li>-->
                                <!-- 				<a href='#'>Security</a>-->
                                <!-- 			 </li>-->
                                <!--              <li>-->
                                <!-- 				<a href='#'>Mobile App</a>-->
                                <!-- 			 </li>-->
                                <!--              <li>-->
                                <!-- 				<a href='#'>Cloud Reporting</a>-->
                                <!-- 			 </li>-->
                                <!--              <li>-->
                                <!-- 				<a href='#'>User Right Management</a>-->
                                <!-- 			 </li>-->
                                <!--          </ul>-->
                                <!--</li>-->
                                <li><a href="{{url('pricing')}}" title="Price">Pricing</a></li>
                                <!-- <li><a href="#" title="Clients">Clients</a></li> -->

                                <ul class='dropdownul'>
                                    <li>
                                        <a href='#'>Support</a>
                                    </li>
                                    <li>
                                        <a href='#'>FAQ</a>
                                    </li>
                                    <!--<li>-->
                                    <!--	<a href='#'>API Documentation</a>-->
                                    <!-- </li>-->
                                </ul>


                                <li><a href="{{ url('request-demo') }}" title="Request Demo">Request Demo</a></li>
                                <li><a href="http://acc.{{ env('FULL_DOMAIN') }}/get-started" target="_blank" id=""
                                        title="Log in">log in</a></li>
                                <li><a href="http://acc.{{ env('FULL_DOMAIN') }}/get-started" target="_blank"
                                        class="signupbtn">Sign up</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div id="subMenu" style="display:none;">
                        <div class="hdr_sw_itm light_font">
                            <span class="hdr_lnk_name">If you have any question? <a class="blue" href="#"
                                    onclick="show()">Send an <b>enquiry</b><span class="sprite submnu_icon1"></span></a>
                                <span style="margin:0 16px;">or</span>Call us at <strong>9871871211</strong>
                            </span>
                            <span class="hdr_lnk_name"><a class="green" href="#"
                                    onclick="return popitup('http://www.omrhome.com/phplive/phplive.php?d=0&amp;token=0aeb69e1e3536c1a62ba22b575772678&amp;onpage=hphp%3A%2F%2Fwww.omrhome.com%2F&amp;title=OMR%20Software%20for%20Scanning%20%26%20Sheet%20Reading&amp;&amp;popout=0&amp;theme=&amp;js_name=&amp;js_email=&amp;&amp;custom=')">Live
                                    Chat <b>Online</b><span class="sprite submnu_icon2"></span></a></span>
                            <span class="hdr_lnk_name">
                                <a class="orange last" href="get_a_quote.php">Get a <b>quote</b><span
                                        class="sprite submnu_icon3"></span></a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <div id="popup_main" style="display: none;" class="popup_mainshdleDemo">
            <form name="popup" method="post" action="javascript:void(0)" onsubmit="return false;">
                <div class="backgroundpopup" id="popup_back">
                    <div class="popup_cntnt">
                        <span class="close thick close_icn">
                        </span>

                        <div class="cntn_wrpr">
                            <h3>Schedule Demo</h3>
                            <p>Fill the form to get in touch with the School Management Software team.<br /> We'll show
                                you School Management Software in action!</p>
                            <div class="mktFormReq mktField">
                                <div class="admin-login">
                                    <input type="text" autocomplete="off"
                                        onfocus='$("#name").parent(".admin-login").removeClass("errorinpt");'
                                        oninput="this.value = this.value.replace(/[^0-9.^A-Z. ^a-z.^\s ^\s ]/g, ''); "
                                        id="name" class="login-form-text" name="name">
                                    <label class="placeholder">Your Name</label>
                                </div>
                            </div>
                            <div class="mktFormReq mktField">
                                <div class="admin-login">
                                    <!--<span class="request-demo-icon icon-envelope"></span>-->
                                    <input type="email" autocomplete="off"
                                        onfocus='$("#email").parent(".admin-login").removeClass("errorinpt");'
                                        id="email" class="login-form-text" name="email">
                                    <label class="placeholder">Company Email</label>
                                </div>
                            </div>
                            <div class="mktFormReq mktField">
                                <div class="admin-login">
                                    <!--<span class="request-demo-icon icon-globe"></span>-->
                                    <input type="text" autocomplete="off" class="login-form-text" id="company"
                                        onfocus='$("#company").parent(".admin-login").removeClass("errorinpt");'
                                        oninput="this.value = this.value.replace(/[^0-9.^A-Z. ^a-z.^\s ^\s ]/g, ''); "
                                        name="company">
                                    <label class="placeholder">Company Name</label>
                                </div>
                            </div>
                            <div class="mktFormReq mktField">
                                <div class="admin-login">
                                    <!--<span class="request-demo-icon icon-mobile"></span>-->
                                    <input type="text" autocomplete="off" size="24"
                                        oninput="this.value = this.value.replace(/[^0-9.^\s ^\s ]/g, ''); "
                                        maxlength="15" id="phoneno" name="phoneno"
                                        onfocus='$("#phoneno").parent(".admin-login").removeClass("errorinpt");'
                                        class="mble_input login-form-text">
                                    <label class="placeholder">Contact Number</label>
                                </div>
                            </div>
                            <div class="mktFormReq mktField">
                                <div class="admin-login">
                                    <!--<span class="request-demo-icon icon-user"></span>-->
                                    <input type="text" size="24" autocomplete="off" id="designation" name="designation"
                                        onfocus='$("#designation").parent(".admin-login").removeClass("errorinpt");'
                                        class="mble_input login-form-text">
                                    <label class="placeholder">Job Title</label>
                                </div>
                            </div>
                            <div class="mktFormReq mktField">
                                <div class="admin-login textfield tst_slct tst_slct-box ">
                                    <!--<span class="icon-test"></span>-->
                                    <select class="mble_input login-form-text" id="test" name="test">
                                        <option value="Less than 500">Less than 500</option>
                                        <option value="500-1000">500-1000</option>
                                        <option value="1000-1500">1000-1500</option>
                                        <option value="1500-2000">1500-2000</option>
                                        <option value="More than 2000">More than 2000</option>
                                    </select>
                                    <label class="placeholder">Number of test taken in a month</label>
                                </div>
                            </div>
                            <div class="mktFormReq mktField">
                                <div class="admin-login textfield tst_slct tst_slct-box ">
                                    <!--<span class="icon-test"></span>-->
                                    <select class="mble_input login-form-text" id="daysToFinalize"
                                        name="daysToFinalize">
                                        <option value="7 Days">7 Days</option>
                                        <option value="15 Days">15 Days</option>
                                        <option value="30 Days">30 Days</option>
                                        <option value="Not yet decided">Not yet decided</option>
                                    </select>
                                    <label class="placeholder">Time to Finalize</label>
                                </div>
                            </div>
                            <div class="mktFormReq mktField">
                                <div class="admin-login">
                                    <input style="width:60%" type="text" autocomplete="off" class="login-form-text"
                                        id="requestedUrl"
                                        onfocus='$("#requestedUrl").parent(".admin-login").removeClass("errorinpt");'
                                        name="requestedUrl">
                                    <label class="placeholder">Website Address</label>
                                </div>
                            </div>
                            <div class="mktFormReq mktField">
                                <div class="admin-login">
                                    <!--<span class="request-demo-icon icon-user"></span>-->
                                    <textarea type="text" size="24" autocomplete="off" id="message" name="message"
                                        onfocus='$("#message").parent(".admin-login").removeClass("errorinpt");'
                                        class="mble_input login-form-text"
                                        style="padding:0px 0px !important;height: 50px !important;line-height: 25px; margin-top: 10px; resize: none; width: 100% !important;"></textarea>
                                    <!--<input type="text" size="24" autocomplete="off"  id="message" name="message" onfocus='$("#message").parent(".admin-login").removeClass("errorinpt");'  class="mble_input login-form-text" >-->
                                    <label class="placeholder">Enter Message</label>
                                </div>
                            </div>
                            <!--                                </div>-->

                            <!--            <a title="Close" class="fancybox-item fancybox-close" id="fancybox-close" href="javascript:;" onclick="close();"></a>-->
                            <button id="send" name="send" class="popup_sbmtbtn">Submit</button>
                            <div class="clearfix"></div>
                            <button style="display: none;" id="wait" name="wait" class="popup_sbmtbtn">Wait</button>

                        </div>
                    </div>
                </div>
            </form>

        </div>

        @yield('content')

        @include("pages.footer")
        <div class="home-page-popup-wrapper">
            <div class="home-page-popup-container">
                <iframe id="video" width="100%" height="100%"
                    src="https://www.youtube.com/embed/brT1_NXFZJI?rel=0&amp;enablejsapi=1&amp;version=3&amp;playerapiid=ytplayer&amp;cc_load_policy=1&amp;controls=0&amp;fs=0&amp;rel=0&amp;showinfo=0&amp;color=white"
                    allowscriptaccess="always" frameborder="0" allowfullscreen></iframe>
                <p class="popupCancel"><span class="close thick"></span></p>
            </div>
        </div>

        <script>
        $(document).ready(function() {

            $('#closepopup').click(function() {
                $('#livedemo_popup').css('display', 'none');
            });



            style_switcher = $('.android-ios-btnWrapper');
            $('.android-ios-btnWrapper').mouseover(function() {
                style_switcher.addClass('opened');
            });
            $('.android-ios-btnWrapper').mouseout(function() {
                style_switcher.removeClass('opened');
            });

            style_switcher_mobile = $('.android-ios-mobileWrapper');
            $('.android-ios-mobileWrapper').click(function() {
                style_switcher_mobile.toggleClass('openBox');
            });

        });
        </script>