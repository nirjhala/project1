<template>
    <div class="dashboard-content-one">
        <!-- Breadcubs Area Start Here -->
        <div class="breadcrumbs-area">
            <h3>Admin Dashboard</h3>
            <ul>
                <li>
                    <router-link :to="{ name: 'dashboard' }">Dashboard</router-link>
                </li>
                <li>Admin</li>
            </ul>
        </div>
        <!-- Breadcubs Area End Here -->
        <!-- Dashboard summery Start Here -->
        <div class="row gutters-20">
            <div class="col-xl-3 col-sm-6 col-12">
                <div class="dashboard-summery-one mg-b-20">
                    <div class="row align-items-center">
                        <div class="col-6">
                            <div class="item-icon bg-light-green ">
                                <i class="flaticon-classmates text-green"></i>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="item-content">
                                <div class="item-title">Students</div>
                                <div class="item-number"><span class="counter" data-num="150000">1,50,000</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-sm-6 col-12">
                <div class="dashboard-summery-one mg-b-20">
                    <div class="row align-items-center">
                        <div class="col-6">
                            <div class="item-icon bg-light-blue">
                                <i class="flaticon-multiple-users-silhouette text-blue"></i>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="item-content">
                                <div class="item-title">Teachers</div>
                                <div class="item-number"><span class="counter" data-num="2250">2,250</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-sm-6 col-12">
                <div class="dashboard-summery-one mg-b-20">
                    <div class="row align-items-center">
                        <div class="col-6">
                            <div class="item-icon bg-light-yellow">
                                <i class="flaticon-couple text-orange"></i>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="item-content">
                                <div class="item-title">Parents</div>
                                <div class="item-number"><span class="counter" data-num="5690">5,690</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-sm-6 col-12">
                <div class="dashboard-summery-one mg-b-20">
                    <div class="row align-items-center">
                        <div class="col-6">
                            <div class="item-icon bg-light-red">
                                <i class="flaticon-money text-red"></i>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="item-content">
                                <div class="item-title">Earnings</div>
                                <div class="item-number"><span>$</span><span class="counter" data-num="193000">1,93,000</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Dashboard summery End Here -->
        <!-- Dashboard Content Start Here -->
        <div class="row gutters-20">
            <div class="col-12 col-xl-8 col-6-xxxl">
                <div class="card dashboard-card-one pd-b-20">
                    <div class="card-body">
                        <div class="heading-layout1">
                            <div class="item-title">
                                <h3>Earnings</h3>
                            </div>
                            <div class="dropdown">
                                <a class="dropdown-toggle" href="#" role="button" data-toggle="dropdown"
                                    aria-expanded="false">...</a>

                                <div class="dropdown-menu dropdown-menu-right">
                                    <a class="dropdown-item" href="#"><i
                                            class="fas fa-times text-orange-red"></i>Close</a>
                                    <a class="dropdown-item" href="#"><i
                                            class="fas fa-cogs text-dark-pastel-green"></i>Edit</a>
                                    <a class="dropdown-item" href="#"><i
                                            class="fas fa-redo-alt text-orange-peel"></i>Refresh</a>
                                </div>
                            </div>
                        </div>
                        <div class="earning-report">
                            <div class="item-content">
                                <div class="single-item pseudo-bg-blue">
                                    <h4>Total Collections</h4>
                                    <span>75,000</span>
                                </div>
                                <div class="single-item pseudo-bg-red">
                                    <h4>Fees Collection</h4>
                                    <span>15,000</span>
                                </div>
                            </div>
                            <div class="dropdown">
                                <a class="date-dropdown-toggle" href="#" role="button" data-toggle="dropdown"
                                    aria-expanded="false">Jan 20, 2019</a>
                                <div class="dropdown-menu dropdown-menu-right">
                                    <a class="dropdown-item" href="#">Jan 20, 2019</a>
                                    <a class="dropdown-item" href="#">Jan 20, 2021</a>
                                    <a class="dropdown-item" href="#">Jan 20, 2020</a>
                                </div>
                            </div>
                        </div>
                        <div class="earning-chart-wrap">
                            <canvas id="earning-line-chart" width="660" height="320"></canvas>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 col-xl-4 col-3-xxxl">
                <div class="card dashboard-card-two pd-b-20">
                    <div class="card-body">
                        <div class="heading-layout1">
                            <div class="item-title">
                                <h3>Expenses</h3>
                            </div>
                            <div class="dropdown">
                                <a class="dropdown-toggle" href="#" role="button" data-toggle="dropdown"
                                    aria-expanded="false">...</a>

                                <div class="dropdown-menu dropdown-menu-right">
                                    <a class="dropdown-item" href="#"><i
                                            class="fas fa-times text-orange-red"></i>Close</a>
                                    <a class="dropdown-item" href="#"><i
                                            class="fas fa-cogs text-dark-pastel-green"></i>Edit</a>
                                    <a class="dropdown-item" href="#"><i
                                            class="fas fa-redo-alt text-orange-peel"></i>Refresh</a>
                                </div>
                            </div>
                        </div>
                        <div class="expense-report">
                            <div class="monthly-expense pseudo-bg-Aquamarine">
                                <div class="expense-date">Jan 2019</div>
                                <div class="expense-amount"><span>$</span> 15,000</div>
                            </div>
                            <div class="monthly-expense pseudo-bg-blue">
                                <div class="expense-date">Feb 2019</div>
                                <div class="expense-amount"><span>$</span> 10,000</div>
                            </div>
                            <div class="monthly-expense pseudo-bg-yellow">
                                <div class="expense-date">Mar 2019</div>
                                <div class="expense-amount"><span>$</span> 8,000</div>
                            </div>
                        </div>
                        <div class="expense-chart-wrap">
                            <canvas id="expense-bar-chart" width="100" height="300"></canvas>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 col-xl-6 col-3-xxxl">
                <div class="card dashboard-card-three pd-b-20">
                    <div class="card-body">
                        <div class="heading-layout1">
                            <div class="item-title">
                                <h3>Students</h3>
                            </div>
                            <div class="dropdown">
                                <a class="dropdown-toggle" href="#" role="button" data-toggle="dropdown"
                                    aria-expanded="false">...</a>

                                <div class="dropdown-menu dropdown-menu-right">
                                    <a class="dropdown-item" href="#"><i
                                            class="fas fa-times text-orange-red"></i>Close</a>
                                    <a class="dropdown-item" href="#"><i
                                            class="fas fa-cogs text-dark-pastel-green"></i>Edit</a>
                                    <a class="dropdown-item" href="#"><i
                                            class="fas fa-redo-alt text-orange-peel"></i>Refresh</a>
                                </div>
                            </div>
                        </div>
                        <div class="doughnut-chart-wrap">
                            <canvas id="student-doughnut-chart" width="100" height="300"></canvas>
                        </div>
                        <div class="student-report">
                            <div class="student-count pseudo-bg-blue">
                                <h4 class="item-title">Female Students</h4>
                                <div class="item-number">45,000</div>
                            </div>
                            <div class="student-count pseudo-bg-yellow">
                                <h4 class="item-title">Male Students</h4>
                                <div class="item-number">1,05,000</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 col-xl-6 col-4-xxxl">
                <div class="card dashboard-card-four pd-b-20">
                    <div class="card-body">
                        <div class="heading-layout1">
                            <div class="item-title">
                                <h3>Event Calender</h3>
                            </div>
                            <div class="dropdown">
                                <a class="dropdown-toggle" href="#" role="button" data-toggle="dropdown"
                                    aria-expanded="false">...</a>

                                <div class="dropdown-menu dropdown-menu-right">
                                    <a class="dropdown-item" href="#"><i
                                            class="fas fa-times text-orange-red"></i>Close</a>
                                    <a class="dropdown-item" href="#"><i
                                            class="fas fa-cogs text-dark-pastel-green"></i>Edit</a>
                                    <a class="dropdown-item" href="#"><i
                                            class="fas fa-redo-alt text-orange-peel"></i>Refresh</a>
                                </div>
                            </div>
                        </div>
                        <div class="calender-wrap">
                            <div id="fc-calender" class="fc-calender"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-6 col-xl-6 col-4-xxxl">
                <div class="card dashboard-card-five pd-b-20">
                    <div class="card-body pd-b-14">
                        <div class="heading-layout1">
                            <div class="item-title">
                                <h3>Website Traffic</h3>
                            </div>
                            <div class="dropdown">
                                <a class="dropdown-toggle" href="#" role="button" data-toggle="dropdown"
                                    aria-expanded="false">...</a>

                                <div class="dropdown-menu dropdown-menu-right">
                                    <a class="dropdown-item" href="#"><i
                                            class="fas fa-times text-orange-red"></i>Close</a>
                                    <a class="dropdown-item" href="#"><i
                                            class="fas fa-cogs text-dark-pastel-green"></i>Edit</a>
                                    <a class="dropdown-item" href="#"><i
                                            class="fas fa-redo-alt text-orange-peel"></i>Refresh</a>
                                </div>
                            </div>
                        </div>
                        <h6 class="traffic-title">Unique Visitors</h6>
                        <div class="traffic-number">2,590</div>
                        <div class="traffic-bar">
                            <div class="direct" data-toggle="tooltip" data-placement="top" title="Direct">
                            </div>
                            <div class="search" data-toggle="tooltip" data-placement="top" title="Search">
                            </div>
                            <div class="referrals" data-toggle="tooltip" data-placement="top" title="Referrals">
                            </div>
                            <div class="social" data-toggle="tooltip" data-placement="top" title="Social">
                            </div>
                        </div>
                        <div class="traffic-table table-responsive">
                            <table class="table">
                                <tbody>
                                    <tr>
                                        <td class="t-title pseudo-bg-Aquamarine">Direct</td>
                                        <td>12,890</td>
                                        <td>50%</td>
                                    </tr>
                                    <tr>
                                        <td class="t-title pseudo-bg-blue">Search</td>
                                        <td>7,245</td>
                                        <td>27%</td>
                                    </tr>
                                    <tr>
                                        <td class="t-title pseudo-bg-yellow">Referrals</td>
                                        <td>4,256</td>
                                        <td>8%</td>
                                    </tr>
                                    <tr>
                                        <td class="t-title pseudo-bg-red">Social</td>
                                        <td>500</td>
                                        <td>7%</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-6 col-xl-6 col-4-xxxl">
                <div class="card dashboard-card-six pd-b-20">
                    <div class="card-body">
                        <div class="heading-layout1 mg-b-17">
                            <div class="item-title">
                                <h3>Notice Board</h3>
                            </div>
                            <div class="dropdown">
                                <a class="dropdown-toggle" href="#" role="button" data-toggle="dropdown"
                                    aria-expanded="false">...</a>

                                <div class="dropdown-menu dropdown-menu-right">
                                    <a class="dropdown-item" href="#"><i
                                            class="fas fa-times text-orange-red"></i>Close</a>
                                    <a class="dropdown-item" href="#"><i
                                            class="fas fa-cogs text-dark-pastel-green"></i>Edit</a>
                                    <a class="dropdown-item" href="#"><i
                                            class="fas fa-redo-alt text-orange-peel"></i>Refresh</a>
                                </div>
                            </div>
                        </div>
                        <div class="notice-box-wrap">
                            <div class="notice-list">
                                <div class="post-date bg-skyblue">16 June, 2019</div>
                                <h6 class="notice-title"><a href="#">Great School manag mene esom text of the
                                        printing.</a></h6>
                                <div class="entry-meta"> Jennyfar Lopez / <span>5 min ago</span></div>
                            </div>
                            <div class="notice-list">
                                <div class="post-date bg-yellow">16 June, 2019</div>
                                <h6 class="notice-title"><a href="#">Great School manag printing.</a></h6>
                                <div class="entry-meta"> Jennyfar Lopez / <span>5 min ago</span></div>
                            </div>
                            <div class="notice-list">
                                <div class="post-date bg-pink">16 June, 2019</div>
                                <h6 class="notice-title"><a href="#">Great School manag meneesom.</a></h6>
                                <div class="entry-meta"> Jennyfar Lopez / <span>5 min ago</span></div>
                            </div>
                            <div class="notice-list">
                                <div class="post-date bg-skyblue">16 June, 2019</div>
                                <h6 class="notice-title"><a href="#">Great School manag mene esom text of the
                                        printing.</a></h6>
                                <div class="entry-meta"> Jennyfar Lopez / <span>5 min ago</span></div>
                            </div>
                            <div class="notice-list">
                                <div class="post-date bg-yellow">16 June, 2019</div>
                                <h6 class="notice-title"><a href="#">Great School manag printing.</a></h6>
                                <div class="entry-meta"> Jennyfar Lopez / <span>5 min ago</span></div>
                            </div>
                            <div class="notice-list">
                                <div class="post-date bg-pink">16 June, 2019</div>
                                <h6 class="notice-title"><a href="#">Great School manag meneesom.</a></h6>
                                <div class="entry-meta"> Jennyfar Lopez / <span>5 min ago</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Dashboard Content End Here -->
    </div>
</template>
<script type="text/javascript">
const token = localStorage.getItem('token');

export default {
    mounted() {
        /*-------------------------------------
              Vector Map
          -------------------------------------*/
        if ($.fn.vectorMap !== undefined) {
            $('#world-map').vectorMap({
                map: 'world_mill',
                zoomButtons: false,
                backgroundColor: 'transparent',

                regionStyle: {
                    initial: {
                        fill: '#0070ba'
                    }
                },
                focusOn: {
                    x: 0,
                    y: 0,
                    scale: 1
                },
                series: {
                    regions: [{
                        values: {
                            CA: '#41dfce',
                            RU: '#f50056',
                            US: '#f50056',
                            IT: '#f50056',
                            AU: '#fbd348'
                        }
                    }]
                }
            });
        }

        /*-------------------------------------
              Line Chart
          -------------------------------------*/
        if ($("#earning-line-chart").length) {

            var lineChartData = {
                labels: ["", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", ""],
                datasets: [{
                        data: [0, 5e4, 1e4, 5e4, 14e3, 7e4, 5e4, 75e3, 5e4],
                        backgroundColor: '#ff0000',
                        borderColor: '#ff0000',
                        borderWidth: 1,
                        pointRadius: 0,
                        pointBackgroundColor: '#ff0000',
                        pointBorderColor: '#ffffff',
                        pointHoverRadius: 6,
                        pointHoverBorderWidth: 3,
                        fill: 'origin',
                        label: "Total Collection"
                    },
                    {
                        data: [0, 3e4, 2e4, 6e4, 7e4, 5e4, 5e4, 9e4, 8e4],
                        backgroundColor: '#417dfc',
                        borderColor: '#417dfc',
                        borderWidth: 1,
                        pointRadius: 0,
                        pointBackgroundColor: '#304ffe',
                        pointBorderColor: '#ffffff',
                        pointHoverRadius: 6,
                        pointHoverBorderWidth: 3,
                        fill: 'origin',
                        label: "Fees Collection"
                    }
                ]
            };
            var lineChartOptions = {
                responsive: true,
                maintainAspectRatio: false,
                animation: {
                    duration: 2000
                },
                scales: {

                    xAxes: [{
                        display: true,
                        ticks: {
                            display: true,
                            fontColor: "#222222",
                            fontSize: 16,
                            padding: 20
                        },
                        gridLines: {
                            display: true,
                            drawBorder: true,
                            color: '#cccccc',
                            borderDash: [5, 5]
                        }
                    }],
                    yAxes: [{
                        display: true,
                        ticks: {
                            display: true,
                            autoSkip: true,
                            maxRotation: 0,
                            fontColor: "#646464",
                            fontSize: 16,
                            stepSize: 25000,
                            padding: 20,
                            callback: function(value) {
                                var ranges = [{
                                        divider: 1e6,
                                        suffix: 'M'
                                    },
                                    {
                                        divider: 1e3,
                                        suffix: 'k'
                                    }
                                ];

                                function formatNumber(n) {
                                    for (var i = 0; i < ranges.length; i++) {
                                        if (n >= ranges[i].divider) {
                                            return (n / ranges[i].divider).toString() + ranges[i].suffix;
                                        }
                                    }
                                    return n;
                                }
                                return formatNumber(value);
                            }
                        },
                        gridLines: {
                            display: true,
                            drawBorder: false,
                            color: '#cccccc',
                            borderDash: [5, 5],
                            zeroLineBorderDash: [5, 5],
                        }
                    }]
                },
                legend: {
                    display: false
                },
                tooltips: {
                    mode: 'index',
                    intersect: false,
                    enabled: true
                },
                elements: {
                    line: {
                        tension: .35
                    },
                    point: {
                        pointStyle: 'circle'
                    }
                }
            };
            var earningCanvas = $("#earning-line-chart").get(0).getContext("2d");
            var earningChart = new Chart(earningCanvas, {
                type: 'line',
                data: lineChartData,
                options: lineChartOptions
            });
        }

        /*-------------------------------------
              Bar Chart
          -------------------------------------*/
        if ($("#expense-bar-chart").length) {
            var barChartData = {
                labels: ["Jan", "Feb", "Mar"],
                datasets: [{
                    backgroundColor: ["#40dfcd", "#417dfc", "#ffaa01"],
                    data: [125000, 100000, 75000, 50000, 150000],
                    label: "Expenses (millions)"
                }, ]
            };
            var barChartOptions = {
                responsive: true,
                maintainAspectRatio: false,
                animation: {
                    duration: 2000
                },
                scales: {

                    xAxes: [{
                        display: false,
                        maxBarThickness: 100,
                        ticks: {
                            display: false,
                            padding: 0,
                            fontColor: "#646464",
                            fontSize: 14,
                        },
                        gridLines: {
                            display: true,
                            color: '#e1e1e1',
                        }
                    }],
                    yAxes: [{
                        display: true,
                        ticks: {
                            display: true,
                            autoSkip: false,
                            fontColor: "#646464",
                            fontSize: 14,
                            stepSize: 25000,
                            padding: 20,
                            beginAtZero: true,
                            callback: function(value) {
                                var ranges = [{
                                        divider: 1e6,
                                        suffix: 'M'
                                    },
                                    {
                                        divider: 1e3,
                                        suffix: 'k'
                                    }
                                ];

                                function formatNumber(n) {
                                    for (var i = 0; i < ranges.length; i++) {
                                        if (n >= ranges[i].divider) {
                                            return (n / ranges[i].divider).toString() + ranges[i].suffix;
                                        }
                                    }
                                    return n;
                                }
                                return formatNumber(value);
                            }
                        },
                        gridLines: {
                            display: true,
                            drawBorder: true,
                            color: '#e1e1e1',
                            zeroLineColor: '#e1e1e1'

                        }
                    }]
                },
                legend: {
                    display: false
                },
                tooltips: {
                    enabled: true
                },
                elements: {}
            };
            var expenseCanvas = $("#expense-bar-chart").get(0).getContext("2d");
            var expenseChart = new Chart(expenseCanvas, {
                type: 'bar',
                data: barChartData,
                options: barChartOptions
            });
        }

        /*-------------------------------------
              Doughnut Chart
          -------------------------------------*/
        if ($("#student-doughnut-chart").length) {

            var doughnutChartData = {
                labels: ["Female Students", "Male Students"],
                datasets: [{
                    backgroundColor: ["#304ffe", "#ffa601"],
                    data: [45000, 105000],
                    label: "Total Students"
                }, ]
            };
            var doughnutChartOptions = {
                responsive: true,
                maintainAspectRatio: false,
                cutoutPercentage: 65,
                rotation: -9.4,
                animation: {
                    duration: 2000
                },
                legend: {
                    display: false
                },
                tooltips: {
                    enabled: true
                },
            };
            var studentCanvas = $("#student-doughnut-chart").get(0).getContext("2d");
            var studentChart = new Chart(studentCanvas, {
                type: 'doughnut',
                data: doughnutChartData,
                options: doughnutChartOptions
            });
        }

        /*-------------------------------------
              Calender initiate
          -------------------------------------*/
        if ($.fn.fullCalendar !== undefined) {
            $('#fc-calender').fullCalendar({
                header: {
                    center: 'basicDay,basicWeek,month',
                    left: 'title',
                    right: 'prev,next',
                },
                fixedWeekCount: false,
                navLinks: true, // can click day/week names to navigate views
                editable: true,
                eventLimit: true, // allow "more" link when too many events
                aspectRatio: 1.8,
                events: [{
                        title: 'All Day Event',
                        start: '2019-04-01'
                    },

                    {
                        title: 'Meeting',
                        start: '2019-04-12T14:30:00'
                    },
                    {
                        title: 'Happy Hour',
                        start: '2019-04-15T17:30:00'
                    },
                    {
                        title: 'Birthday Party',
                        start: '2019-04-20T07:00:00'
                    }
                ]
            });
        }
    }
}
</script>
