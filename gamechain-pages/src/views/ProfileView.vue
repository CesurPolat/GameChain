<script>
import { sendTransaction } from 'fireinterface'
import GUN from 'gun'
let gun = GUN()
export default {
  methods: {
    BecomeDeveloper: () => {
      sendTransaction(
        JSON.stringify({
          method: 'sendTransaction',
          from: '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266',
          to: '0x70997970C51812dc3A010C7d01b50e0d17dc79C8'
        })
      )
    }
  },
  mounted: () => {
    gun.get('CesurPolat').on((data) => {
      console.log('realtime updates:', data)
    })
    gun.get('CesurPolat').put({
      hi: 'Test'
    })
  }
}
</script>

<template>
  <button @click="BecomeDeveloper">Become Dev</button>
</template>
