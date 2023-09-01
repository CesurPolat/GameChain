<script>
import { requestAccounts } from 'fireinterface'
import { message } from 'ant-design-vue';

export default {
  methods: {
    requestAccount: function () {
      requestAccounts().then((resp)=>{
        //TODO: Interface Turn Failed
        if(resp!="Rejected"){
          localStorage.account=resp;
          this.$router.push("profile")
        }else{
          message.error({content:()=>"Rejected",style:{marginTop:'28px'}})
        }
      })
    }
  },
  mounted: function () {}
}
</script>

<template>
  <div class="bg-cover bg-center" style="background-image: url(src/assets/bgimg.jpg)">
    <div class="flex justify-center items-center w-full h-full backdrop-blur">
      <div
        class="p-5 rounded-lg bg-gray-900 bg-opacity-80 flex flex-col justify-center items-center"
      >
        <h1 class="text-white mb-2 text-3xl font-semibold">WELLCOME TO GameChain</h1>
        <!-- TODO: Array -->
        <button @click="requestAccount">
          <div
            class="flex items-center text-white text-lg font-medium p-1 bg-red-600 hover:bg-red-500 hover:shadow-2xl transition-all rounded-lg [&>*]:m-1"
          >
            <img src="../assets/logoWhite.png" alt="FireWallet" class="w-6 h-7" /> Login with
            FireWallet
          </div>
        </button>
      </div>
    </div>
  </div>
</template>
