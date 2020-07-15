<template>
  <div>hello vue</div>
</template>

<script>
export default {
  mounted() {
    this.sendExampleRequest()
  },
  methods: {
    async sendExampleRequest() {
      await this.$api.example.test().then(res => {
        console.log(JSON.stringify(res))
      })
    }
  }
}
</script>
<style scoped lang="scss">
@import '../assets/scss/common.scss';
</style>
