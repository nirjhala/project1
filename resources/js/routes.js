import { global_params } from './global_params'

export const routes = [
    {
        path: '*',
        name: 'home',
        component: () => import('./components/Dashboard')
    },
    /**
     * ##########################################
     * Routes for Get Started
     * ##########################################
    **/
    {
        fullPath: global_params.registerUrl+'get-started',
        path: '/get-started',
        name: 'get-started',
        component: () => import('./components/GetStarted')
    },
    /**
     * ##########################################
     * Routes for OTP Verification Screen
     * ##########################################
    **/
    {
        path: '/otp',
        name: 'otp',
        component: () => import('./components/otpComponent')
    },
    /**
     * ##########################################
     * Routes for OTP Verification Screen
     * ##########################################
    **/
    {
        path: '/recover-password',
        name: 'recover-password',
        component: import('./components/RecoverPassword')
    },
    /**
     * ##########################################
     * Routes for School Registrations
     * ##########################################
    **/
    {
        path: '/register',
        name: 'register',
        component: () => import('./components/RegisterComponent')
    },
    /**
     * ##########################################
     * Routes for Login of School and their users
     * ##########################################
    **/
    {
        path: '/login',
        name: 'login',
        component: () => import('./components/LoginComponent')
    },
    /**
     * ##########################################
     * Routes for forgot password
     * ##########################################
    **/
    {
        path: '/forgot-password',
        name: 'forgot-password',
        component: () => import('./components/ForgotPassword')
    },
    /**
     * ##########################################
     * Routes for Dashboard
     * ##########################################
    **/
    {
        path: '/',
        name: 'dashboard',
        component: () => import('./components/Dashboard')
    },
    /**
     * ##########################################
     * Routes for Session
     * ##########################################
    **/
    {
        path: '/session',
        name: 'session',
        component: () => import('./components/sessionMaster')
    },
    {
        path: '/add-session',
        name: 'add-session',
        component: () => import('./components/addSessionMaster')
    },
    {
        path: '/edit-session/:id',
        name: 'edit-session',
        component: () => import('./components/addSessionMaster')
    },
    /**
     * ##########################################
     * Routes for Shifts
     * ##########################################
    **/
    {
        path: '/shift',
        name: 'shift',
        component: () => import('./components/shift/viewShift')
    },
    {
        path: '/add-shift',
        name: 'add-shift',
        component: () => import('./components/shift/addShift')
    },
    {
        path: '/edit-shift/:id',
        name: 'edit-shift',
        component: () => import('./components/shift/addShift')
    },
    /**
     * ##########################################
     * Routes for Department
     * ##########################################
    **/
    {
        path: '/department',
        name: 'department',
        component: () => import('./components/department/viewDepartment')
    },
    {
        path: '/add-department',
        name: 'add-department',
        component: () => import('./components/department/addDepartment')
    },
    {
        path: '/edit-department/:id',
        name: 'edit-department',
        component: () => import('./components/department/addDepartment')
    },
    /**
     * ##########################################
     * Routes for Class Master
     * ##########################################
    **/
    {
        path: '/class',
        name: 'class',
        component: () => import('./components/class/viewClass')
    },
    {
        path: '/add-class',
        name: 'add-class',
        component: () => import('./components/class/addClass')
    },
    {
        path: '/edit-class/:id',
        name: 'edit-class',
        component: () => import('./components/class/addClass')
    },
    /**
     * ##########################################
     * Routes for Section Master
     * ##########################################
    **/
    {
        path: '/section',
        name: 'section',
        component: () => import('./components/section/view')
    },
    {
        path: '/add-section',
        name: 'add-section',
        component: () => import('./components/section/add')
    },
    {
        path: '/edit-section/:id',
        name: 'edit-section',
        component: () => import('./components/section/edit')
    },
    /**
     * ##########################################
     * Routes for Subject Master
     * ##########################################
    **/
    {
        path: '/subject',
        name: 'subject',
        component: () => import('./components/subject/view')
    },
    {
        path: '/add-subject',
        name: 'add-subject',
        component: () => import('./components/subject/add')
    },
    {
        path: '/edit-subject/:id',
        name: 'edit-subject',
        component: () => import('./components/subject/add')
    },
    /**
     * ##########################################
     * Routes for Timeslot Master
     * ##########################################
    **/
    {
        path: '/timeslot',
        name: 'timeslot',
        component: () => import('./components/timeslot/view')
    },
    {
        path: '/add-timeslot',
        name: 'add-timeslot',
        component: () => import('./components/timeslot/add')
    },
    {
        path: '/edit-timeslot/:id',
        name: 'edit-timeslot',
        component: () => import('./components/timeslot/add')
    },
    /**
     * ##########################################
     * Routes for User Master
     * ##########################################
    **/
    {
        path: '/user',
        name: 'user',
        component: () => import('./components/user/view')
    },
    {
        path: '/add-user',
        name: 'add-user',
        component: () => import('./components/user/add')
    },
    {
        path: '/edit-user/:id',
        name: 'edit-user',
        component: () => import('./components/user/add')
    },
    /**
     * ##########################################
     * Routes for Religion Master
     * ##########################################
    **/
    {
        path: '/religion',
        name: 'religion',
        component: () => import('./components/religion/view')
    },
    {
        path: '/add-religion',
        name: 'add-religion',
        component: () => import('./components/religion/add')
    },
    {
        path: '/edit-religion/:id',
        name: 'edit-religion',
        component: () => import('./components/religion/add')
    },
    /**
     * ##########################################
     * Routes for Hostel Master
     * ##########################################
    **/
    {
        path: '/hostel',
        name: 'hostel',
        component: () => import('./components/hostel/view')
    },
    {
        path: '/add-hostel',
        name: 'add-hostel',
        component: () => import('./components/hostel/add')
    },
    {
        path: '/edit-hostel/:id',
        name: 'edit-hostel',
        component: () => import('./components/hostel/add')
    },
    /**
     * ##########################################
     * Routes for Vehicle Master
     * ##########################################
    **/
    {
        path: '/vehicle',
        name: 'vehicle',
        component: () => import('./components/vehicle/view')
    },
    {
        path: '/add-vehicle',
        name: 'add-vehicle',
        component: () => import('./components/vehicle/add')
    },
    {
        path: '/edit-vehicle/:id',
        name: 'edit-vehicle',
        component: () => import('./components/vehicle/add')
    },
    /**
     * ##########################################
     * Routes for Driving Routes
     * ##########################################
    **/
    {
        path: '/route',
        name: 'route',
        component: () => import('./components/route/view')
    },
    {
        path: '/add-route',
        name: 'add-route',
        component: () => import('./components/route/add')
    },
    {
        path: '/edit-route/:id',
        name: 'edit-route',
        component: () => import('./components/route/add')
    },
    /**
     * ##########################################
     * Routes for Driving Routes
     * ##########################################
    **/
    {
        path: '/student',
        name: 'student',
        component: () => import('./components/student/view')
    },
    {
        path: '/add-student',
        name: 'add-student',
        component: () => import('./components/student/add')
    },
    {
        path: '/edit-student/:id',
        name: 'edit-student',
        component: () => import('./components/student/add')
    },
    /**
     * ##########################################
     * Routes for Fees Type
     * ##########################################
    **/
    {
        path: '/fees-type',
        name: 'fees-type',
        component: () => import('./components/fees-type/view')
    },
    {
        path: '/add-fees-type',
        name: 'add-fees-type',
        component: () => import('./components/fees-type/add')
    },
    {
        path: '/edit-fees-type/:id',
        name: 'edit-fees-type',
        component: () => import('./components/fees-type/add')
    },
    /**
     * ##########################################
     * Routes for Fees Installment
     * ##########################################
    **/
    {
        path: '/fees-installment',
        name: 'fees-installment',
        component: () => import('./components/fees-installment/view')
    },
    {
        path: '/add-fees-installment',
        name: 'add-fees-installment',
        component: () => import('./components/fees-installment/add')
    },
    {
        path: '/edit-fees-installment/:id',
        name: 'edit-fees-installment',
        component: () => import('./components/fees-installment/add')
    },
    /**
     * ##########################################
     * Routes for Fees
     * ##########################################
    **/
    {
        path: '/fees',
        name: 'fees',
        component: () => import('./components/fees/view')
    },
    {
        path: '/due-fees',
        name: 'due-fees',
        component: () => import('./components/fees/due')
    },
    /**
     * ##########################################
     * Routes for Time Table
     * ##########################################
    **/
    {
        path: '/week-day',
        name: 'week-day',
        component: () => import('./components/weekday/edit')
    },
    {
        path: '/student-time-table',
        name: 'student-time-table',
        component: () => import('./components/timetable/view')
    },
    {
        path: '/teacher-time-table',
        name: 'teacher-time-table',
        component: () => import('./components/timetable/teacher')
    },
    {
        path: '/create-time-table',
        name: 'create-time-table',
        component: () => import('./components/timetable/add')
    },
    {
        path: '/edit-time-table/:id',
        name: 'edit-time-table',
        component: () => import('./components/timetable/add')
    },
    /**
     * ##########################################
     * Routes for Attendence
     * ##########################################
    **/
    {
        path: '/student-attendence',
        name: 'student-attendence',
        component: () => import('./components/attendence/student')
    },
    {
        path: '/teacher-attendence',
        name: 'teacher-attendence',
        component: () => import('./components/attendence/teacher')
    },
    {
        path: '/staff-attendence',
        name: 'staff-attendence',
        component: () => import('./components/attendence/staff')
    },
    /**
     * ##########################################
     * Routes for ID-Card
     * ##########################################
    **/
    {
        path: '/student-id-card',
        name: 'student-id-card',
        component: () => import('./components/idcard/student')
    },
    {
        path: '/teacher-id-card',
        name: 'teacher-id-card',
        component: () => import('./components/idcard/teacher')
    },
    {
        path: '/staff-id-card',
        name: 'staff-id-card',
        component: () => import('./components/idcard/staff')
    },
    /**
     * ##########################################
     * Routes for Profiles
     * ##########################################
    **/
    {
        path: '/edit-profile',
        name: 'edit-profile',
        component: () => import('./components/profile/edit')
    },
    {
        path: '/change-password',
        name: 'change-password',
        component: () => import('./components/profile/change_password')
    },
    {
        path: '/settings',
        name: 'settings',
        component: () => import('./components/profile/settings')
    },
    /**
     * ##########################################
     * Routes for LMS
     * ##########################################
    **/
    {
        path: '/library-pass',
        name: 'library-pass',
        component: () => import('./components/lms/pass')
    },
    {
        path: '/library-pass/edit/:id',
        name: 'edit-library-pass',
        component: () => import('./components/lms/pass')
    },
    {
        path: '/book-category',
        name: 'book-category',
        component: () => import('./components/lms/category')
    },
    {
        path: '/book-category/edit/:id',
        name: 'edit-book-category',
        component: () => import('./components/lms/category')
    },
    {
        path: '/book',
        name: 'book',
        component: () => import('./components/lms/book/view')
    },
    {
        path: '/book/add',
        name: 'add-book',
        component: () => import('./components/lms/book/add')
    },
    {
        path: '/book/edit/:id',
        name: 'edit-book',
        component: () => import('./components/lms/book/add')
    },
    {
      path: '/lms/setting',
      name: 'lms-setting',
      component: () => import('./components/lms/setting')
    },
    {
      path: '/lms/issue-history',
      name: 'issue-history',
      component: () => import('./components/lms/history')
    },
    {
      path: '/lms/issue',
      name: 'issue-book',
      component: () => import('./components/lms/issue_book')
    },
    /**
     * ##########################################
     * Routes for LMS
     * ##########################################
    **/
   {
    path: '/class-teacher-allocation',
    name: 'class-teacher-allocation',
    component: () => import('./components/class-teacher/edit')
   }
];
