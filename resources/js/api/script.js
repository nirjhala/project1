let instance = axios.create({
    baseURL: '/school-management/api/',
    json: true
})
export default {
    async execute (method, resource, data = {}, auth = true, files = false) {
        let headers = {
            'Accept': 'application/json',
            'Authorization': null
        }
        if (auth) {
            let token = localStorage.getItem('token')
            headers.Authorization = 'Bearer ' + token
        }
        if (files) {
            headers['Content-Type'] = 'multipart/form-data'
        }

        return instance({
            method,
            url: resource,
            data,
            headers: headers
        })
    },
    /**
     * Session APIs
     */
    getAllSessions (query = '', auth = true) {
        return this.execute('get', `session/all/?${query}`, null, auth)
    },
    /**
     * Admission APIs
     */
    addAdmissionEnquiry (data, auth = true) {
        return this.execute('post', 'admission-enquiry', data, auth)
    },
    admissionEnquiry (page, search, auth = true) {
        return this.execute('get', 'admission-enquiry/?page=' + page + '&s=' + search, null, auth)
    },
    deleteAdmissionEnquiry (data, auth = true) {
        return this.execute('post', 'admission-enquiry/remove', data, auth)
    },

    /**
     * User APIs
     */
    getUsers (page, search, role, custom_field = {}) {
        // search.custom_field = JSON.stringify(search.custom_field)
        let searchQuery     = new URLSearchParams(search).toString()
        // let searchQuery2    = new URLSearchParams(custom_field).toString()
        searchQuery += `&page=${page}&role=${role}`

        for (const cf in custom_field) {
            searchQuery += `&custom_field%5B${cf}%5D=${custom_field[cf]}`
        }
        return this.execute('get', `user/?${searchQuery}`)
    },
    deleteUsers (data) {
        return this.execute('post', 'user/remove', data)
    },
    userInfo (id) {
        return this.execute('get', `user/${id}`)
    },
    /**
     * Students APIs
     */
    getStudents () {
        return this.execute('get', 'student/all')
    },
    studentInfo (id) {
        return this.execute('get', `student/${id}`)
    },
    studentFees (id) {
        return this.execute('get', `student/fees-info/${id}`)
    },
    /**
     * Events APIs
     */
    addEvent (data) {
        return this.execute('post', 'event', data);
    },
    updateEvent (id, data) {
        return this.execute('post', `event/${id}`, data);
    },
    getEvents (page, search) {
        return this.execute('get', `event/?page=${page}&s=${search}`);
    },
    getAllEvents () {
        return this.execute('get', `event/all`)
    },
    eventInfo (id) {
        return this.execute('get', `event/${id}`);
    },
    deleteEvents (data) {
        return this.execute('post', 'event/remove', data)
    },
    /**
     * News APIs
     */
    addNews (data) {
        return this.execute('post', 'news', data);
    },
    updateNews (id, data) {
        return this.execute('post', `news/${id}`, data);
    },
    getNews (page, search) {
        return this.execute('get', `news/?page=${page}&s=${search}`);
    },
    getAllNews () {
        return this.execute('get', `news/all`)
    },
    newsInfo (id) {
        return this.execute('get', `news/${id}`);
    },
    deleteNews (data) {
        return this.execute('post', 'news/remove', data)
    },
    /**
     * Notice APIs
     */
    addNotice (data) {
        return this.execute('post', 'notice', data, true, true);
    },
    updateNotice (id, data) {
        return this.execute('post', `notice/${id}`, data);
    },
    getNotice (page, search) {
        return this.execute('get', `notice/?page=${page}&s=${search}`);
    },
    getAllNotice () {
        return this.execute('get', `notice/all`)
    },
    noticeInfo (id) {
        return this.execute('get', `notice/${id}`);
    },
    deleteNotice (data) {
        return this.execute('post', 'notice/remove', data)
    },
    /**
     * Gallery APIs
     */
    addGallery (data) {
        return this.execute('post', 'gallery', data);
    },
    updateGallery (id, data) {
        return this.execute('post', `gallery/${id}`, data);
    },
    getGallery (page, search) {
        return this.execute('get', `gallery/?page=${page}&s=${search}`);
    },
    getAllGallery () {
        return this.execute('get', `gallery/all`)
    },
    galleryInfo (id) {
        return this.execute('get', `gallery/${id}`);
    },
    deleteGallery (data) {
        return this.execute('post', 'gallery/remove', data)
    },
    /**
     * Holiday APIs
     */
    addHoliday (data) {
        return this.execute('post', 'holiday', data);
    },
    updateHoliday (id, data) {
        return this.execute('post', `holiday/${id}`, data);
    },
    getHolidays (page, search) {
        return this.execute('get', `holiday/?page=${page}&s=${search}`);
    },
    getAllHolidays () {
        return this.execute('get', `holiday/all`)
    },
    holidayInfo (id) {
        return this.execute('get', `holiday/${id}`);
    },
    deleteHolidays (data) {
        return this.execute('post', 'holiday/remove', data)
    },
    /**
     * Templates
     */
    getAllPageTemplate () {
        return this.execute('get', 'page-template/all')
    },
    /**
     * Page
     */
    addPage (data) {
        return this.execute('post', 'page', data)
    },
    updatePage (id, data) {
        return this.execute('post', `page/${id}`, data)
    },
    PageDetails (id = null) {
        return this.execute('get', `page/${id}`)
    },
    getPages (page, search) {
        return this.execute('get', `page/?s=${search}&page=${page}`)
    },
    getAllPages () {
        return this.execute('get', 'page/all')
    },
    /**
     * Menu
     */
    fetchMenu () {
        return this.execute('get', `menu`)
    },
    insertMenu (data) {
        return this.execute('post', 'menu', data)
    },
    deleteMenu (id) {
        return this.execute('DELETE', `menu/${id}`)
    },
    /**
     * Sections
     */
    fetchAllSections () {
        return this.execute('get', `section/all`)
    },
    /**
     * Subjects
     */
    fetchSubjectBySection (section_id) {
        return this.execute('get', `subject/by-section/${section_id}`)
    },
    /**
     * Assignments
     */
    addAssignment (data) {
        return this.execute('post', 'assignment', data)
    },
    AssignmentDetails (id) {
        return this.execute('get', `assignment/${id}`)
    },
    fetchAssignments (page, search) {
        return this.execute('get', `assignment/?s=${search}&page=${page}`)
    },
    fetchAllotStudents (id) {
        return this.execute('get', `assignment-students/${id}`)
    },
    addAssignmentStudent (id, user_ids) {
        return this.execute('post', `assignment-students/${id}`, { 'user_ids': user_ids, 'action': 'add' })
    },
    deleteAssignmentStudent (id, user_ids) {
        return this.execute('post', `assignment-students/${id}`, { 'user_ids': user_ids, 'action': 'delete' })
    },
    /**
     * Website data
     */
    fetchFrontMenues () {
        return this.execute('get', 'web-menu', {}, false)
    },
    fetchPageInfo (slug) {
        return this.execute('get', `web-page/${slug}`, {}, false )
    }
}

const execute = (method, resource, data = {}, auth = true) => {
    let headers = {
        'Accept': 'application/json',
        'Authorization': null
    }
    if(auth) {
        let token = localStorage.getItem('token')
        headers.Authorization = 'Bearer ' + token
    }
    return instance({
        method,
        url: resource,
        data,
        headers: headers
    })
}

export const view_news = (page) => {
    return execute('get', `web-news/?page=${page}`, null, false)
}

export const news_info = (slug) => {
    return execute('get', `web-news/${slug}`, null, false)
}

export const view_all_notices = () => {
    return execute('get', `web-notice`, null, false)
}

export const notice_info = (slug) => {
    return execute('get', `web-notice/${slug}`, null, false)
}

export const view_events = (page) => {
    return execute('get', `web-event/?page=${page}`, null, false)
}

export const event_info = (slug) => {
    return execute('get', `web-event/${slug}`, null, false)
}

export const view_gallery = (type, page) => {
    return execute('get', `web-gallery/?page=${page}&type=${type}&limit=16`, null, false)
}

export const addStudent = (data) => {
    return execute('post', 'student', data)
}

export const studentInfo = (id) => {
    return execute('get', `student/${id}`)
}

export const updateStudentData = (id, data) => {
    return execute('post', `student/${id}`, data)
}

export const view_all_states = () => {
    return execute('get', 'state/all')
}

export const view_certificate = (role) => {
    return execute('get', `certificate/?role=${role}`)
}

export const addUserCertificate = (data) => {
    return execute('post', 'user-certificate', data, true, true)
}

export const view_all_classes = (query) => {
    return execute('get', `get-all-classes/?${query}`)
}

export const view_custom_fields =  (role, query = '') => {
    return execute('get', `custom-field/?role=${role}&${query}`)
}

export const pay_student_fees = (data) => {
    return execute('post', `fee-payment`, data)
}

export const view_fee_setting = () => {
    return execute('get', 'fee-setting')
}

export const update_fee_setting = (id, data) => {
    return execute('put', `fee-setting/${id}`, data)
}

/**
 * School Resources
 * 1. Department 2. Class 3. Section
 */
export const fetchDepartments = () => {
    return execute('get', 'department/all')
}
export const fetchClasses = (deptId) => {
    return execute('get', `class/all/?department_id=${deptId}`)
}
export const fetchSections = (classId) => {
    return execute('get', `section/all/?class_id=${classId}`)
}
export const fetchSubjects = (classId) => {
    return execute('get', `subject/?type=all&class_id=${classId}`)
}

/**
 * Location
 * 1. State 2. City
 */
export const fetchStates = () => {
    return execute('get', 'state')
}
export const fetchCities = (state_id) => {
    return execute('get', `city/?state_id=${state_id}`)
}

/**
 * Religions
 */
export const fetchReligions = () => {
    return execute('get', 'religion')
}

/**
 * Transfer Certificate
 * @param {*} data 
 */
export const add_tc = (data) => {
    return execute('post', `tc`, data)
}
export const edit_tc = (id, data) => {
    return execute('put', `tc/${id}`, data)
}
export const view_tc = (query = '') => {
    return execute('get', `tc/?${query}`)
}
export const delete_tc = (id) => {
    return execute('delete', `tc/${id}`)
}
export const show_tc = (id) => {
    return execute('get', `tc/${id}`)
}
export const multiple_delete_tc = (ids) => {
    return execute('post', `delete-tc`, ids)
}

/**
 * Transfer Certificate
 * @param {*} data 
 */
export const add_sch_certificate = (data) => {
    return execute('post', `school-certificate`, data)
}
export const edit_sch_certificate = (id, data) => {
    return execute('put', `school-certificate/${id}`, data)
}
export const view_sch_certificate = (query = '') => {
    return execute('get', `school-certificate/?${query}`)
}
export const delete_sch_certificate = (id) => {
    return execute('delete', `school-certificate/${id}`)
}
export const show_sch_certificate = (id) => {
    return execute('get', `school-certificate/${id}`)
}
export const multiple_delete_sch_certificate = (ids) => {
    return execute('post', `delete-school-certificate`, ids)
}

/**
 * Exam Type
 * @param {*} data 
 */
export const add_exam_type = (data) => {
    return execute('post', `exam-type`, data)
}
export const edit_exam_type = (id, data) => {
    return execute('put', `exam-type/${id}`, data)
}
export const view_exam_type = (query = '') => {
    return execute('get', `exam-type/?${query}`)
}
export const delete_exam_type = (id) => {
    return execute('delete', `exam-type/${id}`)
}
export const show_exam_type = (id) => {
    return execute('get', `exam-type/${id}`)
}
export const multiple_delete_exam_type = (ids) => {
    return execute('post', `delete-exam-type`, ids)
}

export const view_web_exam_type = (query = '') => {
    return execute('get', `web-exam-type/?${query}`, null, false)
}

/**
 * Admit Card
 * @param {*} data 
 */
export const add_admit_card = (data) => {
    return execute('post', `admit-card`, data)
}
export const edit_admit_card = (id, data) => {
    return execute('put', `admit-card/${id}`, data)
}
export const view_admit_card = (query = '') => {
    return execute('get', `admit-card/?${query}`)
}
export const delete_admit_card = (id) => {
    return execute('delete', `admit-card/${id}`)
}
export const show_admit_card = (id) => {
    return execute('get', `admit-card/${id}`)
}
export const multiple_delete_admit_card = (ids) => {
    return execute('post', `delete-admit-card`, ids)
}
export const view_admit_card_subjects = (exam_type_id, section_id) => {
    return execute('get', `admit-card-subject/${exam_type_id}/${section_id}`)
}
export const add_marksheet = (data) => {
    return execute('post', `marksheet`, data)
}
export const view_marksheet = (query = '') => {
    return execute('get', `marksheet/?${query}`)
}

export const search_admit_card = (data) => {
    return execute('post', `search-admit-card`, data, false)
}

/**
 * Payroll System - Pay Grade
 * @param {*} data 
 */
export const add_pay_grade = (data) => {
    return execute('post', `pay-grade`, data)
}
export const edit_pay_grade = (id, data) => {
    return execute('put', `pay-grade/${id}`, data)
}
export const view_pay_grade = (query = '') => {
    return execute('get', `pay-grade/?${query}`)
}
export const delete_pay_grade = (id) => {
    return execute('delete', `pay-grade/${id}`)
}
export const show_pay_grade = (id) => {
    return execute('get', `pay-grade/${id}`)
}
export const multiple_delete_pay_grade = (ids) => {
    return execute('post', `pay-grade/remove`, ids)
}

export const view_users = (query = '') => {
    return execute('get', `user/?${query}`)
}
export const view_employee_info = (id, query = '') => {
    return execute('get', `employee-info/${id}/?${query}`)
}

export const view_teachers = (class_id, subject_id) => {
    return execute('get', `teacher/?class_id=${class_id}&subject_id=${subject_id}`)
}

/**
 * Payroll System - Promotion / Increament
 * @param {*} data 
 */
export const add_employe_promotion = (data) => {
    return execute('post', `employee-promotion`, data)
}
export const edit_employe_promotion = (id, data) => {
    return execute('put', `employee-promotion/${id}`, data)
}
export const view_employe_promotion = (query = '') => {
    return execute('get', `employee-promotion/?${query}`)
}
export const delete_employe_promotion = (id) => {
    return execute('delete', `employee-promotion/${id}`)
}
export const show_employe_promotion = (id) => {
    return execute('get', `employee-promotion/${id}`)
}
export const multiple_delete_employe_promotion = (ids) => {
    return execute('post', `employee-promotion/remove`, ids)
}

export const view_all_payroll_masters = (type) => {
    return execute('get', `payroll-master/${type}`)
}

/**
 * Payroll System - Allowance
 * @param {*} data 
 */
export const view_max_salary_allowance = (gender, name) => {
    return execute('get', `max-allowance/${gender}/${name}`)
}
export const add_allowance = (data) => {
    return execute('post', `allowance`, data)
}
export const edit_allowance = (id, data) => {
    return execute('put', `allowance/${id}`, data)
}
export const view_allowance = (query = '') => {
    return execute('get', `allowance/?${query}`)
}
export const delete_allowance = (id) => {
    return execute('delete', `allowance/${id}`)
}
export const show_allowance = (id) => {
    return execute('get', `allowance/${id}`)
}
export const multiple_delete_allowance = (ids) => {
    return execute('post', `allowance/remove`, ids)
}

/**
 * Payroll System - Deduction
 * @param {*} data 
 */
export const view_max_salary_deduction = (gender, name) => {
    return execute('get', `max-deduction/${gender}/${name}`)
}
export const add_deduction = (data) => {
    return execute('post', `deduction`, data)
}
export const edit_deduction = (id, data) => {
    return execute('put', `deduction/${id}`, data)
}
export const view_deduction = (query = '') => {
    return execute('get', `deduction/?${query}`)
}
export const delete_deduction = (id) => {
    return execute('delete', `deduction/${id}`)
}
export const show_deduction = (id) => {
    return execute('get', `deduction/${id}`)
}
export const multiple_delete_deduction = (ids) => {
    return execute('post', `deduction/remove`, ids)
}

/**
 * Payroll System - Salary Slip
 * @param {*} data 
 */
export const add_salary_slip = (data) => {
    return execute('post', `salary-slip`, data)
}
export const edit_salary_slip = (id, data) => {
    return execute('put', `salary-slip/${id}`, data)
}
export const view_salary_slip = (query = '') => {
    return execute('get', `salary-slip/?${query}`)
}
export const delete_salary_slip = (id) => {
    return execute('delete', `salary-slip/${id}`)
}
export const show_salary_slip = (id) => {
    return execute('get', `salary-slip/${id}`)
}
export const multiple_delete_salary_slip = (ids) => {
    return execute('post', `salary-slip/remove`, ids)
}

/**
 * Payroll System - Salary Slip
 * @param {*} data 
 */
export const add_online_class = (data) => {
    return execute('post', `online-class`, data)
}
export const edit_online_class = (id, data) => {
    return execute('put', `online-class/${id}`, data)
}
export const view_online_class = (query = '') => {
    return execute('get', `online-class/?${query}`)
}
export const delete_online_class = (id) => {
    return execute('delete', `online-class/${id}`)
}
export const show_online_class = (id) => {
    return execute('get', `online-class/${id}`)
}
export const multiple_delete_online_class = (ids) => {
    return execute('post', `online-class/remove`, ids)
}

/**
 * Inventory - Item
 * @param {*} data 
 */
export const view_gst_rates = () => {
    return execute('get', 'gst-rate')
}
export const add_item = (data) => {
    return execute('post', `item`, data)
}
export const edit_item = (id, data) => {
    return execute('put', `item/${id}`, data)
}
export const view_item = (query = '') => {
    return execute('get', `item/?${query}`)
}
export const delete_item = (id) => {
    return execute('delete', `item/${id}`)
}
export const show_item = (id) => {
    return execute('get', `item/${id}`)
}
export const multiple_delete_item = (ids) => {
    return execute('post', `item/remove`, ids)
}

/**
 * Inventory - Supplier
 * @param {*} data 
 */
export const add_supplier = (data) => {
    return execute('post', `supplier`, data)
}
export const edit_supplier = (id, data) => {
    return execute('put', `supplier/${id}`, data)
}
export const view_supplier = (query = '') => {
    return execute('get', `supplier/?${query}`)
}
export const delete_supplier = (id) => {
    return execute('delete', `supplier/${id}`)
}
export const show_supplier = (id) => {
    return execute('get', `supplier/${id}`)
}
export const multiple_delete_supplier = (ids) => {
    return execute('post', `supplier/remove`, ids)
}

/**
 * Inventory - Purchase
 * @param {*} data 
 */
export const add_purchase = (data) => {
    return execute('post', `purchase`, data)
}
export const edit_purchase = (id, data) => {
    return execute('put', `purchase/${id}`, data)
}
export const view_purchase = (query = '') => {
    return execute('get', `purchase/?${query}`)
}
export const delete_purchase = (id) => {
    return execute('delete', `purchase/${id}`)
}
export const show_purchase = (id) => {
    return execute('get', `purchase/${id}`)
}
export const multiple_delete_purchase = (ids) => {
    return execute('post', `purchase/remove`, ids)
}

/**
 * Inventory - Sale
 * @param {*} data 
 */
export const add_sale = (data) => {
    return execute('post', `sale`, data)
}
export const edit_sale = (id, data) => {
    return execute('put', `sale/${id}`, data)
}
export const view_sale = (query = '') => {
    return execute('get', `sale/?${query}`)
}
export const delete_sale = (id) => {
    return execute('delete', `sale/${id}`)
}
export const show_sale = (id) => {
    return execute('get', `sale/${id}`)
}
export const multiple_delete_sale = (ids) => {
    return execute('post', `sale/remove`, ids)
}

/**
 * Inventory - Receipt
 * @param {*} data 
 */
export const add_receipt = (data) => {
    return execute('post', `receipt`, data)
}
export const edit_receipt = (id, data) => {
    return execute('put', `receipt/${id}`, data)
}
export const view_receipt = (query = '') => {
    return execute('get', `receipt/?${query}`)
}
export const delete_receipt = (id) => {
    return execute('delete', `receipt/${id}`)
}
export const show_receipt = (id) => {
    return execute('get', `receipt/${id}`)
}
export const multiple_delete_receipt = (ids) => {
    return execute('post', `receipt/remove`, ids)
}

/**
 * Inventory - Payment
 * @param {*} data 
 */
export const add_payment = (data) => {
    return execute('post', `payment`, data)
}
export const edit_payment = (id, data) => {
    return execute('put', `payment/${id}`, data)
}
export const view_payment = (query = '') => {
    return execute('get', `payment/?${query}`)
}
export const delete_payment = (id) => {
    return execute('delete', `payment/${id}`)
}
export const show_payment = (id) => {
    return execute('get', `payment/${id}`)
}
export const multiple_delete_payment = (ids) => {
    return execute('post', `payment/remove`, ids)
}

/**
 * Inventory - Debit Note
 * @param {*} data 
 */
export const add_debit_note = (data) => {
    return execute('post', `debit-note`, data)
}
export const edit_debit_note = (id, data) => {
    return execute('put', `debit-note/${id}`, data)
}
export const view_debit_note = (query = '') => {
    return execute('get', `debit-note/?${query}`)
}
export const delete_debit_note = (id) => {
    return execute('delete', `debit-note/${id}`)
}
export const show_debit_note = (id) => {
    return execute('get', `debit-note/${id}`)
}
export const multiple_delete_debit_note = (ids) => {
    return execute('post', `debit-note/remove`, ids)
}

/**
 * Inventory - Credit Note
 * @param {*} data 
 */
export const add_credit_note = (data) => {
    return execute('post', `credit-note`, data)
}
export const edit_credit_note = (id, data) => {
    return execute('put', `credit-note/${id}`, data)
}
export const view_credit_note = (query = '') => {
    return execute('get', `credit-note/?${query}`)
}
export const delete_credit_note = (id) => {
    return execute('delete', `credit-note/${id}`)
}
export const show_credit_note = (id) => {
    return execute('get', `credit-note/${id}`)
}
export const multiple_delete_credit_note = (ids) => {
    return execute('post', `credit-note/remove`, ids)
}

/**
 * Reports
 */
export const view_stock = (query = '') => {
    return execute('get', `stock/?${query}`);
}
export const day_book = (query = '') => {
    return execute('get', `report/day-book/?${query}`);
}
export const cash_book = (query = '') => {
    return execute('get', `report/cash-book/?${query}`);
}
export const bank_book = (query = '') => {
    return execute('get', `report/bank-book/?${query}`);
}
export const ledger = (user) => {
    return execute('get', `report/ledger/${user}`);
}

/**
 * Online Exam - Question
 * @param {*} data 
 */
export const add_question = (data) => {
    return execute('post', `question`, data)
}
export const edit_question = (id, data) => {
    return execute('put', `question/${id}`, data)
}
export const view_question = (query = '') => {
    return execute('get', `question/?${query}`)
}
export const delete_question = (id) => {
    return execute('delete', `question/${id}`)
}
export const show_question = (id) => {
    return execute('get', `question/${id}`)
}
export const multiple_delete_question = (ids) => {
    return execute('post', `question/remove`, ids)
}

/**
 * Online Exam - Instruction
 * @param {*} data 
 */
export const add_instruction = (data) => {
    return execute('post', `instruction`, data)
}
export const edit_instruction = (id, data) => {
    return execute('put', `instruction/${id}`, data)
}
export const view_instruction = (query = '') => {
    return execute('get', `instruction/?${query}`)
}
export const delete_instruction = (id) => {
    return execute('delete', `instruction/${id}`)
}
export const show_instruction = (id) => {
    return execute('get', `instruction/${id}`)
}
export const multiple_delete_instruction = (ids) => {
    return execute('post', `instruction/remove`, ids)
}

/**
 * Online Exam - Test
 * @param {*} data 
 */
export const add_test = (data) => {
    return execute('post', `test`, data)
}
export const edit_test = (id, data) => {
    return execute('put', `test/${id}`, data)
}
export const view_test = (query = '') => {
    return execute('get', `test/?${query}`)
}
export const delete_test = (id) => {
    return execute('delete', `test/${id}`)
}
export const show_test = (id) => {
    return execute('get', `test/${id}`)
}
export const multiple_delete_test = (ids) => {
    return execute('post', `test/remove`, ids)
}

/**
 * Location like Country, State, City
 */
export const view_country = (query) => {
    return execute('get', `country/?${query}`)
}
export const view_state = (query) => {
    return execute('get', `state/?${query}`)
}
export const view_city = (query) => {
    return execute('get', `city/?${query}`)
}