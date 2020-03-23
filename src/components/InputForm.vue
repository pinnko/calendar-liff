<template>
  <div class="container">
    <!-- 親のpropsを受け取る -->
    <h1 class="text-center pb-2">{{ttl}}</h1>
    <!-- submitイベントを無効に -->
    <form @submit.prevent="">
      あああ
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
          reason: '',
          reason_other: '',
          schedule: '',
          time1: '',
          time2: '',
          message: '',
        },
        // 遅刻理由の中身
        reasons: ['電車遅延', '体調不良', '忘れ物', 'その他'],
        // 種別の中身
        types: ['遅刻します', '全休をいただきます', '午前休をいただきます', '午後休をいただきます'],
        // メッセージのテンプレート
        text1: 'おはようございます。',
        text2: 'よろしくお願いします。'
      };
    },
    methods: {
      // 時間のオプションを配列で生成
      createTimes: function(init, to) {
        const times = [];
        for (let index = init; index < to; index++) {
          times.push(`${index * 5}分`);
        }
        return times;
      },
      // inputに変更があった場合にメッセージの作成
      createMessage: function() {
        let text, text_reson, text_schedule

        // その他の場合は、reason_otherのデータを使用
        if (this.data.reason == "その他") {
          text_reson = this.data.reason_other
        } else {
          text_reson = this.data.reason
        }

        // 遅刻の場合は時間に入力した時間を使用して生成
        if (this.data.schedule == "遅刻します") {
          text_schedule = `${this.data.time1}～${this.data.time2}ほど${this.data.schedule}`
        } else {
          text_schedule = this.data.schedule
        }

        // メッセージを生成
        text = `${this.text1}${this.data.name}です。${text_reson}のため${text_schedule}。${this.text2}`;

        // データに渡す
        this.data.message = text;
      },
    }
  };
</script>

<style>

</style>
