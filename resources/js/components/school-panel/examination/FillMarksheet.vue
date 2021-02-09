<template>
    <div class="dashboard-content-one" style="text-transform: capitialize">
        <!-- Breadcubs Area Start Here -->
        <div class="breadcrumbs-area">
            <div class="float-right">
                <router-link 
                    :to="{ 
                        name: 'Marksheet'
                    }" 
                    class="fw-btn-fill btn-gradient-yellow text-white"
                >View Marksheet</router-link>
            </div>
            <h3>Fill Marksheet</h3>
            <ul>
                <li>
                    <router-link :to="{ name: 'dashboard' }">Dashboard</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'ExamMaster' }">Exam Master</router-link>
                </li>
                <li>Fill Marksheet</li>
            </ul>
        </div>
        <!-- Breadcubs Area End Here -->
        
        <!-- Student Table Area Start Here -->
        <form method="post" @submit.prevent="deleteRecord()">
            <div class="card height-auto">
                <div class="card-body">
                    <b-row>
                        <b-col
                            sm="8"
                        >
                            <b-row>
                                <b-form-group
                                    class="col-sm-4"
                                    label="Class / Section *"
                                >
                                    <select
                                        class="form-control"
                                        v-model="section_id"
                                    >
                                        <option value="">Select Class</option>
                                        <optgroup 
                                            :label="`${c.dept.dept_name} ${c.name}`"
                                            v-for="(c, i) in classes"
                                            :key="i"
                                        >
                                            <option 
                                                :value="s.id"
                                                v-for="(s, j) in c.sections"
                                                :key="j"
                                            >{{ `${c.name} - ${s.name}` }}</option>
                                        </optgroup>
                                    </select>
                                    <b-form-invalid-feedback>Please select class</b-form-invalid-feedback>
                                </b-form-group>
                                <b-form-group
                                    class="col-sm-4"
                                    label="Select Exam"
                                >
                                    <select
                                        class="form-control"
                                        v-model="exam_type_id"
                                        @change="fetchSubjects"
                                    >
                                        <option value="">Select Exam</option>
                                        <option 
                                            :value="id"
                                            v-for="(name, id) in exam_types"
                                            :key="id"
                                        >{{ name }}</option>
                                    </select>
                                    <b-form-invalid-feedback>Please select exam</b-form-invalid-feedback>
                                </b-form-group>
                                <b-form-group
                                    class="col-sm-4"
                                    label="Select Subjects"
                                >
                                    <select
                                        class="form-control"
                                        v-model="subject_id"
                                    >
                                        <option value="">Select Subject</option>
                                        <option 
                                            v-for="(name, id) in subjects"
                                            :key="id"
                                            :value="id"
                                        >{{ name }}</option>
                                    </select>
                                </b-form-group>
                            </b-row>
                        </b-col>
                        <b-form-group
                            class="col-sm-2"
                            label="Min. Marks"
                        >
                            <b-input
                                v-model.trim="min_marks"
                                type="number"
                                placeholder="Min. Marks"
                            ></b-input>
                        </b-form-group>
                        <b-form-group
                            class="col-sm-2"
                            label="Max. Marks"
                        >
                            <b-input
                                v-model.trim="max_marks"
                                type="number"
                                placeholder="Max. Marks"
                            ></b-input>
                        </b-form-group>
                    </b-row>
                    <div class="text-center" v-if="!loaded">
                        <img :src="baseURL + 'img/preloader.gif'" alt="" style="max-width: 100%;">
                    </div>
                    <div v-if="loaded && subject_id">
                        <div v-if="lists.length">
                            <div class="table-responsive" v-if="lists">
                                <table class="table display data-table text-nowrap">
                                    <thead>
                                        <tr>
                                            <th>
                                                <label class="form-check-label">Sr. No.</label>
                                            </th>
                                            <th>Roll No.</th>
                                            <th>Name</th>
                                            <th>Father Name</th>
                                            <th>Marks</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(list, i) in lists" v-bind:key="i">
                                            <td>
                                                <label class="form-check-label">{{ 1 + i }}.</label>
                                            </td>
                                            <td>
                                                {{ list.student_data.roll_no }}
                                            </td>
                                            <td>
                                                {{ list.name }}
                                            </td>
                                            <td>{{ list.student_data.father_info.name }}</td>
                                            <td>
                                                <b-input
                                                    type="number"
                                                    min="0"
                                                    placeholder="Marks"
                                                    v-model="marks[list.id]"
                                                ></b-input>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div
                                class="text-center mx-auto w-25"
                            >
                                <b-button
                                    class="fw-btn-fill btn-gradient-yellow text-white"
                                    @click="saveMarksheet"
                                >Save &amp; Update</b-button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Student Table Area End Here -->
        </form>
    </div>
</template>
<script>
import _ from 'lodash'
import { add_marksheet, view_admit_card, view_admit_card_subjects, view_all_classes, view_exam_type } from '../../../api/script'

export default {
    data() {
        return {
            errors: 0,
            section_id: '',
            exam_type_id: '',
            subject_id: '',
            min_marks: '36',
            max_marks: '100',
            marks: {},
            lists: {},
            classes: [],
            custom_fields: [],
            loaded: 1,
            exam_types: {},
            subjects: {},
            classes: []
        }
    },
    mounted() {
        this.fetch_exam_types()
        this.fetch_all_classes()
    },
    methods: {
        searchAfterDebounce: _.debounce(
            function () {
                this.getRecords()
            }, 500
        ),
        fetchSubjects () {
            if(this.exam_type_id) {
                view_admit_card_subjects (this.exam_type_id, this.section_id)
                    .then(res => {
                        this.subjects = res.data
                    })
            }
        },
        fetch_exam_types () {
            view_exam_type ('type=all')
                .then((res) => {
                    this.exam_types = res.data.types
                })
                .catch((err) => {
                    console.log("Errors: ", err)
                })
        },
        fetch_all_classes () {
            view_all_classes ()
                .then(res => {
                    this.classes = res.data
                })
        },
        fetch_subjects () {
            this.admit_card_subjects = []
            if(this.admit_card.section_id)
            {
                api.fetchSubjectBySection(this.admit_card.section_id)
                    .then(res => {
                        this.subjects = res.data

                        for(let id in this.subjects) {
                            this.admit_card_subjects.push({
                                subject_id: id,
                                date: '',
                                time: ''
                            })
                        }
                    })
            }
        },
        saveMarksheet () {
            let params = {
                section_id: this.section_id,
                exam_type_id: this.exam_type_id,
                subject_id: this.subject_id,
                min_marks: this.min_marks,
                max_marks: this.max_marks,
                marks: this.marks
            }
            add_marksheet (params)
                .then(res => {
                    this.$toast.success(res.data.message)
                })
        },
        checkAll() {
            let self = this;
            self.check = [];
            if (!self.allSelected) {
                $.each(self.lists.data, function(i, row) {
                    self.check.push( row.id );
                });
            }
        },
        showStudents () {
            if(this.section_id && this.exam_type_id && this.subject_id) {
                this.loaded = 0
                view_admit_card (`section_id=${this.section_id}&exam_type_id=${this.exam_type_id}&subject_id=${this.subject_id}`)
                    .then(res => {
                        this.lists = res.data
                        this.loaded = 1
                        
                        this.marks = {}
                        for(let index in res.data) {
                            this.marks[res.data[index].id] = res.data[index].marks
                        }
                    })
            }
        },
        resetSearch () {
            this.search = {
                s: ''
            }
            this.getRecords()
        },
        deleteRecord() {
            let params = {
                check: this.check
            };
            var parent = $(this).closest('form');
            if( this.check.length > 0 ) {
                swal({
                  title: "Are you sure?",
                  text: "Once deleted, you will not be able to recover this record!",
                  icon: "warning",
                  buttons: true,
                  dangerMode: true,
                })
                .then((willDelete) => {
                  if (willDelete) {
                      this.loaded = 0;
                      
                      multiple_delete_tc(params)
                          .then(res => {
                            this.getRecords()
                            this.$toast.success('Selected record(s) has been deleted.')
                          })
                          .catch(err => {
                            this.loaded = 1
                            console.log(err)
                          });
                  }
                });
            } else {
                this.loaded = 1;
                swal("Warning", "Please select at least one record to delete.", "warning")
                return false
            }
        }
    },
    watch: {
        "search.s" () {
            this.searchAfterDebounce()
        },
        subject_id () {
            this.showStudents()
        }
    }
}
</script>
