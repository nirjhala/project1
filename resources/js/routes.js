import { global_params } from './global_params'

export const routes = [
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
    {
        path: '/conference-class',
        name: 'VideoClass',
        component: () => import('./components/school-panel/video_class')
    },
    /**
     * ##########################################
     * Routes for Dashboard
     * ##########################################
    **/
    {
        path: '/erp-panel',
        component: () => import('./components/Layout'),
        children: [
            {
                path: '',
                name: 'dashboard',
                component: () => import('./components/Dashboard'),
                meta: { requireAuth: true }
            },
            /**
             * ##########################################
             * Routes for Error Pages
             * ##########################################
            **/
            {
                path: '505-forbidden',
                name: 'forbidden',
                component: () => import('./components/errors/ForbiddenError'),
                meta: { requireAuth: true }
            },
            {
                path: '404-error',
                name: 'page-not-found',
                component: () => import('./components/errors/NotFoundError'),
                meta: { requireAuth: true }
            },
            /**
             * ##########################################################
             * Routes for Master Entries
             * ##########################################################
            **/
            {
                path: 'master',
                name: 'master',
                component: () => import('./components/school-panel/master/master')
            },
            /**
             * School Panel -> School Routes
             * 
             * 1. Events
             * 2. Event Calendar
             * 3. Holidays
             * 4. Holiday Caldendar
             * 5. Pages
             * 6. Menu
             * 7. Gallery
             * 8. News
             */
            {
                path: 'school/master',
                name: 'SchoolMaster',
                component: () => import('./components/school-panel/school/master')
            },
            {
                path: 'school/event/calendar',
                name: 'EventCalendar',
                component: () => import('./components/school-panel/school/event/calendar')
            },
            {
                path: 'school/event',
                name: 'ViewEvent',
                component: () => import('./components/school-panel/school/event/view')
            },
            {
                path: 'school/event/add',
                name: 'AddEvent',
                component: () => import('./components/school-panel/school/event/add')
            },
            {
                path: 'school/event/edit/:id',
                name: 'EditEvent',
                component: () => import('./components/school-panel/school/event/add')
            },
            {
                path: 'school/holiday/calendar',
                name: 'HolidayCalendar',
                component: () => import('./components/school-panel/school/holiday/calendar')
            },
            {
                path: 'school/holiday',
                name: 'ViewHoliday',
                component: () => import('./components/school-panel/school/holiday/view')
            },
            {
                path: 'school/holiday/add',
                name: 'AddHoliday',
                component: () => import('./components/school-panel/school/holiday/add')
            },
            {
                path: 'school/holiday/edit/:id',
                name: 'EditHoliday',
                component: () => import('./components/school-panel/school/holiday/add')
            },
            {
                path: 'school/page',
                name: 'ViewPage',
                component: () => import('./components/school-panel/school/page/view')
            },
            {
                path: 'school/page/add',
                name: 'AddPage',
                component: () => import('./components/school-panel/school/page/add')
            },
            {
                path: 'school/page/edit/:id',
                name: 'EditPage',
                component: () => import('./components/school-panel/school/page/add')
            },
            {
                path: 'school/menu',
                name: 'Menu',
                component: () => import('./components/school-panel/school/menu')
            },
            {
                path: 'school/news',
                name: 'News',
                component: () => import('./components/school-panel/school/news/view')
            },
            {
                path: 'school/news/add',
                name: 'AddNews',
                component: () => import('./components/school-panel/school/news/add')
            },
            {
                path: 'school/news/edit/:id',
                name: 'EditNews',
                component: () => import('./components/school-panel/school/news/add')
            },
            {
                path: 'school/notice',
                name: 'Notice',
                component: () => import('./components/school-panel/school/notice/view')
            },
            {
                path: 'school/notice/add',
                name: 'AddNotice',
                component: () => import('./components/school-panel/school/notice/add')
            },
            {
                path: 'school/notice/edit/:id',
                name: 'EditNotice',
                component: () => import('./components/school-panel/school/notice/add')
            },
            {
                path: 'school/gallery',
                name: 'ViewGallery',
                component: () => import('./components/school-panel/school/gallery/view')
            },
            {
                path: 'school/gallery/add',
                name: 'AddGallery',
                component: () => import('./components/school-panel/school/gallery/add')
            },
            {
                path: 'school/gallery/edit/:id',
                name: 'EditGallery',
                component: () => import('./components/school-panel/school/gallery/add')
            },
            /**
             * Routes for Assignment
             */
            {
                path: 'assignment',
                name: 'AssignmentMaster',
                component: () => import('./components/school-panel/assignment/master')
            },
            {
                path: 'assignment/issue',
                name: 'AssignmentIssue',
                component: () => import('./components/school-panel/assignment/issue')
            },
            {
                path: 'assignment/edit/:id',
                name: 'UpdateAssignment',
                component: () => import('./components/school-panel/assignment/issue')
            },
            {
                path: 'assignment/manage',
                name: 'ManageAssignement',
                component: () => import('./components/school-panel/assignment/manage')
            },
            {
                path: 'assignment/allot/:id',
                name: 'AllotAssignment',
                component: () => import('./components/school-panel/assignment/allot')
            },
            /**
             * ##########################################################
             * Routes for Session
             * ##########################################################
            **/
            {
                path: 'session',
                name: 'session',
                component: () => import('./components/school-panel/session/view'),
                meta: { requireAuth: true, role: ['School'] }
            },
            {
                path: 'add-session',
                name: 'add-session',
                component: () => import('./components/school-panel/session/add'),
                meta: { requireAuth: true, role: ['School'] }
            },
            {
                path: 'edit-session/:id',
                name: 'edit-session',
                component: () => import('./components/school-panel/session/add'),
                meta: { requireAuth: true, role: ['School'] }
            },
            /**
             * ##########################################
             * Routes for Shifts
             * ##########################################
            **/
            {
                path: 'shift',
                name: 'shift',
                component: () => import('./components/school-panel/shift/view'),
                meta: { requireAuth: true, role: ['School'] }
            },
            {
                path: 'add-shift',
                name: 'add-shift',
                component: () => import('./components/school-panel/shift/add'),
                meta: { requireAuth: true, role: ['School'] }
            },
            {
                path: 'edit-shift/:id',
                name: 'edit-shift',
                component: () => import('./components/school-panel/shift/add'),
                meta: { requireAuth: true, role: ['School'] }
            },
            /**
             * ##########################################
             * Routes for Department
             * ##########################################
            **/
            {
                path: 'department',
                name: 'department',
                component: () => import('./components/school-panel/department/viewDepartment'),
                meta: { requireAuth: true, role: ['School'] }
            },
            {
                path: 'add-department',
                name: 'add-department',
                component: () => import('./components/school-panel/department/addDepartment'),
                meta: { requireAuth: true, role: ['School'] }
            },
            {
                path: 'edit-department/:id',
                name: 'edit-department',
                component: () => import('./components/school-panel/department/addDepartment'),
                meta: { requireAuth: true, role: ['School'] }
            },
            /**
             * ##########################################
             * Routes for Class Master
             * ##########################################
            **/
            {
                path: 'class',
                name: 'class',
                component: () => import('./components/school-panel/class/viewClass'),
                meta: { requireAuth: true, role: ['School'] }
            },
            {
                path: 'add-class',
                name: 'add-class',
                component: () => import('./components/school-panel/class/addClass'),
                meta: { requireAuth: true, role: ['School'] }
            },
            {
                path: 'edit-class/:id',
                name: 'edit-class',
                component: () => import('./components/school-panel/class/addClass'),
                meta: { requireAuth: true, role: ['School'] }
            },
            /**
             * ##########################################
             * Routes for Section Master
             * ##########################################
            **/
            {
                path: 'section',
                name: 'section',
                component: () => import('./components/school-panel/section/view'),
                meta: { requireAuth: true, role: ['School'] }
            },
            {
                path: 'add-section',
                name: 'add-section',
                component: () => import('./components/school-panel/section/add'),
                meta: { requireAuth: true, role: ['School'] }
            },
            {
                path: 'edit-section/:id',
                name: 'edit-section',
                component: () => import('./components/school-panel/section/edit'),
                meta: { requireAuth: true, role: ['School'] }
            },
            /**
             * ##########################################
             * Routes for Subject Master
             * ##########################################
            **/
            {
                path: 'subject',
                name: 'subject',
                component: () => import('./components/school-panel/subject/view'),
                meta: { requireAuth: true, role: ['School'] }
            },
            {
                path: 'add-subject',
                name: 'add-subject',
                component: () => import('./components/school-panel/subject/add'),
                meta: { requireAuth: true, role: ['School'] }
            },
            {
                path: 'edit-subject/:id',
                name: 'edit-subject',
                component: () => import('./components/school-panel/subject/add'),
                meta: { requireAuth: true, role: ['School'] }
            },
            /**
             * ##########################################
             * Routes for Timeslot Master
             * ##########################################
            **/
            {
                path: 'timeslot',
                name: 'timeslot',
                component: () => import('./components/school-panel/timeslot/view'),
                meta: { requireAuth: true, role: ['School'] }
            },
            {
                path: 'add-timeslot',
                name: 'add-timeslot',
                component: () => import('./components/school-panel/timeslot/add'),
                meta: { requireAuth: true, role: ['School'] }
            },
            {
                path: 'edit-timeslot/:id',
                name: 'edit-timeslot',
                component: () => import('./components/school-panel/timeslot/add'),
                meta: { requireAuth: true, role: ['School'] }
            },
            /**
             * ##########################################
             * Routes for User Master
             * ##########################################
            **/
            {
                path: 'user/master',
                name: 'UserMaster',
                component: () => import('./components/school-panel/user/master'),
                meta: { requireAuth: true, role: ['School'] }
            },
            {
                path: 'user/:role',
                name: 'ViewUser',
                component: () => import('./components/school-panel/user/view'),
                meta: { requireAuth: true, role: ['School'] }
            },
            {
                path: 'user/add/:role',
                name: 'AddUser',
                component: () => import('./components/school-panel/user/add'),
                meta: { requireAuth: true, role: ['School'] }
            },
            {
                path: 'user/edit/:role/:id',
                name: 'EditUser',
                component: () => import('./components/school-panel/user/add'),
                meta: { requireAuth: true, role: ['School'] }
            },
            {
                path: 'user/:role/:id',
                name: 'UserDetail',
                component: () => import('./components/school-panel/user/info'),
                meta: { requireAuth: true, role: ['School'] }
            },
            /**
             * ##########################################
             * Routes for Religion Master
             * ##########################################
            **/
            {
                path: 'religion',
                name: 'religion',
                component: () => import('./components/school-panel/religion/view'),
                meta: { requireAuth: true, role: ['School'] }
            },
            {
                path: 'add-religion',
                name: 'add-religion',
                component: () => import('./components/school-panel/religion/add'),
                meta: { requireAuth: true, role: ['School'] }
            },
            {
                path: 'edit-religion/:id',
                name: 'edit-religion',
                component: () => import('./components/school-panel/religion/add'),
                meta: { requireAuth: true, role: ['School'] }
            },
            /**
             * ##########################################
             * Routes for Hostel Master
             * ##########################################
            **/
            {
                path: 'hostel',
                name: 'hostel',
                component: () => import('./components/school-panel/hostel/view'),
                meta: { requireAuth: true, role: ['School'] }
            },
            {
                path: 'add-hostel',
                name: 'add-hostel',
                component: () => import('./components/school-panel/hostel/add'),
                meta: { requireAuth: true, role: ['School'] }
            },
            {
                path: 'edit-hostel/:id',
                name: 'edit-hostel',
                component: () => import('./components/school-panel/hostel/add'),
                meta: { requireAuth: true, role: ['School'] }
            },
            /**
             * ##########################################
             * Routes for Vehicle Master
             * ##########################################
            **/
            {
                path: 'vehicle',
                name: 'vehicle',
                component: () => import('./components/school-panel/vehicle/view'),
                meta: { requireAuth: true, role: ['School'] }
            },
            {
                path: 'add-vehicle',
                name: 'add-vehicle',
                component: () => import('./components/school-panel/vehicle/add'),
                meta: { requireAuth: true, role: ['School'] }
            },
            {
                path: 'edit-vehicle/:id',
                name: 'edit-vehicle',
                component: () => import('./components/school-panel/vehicle/add'),
                meta: { requireAuth: true, role: ['School'] }
            },
            /**
             * ##########################################
             * Routes for Driving Routes
             * ##########################################
            **/
            {
                path: 'route',
                name: 'route',
                component: () => import('./components/school-panel/route/view'),
                meta: { requireAuth: true, role: ['School'] }
            },
            {
                path: 'add-route',
                name: 'add-route',
                component: () => import('./components/school-panel/route/add'),
                meta: { requireAuth: true, role: ['School'] }
            },
            {
                path: 'edit-route/:id',
                name: 'edit-route',
                component: () => import('./components/school-panel/route/add'),
                meta: { requireAuth: true, role: ['School'] }
            },
            /**
             * ##########################################
             * Routes for Admission
             * ##########################################
            **/
            {
                path: 'admission/master',
                name: 'StudentMaster',
                component: () => import('./components/school-panel/student/master')
            },
            {
                path: 'admission/enquiry',
                name: 'SchoolAdmissionEnquiry',
                component: () => import('./components/school-panel/student/enquiry')
            },
            {
                path: 'student',
                name: 'ViewStudent',
                component: () => import('./components/school-panel/student/view'),
                meta: { requireAuth: true, role: ['School'] }
            },
            {
                path: 'student/add',
                name: 'AddStudent',
                component: () => import('./components/school-panel/student/add'),
                meta: { requireAuth: true, role: ['School'] }
            },
            {
                path: 'student/edit/:id',
                name: 'EditStudent',
                component: () => import('./components/school-panel/student/add'),
                meta: { requireAuth: true, role: ['School'] }
            },
            {
                path: 'student/info/:id',
                name: 'StudentDetails',
                component: () => import('./components/school-panel/student/info'),
                meta: { requireAuth: true, role: ['School'] }
            },
            {
                path: 'student/attendence/:id',
                name: 'StudentAttendance',
                component: () => import('./components/school-panel/student/attendence'),
                meta: { requireAuth: true, role: ['School'] }
            },
            {
                path: 'student/marksheet/:id',
                name: 'StudentMarksheet',
                component: () => import('./components/school-panel/student/marksheet'),
                meta: { requireAuth: true, role: ['School'] }
            },
            {
                path: 'student/fees/:id',
                name: 'StudentFeeDetails',
                component: () => import('./components/school-panel/student/fees'),
                meta: { requireAuth: true, role: ['School'] }
            },
            {
                path: 'student/pay-fees/:id',
                name: 'StudentPayFee',
                component: () => import('./components/school-panel/student/payFees'),
                meta: { requireAuth: true, role: ['School'] }
            },
            {
                path: 'student/one-click',
                name: 'StudentOneClick',
                component: () => import('./components/school-panel/student/oneclick'),
                meta: { requireAuth: true, role: ['School'] }
            },
            /**
             * ##########################################
             * Routes for Fees Type
             * ##########################################
            **/
            {
                path: 'fees-management',
                name: 'FeeMaster',
                component: () => import('./components/school-panel/fees-management/master')
            },
            {
                path: 'fees-type',
                name: 'fees-type',
                component: () => import('./components/school-panel/fees-type/view'),
                meta: { requireAuth: true, role: ['School'] }
            },
            {
                path: 'add-fees-type',
                name: 'add-fees-type',
                component: () => import('./components/school-panel/fees-type/add'),
                meta: { requireAuth: true, role: ['School'] }
            },
            {
                path: 'edit-fees-type/:id',
                name: 'edit-fees-type',
                component: () => import('./components/school-panel/fees-type/add'),
                meta: { requireAuth: true, role: ['School'] }
            },
            /**
             * ##########################################
             * Routes for Fees Installment
             * ##########################################
            **/
            {
                path: 'fees-installment',
                name: 'fees-installment',
                component: () => import('./components/school-panel/fees-installment/view'),
                meta: { requireAuth: true, role: ['School'] }
            },
            {
                path: 'add-fees-installment',
                name: 'add-fees-installment',
                component: () => import('./components/school-panel/fees-installment/add'),
                meta: { requireAuth: true, role: ['School'] }
            },
            {
                path: 'edit-fees-installment/:id',
                name: 'edit-fees-installment',
                component: () => import('./components/school-panel/fees-installment/add'),
                meta: { requireAuth: true, role: ['School'] }
            },
            /**
             * ##########################################
             * Routes for Fees
             * ##########################################
            **/
            {
                path: 'fees',
                name: 'fees',
                component: () => import('./components/school-panel/fees/view'),
                meta: { requireAuth: true, role: ['School'] }
            },
            {
                path: 'due-fees',
                name: 'due-fees',
                component: () => import('./components/school-panel/fees/due'),
                meta: { requireAuth: true, role: ['School'] }
            },
            {
                path: 'fees-collection',
                name: 'fees-collection',
                component: () => import('./components/school-panel/fees-collection/index'),
                meta: { requireAuth: true, role: ['School'] }
            },
            {
                path: 'fees/info/:id',
                name: 'fees-info',
                component: () => import('./components/school-panel/fees-collection/info'),
                meta: { requireAuth: true, role: ['School'] }
            },
            /**
             * Routes for Certificate
             */
            {
                path: 'certificate',
                name: 'CertificateMaster',
                component: () => import('./components/school-panel/certificate/master')
            },
            {
                path: 'certificate/tc/add',
                name: 'AddTc',
                component: () => import('./components/school-panel/certificate/add_tc')
            },
            {
                path: 'certificate/tc/edit/:id',
                name: 'EditTc',
                component: () => import('./components/school-panel/certificate/add_tc')
            },
            {
                path: 'certificate/tc',
                name: 'ViewTc',
                component: () => import('./components/school-panel/certificate/tc')
            },
            {
                path: 'certificate/:type/add',
                name: 'AddCertificate',
                component: () => import('./components/school-panel/certificate/add')
            },
            {
                path: 'certificate/:type/edit/:id',
                name: 'EditCertificate',
                component: () => import('./components/school-panel/certificate/add')
            },
            {
                path: 'certificate/:type',
                name: 'ViewCertificate',
                component: () => import('./components/school-panel/certificate/index')
            },
            /**
             * Routes for Exam
             */
            {
                path: 'examination',
                name: 'ExamMaster',
                component: () => import('./components/school-panel/examination/master')
            },
            {
                path: 'examination/exam-type',
                name: 'ExamType',
                component: () => import('./components/school-panel/examination/ExamType')
            },
            {
                path: 'examination/exam-type/:id',
                name: 'EditExamType',
                component: () => import('./components/school-panel/examination/ExamType')
            },
            {
                path: 'examination/admit-card',
                name: 'ViewAdmitCard',
                component: () => import('./components/school-panel/examination/AdmitCard')
            },
            {
                path: 'examination/admit-card/add',
                name: 'AddAdmitCard',
                component: () => import('./components/school-panel/examination/AddAdmitCard')
            },
            {
                path: 'examination/marksheet',
                name: 'ViewMarksheet',
                component: () => import('./components/school-panel/examination/Marksheet')
            },
            {
                path: 'examination/marksheet/fill',
                name: 'FillMarksheet',
                component: () => import('./components/school-panel/examination/FillMarksheet')
            },
            /**
             * Routes for Online Class
             */
            {
                path: 'online-class',
                name: 'OnlineClassMaster',
                component: () => import('./components/school-panel/onlineclass/master')
            },
            {
                path: 'online-class/add',
                name: 'AddOnlineClass',
                component: () => import('./components/school-panel/onlineclass/Add')
            },
            {
                path: 'online-class/edit/:id',
                name: 'EditOnlineClass',
                component: () => import('./components/school-panel/onlineclass/Add')
            },
            {
                path: 'view-online-class',
                name: 'ViewOnlineClass',
                component: () => import('./components/school-panel/onlineclass/Index')
            },
            /**
             * Routes for Payroll
             */
            {
                path: 'payroll-management',
                name: 'PayrollMaster',
                component: () => import('./components/school-panel/payroll/master')
            },
            {
                path: 'payroll-management/pay-grade',
                name: 'PayGrade',
                component: () => import('./components/school-panel/payroll/PayGrade')
            },
            {
                path: 'payroll-management/pay-grade/add',
                name: 'AddPayGrade',
                component: () => import('./components/school-panel/payroll/AddPayGrade')
            },
            {
                path: 'payroll-management/pay-grade/edit/:id',
                name: 'EditPayGrade',
                component: () => import('./components/school-panel/payroll/AddPayGrade')
            },
            {
                path: 'payroll-management/promotion-increament',
                name: 'PayrollPromotion',
                component: () => import('./components/school-panel/payroll/Promotion')
            },
            {
                path: 'payroll-management/promotion-increament/add',
                name: 'AddPayrollPromotion',
                component: () => import('./components/school-panel/payroll/AddPromotion')
            },
            {
                path: 'payroll-management/promotion-increament/edit/:id',
                name: 'EditPayrollPromotion',
                component: () => import('./components/school-panel/payroll/AddPromotion')
            },
            {
                path: 'payroll-management/allowance',
                name: 'PayrollAllowance',
                component: () => import('./components/school-panel/payroll/Allowance')
            },
            {
                path: 'payroll-management/allowance/add',
                name: 'AddPayrollAllowance',
                component: () => import('./components/school-panel/payroll/AddAllowance')
            },
            {
                path: 'payroll-management/deduction',
                name: 'PayrollDeduction',
                component: () => import('./components/school-panel/payroll/Deduction')
            },
            {
                path: 'payroll-management/deduction/add',
                name: 'AddPayrollDeduction',
                component: () => import('./components/school-panel/payroll/AddDeduction')
            },
            {
                path: 'payroll-management/salary-slip',
                name: 'PayrollSalarySlip',
                component: () => import('./components/school-panel/payroll/SalarySlip')
            },
            {
                path: 'payroll-management/salary-slip/add',
                name: 'AddPayrollSalarySlip',
                component: () => import('./components/school-panel/payroll/AddSalarySlip')
            },
            /**
             * Routes for Inventory
             */
            {
                path: 'inventory',
                name: 'InventoryMaster',
                component: () => import('./components/school-panel/inventory/master')
            },
            {
                path: 'inventory/item',
                name: 'ViewItem',
                component: () => import('./components/school-panel/inventory/item/index')
            },
            {
                path: 'inventory/item/add',
                name: 'AddItem',
                component: () => import('./components/school-panel/inventory/item/add')
            },
            {
                path: 'inventory/item/edit/:id',
                name: 'EditItem',
                component: () => import('./components/school-panel/inventory/item/add')
            },
            {
                path: 'inventory/supplier',
                name: 'ViewSupplier',
                component: () => import('./components/school-panel/inventory/supplier/index')
            },
            {
                path: 'inventory/supplier/add',
                name: 'AddSupplier',
                component: () => import('./components/school-panel/inventory/supplier/add')
            },
            {
                path: 'inventory/supplier/edit/:id',
                name: 'EditSupplier',
                component: () => import('./components/school-panel/inventory/supplier/add')
            },
            {
                path: 'inventory/purchase',
                name: 'ViewPurchase',
                component: () => import('./components/school-panel/inventory/purchase/index')
            },
            {
                path: 'inventory/purchase/add',
                name: 'AddPurchase',
                component: () => import('./components/school-panel/inventory/purchase/add')
            },
            {
                path: 'inventory/purchase/edit/:id',
                name: 'EditPurchase',
                component: () => import('./components/school-panel/inventory/purchase/add')
            },
            {
                path: 'inventory/sale',
                name: 'ViewSale',
                component: () => import('./components/school-panel/inventory/sale/index')
            },
            {
                path: 'inventory/sale/add',
                name: 'AddSale',
                component: () => import('./components/school-panel/inventory/sale/add')
            },
            {
                path: 'inventory/sale/edit/:id',
                name: 'EditSale',
                component: () => import('./components/school-panel/inventory/sale/add')
            },
            {
                path: 'inventory/receipt',
                name: 'ViewReceipt',
                component: () => import('./components/school-panel/inventory/receipt/index')
            },
            {
                path: 'inventory/receipt/add',
                name: 'AddReceipt',
                component: () => import('./components/school-panel/inventory/receipt/add')
            },
            {
                path: 'inventory/receipt/edit/:id',
                name: 'EditReceipt',
                component: () => import('./components/school-panel/inventory/receipt/add')
            },
            {
                path: 'inventory/payment',
                name: 'ViewPayment',
                component: () => import('./components/school-panel/inventory/payment/index')
            },
            {
                path: 'inventory/payment/add',
                name: 'AddPayment',
                component: () => import('./components/school-panel/inventory/payment/add')
            },
            {
                path: 'inventory/payment/edit/:id',
                name: 'EditPayment',
                component: () => import('./components/school-panel/inventory/payment/add')
            },
            {
                path: 'inventory/debit-note',
                name: 'ViewDebitNote',
                component: () => import('./components/school-panel/inventory/debit-note/index')
            },
            {
                path: 'inventory/debit-note/add',
                name: 'AddDebitNote',
                component: () => import('./components/school-panel/inventory/debit-note/add')
            },
            {
                path: 'inventory/debit-note/edit/:id',
                name: 'EditDebitNote',
                component: () => import('./components/school-panel/inventory/debit-note/add')
            },
            {
                path: 'inventory/credit-note',
                name: 'ViewCreditNote',
                component: () => import('./components/school-panel/inventory/credit-note/index')
            },
            {
                path: 'inventory/credit-note/add',
                name: 'AddCreditNote',
                component: () => import('./components/school-panel/inventory/credit-note/add')
            },
            {
                path: 'inventory/credit-note/edit/:id',
                name: 'EditCreditNote',
                component: () => import('./components/school-panel/inventory/credit-note/add')
            },
            {
                path: 'inventory/report/stock',
                name: 'StockReport',
                component: () => import('./components/school-panel/inventory/reports/Stock')
            },
            {
                path: 'inventory/report/day-book',
                name: 'DayBook',
                component: () => import('./components/school-panel/inventory/reports/DayBook')
            },
            {
                path: 'inventory/report/cash-book',
                name: 'CashBook',
                component: () => import('./components/school-panel/inventory/reports/CashBook')
            },
            {
                path: 'inventory/report/bank-entry',
                name: 'BankBook',
                component: () => import('./components/school-panel/inventory/reports/BankBook')
            },
            {
                path: 'inventory/report/ledger',
                name: 'Ledger',
                component: () => import('./components/school-panel/inventory/reports/Ledger')
            },
            /**
             * Routes for Online Exam
             */
            {
                path: 'online-exam',
                name: 'OnlineExamMaster',
                component: () => import('./components/school-panel/onlineexam/master')
            },
            {
                path: 'online-exam/question',
                name: 'ViewQuestion',
                component: () => import('./components/school-panel/onlineexam/question/index')
            },
            {
                path: 'online-exam/question/add',
                name: 'AddQuestion',
                component: () => import('./components/school-panel/onlineexam/question/add')
            },
            {
                path: 'online-exam/question/edit/:id',
                name: 'EditQuestion',
                component: () => import('./components/school-panel/onlineexam/question/add')
            },
            {
                path: 'online-exam/instruction',
                name: 'ViewInstruction',
                component: () => import('./components/school-panel/onlineexam/instruction/index')
            },
            {
                path: 'online-exam/instruction/add',
                name: 'AddInstruction',
                component: () => import('./components/school-panel/onlineexam/instruction/add')
            },
            {
                path: 'online-exam/instruction/edit/:id',
                name: 'EditInstruction',
                component: () => import('./components/school-panel/onlineexam/instruction/add')
            },
            {
                path: 'online-exam/test',
                name: 'ViewTest',
                component: () => import('./components/school-panel/onlineexam/test/index')
            },
            {
                path: 'online-exam/test/add',
                name: 'AddTest',
                component: () => import('./components/school-panel/onlineexam/test/add')
            },
            {
                path: 'online-exam/test/edit/:id',
                name: 'EditTest',
                component: () => import('./components/school-panel/onlineexam/test/add')
            },
            /**
             * ##########################################
             * Routes for Time Table
             * ##########################################
            **/
            {
                path: 'week-day',
                name: 'week-day',
                component: () => import('./components/school-panel/weekday/edit'),
                meta: { requireAuth: true, role: ['School'] }
            },
            {
                path: 'student-time-table',
                name: 'student-time-table',
                component: () => import('./components/school-panel/timetable/view'),
                meta: { requireAuth: true, role: ['School', 'Teacher'] }
            },
            {
                path: 'teacher-time-table',
                name: 'teacher-time-table',
                component: () => import('./components/school-panel/timetable/teacher'),
                meta: { requireAuth: true, role: ['School'] }
            },
            {
                path: 'create-time-table',
                name: 'create-time-table',
                component: () => import('./components/school-panel/timetable/add'),
                meta: { requireAuth: true, role: ['School'] }
            },
            {
                path: 'edit-time-table/:id',
                name: 'edit-time-table',
                component: () => import('./components/school-panel/timetable/add'),
                meta: { requireAuth: true, role: ['School'] }
            },
            /**
             * ##########################################
             * Routes for Attendence
             * ##########################################
            **/
            {
                path: 'student-attendence',
                name: 'student-attendence',
                component: () => import('./components/school-panel/attendence/student'),
                meta: { requireAuth: true, role: ['School'] }
            },
            {
                path: 'teacher-attendence',
                name: 'teacher-attendence',
                component: () => import('./components/school-panel/attendence/teacher'),
                meta: { requireAuth: true, role: ['School'] }
            },
            {
                path: 'staff-attendence',
                name: 'staff-attendence',
                component: () => import('./components/school-panel/attendence/staff'),
                meta: { requireAuth: true, role: ['School'] }
            },
            /**
             * ##########################################
             * Routes for ID-Card
             * ##########################################
            **/
            {
                path: 'student-id-card',
                name: 'student-id-card',
                component: () => import('./components/school-panel/idcard/student'),
                meta: { requireAuth: true, role: ['School'] }
            },
            {
                path: 'teacher-id-card',
                name: 'teacher-id-card',
                component: () => import('./components/school-panel/idcard/teacher'),
                meta: { requireAuth: true, role: ['School'] }
            },
            {
                path: 'staff-id-card',
                name: 'staff-id-card',
                component: () => import('./components/school-panel/idcard/staff'),
                meta: { requireAuth: true, role: ['School'] }
            },
            /**
             * ##########################################
             * Routes for Profiles
             * ##########################################
            **/
            {
                path: 'edit-profile',
                name: 'edit-profile',
                component: () => import('./components/school-panel/profile/edit'),
                meta: { requireAuth: true }
            },
            {
                path: 'change-password',
                name: 'change-password',
                component: () => import('./components/school-panel/profile/change_password'),
                meta: { requireAuth: true }
            },
            {
                path: 'settings',
                name: 'settings',
                component: () => import('./components/school-panel/profile/settings'),
                meta: { requireAuth: true, role: ['School'] }
            },
            {
                path: 'fee-settings',
                name: 'FeeSetting',
                component: () => import('./components/school-panel/profile/feeSetting'),
                meta: { requireAuth: true, role: ['School'] }
            },
            /**
             * ##########################################
             * Routes for LMS
             * ##########################################
            **/
            {
                path: 'library-pass',
                name: 'library-pass',
                component: () => import('./components/school-panel/lms/pass'),
                meta: { requireAuth: true, role: ['School'] }
            },
            {
                path: 'library-pass/edit/:id',
                name: 'edit-library-pass',
                component: () => import('./components/school-panel/lms/pass'),
                meta: { requireAuth: true, role: ['School'] }
            },
            {
                path: 'book-category',
                name: 'book-category',
                component: () => import('./components/school-panel/lms/category'),
                meta: { requireAuth: true, role: ['School'] }
            },
            {
                path: 'book-category/edit/:id',
                name: 'edit-book-category',
                component: () => import('./components/school-panel/lms/category'),
                meta: { requireAuth: true, role: ['School'] }
            },
            {
                path: 'book',
                name: 'book',
                component: () => import('./components/school-panel/lms/book/view'),
                meta: { requireAuth: true, role: ['School'] }
            },
            {
                path: 'book/add',
                name: 'add-book',
                component: () => import('./components/school-panel/lms/book/add'),
                meta: { requireAuth: true, role: ['School'] }
            },
            {
                path: 'book/edit/:id',
                name: 'edit-book',
                component: () => import('./components/school-panel/lms/book/add'),
                meta: { requireAuth: true, role: ['School'] }
            },
            {
                path: 'lms/setting',
                name: 'lms-setting',
                component: () => import('./components/school-panel/lms/setting'),
                meta: { requireAuth: true, role: ['School'] }
            },
            {
                path: 'lms/issue-history',
                name: 'issue-history',
                component: () => import('./components/school-panel/lms/history'),
                meta: { requireAuth: true, role: ['School'] }
            },
            {
                path: 'lms/issue',
                name: 'issue-book',
                component: () => import('./components/school-panel/lms/issue_book'),
                meta: { requireAuth: true, role: ['School'] }
            },
            /**
             * ##########################################
             * Routes for LMS
             * ##########################################
            **/
            {
                path: 'class-teacher-allocation',
                name: 'class-teacher-allocation',
                component: () => import('./components/school-panel/class-teacher/edit'),
                meta: { requireAuth: true, role: ['School'] }
            },
            /** 
             * Routes for Student Panel
            **/
            {
                path: 'time-table',
                name: 'student-timetable',
                component: () => import('./components/student-panel/timetable'),
                meta: { requireAuth: true, role: ['Student'] }
            },
            {
                path: 'attendence/student',
                name: 'student_attendence',
                component: () => import('./components/student-panel/attendence'),
                meta: { requireAuth: true, role: ['Student'] }
            },
            { // Complain Box
                path: 'complain',
                name: 'view-complain',
                component: () => import('./components/student-panel/complain/index'),
                meta: { requireAuth: true, role: ['School', 'Student'] }
            },
            {
                path: 'complain/add',
                name: 'add-complain',
                component: () => import('./components/student-panel/complain/add'),
                meta: { requireAuth: true, role: ['Student'] }
            },
            {
                path: 'complain/edit/:id',
                name: 'edit-complain',
                component: () => import('./components/student-panel/complain/add'),
                meta: { requireAuth: true, role: ['Student'] }
            },
            /** 
             * Routes for Teacher Panel
            **/
            {
                path: 'teacher-timetable',
                name: 'teacher-timetable',
                component: () => import('./components/teacher-panel/timetable'),
                meta: { requireAuth: true, role: ['Teacher'] }
            },
            {
                path: 'attendence/teacher',
                name: 'teacher_attendence',
                component: () => import('./components/teacher-panel/attendence'),
                meta: { requireAuth: true, role: ['Teacher'] }
            },
            { // Complain Box
                path: 'teacher/complain',
                name: 'view-teacher-complain',
                component: () => import('./components/teacher-panel/complain/index'),
                meta: { requireAuth: true, role: ['Teacher'] }
            },
            /** 
             * Routes for Parent Panel
            **/
            {
                path: 'children',
                name: 'parent-children',
                component: () => import('./components/parent-panel/student'),
                meta: { requireAuth: true, role: ['Parents'] }
            },
            // {
            //     path: 'attendence/teacher',
            //     name: 'teacher_attendence',
            //     component: () => import('./components/parent-panel/attendence'),
            //     meta: { requireAuth: true, role: ['Parents'] }
            // },
            { // Complain Box
                path: 'parent/complain',
                name: 'view-parent-complain',
                component: () => import('./components/parent-panel/complain/index'),
                meta: { requireAuth: true, role: ['Parents'] }
            },
            /** 
             * Routes for Driver Panel
            **/
            {
                path: 'driver/routes',
                name: 'driver-routes',
                component: () => import('./components/driver-panel/routes'),
                meta: { requireAuth: true, role: ['Driver'] }
            }
        ]
    },
    /**
     * Routes for website
     */
    {
        path: '/',
        component: () => import('./views/Layout'),
        children: [
            {
                path: 'news/:slug',
                name: 'NewsDetails',
                component: () => import('./views/pages/news/single')
            },
            {
                path: 'notice/:slug',
                name: 'NoticeDetails',
                component: () => import('./views/pages/notice/single')
            },
            {
                path: 'event/:slug',
                name: 'EventDetails',
                component: () => import('./views/pages/event/single')
            },
            {
                path: ':slug?',
                name: 'Page',
                component: () => import('./views/pages/page')
            }
        ]
    },
];
