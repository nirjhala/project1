<template>
    <div class="dashboard-content-one">
        <!-- Breadcrumbs Area Start Here -->
        <div class="breadcrumbs-area">
            <div class="float-right">
                <router-link 
                    :to="{ 
                        name: 'ViewAdmitCard'
                    }" 
                    class="fw-btn-fill btn-gradient-yellow text-white"
                >View Admit Card</router-link>
            </div>
            <h3>{{ !$route.params.id ? 'Add' : 'Edit' }} Admit Card</h3>
            <ul>
                <li>
                    <router-link :to="{ name: 'dashboard' }">Dashboard</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'ExamMaster' }">Exam Master</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'ViewAdmitCard' }">Admit Card</router-link>
                </li>
                <li>{{ !$route.params.id ? 'Add' : 'Edit' }} Admit Card</li>
            </ul>
        </div>
        <!-- Breadcrumbs Area End Here -->

        <!-- Card Table Area Start Here -->
        <b-card
            :title="!$route.params.id ? `Create Admit Card` : `Edit Admit Card`"
            class="h-auto"
        >
            <b-form
                method="post"
                @submit.prevent="saveData"
            >
                <b-row>
                    <b-form-group
                        class="col-sm-6"
                        label="Class / Section *"
                    >
                        <select
                            class="form-control"
                            v-model="$v.admit_card.section_id.$model"
                            @change="fetch_subjects"
                            :class="{
                                'is-invalid': $v.admit_card.section_id.$error
                            }"
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
                        class="col-sm-6"
                        label="Select Exam"
                    >
                        <select
                            class="form-control"
                            v-model="$v.admit_card.exam_type_id.$model"
                            :class="{
                                'is-invalid': $v.admit_card.exam_type_id.$error
                            }"
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
                </b-row>
                <b-row
                    v-for="(subj, i) in $v.admit_card_subjects.$each.$iter"
                    :key="i"
                >
                    <b-col
                        sm="11"
                    >
                        <b-row>
                            <b-form-group
                                label="Subject"
                                class="col-sm-4"
                            >
                                <select
                                    class="form-control"
                                    v-model="subj.subject_id.$model"
                                    :class="{
                                        'is-invalid': subj.subject_id.$error
                                    }"
                                >
                                    <option value="">Select Subject</option>
                                    <option 
                                        :value="id"
                                        v-for="(name, id) in subjects"
                                        :key="id"
                                    >{{ name }}</option>
                                </select>
                                <b-form-invalid-feedback>Please select an option</b-form-invalid-feedback>
                            </b-form-group>
                            <b-form-group
                                label="Date"
                                class="col-sm-4"
                            >
                                <b-input
                                    type="date"
                                    v-model.trim="subj.date.$model"
                                    placeholder="Enter Date"
                                    :class="{
                                        'is-invalid': subj.date.$error
                                    }"
                                ></b-input>
                                <b-form-invalid-feedback>Please enter date.</b-form-invalid-feedback>
                            </b-form-group>
                            <b-form-group
                                label="Time"
                                class="col-sm-4"
                            >
                                <b-input
                                    type="time"
                                    v-model.trim="subj.time.$model"
                                    placeholder="Enter Time"
                                    :class="{
                                        'is-invalid': subj.time.$error
                                    }"
                                ></b-input>
                                <b-form-invalid-feedback>Please enter time.</b-form-invalid-feedback>
                            </b-form-group>
                        </b-row>
                    </b-col>
                    <b-form-group
                        class="col-sm-1"
                    >
                        <label>&nbsp;</label>
                        <b-button
                            type="button"
                            variant="danger"
                            style="height: 40px; font-size: 16px;"
                            block
                            v-if="admit_card_subjects.length > 1"
                            @click="removeSubject(i)"
                        ><i class="icon-minus-circle"></i></b-button>
                    </b-form-group>
                </b-row>
                <b-form-group
                    label="Instructions *"
                >
                    <b-form-textarea
                        rows="15"
                        placeholder="Instruction will be printed on admit card"
                        v-model.trim="$v.admit_card.instruction.$model"
                        class="h-auto"
                        :class="{
                            'is-invalid': $v.admit_card.instruction.$error
                        }"
                    ></b-form-textarea>
                    <b-form-invalid-feedback>Please enter instruction.</b-form-invalid-feedback>
                </b-form-group>
                <button
                    type="submit"
                    class="btn-fill-lg btn-gradient-yellow btn-hover-bluedark"
                >{{ $route.params.id ? 'Update' : 'Save' }}</button>
                <button
                    type="reset"
                    class="btn-fill-lg bg-blue-dark btn-hover-yellow"
                >Reset</button>
            </b-form>
        </b-card>
    </div>
</template>
<style scoped>
label {
    text-transform: capitalize;
}
</style>
<script>
    import { required } from 'vuelidate/lib/validators'
    import api, { add_admit_card, edit_admit_card, show_admit_card, view_all_classes, view_exam_type } from '../../../api/script'

    export default {
        data() {
            return {
                admit_card: {
                    section_id: '',
                    exam_type_id: '',
                    instruction: ''
                },
                admit_card_subjects: [],
                student: null,
                classes: [],
                exam_types: {},
                subjects: {},
                success: null,
                errors: [],
                loaded: 0
            }
        },
        validations() {
            return {
                admit_card: {
                    section_id: {
                        required
                    },
                    exam_type_id: {
                        required
                    },
                    instruction: {
                        required
                    }
                },
                admit_card_subjects: {
                    required,
                    $each: {
                        subject_id: {
                            required
                        },
                        date: {
                            required
                        },
                        time: {
                            required
                        }
                    }
                }
            }
        },
        mounted() {
            this.routeLoading()
            this.fetch_exam_types()
            this.fetch_all_classes()
        },
        methods: {
            routeLoading () {
                if (this.$route.params.id) {
                    this.getInfo()
                } else {
                    this.loaded = 1
                }
            },
            removeSubject (index) {
                this.admit_card_subjects.splice(index,1)
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
            fetch_exam_types () {
                view_exam_type('type=all')
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
            getInfo () {
                this.loaded = 0
                show_admit_card (this.$route.params.id)
                    .then(res => {
                        this.form   = res.data
                        this.loaded = 1
                    });
            },
            saveData () {
                this.$v.$touch()

                if(!this.$v.$anyError) {
                    this.loaded = 0
    
                    let params = {
                        admit_card: this.admit_card,
                        admit_card_subjects: this.admit_card_subjects
                    }
                    
                    if(!this.$route.params.id) {
                        add_admit_card (params)
                            .then(res => {
                                this.loaded = 1
                                this.$router.push({
                                    name: 'ViewAdmitCard'
                                })
                            })
                            .catch(error => {
                                this.loaded = 1
                                console.log(error)
                            })
                    } else {
                        edit_admit_card (this.$route.params.id, params)
                            .then(res => {
                                this.loaded = 1
                                this.$router.push({
                                    name: 'ViewAdmitCard'
                                })
                            })
                            .catch(error => {
                                this.loaded = 1
                                console.log(error)
                            })
                    }
                }
            }
        },
        watch: {
            "$route.params.id" () {
                this.routeLoading()
            },
            "$route.params.type" (type) {
                this.type = type
            },
            student (student) {
                this.form.name              = student.user.name
                this.form.class             = student.section_name.cls.name
                this.form.father_name       = student.father_info.name
                this.form.mother_name       = student.mother_info.name
                this.form.gender            = student.user.gender
                this.form.admission_no      = student.reg_no
            }
        }
    }
</script>
