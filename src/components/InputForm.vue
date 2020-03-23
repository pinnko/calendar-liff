<template>
  <div class="container">
    <!-- 親のpropsを受け取る -->
    <h1 class="h5 text-center pb-2">{{ttl}}</h1>
    <!-- submitイベントを無効に -->
    <form @submit.prevent="">
      <div class="form-group row">
        <label class="col-4 col-form-label text-secondary">保護者氏名</label>
        <div class="col-8">
          <input type="text" id="inputName" class="form-control" v-model="data.name" placeholder="山田 花子">
        </div>
      </div>

      <div class="form-group row">
        <label class="col-4 col-form-label text-secondary">電話番号</label>
        <div class="col-8">
          <input type="text" class="form-control" id="inputTel" v-model="data.tel" placeholder="08012345678">
        </div>
      </div>

      <div class="form-group row">
        <label class="col-3 col-form-label text-secondary">時間</label>
        <div class="col-4">
          <select id="inputStart" class="form-control" v-model="data.startTime">
            <option v-for="(time, ti) in startTimes" :key="ti">{{ time }}</option>
          </select>
        </div>
        <label class="col-1 col-form-label">~</label>
        <div class="col-4">
          <select id="inputEnd" class="form-control" v-model="data.endTime">
            <option v-for="(time, ti) in endTimes" :key="ti">{{ time }}</option>
          </select>
        </div>
      </div>

      <button class="btn btn-success btn-block" id="send" type="submit">申し込む</button>

    </form>
  </div>
</template>

<script>
  export default {
    name: 'InputForm',
    props: {
      ttl: String
    },
    data() {
      return {
        data: {
          name: '',
          tel: '',
          startTime: '',
          endTime: '',
        },
        startTimes: ['8:00', '9:00'],
        endTimes: ['9:00', '10:00']
      };
    },
    methods: {

    }
  };
</script>

<style>
::placeholder {
  color: #ccc;
}
</style>
