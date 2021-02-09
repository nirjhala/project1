<template>
    <component :is="dashboardComponent" />
</template>
<script type="text/javascript">
let token = localStorage.getItem('token');


import SchoolDashboard from './school-panel/Dashboard'
import StudentDashboard from './student-panel/Dashboard'
import TeacherDashboard from './teacher-panel/Dashboard'
import ParentsDashboard from './parent-panel/Dashboard'
import DriverDashboard from './driver-panel/Dashboard'
import StaffDashboard from './staff-panel/Dashboard'

/**
 * Common Dashboards
 * @values for Roles
 * School
 * Student
 * Teacher
 * Staff
**/
export default {
    components: {
        SchoolDashboard,
        StudentDashboard,
        TeacherDashboard,
        ParentsDashboard,
        DriverDashboard,
        StaffDashboard
    },
    data() {
        return {
            dashboardComponent: "SchoolDashboard"
        }
    },
    mounted() {
        let userInfo = localStorage.getItem('user_info')
        userInfo = JSON.parse(userInfo)
        
        this.dashboardComponent = `${userInfo.role_name.name}Dashboard`
    }
}
</script>
