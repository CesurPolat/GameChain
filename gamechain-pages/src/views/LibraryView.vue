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
      console.log(CID.parse("QmYNQJoKGNHTpPxCBPh9KkDpaExgd2duMa3aF6ytMpHdao").toV1());
      let temp=await s.get(CID.parse("QmYNQJoKGNHTpPxCBPh9KkDpaExgd2duMa3aF6ytMpHdao").toV1())//Buffer.from().toString()
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