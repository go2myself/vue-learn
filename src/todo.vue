
<template>
    <div id="test">{{test}}</div>
    
</template>

<script>
import './assets/images/test.png'
import './assets/styles/test-stylus.styl'
import './header.vue'
export default {
    data(){
        return {
          test:'hello world33s'  
        }    
    },
    components(){
        return ''
    }
}
new Vue()
</script>

<style>
#test{
    color: red;
}
</style>