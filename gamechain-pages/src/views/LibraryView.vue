<script>
import { createHelia } from 'helia'
import { strings } from '@helia/strings'
import { CID } from 'multiformats/cid'
import { Buffer } from 'buffer'
import GUN from 'gun'
let gun = GUN()

const helia = await createHelia()
const s = strings(helia)

export default{
  data(){
    return{
      a:'a'
    }
  },
  methods:{
    getBase64:async function(){
      console.log(CID.parse("Qma4hmeuaosUB9iBUXpx58N87gnNDG6eFXimtJTYA6BqcV"));
      let temp=await s.get(CID.parse("Qma4hmeuaosUB9iBUXpx58N87gnNDG6eFXimtJTYA6BqcV"))//Buffer.from().toString()
      console.log( "?",temp );
      //return temp
    }
  },
  mounted:()=>{
    gun.get("CesurPolatGames").get("file").once((data)=>{
      console.log(data);
    })
  }
}
</script>

<template>
  <img :src="a" alt="">
  <button @click="getBase64">aaa</button>
</template>