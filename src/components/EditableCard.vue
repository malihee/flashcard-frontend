<template> 
<div @click="handleClick">
    <!-- <div ref="me" contenteditable @input.stop="handleInput" @blur="handleDone" @keydown.enter="handleDone" 
    @keypress.stop="handleKeyPress"  v-text="value" v-show="editing"></div> -->
    <div ref="me" contenteditable @input.stop="handleInput" @blur="handleDone" @keydown.enter="handleDone" 
    @keypress.stop="handleKeyPress"  v-text="value" v-show="editing"></div>
    <span v-html="value" class="editable" v-if="!editing"></span>
</div>
</template>

<script>
    export default{
        name:'EditableCard',
        props: {
            value: {
                type: String,
                default: ''
            },
            maxLength: {
                type: Number,
                default: 500
            },
            data:{
                type: String
            }
        },
        data() {
            return { 
                editing: false
            }
        },
        methods: {
            handleInput() {
            },
            handleKeyPress(e) {
                //console.log('handleKeyPress')
                if (e.target.innerText.length >= this.maxLength) {
                    e.preventDefault()
                    return;
                }
            },
            handleClick() {
                this.editing = true
                setTimeout(()=>{
                    this.$refs.me.focus()
                }, 10)
            },
            handleDone(e) {
                // this.data = e.target.innerText
                console.log('ed',this.data);
                this.$emit('card_updating', {dataa:this.data, new_value :e.target.innerText})
                // this.$emit('input')
                this.editing = false

            }
        }
    }
</script>
 