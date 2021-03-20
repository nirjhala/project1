<template>
  <div class="dashboard-content-one">
    <!-- Breadcrumbs Area Start Here -->
    <div class="breadcrumbs-area">
      <div class="float-right">
        <router-link
          :to="{ name: 'ViewStudent' }"
          class="fw-btn-fill btn-gradient-yellow text-white"
        >
          View Student
        </router-link>
      </div>
      <h3>{{ !id ? "Add" : "Edit" }} Student</h3>
      <ul>
        <li>
          <router-link :to="{ name: 'dashboard' }">Dashboard</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'ViewStudent' }">Student</router-link>
        </li>
        <li>{{ !id ? "Add" : "Edit" }} Student</li>
      </ul>
    </div>
    <!-- Breadcrumbs Area End Here -->

    <div class="card mb-3 h-auto">
      <div class="step-wizard-tabs card-body">
        <ul>
          <li class="current">
            <a @click="scrollToSection('#general-info')" href="#general-info">
              <span class="step-no">1</span> General Info
            </a>
          </li>
          <li>
            <a
              @click="scrollToSection('#admission-info')"
              href="#admission-info"
            >
              <span class="step-no">2</span> Admission Info
            </a>
          </li>
          <li>
            <a
              @click="scrollToSection('#documents-info')"
              href="#documents-info"
            >
              <span class="step-no">2</span> Student Documents
            </a>
          </li>
          <li>
            <a @click="scrollToSection('#gaurdian-info')" href="#gaurdian-info">
              <span class="step-no">3</span> Guardian Info
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div class="alert alert-danger mb-2" v-if="errors.length">
      <ul class="mb-0">
        <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
      </ul>
    </div>

    <div class="step-wizard-panels">
      <!-- Card Table Area Start Here -->
      <!-- <form class="new-added-form" id="addStudentForm" @submit.prevent=" id ? updateData() : addData()"> -->
      <div id="general-info" class="card height-auto">
        <div class="card-body">
          <div class="text-center" v-if="!loaded">
            <b-spinner></b-spinner>
          </div>
          <div v-if="loaded">
            <div class="heading-layout1">
              <div class="item-title">
                <h3>Login Info</h3>
              </div>
            </div>
            <!-- <input type="hidden" v-model="id" value=""> -->
            <b-form
              method="post"
              @submit.prevent="!$route.params.id ? addUser() : updateUser()"
            >
              <div class="row">
                <div class="col-xl-3 col-lg-6 col-12 form-group">
                  <label>Mobile No.</label>
                  <input
                    type="tel"
                    v-model.trim="$v.user.mobile.$model"
                    class="form-control"
                    :class="{ 'is-invalid': $v.user.mobile.$error }"
                  />
                  <b-form-invalid-feedback>{{
                    !$v.user.mobile.required
                      ? "This is a required field."
                      : "Enter valid 10 digit mobile no."
                  }}</b-form-invalid-feedback>
                </div>
                <div class="col-xl-3 col-lg-6 col-12 form-group">
                  <label>Login *</label>
                  <input
                    type="text"
                    v-model.trim="$v.user.login.$model"
                    class="form-control"
                    :class="{ 'is-invalid': $v.user.login.$error }"
                  />
                  <b-form-invalid-feedback
                    >This is a required field.</b-form-invalid-feedback
                  >
                </div>
                <div class="col-xl-3 col-lg-6 col-12 form-group">
                  <label>Password *</label>
                  <input
                    type="password"
                    v-model.trim="$v.user.password.$model"
                    id="userPassword"
                    class="form-control"
                    :class="{ 'is-invalid': $v.user.password.$error }"
                  />
                  <i
                    class="far fa fa-eye passwordToggle input-icon"
                    style="cursor: pointer"
                  ></i>
                  <b-form-invalid-feedback
                    >This is a required field.</b-form-invalid-feedback
                  >
                </div>
                <div class="col-xl-3 col-lg-6 col-12 form-group">
                  <label>&nbsp;</label>
                  <button
                    type="button"
                    class="btn-fill-lg bg-blue-dark btn-hover-yellow genPassBtn"
                  >
                    Auto Generate
                  </button>
                </div>
              </div>
              <div class="heading-layout1">
                <div class="item-title">
                  <h3>User Info</h3>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-9">
                  <div class="row">
                    <div class="col-xl-4 col-12 form-group">
                      <label>Title *</label>
                      <select
                        class="form-control"
                        v-model.trim="$v.user.title.$model"
                        v-on:change="fillName()"
                        :class="{ 'is-invalid': $v.user.title.$error }"
                      >
                        <option value="Mr.">Mr.</option>
                        <option value="Ms.">Ms.</option>
                        <option value="Mrs.">Mrs.</option>
                      </select>
                      <b-form-invalid-feedback
                        >This is a required field.</b-form-invalid-feedback
                      >
                    </div>
                    <div class="col-xl-4 col-12 form-group">
                      <label>First Name *</label>
                      <input
                        type="text"
                        v-model.trim="$v.user.fname.$model"
                        v-on:keyup="fillName()"
                        class="form-control"
                        :class="{ 'is-invalid': $v.user.fname.$error }"
                      />
                      <b-form-invalid-feedback>{{
                        !$v.user.fname.required
                          ? "This is a required field."
                          : "Please enter only characters."
                      }}</b-form-invalid-feedback>
                    </div>
                    <div class="col-xl-4 col-12 form-group">
                      <label>Last Name</label>
                      <input
                        type="text"
                        v-model.trim="$v.user.lname.$model"
                        v-on:keyup="fillName()"
                        class="form-control"
                        :class="{ 'is-invalid': $v.user.lname.$error }"
                      />
                      <b-form-invalid-feedback
                        >Please enter only characters.</b-form-invalid-feedback
                      >
                    </div>
                  </div>
                  <div class="form-group">
                    <label>Display Name *</label>
                    <input
                      type="text"
                      v-model.trim="$v.user.name.$model"
                      class="form-control"
                      :class="{ 'is-invalid': $v.user.name.$error }"
                    />
                    <b-form-invalid-feedback
                      >This is a required field.</b-form-invalid-feedback
                    >
                  </div>
                  <div class="row">
                    <div class="col-xl-4 col-12 form-group">
                      <label>Date of Birth *</label>
                      <input
                        type="date"
                        v-model.trim="$v.user.dob.$model"
                        class="form-control"
                        :class="{ 'is-invalid': $v.user.dob.$error }"
                      />
                      <b-form-invalid-feedback
                        >This is a required field.</b-form-invalid-feedback
                      >
                    </div>
                    <div class="col-xl-4 form-group">
                      <label>Gender *</label>
                      <select
                        class="form-control"
                        v-model.trim="$v.user.gender.$model"
                        :class="{ 'is-invalid': $v.user.gender.$error }"
                      >
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                      <b-form-invalid-feedback
                        >This is a required field.</b-form-invalid-feedback
                      >
                    </div>
                    <div class="col-xl-4 col-12 form-group">
                      <label>Email Address</label>
                      <input
                        type="email"
                        v-model.trim="$v.user.email.$model"
                        class="form-control"
                        :class="{ 'is-invalid': $v.user.email.$error }"
                      />
                      <b-form-invalid-feedback
                        >Please enter valid email.</b-form-invalid-feedback
                      >
                    </div>
                  </div>
                  <div class="form-group">
                    <label>Address Line 1 *</label>
                    <input
                      type="text"
                      v-model.trim="$v.user.address1.$model"
                      class="form-control"
                      :class="{ 'is-invalid': $v.user.address1.$error }"
                    />
                    <b-form-invalid-feedback
                      >This is a required field.</b-form-invalid-feedback
                    >
                  </div>
                  <div class="form-group">
                    <label>Address Line 2</label>
                    <input
                      type="text"
                      v-model="user.address2"
                      class="form-control"
                    />
                  </div>
                  <div class="row">
                    <div class="col-xl-4 form-group">
                      <label>City *</label>
                      <select
                        class="form-control"
                        v-model.trim="$v.user.city_id.$model"
                        :class="{ 'is-invalid': $v.user.city_id.$error }"
                      >
                        <option value="">Select City</option>
                        <optgroup
                          v-for="(s, i) in states"
                          :key="i"
                          :label="s.name"
                        >
                          <option
                            :value="c.id"
                            v-for="(c, j) in s.cities"
                            :key="j"
                          >
                            {{ c.name }}
                          </option>
                        </optgroup>
                      </select>
                      <b-form-invalid-feedback
                        >This is a required field.</b-form-invalid-feedback
                      >
                    </div>
                    <div class="col-xl-4 col-12 form-group">
                      <label>Pincode *</label>
                      <input
                        type="tel"
                        v-model.trim="$v.user.pin_code.$model"
                        class="form-control"
                        :class="{ 'is-invalid': $v.user.pin_code.$error }"
                      />
                      <b-form-invalid-feedback>{{
                        !$v.user.pin_code.required
                          ? "This is a required field."
                          : "Please enter valid 6 digit postcode."
                      }}</b-form-invalid-feedback>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3">
                  <div class="mb-3">
                    <label>Upload Image</label>
                    <img
                      v-bind:src="image_src"
                      alt=""
                      title=""
                      id="featuredImage"
                      class="w-100 featuredImage"
                    />
                    <input
                      type="hidden"
                      v-model="user.image"
                      value=""
                      id="featuredImageId"
                    />
                  </div>
                  <button
                    type="button"
                    class="uploadImage btn-fill-lg bg-blue-dark btn-hover-yellow btn-block uploadImageBtn"
                    data-image="#featuredImage"
                    data-field="#featuredImageId"
                  >
                    Upload Image
                  </button>
                </div>
              </div>
              <div class="row">
                <div class="col-6"></div>
                <div class="col-6 form-group mg-t-8 text-right">
                  <button
                    type="submit"
                    class="btn-fill-lg btn-gradient-yellow btn-hover-bluedark"
                  >
                    {{ $route.params.id ? "Update" : "Save" }}
                  </button>
                </div>
              </div>
            </b-form>
          </div>
        </div>
      </div>
      <div id="admission-info" class="card height-auto" v-if="id">
        <div class="card-body">
          <div class="text-center" v-if="!loaded">
            <b-spinner></b-spinner>
          </div>
          <div v-if="loaded">
            <form method="post" @submit.prevent="updateStudent()">
              <div class="heading-layout1">
                <div class="item-title">
                  <h3>Admission Info</h3>
                </div>
              </div>
              <div class="row">
                <div class="col-xl-3 col-12 form-group">
                  <label>Enrollment No. *</label>
                  <input
                    type="text"
                    v-model.trim="$v.student.reg_no.$model"
                    class="form-control"
                    :class="{ 'is-invalid': $v.student.reg_no.$error }"
                  />
                  <b-form-invalid-feedback
                    >Please enter Entrollment No.</b-form-invalid-feedback
                  >
                </div>
                <div class="col-xl-3 col-12 form-group">
                  <label>Roll No.</label>
                  <input
                    type="text"
                    v-model.trim="student.roll_no"
                    class="form-control"
                  />
                </div>
                <div class="col-xl-3 col-12 form-group">
                  <label>Blood Group</label>
                  <select
                    v-model.trim="student.blood_group"
                    class="form-control"
                  >
                    <option value="">Select Bloog Group</option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                    <option value="Do not know">Don't know</option>
                  </select>
                </div>
                <div class="col-xl-3 form-group">
                  <label>Category *</label>
                  <select
                    v-model.trim="$v.student.category.$model"
                    class="form-control"
                    :class="{ 'is-invalid': $v.student.category.$error }"
                  >
                    <option value="">Select Category</option>
                    <option value="General">General</option>
                    <option value="OBC">OBC</option>
                    <option value="SBC">SBC</option>
                    <option value="SC">SC</option>
                    <option value="ST">ST</option>
                    <option value="Other">Other</option>
                  </select>
                  <b-form-invalid-feedback
                    >Please select category</b-form-invalid-feedback
                  >
                </div>
              </div>
              <div class="row">
                <div class="col-xl-3 col-12 form-group">
                  <label>Religion *</label>
                  <select
                    class="form-control"
                    v-model.trim="$v.student.religion.$model"
                    :class="{ 'is-invalid': $v.student.religion.$error }"
                  >
                    <option value="">Select Religion</option>
                    <option :value="r.id" v-for="r in religions" :key="r.id">
                      {{ r.name }}
                    </option>
                  </select>
                  <b-form-invalid-feedback
                    >Please select religion.</b-form-invalid-feedback
                  >
                </div>
                <div class="col-xl-3 col-12 form-group">
                  <label>Cast *</label>
                  <input
                    type="text"
                    v-model.trim="$v.student.cast.$model"
                    class="form-control"
                    :class="{ 'is-invalid': $v.student.cast.$error }"
                  />
                  <b-form-invalid-feedback
                    >Please enter student's cast</b-form-invalid-feedback
                  >
                </div>
                <div class="col-xl-3 col-12 form-group">
                  <label>Class / Section *</label>
                  <select
                    class="form-control"
                    v-model="$v.student.section.$model"
                    :class="{ 'is-invalid': $v.student.section.$error }"
                  >
                    <option value="">Select Section</option>
                    <optgroup
                      :label="`${c.dept.dept_name} - ${c.name}`"
                      v-for="(c, i) in classes"
                      :key="i"
                    >
                      <option :value="s.id" v-for="s in c.sections" :key="s.id">
                        {{ c.name }} - {{ s.name }} ({{ c.dept.dept_name }})
                      </option>
                    </optgroup>
                  </select>
                  <b-form-invalid-feedback
                    >Please select your class and
                    section</b-form-invalid-feedback
                  >
                </div>
              </div>

              <div class="row">
                <div class="col-6"></div>
                <div class="col-6 form-group mg-6-8 text-right">
                  <button
                    type="submit"
                    class="btn-fill-lg btn-gradient-yellow btn-hover-bluedark"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div id="documents-info" class="card height-auto" v-if="id">
        <div class="card-body">
          <div v-if="loaded">
            <div class="heading-layout1">
              <div class="item-title">
                <h3>Student Documents</h3>
              </div>
            </div>

            <form method="post" enctype="multipart/form-data">
              <div class="row mb-2" v-for="(c, i) in certificates" :key="i">
                <div class="col-6">
                  {{ c.en_name }}
                  <span v-if="c.short_name"> - {{ c.short_name }}</span> ({{
                    c.hi_name
                  }})

                  <a
                    :href="user_certificates[c.id]"
                    v-if="user_certificates[c.id]"
                    target="_blank"
                    >VIEW / DOWNLOAD FILE</a
                  >
                </div>
                <div>
                  <input type="file" :data-id="c.id" @change="handleFile" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div id="gaurdian-info" class="card height-auto" v-if="id">
        <div class="card-body">
          <div class="text-center" v-if="!loaded">
            <b-spinner></b-spinner>
          </div>
          <div v-if="loaded">
            <form method="post" @submit.prevent="updateParentInfo()">
              <div class="heading-layout1">
                <div class="item-title">
                  <h3>Parents Info</h3>
                </div>
              </div>
              <div class="row">
                <div class="col-xl-6 col-lg-6 col-12 form-group">
                  <label>Father *</label>
                  <multiselect
                    v-model="$v.father.$model"
                    deselect-label="Can't remove this value"
                    track-by="id"
                    :custom-label="nameWithMobile"
                    placeholder="Select Father Name"
                    :options="guardians.father ? guardians.father : []"
                    :searchable="true"
                    :allow-empty="false"
                    :class="{ 'is-invalid': $v.father.$error }"
                  >
                    <template slot="singleLabel" slot-scope="{ option }">
                      {{ option.name }} {{ option.mobile }}
                    </template>
                  </multiselect>
                  <b-form-invalid-feedback
                    >Please select father's name</b-form-invalid-feedback
                  >
                </div>
                <div class="col-xl-2 col-lg-6 col-12 form-group">
                  <label>&nbsp;</label>
                  <button
                    type="button"
                    class="btn btn-lg btn-success btn-block"
                    v-on:click="openParentModal('father')"
                    data-source="father"
                  >
                    Add New
                  </button>
                </div>
              </div>
              <div class="row">
                <div class="col-xl-6 col-lg-6 col-12 form-group">
                  <label>Mother *</label>
                  <multiselect
                    v-model="$v.mother.$model"
                    deselect-label="Can't remove this value"
                    track-by="mobile"
                    :custom-label="nameWithMobile"
                    placeholder="Select Mother Name"
                    :options="guardians.mother ? guardians.mother : []"
                    :searchable="true"
                    :allow-empty="false"
                    :class="{ 'is-invalid': $v.mother.$error }"
                  >
                    <template slot="singleLabel" slot-scope="{ option }">
                      {{ option.name }} {{ option.mobile }}
                    </template>
                  </multiselect>
                  <b-form-invalid-feedback
                    >Please select mother's name</b-form-invalid-feedback
                  >
                </div>
                <div class="col-xl-2 col-lg-6 col-12 form-group">
                  <label>&nbsp;</label>
                  <button
                    type="button"
                    class="btn btn-lg btn-success btn-block"
                    v-on:click="openParentModal('mother')"
                    data-source="mother"
                  >
                    Add New
                  </button>
                </div>
              </div>
              <div class="heading-layout1">
                <div class="item-title">
                  <h3>Guardian Info</h3>
                </div>
              </div>
              <div class="row">
                <div class="col-xl-3 col-lg-6 col-12 form-group">
                  <label>Relation *</label>
                  <select
                    class="form-control"
                    v-model="$v.relation.$model"
                    v-on:change="changeRelationName()"
                    :class="{ 'is-invalid': $v.relation.$error }"
                  >
                    <option value="">Select Relation</option>
                    <option value="father">Father</option>
                    <option value="mother">Mother</option>
                    <option value="other">Other</option>
                  </select>
                  <b-form-invalid-feedback
                    >Please select any one option</b-form-invalid-feedback
                  >
                </div>
                <div class="col-xl-5 col-lg-6 col-12 form-group">
                  <label>Relation Name (if Other Selected)</label>
                  <input
                    type="text"
                    v-model="$v.parent.guardian_relation.$model"
                    class="form-control"
                    :class="{
                      'is-invalid': $v.parent.guardian_relation.$error,
                    }"
                  />
                  <b-form-invalid-feedback
                    >Please enter relation name</b-form-invalid-feedback
                  >
                </div>
              </div>
              <div class="row">
                <div class="col-xl-6 col-lg-6 col-12 form-group">
                  <label>Guardian *</label>
                  <multiselect
                    v-model="$v.guardian.$model"
                    deselect-label="Can't remove this value"
                    track-by="name"
                    :custom-label="nameWithMobile"
                    placeholder="Select Guardian Name"
                    :options="guardians.all ? guardians.all : []"
                    :searchable="true"
                    :allow-empty="false"
                    :class="{ 'is-invalid': $v.guardian.$error }"
                  >
                    <template slot="singleLabel" slot-scope="{ option }">
                      {{ option.name }} {{ option.mobile }}
                    </template>
                  </multiselect>
                  <b-form-invalid-feedback
                    >Please select guardian</b-form-invalid-feedback
                  >
                </div>
                <div
                  class="col-xl-2 col-lg-6 col-12 form-group"
                  v-if="relation == 'other'"
                >
                  <label>&nbsp;</label>
                  <button
                    type="button"
                    class="btn btn-lg btn-success btn-block"
                    v-on:click="openParentModal('guardian')"
                    data-source="guardian"
                  >
                    Add New
                  </button>
                </div>
              </div>
              <div class="row">
                <div class="col-6"></div>
                <div class="col-6 form-group mg-t-8 text-right">
                  <button
                    type="submit"
                    class="btn-fill-lg btn-gradient-yellow btn-hover-bluedark"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <!-- Student Table Area End Here -->
    </div>

    <!--
        #############################################
        # Add Gaurdian Model
        #############################################
        -->
    <div class="modal align-middle" id="guardianModal">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Add Gaurdian</h5>
            <button class="close" data-dismiss="modal">&times;</button>
          </div>
          <div class="modal-body">
            <b-form method="post" @submit.prevent="addParent()">
              <input type="hidden" id="userSource" value="" />
              <div class="form-group">
                <input
                  type="text"
                  v-model="parentName"
                  placeholder="Name"
                  class="form-control"
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  v-model="parentType"
                  placeholder="Type"
                  class="form-control"
                  readonly
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  v-model="parentMobile"
                  placeholder="Mobile No."
                  class="form-control"
                />
              </div>
              <div class="form-group">
                <input
                  type="password"
                  v-model="parentPassword"
                  placeholder="Password"
                  class="form-control"
                />
              </div>
              <div class="form-group text-center">
                <button
                  type="submit"
                  class="btn btn-lg btn-info btnReflectPassword"
                >
                  <i class="fas fa-check"></i> &nbsp; &nbsp; Submit
                </button>
              </div>
            </b-form>
          </div>
        </div>
      </div>
    </div>

    <!--
        #############################################
        # Genrate Password Popup
        #############################################
        -->
    <div class="modal align-middle" id="generatePasswordModal">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Generate Password</h5>
            <button class="close" data-dismiss="modal">&times;</button>
          </div>
          <div class="modal-body">
            <div class="input-group mb-3">
              <input type="text" id="generatedPassword" class="form-control" />
              <div class="input-group-append">
                <button
                  class="btn btn-outline-secondary genPassBtn"
                  type="button"
                >
                  Generate
                </button>
              </div>
            </div>
            <div class="">
              <label>
                <input type="checkbox" id="copyConfirm" value="1" /> Have you
                copied password?
              </label>
            </div>
          </div>
          <div class="modal-footer">
            <button
              class="btn btn-info btnReflectPassword"
              v-on:click="fillPassword()"
              disabled
            >
              Okay
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<script>
import {
  required,
  email,
  minLength,
  maxLength,
  helpers,
  requiredIf,
} from "vuelidate/lib/validators";
import Multiselect from "vue-multiselect";
import {
  addStudent,
  updateStudentData,
  view_all_states,
  view_all_classes,
  studentInfo,
  view_certificate,
  addUserCertificate,
} from "../../../api/script.js";

const alphaOnly = helpers.regex("aplpha", /^[A-Za-z ]*$/i);

export default {
  components: { Multiselect },
  props: ["image_src", "image"],
  data() {
    return {
      id: "",
      user: {
        mobile: "",
        login: "",
        password: "",
        title: "Mr.",
        fname: "",
        lname: "",
        name: "",
        dob: "",
        gender: "Male",
        email: "",
        address1: "",
        address2: "",
        city_id: "",
        pin_code: "",
        image: "",
        role: "",
      },
      student: {
        reg_no: "",
        roll_no: "",
        blood_group: "",
        category: "",
        religion: "",
        cast: "",
        section: "",
        admission_date: "",
        signature: "",
      },
      parent: {
        father: "",
        mother: "",
        guardian: "",
        guardian_relation: "",
      },
      user_certificates: {},
      father: {},
      mother: {},
      guardian: {},
      relation: "",
      relation_name: "",
      parentName: "",
      parentMobile: "",
      parentPassword: "",
      parentType: "other",
      guardians: [
        {
          father: [],
          mother: [],
          other: [],
          all: [],
        },
      ],
      roles: [],
      states: [],
      pincodes: [],
      religions: [],
      classes: [],
      sections: [],
      certificates: [],
      errors: [],
      loaded: 0,
      token: localStorage.getItem("token"),
    };
  },
  validations: {
    user: {
      login: {
        required,
      },
      password: {
        requiredIf: requiredIf(function () {
          return !this.$route.params.id;
        }),
      },
      title: {
        required,
      },
      fname: {
        required,
        alphaOnly,
      },
      lname: {
        alphaOnly,
      },
      name: {
        required,
      },
      dob: {
        required,
      },
      email: {
        email,
      },
      gender: {
        required,
      },
      mobile: {
        required,
        mobileNo(mobile) {
          return /[0-9]{10}/.test(mobile) && mobile.length == 10;
        },
        maxLength: maxLength(10),
      },
      address1: {
        required,
      },
      city_id: {
        required,
      },
      pin_code: {
        required,
        isPincode(postcode) {
          return (
            postcode.length == 0 ||
            (postcode.length == 6 && /[0-9]{6}/.test(postcode))
          );
        },
      },
    },
    student: {
      reg_no: {
        required,
      },
      category: {
        required,
      },
      religion: {
        required,
      },
      cast: {
        required,
      },
      section: {
        required,
      },
    },
    father: {
      required,
    },
    mother: {
      required,
    },
    guardian: {
      required,
    },
    relation: {
      required,
    },
    parent: {
      guardian_relation: {
        required,
      },
    },
  },
  mounted() {
    this.firstLoad();
  },
  methods: {
    validateState(key_name, name) {
      const { $dirty, $error } = this.$v[key_name][name];
      return $dirty ? !$error : null;
    },
    handleFile(e) {
      let certificate_id = e.target.getAttribute("data-id");
      let data = new FormData();

      data.append("user_id", this.id);
      data.append("certificate_id", certificate_id);
      data.append("file", e.target.files[0]);

      addUserCertificate(data)
        .then((res) => {
          this.$toast.success("File uploaded.");
        })
        .catch((err) => {
          console.log("Errors: ", err);
        });
    },
    firstLoad() {
      let params = this.$route.params;

      this.getStates();

      if (params.id != undefined && params.id != "") {
        this.getInfo(params.id);
        this.getReligions();
        this.getClasses();
        this.getParents();
        this.fetchCertificates();

        this.id = params.id;
      } else {
        this.loaded = 1;
      }
    },
    scrollToSection(sel) {
      var container = this.$el.querySelector(sel);
      container.scrollTop = container.scrollHeight;
    },
    nameWithMobile({ name, mobile }) {
      return `${name} — ${mobile}`;
    },
    changeRelationName() {
      this.guardians.all = this.guardians[this.relation];
      if (this.relation != "other") {
        this.parent.guardian_relation = this.relation;
      } else {
        this.parent.guardian_relation = "";
      }
    },
    fillName() {
      this.user.name = (
        this.user.title +
        " " +
        this.user.fname +
        " " +
        this.user.lname
      ).trim();
    },
    fillPassword() {
      this.password = $("#generatedPassword").val();
      $("#generatePasswordModal").modal("hide");
    },
    fetchCertificates() {
      view_certificate("student").then((res) => {
        this.certificates = res.data;
      });
    },
    getRoles() {
      let instance = axios.create({
        baseURL: this.apiBaseUrl,
        headers: {
          Authorization: "Bearer " + this.token,
          Accept: "application/json",
        },
      });
      instance.get("get-all-roles").then((res) => {
        this.roles = res.data;
      });
    },
    getStates() {
      view_all_states().then((res) => {
        this.states = res.data;
      });
    },
    getClasses() {
      view_all_classes().then((res) => {
        this.classes = res.data;
      });
    },
    openParentModal(type) {
      this.parentType = type;

      $("#guardianModal").modal("show");
    },
    addParent() {
      let form = $("#guardianModal form"),
        name = this.parentName,
        mobile = this.parentMobile,
        password = this.parentPassword,
        source = this.parentType;

      let params = {
        name: name,
        mobile: mobile,
        password: password,
        type: source,
      };

      let is_valid = form.is_valid();
      let self = this;
      if (is_valid) {
        let instance = axios.create({
          baseURL: this.apiBaseUrl,
          headers: {
            Authorization: "Bearer " + this.token,
            Accept: "application/json",
          },
        });
        instance.post("parent/add", params).then((res) => {
          let new_id = res.data.id;
          self.guardians.all = res.data.list.all;
          if (source == "father") {
            self.guardians.father = res.data.list.father;
            self.father = new_id;
          } else if (source == "mother") {
            self.guardians.mother = res.data.list.mother;
            self.mother = new_id;
          } else if (source == "other") {
            self.guardians.all = res.data.list.other;
            self.guardian = new_id;
          }

          self.parentName = "";
          self.parentMobile = "";
          self.parentPassword = "";

          $("#guardianModal").modal("hide");
        });
      }
    },
    getParents() {
      let instance = axios.create({
        baseURL: this.apiBaseUrl,
        headers: {
          Authorization: "Bearer " + this.token,
          Accept: "application/json",
        },
      });
      instance.get("parent").then((res) => {
        this.guardians = res.data;
      });
    },
    getReligions() {
      let instance = axios.create({
        baseURL: this.apiBaseUrl,
        headers: {
          Authorization: "Bearer " + this.token,
          Accept: "application/json",
        },
      });
      instance.get("get-all-religions").then((res) => {
        this.religions = res.data;
      });
    },
    getInfo(id) {
      studentInfo(id).then((res) => {
        this.user = res.data.user;

        this.student.reg_no = res.data.reg_no;
        this.student.roll_no = res.data.roll_no;
        this.student.blood_group = res.data.blood_group;
        this.student.category = res.data.category;
        this.student.religion = res.data.religion;
        this.student.cast = res.data.cast;
        this.student.category = res.data.category;
        this.student.section = res.data.section;

        this.father = res.data.father_info;
        this.mother = res.data.mother_info;
        this.guardian = res.data.guardian_info;

        this.parent.father = res.data.father;
        this.parent.mother = res.data.mother;
        this.parent.guardian = res.data.guardian;
        this.parent.guardian_relation = res.data.guardian_relation;

        let relationName =
          res.data.guardian_relation != null
            ? res.data.guardian_relation.toLowerCase()
            : "";

        if (relationName == "father" || relationName == "mother") {
          this.relation = relationName;
        } else {
          this.relation = "other";
        }

        if (res.data.user.documents.length) {
          res.data.user.documents.forEach((c, i) => {
            this.user_certificates[c.certificate_id] = c.file_url;
          });
        }

        let media_image =
          res.data.user.image != null ? res.data.user.image : "";
        let media_src = res.data.media
          ? res.data.media.image_url.medium
          : this.baseURL + "/img/default.jpg";

        this.$emit("update-image_src-selected", media_src);
        this.$emit("update-image-selected", media_image);

        this.loaded = 1;

        console.log("Student", this.student);
      });
    },
    addUser() {
      this.$v.user.$reset();
      this.$v.user.$touch();

      if (this.$v.user.$anyError) {
        return false;
      } else {
        this.loading = true;

        addStudent({ user: this.user })
          .then((res) => {
            this.$router.push({
              name: "EditStudent",
              params: {
                id: res.data.id,
              },
            });
          })
          .catch((err) => {
            this.loading = false;
            console.log("Error: ", err);
          });
      }
    },
    updateUser() {
      this.$v.user.$reset();

      this.$v.user.$touch();

      console.log("errors", this.$v.user.$anyError);

      if (this.$v.user.$anyError) {
        return false;
      } else {
        this.loading = true;

        updateStudentData(this.$route.params.id, {
          _method: "PUT",
          user: this.user,
        })
          .then((res) => {
            this.$router.push({
              name: "EditStudent",
              params: {
                id: res.data.id,
              },
            });
          })
          .catch((err) => {
            this.loading = false;
            console.log("Error: ", err);
          });
      }
    },
    updateStudent() {
      this.$v.student.$reset();
      this.$v.student.$touch();

      if (this.$v.student.$anyError) {
        return false;
      } else {
        let data = {
          _method: "put",
          student: this.student,
        };

        this.loading = true;

        updateStudentData(this.$route.params.id, data)
          .then((res) => {
            this.loading = false;
            this.$toast.success(res.data.message);
          })
          .catch((err) => {
            this.loading = false;
            this.$toast.error(err);
          });
      }
    },
    updateParentInfo() {
      this.$v.$reset();
      this.$v.parent.$touch();
      this.$v.father.$touch();
      this.$v.mother.$touch();
      this.$v.guardian.$touch();

      if (
        this.$v.parent.$anyError &&
        this.$v.father.$anyError &&
        this.$v.mother.$anyError &&
        this.$v.guardian.$anyError
      ) {
        return false;
      } else {
        let data = {
          _method: "put",
          student: {
            father: this.father.id ? this.father.id : "",
            mother: this.mother.id ? this.mother.id : "",
            guardian: this.guardian.id ? this.guardian.id : "",
            guardian_relation: this.parent.guardian_relation,
          },
        };

        updateStudentData(this.$route.params.id, data)
          .then((res) => {
            this.$toast.success(res.data.message);
          })
          .catch((err) => {
            this.$toast.error(err);
          });
      }
    },
    updateData: function () {
      let father = this.father.id ? this.father.id : "";
      let mother = this.mother.id ? this.mother.id : "";
      let guardian = this.guardian.id ? this.guardian.id : "";

      let params = {
        id: this.id,
        user: {
          title: this.title,
          fname: this.fname,
          lname: this.lname,
          name: this.name,
          mobile: this.mobile, // Optional
          email: this.email,
          gender: this.gender,
          dob: this.dob,
          image: this.image,
          address1: this.address1,
          address2: this.address2,
          pin_code: this.pin_code,
          city_id: this.city,
          role: this.role,
          login: this.login,
          password: this.password,
        },
        student: {
          reg_no: this.reg_no,
          roll_no: this.roll_no,
          blood_group: this.blood_group,
          category: this.category,
          religion: this.religion,
          cast: this.cast,
          section: this.section,
          father: father,
          mother: mother,
          guardian: guardian,
          // guardian_relation: this.relation,
          guardian_relation: this.relation_name,
        },
      };
      this.loaded = 0;
      let instance = axios.create({
        baseURL: this.apiBaseUrl,
        headers: {
          Authorization: "Bearer " + this.token,
          Accept: "application/json",
        },
      });
      instance
        .post("update-student", params)
        .then((res) => {
          if (res.data.status) {
            this.$router
              .push({
                name: "student",
              })
              .then((res) => {
                this.loaded = 1;
                this.$toast.success("Record saved.");
              })
              .catch((err) => {
                this.loaded = 1;
                console.log(err);
              });
          } else {
            this.loaded = 1;
            this.errors = res.data.errors;
          }
        })
        .catch((error) => {
          this.loaded = 1;
          console.log(error);
        });
    },
  },
  watch: {
    image() {
      this.user.image = this.image;
    },
    "$route.params.id"() {
      this.firstLoad();
    },
  },
};
</script>
