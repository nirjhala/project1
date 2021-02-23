<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(['domain' => '{school:weburl}.suncitytechno.com', 'namespace' => 'api'], function () {
    Route::post('user-login', 'UserController@userLogin');
    Route::post('forgot-password', 'UserController@forgotPassword');
    Route::post('recover-password', 'UserController@recoverPassword');

    Route::get('student/marksheet/{uid}', 'CertificateController@marksheet');
    Route::get('student/tc/{transferCertificate}', 'CertificateController@tc');
    Route::get('character-certificate/{sr_no}', 'CertificateController@character');
    Route::get('event-certificate/{sr_no}', 'CertificateController@event');
    Route::get('sport-certificate/{sr_no}', 'CertificateController@sport');
    Route::get('admit-card/{examType}/{user}', 'CertificateController@admit_card');
    Route::get('salaryslip/{id}', 'CertificateController@salary_slip');

    Route::apiResource('admission-enquiry', 'AdmissionEnquiryController', ['only' => ['store']]);

    Route::get('web-menu', 'MenuLinkController@front');
    Route::get('web-page/{page:slug}', 'PageController@show');
    Route::get('web-notice', 'NoticeController@all');
    Route::get('web-notice/{notice:slug}', 'NoticeController@show');

    Route::post('search-admit-card', 'AdmitCardController@search');

    Route::apiResource('web-news', 'NewsController', ['only' => ['index', 'show']]);
    Route::apiResource('web-event', 'EventController', ['only' => ['index', 'show']]);
    Route::apiResource('web-gallery', 'GalleryController', ['only' => ['index']]);
    Route::apiResource('web-exam-type', 'ExamTypeController', ['only' => 'index']);
});

Route::group(['domain' => 'acc.suncitytechno.com'], function () {
    Route::group(['namespace' => 'api'], function () {
        Route::post('get-started', 'RegisterController@getStarted');
        Route::post('resend-otp', 'RegisterController@sendOtp');
        Route::post('school-register', 'RegisterController@shopRegister');
        Route::get('get-all-plans', 'PlanController@getAllList');
        Route::get('get-all-states', 'StateController@getAllList');
        Route::post('get-cities-by-state', 'CityController@getListByState');
    });
});

Route::group([
    'domain' => '{school:weburl}.suncitytechno.com', 
    'namespace' => 'api', 
    'middleware' => 'auth:api'
], function () {

    Route::get('custom-field', 'CustomFieldController@index');

    Route::get('logout', 'UserController@logout');

    Route::post('add-session', 'SessionController@add');
    Route::post('update-session', 'SessionController@updateData');
    Route::get('view-session', 'SessionController@getData');
    Route::get('search-session', 'SessionController@searchData');
    Route::post('remove-session', 'SessionController@removeData');
    Route::get('get-session-info/{id?}', 'SessionController@getInfo');
    Route::get('session/all', 'SessionController@all');

    Route::post('add-shift', 'ShiftController@add');
    Route::post('update-shift', 'ShiftController@updateData');
    Route::get('view-shift', 'ShiftController@getData');
    Route::get('search-shift', 'ShiftController@searchData');
    Route::post('remove-shift', 'ShiftController@removeData');
    Route::get('get-shift-info/{id?}', 'ShiftController@getInfo');
    Route::get('get-all-shifts', 'ShiftController@getAllList');

    Route::post('add-department', 'DepartmentController@add');
    Route::post('update-department', 'DepartmentController@updateData');
    Route::get('view-department', 'DepartmentController@getData');
    Route::get('search-department', 'DepartmentController@searchData');
    Route::post('remove-department', 'DepartmentController@removeData');
    Route::get('get-department-info/{id?}', 'DepartmentController@getInfo');
    Route::get('get-departments', 'DepartmentController@getList');
    Route::get('get-all-departments', 'DepartmentController@getAllList');
    Route::get('department/all', 'DepartmentController@all');

    Route::post('add-class', 'ClassController@add');
    Route::post('update-class', 'ClassController@updateData');
    Route::get('view-class', 'ClassController@getData');
    Route::get('search-class', 'ClassController@searchData');
    Route::post('remove-class', 'ClassController@removeData');
    Route::get('get-class-info/{id?}', 'ClassController@getInfo');
    Route::get('get-class-by-dept/{id}', 'ClassController@getListByDept');
    Route::get('get-all-classes', 'ClassController@getAllList');
    Route::get('class/department/{dept_id}', 'ClassController@view_by_dept');
    Route::get('class/all', 'ClassController@all');

    Route::get('section/all', 'SectionController@all');
    Route::post('add-section', 'SectionController@add');
    Route::post('update-section', 'SectionController@updateData');
    Route::get('view-section', 'SectionController@getData');
    Route::get('search-section', 'SectionController@searchData');
    Route::post('remove-section', 'SectionController@removeData');
    Route::get('get-section-info/{id?}', 'SectionController@getInfo');
    Route::get('get-sections-by-class/{id}', 'SectionController@getListByClass');
    Route::get('get-all-sections', 'SectionController@getListAll');
    Route::post('allocate-class-teacher', 'SectionController@assignClassTeacher');

    Route::get('subject', 'SubjectController@index');
    Route::get('subject/by-section/{id}', 'SubjectController@fetchBySection');
    Route::post('add-subject', 'SubjectController@add');
    Route::post('update-subject', 'SubjectController@updateData');
    Route::get('view-subject', 'SubjectController@getData');
    Route::get('search-subject', 'SubjectController@searchData');
    Route::get('subject/{section}', 'SubjectController@getListByClass');
    Route::post('remove-subject', 'SubjectController@removeData');
    Route::get('get-subject-info/{id?}', 'SubjectController@getInfo');
    Route::post('assign-subject-class', 'SubjectController@assignToClass');

    Route::post('add-timeslot', 'TimeslotController@add');
    Route::post('update-timeslot', 'TimeslotController@updateData');
    Route::get('view-timeslot', 'TimeslotController@getData');
    Route::get('get-timeslots-by-shift/{shift}', 'TimeslotController@getDataByShift');
    Route::get('search-timeslot', 'TimeslotController@searchData');
    Route::post('remove-timeslot', 'TimeslotController@removeData');
    Route::get('get-timeslot-info/{id?}', 'TimeslotController@getInfo');
    Route::post('assign-timeslot-class', 'TimeslotController@assignToClass');

    Route::post('user/remove', 'UserController@remove');
    Route::get('teacher', 'UserController@teachers');
    Route::apiResource('user', 'UserController');

    Route::apiResource('certificate', 'CertificateController');
    Route::apiResource('user-certificate', 'UserCertificateController');

    Route::post('exam-type/remove', 'ExamTypeController@remove');
    Route::apiResource('exam-type', 'ExamTypeController');

    Route::post('pay-grade/remove', 'PayGradeController@remove');
    Route::apiResource('pay-grade', 'PayGradeController');
    
    Route::get('employee-info/{id}', 'EmployeePromotionController@employee_info');
    Route::post('employee-promotion/remove', 'EmployeePromotionController@remove');
    Route::apiResource('employee-promotion', 'EmployeePromotionController');

    Route::get('max-allowance/{gender}/{name}', 'AllowanceController@max_salary');
    Route::apiResource('allowance', 'AllowanceController');

    Route::get('max-deduction/{gender}/{name}', 'DeductionController@max_salary');
    Route::apiResource('deduction', 'DeductionController');

    Route::get('payroll-master/{type}', 'PayrollMasterController@index');
    Route::apiResource('salary-slip', 'SalarySlipController');

    Route::post('online-class/remove', 'OnlineClassController@remove');
    Route::apiResource('online-class', 'OnlineClassController');

    Route::get('event/all', 'EventController@all');
    Route::post('event/remove', 'EventController@remove');
    Route::apiResource('event', 'EventController');

    Route::post('news/remove', 'NewsController@remove');
    Route::apiResource('news', 'NewsController');

    Route::post('notice/remove', 'NoticeController@remove');
    Route::apiResource('notice', 'NoticeController');

    Route::post('gallery/remove', 'GalleryController@remove');
    Route::apiResource('gallery', 'GalleryController');

    Route::get('holiday/all', 'HolidayController@all');
    Route::post('holiday/remove', 'HolidayController@remove');
    Route::apiResource('holiday', 'HolidayController');

    Route::get('page-template/all', 'PageTemplateController@all');
    Route::apiResource('menu', 'MenuLinkController');

    Route::get('page/all', 'PageController@all');
    Route::apiResource('page', 'PageController');

    Route::get('assignment-students/{id}', 'AssignmentStudentController@index');
    Route::post('assignment-students/{id}', 'AssignmentStudentController@store');
    Route::apiResource('assignment', 'AssignmentController');

    Route::post('add-user', 'UserController@add');
    Route::post('update-user', 'UserController@updateData');
    Route::get('view-user', 'UserController@getData');
    Route::get('search-user', 'UserController@searchData');
    Route::get('get-user-info/{id?}', 'UserController@getInfo');
    Route::post('get-users-by-role', 'UserController@getListByRole');

    Route::get('get-teachers', 'UserController@getTeachers');
    Route::get('get-staffs', 'UserController@getStaffs');

    Route::group(['prefix' => 'parent'], function() {
        Route::get('/', 'GuardianController@index');
        Route::post('/add', 'GuardianController@add');
    });

    Route::apiResource('country', 'CountryController', ['only' => ['index']]);

    Route::get('get-all-roles', 'RoleController@getAllList');
    Route::get('get-all-states', 'StateController@getAllList');
    Route::post('get-cities-by-state', 'CityController@getListByState');
    Route::post('get-pincodes-by-city', 'PincodeController@getListByCity');
    Route::get('state/all', 'StateController@getAllList');
    Route::get('state', 'StateController@all');
    Route::get('city', 'CityController@index');

    Route::post('add-media', 'MediaController@add');
    Route::get('view-media', 'MediaController@getData');
    Route::get('get-all-drivers', 'UserController@getDrivers');

    Route::post('add-religion', 'ReligionController@add');
    Route::post('update-religion', 'ReligionController@updateData');
    Route::get('view-religion', 'ReligionController@getData');
    Route::get('search-religion', 'ReligionController@searchData');
    Route::post('remove-religion', 'ReligionController@removeData');
    Route::get('get-religion-info/{id?}', 'ReligionController@getInfo');
    Route::get('get-all-religions', 'ReligionController@getAllList');
    Route::get('religion', 'ReligionController@index');

    Route::post('add-hostel', 'HostelController@add');
    Route::post('update-hostel', 'HostelController@updateData');
    Route::get('view-hostel', 'HostelController@getData');
    Route::get('search-hostel', 'HostelController@searchData');
    Route::post('remove-hostel', 'HostelController@removeData');
    Route::get('get-hostel-info/{id?}', 'HostelController@getInfo');

    Route::post('add-vehicle', 'VehicleController@add');
    Route::post('update-vehicle', 'VehicleController@updateData');
    Route::get('view-vehicle', 'VehicleController@getData');
    Route::get('search-vehicle', 'VehicleController@searchData');
    Route::post('remove-vehicle', 'VehicleController@removeData');
    Route::get('get-vehicle-info/{id?}', 'VehicleController@getInfo');
    Route::get('get-all-vehicles', 'VehicleController@getAllList');

    Route::post('add-route', 'RouteController@add');
    Route::post('update-route', 'RouteController@updateData');
    Route::get('view-route', 'RouteController@getData');
    Route::get('search-route', 'RouteController@searchData');
    Route::post('remove-route', 'RouteController@removeData');
    Route::get('get-route-info/{id?}', 'RouteController@getInfo');
    Route::get('route/driver', 'RouteController@driver');

    Route::apiResource('admission-enquiry', 'AdmissionEnquiryController', ['only' => ['index']]);
    Route::post('admission-enquiry/remove', 'AdmissionEnquiryController@remove');

    Route::post('add-student', 'StudentController@add');
    Route::post('update-student', 'StudentController@updateData');
    Route::get('view-student', 'StudentController@getData');
    Route::get('search-student', 'StudentController@searchData');
    Route::post('remove-student', 'StudentController@removeData');
    Route::get('get-student-info/{id?}', 'StudentController@getInfo');
    Route::get('get-student-by-section/{section?}', 'StudentController@getDataBySection');
    Route::get('student/section/{section?}', 'StudentController@bySection');
    Route::get('student/info', 'StudentController@info');
    Route::get('student/parent', 'StudentController@parent');

    Route::get('student/all', 'StudentController@all');
    Route::get('student/fees-info/{uid}', 'FeesController@student_by_id');
    Route::apiResource('student', 'StudentController');

    Route::apiResource('fee-payment', 'FeePaymentController', ['only' => ['store', 'index']]);

    /**
     * Fee Management System
     *
     * @Modules
     * Fee Type
     * Fee Installment - Class wise
     * Fee Structure
     * Fee Due Report
    **/
    Route::apiResource('fees-type', 'FeeTypeController');
    Route::post('fees-type/remove', 'FeeTypeController@remove');
    Route::get('get-all-fees-type', 'FeeTypeController@getAllList');

    Route::post('add-fees-installment', 'FeeInstallmentController@add');
    Route::post('update-fees-installment', 'FeeInstallmentController@updateData');
    Route::get('view-fees-installment', 'FeeInstallmentController@getData');
    Route::get('search-fees-installment', 'FeeInstallmentController@searchData');
    Route::post('remove-fees-installment', 'FeeInstallmentController@removeData');
    Route::get('get-fees-installment-info/{id?}', 'FeeInstallmentController@getInfo');

    Route::post('fees/add', 'FeesController@store');
    Route::post('fees', 'FeesController@index');
    Route::get('fees/info/student/{user}', 'FeesController@byStudent');
    Route::post('fees-structure/{id?}', 'FeesController@structure');
    Route::get('fees/student/{section}', 'FeesController@students');
    Route::get('fees/update_pay_status/{id}/{status}', 'FeesController@updatePayStatus');

    Route::group(['namespace' => 'timetable'], function () {
        Route::get('weekday-info', 'WeekDayController@info');
        Route::post('save-weekday', 'WeekDayController@save');
        Route::get('get-timetable-dropdowns', 'TimetableController@getDropdowns');
        Route::post('add-timetable', 'TimetableController@add');
        Route::post('timetable/edit', 'TimetableController@edit');
        Route::post('view-timetable', 'TimetableController@getData');
        Route::post('view-teacher-timetable', 'TimetableController@getTeacherData');
        Route::post('timetable/student', 'TimetableController@student');
        Route::post('timetable/teacher', 'TimetableController@teacher');
    });

    Route::group(['namespace' => 'profile'], function () {
        Route::get('get-profile', 'ProfileController@info');
        Route::get('get-school-info', 'ProfileController@schoolInfo');
        Route::post('update-profile', 'ProfileController@updateData');
        Route::post('general-settings', 'ProfileController@generalSetting');
        Route::post('change-password', 'ProfileController@ChangePassword');
    });
    
    Route::apiResource('fee-setting', 'FeeSettingController', ['only' => ['index', 'update']]);

    Route::group(['namespace' => 'lms'], function () {
        Route::group(['prefix' => 'book/category'], function () {
            Route::get('/', 'BookCategoryController@getData');
            Route::post('/', 'BookCategoryController@addCategory');
            Route::post('/edit/{category}', 'BookCategoryController@updateCategory');
            Route::get('/info/{category}', 'BookCategoryController@categoryInfo');
            Route::get('/all', 'BookCategoryController@getAllList');
            Route::post('/remove', 'BookCategoryController@removeData');
        });

        Route::group(['prefix' => 'book/pass'], function () {
            Route::get('/', 'LibraryPassController@getData');
            Route::post('/', 'LibraryPassController@add');
            Route::post('/edit/{pass}', 'LibraryPassController@update');
            Route::get('/info/{pass}', 'LibraryPassController@info');
            Route::post('/info-by-barcode', 'LibraryPassController@infoByBarcode');
            Route::get('/all', 'LibraryPassController@getAllList');
            Route::post('/remove', 'LibraryPassController@removeData');
        });

        Route::group(['prefix' => 'book'], function() {
            Route::get('/', 'BookController@getData');
            Route::post('/add', 'BookController@addData');
            Route::post('/edit/{book}', 'BookController@editData');
            Route::get('/info/{book}', 'BookController@info');
            Route::post('/info-by-barcode', 'BookController@infoByBarcode');
            Route::post('/remove', 'BookController@removeData');
        });

        Route::post('lms/book/issue', 'BookController@issue');
        Route::get('lms/book/issue-history', 'BookController@issue_history');
        Route::get('lms/book/search-issue-history', 'BookController@search_issue_history');

        Route::get('lms/setting', 'SettingController@index');
        Route::post('lms/setting', 'SettingController@update');

        Route::post('lms/issue', 'LibraryController@issue');
    });

    Route::post('attd-students', 'AttendenceController@getStudents');
    Route::post('attd-users/{role}', 'AttendenceController@getUsersByRole');
    Route::post('save-attendence', 'AttendenceController@save');
    Route::post('attendence/student', 'AttendenceController@student');
    Route::get('attendence/student/{uid}', 'AttendenceController@studentById');

    /**
     * Complain Box - Student Panel
     * @resource view, add, update, delete
     * @method get, post, put, delete
     */
    Route::post('complain/remove', 'ComplainController@remove');
    Route::apiResource('complain', 'ComplainController');

    Route::post('delete-tc', 'TransferCertificateController@remove');
    Route::apiResource('tc', 'TransferCertificateController');

    Route::post('delete-school-certificate', 'SchooolCertificateController@remove');
    Route::apiResource('school-certificate', 'SchooolCertificateController');

    // Route::post('delete-admit-card', 'AdmitCardController@remove');
    Route::get('admit-card-subject/{examTypeId}/{sectionId}', 'AdmitCardController@fetch_subjects');
    Route::apiResource('admit-card', 'AdmitCardController');
    
    Route::apiResource('marksheet', 'MarksheetController');
    
    Route::apiResource('gst-rate', 'GstRateController', ['only' => 'index']);
    Route::post('item/remove', 'ItemController@remove');
    Route::apiResource('item', 'ItemController');
    Route::post('supplier/remove', 'SupplierController@remove');
    Route::apiResource('supplier', 'SupplierController');
    Route::post('purchase/remove', 'PurchaseController@remove');
    Route::apiResource('purchase', 'PurchaseController');
    Route::post('sale/remove', 'SaleController@remove');
    Route::apiResource('sale', 'SaleController');
    Route::post('receipt/remove', 'RecieptController@remove');
    Route::apiResource('receipt', 'RecieptController');
    Route::post('payment/remove', 'PaymentController@remove');
    Route::apiResource('payment', 'PaymentController');
    Route::post('debit-note/remove', 'DebitNoteController@remove');
    Route::apiResource('debit-note', 'DebitNoteController');
    Route::post('credit-note/remove', 'CreditNoteController@remove');
    Route::apiResource('credit-note', 'CreditNoteController');
    Route::get('stock', 'StockController@index');
    Route::get('report/day-book', 'ReportController@daybook');
    Route::get('report/cash-book', 'ReportController@cashbook');
    Route::get('report/bank-book', 'ReportController@bankbook');
    Route::get('report/ledger/{user}', 'ReportController@ledger');
    
    Route::post('question/remove', 'QuestionController@remove');
    Route::apiResource('question', 'QuestionController');
    Route::post('instruction/remove', 'InstructionController@remove');
    Route::apiResource('instruction', 'InstructionController');
    Route::get('student-test', 'TestController@student');
    Route::post('test/remove', 'TestController@remove');
    Route::apiResource('test', 'TestController');
    Route::post('test-question/remove', 'TestQuestionController@remove');
    Route::apiResource('test-question', 'TestQuestionController');
    Route::apiResource('test-result', 'TestResultController', ['only' => ['store']]);
});
