<script>
import { sendTransaction } from 'fireinterface'
import { message } from 'ant-design-vue';
import { RouterLink } from 'vue-router'
import GUN from 'gun'
let gun = GUN()
export default {
  data(){
    return {
      lcStorage:localStorage
    }
  },
  methods: {
    BecomeDeveloper: async () => {
      
      const result =await sendTransaction({
        method: 'sendTransaction',
        from: localStorage.account,
        to: '0x5fbdb2315678afecb367f032d93f642f64180aa3',
        value: 500000000000000000,
        data: '0x862be74e'
      })

      /* TODO: Err Type End message format */
      if(result.indexOf("Error")!=-1){
        message.error({content:()=>(result.slice(result.indexOf("'",0))),style:{marginTop:'28px'}})
      }
      else{
        message.success({content:()=>("Welcome to Dev Team"),style:{marginTop:'28px'}})
        localStorage.developer=true;
      }
    },
    clear:()=>{
      localStorage.clear();
    }
  },
  mounted: () => {
    gun.get('CesurPolat').on((data) => {
      console.log('realtime updates:', data)
    })
    gun.get('CesurPolat').put({
      hi: 'Test'
    })
  },
  components: { RouterLink }
}
</script>

<template>
  <div>
    <img src="https://via.placeholder.com/150/d32776" class="rounded-full w-24 h-24" />
    <!-- TODO:Call API -->
    <div class="flex flex-col text-left">
      <a @click="BecomeDeveloper" v-if="!lcStorage.developer">Become Dev</a>
      <RouterLink to="/uploadGame" v-if="lcStorage.developer">Upload Game</RouterLink>
      <RouterLink to="/" @click="clear">Log Out!</RouterLink>
    </div>
  </div>
</template>
