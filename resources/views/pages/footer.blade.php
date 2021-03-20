<div class="footer-bottom main-ft">
    <div class="wrapper-fix outer-footer">
        <div class="main-footer-update">
            <div class="logo-data-new">
                <img src="{{url('web/images/logo.png')}}" title="Onine School ERP" alt="School Management Software"
                    class="logowhite">
            </div>
            <div class="outer-part">
                <div class="left-part-about">
                    <ul>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">advisors</a></li>
                        <li><a href="#">What's New</a></li>
                        <li><a href="#">clients</a></li>
                        <li><a href="#">Testimonials</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </div>
                <!--<div class="right-part-ft">-->
                <!--    <div class="outer-ul-part-main">-->
                <!--        <div class="lft-pro-ul-data">-->
                <!--        <ul>-->
                <!--            <li>Key Features</li>-->
                <!--            <li>-->
                <!--                <a href='#'>Fees Management</a>-->
                <!--            </li>-->
                <!--            <li>-->
                <!--                <a href='#'>Student Management</a>-->
                <!--            </li>-->
                <!--            <li>-->
                <!--   				<a href='#'>Employee Management</a>-->
                <!--   			 </li>-->
                <!--                <li>-->
                <!--                <a href='#'>Timetabling Management</a>-->
                <!--             </li>-->
                <!--                <li>-->
                <!--                    <a href='#'>Transport Management</a>-->
                <!--                 </li>-->
                <!--                <li>-->
                <!--                <a href='#'>Graphical Reports</a>-->
                <!--             </li>-->
                <!--                <li>-->
                <!--                <a href='#'>Inventory</a>-->
                <!--             </li>-->
                <!--        </ul>-->
                <!--        </div>-->
                <!--<div class="lft-pro-ul-data">-->
                <!--<ul>-->
                <!--    <li>&nbsp;</li>-->
                <!--       <li>-->
                <!--       <a href='#'>Library Management</a>-->
                <!--    </li>-->
                <!--       <li>-->
                <!--       <a href='#'>Reporting System</a>-->
                <!--    </li>-->
                <!--    <li>-->
                <!--       <a href='#'>Security</a>-->
                <!--    </li>-->
                <!--       <li>-->
                <!--       <a href='#'>Mobile App</a>-->
                <!--    </li>-->
                <!--       <li>-->
                <!--       <a href='#'>Cloud Reporting</a>-->
                <!--    </li>-->
                <!--       <li>-->
                <!--       <a href='#'>User Right Management</a>-->
                <!--    </li>-->
                <!--</ul>-->
                <!--</div>-->
                <div class="lft-pro-ul-data">
                    <ul>
                        <li class="">Business </li>
                        <li><a href="#">Communication</a></li>
                        <li><a href="#">Performance Management</a></li>
                        <li><a href="#">Recruitment</a></li>
                        <li><a href="#">Talent Management</a></li>
                        <li><a href="#">Partner</a></li>
                    </ul>
                </div>
                <div class="lft-pro-ul-data">
                    <ul>
                        <li>Industry</li>
                        <li><a href="#">Education</a></li>
                        <li><a href="#">Corporate </a></li>
                        <li><a href="#">Government</a></li>
                    </ul>
                </div>
                <div class="lft-pro-ul-data right-footer-links">
                    <ul>
                        <li>Resources</li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Help & Support</a></li>
                        <li>Follow Us
                            <div class="social-icon">
                                <a href="#" target="_blank"><img src="{{url('web/images/fb.png')}}">
                                    <!--<span class="fbicn"></span>-->
                                </a>
                                <a href="#" target="_blank"><img src="{{url('web/images/link.png')}}">
                                    <!--<span class="linkedIn"></span>-->
                                </a>
                                <a href="#" target="_blank"><img src="{{url('web/images/twt.png')}}">
                                    <!--<span class="twticn"></span>-->
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="clear-shadow"></div>
    </div>
</div>
</div>
<a href="tel: +91 7972303958" class="footer-contact-button footer-contact-popup animated"><span>+91
        7972303958</span></a>
</div>
<div class="bottom-ft-main">
    <div class="wrapper-fix">
        <div class="related-website">
            <ul>
                <li><a href="#" target="_blank">Terms of use</a></li>
                <li><a href="#" target="_blank">Privacy Policy</a></li>
            </ul>
        </div>
        <div class="ftrcntnt" style="margin: 0;"> © 2020 Suncity Techno, All rights reserved | <a class="footer-link"
                href="./" target="_blank">Powered by School Management Software.com</a></div>
    </div>
</div>
<div class="scroll-to-top" title="Go to top"></div>
<script>
$("#monthly").click(function() {
    $("#quarterly_div").hide();
    $("#yearly_div").hide();
    $(".quarterly_div1").hide();
    $(".yearly_div1").hide();
    $("#monthly_div").show();
    $(".monthly_div1").show();
    $("#yearly").removeClass("activetab");
    $("#quarterly").removeClass("activetab");
    $(this).addClass("activetab");
});
$("#yearly").click(function() {
    $("#quarterly_div").hide();
    $("#monthly_div").hide();
    $(".quarterly_div1").hide();
    $(".monthly_div1").hide();
    $("#yearly_div").show();
    $(".yearly_div1").show();
    $("#monthly").removeClass("activetab");
    $("#quarterly").removeClass("activetab");
    $(this).addClass("activetab");
});
$("#quarterly").click(function() {
    $("#monthly_div").hide();
    $("#yearly_div").hide();
    $(".monthly_div1").hide();
    $(".yearly_div1").hide();
    $("#quarterly_div").show();
    $(".quarterly_div1").show();
    $("#monthly").removeClass("activetab");
    $("#yearly").removeClass("activetab");
    $(this).addClass("activetab");
});
$(document).ready(function() {
    $("#flip").click(function() {
        $('.mobile-feature-list-btn h1 span').toggleClass('arrow-down')
        $("#panel").slideToggle("slow");
    });
});
</script>
<script type="text/javascript">
//default
function showPopup() {
    $("#popup").show();
}
$(document).ready(function() {
    $("#test").parent('.admin-login').addClass('is-active');
    $("#daysToFinalize").parent('.admin-login').addClass('is-active');
    //close popup
    $("#close").click(function() {
        $("#popup").hide();
    });
});
</script>
<script src="{{url('web/js/menu_script.js')}}"></script>
<!--jQuery Scroll-->
<script>
jQuery(document).ready(function() {
    var offset = 200;
    var duration = 500;
    jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() > offset) {
            jQuery('.scroll-to-top').fadeIn(duration);
        } else {
            jQuery('.scroll-to-top').fadeOut(duration);
        }
    });
    jQuery('.scroll-to-top').click(function(event) {
        event.preventDefault();
        jQuery('html, body').animate({
            scrollTop: 0
        }, duration);
        return false;
    })
});
//Js for accordian start
$(document).ready(function() {
    $("#accordion section h1").click(function(e) {
        $(this).parents().siblings("section").addClass("ac_hidden");
        $(this).parents("section").removeClass("ac_hidden");
        e.preventDefault();
    });
    //Js for accordian end
});
</script>
<!--<script src="js/jquery.js" type="text/javascript" charset="utf-8"></script>-->
<script src="{{url('web/js/jquery.accordion.source.js')}}" type="text/javascript" charset="utf-8"></script>
<script type="text/javascript">
// <![CDATA[
$(document).ready(function() {
    $('ul.accordion').accordion();
    $('ul.faq_accordion').accordion();
    $('#openWashington').click(function() {
        $('a[href=#antarctica]').trigger('activate-node');
    });
    $('.footer-contact-popup').click(function() {
        $('.contact-panel').fadeIn("fast");
        $('.footer-contact-popup').fadeOut("fast");
    });
    $('#close-btn').click(function() {
        $('.contact-panel').fadeOut("fast");
        $('.footer-contact-popup').fadeIn();
    });
    $('.video-link').click(function() {
        $('.home-page-popup-wrapper').addClass('popupActive');
        $("#video")[0].src += "&autoplay=1";
        ev.preventDefault();
    });
    $('.popupCancel').click(function() {
        $('#video')[0].contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}',
            '*');
        $('.home-page-popup-wrapper').removeClass('popupActive');
    });
});
// ]]>
</script>
<!--enquiry form start-->
<!--enquiry form start-->
<script type="text/javascript">
function popitup(url) {
    newwindow = window.open(url, 'name', 'height=400,width=400');
    if (window.focus) {
        newwindow.focus()
    }
    return false;
}
$(document).ready(function() {
    $(".login-form-text").focus(function() {
        $(this).parent().addClass("is-active");
    });
    $(".login-form-text").focusout(function() {
        if ($(this).val() === "")
            $(this).parent().removeClass("is-active");
    })
    $(window).scroll(function() {
        var headheight = $('.container').height();
        console.log(headheight);
        if ($(window).scrollTop() > headheight) {
            $('#mainnav_bar').addClass('mainnavbar-fixed');
            //      $('.inrnavbar').addClass('inrnavbar-fixed');
            //                alert(headertop);
        }
        if ($(window).scrollTop() < headheight) {
            $('#mainnav_bar').removeClass('mainnavbar-fixed');
            //      $('.inrnavbar').removeClass('inrnavbar-fixed');
        }
    });
    $('#nav-icon4').click(function() {
        $(this).toggleClass('open');
    });
    $('.close_icn').click(function() {
        $("#popup_main").css("display", "none");
    })
    var urlPattern =
        /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9]\.[^\s]{2,})/;
    $("#send").click(function() {
        // var messagetrim= $.trim($("#message").val());
        if ($.trim($("#name").val()) == '') {
            $("#name").parent('.admin-login').addClass("errorinpt");
            return false;
        } else if ($.trim($("#email").val()) == '') {
            $("#email").parent('.admin-login').addClass("errorinpt");
            return false;
        } else if ($.trim($("#email").val()) != "" && (($("#email").val().indexOf("@")) < 1 || ($(
                "#email").val().indexOf(".")) < 1 || ($.trim($("#email").val()).indexOf(" ")) > -1)) {
            $("#email").parent('.admin-login').addClass("errorinpt");
            return false;
        } else if ($.trim($("#company").val()) == '') {
            $("#company").parent('.admin-login').addClass("errorinpt");
            return false;
        } else if ($.trim($("#phoneno").val()) == '') {
            $("#phoneno").parent('.admin-login').addClass("errorinpt");
            return false;
        } else if ($.trim($("#phoneno").val()).length < '10' || $.trim($("#phoneno").val()).length >
            '15') {
            $("#phoneno").parent('.admin-login').addClass("errorinpt");
            return false;
        } else if ($.trim($("#designation").val()) == '') {
            $("#designation").parent('.admin-login').addClass("errorinpt");
            return false;
        } else if ($.trim($("#test").val()) == '' || $.trim($("#test").val()) == '0') {
            $("#test").parent('.admin-login').addClass("errorinpt");
            //                alert("Please Select Test In a Month");
            //                $("#test").parent('.admin-login').addClass("errorinpt");
            return false;
        } else if ($.trim($("#daysToFinalize").val()) == '' || $.trim($("#daysToFinalize").val()) ==
            '0') {
            //                alert("Please Select Days To Finalize");
            $("#daysToFinalize").parent('.admin-login').addClass("errorinpt");
            return false;
        } else if ($.trim($("#requestedUrl").val()) == "" || !urlPattern.test($("#requestedUrl").val()
                .toLowerCase())) {
            $("#requestedUrl").parent('.admin-login').addClass("errorinpt");
            return false;
        } else if ($.trim($("#message").val()) == '') {
            $("#message").parent('.admin-login').addClass("errorinpt");
            return false;
        }
        //        else if($.trim($("#test").val()) =='0'){
        //            alert("Please select test.");
        //            $("#test").focus();
        //            return false;
        //        }
        else {
            //alert("sudhir");
            //  return false;
            var email = $("#email").val();
            var name = $("#name").val();
            // var employescount= $("#employescount").val();
            var test = $("#test").val();
            var phoneno = $("#phoneno").val();
            var company = $("#company").val();
            var designation = $("#designation").val();
            var test = $("#test").val();
            var daysToFinalize = $("#daysToFinalize").val();
            var message = $("#message12").val();
            var requestedUrl = $("#requestedUrl").val();
            var zc_gad = $("#zc_gad").val();
            var gclid = localStorage.getItem('gclid');
            if (gclid != '') {
                var leadType = 'Paid';
            } else {
                var leadType = 'Organic';
            }
            $("#wait").show();
            $("#send").hide();
            var urldata = "email=" + email + "&name=" + name + "&test=" + test + "&phoneno=" +
                phoneno + "&company=" + company + "&mode=" + 'reqDemo' + "&designation=" +
                designation + "&test=" + test + "&daysToFinalize=" + daysToFinalize + "&message=" +
                message + "&requestedUrl=" + requestedUrl.toLowerCase() + "&zc_gad=" + zc_gad +
                "&leadType=" + leadType;
            $.ajax({
                type: "post",
                url: "ajax",
                data: urldata,
                async: false,
                error: function(data) {
                    // alert(data);
                    console.log(data);
                    //               alert("Internet connection problem.");
                },
                success: function(data) {
                    //alert(data);
                    //                 if($.trim(data) == '1'){
                    $("#send").show();
                    $("#wait").hide();
                    //                  alert("Message has been sent successfuly. ");
                    $("#popup_main").hide();
                    //                        location.reload();
                    //                 }
                    //location.reload();
                }
            });
            //        window.open("demo-request-thankyou");
            $("#popup_main").hide();
            location.href = "demo-request-thankyou.html";
        }
    });
    // for contact us
    $("#sends").click(function() {
        var isProceed = 1;
        // var messagetrim= $.trim($("#message").val());
        if ($.trim($("#names").val()) == '') {
            //            alert("Please enter the name.");
            //           $("#names").focus();
            $("#names").css('border', '1px solid #FF0000');
            $("#names").attr('placeholder', 'Please enter your name.');
            isProceed = 0;
            return false;
        } else if ($.trim($("#emails").val()) == '') {
            //            alert("Please enter the email.");
            $("#emails").css('border', '1px solid #FF0000');
            $("#emails").attr('placeholder', 'Please enter your email.');
            isProceed = 0;
            //            $("#emails").focus();
            return false;
        } else if ($.trim($("#emails").val()) != "" && (($("#emails").val().indexOf("@")) < 1 || ($(
                    "#emails").val().indexOf(".")) < 1 || ($.trim($("#emails").val()).indexOf(" ")) > -
                1)) {
            //            alert("Please enter the correct format of email.");
            $("#emails").css('border', '1px solid #FF0000');
            $("#emails").attr('placeholder', 'Please enter valid email.');
            $("#emails").val('');
            isProceed = 0;
            return false;
        } else if ($.trim($("#phonenos").val()) == '') {
            //            alert("Please enter the phone number.");
            $("#phonenos").css('border', '1px solid #FF0000');
            $("#phonenos").attr('placeholder', 'Please enter your Phone Number.');
            //            $("#phonenos").focus();
            isProceed = 0;
            return false;
        } else if ($.trim($("#phonenos").val()).length != '10') {
            //         alert("Please enter the 10 digit phone number.");
            $("#phonenos").css('border', '1px solid #FF0000');
            $("#phonenos").attr('placeholder', 'Please enter valid 10 digit Phone Number.');
            $("#phonenos").val('');
            isProceed = 0;
            return false;
        } else if ($.trim($("#companys").val()) == '') {
            //            alert("Please enter the company name.");
            $("#companys").css('border', '1px solid #FF0000');
            $("#companys").attr('placeholder', 'Please enter the company name.');
            //            $("#companys").focus();
            isProceed = 0;
            //alert(isProceed);
            return false;
        } else if ($.trim($("#message12").val()) == '') {
            //            alert("Please enter the message.");
            $("#message12").css('border', '1px solid #FF0000');
            $("#message12").attr('placeholder', 'Please enter your message.');
            $("#message12").focus();
            isProceed = 0;
            return false;
        } else {
            //
        }
        if (isProceed == 1) {
            var email = $("#emails").val();
            var name = $("#names").val();
            // var employescount= $("#employescount").val();
            var message = $("#message12").val();
            var phoneno = $("#phonenos").val();
            var company = $("#companys").val();
            var zc_gad = $("#zc_gad").val();
            var gclid = localStorage.getItem('gclid');
            if (gclid != '') {
                var leadType = 'Paid';
            } else {
                var leadType = 'Organic';
            }
            $("#waits").show();
            $("#sends").hide();
            var urldata = "email=" + email + "&name=" + name + "&message=" + message + "&phoneno=" +
                phoneno + "&company=" + company + "&mode=" + 'contact' + "&zc_gad=" + zc_gad +
                "&leadType" + leadType;
            $.ajax({
                type: "post",
                url: "ajax",
                data: urldata,
                async: false,
                error: function(data) {
                    //               alert("Internet connection problem.");
                },
                success: function(data) {
                    //                 if($.trim(data) == '1'){
                    $("#sends").show();
                    $("#waits").hide();
                    //                  alert("Message has been sent successfuly. ");
                    location.href = "contact-us-thankyou.html";
                    //                        location.reload();
                    //                 }
                }
            });
            //         location.href = "contact-us-thankyou";
        }
    });
});

function enquiryPopup() {
    $("#popup_main").css("display", "block");
}
// -->
</script>
<script type="text/javascript">
function show() {
    $("#dialog").css("display", "block");
    $('#dialog').fadeIn('slow');
}

function showhide() {
    $("#dialog").css("display", "none");
}
</script>
<script type="text/javascript" src="{{url('web/js/wow.min.js')}}"></script>
<script>
new WOW().init();
</script>
<script type="text/javascript" src="{{url('web/js/jquery.flexisel.js')}}"></script>
<script type="text/javascript" src="{{url('web/js/homefeature.js')}}"></script>
<script type="text/javascript">
$(window).load(function() {
    $("#flexiselDemo3").flexisel({
        visibleItems: 4,
        itemsToScroll: 1,
        autoPlay: {
            enable: true,
            interval: 5000,
            pauseOnHover: true
        },
        responsiveBreakpoints: {
            portrait: {
                changePoint: 480,
                visibleItems: 1,
                itemsToScroll: 1
            },
            landscape: {
                changePoint: 640,
                visibleItems: 2,
                itemsToScroll: 2
            },
            tablet: {
                changePoint: 768,
                visibleItems: 3,
                itemsToScroll: 1
            }
        }
    });
    $("#flexiselDemo4").flexisel({
        visibleItems: 4,
        itemsToScroll: 1,
        autoPlay: {
            enable: true,
            interval: 5000,
            pauseOnHover: true
        },
        responsiveBreakpoints: {
            portrait: {
                changePoint: 480,
                visibleItems: 1,
                itemsToScroll: 1
            },
            landscape: {
                changePoint: 640,
                visibleItems: 2,
                itemsToScroll: 2
            },
            tablet: {
                changePoint: 768,
                visibleItems: 3,
                itemsToScroll: 1
            }
        }
    });
    $("#flexiselDemo5").flexisel({
        visibleItems: 4,
        itemsToScroll: 1,
        autoPlay: {
            enable: true,
            interval: 5000,
            pauseOnHover: true
        },
        responsiveBreakpoints: {
            portrait: {
                changePoint: 480,
                visibleItems: 1,
                itemsToScroll: 1
            },
            landscape: {
                changePoint: 640,
                visibleItems: 2,
                itemsToScroll: 2
            },
            tablet: {
                changePoint: 768,
                visibleItems: 3,
                itemsToScroll: 1
            }
        }
    });
    $("#flexiselDemo6").flexisel({
        visibleItems: 4,
        itemsToScroll: 1,
        autoPlay: {
            enable: true,
            interval: 5000,
            pauseOnHover: true
        },
        responsiveBreakpoints: {
            portrait: {
                changePoint: 480,
                visibleItems: 1,
                itemsToScroll: 1
            },
            landscape: {
                changePoint: 640,
                visibleItems: 2,
                itemsToScroll: 2
            },
            tablet: {
                changePoint: 768,
                visibleItems: 3,
                itemsToScroll: 1
            }
        }
    });
});
</script>
<script type="text/javascript">
if ($(document).width() <= 768) {
    $('.navbarul').addClass('navbarfeature');
} else {}
$(".navbarfeature").owlCarousel({
    autoPlay: false,
    //      items : 1, // THIS IS IMPORTANT
    itemsCustom: [
        [0, 3],
        [320, 2],
        [360, 2],
        [480, 3],
        [768, 5]
    ],
    navigation: true
});
</script>
<script>
$(document).ready(function() {
    $(document).on('focus', ".chColor", function() {
        $("#enquiry_form_1 input,select,textarea").removeClass('chColor');
    });
    $("#sub_pr_enq").click(function(event) {
        event.preventDefault();
        var name = $.trim($("#enquiry_form_1 input[name=name]").val());
        var companyName = $.trim($("#enquiry_form_1 input[name=companyName]").val());
        var phoneNumber = $.trim($("#enquiry_form_1 input[name=phoneNumber]").val());
        var email = $.trim($("#enquiry_form_1 input[name=email]").val());
        var cName = $.trim($("#enquiry_form_1 input[name=cName]").val());
        var stName = $.trim($("#enquiry_form_1 input[name=stName]").val());
        var CtName = $.trim($("#enquiry_form_1 input[name=CtName]").val());
        var address = $.trim($("#enquiry_form_1 textarea[name=address]").val());
        var purpose = $.trim($("#enquiry_form_1 select[name=purpose]").val());
        var message = $.trim($("#enquiry_form_1 textarea[name=message]").val());
        var zc_gad = $.trim($("#enquiry_form_1 textarea[name=zc_gad]").val());
        var gclid = localStorage.getItem('gclid');
        if (gclid != '') {
            var leadType = 'Paid';
        } else {
            var leadType = 'Organic';
        }
        if (name == '') {
            $("input[name=name]").addClass('chColor');
            return false;
        }
        if (companyName == '') {
            $("input[name=companyName]").addClass('chColor');
            return false;
        }
        if (phoneNumber == '') {
            $("input[name=phoneNumber]").addClass('chColor');
            return false;
        } else if (phoneNumber.length < 10 || phoneNumber.length > 15) {
            $("input[name=phoneNumber]").val('');
            alert('Mobile Number must be 10-15 digit numeric.');
            $("input[name=phoneNumber]").addClass('chColor');
            return false;
        }
        if (email == '') {
            $("input[name=email]").addClass('chColor');
            return false;
        } else if (!isEmail(email)) {
            $("input[name=email]").val('');
            alert('Please enter valid email address');
            $("input[name=email]").addClass('chColor');
            return false;
        }
        if (cName == '') {
            $("input[name=cName]").addClass('chColor');
            return false;
        }
        if (stName == '') {
            $("input[name=stName]").addClass('chColor');
            return false;
        }
        if (CtName == '') {
            $("input[name=CtName]").addClass('chColor');
            return false;
        }
        if (address == '') {
            $("textarea[name=address]").addClass('chColor');
            return false;
        }
        if (purpose == '' || purpose == '0') {
            $("select[name=purpose]").addClass('chColor');
            return false;
        }
        if (message == '') {
            $("textarea[name=message]").addClass('chColor');
            return false;
        }
        var formData = $('#enquiry_form_1').serializeArray();
        formData.push({
            name: "mode",
            value: "priceEnq"
        });
        formData.push({
            name: "leadType",
            value: leadType
        });
        $('#lodrIcon').show();
        $.ajax({
            url: "ajax",
            type: 'POST',
            data: formData,
            success: function(result) {
                //                    alert(result);
                console.log(result);
                //                    $('#enquiryOtr_state11').hide();
                $('#lodrIcon').hide();
                $('#stat_div').show();
                if (result == 'Success')
                    $('#successEnquiry1').show();
                else
                    $('#failEnquiry1').show();
                $("#enquiry_form_1 input,select,textarea").val('');
                setTimeout(function() {
                    location.reload();
                }, 5000);
            }
        });
    });
    $(".enqNow").click(function() {
        $('#enquiryOtr_state11').show();
    });
    $(".enqClsBtn").click(function() {
        $('#enquiryOtr_state11').hide();
    });
    $('#sub_pr_enq input').focus(function() {
        alert('dfdfd');
        $(this).css('border', 'hsl(210, 100%, 39%)');
    });
});

function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}
</script>
</body>

</html>