<template>
    <div class="dashboard-content-one">
        <!-- Breadcubs Area Start Here -->
        <div class="breadcrumbs-area">
            <div class="float-right">
                <router-link 
                    :to="{ 
                        name: 'ViewTest'
                    }" 
                    class="fw-btn-fill btn-gradient-yellow text-white"
                >View Tests</router-link>
            </div>
            <h3>{{ $route.params.id ? 'Edit' : 'Add' }} Tests</h3>
            <ul>
                <li>
                    <router-link :to="{ name: 'dashboard' }">Dashboard</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'OnlineExamMaster' }">Online Exam Master</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'ViewTest' }">Tests</router-link>
                </li>
                <li>{{ $route.params.id ? 'Edit' : 'Add' }} Tests</li>
            </ul>
        </div>

        <form
            method="post"
            @submit.prevent="saveData"
        >
            <b-card class="h-auto">
                <b-form-group
                    label="Name"
                >
                    <b-input
                        placeholder="Enter Name"
                        v-model="$v.record.name.$model"
                        :class="{
                            'is-invalid': $v.record.name.$error
                        }"
                    ></b-input>
                </b-form-group>
                <b-row>
                    <b-form-group
                        class="col-sm-4"
                        label="Instruction *"
                    >
                        <select
                            v-model="$v.record.instruction_id.$model"
                            class="form-control"
                            :class="{
                                'is-invalid': $v.record.instruction_id.$error
                            }"
                        >
                            <option value="">Select Instruction</option>
                            <option
                                :value="id"
                                v-for="(name, id) in instructions"
                                :key="id"
                            >{{ name }}</option>
                        </select>
                        <b-form-invalid-feedback>Please select test</b-form-invalid-feedback>
                    </b-form-group>
                    <b-form-group
                        class="col-sm-4"
                        label="Class *"
                    >
                        <select
                            v-model="$v.record.class_id.$model"
                            class="form-control"
                            :class="{
                                'is-invalid': $v.record.class_id.$error
                            }"
                        >
                            <option value="">Select Class</option>
                            <option
                                :value="id"
                                v-for="(name, id) in classes"
                                :key="id"
                            >{{ name }}</option>
                        </select>
                        <b-form-invalid-feedback>Please selec class</b-form-invalid-feedback>
                    </b-form-group>
                    <b-form-group
                        class="col-sm-4"
                        label="Subject *"
                    >
                        <select
                            v-model="$v.record.subject_id.$model"
                            class="form-control"
                            :class="{
                                'is-invalid': $v.record.subject_id.$error
                            }"
                        >
                            <option value="">Select Subject</option>
                            <option
                                :value="id"
                                v-for="(name, id) in subjects"
                                :key="id"
                            >{{ name }}</option>
                        </select>
                    </b-form-group>
                    <b-form-group
                        class="col-sm-4"
                        label="Duration (in minutes) *"
                    >
                        <b-input
                            type="number"
                            v-model.trim="$v.record.duration.$model"
                            placeholder="Enter Duration"
                            :class="{
                                'is-invalid': $v.record.duration.$error
                            }"
                        ></b-input>
                        <b-form-invalid-feedback>Please enter required field.</b-form-invalid-feedback>
                    </b-form-group>
                    <b-form-group
                        class="col-sm-4"
                        label="Date *"
                    >
                        <b-input
                            type="date"
                            placeholder="Enter Exam Date"
                            v-model.trim="$v.record.date.$model"
                            :class="{
                                'is-invalid': $v.record.date.$error
                            }"
                        ></b-input>
                        <b-form-invalid-feedback>Please enter required field.</b-form-invalid-feedback>
                    </b-form-group>
                    <b-form-group
                        class="col-sm-4"
                        label="Time *"
                    >
                        <b-input
                            type="time"
                            placeholder="Enter Exam Time"
                            v-model.trim="$v.record.time.$model"
                            :class="{
                                'is-invalid': $v.record.time.$error
                            }"
                        ></b-input>
                        <b-form-invalid-feedback>Please enter required field.</b-form-invalid-feedback>
                    </b-form-group>
                    <b-form-group
                        class="col-sm-4"
                        label="Expire In (after exam starting time in hours) *"
                    >
                        <b-input
                            type="number"
                            placeholder="Enter Exam Expire In"
                            v-model="$v.record.expire_in.$model"
                            :class="{
                                'is-invalid': $v.record.expire_in.$error
                            }"
                        ></b-input>
                        <b-form-invalid-feedback>Please enter required field.</b-form-invalid-feedback>
                    </b-form-group>
                    <b-form-group
                        class="col-sm-4"
                        label="Total Questions *"
                    >
                        <b-input
                            type="number"
                            placeholder="Enter Total Questions"
                            v-model="$v.record.total_questions.$model"
                            :class="{
                                'is-invalid': $v.record.total_questions.$error
                            }"
                        ></b-input>
                        <b-form-invalid-feedback>Please enter required field.</b-form-invalid-feedback>
                    </b-form-group>
                    <b-form-group
                        class="col-sm-2"
                        label="Max Marks *"
                    >
                        <b-input
                            type="number"
                            placeholder="Enter Max Marks"
                            v-model="$v.record.max_marks.$model"
                            :class="{
                                'is-invalid': $v.record.max_marks.$error
                            }"
                        ></b-input>
                        <b-form-invalid-feedback>Please enter required field.</b-form-invalid-feedback>
                    </b-form-group>
                    <b-form-group
                        class="col-sm-2"
                        label="Min Marks *"
                    >
                        <b-input
                            type="number"
                            placeholder="Enter Min Marks"
                            v-model="$v.record.min_marks.$model"
                            :class="{
                                'is-invalid': $v.record.min_marks.$error
                            }"
                        ></b-input>
                        <b-form-invalid-feedback>Please enter required field.</b-form-invalid-feedback>
                    </b-form-group>
                </b-row>
                <b-button
                    type="submit"
                    class="fw-btn-fill btn-gradient-yellow text-white router-link-active"
                    style="max-width: 100px;"
                >{{ $route.params.id ? 'Update' : 'Save' }}</b-button>
            </b-card>
        </form>
    </div>
</template>
<script>
import { required } from 'vuelidate/lib/validators'
import { add_test, edit_test, fetchSubjects, show_test, view_all_classes, view_instruction } from '../../../../api/script'
import Editor from '@tinymce/tinymce-vue'
export default {
    components: {
        Editor
    },
    data () {
        return {
            record: {
                name: '',
                instruction_id: '',
                class_id: '',
                subject_id: '',
                duration: 60,
                date: '',
                time: '',
                expire_in: 12,
                total_questions: 100,
                max_marks: 100,
                min_marks: 40
            },
            editor_options: {
                height: 600,
                branding: false,
                menubar: false,
                plugins: [
                    'advlist autolink lists link image charmap print preview anchor',
                    'searchreplace visualblocks code fullscreen',
                    'insertdatetime media table paste code help wordcount'
                ],
                toolbar:
                    'undo redo | formatselect | bold italic forecolor backcolor | \
                    alignleft aligncenter alignright alignjustify | \
                    bullist numlist outdent indent | removeformat | image imagetools | code fullscreen'
            },
            instructions: {},
            classes: {},
            subjects: {}
        }
    },
    validations: {
        record: {
            name: {
                required
            },
            instruction_id: {
                required
            },
            class_id: {
                required
            },
            subject_id: {
                required
            },
            duration: {
                required
            },
            date: {
                required
            },
            time: {
                required
            },
            expire_in: {
                required
            },
            total_questions: {
                required
            },
            max_marks: {
                required
            },
            min_marks: {
                required
            }
        }
    },
    mounted () {
        this.getClasses()
        this.getInstructions()
        if(this.$route.params.id) {
            this.getInfo()
        }
    },
    methods: {
        getClasses () {
            view_all_classes('type=all')
                .then(res => {
                    this.classes = res.data
                })
        },
        getSubjects () {
            fetchSubjects(this.record.class_id)
                .then(res => {
                    this.subjects = res.data
                })
        },
        getInstructions () {
            view_instruction ('type=all')
                .then(res => {
                    this.instructions = res.data
                })
        },
        getInfo () {
            show_test (this.$route.params.id)
                .then(res => {
                    this.record = res.data
                })
        },
        saveData () {
            this.$v.$touch()
            if (!this.$v.$anyError) {
                let params = {record: this.record}
                let apiResponse = ''
    
                if (!this.$route.params.id) {
                    apiResponse = add_test (params)
                } else {
                    apiResponse = edit_test (this.$route.params.id, params)
                }
                
                apiResponse
                    .then(res => {
                        this.$router.push({
                            name: 'ViewTest'
                        })
                        .then(() => {
                            this.$toast.success(res.data.message)
                        })
                    })
            }
        }
    },
    watch: {
        "record.class_id" () {
            this.getSubjects()
        }
    }
}
</script>
