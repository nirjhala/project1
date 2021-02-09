<template>
    <div class="dashboard-content-one">
        <!-- Breadcrumbs Area Start Here -->
        <div class="breadcrumbs-area">
            <div class="float-right">
                <router-link :to="{ name: 'ViewPage' }" class="fw-btn-fill btn-gradient-yellow text-white">View Page</router-link>
            </div>
            <h3>Issue Assignment</h3>
            <ul>
                <li>
                    <router-link :to="{ name: 'dashboard' }">Dashboard</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'AssignmentMaster' }">Assignment Master</router-link>
                </li>
                <li>Issue Assignment</li>
            </ul>
        </div>
        <!-- Breadcrumbs Area End Here -->

        <b-row>
            <b-col sm="8">
                <!-- Card Table Area Start Here -->
                <div class="card height-auto">
                    <div class="card-body">
                        <div class="text-center" v-if="!loaded">
                            <img :src="'img/preloader.gif'" alt="" style="max-width: 100%;">
                        </div>
                        <div v-if="loaded">
                            <form class="new-added-form" enctype="multipart/form-data" @submit.prevent=" form.id ? updateData() : addData()">
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="form-group">
                                            <label>Name *</label>
                                            <input type="text" v-model="form.name" class="form-control" required>
                                        </div>
                                        <div class="form-group">
                                            <label>Class *</label>
                                            <select v-model="form.section_id" class="form-control" required>
                                                <option value="">Select Class</option>
                                                <optgroup :label="cls" v-for="(sections, cls) in classes" :key="cls">
                                                    <option :value="id" v-for="(name, id) in sections" :key="id">{{ cls }} - {{ name }}</option>
                                                </optgroup>
                                            </select>
                                        </div>
                                        <div class="form-group">
                                            <label>Subject *</label>
                                            <select v-model="form.subject_id" class="form-control" required>
                                                <option value="">Select Subject</option>
                                                <option :value="id" v-for="(name, id) in subjects" :key="id">{{ name }}</option>
                                            </select>
                                        </div>
                                        <div class="form-group">
                                            <label>Description</label>
                                            <editor
                                                v-model="form.description"
                                                :init="editor_options"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-12 form-group mg-t-8">
                                        <button type="submit" class="btn-fill-lg btn-gradient-yellow btn-hover-bluedark">{{ !form.id ? 'Save' : 'Update' }}</button>
                                        <button type="reset" class="btn-fill-lg bg-blue-dark btn-hover-yellow">Reset</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </b-col>
            <b-col sm=4>
                <div class="card">
                    <div class="card-body">
                        <div class="mb-3">
                            <label>Attachment</label>
                            <input type="file" @change="handleAttachment" accept=".pdf,.doc,.docx,.xls,.xlsx" class="d-block">
                        </div>
                        <div class="mt-1" v-if="form.attachment_full_url">
                            <a :href="form.attachment_full_url" target="_blank">View / Download</a>
                        </div>
                    </div>
                </div>
            </b-col>
        </b-row>
    </div>
</template>
<style>
    .tox-notification { display: none !important }
</style>
<script>
import api from '../../../api/script'
import Editor from '@tinymce/tinymce-vue'

export default {
    components: { Editor },
    props: ['image_src', 'image'],
    data() {
        return {
            form: {
                id: '',
                name: '',
                section_id: '',
                subject_id: '',
                description: ''
            },
            attachment: '',
            editor_options: {
                height: 500,
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
                    bullist numlist outdent indent | removeformat | help code'
            },
            classes: {},
            subjects: {},
            errors: [],
            loaded: 0
        }
    },
    mounted() {
        let params = this.$route.params;

        this.getAllSections()
        if (params.id != undefined && params.id != '') {
            this.getInfo(params.id)
        } else {
            this.loaded = 1
        }
    },
    methods: {
        handleAttachment (e) {
            this.attachment = e.target.files[0]
        },
        getAllSections () {
            let apiResponse = api.fetchAllSections()
            apiResponse
                .then(res => {
                    this.classes = res.data
                })
        },
        fetchSubjectBySection (section_id) {
            let apiResponse = api.fetchSubjectBySection(section_id)
            apiResponse
                .then(res => {
                    this.subjects = res.data
                })
                .catch(err => {
                    console.log('Errors: ', err)
                })
        },
        getInfo(id) {
            let apiResponse = api.AssignmentDetails(id)
            apiResponse
                .then(res => {
                    this.loaded = 1
                    this.form = res.data
                });
        },
        addData: function() {
            let params = new FormData()
            
            for(var key in this.form) {
                params.append(`form[${key}]`, this.form[key])
            }
            
            params.append('attachement', this.attachment)
            this.loaded = 0;
            
            let apiResponse = api.addAssignment(params)
            
            apiResponse
                .then(res => {
                    this.$router.push({
                        name: 'ManageAssignment'
                    })
                    .then(
                        res => {
                            this.loaded = 1;
                            this.$toast.success('Record saved.');
                        }
                    )
                    .catch(
                        err => {
                            this.loaded = 1;
                            console.log(err);
                        }
                    );
                })
                .catch(error => {
                    this.loaded = 1;
                    console.log(error);
                });
        },
        updateData: function() {
            let params = {
                _method: 'PUT',
                form: this.form
            }
            this.loaded = 0;
            let apiResponse = api.updatePage(this.form.id, params)
            apiResponse
                .then(res => {
                    this.$router.push({
                            name: 'ViewPage'
                        })
                        .then(
                            res => {
                                this.loaded = 1;
                                this.$toast.success('Record saved.');
                            }
                        )
                        .catch(
                            err => {
                                this.loaded = 1;
                                console.log(err);
                            }
                        )
                })
                .catch(error => {
                    this.loaded = 1;
                    console.log(error);
                });
        }
    },
    watch: {
        image (image_id) {
            this.form.image_id = image_id
        },
        "form.section_id" (section_id) {
            this.fetchSubjectBySection(section_id)
        }
    }
}
</script>
