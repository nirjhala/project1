<template>
    <div class="dashboard-content-one">
        <!-- Breadcubs Area Start Here -->
        <div class="breadcrumbs-area">
            <div class="float-right">
                <router-link 
                    :to="{ 
                        name: 'ViewQuestion'
                    }" 
                    class="fw-btn-fill btn-gradient-yellow text-white"
                >View Questions</router-link>
            </div>
            <h3>{{ $route.params.id ? 'Edit' : 'Add' }} Questions</h3>
            <ul>
                <li>
                    <router-link :to="{ name: 'dashboard' }">Dashboard</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'OnlineExamMaster' }">Online Exam Master</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'ViewQuestion' }">Questions</router-link>
                </li>
                <li>{{ $route.params.id ? 'Edit' : 'Add' }} Questions</li>
            </ul>
        </div>

        <form
            method="post"
            @submit.prevent="saveData"
        >
            <b-card class="h-auto">
                <b-row>
                    <b-form-group
                        label="Select Class"
                        class="col-sm-6"
                    >
                        <select
                            v-model="$v.record.class_id.$model"
                            class="form-control"
                            :class="{
                                'is-invalid': $v.record.class_id.$error
                            }"
                        >
                            <option value="">Select A Class</option>
                            <option 
                                :value="id"
                                v-for="(name, id) in classes"
                                :key="id"
                            >{{ name }}</option>
                        </select>
                        <b-form-invalid-feedback>Please select class</b-form-invalid-feedback>
                    </b-form-group>
                    <b-form-group
                        label="Select Subject"
                        class="col-sm-6"
                    >
                        <select
                            v-model="$v.record.subject_id.$model"
                            class="form-control"
                            :class="{
                                'is-invalid': $v.record.subject_id.$error
                            }"
                        >
                            <option value="">Select A Subject</option>
                            <option 
                                :value="id"
                                v-for="(name, id) in subjects"
                                :key="id"
                            >{{ name }}</option>
                        </select>
                        <b-form-invalid-feedback>Please select subject</b-form-invalid-feedback>
                    </b-form-group>
                </b-row>
                <b-form-group
                    label="Question"
                >
                    <editor
                        v-model="$v.record.question.$model"
                        :class="{
                            'is-invalid': $v.record.question.$error
                        }"
                        :init="editor_options"
                    ></editor>
                    <b-form-invalid-feedback>Please enter required field.</b-form-invalid-feedback>
                </b-form-group>
                <b-form-group
                    label="Suggestion"
                >
                    <b-textarea
                        rows="5"
                        placeholder="Enter Suggestion"
                        v-model.trim="record.suggestion"
                        class="h-auto"
                    ></b-textarea>
                </b-form-group>
                <b-row>
                    <b-form-group
                        class="col-sm-6"
                    >
                        <label
                            class="float-right"
                        >
                            <input 
                                type="radio"
                                name="answer"
                                v-model="record.answer"
                                value="1"
                            >
                            Correct
                        </label>
                        <label>Option A</label>
                        <b-input
                            placeholder="Option A"
                            v-model.trim="$v.record.option1.$model"
                            :class="{
                                'is-invalid': $v.record.option1.$error
                            }"
                        ></b-input>
                        <b-form-invalid-feedback>Please enter required field.</b-form-invalid-feedback>
                    </b-form-group>
                    <b-form-group
                        class="col-sm-6"
                    >
                        <label
                            class="float-right"
                        >
                            <input 
                                type="radio"
                                name="answer"
                                v-model="record.answer"
                                value="2"
                            >
                            Correct
                        </label>
                        <label>Option B</label>
                        <b-input
                            placeholder="Option B"
                            v-model.trim="$v.record.option2.$model"
                            :class="{
                                'is-invalid': $v.record.option2.$error
                            }"
                        ></b-input>
                        <b-form-invalid-feedback>Please enter required field.</b-form-invalid-feedback>
                    </b-form-group>
                    <b-form-group
                        class="col-sm-6"
                    >
                        <label
                            class="float-right"
                            v-if="record.option3"
                        >
                            <input 
                                type="radio"
                                name="answer"
                                v-model="record.answer"
                                value="3"
                            >
                            Correct
                        </label>
                        <label>Option C</label>
                        <b-input
                            placeholder="Option C"
                            v-model.trim="record.option3"
                        ></b-input>
                    </b-form-group>
                    <b-form-group
                        class="col-sm-6"
                    >
                        <label
                            class="float-right"
                            v-if="record.option4"
                        >
                            <input 
                                type="radio"
                                name="answer"
                                v-model="record.answer"
                                value="4"
                            >
                            Correct
                        </label>
                        <label>Option D</label>
                        <b-input
                            placeholder="Option D"
                            v-model.trim="record.option4"
                        ></b-input>
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
import { add_question, edit_question, fetchSubjects, show_question, view_all_classes } from '../../../../api/script'
import Editor from '@tinymce/tinymce-vue'
export default {
    components: {
        Editor
    },
    data () {
        return {
            record: {
                question: '',
                suggestion: '',
                class_id: '',
                subject_id: '',
                option1: '',
                option2: '',
                option3: '',
                option4: '',
                answer: 1
            },
            editor_options: {
                height: 300,
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
            classes: {},
            subjects: {}
        }
    },
    validations: {
        record: {
            question: {
                required
            },
            class_id: {
                required
            },
            subject_id: {
                required
            },
            option1: {
                required
            },
            option2: {
                required
            },
            answer: {
                required
            }
        }
    },
    mounted () {
        this.fetchClasses()

        if(this.$route.params.id) {
            this.getInfo()
        }
    },
    methods: {
        fetchClasses () {
            view_all_classes('type=all')
                .then(res => {
                    this.classes = res.data
                })
        },
        fetchAllSubjects () {
            fetchSubjects(this.record.class_id)
                .then(res => {
                    this.subjects = res.data
                })
        },
        getInfo () {
            show_question (this.$route.params.id)
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
                    apiResponse = add_question (params)
                } else {
                    apiResponse = edit_question (this.$route.params.id, params)
                }
                
                apiResponse
                    .then(res => {
                        this.$router.push({
                            name: 'ViewQuestion'
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
            this.fetchAllSubjects()
        }
    }
}
</script>
