<template>
    <div class="custom-select-wrapper"
        v-if="options"
        @click="toggleDropdown"
    >
        <div
            class="custom-select"
            :class="{
                'open': openSuggestion
            }"
        >
            <div
                class="custom-select__trigger"
            >
                <span class="arrow"></span>
                <input type="hidden" v-model="valueSelected">
                <b-input
                    :placeholder="placeholder"
                    v-model="search_value"
                    @keydown.enter="enter"
                    @keydown.down="down"
                    @keydown.up="up"
                    class="search_select_input"
                    autocomplete="off"
                    :class="customClass"
                ></b-input>
                <b-form-invalid-feedback>Please select required feild.</b-form-invalid-feedback>
            </div>
            <div
                class="custom-options"
                v-if="matches"
            >
                <span 
                    class="custom-option"
                    :class="{
                        'selected': isActive(id)
                    }"
                    :data-value="id"
                    v-for="(name, id) in matches"
                    :key="id"
                    @click="optionSelected(id)"
                >{{ name }}</span>
            </div>
            <span class=""></span>
        </div>
    </div>
</template>
<style scoped>
.custom-select-wrapper {
     position: relative;
     user-select: none;
     width: 100%;
}
.custom-select {
    position: relative;
    display: flex;
    flex-direction: column;
    border: 0;
    height: auto;
    padding: 0;
}
.custom-select__trigger {
     position: relative;
     align-items: center;
     justify-content: space-between;
     font-size: 20px;
     font-weight: 300;
     color: #3b3b3b;
     height: auto;
     line-height: 100%;
     background: #ffffff;
     cursor: pointer;
     border: 0;
}
.custom-options {
     position: absolute;
     display: block;
     top: 100%;
     left: 0;
     right: 0;
     border: 2px solid #394a6d;
     border-top: 0;
     background: #fff;
     transition: all 0.5s;
     opacity: 0;
     visibility: hidden;
     pointer-events: none;
     z-index: 2;
}
.custom-select.open .custom-options {
     opacity: 1;
     visibility: visible;
     pointer-events: all;
}
.custom-option {
    position: relative;
    display: block;
    padding: 10px 15px;
    font-size: 16px;
    font-weight: 300;
    color: #3b3b3b;
    line-height: 100%;
    cursor: pointer;
    transition: all 0.5s;
}
.custom-option:hover {
     cursor: pointer;
     background-color: #b2b2b2;
}
.custom-option.selected {
     color: #ffffff;
     background-color: #305c91;
}

.arrow {
    position: absolute;
    right: 5px;
    height: 15px;
    width: 15px;
    top: 15px;
}
.arrow::before, .arrow::after {
     content: "";
     position: absolute;
     bottom: 0px;
     width: 0.15rem;
     height: 100%;
     transition: all 0.5s;
}
.arrow::before {
     left: -5px;
     transform: rotate(-45deg);
     background-color: #394a6d;
}
.arrow::after {
     left: 5px;
     transform: rotate(45deg);
     background-color: #394a6d;
}
.open .arrow::before {
     left: -5px;
     transform: rotate(45deg);
}
.open .arrow::after {
     left: 5px;
     transform: rotate(-45deg);
}
</style>
<script>
export default {
    props: {
        'options': Object,
        'placeholder': {
            default: 'Select Option'
        },
        'customClass': [String, Object]
    },
    data () {
        return {
            valueSelected: '',
            search_value: '',
            current: 0,
            open: false
        }
    },
    computed: {
        matches() {
            let result = {}, index
            for (index in this.options) {
                if (!this.search_value || this.options[index].toLowerCase().includes(this.search_value.toLowerCase())) {
                    result[index] = this.options[index]
                }
            }
            return result
        },
        openSuggestion() {
            return this.open === true
        }
    },
    methods: {
        optionSelected (id) {
            this.current = Object.keys(this.matches).indexOf(id)
            this.updateSelectValue()
        },
        updateSelectValue () {
            let id = Object.keys(this.matches)[this.current]
            this.search_value   = this.matches[id] // id
            this.valueSelected  = id
            this.current = 0
            this.$emit('input', id)
        },

        toggleDropdown () {
            this.open = !this.open
        },

        //When enter pressed on the input
        enter () {
            this.updateSelectValue()
            this.open = false
        },

        //When up pressed while suggestions are open
        up () {
            if(this.current > 0 && this.open) {
                this.current--
            } else {
                this.current = Object.keys(this.matches).length - 1
            }
        },

        //When up pressed while suggestions are open
        down () {
            if(this.current < Object.keys(this.matches).length - 1 && this.open)
                this.current++;
            else
                this.current = 0
        },

        //For highlighting element
        isActive (id) {
            return id === Object.keys(this.matches)[this.current]
        }
    }
}
</script>
