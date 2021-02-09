<template>
    <div class="dashboard-content-one">
        <!-- Breadcubs Area Start Here -->
        <div class="breadcrumbs-area">
            <div class="float-right">
                <router-link 
                    :to="{ 
                        name: 'ViewInstruction'
                    }" 
                    class="fw-btn-fill btn-gradient-yellow text-white"
                >View Instructions</router-link>
            </div>
            <h3>{{ $route.params.id ? 'Edit' : 'Add' }} Instructions</h3>
            <ul>
                <li>
                    <router-link :to="{ name: 'dashboard' }">Dashboard</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'OnlineExamMaster' }">Online Exam Master</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'ViewInstruction' }">Instructions</router-link>
                </li>
                <li>{{ $route.params.id ? 'Edit' : 'Add' }} Instructions</li>
            </ul>
        </div>

        <form
            method="post"
            @submit.prevent="saveData"
        >
            <b-card class="h-auto">
                <b-form-group
                    label="Title"
                >
                    <b-input
                        placeholder="Enter Title"
                        v-model="$v.record.title.$model"
                        :class="{
                            'is-invalid': $v.record.title.$error
                        }"
                    ></b-input>
                </b-form-group>
                <b-form-group
                    label="Description"
                >
                    <editor
                        v-model="$v.record.description.$model"
                        :class="{
                            'is-invalid': $v.record.description.$error
                        }"
                        :init="editor_options"
                    ></editor>
                    <b-form-invalid-feedback>Please enter required field.</b-form-invalid-feedback>
                </b-form-group>
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
                title: '',
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
            title: {
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
                            name: 'ViewInstruction'
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
