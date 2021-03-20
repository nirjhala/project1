@extends('layouts.app')
@section('content')
<div class="container prcngcntnr">
    <div class="headercopntent pagesheader pricing-box">
        <h1 class="pagename feature-head">Schedule a Demo</h1>
        <!-- <h2 class="hdng hd-top">Try out School ERP free for 7 days. You’ll never want to go back.</h2> -->
        <p class="cancel-card new-p-data">Call our sales line at <span>+91 7972303958</span></p>
        <p class="no-credit-card new-p-data" style="margin-bottom: 95px;">Book your schedule for a demo by filling a few
            details.</p>
    </div>
</div>
<div class="main-products main-product_pricing" style="background:#f3f3f3;padding-top:20px;">

</div>


<div id="popup_main" class="otr_schdule">

    <form name="popup" method="post" action="javascript:void(0)" onsubmit="return false;">

        <div class="main-poupCntr" id="popup_back">

            <div class="schdule_form">

                <div class="cntn_wrpr">

                    <div class="imgeCntnr-field">

                        <span class="backgrnd-imgeDemo">

                            <div class="topHdr">

                                <h3>Schedule a Demo</h3>

                                <p>Add your professional information.</p>

                            </div>

                            <span class="txt-1">Your ultimate destination for online assessment</span>

                            <span class="txt-2">Prepare your teachers, staff, students and their staff for online
                                education.</span>

                            <!--                        <img src="images/ThinkExam-banner.jpg" />-->

                        </span>

                    </div>

                    <div class="mainCntnr-txtfiled">



                        <div class="mktFormReq mktField" style="margin-top: 15px">

                            <div class="left-sctn-login">

                                <span class="txt-lgon">Your name<span
                                        style="color:red;margin-left: 5px;">*</span></span>



                            </div>

                            <div class="admin-login">



                                <!--<span class="request-demo-icon icon-user"></span>-->

                                <input type="text" autocomplete="off" onfocus='hide(this.id);'
                                    oninput="this.value = this.value.replace(/[^0-9.^A-Z. ^a-z.^\s ^\s ]/g, ''); "
                                    id="name" class="login-form-text" name="name" placeholder="Enter your full name">

                                <!--                 <label class="placeholder">Your Name</label>-->

                                <div class="valid-sctn" id="name_error">

                                    <img src="images/information.png" class="error_msgIcon" />

                                    <span class="helping valid-info">
                                        <div class="hlpicn">Please enter name </div>
                                    </span>

                                </div>

                            </div>

                        </div>

                        <div class="mktFormReq mktField">

                            <div class="left-sctn-login">

                                <span class="txt-lgon"> Email<span style="color: red;margin-left: 5px;">*</span></span>

                            </div>

                            <div class="admin-login">

                                <!--<span class="request-demo-icon icon-envelope"></span>-->

                                <input type="email" autocomplete="off" onfocus='hide(this.id);' id="email"
                                    class="login-form-text" name="email" placeholder="Enter your  email">

                                <!--                <label class="placeholder">Company Email</label>-->

                                <div class="valid-sctn" id="email_error">

                                    <img src="images/information.png" class="error_msgIcon" />

                                    <span class="helping valid-info">

                                        <div class="hlpicn" id="valid_email">Please enter email </div>
                                    </span>

                                </div>

                            </div>

                        </div>

                        <div class="mktFormReq mktField">

                            <div class="left-sctn-login">

                                <span class="txt-lgon">Organization</span>

                            </div>

                            <div class="admin-login">

                                <!--<span class="request-demo-icon icon-globe"></span>-->

                                <input type="text" autocomplete="off" class="login-form-text" id="company"
                                    onfocus='hide(this.id)'
                                    oninput="this.value = this.value.replace(/[^0-9.^A-Z. ^a-z.^\s ^\s ]/g, ''); "
                                    name="company" placeholder="Enter your organization name">

                                <!--                                            <label class="placeholder">Company Name</label>-->

                                <div class="valid-sctn" id="company_error">

                                    <img src="images/information.png" class="error_msgIcon" />

                                    <span class="helping valid-info">

                                        <div class="hlpicn">Please enter organization name </div>
                                    </span>

                                </div>

                            </div>

                        </div>

                        <div class="mktFormReq mktField">

                            <div class="left-sctn-login">

                                <span class="txt-lgon">Contact number<span
                                        style="color: red;margin-left: 5px;">*</span></span>

                            </div>

                            <div class="admin-login">

                                <!--<span class="request-demo-icon icon-mobile"></span>-->

                                <input type="text" autocomplete="off" size="24"
                                    oninput="this.value = this.value.replace(/[^0-9]/g, '');" maxlength="15"
                                    id="phoneno" name="phoneno" onfocus='hide(this.id)'
                                    class="mble_input login-form-text" placeholder="Enter your contact number">

                                <!--                                            <label class="placeholder">Contact Number</label>-->



                                <div class="valid-sctn" id="phoneno_error">

                                    <img src="images/information.png" class="error_msgIcon" />

                                    <span class="helping valid-info">

                                        <div class="hlpicn" id="valid_phoneno">Please enter valid number </div>
                                    </span>

                                </div>

                            </div>

                        </div>

                        <div class="mktFormReq mktField">

                            <div class="left-sctn-login">

                                <span class="txt-lgon">Job title</span>

                            </div>

                            <div class="admin-login">

                                <!--<span class="request-demo-icon icon-user"></span>-->

                                <input type="text" size="24" autocomplete="off" id="designation" name="designation"
                                    onfocus='hide(this.id);' class="mble_input login-form-text"
                                    placeholder="Enter your job title">

                                <!--                                            <label class="placeholder">Job Title</label>-->



                                <div class="valid-sctn" id="designation_error">

                                    <img src="images/information.png" class="error_msgIcon" />

                                    <span class="helping valid-info">

                                        <div class="hlpicn">Please enter designation </div>
                                    </span>

                                </div>

                            </div>

                        </div>

                        <div class="mktFormReq mktField">

                            <div class="left-sctn-login">

                                <span class="txt-lgon">Number of students</span>

                            </div>

                            <div class="admin-login tst_slct">

                                <!--<span class="icon-test"></span>-->

                                <select class="mble_input login-form-text" id="test" name="test"
                                    style="background: #eee; padding-bottom: 0px !important; line-height: 20px !important">

                                    <option value="Less than 500">Less than 500</option>

                                    <option value="500-1000">500-1000</option>

                                    <option value="1000-1500">1000-1500</option>

                                    <option value="1500-2000">1500-2000</option>

                                    <option value="More than 2000">More than 2000</option>

                                </select>

                                <!--                                            <label class="placeholder">Number of test taken in a month</label>-->



                                <div class="valid-sctn" id="test_error">

                                    <img src="images/information.png" class="error_msgIcon" />

                                    <span class="helping valid-info">

                                        <div class="hlpicn">Please Select At least one test </div>
                                    </span>

                                </div>

                            </div>

                        </div>

                        <div class="mktFormReq mktField">

                            <div class="left-sctn-login">

                                <span class="txt-lgon">Time to Finalize</span>

                            </div>

                            <div class="admin-login textfield tst_slct tst_slct-box " style="background: #eee">

                                <!--<span class="icon-test"></span>-->

                                <select class="mble_input login-form-text" id="daysToFinalize" name="daysToFinalize"
                                    style="background: #eee; padding-bottom: 0px !important; line-height: 20px !important">

                                    <option value="7 Days">7 Days</option>

                                    <option value="15 Days">15 Days</option>

                                    <option value="30 Days">30 Days</option>

                                    <option value="Not yet decided">Not yet decided</option>

                                </select>

                                <!--                                            <label class="placeholder">Time to Finalize</label>-->



                                <div class="valid-sctn" id="daysToFinalize_error">

                                    <img src="images/information.png" class="error_msgIcon" />

                                    <span class="helping valid-info">

                                        <div class="hlpicn">Please select days to finalize </div>
                                    </span>

                                </div>

                            </div>

                        </div>

                        <div class="mktFormReq mktField">

                            <div class="left-sctn-login">

                                <span class="txt-lgon">Website URL</span>

                            </div>

                            <div class="admin-login">

                                <input style="width:60%" type="text" autocomplete="off" class="login-form-text"
                                    id="requestedUrl" onfocus='hide(this.id);' name="requestedUrl"
                                    placeholder="Enter your website url">

                                <!--                                            <label class="placeholder">Website Address</label>-->



                                <div class="valid-sctn" id="requestedUrl_error">

                                    <img src="images/information.png" class="error_msgIcon" />

                                    <span class="helping valid-info">

                                        <div class="hlpicn" id="valid_requestedUrl">Please Enter Website </div>
                                    </span>

                                </div>

                            </div>

                        </div>

                        <div class="mktFormReq mktField">

                            <div class="left-sctn-login">

                                <span class="txt-lgon">Specific Requirements</span>

                            </div>

                            <div class="admin-login">

                                <!--<span class="request-demo-icon icon-user"></span>-->

                                <textarea type="text" size="24" autocomplete="off" id="message" name="message"
                                    onfocus='$("#message").parent(".admin-login").removeClass("errorinpt");'
                                    class="mble_input login-form-text"
                                    style=" resize: none; width: 100% !important; padding: 5px 0 5px 10px !important; line-height: 20px;"
                                    placeholder="Enter your specific requirements"></textarea>

                                <!--<input type="text" size="24" autocomplete="off"  id="message" name="message" onfocus='$("#message").parent(".admin-login").removeClass("errorinpt");'  class="mble_input login-form-text" >-->

                                <!--                                            <label class="placeholder">Enter Message</label>-->



                                <div class="valid-sctn" id="message_error">

                                    <img src="images/information.png" class="error_msgIcon" />

                                    <span class="helping valid-info">

                                        <div class="hlpicn">Specific Requirements </div>
                                    </span>

                                </div>

                            </div>

                        </div>

                        <div class="mktFormReq mktField">

                            <span class="mndtry_filds-txt">(<span style="color: red;margin-left: 5px;">*</span>Mandatory
                                fields )</span>

                            <button id="send" name="send" class="popup_sbmtbtn">Submit</button>



                            <button style="display: none;" id="wait" name="wait" class="popup_sbmtbtn">Wait ...</button>

                            <div class="clearfix"></div>

                        </div>

                    </div>



                    <!--                                </div>-->



                    <!--            <a title="Close" class="fancybox-item fancybox-close" id="fancybox-close" href="javascript:;" onclick="close();"></a>-->





                </div>

                <div class="submt_gif">



                </div>

            </div>

        </div>

    </form>



</div>

<div class="preloaderCBT_image" style="display:none" id="preloader_request">

    <img src="images/PreloaderCBT.gif">

</div>
@endsection