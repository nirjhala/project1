(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Dashboard.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Dashboard.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var token = localStorage.getItem('token');
/* harmony default export */ __webpack_exports__["default"] = ({
  mounted: function mounted() {
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
        }, {
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
        }]
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
              callback: function callback(value) {
                var ranges = [{
                  divider: 1e6,
                  suffix: 'M'
                }, {
                  divider: 1e3,
                  suffix: 'k'
                }];

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
              zeroLineBorderDash: [5, 5]
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
        }]
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
              fontSize: 14
            },
            gridLines: {
              display: true,
              color: '#e1e1e1'
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
              callback: function callback(value) {
                var ranges = [{
                  divider: 1e6,
                  suffix: 'M'
                }, {
                  divider: 1e3,
                  suffix: 'k'
                }];

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
        }]
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
        }
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
          right: 'prev,next'
        },
        fixedWeekCount: false,
        navLinks: true,
        // can click day/week names to navigate views
        editable: true,
        eventLimit: true,
        // allow "more" link when too many events
        aspectRatio: 1.8,
        events: [{
          title: 'All Day Event',
          start: '2019-04-01'
        }, {
          title: 'Meeting',
          start: '2019-04-12T14:30:00'
        }, {
          title: 'Happy Hour',
          start: '2019-04-15T17:30:00'
        }, {
          title: 'Birthday Party',
          start: '2019-04-20T07:00:00'
        }]
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Dashboard.vue?vue&type=template&id=040e2ab9&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Dashboard.vue?vue&type=template&id=040e2ab9& ***!
  \************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "dashboard-content-one" }, [
    _c("div", { staticClass: "breadcrumbs-area" }, [
      _c("h3", [_vm._v("Admin Dashboard")]),
      _vm._v(" "),
      _c("ul", [
        _c(
          "li",
          [
            _c("router-link", { attrs: { to: { name: "dashboard" } } }, [
              _vm._v("Dashboard")
            ])
          ],
          1
        ),
        _vm._v(" "),
        _c("li", [_vm._v("Admin")])
      ])
    ]),
    _vm._v(" "),
    _vm._m(0),
    _vm._v(" "),
    _vm._m(1)
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row gutters-20" }, [
      _c("div", { staticClass: "col-xl-3 col-sm-6 col-12" }, [
        _c("div", { staticClass: "dashboard-summery-one mg-b-20" }, [
          _c("div", { staticClass: "row align-items-center" }, [
            _c("div", { staticClass: "col-6" }, [
              _c("div", { staticClass: "item-icon bg-light-green " }, [
                _c("i", { staticClass: "flaticon-classmates text-green" })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-6" }, [
              _c("div", { staticClass: "item-content" }, [
                _c("div", { staticClass: "item-title" }, [_vm._v("Students")]),
                _vm._v(" "),
                _c("div", { staticClass: "item-number" }, [
                  _c(
                    "span",
                    { staticClass: "counter", attrs: { "data-num": "150000" } },
                    [_vm._v("1,50,000")]
                  )
                ])
              ])
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-xl-3 col-sm-6 col-12" }, [
        _c("div", { staticClass: "dashboard-summery-one mg-b-20" }, [
          _c("div", { staticClass: "row align-items-center" }, [
            _c("div", { staticClass: "col-6" }, [
              _c("div", { staticClass: "item-icon bg-light-blue" }, [
                _c("i", {
                  staticClass: "flaticon-multiple-users-silhouette text-blue"
                })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-6" }, [
              _c("div", { staticClass: "item-content" }, [
                _c("div", { staticClass: "item-title" }, [_vm._v("Teachers")]),
                _vm._v(" "),
                _c("div", { staticClass: "item-number" }, [
                  _c(
                    "span",
                    { staticClass: "counter", attrs: { "data-num": "2250" } },
                    [_vm._v("2,250")]
                  )
                ])
              ])
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-xl-3 col-sm-6 col-12" }, [
        _c("div", { staticClass: "dashboard-summery-one mg-b-20" }, [
          _c("div", { staticClass: "row align-items-center" }, [
            _c("div", { staticClass: "col-6" }, [
              _c("div", { staticClass: "item-icon bg-light-yellow" }, [
                _c("i", { staticClass: "flaticon-couple text-orange" })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-6" }, [
              _c("div", { staticClass: "item-content" }, [
                _c("div", { staticClass: "item-title" }, [_vm._v("Parents")]),
                _vm._v(" "),
                _c("div", { staticClass: "item-number" }, [
                  _c(
                    "span",
                    { staticClass: "counter", attrs: { "data-num": "5690" } },
                    [_vm._v("5,690")]
                  )
                ])
              ])
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-xl-3 col-sm-6 col-12" }, [
        _c("div", { staticClass: "dashboard-summery-one mg-b-20" }, [
          _c("div", { staticClass: "row align-items-center" }, [
            _c("div", { staticClass: "col-6" }, [
              _c("div", { staticClass: "item-icon bg-light-red" }, [
                _c("i", { staticClass: "flaticon-money text-red" })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-6" }, [
              _c("div", { staticClass: "item-content" }, [
                _c("div", { staticClass: "item-title" }, [_vm._v("Earnings")]),
                _vm._v(" "),
                _c("div", { staticClass: "item-number" }, [
                  _c("span", [_vm._v("$")]),
                  _c(
                    "span",
                    { staticClass: "counter", attrs: { "data-num": "193000" } },
                    [_vm._v("1,93,000")]
                  )
                ])
              ])
            ])
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row gutters-20" }, [
      _c("div", { staticClass: "col-12 col-xl-8 col-6-xxxl" }, [
        _c("div", { staticClass: "card dashboard-card-one pd-b-20" }, [
          _c("div", { staticClass: "card-body" }, [
            _c("div", { staticClass: "heading-layout1" }, [
              _c("div", { staticClass: "item-title" }, [
                _c("h3", [_vm._v("Earnings")])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "dropdown" }, [
                _c(
                  "a",
                  {
                    staticClass: "dropdown-toggle",
                    attrs: {
                      href: "#",
                      role: "button",
                      "data-toggle": "dropdown",
                      "aria-expanded": "false"
                    }
                  },
                  [_vm._v("...")]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "dropdown-menu dropdown-menu-right" },
                  [
                    _c(
                      "a",
                      { staticClass: "dropdown-item", attrs: { href: "#" } },
                      [
                        _c("i", {
                          staticClass: "fas fa-times text-orange-red"
                        }),
                        _vm._v("Close")
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "a",
                      { staticClass: "dropdown-item", attrs: { href: "#" } },
                      [
                        _c("i", {
                          staticClass: "fas fa-cogs text-dark-pastel-green"
                        }),
                        _vm._v("Edit")
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "a",
                      { staticClass: "dropdown-item", attrs: { href: "#" } },
                      [
                        _c("i", {
                          staticClass: "fas fa-redo-alt text-orange-peel"
                        }),
                        _vm._v("Refresh")
                      ]
                    )
                  ]
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "earning-report" }, [
              _c("div", { staticClass: "item-content" }, [
                _c("div", { staticClass: "single-item pseudo-bg-blue" }, [
                  _c("h4", [_vm._v("Total Collections")]),
                  _vm._v(" "),
                  _c("span", [_vm._v("75,000")])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "single-item pseudo-bg-red" }, [
                  _c("h4", [_vm._v("Fees Collection")]),
                  _vm._v(" "),
                  _c("span", [_vm._v("15,000")])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "dropdown" }, [
                _c(
                  "a",
                  {
                    staticClass: "date-dropdown-toggle",
                    attrs: {
                      href: "#",
                      role: "button",
                      "data-toggle": "dropdown",
                      "aria-expanded": "false"
                    }
                  },
                  [_vm._v("Jan 20, 2019")]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "dropdown-menu dropdown-menu-right" },
                  [
                    _c(
                      "a",
                      { staticClass: "dropdown-item", attrs: { href: "#" } },
                      [_vm._v("Jan 20, 2019")]
                    ),
                    _vm._v(" "),
                    _c(
                      "a",
                      { staticClass: "dropdown-item", attrs: { href: "#" } },
                      [_vm._v("Jan 20, 2021")]
                    ),
                    _vm._v(" "),
                    _c(
                      "a",
                      { staticClass: "dropdown-item", attrs: { href: "#" } },
                      [_vm._v("Jan 20, 2020")]
                    )
                  ]
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "earning-chart-wrap" }, [
              _c("canvas", {
                attrs: { id: "earning-line-chart", width: "660", height: "320" }
              })
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-12 col-xl-4 col-3-xxxl" }, [
        _c("div", { staticClass: "card dashboard-card-two pd-b-20" }, [
          _c("div", { staticClass: "card-body" }, [
            _c("div", { staticClass: "heading-layout1" }, [
              _c("div", { staticClass: "item-title" }, [
                _c("h3", [_vm._v("Expenses")])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "dropdown" }, [
                _c(
                  "a",
                  {
                    staticClass: "dropdown-toggle",
                    attrs: {
                      href: "#",
                      role: "button",
                      "data-toggle": "dropdown",
                      "aria-expanded": "false"
                    }
                  },
                  [_vm._v("...")]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "dropdown-menu dropdown-menu-right" },
                  [
                    _c(
                      "a",
                      { staticClass: "dropdown-item", attrs: { href: "#" } },
                      [
                        _c("i", {
                          staticClass: "fas fa-times text-orange-red"
                        }),
                        _vm._v("Close")
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "a",
                      { staticClass: "dropdown-item", attrs: { href: "#" } },
                      [
                        _c("i", {
                          staticClass: "fas fa-cogs text-dark-pastel-green"
                        }),
                        _vm._v("Edit")
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "a",
                      { staticClass: "dropdown-item", attrs: { href: "#" } },
                      [
                        _c("i", {
                          staticClass: "fas fa-redo-alt text-orange-peel"
                        }),
                        _vm._v("Refresh")
                      ]
                    )
                  ]
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "expense-report" }, [
              _c(
                "div",
                { staticClass: "monthly-expense pseudo-bg-Aquamarine" },
                [
                  _c("div", { staticClass: "expense-date" }, [
                    _vm._v("Jan 2019")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "expense-amount" }, [
                    _c("span", [_vm._v("$")]),
                    _vm._v(" 15,000")
                  ])
                ]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "monthly-expense pseudo-bg-blue" }, [
                _c("div", { staticClass: "expense-date" }, [
                  _vm._v("Feb 2019")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "expense-amount" }, [
                  _c("span", [_vm._v("$")]),
                  _vm._v(" 10,000")
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "monthly-expense pseudo-bg-yellow" }, [
                _c("div", { staticClass: "expense-date" }, [
                  _vm._v("Mar 2019")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "expense-amount" }, [
                  _c("span", [_vm._v("$")]),
                  _vm._v(" 8,000")
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "expense-chart-wrap" }, [
              _c("canvas", {
                attrs: { id: "expense-bar-chart", width: "100", height: "300" }
              })
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-12 col-xl-6 col-3-xxxl" }, [
        _c("div", { staticClass: "card dashboard-card-three pd-b-20" }, [
          _c("div", { staticClass: "card-body" }, [
            _c("div", { staticClass: "heading-layout1" }, [
              _c("div", { staticClass: "item-title" }, [
                _c("h3", [_vm._v("Students")])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "dropdown" }, [
                _c(
                  "a",
                  {
                    staticClass: "dropdown-toggle",
                    attrs: {
                      href: "#",
                      role: "button",
                      "data-toggle": "dropdown",
                      "aria-expanded": "false"
                    }
                  },
                  [_vm._v("...")]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "dropdown-menu dropdown-menu-right" },
                  [
                    _c(
                      "a",
                      { staticClass: "dropdown-item", attrs: { href: "#" } },
                      [
                        _c("i", {
                          staticClass: "fas fa-times text-orange-red"
                        }),
                        _vm._v("Close")
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "a",
                      { staticClass: "dropdown-item", attrs: { href: "#" } },
                      [
                        _c("i", {
                          staticClass: "fas fa-cogs text-dark-pastel-green"
                        }),
                        _vm._v("Edit")
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "a",
                      { staticClass: "dropdown-item", attrs: { href: "#" } },
                      [
                        _c("i", {
                          staticClass: "fas fa-redo-alt text-orange-peel"
                        }),
                        _vm._v("Refresh")
                      ]
                    )
                  ]
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "doughnut-chart-wrap" }, [
              _c("canvas", {
                attrs: {
                  id: "student-doughnut-chart",
                  width: "100",
                  height: "300"
                }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "student-report" }, [
              _c("div", { staticClass: "student-count pseudo-bg-blue" }, [
                _c("h4", { staticClass: "item-title" }, [
                  _vm._v("Female Students")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "item-number" }, [_vm._v("45,000")])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "student-count pseudo-bg-yellow" }, [
                _c("h4", { staticClass: "item-title" }, [
                  _vm._v("Male Students")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "item-number" }, [_vm._v("1,05,000")])
              ])
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-12 col-xl-6 col-4-xxxl" }, [
        _c("div", { staticClass: "card dashboard-card-four pd-b-20" }, [
          _c("div", { staticClass: "card-body" }, [
            _c("div", { staticClass: "heading-layout1" }, [
              _c("div", { staticClass: "item-title" }, [
                _c("h3", [_vm._v("Event Calender")])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "dropdown" }, [
                _c(
                  "a",
                  {
                    staticClass: "dropdown-toggle",
                    attrs: {
                      href: "#",
                      role: "button",
                      "data-toggle": "dropdown",
                      "aria-expanded": "false"
                    }
                  },
                  [_vm._v("...")]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "dropdown-menu dropdown-menu-right" },
                  [
                    _c(
                      "a",
                      { staticClass: "dropdown-item", attrs: { href: "#" } },
                      [
                        _c("i", {
                          staticClass: "fas fa-times text-orange-red"
                        }),
                        _vm._v("Close")
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "a",
                      { staticClass: "dropdown-item", attrs: { href: "#" } },
                      [
                        _c("i", {
                          staticClass: "fas fa-cogs text-dark-pastel-green"
                        }),
                        _vm._v("Edit")
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "a",
                      { staticClass: "dropdown-item", attrs: { href: "#" } },
                      [
                        _c("i", {
                          staticClass: "fas fa-redo-alt text-orange-peel"
                        }),
                        _vm._v("Refresh")
                      ]
                    )
                  ]
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "calender-wrap" }, [
              _c("div", {
                staticClass: "fc-calender",
                attrs: { id: "fc-calender" }
              })
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-lg-6 col-xl-6 col-4-xxxl" }, [
        _c("div", { staticClass: "card dashboard-card-five pd-b-20" }, [
          _c("div", { staticClass: "card-body pd-b-14" }, [
            _c("div", { staticClass: "heading-layout1" }, [
              _c("div", { staticClass: "item-title" }, [
                _c("h3", [_vm._v("Website Traffic")])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "dropdown" }, [
                _c(
                  "a",
                  {
                    staticClass: "dropdown-toggle",
                    attrs: {
                      href: "#",
                      role: "button",
                      "data-toggle": "dropdown",
                      "aria-expanded": "false"
                    }
                  },
                  [_vm._v("...")]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "dropdown-menu dropdown-menu-right" },
                  [
                    _c(
                      "a",
                      { staticClass: "dropdown-item", attrs: { href: "#" } },
                      [
                        _c("i", {
                          staticClass: "fas fa-times text-orange-red"
                        }),
                        _vm._v("Close")
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "a",
                      { staticClass: "dropdown-item", attrs: { href: "#" } },
                      [
                        _c("i", {
                          staticClass: "fas fa-cogs text-dark-pastel-green"
                        }),
                        _vm._v("Edit")
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "a",
                      { staticClass: "dropdown-item", attrs: { href: "#" } },
                      [
                        _c("i", {
                          staticClass: "fas fa-redo-alt text-orange-peel"
                        }),
                        _vm._v("Refresh")
                      ]
                    )
                  ]
                )
              ])
            ]),
            _vm._v(" "),
            _c("h6", { staticClass: "traffic-title" }, [
              _vm._v("Unique Visitors")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "traffic-number" }, [_vm._v("2,590")]),
            _vm._v(" "),
            _c("div", { staticClass: "traffic-bar" }, [
              _c("div", {
                staticClass: "direct",
                attrs: {
                  "data-toggle": "tooltip",
                  "data-placement": "top",
                  title: "Direct"
                }
              }),
              _vm._v(" "),
              _c("div", {
                staticClass: "search",
                attrs: {
                  "data-toggle": "tooltip",
                  "data-placement": "top",
                  title: "Search"
                }
              }),
              _vm._v(" "),
              _c("div", {
                staticClass: "referrals",
                attrs: {
                  "data-toggle": "tooltip",
                  "data-placement": "top",
                  title: "Referrals"
                }
              }),
              _vm._v(" "),
              _c("div", {
                staticClass: "social",
                attrs: {
                  "data-toggle": "tooltip",
                  "data-placement": "top",
                  title: "Social"
                }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "traffic-table table-responsive" }, [
              _c("table", { staticClass: "table" }, [
                _c("tbody", [
                  _c("tr", [
                    _c("td", { staticClass: "t-title pseudo-bg-Aquamarine" }, [
                      _vm._v("Direct")
                    ]),
                    _vm._v(" "),
                    _c("td", [_vm._v("12,890")]),
                    _vm._v(" "),
                    _c("td", [_vm._v("50%")])
                  ]),
                  _vm._v(" "),
                  _c("tr", [
                    _c("td", { staticClass: "t-title pseudo-bg-blue" }, [
                      _vm._v("Search")
                    ]),
                    _vm._v(" "),
                    _c("td", [_vm._v("7,245")]),
                    _vm._v(" "),
                    _c("td", [_vm._v("27%")])
                  ]),
                  _vm._v(" "),
                  _c("tr", [
                    _c("td", { staticClass: "t-title pseudo-bg-yellow" }, [
                      _vm._v("Referrals")
                    ]),
                    _vm._v(" "),
                    _c("td", [_vm._v("4,256")]),
                    _vm._v(" "),
                    _c("td", [_vm._v("8%")])
                  ]),
                  _vm._v(" "),
                  _c("tr", [
                    _c("td", { staticClass: "t-title pseudo-bg-red" }, [
                      _vm._v("Social")
                    ]),
                    _vm._v(" "),
                    _c("td", [_vm._v("500")]),
                    _vm._v(" "),
                    _c("td", [_vm._v("7%")])
                  ])
                ])
              ])
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-lg-6 col-xl-6 col-4-xxxl" }, [
        _c("div", { staticClass: "card dashboard-card-six pd-b-20" }, [
          _c("div", { staticClass: "card-body" }, [
            _c("div", { staticClass: "heading-layout1 mg-b-17" }, [
              _c("div", { staticClass: "item-title" }, [
                _c("h3", [_vm._v("Notice Board")])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "dropdown" }, [
                _c(
                  "a",
                  {
                    staticClass: "dropdown-toggle",
                    attrs: {
                      href: "#",
                      role: "button",
                      "data-toggle": "dropdown",
                      "aria-expanded": "false"
                    }
                  },
                  [_vm._v("...")]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "dropdown-menu dropdown-menu-right" },
                  [
                    _c(
                      "a",
                      { staticClass: "dropdown-item", attrs: { href: "#" } },
                      [
                        _c("i", {
                          staticClass: "fas fa-times text-orange-red"
                        }),
                        _vm._v("Close")
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "a",
                      { staticClass: "dropdown-item", attrs: { href: "#" } },
                      [
                        _c("i", {
                          staticClass: "fas fa-cogs text-dark-pastel-green"
                        }),
                        _vm._v("Edit")
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "a",
                      { staticClass: "dropdown-item", attrs: { href: "#" } },
                      [
                        _c("i", {
                          staticClass: "fas fa-redo-alt text-orange-peel"
                        }),
                        _vm._v("Refresh")
                      ]
                    )
                  ]
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "notice-box-wrap" }, [
              _c("div", { staticClass: "notice-list" }, [
                _c("div", { staticClass: "post-date bg-skyblue" }, [
                  _vm._v("16 June, 2019")
                ]),
                _vm._v(" "),
                _c("h6", { staticClass: "notice-title" }, [
                  _c("a", { attrs: { href: "#" } }, [
                    _vm._v(
                      "Great School manag mene esom text of the\n                                    printing."
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "entry-meta" }, [
                  _vm._v(" Jennyfar Lopez / "),
                  _c("span", [_vm._v("5 min ago")])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "notice-list" }, [
                _c("div", { staticClass: "post-date bg-yellow" }, [
                  _vm._v("16 June, 2019")
                ]),
                _vm._v(" "),
                _c("h6", { staticClass: "notice-title" }, [
                  _c("a", { attrs: { href: "#" } }, [
                    _vm._v("Great School manag printing.")
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "entry-meta" }, [
                  _vm._v(" Jennyfar Lopez / "),
                  _c("span", [_vm._v("5 min ago")])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "notice-list" }, [
                _c("div", { staticClass: "post-date bg-pink" }, [
                  _vm._v("16 June, 2019")
                ]),
                _vm._v(" "),
                _c("h6", { staticClass: "notice-title" }, [
                  _c("a", { attrs: { href: "#" } }, [
                    _vm._v("Great School manag meneesom.")
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "entry-meta" }, [
                  _vm._v(" Jennyfar Lopez / "),
                  _c("span", [_vm._v("5 min ago")])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "notice-list" }, [
                _c("div", { staticClass: "post-date bg-skyblue" }, [
                  _vm._v("16 June, 2019")
                ]),
                _vm._v(" "),
                _c("h6", { staticClass: "notice-title" }, [
                  _c("a", { attrs: { href: "#" } }, [
                    _vm._v(
                      "Great School manag mene esom text of the\n                                    printing."
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "entry-meta" }, [
                  _vm._v(" Jennyfar Lopez / "),
                  _c("span", [_vm._v("5 min ago")])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "notice-list" }, [
                _c("div", { staticClass: "post-date bg-yellow" }, [
                  _vm._v("16 June, 2019")
                ]),
                _vm._v(" "),
                _c("h6", { staticClass: "notice-title" }, [
                  _c("a", { attrs: { href: "#" } }, [
                    _vm._v("Great School manag printing.")
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "entry-meta" }, [
                  _vm._v(" Jennyfar Lopez / "),
                  _c("span", [_vm._v("5 min ago")])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "notice-list" }, [
                _c("div", { staticClass: "post-date bg-pink" }, [
                  _vm._v("16 June, 2019")
                ]),
                _vm._v(" "),
                _c("h6", { staticClass: "notice-title" }, [
                  _c("a", { attrs: { href: "#" } }, [
                    _vm._v("Great School manag meneesom.")
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "entry-meta" }, [
                  _vm._v(" Jennyfar Lopez / "),
                  _c("span", [_vm._v("5 min ago")])
                ])
              ])
            ])
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Dashboard.vue":
/*!***********************************************!*\
  !*** ./resources/js/components/Dashboard.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Dashboard_vue_vue_type_template_id_040e2ab9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=template&id=040e2ab9& */ "./resources/js/components/Dashboard.vue?vue&type=template&id=040e2ab9&");
/* harmony import */ var _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=script&lang=js& */ "./resources/js/components/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Dashboard_vue_vue_type_template_id_040e2ab9___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Dashboard_vue_vue_type_template_id_040e2ab9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Dashboard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Dashboard.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/components/Dashboard.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Dashboard.vue?vue&type=template&id=040e2ab9&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/Dashboard.vue?vue&type=template&id=040e2ab9& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_040e2ab9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=template&id=040e2ab9& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Dashboard.vue?vue&type=template&id=040e2ab9&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_040e2ab9___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_040e2ab9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);