export default function (resources) {
  return {
    data() {
      let initData = {
        remoteDataLoading: 0
      }

      initData.remoteErrors = {}

      for (const key in resources) {
        initData[key] = null
        initData.remoteErrors[key] = null
      }
      return initData
      // return {
      //   remoteDataLoading: 0
      // }
    },
    computed: {
      remoteDataBusy() {
        return this.$data.remoteDataLoading !== 0
      },
      hasRemoteErrors() {
        return Object.keys(this.$data.remoteErrors).some(
          key => this.$data.remoteErrors[key]
        )
      }
    },
    methods: {
      async axiosResource(key, url) {
        this.$data.remoteDataLoading++
        this.$data.remoteErrors[key] = null
        try {
          // this.$data[key] = await this.$axios({
          //   url
          // })
          // console.log(url,key)
          await this.$axios({
            url
          }).then(res => {
            // console.log(res,11)
            this.$data[key] = res.data
          })



          // console.log(this.$data[key],111)
        } catch (e) {
          this.$data.remoteErrors[key] = e
        }
        this.$data.remoteDataLoading--
      }
    },
    created() {
      for (const key in resources) {
        let url = resources[key]
        this.axiosResource(key, url)
      }
    }
  }
}
