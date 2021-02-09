(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./resources/js/api/script.js":
/*!************************************!*\
  !*** ./resources/js/api/script.js ***!
  \************************************/
/*! exports provided: default, view_news, news_info, view_all_notices, notice_info, view_events, event_info, view_gallery, addStudent, studentInfo, updateStudentData, view_all_states, view_certificate, addUserCertificate, view_all_classes, view_custom_fields, pay_student_fees, view_fee_setting, update_fee_setting, fetchDepartments, fetchClasses, fetchSections, fetchSubjects, fetchStates, fetchCities, fetchReligions, add_tc, edit_tc, view_tc, delete_tc, show_tc, multiple_delete_tc, add_sch_certificate, edit_sch_certificate, view_sch_certificate, delete_sch_certificate, show_sch_certificate, multiple_delete_sch_certificate, add_exam_type, edit_exam_type, view_exam_type, delete_exam_type, show_exam_type, multiple_delete_exam_type, view_web_exam_type, add_admit_card, edit_admit_card, view_admit_card, delete_admit_card, show_admit_card, multiple_delete_admit_card, view_admit_card_subjects, add_marksheet, view_marksheet, search_admit_card, add_pay_grade, edit_pay_grade, view_pay_grade, delete_pay_grade, show_pay_grade, multiple_delete_pay_grade, view_users, view_employee_info, view_teachers, add_employe_promotion, edit_employe_promotion, view_employe_promotion, delete_employe_promotion, show_employe_promotion, multiple_delete_employe_promotion, view_all_payroll_masters, view_max_salary_allowance, add_allowance, edit_allowance, view_allowance, delete_allowance, show_allowance, multiple_delete_allowance, view_max_salary_deduction, add_deduction, edit_deduction, view_deduction, delete_deduction, show_deduction, multiple_delete_deduction, add_salary_slip, edit_salary_slip, view_salary_slip, delete_salary_slip, show_salary_slip, multiple_delete_salary_slip, add_online_class, edit_online_class, view_online_class, delete_online_class, show_online_class, multiple_delete_online_class, view_gst_rates, add_item, edit_item, view_item, delete_item, show_item, multiple_delete_item, add_supplier, edit_supplier, view_supplier, delete_supplier, show_supplier, multiple_delete_supplier, add_purchase, edit_purchase, view_purchase, delete_purchase, show_purchase, multiple_delete_purchase, add_sale, edit_sale, view_sale, delete_sale, show_sale, multiple_delete_sale, add_receipt, edit_receipt, view_receipt, delete_receipt, show_receipt, multiple_delete_receipt, add_payment, edit_payment, view_payment, delete_payment, show_payment, multiple_delete_payment, add_debit_note, edit_debit_note, view_debit_note, delete_debit_note, show_debit_note, multiple_delete_debit_note, add_credit_note, edit_credit_note, view_credit_note, delete_credit_note, show_credit_note, multiple_delete_credit_note, view_stock, day_book, cash_book, bank_book, ledger, add_question, edit_question, view_question, delete_question, show_question, multiple_delete_question, add_instruction, edit_instruction, view_instruction, delete_instruction, show_instruction, multiple_delete_instruction, add_test, edit_test, view_test, delete_test, show_test, multiple_delete_test, view_country, view_state, view_city */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "view_news", function() { return view_news; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "news_info", function() { return news_info; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "view_all_notices", function() { return view_all_notices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notice_info", function() { return notice_info; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "view_events", function() { return view_events; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "event_info", function() { return event_info; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "view_gallery", function() { return view_gallery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addStudent", function() { return addStudent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "studentInfo", function() { return studentInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateStudentData", function() { return updateStudentData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "view_all_states", function() { return view_all_states; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "view_certificate", function() { return view_certificate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addUserCertificate", function() { return addUserCertificate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "view_all_classes", function() { return view_all_classes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "view_custom_fields", function() { return view_custom_fields; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pay_student_fees", function() { return pay_student_fees; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "view_fee_setting", function() { return view_fee_setting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "update_fee_setting", function() { return update_fee_setting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchDepartments", function() { return fetchDepartments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchClasses", function() { return fetchClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchSections", function() { return fetchSections; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchSubjects", function() { return fetchSubjects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchStates", function() { return fetchStates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchCities", function() { return fetchCities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchReligions", function() { return fetchReligions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add_tc", function() { return add_tc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "edit_tc", function() { return edit_tc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "view_tc", function() { return view_tc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "delete_tc", function() { return delete_tc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "show_tc", function() { return show_tc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiple_delete_tc", function() { return multiple_delete_tc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add_sch_certificate", function() { return add_sch_certificate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "edit_sch_certificate", function() { return edit_sch_certificate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "view_sch_certificate", function() { return view_sch_certificate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "delete_sch_certificate", function() { return delete_sch_certificate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "show_sch_certificate", function() { return show_sch_certificate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiple_delete_sch_certificate", function() { return multiple_delete_sch_certificate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add_exam_type", function() { return add_exam_type; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "edit_exam_type", function() { return edit_exam_type; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "view_exam_type", function() { return view_exam_type; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "delete_exam_type", function() { return delete_exam_type; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "show_exam_type", function() { return show_exam_type; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiple_delete_exam_type", function() { return multiple_delete_exam_type; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "view_web_exam_type", function() { return view_web_exam_type; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add_admit_card", function() { return add_admit_card; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "edit_admit_card", function() { return edit_admit_card; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "view_admit_card", function() { return view_admit_card; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "delete_admit_card", function() { return delete_admit_card; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "show_admit_card", function() { return show_admit_card; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiple_delete_admit_card", function() { return multiple_delete_admit_card; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "view_admit_card_subjects", function() { return view_admit_card_subjects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add_marksheet", function() { return add_marksheet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "view_marksheet", function() { return view_marksheet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "search_admit_card", function() { return search_admit_card; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add_pay_grade", function() { return add_pay_grade; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "edit_pay_grade", function() { return edit_pay_grade; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "view_pay_grade", function() { return view_pay_grade; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "delete_pay_grade", function() { return delete_pay_grade; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "show_pay_grade", function() { return show_pay_grade; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiple_delete_pay_grade", function() { return multiple_delete_pay_grade; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "view_users", function() { return view_users; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "view_employee_info", function() { return view_employee_info; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "view_teachers", function() { return view_teachers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add_employe_promotion", function() { return add_employe_promotion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "edit_employe_promotion", function() { return edit_employe_promotion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "view_employe_promotion", function() { return view_employe_promotion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "delete_employe_promotion", function() { return delete_employe_promotion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "show_employe_promotion", function() { return show_employe_promotion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiple_delete_employe_promotion", function() { return multiple_delete_employe_promotion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "view_all_payroll_masters", function() { return view_all_payroll_masters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "view_max_salary_allowance", function() { return view_max_salary_allowance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add_allowance", function() { return add_allowance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "edit_allowance", function() { return edit_allowance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "view_allowance", function() { return view_allowance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "delete_allowance", function() { return delete_allowance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "show_allowance", function() { return show_allowance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiple_delete_allowance", function() { return multiple_delete_allowance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "view_max_salary_deduction", function() { return view_max_salary_deduction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add_deduction", function() { return add_deduction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "edit_deduction", function() { return edit_deduction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "view_deduction", function() { return view_deduction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "delete_deduction", function() { return delete_deduction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "show_deduction", function() { return show_deduction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiple_delete_deduction", function() { return multiple_delete_deduction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add_salary_slip", function() { return add_salary_slip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "edit_salary_slip", function() { return edit_salary_slip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "view_salary_slip", function() { return view_salary_slip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "delete_salary_slip", function() { return delete_salary_slip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "show_salary_slip", function() { return show_salary_slip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiple_delete_salary_slip", function() { return multiple_delete_salary_slip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add_online_class", function() { return add_online_class; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "edit_online_class", function() { return edit_online_class; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "view_online_class", function() { return view_online_class; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "delete_online_class", function() { return delete_online_class; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "show_online_class", function() { return show_online_class; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiple_delete_online_class", function() { return multiple_delete_online_class; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "view_gst_rates", function() { return view_gst_rates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add_item", function() { return add_item; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "edit_item", function() { return edit_item; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "view_item", function() { return view_item; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "delete_item", function() { return delete_item; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "show_item", function() { return show_item; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiple_delete_item", function() { return multiple_delete_item; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add_supplier", function() { return add_supplier; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "edit_supplier", function() { return edit_supplier; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "view_supplier", function() { return view_supplier; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "delete_supplier", function() { return delete_supplier; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "show_supplier", function() { return show_supplier; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiple_delete_supplier", function() { return multiple_delete_supplier; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add_purchase", function() { return add_purchase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "edit_purchase", function() { return edit_purchase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "view_purchase", function() { return view_purchase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "delete_purchase", function() { return delete_purchase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "show_purchase", function() { return show_purchase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiple_delete_purchase", function() { return multiple_delete_purchase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add_sale", function() { return add_sale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "edit_sale", function() { return edit_sale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "view_sale", function() { return view_sale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "delete_sale", function() { return delete_sale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "show_sale", function() { return show_sale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiple_delete_sale", function() { return multiple_delete_sale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add_receipt", function() { return add_receipt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "edit_receipt", function() { return edit_receipt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "view_receipt", function() { return view_receipt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "delete_receipt", function() { return delete_receipt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "show_receipt", function() { return show_receipt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiple_delete_receipt", function() { return multiple_delete_receipt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add_payment", function() { return add_payment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "edit_payment", function() { return edit_payment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "view_payment", function() { return view_payment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "delete_payment", function() { return delete_payment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "show_payment", function() { return show_payment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiple_delete_payment", function() { return multiple_delete_payment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add_debit_note", function() { return add_debit_note; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "edit_debit_note", function() { return edit_debit_note; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "view_debit_note", function() { return view_debit_note; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "delete_debit_note", function() { return delete_debit_note; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "show_debit_note", function() { return show_debit_note; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiple_delete_debit_note", function() { return multiple_delete_debit_note; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add_credit_note", function() { return add_credit_note; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "edit_credit_note", function() { return edit_credit_note; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "view_credit_note", function() { return view_credit_note; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "delete_credit_note", function() { return delete_credit_note; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "show_credit_note", function() { return show_credit_note; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiple_delete_credit_note", function() { return multiple_delete_credit_note; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "view_stock", function() { return view_stock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "day_book", function() { return day_book; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cash_book", function() { return cash_book; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bank_book", function() { return bank_book; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ledger", function() { return ledger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add_question", function() { return add_question; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "edit_question", function() { return edit_question; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "view_question", function() { return view_question; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "delete_question", function() { return delete_question; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "show_question", function() { return show_question; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiple_delete_question", function() { return multiple_delete_question; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add_instruction", function() { return add_instruction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "edit_instruction", function() { return edit_instruction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "view_instruction", function() { return view_instruction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "delete_instruction", function() { return delete_instruction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "show_instruction", function() { return show_instruction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiple_delete_instruction", function() { return multiple_delete_instruction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add_test", function() { return add_test; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "edit_test", function() { return edit_test; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "view_test", function() { return view_test; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "delete_test", function() { return delete_test; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "show_test", function() { return show_test; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiple_delete_test", function() { return multiple_delete_test; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "view_country", function() { return view_country; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "view_state", function() { return view_state; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "view_city", function() { return view_city; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var instance = axios.create({
  baseURL: '/school-management/api/',
  json: true
});
/* harmony default export */ __webpack_exports__["default"] = ({
  execute: function execute(method, resource) {
    var _arguments = arguments;
    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var data, auth, files, headers, token;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              data = _arguments.length > 2 && _arguments[2] !== undefined ? _arguments[2] : {};
              auth = _arguments.length > 3 && _arguments[3] !== undefined ? _arguments[3] : true;
              files = _arguments.length > 4 && _arguments[4] !== undefined ? _arguments[4] : false;
              headers = {
                'Accept': 'application/json',
                'Authorization': null
              };

              if (auth) {
                token = localStorage.getItem('token');
                headers.Authorization = 'Bearer ' + token;
              }

              if (files) {
                headers['Content-Type'] = 'multipart/form-data';
              }

              return _context.abrupt("return", instance({
                method: method,
                url: resource,
                data: data,
                headers: headers
              }));

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },

  /**
   * Session APIs
   */
  getAllSessions: function getAllSessions() {
    var query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var auth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    return this.execute('get', "session/all/?".concat(query), null, auth);
  },

  /**
   * Admission APIs
   */
  addAdmissionEnquiry: function addAdmissionEnquiry(data) {
    var auth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    return this.execute('post', 'admission-enquiry', data, auth);
  },
  admissionEnquiry: function admissionEnquiry(page, search) {
    var auth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    return this.execute('get', 'admission-enquiry/?page=' + page + '&s=' + search, null, auth);
  },
  deleteAdmissionEnquiry: function deleteAdmissionEnquiry(data) {
    var auth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    return this.execute('post', 'admission-enquiry/remove', data, auth);
  },

  /**
   * User APIs
   */
  getUsers: function getUsers(page, search, role) {
    var custom_field = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    // search.custom_field = JSON.stringify(search.custom_field)
    var searchQuery = new URLSearchParams(search).toString(); // let searchQuery2    = new URLSearchParams(custom_field).toString()

    searchQuery += "&page=".concat(page, "&role=").concat(role);

    for (var cf in custom_field) {
      searchQuery += "&custom_field%5B".concat(cf, "%5D=").concat(custom_field[cf]);
    }

    return this.execute('get', "user/?".concat(searchQuery));
  },
  deleteUsers: function deleteUsers(data) {
    return this.execute('post', 'user/remove', data);
  },
  userInfo: function userInfo(id) {
    return this.execute('get', "user/".concat(id));
  },

  /**
   * Students APIs
   */
  getStudents: function getStudents() {
    return this.execute('get', 'student/all');
  },
  studentInfo: function studentInfo(id) {
    return this.execute('get', "student/".concat(id));
  },
  studentFees: function studentFees(id) {
    return this.execute('get', "student/fees-info/".concat(id));
  },

  /**
   * Events APIs
   */
  addEvent: function addEvent(data) {
    return this.execute('post', 'event', data);
  },
  updateEvent: function updateEvent(id, data) {
    return this.execute('post', "event/".concat(id), data);
  },
  getEvents: function getEvents(page, search) {
    return this.execute('get', "event/?page=".concat(page, "&s=").concat(search));
  },
  getAllEvents: function getAllEvents() {
    return this.execute('get', "event/all");
  },
  eventInfo: function eventInfo(id) {
    return this.execute('get', "event/".concat(id));
  },
  deleteEvents: function deleteEvents(data) {
    return this.execute('post', 'event/remove', data);
  },

  /**
   * News APIs
   */
  addNews: function addNews(data) {
    return this.execute('post', 'news', data);
  },
  updateNews: function updateNews(id, data) {
    return this.execute('post', "news/".concat(id), data);
  },
  getNews: function getNews(page, search) {
    return this.execute('get', "news/?page=".concat(page, "&s=").concat(search));
  },
  getAllNews: function getAllNews() {
    return this.execute('get', "news/all");
  },
  newsInfo: function newsInfo(id) {
    return this.execute('get', "news/".concat(id));
  },
  deleteNews: function deleteNews(data) {
    return this.execute('post', 'news/remove', data);
  },

  /**
   * Notice APIs
   */
  addNotice: function addNotice(data) {
    return this.execute('post', 'notice', data, true, true);
  },
  updateNotice: function updateNotice(id, data) {
    return this.execute('post', "notice/".concat(id), data);
  },
  getNotice: function getNotice(page, search) {
    return this.execute('get', "notice/?page=".concat(page, "&s=").concat(search));
  },
  getAllNotice: function getAllNotice() {
    return this.execute('get', "notice/all");
  },
  noticeInfo: function noticeInfo(id) {
    return this.execute('get', "notice/".concat(id));
  },
  deleteNotice: function deleteNotice(data) {
    return this.execute('post', 'notice/remove', data);
  },

  /**
   * Gallery APIs
   */
  addGallery: function addGallery(data) {
    return this.execute('post', 'gallery', data);
  },
  updateGallery: function updateGallery(id, data) {
    return this.execute('post', "gallery/".concat(id), data);
  },
  getGallery: function getGallery(page, search) {
    return this.execute('get', "gallery/?page=".concat(page, "&s=").concat(search));
  },
  getAllGallery: function getAllGallery() {
    return this.execute('get', "gallery/all");
  },
  galleryInfo: function galleryInfo(id) {
    return this.execute('get', "gallery/".concat(id));
  },
  deleteGallery: function deleteGallery(data) {
    return this.execute('post', 'gallery/remove', data);
  },

  /**
   * Holiday APIs
   */
  addHoliday: function addHoliday(data) {
    return this.execute('post', 'holiday', data);
  },
  updateHoliday: function updateHoliday(id, data) {
    return this.execute('post', "holiday/".concat(id), data);
  },
  getHolidays: function getHolidays(page, search) {
    return this.execute('get', "holiday/?page=".concat(page, "&s=").concat(search));
  },
  getAllHolidays: function getAllHolidays() {
    return this.execute('get', "holiday/all");
  },
  holidayInfo: function holidayInfo(id) {
    return this.execute('get', "holiday/".concat(id));
  },
  deleteHolidays: function deleteHolidays(data) {
    return this.execute('post', 'holiday/remove', data);
  },

  /**
   * Templates
   */
  getAllPageTemplate: function getAllPageTemplate() {
    return this.execute('get', 'page-template/all');
  },

  /**
   * Page
   */
  addPage: function addPage(data) {
    return this.execute('post', 'page', data);
  },
  updatePage: function updatePage(id, data) {
    return this.execute('post', "page/".concat(id), data);
  },
  PageDetails: function PageDetails() {
    var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    return this.execute('get', "page/".concat(id));
  },
  getPages: function getPages(page, search) {
    return this.execute('get', "page/?s=".concat(search, "&page=").concat(page));
  },
  getAllPages: function getAllPages() {
    return this.execute('get', 'page/all');
  },

  /**
   * Menu
   */
  fetchMenu: function fetchMenu() {
    return this.execute('get', "menu");
  },
  insertMenu: function insertMenu(data) {
    return this.execute('post', 'menu', data);
  },
  deleteMenu: function deleteMenu(id) {
    return this.execute('DELETE', "menu/".concat(id));
  },

  /**
   * Sections
   */
  fetchAllSections: function fetchAllSections() {
    return this.execute('get', "section/all");
  },

  /**
   * Subjects
   */
  fetchSubjectBySection: function fetchSubjectBySection(section_id) {
    return this.execute('get', "subject/by-section/".concat(section_id));
  },

  /**
   * Assignments
   */
  addAssignment: function addAssignment(data) {
    return this.execute('post', 'assignment', data);
  },
  AssignmentDetails: function AssignmentDetails(id) {
    return this.execute('get', "assignment/".concat(id));
  },
  fetchAssignments: function fetchAssignments(page, search) {
    return this.execute('get', "assignment/?s=".concat(search, "&page=").concat(page));
  },
  fetchAllotStudents: function fetchAllotStudents(id) {
    return this.execute('get', "assignment-students/".concat(id));
  },
  addAssignmentStudent: function addAssignmentStudent(id, user_ids) {
    return this.execute('post', "assignment-students/".concat(id), {
      'user_ids': user_ids,
      'action': 'add'
    });
  },
  deleteAssignmentStudent: function deleteAssignmentStudent(id, user_ids) {
    return this.execute('post', "assignment-students/".concat(id), {
      'user_ids': user_ids,
      'action': 'delete'
    });
  },

  /**
   * Website data
   */
  fetchFrontMenues: function fetchFrontMenues() {
    return this.execute('get', 'web-menu', {}, false);
  },
  fetchPageInfo: function fetchPageInfo(slug) {
    return this.execute('get', "web-page/".concat(slug), {}, false);
  }
});

var execute = function execute(method, resource) {
  var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var auth = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  var headers = {
    'Accept': 'application/json',
    'Authorization': null
  };

  if (auth) {
    var token = localStorage.getItem('token');
    headers.Authorization = 'Bearer ' + token;
  }

  return instance({
    method: method,
    url: resource,
    data: data,
    headers: headers
  });
};

var view_news = function view_news(page) {
  return execute('get', "web-news/?page=".concat(page), null, false);
};
var news_info = function news_info(slug) {
  return execute('get', "web-news/".concat(slug), null, false);
};
var view_all_notices = function view_all_notices() {
  return execute('get', "web-notice", null, false);
};
var notice_info = function notice_info(slug) {
  return execute('get', "web-notice/".concat(slug), null, false);
};
var view_events = function view_events(page) {
  return execute('get', "web-event/?page=".concat(page), null, false);
};
var event_info = function event_info(slug) {
  return execute('get', "web-event/".concat(slug), null, false);
};
var view_gallery = function view_gallery(type, page) {
  return execute('get', "web-gallery/?page=".concat(page, "&type=").concat(type, "&limit=16"), null, false);
};
var addStudent = function addStudent(data) {
  return execute('post', 'student', data);
};
var studentInfo = function studentInfo(id) {
  return execute('get', "student/".concat(id));
};
var updateStudentData = function updateStudentData(id, data) {
  return execute('post', "student/".concat(id), data);
};
var view_all_states = function view_all_states() {
  return execute('get', 'state/all');
};
var view_certificate = function view_certificate(role) {
  return execute('get', "certificate/?role=".concat(role));
};
var addUserCertificate = function addUserCertificate(data) {
  return execute('post', 'user-certificate', data, true, true);
};
var view_all_classes = function view_all_classes(query) {
  return execute('get', "get-all-classes/?".concat(query));
};
var view_custom_fields = function view_custom_fields(role) {
  var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  return execute('get', "custom-field/?role=".concat(role, "&").concat(query));
};
var pay_student_fees = function pay_student_fees(data) {
  return execute('post', "fee-payment", data);
};
var view_fee_setting = function view_fee_setting() {
  return execute('get', 'fee-setting');
};
var update_fee_setting = function update_fee_setting(id, data) {
  return execute('put', "fee-setting/".concat(id), data);
};
/**
 * School Resources
 * 1. Department 2. Class 3. Section
 */

var fetchDepartments = function fetchDepartments() {
  return execute('get', 'department/all');
};
var fetchClasses = function fetchClasses(deptId) {
  return execute('get', "class/all/?department_id=".concat(deptId));
};
var fetchSections = function fetchSections(classId) {
  return execute('get', "section/all/?class_id=".concat(classId));
};
var fetchSubjects = function fetchSubjects(classId) {
  return execute('get', "subject/?type=all&class_id=".concat(classId));
};
/**
 * Location
 * 1. State 2. City
 */

var fetchStates = function fetchStates() {
  return execute('get', 'state');
};
var fetchCities = function fetchCities(state_id) {
  return execute('get', "city/?state_id=".concat(state_id));
};
/**
 * Religions
 */

var fetchReligions = function fetchReligions() {
  return execute('get', 'religion');
};
/**
 * Transfer Certificate
 * @param {*} data 
 */

var add_tc = function add_tc(data) {
  return execute('post', "tc", data);
};
var edit_tc = function edit_tc(id, data) {
  return execute('put', "tc/".concat(id), data);
};
var view_tc = function view_tc() {
  var query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return execute('get', "tc/?".concat(query));
};
var delete_tc = function delete_tc(id) {
  return execute('delete', "tc/".concat(id));
};
var show_tc = function show_tc(id) {
  return execute('get', "tc/".concat(id));
};
var multiple_delete_tc = function multiple_delete_tc(ids) {
  return execute('post', "delete-tc", ids);
};
/**
 * Transfer Certificate
 * @param {*} data 
 */

var add_sch_certificate = function add_sch_certificate(data) {
  return execute('post', "school-certificate", data);
};
var edit_sch_certificate = function edit_sch_certificate(id, data) {
  return execute('put', "school-certificate/".concat(id), data);
};
var view_sch_certificate = function view_sch_certificate() {
  var query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return execute('get', "school-certificate/?".concat(query));
};
var delete_sch_certificate = function delete_sch_certificate(id) {
  return execute('delete', "school-certificate/".concat(id));
};
var show_sch_certificate = function show_sch_certificate(id) {
  return execute('get', "school-certificate/".concat(id));
};
var multiple_delete_sch_certificate = function multiple_delete_sch_certificate(ids) {
  return execute('post', "delete-school-certificate", ids);
};
/**
 * Exam Type
 * @param {*} data 
 */

var add_exam_type = function add_exam_type(data) {
  return execute('post', "exam-type", data);
};
var edit_exam_type = function edit_exam_type(id, data) {
  return execute('put', "exam-type/".concat(id), data);
};
var view_exam_type = function view_exam_type() {
  var query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return execute('get', "exam-type/?".concat(query));
};
var delete_exam_type = function delete_exam_type(id) {
  return execute('delete', "exam-type/".concat(id));
};
var show_exam_type = function show_exam_type(id) {
  return execute('get', "exam-type/".concat(id));
};
var multiple_delete_exam_type = function multiple_delete_exam_type(ids) {
  return execute('post', "delete-exam-type", ids);
};
var view_web_exam_type = function view_web_exam_type() {
  var query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return execute('get', "web-exam-type/?".concat(query), null, false);
};
/**
 * Admit Card
 * @param {*} data 
 */

var add_admit_card = function add_admit_card(data) {
  return execute('post', "admit-card", data);
};
var edit_admit_card = function edit_admit_card(id, data) {
  return execute('put', "admit-card/".concat(id), data);
};
var view_admit_card = function view_admit_card() {
  var query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return execute('get', "admit-card/?".concat(query));
};
var delete_admit_card = function delete_admit_card(id) {
  return execute('delete', "admit-card/".concat(id));
};
var show_admit_card = function show_admit_card(id) {
  return execute('get', "admit-card/".concat(id));
};
var multiple_delete_admit_card = function multiple_delete_admit_card(ids) {
  return execute('post', "delete-admit-card", ids);
};
var view_admit_card_subjects = function view_admit_card_subjects(exam_type_id, section_id) {
  return execute('get', "admit-card-subject/".concat(exam_type_id, "/").concat(section_id));
};
var add_marksheet = function add_marksheet(data) {
  return execute('post', "marksheet", data);
};
var view_marksheet = function view_marksheet() {
  var query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return execute('get', "marksheet/?".concat(query));
};
var search_admit_card = function search_admit_card(data) {
  return execute('post', "search-admit-card", data, false);
};
/**
 * Payroll System - Pay Grade
 * @param {*} data 
 */

var add_pay_grade = function add_pay_grade(data) {
  return execute('post', "pay-grade", data);
};
var edit_pay_grade = function edit_pay_grade(id, data) {
  return execute('put', "pay-grade/".concat(id), data);
};
var view_pay_grade = function view_pay_grade() {
  var query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return execute('get', "pay-grade/?".concat(query));
};
var delete_pay_grade = function delete_pay_grade(id) {
  return execute('delete', "pay-grade/".concat(id));
};
var show_pay_grade = function show_pay_grade(id) {
  return execute('get', "pay-grade/".concat(id));
};
var multiple_delete_pay_grade = function multiple_delete_pay_grade(ids) {
  return execute('post', "pay-grade/remove", ids);
};
var view_users = function view_users() {
  var query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return execute('get', "user/?".concat(query));
};
var view_employee_info = function view_employee_info(id) {
  var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  return execute('get', "employee-info/".concat(id, "/?").concat(query));
};
var view_teachers = function view_teachers(class_id, subject_id) {
  return execute('get', "teacher/?class_id=".concat(class_id, "&subject_id=").concat(subject_id));
};
/**
 * Payroll System - Promotion / Increament
 * @param {*} data 
 */

var add_employe_promotion = function add_employe_promotion(data) {
  return execute('post', "employee-promotion", data);
};
var edit_employe_promotion = function edit_employe_promotion(id, data) {
  return execute('put', "employee-promotion/".concat(id), data);
};
var view_employe_promotion = function view_employe_promotion() {
  var query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return execute('get', "employee-promotion/?".concat(query));
};
var delete_employe_promotion = function delete_employe_promotion(id) {
  return execute('delete', "employee-promotion/".concat(id));
};
var show_employe_promotion = function show_employe_promotion(id) {
  return execute('get', "employee-promotion/".concat(id));
};
var multiple_delete_employe_promotion = function multiple_delete_employe_promotion(ids) {
  return execute('post', "employee-promotion/remove", ids);
};
var view_all_payroll_masters = function view_all_payroll_masters(type) {
  return execute('get', "payroll-master/".concat(type));
};
/**
 * Payroll System - Allowance
 * @param {*} data 
 */

var view_max_salary_allowance = function view_max_salary_allowance(gender, name) {
  return execute('get', "max-allowance/".concat(gender, "/").concat(name));
};
var add_allowance = function add_allowance(data) {
  return execute('post', "allowance", data);
};
var edit_allowance = function edit_allowance(id, data) {
  return execute('put', "allowance/".concat(id), data);
};
var view_allowance = function view_allowance() {
  var query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return execute('get', "allowance/?".concat(query));
};
var delete_allowance = function delete_allowance(id) {
  return execute('delete', "allowance/".concat(id));
};
var show_allowance = function show_allowance(id) {
  return execute('get', "allowance/".concat(id));
};
var multiple_delete_allowance = function multiple_delete_allowance(ids) {
  return execute('post', "allowance/remove", ids);
};
/**
 * Payroll System - Deduction
 * @param {*} data 
 */

var view_max_salary_deduction = function view_max_salary_deduction(gender, name) {
  return execute('get', "max-deduction/".concat(gender, "/").concat(name));
};
var add_deduction = function add_deduction(data) {
  return execute('post', "deduction", data);
};
var edit_deduction = function edit_deduction(id, data) {
  return execute('put', "deduction/".concat(id), data);
};
var view_deduction = function view_deduction() {
  var query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return execute('get', "deduction/?".concat(query));
};
var delete_deduction = function delete_deduction(id) {
  return execute('delete', "deduction/".concat(id));
};
var show_deduction = function show_deduction(id) {
  return execute('get', "deduction/".concat(id));
};
var multiple_delete_deduction = function multiple_delete_deduction(ids) {
  return execute('post', "deduction/remove", ids);
};
/**
 * Payroll System - Salary Slip
 * @param {*} data 
 */

var add_salary_slip = function add_salary_slip(data) {
  return execute('post', "salary-slip", data);
};
var edit_salary_slip = function edit_salary_slip(id, data) {
  return execute('put', "salary-slip/".concat(id), data);
};
var view_salary_slip = function view_salary_slip() {
  var query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return execute('get', "salary-slip/?".concat(query));
};
var delete_salary_slip = function delete_salary_slip(id) {
  return execute('delete', "salary-slip/".concat(id));
};
var show_salary_slip = function show_salary_slip(id) {
  return execute('get', "salary-slip/".concat(id));
};
var multiple_delete_salary_slip = function multiple_delete_salary_slip(ids) {
  return execute('post', "salary-slip/remove", ids);
};
/**
 * Payroll System - Salary Slip
 * @param {*} data 
 */

var add_online_class = function add_online_class(data) {
  return execute('post', "online-class", data);
};
var edit_online_class = function edit_online_class(id, data) {
  return execute('put', "online-class/".concat(id), data);
};
var view_online_class = function view_online_class() {
  var query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return execute('get', "online-class/?".concat(query));
};
var delete_online_class = function delete_online_class(id) {
  return execute('delete', "online-class/".concat(id));
};
var show_online_class = function show_online_class(id) {
  return execute('get', "online-class/".concat(id));
};
var multiple_delete_online_class = function multiple_delete_online_class(ids) {
  return execute('post', "online-class/remove", ids);
};
/**
 * Inventory - Item
 * @param {*} data 
 */

var view_gst_rates = function view_gst_rates() {
  return execute('get', 'gst-rate');
};
var add_item = function add_item(data) {
  return execute('post', "item", data);
};
var edit_item = function edit_item(id, data) {
  return execute('put', "item/".concat(id), data);
};
var view_item = function view_item() {
  var query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return execute('get', "item/?".concat(query));
};
var delete_item = function delete_item(id) {
  return execute('delete', "item/".concat(id));
};
var show_item = function show_item(id) {
  return execute('get', "item/".concat(id));
};
var multiple_delete_item = function multiple_delete_item(ids) {
  return execute('post', "item/remove", ids);
};
/**
 * Inventory - Supplier
 * @param {*} data 
 */

var add_supplier = function add_supplier(data) {
  return execute('post', "supplier", data);
};
var edit_supplier = function edit_supplier(id, data) {
  return execute('put', "supplier/".concat(id), data);
};
var view_supplier = function view_supplier() {
  var query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return execute('get', "supplier/?".concat(query));
};
var delete_supplier = function delete_supplier(id) {
  return execute('delete', "supplier/".concat(id));
};
var show_supplier = function show_supplier(id) {
  return execute('get', "supplier/".concat(id));
};
var multiple_delete_supplier = function multiple_delete_supplier(ids) {
  return execute('post', "supplier/remove", ids);
};
/**
 * Inventory - Purchase
 * @param {*} data 
 */

var add_purchase = function add_purchase(data) {
  return execute('post', "purchase", data);
};
var edit_purchase = function edit_purchase(id, data) {
  return execute('put', "purchase/".concat(id), data);
};
var view_purchase = function view_purchase() {
  var query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return execute('get', "purchase/?".concat(query));
};
var delete_purchase = function delete_purchase(id) {
  return execute('delete', "purchase/".concat(id));
};
var show_purchase = function show_purchase(id) {
  return execute('get', "purchase/".concat(id));
};
var multiple_delete_purchase = function multiple_delete_purchase(ids) {
  return execute('post', "purchase/remove", ids);
};
/**
 * Inventory - Sale
 * @param {*} data 
 */

var add_sale = function add_sale(data) {
  return execute('post', "sale", data);
};
var edit_sale = function edit_sale(id, data) {
  return execute('put', "sale/".concat(id), data);
};
var view_sale = function view_sale() {
  var query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return execute('get', "sale/?".concat(query));
};
var delete_sale = function delete_sale(id) {
  return execute('delete', "sale/".concat(id));
};
var show_sale = function show_sale(id) {
  return execute('get', "sale/".concat(id));
};
var multiple_delete_sale = function multiple_delete_sale(ids) {
  return execute('post', "sale/remove", ids);
};
/**
 * Inventory - Receipt
 * @param {*} data 
 */

var add_receipt = function add_receipt(data) {
  return execute('post', "receipt", data);
};
var edit_receipt = function edit_receipt(id, data) {
  return execute('put', "receipt/".concat(id), data);
};
var view_receipt = function view_receipt() {
  var query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return execute('get', "receipt/?".concat(query));
};
var delete_receipt = function delete_receipt(id) {
  return execute('delete', "receipt/".concat(id));
};
var show_receipt = function show_receipt(id) {
  return execute('get', "receipt/".concat(id));
};
var multiple_delete_receipt = function multiple_delete_receipt(ids) {
  return execute('post', "receipt/remove", ids);
};
/**
 * Inventory - Payment
 * @param {*} data 
 */

var add_payment = function add_payment(data) {
  return execute('post', "payment", data);
};
var edit_payment = function edit_payment(id, data) {
  return execute('put', "payment/".concat(id), data);
};
var view_payment = function view_payment() {
  var query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return execute('get', "payment/?".concat(query));
};
var delete_payment = function delete_payment(id) {
  return execute('delete', "payment/".concat(id));
};
var show_payment = function show_payment(id) {
  return execute('get', "payment/".concat(id));
};
var multiple_delete_payment = function multiple_delete_payment(ids) {
  return execute('post', "payment/remove", ids);
};
/**
 * Inventory - Debit Note
 * @param {*} data 
 */

var add_debit_note = function add_debit_note(data) {
  return execute('post', "debit-note", data);
};
var edit_debit_note = function edit_debit_note(id, data) {
  return execute('put', "debit-note/".concat(id), data);
};
var view_debit_note = function view_debit_note() {
  var query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return execute('get', "debit-note/?".concat(query));
};
var delete_debit_note = function delete_debit_note(id) {
  return execute('delete', "debit-note/".concat(id));
};
var show_debit_note = function show_debit_note(id) {
  return execute('get', "debit-note/".concat(id));
};
var multiple_delete_debit_note = function multiple_delete_debit_note(ids) {
  return execute('post', "debit-note/remove", ids);
};
/**
 * Inventory - Credit Note
 * @param {*} data 
 */

var add_credit_note = function add_credit_note(data) {
  return execute('post', "credit-note", data);
};
var edit_credit_note = function edit_credit_note(id, data) {
  return execute('put', "credit-note/".concat(id), data);
};
var view_credit_note = function view_credit_note() {
  var query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return execute('get', "credit-note/?".concat(query));
};
var delete_credit_note = function delete_credit_note(id) {
  return execute('delete', "credit-note/".concat(id));
};
var show_credit_note = function show_credit_note(id) {
  return execute('get', "credit-note/".concat(id));
};
var multiple_delete_credit_note = function multiple_delete_credit_note(ids) {
  return execute('post', "credit-note/remove", ids);
};
/**
 * Reports
 */

var view_stock = function view_stock() {
  var query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return execute('get', "stock/?".concat(query));
};
var day_book = function day_book() {
  var query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return execute('get', "report/day-book/?".concat(query));
};
var cash_book = function cash_book() {
  var query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return execute('get', "report/cash-book/?".concat(query));
};
var bank_book = function bank_book() {
  var query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return execute('get', "report/bank-book/?".concat(query));
};
var ledger = function ledger(user) {
  return execute('get', "report/ledger/".concat(user));
};
/**
 * Online Exam - Question
 * @param {*} data 
 */

var add_question = function add_question(data) {
  return execute('post', "question", data);
};
var edit_question = function edit_question(id, data) {
  return execute('put', "question/".concat(id), data);
};
var view_question = function view_question() {
  var query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return execute('get', "question/?".concat(query));
};
var delete_question = function delete_question(id) {
  return execute('delete', "question/".concat(id));
};
var show_question = function show_question(id) {
  return execute('get', "question/".concat(id));
};
var multiple_delete_question = function multiple_delete_question(ids) {
  return execute('post', "question/remove", ids);
};
/**
 * Online Exam - Instruction
 * @param {*} data 
 */

var add_instruction = function add_instruction(data) {
  return execute('post', "instruction", data);
};
var edit_instruction = function edit_instruction(id, data) {
  return execute('put', "instruction/".concat(id), data);
};
var view_instruction = function view_instruction() {
  var query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return execute('get', "instruction/?".concat(query));
};
var delete_instruction = function delete_instruction(id) {
  return execute('delete', "instruction/".concat(id));
};
var show_instruction = function show_instruction(id) {
  return execute('get', "instruction/".concat(id));
};
var multiple_delete_instruction = function multiple_delete_instruction(ids) {
  return execute('post', "instruction/remove", ids);
};
/**
 * Online Exam - Test
 * @param {*} data 
 */

var add_test = function add_test(data) {
  return execute('post', "test", data);
};
var edit_test = function edit_test(id, data) {
  return execute('put', "test/".concat(id), data);
};
var view_test = function view_test() {
  var query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return execute('get', "test/?".concat(query));
};
var delete_test = function delete_test(id) {
  return execute('delete', "test/".concat(id));
};
var show_test = function show_test(id) {
  return execute('get', "test/".concat(id));
};
var multiple_delete_test = function multiple_delete_test(ids) {
  return execute('post', "test/remove", ids);
};
/**
 * Location like Country, State, City
 */

var view_country = function view_country(query) {
  return execute('get', "country/?".concat(query));
};
var view_state = function view_state(query) {
  return execute('get', "state/?".concat(query));
};
var view_city = function view_city(query) {
  return execute('get', "city/?".concat(query));
};

/***/ })

}]);