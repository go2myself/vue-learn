
<template>
    <div id="test">{{test}}</div>
    
</template>

<script>
import './assets/images/test.png'
import './assets/styles/index.css'
import './assets/styles/test-stylus.styl'
export default {
    data(){
        return {
          test:'hello world33s'  
        }    
    }
}
</script>

<style>
#test{
    color: red;
}
</style>