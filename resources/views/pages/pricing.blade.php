@extends('layouts.app')
@section('content')
<div class="container prcngcntnr">
    <div class="headercopntent pagesheader pricing-box">
        <h1 class="pagename feature-head">Pricing</h1>
        <!-- <h2 class="hdng hd-top">Try out School ERP free for 7 days. You’ll never want to go back.</h2> -->
        <p class="cancel-card new-p-data">Compare our plans below. Got questions? Call our sales line at <span>+91
                7972303958</span></p>
        <p class="no-credit-card new-p-data" style="margin-bottom: 95px;">No credit card needed. Change plans any time.
        </p>
    </div>
</div>

<div class="main-products main-product_pricing" style="background:#f3f3f3;padding-top:20px;">

</div>
<div class="main-products" style="background:#f3f3f3; min-height: auto;padding-bottom:40px;padding-top:0px;">
    <div class="wrapper-fix">

        <div id="main-prcing-yearly" class="main-prcing">
            <div class="pricing-prt">
                <div class="main-data">
                    <div class="prcnghdr">Bronze</div>
                    <div class="plan-tag">Starter Package for Small Organization</div>
                    <div class="plan-feat">&nbsp;</div>
                    <div class="price-data">
                        <sup style="font-size: 24px;">₹</sup>
                        <div class="prcngval">79,999</div>
                        <span class="month-data">/ yr.</span>
                    </div>
                    <div class="plan-features">
                        <ul class="list-unstyled">
                            <li><span class="flat check color"></span>Support</li>
                            <li><span class="flat check color"></span>Admin Panel Access</li>
                        </ul>
                    </div>
                    <div class="btn-pro">
                        <a href="http://acc.{{ env('FULL_DOMAIN') }}/get-started" target="_blank"
                            class="prchngmainbtn btn-width hover-pro" onclick="submitRegisterForm(1,0)">GET STARTED</a>
                    </div>
                </div>
            </div>
            <div class="pricing-prt">
                <div class="main-data">
                    <div class="prcnghdr">Silver</div>
                    <div class="plan-tag">Great for growing business</div>
                    <div class="plan-feat">&nbsp;</div>
                    <div class="price-data">
                        <sup style="font-size: 24px;">₹</sup>
                        <div class="prcngval">99,999 </div><span class="month-data">/ yr.</span>
                    </div>
                    <div class="plan-features">
                        <ul class="list-unstyled">
                            <li><span class="flat check color"></span>Support</li>
                            <li><span class="flat check color"></span>Admin Panel Access</li>
                        </ul>
                    </div>
                    <div class="btn-pro"><a href="http://acc.{{ env('FULL_DOMAIN') }}/get-started" target="_blank"
                            class="prchngmainbtn btn-width hover-pro">GET STARTED</a></div>
                </div>
            </div>
            <div class="pricing-prt box-pro">
                <div class="main-data">
                    <div class="plan-box-header">Most Popular</div>
                    <div class="prcnghdr">Gold</div>
                    <div class="plan-tag">Wonderful to meet your custom business needs</div>
                    <div class="plan-feat">
                        &nbsp;
                    </div>
                    <div class="price-data">
                        <sup style="font-size: 24px;">₹</sup>
                        <div class="prcngval">4,99,999 </div><span class="month-data">/ yr.</span>
                    </div>
                    <div class="plan-features">
                        <ul class="list-unstyled">
                            <li><span class="flat check color"></span>Support</li>
                            <li><span class="flat check color"></span>Admin Panel Access</li>
                        </ul>
                    </div>
                    <div class="btn-pro"><a href="http://acc.{{ env('FULL_DOMAIN') }}/get-started" target="_blank"
                            class="prchngmainbtn btn-width hover-pro" id="business_getstarted_link">GET
                            STARTED</a></div>
                </div>
            </div>
            <div class="pricing-prt">
                <div class="main-data">
                    <div class="prcnghdr">Platinum</div>
                    <div class="plan-tag">Best professional solution for existing business</div>
                    <div class="plan-feat">&nbsp;</div>
                    <div class="price-data">
                        <sup style="font-size: 24px;">₹</sup>
                        <div class="prcngval">7,99,999 </div><span class="month-data">/ yr.</span>
                    </div>
                    <div class="plan-features">
                        <ul class="list-unstyled">
                            <li><span class="flat check color"></span>Support</li>
                            <li><span class="flat check color"></span>Admin Panel Access</li>
                            <li><span class="flat check color"></span>Online Live Classes</li>
                            <li><span class="flat check color"></span>Online Examination</li>
                        </ul>
                    </div>
                    <div class="btn-pro"><a href="http://acc.{{ env('FULL_DOMAIN') }}/get-started" target="_blank"
                            class="prchngmainbtn btn-width hover-pro">GET STARTED</a></div>
                </div>
            </div>
            <!--Div inside for loop-->
        </div>
        <!----------------------------Test wise Pricing Cards Ends here---------------------->

        <!----------------------------User wise Pricing Cards Starts here---------------------->
        <div class="wrapper-fix">
            <div id="main-prcing-monthly" class="main-prcing" style="display: none;">
                <div class="pricing-prt">
                    <div class="main-data">
                        <div class="prcnghdr">FREE</div>
                        <div class="plan-tag">Getting started with School ERP</div>
                        <div class="plan-feat">30 users</div>
                        <div class="price-data">
                            <sup class="prcngdollar inr-data" content="USD"><svg xmlns="http://www.w3.org/2000/svg"
                                    fill="#555" id="Capa_1" style="" viewBox="0 0 401.998 401.998" x="0px" y="0px"
                                    width="26px" height="20px" xmlns:xml="http://www.w3.org/XML/1998/namespace"
                                    xml:space="preserve" version="1.1">
                                    <g>
                                        <path
                                            d="M 326.62 91.076 c -1.711 -1.713 -3.901 -2.568 -6.563 -2.568 h -48.82 c -3.238 -15.793 -9.329 -29.502 -18.274 -41.112 h 66.52 c 2.669 0 4.853 -0.856 6.57 -2.565 c 1.704 -1.712 2.56 -3.903 2.56 -6.567 V 9.136 c 0 -2.666 -0.855 -4.853 -2.56 -6.567 C 324.334 0.859 322.15 0 319.481 0 H 81.941 c -2.666 0 -4.853 0.859 -6.567 2.568 c -1.709 1.714 -2.568 3.901 -2.568 6.567 v 37.972 c 0 2.474 0.904 4.615 2.712 6.423 s 3.949 2.712 6.423 2.712 h 41.399 c 40.159 0 65.665 10.751 76.513 32.261 H 81.941 c -2.666 0 -4.856 0.855 -6.567 2.568 c -1.709 1.715 -2.568 3.901 -2.568 6.567 v 29.124 c 0 2.664 0.855 4.854 2.568 6.563 c 1.714 1.715 3.905 2.568 6.567 2.568 h 121.915 c -4.188 15.612 -13.944 27.506 -29.268 35.691 c -15.325 8.186 -35.544 12.279 -60.67 12.279 H 81.941 c -2.474 0 -4.615 0.905 -6.423 2.712 c -1.809 1.809 -2.712 3.951 -2.712 6.423 v 36.263 c 0 2.478 0.855 4.571 2.568 6.282 c 36.543 38.828 83.939 93.165 142.182 163.025 c 1.715 2.286 4.093 3.426 7.139 3.426 h 55.672 c 4.001 0 6.763 -1.708 8.281 -5.141 c 1.903 -3.426 1.53 -6.662 -1.143 -9.708 c -55.572 -68.143 -99.258 -119.153 -131.045 -153.032 c 32.358 -3.806 58.625 -14.277 78.802 -31.404 c 20.174 -17.129 32.449 -39.403 36.83 -6.811 h 47.965 c 2.662 0 4.853 -0.854 6.563 -2.568 c 1.715 -1.709 2.573 -3.899 2.573 -6.563 V 97.646 C 329.193 94.977 328.335 92.79 326.62 91.076 Z">
                                        </path>
                                    </g>
                                </svg></sup>
                            <div class="prcngval">0 </div><span class="month-data">/ mo.</span>
                        </div>
                        <div class="plan-features">
                            <ul class="list-unstyled">
                                <li><span class="flat check color"></span>Unlimited quizzes</li>
                                <li><span class="flat check color"></span>Reports for 30 attempts</li>
                            </ul>
                        </div>
                        <div class="btn-pro"><a href="javascript:void(0)" class="prchngmainbtn btn-width hover-pro"
                                onclick="submitRegisterForm(28,1)">GET STARTED</a></div>
                    </div>
                </div>
                <div class="pricing-prt">
                    <div class="main-data">
                        <div class="prcnghdr">STANDARD</div>
                        <div class="plan-tag">Great for growing business</div>
                        <div class="plan-feat">100 users</div>
                        <div class="price-data"><sup class="prcngdollar inr-data" content="USD"><svg
                                    xmlns="http://www.w3.org/2000/svg" fill="#555" id="Capa_1" style=""
                                    viewBox="0 0 401.998 401.998" x="0px" y="0px" width="26px" height="20px"
                                    xmlns:xml="http://www.w3.org/XML/1998/namespace" xml:space="preserve" version="1.1">
                                    <g>
                                        <path
                                            d="M 326.62 91.076 c -1.711 -1.713 -3.901 -2.568 -6.563 -2.568 h -48.82 c -3.238 -15.793 -9.329 -29.502 -18.274 -41.112 h 66.52 c 2.669 0 4.853 -0.856 6.57 -2.565 c 1.704 -1.712 2.56 -3.903 2.56 -6.567 V 9.136 c 0 -2.666 -0.855 -4.853 -2.56 -6.567 C 324.334 0.859 322.15 0 319.481 0 H 81.941 c -2.666 0 -4.853 0.859 -6.567 2.568 c -1.709 1.714 -2.568 3.901 -2.568 6.567 v 37.972 c 0 2.474 0.904 4.615 2.712 6.423 s 3.949 2.712 6.423 2.712 h 41.399 c 40.159 0 65.665 10.751 76.513 32.261 H 81.941 c -2.666 0 -4.856 0.855 -6.567 2.568 c -1.709 1.715 -2.568 3.901 -2.568 6.567 v 29.124 c 0 2.664 0.855 4.854 2.568 6.563 c 1.714 1.715 3.905 2.568 6.567 2.568 h 121.915 c -4.188 15.612 -13.944 27.506 -29.268 35.691 c -15.325 8.186 -35.544 12.279 -60.67 12.279 H 81.941 c -2.474 0 -4.615 0.905 -6.423 2.712 c -1.809 1.809 -2.712 3.951 -2.712 6.423 v 36.263 c 0 2.478 0.855 4.571 2.568 6.282 c 36.543 38.828 83.939 93.165 142.182 163.025 c 1.715 2.286 4.093 3.426 7.139 3.426 h 55.672 c 4.001 0 6.763 -1.708 8.281 -5.141 c 1.903 -3.426 1.53 -6.662 -1.143 -9.708 c -55.572 -68.143 -99.258 -119.153 -131.045 -153.032 c 32.358 -3.806 58.625 -14.277 78.802 -31.404 c 20.174 -17.129 32.449 -39.403 36.83 -6.811 h 47.965 c 2.662 0 4.853 -0.854 6.563 -2.568 c 1.715 -1.709 2.573 -3.899 2.573 -6.563 V 97.646 C 329.193 94.977 328.335 92.79 326.62 91.076 Z">
                                        </path>
                                    </g>
                                </svg></sup>
                            <div class="prcngval">3,125 </div><span class="month-data">/ mo.</span>
                        </div>
                        <div class="plan-features">
                            <ul class="list-unstyled">
                                <li><span class="flat check color"></span>Unlimited quizzes</li>
                                <li><span class="flat check color"></span>2 Admin panels</li>
                                <li><span class="flat check color"></span>Candidate Panel</li>
                            </ul>
                        </div>
                        <div class="btn-pro"><a href="billing-plan8bcf.html?id=30"
                                class="prchngmainbtn btn-width hover-pro">GET STARTED</a></div>
                    </div>
                </div>
                <div class="pricing-prt">
                    <div class="main-data">
                        <div class="prcnghdr">PROFESSIONAL</div>
                        <div class="plan-tag">Best professional solution for existing business</div>
                        <div class="plan-feat">250 users</div>
                        <div class="price-data"><sup class="prcngdollar inr-data" content="USD"><svg
                                    xmlns="http://www.w3.org/2000/svg" fill="#555" id="Capa_1" style=""
                                    viewBox="0 0 401.998 401.998" x="0px" y="0px" width="26px" height="20px"
                                    xmlns:xml="http://www.w3.org/XML/1998/namespace" xml:space="preserve" version="1.1">
                                    <g>
                                        <path
                                            d="M 326.62 91.076 c -1.711 -1.713 -3.901 -2.568 -6.563 -2.568 h -48.82 c -3.238 -15.793 -9.329 -29.502 -18.274 -41.112 h 66.52 c 2.669 0 4.853 -0.856 6.57 -2.565 c 1.704 -1.712 2.56 -3.903 2.56 -6.567 V 9.136 c 0 -2.666 -0.855 -4.853 -2.56 -6.567 C 324.334 0.859 322.15 0 319.481 0 H 81.941 c -2.666 0 -4.853 0.859 -6.567 2.568 c -1.709 1.714 -2.568 3.901 -2.568 6.567 v 37.972 c 0 2.474 0.904 4.615 2.712 6.423 s 3.949 2.712 6.423 2.712 h 41.399 c 40.159 0 65.665 10.751 76.513 32.261 H 81.941 c -2.666 0 -4.856 0.855 -6.567 2.568 c -1.709 1.715 -2.568 3.901 -2.568 6.567 v 29.124 c 0 2.664 0.855 4.854 2.568 6.563 c 1.714 1.715 3.905 2.568 6.567 2.568 h 121.915 c -4.188 15.612 -13.944 27.506 -29.268 35.691 c -15.325 8.186 -35.544 12.279 -60.67 12.279 H 81.941 c -2.474 0 -4.615 0.905 -6.423 2.712 c -1.809 1.809 -2.712 3.951 -2.712 6.423 v 36.263 c 0 2.478 0.855 4.571 2.568 6.282 c 36.543 38.828 83.939 93.165 142.182 163.025 c 1.715 2.286 4.093 3.426 7.139 3.426 h 55.672 c 4.001 0 6.763 -1.708 8.281 -5.141 c 1.903 -3.426 1.53 -6.662 -1.143 -9.708 c -55.572 -68.143 -99.258 -119.153 -131.045 -153.032 c 32.358 -3.806 58.625 -14.277 78.802 -31.404 c 20.174 -17.129 32.449 -39.403 36.83 -6.811 h 47.965 c 2.662 0 4.853 -0.854 6.563 -2.568 c 1.715 -1.709 2.573 -3.899 2.573 -6.563 V 97.646 C 329.193 94.977 328.335 92.79 326.62 91.076 Z">
                                        </path>
                                    </g>
                                </svg></sup>
                            <div class="prcngval">6,042 </div><span class="month-data">/ mo.</span>
                        </div>
                        <div class="plan-features">
                            <ul class="list-unstyled">
                                <li><span class="flat check color"></span>Unlimited quizzes</li>
                                <li><span class="flat check color"></span>3 Admin panels</li>
                                <li><span class="flat check color"></span>Candidate Panel</li>
                                <li><span class="flat check color"></span>Monetize</li>
                            </ul>
                        </div>
                        <div class="btn-pro"><a href="billing-plandac1.html?id=32"
                                class="prchngmainbtn btn-width hover-pro">GET STARTED</a></div>
                    </div>
                </div>
                <div class="pricing-prt box-pro">
                    <div class="main-data">
                        <div class="plan-box-header">Most Popular</div>
                        <div class="prcnghdr">BUSINESS</div>
                        <div class="plan-tag">Wonderful to meet your custom business needs</div>
                        <div class="plan-feat new-feat"><button class="btn btn-blocks dropdown-toggle" type="button"
                                id="dropdownMenuMonth" data-toggle="dropdown" aria-haspopup="true"
                                aria-expanded="true"><span id="premium_plan_default">500 users
                                </span><span class="caret"></span></button>
                            <ul id="premium_plan_ul_30" class="dropdown-menu dropdown-menu-left"
                                aria-labelledby="dropdownMenuMonth">
                                <li><a onclick="changeBusinessPlan(34,9375,500,30,0,0)" id="b_u_34"><span
                                            id="price_34">500</span><span> users</span></a></li>
                                <li><a onclick="changeBusinessPlan(36,16666.666666667,1000,30,0,0)" id="b_u_36"><span
                                            id="price_36">1,000</span><span> users</span></a></li>
                                <li><a onclick="changeBusinessPlan(38,21875,1500,30,0,0)" id="b_u_38"><span
                                            id="price_38">1,500</span><span> users</span></a></li>
                                <li><a onclick="changeBusinessPlan(40,31250,2500,30,0,0)" id="b_u_40"><span
                                            id="price_40">2,500</span><span> users</span></a></li>
                            </ul>
                        </div>
                        <div class="price-data"><sup class="prcngdollar inr-data" content="USD"><svg
                                    xmlns="http://www.w3.org/2000/svg" fill="#555" id="Capa_1" style=""
                                    viewBox="0 0 401.998 401.998" x="0px" y="0px" width="26px" height="20px"
                                    xmlns:xml="http://www.w3.org/XML/1998/namespace" xml:space="preserve" version="1.1">
                                    <g>
                                        <path
                                            d="M 326.62 91.076 c -1.711 -1.713 -3.901 -2.568 -6.563 -2.568 h -48.82 c -3.238 -15.793 -9.329 -29.502 -18.274 -41.112 h 66.52 c 2.669 0 4.853 -0.856 6.57 -2.565 c 1.704 -1.712 2.56 -3.903 2.56 -6.567 V 9.136 c 0 -2.666 -0.855 -4.853 -2.56 -6.567 C 324.334 0.859 322.15 0 319.481 0 H 81.941 c -2.666 0 -4.853 0.859 -6.567 2.568 c -1.709 1.714 -2.568 3.901 -2.568 6.567 v 37.972 c 0 2.474 0.904 4.615 2.712 6.423 s 3.949 2.712 6.423 2.712 h 41.399 c 40.159 0 65.665 10.751 76.513 32.261 H 81.941 c -2.666 0 -4.856 0.855 -6.567 2.568 c -1.709 1.715 -2.568 3.901 -2.568 6.567 v 29.124 c 0 2.664 0.855 4.854 2.568 6.563 c 1.714 1.715 3.905 2.568 6.567 2.568 h 121.915 c -4.188 15.612 -13.944 27.506 -29.268 35.691 c -15.325 8.186 -35.544 12.279 -60.67 12.279 H 81.941 c -2.474 0 -4.615 0.905 -6.423 2.712 c -1.809 1.809 -2.712 3.951 -2.712 6.423 v 36.263 c 0 2.478 0.855 4.571 2.568 6.282 c 36.543 38.828 83.939 93.165 142.182 163.025 c 1.715 2.286 4.093 3.426 7.139 3.426 h 55.672 c 4.001 0 6.763 -1.708 8.281 -5.141 c 1.903 -3.426 1.53 -6.662 -1.143 -9.708 c -55.572 -68.143 -99.258 -119.153 -131.045 -153.032 c 32.358 -3.806 58.625 -14.277 78.802 -31.404 c 20.174 -17.129 32.449 -39.403 36.83 -6.811 h 47.965 c 2.662 0 4.853 -0.854 6.563 -2.568 c 1.715 -1.709 2.573 -3.899 2.573 -6.563 V 97.646 C 329.193 94.977 328.335 92.79 326.62 91.076 Z">
                                        </path>
                                    </g>
                                </svg></sup>
                            <div class="prcngval" id="priceDisplayBusinessMonth">9,375</div><span class="month-data">/
                                mo.</span>
                        </div>
                        <div class="plan-features">
                            <ul class="list-unstyled">
                                <li><span class="flaticon-correct8 color"></span>Unlimited quizzes</li>
                                <li><span class="flaticon-correct8 color"></span>5 Admin panels</li>
                                <li><span class="flaticon-correct8 color"></span>Candidate Panel</li>
                                <li><span class="flaticon-correct8 color"></span>Monetize</li>
                            </ul>
                        </div>
                        <div class="btn-pro"><a href="billing-pland5e8.html?id=34"
                                class="prchngmainbtn btn-width hover-pro" id="getStartedBusinessMnthly">GET STARTED</a>
                        </div>
                    </div>
                </div>
                <!-- <div class="pricing-prt">
                        <a href="#" href="javascript:void(0)" class="enqNow">
                            <div class="main-data">
                                <div class="prcnghdr">ENTERPRISE</div>
                                <div class="plan-tag">Customized to meet your business needs</div>
                                <div class="plan-feat">Tailored volume</div>
                                <div class="price-data">
                                    <div class="prcngval">Custom </div>
                                </div>
                                <div class="plan-features">
                                    <ul class="list-unstyled">
                                        <li><span class="flat check color"></span>Unlimited quizzes</li>
                                        <li><span class="flat check color"></span>Personalized applications</li>
                                        <li><span class="flat check color"></span>Personal account manager</li>
                                    </ul>
                                </div>
                                <div class="btn-pro"><a href="javascript:void(0)" class="prchngmainbtn enquiry-btn btn-width enqiry-btn enqNow">ENQUIRE NOW</a></div>
                            </div>
                        </a>
                    </div> -->
                <!--Div inside for loop-->
            </div>
        </div>
    </div>
</div>
<!--Cards ends here--><?php
    $planModules = [
        [
            'name'          => 'Master',
            'description'   => 'To handle class, section, session etc.',
            'Bronze'        => 1,
            'Silver'        => 1,
            'Gold'          => 1,
            'Platinum'      => 1
        ],
        [
            'name'          => 'Fees Management System',
            'description'   => 'Fees Type, Collect, Due Report etc.',
            'Bronze'        => 1,
            'Silver'        => 1,
            'Gold'          => 1,
            'Platinum'      => 1
        ],
        [
            'name'          => 'Time Table',
            'description'   => 'Create time table for students and teachers',
            'Bronze'        => 1,
            'Silver'        => 1,
            'Gold'          => 1,
            'Platinum'      => 1
        ],
        [
            'name'          => 'Attendance Management System (Smart Type)',
            'description'   => 'Attendance management for staff, teachers and students',
            'Bronze'        => 1,
            'Silver'        => 1,
            'Gold'          => 1,
            'Platinum'      => 1
        ],
        [
            'name'          => 'Class Teacher Allocation',
            'description'   => 'Allot main teacher (class teacher) to a section of class.',
            'Bronze'        => 0,
            'Silver'        => 0,
            'Gold'          => 1,
            'Platinum'      => 1
        ],
        [
            'name'          => 'Teacher Substitute',
            'description'   => 'Substitution for a teacher in case of his/her absense.',
            'Bronze'        => 0,
            'Silver'        => 0,
            'Gold'          => 1,
            'Platinum'      => 1
        ],
        [
            'name'          => 'Class Promotion',
            'description'   => 'Promote / shift class or section of a student',
            'Bronze'        => 0,
            'Silver'        => 0,
            'Gold'          => 1,
            'Platinum'      => 1
        ],
        [
            'name'          => 'Auto Class Allocation',
            'description'   => 'Auto class allocation to new class of student after his/her result.',
            'Bronze'        => 1,
            'Silver'        => 1,
            'Gold'          => 1,
            'Platinum'      => 1
        ],
        [
            'name'          => 'Payroll System',
            'description'   => 'Salary management for staff and teacher of school / organization.',
            'Bronze'        => 1,
            'Silver'        => 1,
            'Gold'          => 1,
            'Platinum'      => 1
        ],
        [
            'name'          => 'CRM',
            'description'   => 'Customer Relationship Management - CRM to manage conversation between school and parents.',
            'Bronze'        => 0,
            'Silver'        => 0,
            'Gold'          => 1,
            'Platinum'      => 1
        ],
        [
            'name'          => 'LMS',
            'description'   => 'Library Management System - LMS to manage library books and records of a school.',
            'Bronze'        => 0,
            'Silver'        => 0,
            'Gold'          => 1,
            'Platinum'      => 1
        ],
        [
            'name'          => 'ID-Card (Normal Type)',
            'description'   => 'To create or print ID-Card for a student.',
            'Bronze'        => 1,
            'Silver'        => 1,
            'Gold'          => 1,
            'Platinum'      => 1
        ],
        [
            'name'          => 'Result or Report Card',
            'description'   => 'To show result to student and their parents.',
            'Bronze'        => 1,
            'Silver'        => 1,
            'Gold'          => 1,
            'Platinum'      => 1
        ],
        [
            'name'          => 'Notice',
            'description'   => 'Public or individual notification for student or parents.',
            'Bronze'        => 1,
            'Silver'        => 1,
            'Gold'          => 1,
            'Platinum'      => 1
        ],
        [
            'name'          => 'Diary Management System / Assignments',
            'description'   => 'To maintain digital diary for daily home tasks.',
            'Bronze'        => 0,
            'Silver'        => 1,
            'Gold'          => 1,
            'Platinum'      => 1
        ],
        [
            'name'          => 'Complain Box',
            'description'   => 'To handle 2-way complain about teacher, student or school.',
            'Bronze'        => 0,
            'Silver'        => 1,
            'Gold'          => 1,
            'Platinum'      => 1
        ],
        [
            'name'          => 'Event Management System',
            'description'   => 'To create, show events organized by organization or school.',
            'Bronze'        => 0,
            'Silver'        => 0,
            'Gold'          => 1,
            'Platinum'      => 1
        ],
        [
            'name'          => 'Calander',
            'description'   => 'Holiday calander for general information.',
            'Bronze'        => 1,
            'Silver'        => 1,
            'Gold'          => 1,
            'Platinum'      => 1
        ],
        [
            'name'          => 'Stationary Inventory',
            'description'   => 'For those school who sell or provide stationary items by school.',
            'Bronze'        => 0,
            'Silver'        => 0,
            'Gold'          => 1,
            'Platinum'      => 1
        ],
        [
            'name'          => 'Notifications',
            'description'   => 'General notification about users action like creation or deletion.',
            'Bronze'        => 1,
            'Silver'        => 1,
            'Gold'          => 1,
            'Platinum'      => 1
        ],
        [
            'name'          => 'Parents Meeting (Video)',
            'description'   => 'To manage parent and teacher review to grow student.',
            'Bronze'        => 0,
            'Silver'        => 0,
            'Gold'          => 1,
            'Platinum'      => 1
        ],
        [
            'name'          => 'Inventory System with Items',
            'description'   => 'To manage item which will be provided by school like sports accessories, shoes, etc.',
            'Bronze'        => 1,
            'Silver'        => 1,
            'Gold'          => 1,
            'Platinum'      => 1
        ],
        [
            'name'          => 'Hostel Management System',
            'description'   => 'To manage hostel associated with school.',
            'Bronze'        => 0,
            'Silver'        => 0,
            'Gold'          => 1,
            'Platinum'      => 1
        ],
        [
            'name'          => 'Busses Management System',
            'description'   => 'To manage bus, their route and students and teacher or staff travelled by bus.',
            'Bronze'        => 0,
            'Silver'        => 0,
            'Gold'          => 1,
            'Platinum'      => 1
        ],
        [
            'name'          => 'Accoount Management System',
            'description'   => 'Digital account chamber to manage transaction of a school or organization',
            'Bronze'        => 1,
            'Silver'        => 1,
            'Gold'          => 1,
            'Platinum'      => 1
        ],
        [
            'name'          => 'Online Exam',
            'description'   => 'Online examination on basis of MCQs to grow students skills.',
            'Bronze'        => 0,
            'Silver'        => 0,
            'Gold'          => 0,
            'Platinum'      => 1
        ],
        [
            'name'          => 'Digital Classes (Video)',
            'description'   => 'Online classes video record, schedule and broadcasting.',
            'Bronze'        => 0,
            'Silver'        => 0,
            'Gold'          => 0,
            'Platinum'      => 1
        ],
    ];
    ?>
<!--<div class="main-products">-->
<!--    <div class="wrapper-fix">-->
<!--        <div class="main-table-all-feature">-->
<!--*********************User Wise features Table Ends and Test Wise feature table starts*************************-->
<!--            <div id="yearly-feature-table" class="feature-table-box new-tavpart2">-->
<!--                <table class="new-data-table">-->
<!--                    <tr class="tr-pro">-->
<!--                        <th style="text-align:left; width: 17%;">Features</th>-->
<!--                        <th style="width: 17%;">Bronze</th>-->
<!--                        <th style="width: 17%;">Silver</th>-->
<!--                        <th style="width: 17%;"><span class="premium-col">Gold</span></th>-->
<!--                        <th style="width: 17%;">Platinum</th>-->
<!--                    </tr><?php
                                //foreach($planModules as $pm) :-->
?>
<!-- <tr class="hover-tr">-->
<!--                        <td>-->
<!--                            <div class="lftth tblhdng">-->
<!--                                <span class="spanhint"><?php // echo $pm['name'] ?></span>-->
<!--                                <span class="spanhint hintimg">-->
<!--                                    <img src="images/hint.png" alt="School ERP">-->
<!--                                    <span class="helping">-->
<!--                                        <div class="hlpicn"><?php // echo $pm['description'] ?></div>-->
<!--                                    </span>-->
<!--                                </span>-->
<!--                            </div>-->
<!--                        </td>-->
<!--This if for User no of SUPPORT -->
<!--                        <td class="center">
    <?php
    // $iconClass = $pm['Bronze'] == 1 ? 'check color' : 'minus cross-color';
    ?>
    <span class='flat <?php // echo $iconClass ?>'></span>-->
<!--                        </td>-->
<!--                        <td class="center"><?php
    //$iconClass = $pm['Silver'] == 1 ? 'check color' : 'minus cross-color';-->
?><span class='flat <?php // echo $iconClass ?>'></span>-->
<!--                        </td>-->
<!--                        <td class="center"><?php
    // $iconClass = $pm['Gold'] == 1 ? 'check color' : 'minus cross-color';-->
?><span class='flat <?php // echo $iconClass ?>'></span>-->
<!--                        </td>-->
<!--                        <td class="center"><?php
    //$iconClass = $pm['Platinum'] == 1 ? 'check color' : 'minus cross-color';-->
?><span class='flat <?php // echo $iconClass ?>'></span>-->
<!--                        </td>-->
<!--                    </tr><?php
    //endforeach;-->
?></table>-->
<!--            </div>-->
<!--*********************Test Wise feature table starts*************************-->
<!--        </div>-->
<!--    </div>-->
<!--</div>-->
<form name="packageSelectedForm" id="packageSelectedForm" type="hidden" action="#" method="POST">
    <input type="hidden" name="packageId" id="packageId">
    <input type="hidden" name="subscriptionTypeId" id="subscriptionTypeId">
</form>
@endsection