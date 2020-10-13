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
            <li class="nav-item sidebar-nav-item">
                <a href="#" class="nav-link"><i class="icon-apps"></i><span>Master</span></a>
                <ul class="nav sub-group-menu">
                    <li class="nav-item">
                        <router-link :to="{ name: 'session' }" class="nav-link"><i class="fas fa-angle-right"></i> Session</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{ name: 'shift' }" class="nav-link"><i class="fas fa-angle-right"></i> Shifts</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{ name: 'department' }" class="nav-link"><i class="fas fa-angle-right"></i> Department</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{ name: 'class' }" class="nav-link"><i class="fas fa-angle-right"></i> Class</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{ name: 'section' }" class="nav-link"><i class="fas fa-angle-right"></i> Section</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{ name: 'subject' }" class="nav-link"><i class="fas fa-angle-right"></i> Subject</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{ name: 'timeslot' }" class="nav-link"><i class="fas fa-angle-right"></i> Timeslot</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{ name: 'religion' }" class="nav-link"><i class="fas fa-angle-right"></i> Religion</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{ name: 'hostel' }" class="nav-link"><i class="fas fa-angle-right"></i> Hostel</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{ name: 'vehicle' }" class="nav-link"><i class="fas fa-angle-right"></i> Vehicles</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{ name: 'route' }" class="nav-link"><i class="fas fa-angle-right"></i> Route</router-link>
                    </li>
                </ul>
            </li>
            <li class="nav-item sidebar-nav-item">
                <a href="#" class="nav-link"><i class="icon-users2"></i><span>Users</span></a>
                <ul class="nav sub-group-menu">
                    <li class="nav-item">
                        <router-link :to="{ name: 'add-user' }" class="nav-link"><i class="fas fa-angle-right"></i> Add User</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{ name: 'user' }" class="nav-link"><i class="fas fa-angle-right"></i> View User</router-link>
                    </li>
                </ul>
            </li>
            <li class="nav-item sidebar-nav-item">
                <a href="#" class="nav-link"><i class="icon-graduation-cap"></i><span>Students</span></a>
                <ul class="nav sub-group-menu">
                    <li class="nav-item">
                        <router-link :to="{ name: 'add-student' }" class="nav-link"><i class="fas fa-angle-right"></i> Admission</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{ name: 'student' }" class="nav-link"><i class="fas fa-angle-right"></i> Student Lists</router-link>
                    </li>
                    <!-- <li class="nav-item">
                            <a href="" class="nav-link"><i class="fas fa-angle-right"></i>Student Details</a>
                        </li>
                        <li class="nav-item">
                            <a href="" class="nav-link"><i class="fas fa-angle-right"></i>Student Promotion</a>
                        </li> -->
                </ul>
            </li>
            <li class="nav-item sidebar-nav-item">
                <a href="#" class="nav-link"><i class="icon-rupee"></i><span>Fees Management</span></a>
                <ul class="nav sub-group-menu">
                    <li class="nav-item">
                        <router-link :to="{ name: 'fees-type' }" class="nav-link"><i class="fas fa-angle-right"></i> Fees Type</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{ name: 'fees-installment' }" class="nav-link"><i class="fas fa-angle-right"></i> Fees Installment</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{ name: 'fees' }" class="nav-link"><i class="fas fa-angle-right"></i> Fees</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{ name: 'due-fees' }" class="nav-link"><i class="fas fa-angle-right"></i> Due Fees</router-link>
                    </li>
                </ul>
            </li>

            <li class="nav-item sidebar-nav-item">
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
            <li class="nav-item sidebar-nav-item">
                <a href="#" class="nav-link"><i class="icon-id-badge"></i><span>ID-Card</span></a>
                <ul class="nav sub-group-menu">
                    <li class="nav-item">
                        <router-link :to="{ name: 'student-id-card', query: { v: getNow } }" class="nav-link"><i class="fas fa-angle-right"></i> Student</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{ name: 'teacher-id-card' }" class="nav-link"><i class="fas fa-angle-right"></i> Teacher</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{ name: 'staff-id-card' }" class="nav-link"><i class="fas fa-angle-right"></i> Staff</router-link>
                    </li>
                </ul>
            </li>
            <li class="nav-item sidebar-nav-item">
                <a href="#" class="nav-link"><i class="icon-user-check1"></i><span>Attendence</span></a>
                <ul class="nav sub-group-menu">
                    <li class="nav-item">
                        <router-link :to="{ name: 'student-attendence', query: { v: getNow } }" class="nav-link"><i class="fas fa-angle-right"></i> Student Attendence</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{ name: 'teacher-attendence' }" class="nav-link"><i class="fas fa-angle-right"></i> Teacher Attendence</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{ name: 'staff-attendence' }" class="nav-link"><i class="fas fa-angle-right"></i> Staff Attendence</router-link>
                    </li>
                </ul>
            </li>
            <li class="nav-item">
                <router-link :to="{ name: 'class-teacher-allocation' }" class="nav-link"><i class="icon-clipboard"></i> <span>Class Teacher Allocation</span></router-link>
            </li>
            <li class="nav-item sidebar-nav-item">
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
            <li class="nav-item sidebar-nav-item">
                <a href="#" class="nav-link"><i class="icon-calculator1"></i><span>Acconunt</span></a>
                <ul class="nav sub-group-menu">
                    <li class="nav-item">
                        <a href="" class="nav-link"><i class="fas fa-angle-right"></i> All Fees Collection</a>
                    </li>
                    <li class="nav-item">
                        <a href="" class="nav-link"><i class="fas fa-angle-right"></i> Expenses</a>
                    </li>
                    <li class="nav-item">
                        <a href="" class="nav-link"><i class="fas fa-angle-right"></i> Add Expenses</a>
                    </li>
                </ul>
            </li>
            <!-- <li class="nav-item sidebar-nav-item">
                    <a href="#" class="nav-link"><i
                            class="flaticon-maths-class-materials-cross-of-a-pencil-and-a-ruler"></i><span>Class</span></a>
                    <ul class="nav sub-group-menu">
                        <li class="nav-item">
                            <a href="" class="nav-link"><i class="fas fa-angle-right"></i>All
                                Classes</a>
                        </li>
                        <li class="nav-item">
                            <a href="" class="nav-link"><i class="fas fa-angle-right"></i>Add New
                                Class</a>
                        </li>
                    </ul>
                </li> -->
            <!-- <li class="nav-item">
                    <a href="" class="nav-link"><i
                            class="flaticon-open-book"></i><span>Subject</span></a>
                </li>
                <li class="nav-item">
                    <a href="" class="nav-link"><i class="flaticon-calendar"></i><span>Class
                            Routine</span></a>
                </li> -->
            <!-- <li class="nav-item">
                <a href="" class="nav-link"><i class="icon-user-check1"></i><span>Attendence</span></a>
            </li> -->
            <li class="nav-item sidebar-nav-item">
                <a href="#" class="nav-link"><i class="flaticon-shopping-list"></i><span>Exam</span></a>
                <ul class="nav sub-group-menu">
                    <li class="nav-item">
                        <a href="" class="nav-link"><i class="fas fa-angle-right"></i>Exam
                            Schedule</a>
                    </li>
                    <li class="nav-item">
                        <a href="" class="nav-link"><i class="fas fa-angle-right"></i>Exam
                            Grades</a>
                    </li>
                </ul>
            </li>
            <li class="nav-item">
                <a href="" class="nav-link"><i class="flaticon-bus-side-view"></i><span>Transport</span></a>
            </li>
            <li class="nav-item">
                <a href="" class="nav-link"><i class="flaticon-bed"></i><span>Hostel</span></a>
            </li>
            <!-- <li class="nav-item">
                    <a href="notice-board.html" class="nav-link"><i
                            class="flaticon-script"></i><span>Notice</span></a>
                </li>
                <li class="nav-item">
                    <a href="messaging.html" class="nav-link"><i
                            class="flaticon-chat"></i><span>Messeage</span></a>
                </li> -->
            <!-- <li class="nav-item sidebar-nav-item">
                    <a href="#" class="nav-link"><i class="flaticon-menu-1"></i><span>UI Elements</span></a>
                    <ul class="nav sub-group-menu">
                        <li class="nav-item">
                            <a href="notification-alart.html" class="nav-link"><i class="fas fa-angle-right"></i>Alart</a>
                        </li>
                        <li class="nav-item">
                            <a href="button.html" class="nav-link"><i class="fas fa-angle-right"></i>Button</a>
                        </li>
                        <li class="nav-item">
                            <a href="grid.html" class="nav-link"><i class="fas fa-angle-right"></i>Grid</a>
                        </li>
                        <li class="nav-item">
                            <a href="modal.html" class="nav-link"><i class="fas fa-angle-right"></i>Modal</a>
                        </li>
                        <li class="nav-item">
                            <a href="progress-bar.html" class="nav-link"><i class="fas fa-angle-right"></i>Progress Bar</a>
                        </li>
                        <li class="nav-item">
                            <a href="ui-tab.html" class="nav-link"><i class="fas fa-angle-right"></i>Tab</a>
                        </li>
                        <li class="nav-item">
                            <a href="ui-widget.html" class="nav-link"><i
                                    class="fas fa-angle-right"></i>Widget</a>
                        </li>
                    </ul>
                </li> -->
            <!-- <li class="nav-item">
                    <a href="map.html" class="nav-link"><i
                            class="flaticon-planet-earth"></i><span>Map</span></a>
                </li> -->
            <li class="nav-item">
                <a href="#" class="nav-link"><i class="flaticon-settings"></i><span>Account</span></a>
            </li>
        </ul>
    </div>
</div>
<!-- Sidebar Area End Here -->
</template>

<script>
export default {
    name: 'Sidebar',
    computed: {
        getNow() {
            const today = new Date();
            return today.getTime();
        }
    },
    watch: {
        getNow() {
            let current = this.getNow;
            if (current == "") {
                const today = new Date();
                this.getNow = today.getTime();
            } else {
                const today = new Date();
                this.getNow = "";
            }
        }
    }
}
</script>
