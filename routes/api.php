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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::group(['domain' => '{subdomain}.localhost', 'namespace' => 'api'], function () {
    Route::post('user-login', 'UserController@userLogin');
    Route::post('forgot-password', 'UserController@forgotPassword');
    Route::post('recover-password', 'UserController@recoverPassword');
});

Route::group(['domain' => 'acc.localhost'], function () {
    Route::group(['namespace' => 'api'], function () {
        Route::post('get-started', 'RegisterController@getStarted');
        Route::post('resend-otp', 'RegisterController@sendOtp');
        Route::post('school-register', 'RegisterController@shopRegister');
        Route::get('get-all-plans', 'PlanController@getAllList');
        Route::get('get-all-states', 'StateController@getAllList');
        Route::post('get-cities-by-state', 'CityController@getListByState');
    });
});

Route::group(['domain' => '{subdomain}.localhost', 'namespace' => 'api', 'middleware' => 'auth:api'], function () {
    Route::get('logout', 'UserController@logout');

    Route::post('add-session', 'SessionController@add');
    Route::post('update-session', 'SessionController@updateData');
    Route::get('view-session', 'SessionController@getData');
    Route::get('search-session', 'SessionController@searchData');
    Route::post('remove-session', 'SessionController@removeData');
    Route::get('get-session-info/{id?}', 'SessionController@getInfo');

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

    Route::post('add-class', 'ClassController@add');
    Route::post('update-class', 'ClassController@updateData');
    Route::get('view-class', 'ClassController@getData');
    Route::get('search-class', 'ClassController@searchData');
    Route::post('remove-class', 'ClassController@removeData');
    Route::get('get-class-info/{id?}', 'ClassController@getInfo');
    Route::get('get-class-by-dept/{id}', 'ClassController@getListByDept');
    Route::get('get-all-classes', 'ClassController@getAllList');

    Route::post('add-section', 'SectionController@add');
    Route::post('update-section', 'SectionController@updateData');
    Route::get('view-section', 'SectionController@getData');
    Route::get('search-section', 'SectionController@searchData');
    Route::post('remove-section', 'SectionController@removeData');
    Route::get('get-section-info/{id?}', 'SectionController@getInfo');
    Route::get('get-sections-by-class/{id}', 'SectionController@getListByClass');
    Route::get('get-all-sections', 'SectionController@getListAll');
    Route::post('allocate-class-teacher', 'SectionController@assignClassTeacher');

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

    Route::post('add-user', 'UserController@add');
    // Route::post('add-parent', 'UserController@addParent');
    Route::post('update-user', 'UserController@updateData');
    Route::get('view-user', 'UserController@getData');
    Route::get('search-user', 'UserController@searchData');
    Route::post('remove-user', 'UserController@removeData');
    Route::get('get-user-info/{id?}', 'UserController@getInfo');
    Route::post('get-users-by-role', 'UserController@getListByRole');
    Route::get('get-teachers', 'UserController@getTeachers');
    Route::get('get-staffs', 'UserController@getStaffs');

    Route::group(['prefix' => 'parent'], function() {
        Route::get('/', 'GuardianController@index');
        Route::post('/add', 'GuardianController@add');
    });

    Route::get('get-all-roles', 'RoleController@getAllList');
    Route::get('get-all-states', 'StateController@getAllList');
    Route::post('get-cities-by-state', 'CityController@getListByState');
    Route::post('get-pincodes-by-city', 'PincodeController@getListByCity');

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

    Route::post('add-student', 'StudentController@add');
    Route::post('update-student', 'StudentController@updateData');
    Route::get('view-student', 'StudentController@getData');
    Route::get('search-student', 'StudentController@searchData');
    Route::post('remove-student', 'StudentController@removeData');
    Route::get('get-student-info/{id?}', 'StudentController@getInfo');
    Route::get('get-student-by-section/{section?}', 'StudentController@getDataBySection');

    Route::post('add-fees-type', 'FeeTypeController@add');
    Route::post('update-fees-type', 'FeeTypeController@updateData');
    Route::get('view-fees-type', 'FeeTypeController@getData');
    Route::get('search-fees-type', 'FeeTypeController@searchData');
    Route::post('remove-fees-type', 'FeeTypeController@removeData');
    Route::get('get-fees-type-info/{id?}', 'FeeTypeController@getInfo');
    Route::get('get-all-fees-type', 'FeeTypeController@getAllList');

    Route::post('add-fees-installment', 'FeeInstallmentController@add');
    Route::post('update-fees-installment', 'FeeInstallmentController@updateData');
    Route::get('view-fees-installment', 'FeeInstallmentController@getData');
    Route::get('search-fees-installment', 'FeeInstallmentController@searchData');
    Route::post('remove-fees-installment', 'FeeInstallmentController@removeData');
    Route::get('get-fees-installment-info/{id?}', 'FeeInstallmentController@getInfo');
    Route::get('get-all-fees-installments', 'FeeInstallmentController@getAllList');

    Route::post('add-fees', 'FeesController@add');
    Route::post('get-fees', 'FeesController@getList');

    Route::group(['namespace' => 'timetable'], function () {
        Route::get('weekday-info', 'WeekDayController@info');
        Route::post('save-weekday', 'WeekDayController@save');
        Route::get('get-timetable-dropdowns', 'TimetableController@getDropdowns');
        Route::post('add-timetable', 'TimetableController@add');
        Route::post('timetable/edit', 'TimetableController@edit');
        Route::post('view-timetable', 'TimetableController@getData');
        Route::post('view-teacher-timetable', 'TimetableController@getTeacherData');
    });

    Route::group(['namespace' => 'profile'], function () {
        Route::get('get-profile', 'ProfileController@info');
        Route::get('get-school-info', 'ProfileController@schoolInfo');
        Route::post('update-profile', 'ProfileController@updateData');
        Route::post('general-settings', 'ProfileController@generalSetting');
        Route::post('change-password', 'ProfileController@ChangePassword');
    });

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
});
