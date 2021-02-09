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
                            class="form-control"
                        >
                            <option value="">Select Instruction</option>
                        </select>
                    </b-form-group>
                    <b-form-group
                        class="col-sm-4"
                        label="Class *"
                    >
                        <select
                            class="form-control"
                        >
                            <option value="">Select Class</option>
                        </select>
                    </b-form-group>
                    <b-form-group
                        class="col-sm-4"
                        label="Subject *"
                    >
                        <select
                            class="form-control"
                        >
                            <option value="">Select Subject</option>
                        </select>
                    </b-form-group>
                    <b-form-group
                        class="col-sm-4"
                        label="Duration (in minutes) *"
                    >
                        <b-input
                            type="number"
                            placeholder="Enter Duration"
                        ></b-input>
                    </b-form-group>
                    <b-form-group
                        class="col-sm-4"
                        label="Date *"
                    >
                        <b-input
                            type="date"
                            placeholder="Enter Exam Date"
                        ></b-input>
                    </b-form-group>
                    <b-form-group
                        class="col-sm-4"
                        label="Time *"
                    >
                        <b-input
                            type="time"
                            placeholder="Enter Exam Time"
                        ></b-input>
                    </b-form-group>
                    <b-form-group
                        class="col-sm-4"
                        label="Expire In (after exam starting time in hours) *"
                    >
                        <b-input
                            type="number"
                            placeholder="Enter Exam Expire In"
                        ></b-input>
                    </b-form-group>
                    <b-form-group
                        class="col-sm-4"
                        label="Total Questions *"
                    >
                        <b-input
                            type="number"
                            placeholder="Enter Total Questions"
                        ></b-input>
                    </b-form-group>
                    <b-form-group
                        class="col-sm-2"
                        label="Max Marks *"
                    >
                        <b-input
                            type="number"
                            placeholder="Enter Max Marks"
                        ></b-input>
                    </b-form-group>
                    <b-form-group
                        class="col-sm-2"
                        label="Min Marks *"
                    >
                        <b-input
                            type="number"
                            placeholder="Enter Min Marks"
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
import { add_instruction, edit_instruction, fetchSubjects, show_instruction, view_all_classes } from '../../../../api/script'
import Editor from '@tinymce/tinymce-vue'
export default {
    components: {
        Editor
    },
    data () {
        return {
            record: {
                name: '',
                description: ''
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
            classes: {},
            subjects: {}
        }
    },
    validations: {
        record: {
            name: {
                required
            },
            description: {
                required
            }
        }
    },
    mounted () {
        if(this.$route.params.id) {
            this.getInfo()
        }
    },
    methods: {
        getInfo () {
            show_instruction (this.$route.params.id)
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
                    apiResponse = add_instruction (params)
                } else {
                    apiResponse = edit_instruction (this.$route.params.id, params)
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
            this.fetchAllSubjects()
        }
    }
}
</script>
