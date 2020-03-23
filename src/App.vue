<template>
  <div id="app" class="pt-3 pb-3">
    <input-form :ttl="title" />    
  </div>
</template>

<script>
import InputForm from '@/components/InputForm.vue'
export default {
  name: 'App',
  components: {
    InputForm
  },
  data() {
    return {
      title: 'ご利用情報を入力してください'
    }
  }
}
</script>

<style>
#app {
  color: #2c3e50;

}
</style>
