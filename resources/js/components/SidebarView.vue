<template>
<!-- Sidebar Area Start Here -->
<div class="sidebar-main sidebar-menu-one sidebar-expand-md sidebar-color">
    <div class="mobile-sidebar-header d-md-none">
        <div class="header-logo">
            <a href=""><img src="img/logo1.png" alt="logo"></a>
        </div>
    </div>
    <div class="sidebar-menu-content">
        <ul class="nav nav-sidebar-menu sidebar-toggle-view">
            <li class="nav-item">
                <router-link :to="{ name: 'dashboard' }" class="nav-link"><i class="icon-dashboard"></i> <span>Dashboard</span></router-link>
            </li>
            <!-- --------------------------------------------------------- 
            | STUDENTS NAV MENU
            ------------------------------------------------------------ -->
            <li class="nav-item" v-if="role == 'Student'">
                <router-link :to="{ name: 'student-timetable' }" class="nav-link"><i class="icon-calendar"></i> <span>Time Table</span></router-link>
            </li>
            <li class="nav-item" v-if="role == 'Student'">
                <router-link :to="{ name: 'student_attendence' }" class="nav-link"><i class="icon-user-check1"></i> <span>Attendence</span></router-link>
            </li>
            <li class="nav-item sidebar-nav-item" v-if="role == 'Student'">
                <a href="#" class="nav-link"><i class="icon-question_answer"></i><span>Complain Box</span></a>
                <ul class="nav sub-group-menu">
                    <li class="nav-item">
                        <router-link :to="{ name: 'add-complain' }" class="nav-link"><i class="fas fa-angle-right"></i> Raise Complain</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{ name: 'view-complain' }" class="nav-link"><i class="fas fa-angle-right"></i> Your Complains</router-link>
                    </li>
                </ul>
            </li>
            <!-- --------------------------------------------------------- 
            | TEACHER NAV MENU
            ------------------------------------------------------------ -->
            <li class="nav-item" v-if="role == 'Teacher'">
                <router-link :to="{ name: 'teacher-timetable' }" class="nav-link"><i class="icon-calendar"></i> <span>Time Table</span></router-link>
            </li>
            <li class="nav-item" v-if="role == 'Teacher'">
                <router-link :to="{ name: 'teacher_attendence' }" class="nav-link"><i class="icon-user-check1"></i> <span>Attendence</span></router-link>
            </li>
            <!-- --------------------------------------------------------- 
            | PARENTS NAV MENU
            ------------------------------------------------------------ -->
            <li class="nav-item" v-if="role == 'Parents'">
                <router-link :to="{ name: 'parent-children' }" class="nav-link"><i class="icon-users"></i> <span>Children</span></router-link>
            </li>
            <li class="nav-item" v-if="role == 'Parents'">
                <router-link :to="{ name: 'parent-complain-box' }" class="nav-link"><i class="icon-question_answer"></i> <span>Complain Box</span></router-link>
            </li>
            <!-- --------------------------------------------------------- 
            | DRIVER NAV MENU
            ------------------------------------------------------------ -->
            <li class="nav-item" v-if="role == 'Driver'">
                <router-link :to="{ name: 'driver-routes' }" class="nav-link"><i class="icon-map"></i> <span>Routes</span></router-link>
            </li>
            <!-- --------------------------------------------------------- 
            | SCHOOL NAV MENU
            ------------------------------------------------------------ -->
            <li class="nav-item" v-if="role == 'School'">
                <router-link :to="{ name: 'master' }" class="nav-link"><i class="icon-apps"></i><span>Master</span></router-link>
            </li>
            <li class="nav-item" v-if="role == 'School'">
                <router-link :to="{ name: 'SchoolMaster' }" class="nav-link"><i class="icon-university"></i><span>School</span></router-link>
            </li>
            <li class="nav-item" v-if="role == 'School'">
                <router-link :to="{ name: 'UserMaster' }" class="nav-link"><i class="icon-users2"></i><span>Users</span></router-link>
            </li>
            <li class="nav-item" v-if="role == 'School'">
                <router-link :to="{ name: 'StudentMaster' }" class="nav-link"><i class="icon-graduation-cap"></i><span>Students</span></router-link>
            </li>
            <li class="nav-item" v-if="role == 'School'">
                <router-link :to="{ name: 'AssignmentMaster' }" class="nav-link"><i class="icon-file_present"></i><span>Assignment</span></router-link>
            </li>
            <li class="nav-item" v-if="role == 'School'">
                <router-link :to="{ name: 'FeeMaster' }" class="nav-link">
                    <i class="icon-rupee"></i>
                    <span>Fees Management</span>
                </router-link>
            </li>
            <li class="nav-item" v-if="role == 'School'">
                <router-link :to="{ name: 'CertificateMaster' }" class="nav-link">
                    <i class="icon-certificate"></i>
                    <span>Certificates</span>
                </router-link>
            </li>
            <li class="nav-item" v-if="role == 'School'">
                <router-link :to="{ name: 'ExamMaster' }" class="nav-link">
                    <i class="icon-forum"></i>
                    <span>Examination</span>
                </router-link>
            </li>
            <li class="nav-item" v-if="role == 'School'">
                <router-link :to="{ name: 'OnlineClassMaster' }" class="nav-link">
                    <i class="icon-laptop"></i>
                    <span>Online Class</span>
                </router-link>
            </li>
            <li class="nav-item" v-if="role == 'School'">
                <router-link :to="{ name: 'PayrollMaster' }" class="nav-link">
                    <i class="icon-money1"></i>
                    <span>Payroll System</span>
                </router-link>
            </li>
            <li class="nav-item" v-if="role == 'School'">
                <router-link :to="{ name: 'InventoryMaster' }" class="nav-link">
                    <i class="icon-show_chart"></i>
                    <span>Inventory</span>
                </router-link>
            </li>
            <li class="nav-item" v-if="role == 'School'">
                <router-link :to="{ name: 'OnlineExamMaster' }" class="nav-link">
                    <i class="icon-mouse"></i>
                    <span>Online Exam</span>
                </router-link>
            </li>
            <li class="nav-item sidebar-nav-item" v-if="role == 'School'">
                <a href="#" class="nav-link"><i class="icon-calendar2"></i><span>Time Table</span></a>
                <ul class="nav sub-group-menu">
                    <li class="nav-item">
                        <router-link :to="{ name: 'week-day' }" class="nav-link"><i class="fas fa-angle-right"></i> Week Day</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{ name: 'create-time-table' }" class="nav-link"><i class="fas fa-angle-right"></i> Create Time Table</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{ name: 'student-time-table' }" class="nav-link"><i class="fas fa-angle-right"></i> Student Time Table</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{ name: 'teacher-time-table' }" class="nav-link"><i class="fas fa-angle-right"></i> Teacher Time Table</router-link>
                    </li>
                </ul>
            </li>
            <li class="nav-item sidebar-nav-item" v-if="role == 'School'">
                <a href="#" class="nav-link"><i class="icon-id-badge"></i><span>ID-Card</span></a>
                <ul class="nav sub-group-menu">
                    <li class="nav-item">
                        <router-link :to="{ name: 'student-id-card' }" class="nav-link"><i class="fas fa-angle-right"></i> Student</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{ name: 'teacher-id-card' }" class="nav-link"><i class="fas fa-angle-right"></i> Teacher</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{ name: 'staff-id-card' }" class="nav-link"><i class="fas fa-angle-right"></i> Staff</router-link>
                    </li>
                </ul>
            </li>
            <li class="nav-item sidebar-nav-item" v-if="role == 'School'">
                <a href="#" class="nav-link"><i class="icon-user-check1"></i><span>Attendence</span></a>
                <ul class="nav sub-group-menu">
                    <li class="nav-item">
                        <router-link :to="{ name: 'student-attendence' }" class="nav-link"><i class="fas fa-angle-right"></i> Student Attendence</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{ name: 'teacher-attendence' }" class="nav-link"><i class="fas fa-angle-right"></i> Teacher Attendence</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{ name: 'staff-attendence' }" class="nav-link"><i class="fas fa-angle-right"></i> Staff Attendence</router-link>
                    </li>
                </ul>
            </li>
            <li class="nav-item" v-if="role == 'School'">
                <router-link :to="{ name: 'class-teacher-allocation' }" class="nav-link"><i class="icon-clipboard"></i> <span>Class Teacher Allocation</span></router-link>
            </li>
            <li class="nav-item sidebar-nav-item" v-if="role == 'School'">
                <a href="#" class="nav-link"><i class="icon-books"></i><span>LMS</span></a>
                <ul class="nav sub-group-menu">
                    <li class="nav-item">
                        <router-link :to="{ name: 'library-pass' }" class="nav-link"><i class="fas fa-angle-right"></i> Library Pass</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{ name: 'book-category' }" class="nav-link"><i class="fas fa-angle-right"></i> Book Category</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{ name: 'book' }" class="nav-link"><i class="fas fa-angle-right"></i> All Book</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{ name: 'add-book' }" class="nav-link"><i class="fas fa-angle-right"></i> Add New Book</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{ name: 'lms-setting' }" class="nav-link"><i class="fas fa-angle-right"></i> Setting</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{ name: 'issue-book' }" class="nav-link"><i class="fas fa-angle-right"></i> Book Issue</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{ name: 'issue-history' }" class="nav-link"><i class="fas fa-angle-right"></i> Book Issue History</router-link>
                    </li>
                </ul>
            </li>
            <li class="nav-item" v-if="role == 'School'">
                <router-link :to="{ name: 'view-complain' }" class="nav-link"><i class="icon-question_answer"></i> <span>Complains / Sugeestion</span></router-link>
            </li>
            <li class="nav-item">
                <router-link :to="{ name: 'edit-profile', params: {} }" class="nav-link"><i class="icon-pencil"></i> <span>Edit Profile</span></router-link>
            </li>
            <li class="nav-item" v-if="role == 'School'">
                <router-link :to="{ name: 'settings', params: {} }" class="nav-link"><i class="icon-settings1"></i> <span>Settings</span></router-link>
            </li>
            <li class="nav-item">
                <router-link :to="{ name: 'change-password', params: {} }" class="nav-link"><i class="icon-lock3"></i> <span>Change Password</span></router-link>
            </li>
            <li class="nav-item">
                <a href="javascript: return void(0)" v-on:click="logOut()" class="nav-link"><i class="icon-power2"></i> <span>Log Out</span></a>
            </li>
        </ul>
    </div>
</div>
<!-- Sidebar Area End Here -->
</template>

<script>

export default {
    name: 'Sidebar',
    data () {
        return {
            role: ''
        }
    },
    mounted () {
        let user_info = localStorage.getItem('user_info')
        if(user_info) {
            user_info = JSON.parse(user_info)
            this.role = user_info.role_name.name
        }
    }
}
</script>
