<script>
import GUN from 'gun'
let gun = GUN()
export default {
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
    <button>Become Dev</button>
</template>
