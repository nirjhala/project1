<template>
    <div class="dashboard-content-one">
        <!-- Breadcubs Area Start Here -->
        <div class="breadcrumbs-area">
            <div class="float-right">
                <router-link 
                    :to="{ 
                        name: 'AddQuestion'
                    }" 
                    class="fw-btn-fill btn-gradient-yellow text-white"
                >Add Questions</router-link>
            </div>
            <h3>View Questions</h3>
            <ul>
                <li>
                    <router-link :to="{ name: 'dashboard' }">Dashboard</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'OnlineExamMaster' }">Online Exam Master</router-link>
                </li>
                <li>View Questions</li>
            </ul>
        </div>
        <b-form-group>
            <b-input
                type="search"
                v-model.trim="s"
                placeholder="Search ..."
            ></b-input>
        </b-form-group>
        <b-card
            v-if="!questions.data"
            class="text-center h-auto"
        >
            <b-spinner label="Spinning" style="width: 48px; height: 48px;"></b-spinner>
        </b-card>
        <div
            v-if="questions.data"
        >
            <b-card
                class="h-auto"
                v-if="!questions.data.length"
            >
                No record(s) found.
            </b-card>
            <b-card class="h-auto"
                v-if="questions.data.length"
            >
                <template #header>
                    <div
                        class="float-right"
                    >
                        {{ questions.from }} - {{ questions.to }} of {{ questions.total }} record(s) are showing.
                    </div>
                    <a 
                        href="javascript:" 
                        class="icon icon-delete text-dark" 
                        title="Remove Selected"
                        @click="deleteMultiple"
                    ></a>
                    <select
                        v-model="limit"
                    >
                        <option value="10">10</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                    </select>
                    <span>Per Page</span>
                </template>
                <div
                    class="table-responsive"
                >
                    <b-table
                        :fields="question.fields"
                        :items="questions.data"
                        striped
                        bordered
                    >
                        <template #head(index)="data">
                            <label>
                                <input type="checkbox" v-model="checkAll" value="1" @click="selectAll">
                                {{ data.label }}.
                            </label>
                        </template>
                        <template #cell(index)="data">
                            <label>
                                <input 
                                    type="checkbox"
                                    v-model="question.check"
                                    :value="data.item.id"
                                    v-if="!data.item.stock"
                                >
                                <span v-if="data.item.stock" class="icon-x-square"></span>
                                {{ data.index + questions.from }}.
                            </label>
                        </template>
                        <template #cell(question)="data">
                            <div
                                v-html="data.item.question"
                            ></div>
                            <div>
                                <router-link
                                    :to="{
                                        name: 'EditQuestion',
                                        params: {
                                            id: data.item.id
                                        }
                                    }"
                                ><i class="icon-mode_edit"></i> Edit</router-link>
                            </div>
                        </template>
                    </b-table>
                </div>
                <pagination :data="questions" :limit="2" @pagination-change-page="fetchQuestions"></pagination>
            </b-card>
        </div>
    </div>
</template>
<script>
import { delete_question, multiple_delete_question, view_question } from '../../../../api/script'
export default {
    data () {
        return {
            s: '',
            limit: 10,
            checkAll: false,
            question: {
                check: [],
                fields: [
                    {
                        key: 'index',
                        label: 'Sr. No.'
                    },
                    {
                        key: 'question',
                        sortable: true
                    },
                    {
                        key: 'option1',
                        sortable: true
                    },
                    {
                        key: 'option2',
                        sortable: true
                    },
                    {
                        key: 'option3',
                        sortable: true
                    },
                    {
                        key: 'option4',
                        sortable: true
                    }
                ]
            },
            questions: {}
        }
    },
    mounted () {
        this.fetchQuestions()
    },
    methods: {
        searchAfterDebounce: _.debounce(
            function () {
                this.fetchQuestions()
            }, 500
        ),
        selectAll () {
            this.question.check = []
            if (!this.checkAll) {
                for (let index in this.questions.data) {
                    if(!this.questions.data[index].stock) {
                        this.question.check.push(this.questions.data[index].id)
                    }
                }
            }
        },
        fetchQuestions (page = 1) {
            this.questions = {}
            view_question (`page=${page}&limit=${this.limit}&s=${this.s}`)
                .then(res => {
                    this.questions = res.data
                })
        },
        deleteMultiple () {
            if(this.question.check.length) {
                swal({
                  title: "Are you sure?",
                  text: "Once deleted, you will not be able to recover this record!",
                  icon: "warning",
                  buttons: true,
                  dangerMode: true,
                })
                .then((willDelete) => {
                  if (willDelete) {
                      multiple_delete_question ({ids: this.question.check})
                        .then(res => {
                            this.$toast.success(res.data.message)
                            this.fetchQuestions(1)
                        })
                  }
                })
            } else {
                swal("Warning", "Please select at least one record to delete.", "warning")
            }
        }
    },
    watch: {
        s() {
            this.searchAfterDebounce()
        },
        limit () {
            this.fetchQuestions(1)
        }
    }
}
</script>
