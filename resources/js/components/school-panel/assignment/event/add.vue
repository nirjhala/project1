<template>
    <div class="dashboard-content-one">
        <!-- Breadcrumbs Area Start Here -->
        <div class="breadcrumbs-area">
            <div class="float-right">
                <router-link :to="{ name: 'ViewEvent' }" class="fw-btn-fill btn-gradient-yellow text-white">View Event</router-link>
            </div>
            <h3>{{ !form.id ? 'Add' : 'Edit' }} Event</h3>
            <ul>
                <li>
                    <router-link :to="{ name: 'dashboard' }">Dashboard</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'ViewEvent' }">Event</router-link>
                </li>
                <li>{{ !form.id ? 'Add' : 'Edit' }} Event</li>
            </ul>
        </div>
        <!-- Breadcrumbs Area End Here -->

        <!-- Card Table Area Start Here -->
        <div class="card height-auto">
            <div class="card-body">
                <div class="text-center" v-if="!loaded">
                    <b-spinner></b-spinner>
                </div>
                <div v-if="loaded">
                    <form class="new-added-form" @submit.prevent=" form.id ? updateData() : addData()">
                        <div class="row">
                            <div class="col-lg-9">
                                <div class="form-group">
                                    <label>Name *</label>
                                    <input type="text" v-model="form.name" class="form-control" required>
                                </div>
                                <div class="form-group">
                                    <label>Slug *</label>
                                    <input type="text" v-model="form.slug" class="form-control" required>
                                </div>
                                <div class="row">
                                    <div class="col-xl-6 col-12 form-group">
                                        <label>Session</label>
                                        <select v-model="form.session_id" class="form-control" required>
                                            <option value="">Select Session</option>
                                            <option :value="s.id" v-for="(s, i) in sessions" :key="i">{{ s.session_name }}</option>
                                        </select>
                                    </div>
                                    <div class="col-xl-6 col-12 form-group">
                                        <label>Type</label>
                                        <select v-model="form.type" class="form-control">
                                            <option value="custom">Custom</option>
                                            <option value="date-range">Date Range</option>
                                            <option value="weekdays">Weekdays</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label>Short Description</label>
                                    <textarea v-model="form.short_description" class="form-control" style="height: 150px;"></textarea>
                                </div>
                                <div class="form-group">
                                    <label>Description</label>
                                    <editor
                                        v-model="form.description"
                                        :init="editor_options"
                                    />
                                </div>
                            </div>
                            <div class="col-lg-3">
                                <div class="mb-3">
                                    <label>Upload Image</label>
                                    <img :src="image_src" alt="" title="" id="featuredImage" class="w-100 uploadImage" data-image="#featuredImage" data-field="#featuredImageId" v-if="image_src">
                                    <input type="hidden" v-model="form.image" value="" id="featuredImageId">
                                </div>
                                <button type="button" class="uploadImage btn-fill-lg bg-blue-dark btn-hover-yellow btn-block uploadImageBtn" data-image="#featuredImage" data-field="#featuredImageId">Upload Image</button>
                                
                                <div class="mt-3 form-group" v-if="form.type == 'weekdays'">
                                    <select v-model="form.weekday" class="form-control">
                                        <option value="">Select Day</option>
                                        <option value="0">Sunday</option>
                                        <option value="1">Monday</option>
                                        <option value="2">Tuesday</option>
                                        <option value="3">Wednesday</option>
                                        <option value="4">Thursday</option>
                                        <option value="5">Friday</option>
                                        <option value="6">Saturday</option>
                                    </select>
                                </div>
                                <div>
                                    <div class="mt-3">
                                        <label>Event Dates</label>
                                        <button type="button" class="btn btn-light btn-block" @click="addDateRow" v-if="form.type == 'custom'"><i class="icon-plus"></i> Add Row</button>
                                    </div>
                                    <div style="max-height: 500px; overflow: auto;">
                                        <div class="mt-3 input-group" v-for="(dt, i) in ev_dates" :key="i">
                                            <input type="date" class="form-control" v-model="ev_dates[i].date" @change="change_ev_dates">
                                            <span class="input-group-append" v-if="form.type == 'custom'" @click="removeDateRow(i)">
                                                <button type="button" class="btn btn-dark"><i class="icon-minus"></i></button>
                                            </span>
                                        </div>
                                    </div>
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
    </div>
</template>
<style>
    .tox-notification { display: none !important }
</style>
<script src="//cdnjs.cloudflare.com/ajax/libs/moment.js/2.17.1/moment.min.js"></script>
<script>
import Select2 from 'v-select2-component'
import api from '../../../../api/script'
import Editor from '@tinymce/tinymce-vue'

export default {
    components: { Select2, Editor },
    props: ['image_src', 'image'],
    data() {
        return {
            form: {
                id: '',
                name: '',
                slug: '',
                type: 'custom',
                dates: '',
                dates_text: '',
                classes: [],
                short_description: '',
                description: '',
                weekday: '',
                image: '',
                session_id: ''
            },
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
            ev_dates: [],
            sessions: [],
            errors: [],
            loaded: 0
        }
    },
    mounted() {
        let params = this.$route.params;

        this.getSessions()
        if (params.id != undefined && params.id != '') {
            this.getInfo(params.id)
        } else {
            this.loaded = 1
        }
    },
    methods: {
        addDateRow () {
            this.ev_dates.push({
                date: ''
            })
        },
        removeDateRow (index) {
            this.ev_dates.splice(index, 1)
        },
        change_ev_dates () {
            this.form.dates = []
            this.ev_dates.forEach((dt, i) => {
                this.form.dates.push(dt.date)
            })
        },
        getSessions () {
            let apiResponse = api.getAllSessions()
            apiResponse
                .then (res => {
                    this.sessions = res.data
                })
                .catch (err => {
                    console.log('Errors: ', err)
                })
        },
        getInfo(id) {
            let apiResponse = api.eventInfo(id)
            apiResponse
                .then(res => {
                    
                    this.loaded         = 1;

                    let media_image    = res.data.image;
                    let media_src      = res.data.media ? this.baseURL+'uploads/medium/'+res.data.media.image : this.baseURL+'/img/default.jpg';

                    this.$emit('update-image_src-selected', media_src);
                    this.$emit('update-image-selected', media_image);
                    
                    delete res.data.media
                    this.form = res.data
                });
        },
        addData: function() {
            let params = {
                form: this.form
            }
            this.loaded = 0;
            
            let apiResponse = api.addEvent(params)
            
            apiResponse
                .then(res => {
                    this.$router.push({
                        name: 'ViewEvent'
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
            let apiResponse = api.updateEvent(this.form.id, params)
            apiResponse
                .then(res => {
                    if (res.data.status) {
                        this.$router.push({
                                name: 'ViewEvent'
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
                    } else {
                        this.loaded = 1;
                        this.errors = res.data.errors;
                    }
                })
                .catch(error => {
                    this.loaded = 1;
                    console.log(error);
                });
        }
    },
    watch: {
        image (media_id) {
            this.form.image = media_id
        },
        ev_dates () {
            this.change_ev_dates()
        },
        "form.name" (name) {
            this.form.slug = name
                    .toLowerCase()
                    .replace(/ /g,'-')
                    .replace(/[^\w-]+/g,'')
        },
        "form.type" (type) {
            this.ev_dates = []
            this.form.weekday = ''
            if (type == 'date-range') {
                this.ev_dates = [
                    {
                        date: ''
                    },
                    {
                        date: ''
                    }
                ]
            }
        },
        "form.weekday" (day) {
            this.ev_dates = []

            if(day !== '') {
                let currentDate = new Date(),
                    currentMonth = currentDate.getMonth(),
                    currentYear  = currentDate.getFullYear(),
                    startYear = currentMonth <= 2 ? currentYear - 1 : currentYear,
                    endYear   = parseInt(startYear) + 1

                let start = moment(startYear + '-04-01'),
                    startDay = start.day(),
                    end = moment(endYear + '-03-31'),
                    current = start.clone()
                
                if(startDay <= day) {
                    current.subtract('days', startDay)
                    current.add('days', day)
                }
                else if(startDay > day)
                    current.add('days', 14 - day)
                    
                while (current.isSameOrBefore(end)){
                    this.ev_dates.push({
                        date: current.format('YYYY-MM-DD')
                    })
                    current.add('days', 7)
                }
            }
        }
    }
}
</script>
