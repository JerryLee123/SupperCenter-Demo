<template>
  <main class="faq">
    <h1>Frenquently Asked Questions</h1>
    <Loading v-if="remoteDataBusy" />
    <div class="error" v-if="hasRemoteErrors">Can't load the questions</div>
    <section class="list">
      <article v-for="item in questionList" :key="item._id">
        <h2 v-html="item.title"></h2>
        <p v-html="item.content"></p>
      </article>
    </section>
  </main>
</template>

<script>
import RemoteData from '../mixins/RemoteData'
export default {
  mixins:[
    RemoteData({
      questionList:'questions'
    })
  ]
  // ,
  // data() {
  //   return {
  //     question: [],
  //     error: null,
  //     loading: false
  //   };
  // },
  // async created() {
  //   this.loading = true;
  //   await this.$axios({
  //     url: "questions"
  //   })
  //     .then(res => {
  //       this.question = res.data;
  //       console.log(res);
  //       if (res.status !== 200) {
  //         throw new error("error");
  //       }
  //     })
  //     .catch(e => {
  //       console.log(e);
  //       this.error = true;
  //     });
  //   this.loading = false;
  // }
};
</script>

<style>
</style>