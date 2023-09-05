<script>
import { createHelia } from 'helia'
import { strings } from '@helia/strings'
import { CID } from 'multiformats/cid'
import { Buffer } from 'buffer'
import GUN from 'gun'
let gun = GUN()
const helia = await createHelia()
const s = strings(helia)

gun.get('CesurPolatGames').get("file").once(async (data)=>{
  console.log(data);
  //console.log(await s.get());
  this.url="s"
})

export default{
  data(){
    return {
      url:''
    }
  }
}
</script>

<template>
  <img :src="url">
</template>

<style></style>
