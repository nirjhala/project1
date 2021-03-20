<template>
  <div class="dashboard-content-one">
    <!-- Breadcrumbs Area Start Here -->
    <div class="breadcrumbs-area">
      <h3>Student Master</h3>
    </div>
    <!-- Breadcrumbs Area End Here -->

    <b-row>
      <b-col sm="3" v-for="(row, i) in main_panel" :key="i">
        <b-card
          :border-variant="row.variant"
          :header-bg-variant="row.variant"
          :header="row.header"
          header-text-variant="white"
          align="center"
          class="master-card"
        >
          <div class="master-icon mt-3" :class="row.icon"></div>
          <router-link :to="{ name: row.link }"></router-link>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      main_panel: [
        {
          header: "ENQUIRY",
          link: "SchoolAdmissionEnquiry",
          variant: "primary",
          icon: "icon-laptop1",
        },
        {
          header: "ADMISSION",
          link: "AddStudent",
          variant: "danger",
          icon: "icon-school",
        },
        {
          header: "VIEW STUDENTS",
          link: "ViewStudent",
          variant: "success",
          icon: "icon-users2",
        },
        {
          header: "ONE CLICK",
          link: "StudentOneClick",
          variant: "info",
          icon: "icon-mouse",
        },
        {
          header: "PROFILE UPDATE",
          link: "StudentProfileUpdate",
          variant: "primary",
          icon: "icon-pencil1",
        },
        {
          header: "PHOTO UPDATE",
          link: "StudentPhotoUpdate",
          variant: "danger",
          icon: "icon-photo",
        },
        {
          header: "SMS CONTACT UPDATE",
          link: "StudentSMSContactUpdate",
          variant: "success",
          icon: "icon-phone",
        },
        {
          header: "ROLL NO UPDATE",
          link: "StudentRollNoUpdate",
          variant: "info",
          icon: "icon-art_track",
        },
        {
          header: "WEB SMS",
          link: "StudentOneClick",
          variant: "primary",
          icon: "icon-envelope",
        },
        {
          header: "MAPPING DATA UPDATE",
          link: "AddStudent",
          variant: "danger",
          icon: "icon-sync",
        },
        {
          header: "MEDICAL FITNESS",
          link: "ViewStudent",
          variant: "info",
          icon: "icon-plus",
        },
        {
          header: "GUARDIAN ID GENERATE",
          link: "StudentOneClick",
          variant: "primary",
          icon: "icon-vcard",
        },
        {
          header: "FATHER ID GENERATE",
          link: "SchoolAdmissionEnquiry",
          variant: "danger",
          icon: "icon-vcard",
        },
        {
          header: "MOTHER ID GENERATE",
          link: "AddStudent",
          variant: "success",
          icon: "icon-vcard",
        },
        {
          header: "STUDENT ID",
          link: "StudentIdCard",
          variant: "info",
          icon: "icon-address-card-o",
        },
        {
          header: "PHYSICAL FITNESS",
          link: "StudentOneClick",
          variant: "primary",
          icon: "icon-sports_handball",
        },
        {
          header: "PROFILE UPDATE RANDOM",
          link: "SchoolAdmissionEnquiry",
          variant: "danger",
          icon: "icon-laptop1",
        },
        {
          header: "STUDENT PROMOTION",
          link: "StudentPromotion",
          variant: "success",
          icon: "icon-redo1",
        },
      ],
      reports: [
        {
          header: "STUDENT STRENTH CASTE WISE",
          link: "StudentPromotion",
          variant: "primary",
          icon: "icon-redo1",
        },
        {
          header: "STUDENT STRENTH RELIGION WISE",
          link: "StudentPromotion",
          variant: "success",
          icon: "icon-redo1",
        },
        {
          header: "STUDENT STRENTH CLASS SECTION WISE",
          link: "StudentPromotion",
          variant: "danger",
          icon: "icon-redo1",
        },
      ],
      help: [
        {
          header: "USER HELP ENGLISH",
          link: "StudentPromotion",
          variant: "primary",
          icon: "icon-live_help",
        },
        {
          header: "USER HELP HINDI",
          link: "StudentPromotion",
          variant: "success",
          icon: "icon-help",
        },
      ],
    };
  },
};
</script>
