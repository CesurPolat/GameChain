<script>
//import { UploadProps } from 'ant-design-vue'
import { PlusOutlined, LoadingOutlined, EyeOutlined, DeleteOutlined } from '@ant-design/icons-vue'
import { createHelia } from 'helia'
import { strings } from '@helia/strings'
import { unixfs } from '@helia/unixfs'
import { CID } from 'multiformats/cid'
import { Buffer } from 'buffer'
import GUN from 'gun'
let gun = GUN()

const helia = await createHelia()
const fs = unixfs(helia)
const s = strings(helia)

export default {
  data() {
    return {
      previewVisible: false,
      previewImage: '',
      previewTitle: '',

      fileList: []
    }
  },
  components: { PlusOutlined, LoadingOutlined, EyeOutlined, DeleteOutlined },
  mounted: async () => {},
  methods: {
    
    previewFiles(event) {
      const reader = new FileReader()
      reader.addEventListener('load', async () => {
        //console.log(reader.result);
        //console.log("BR",Buffer.from(reader.result));
        let cid = await fs.addBytes(Buffer.from(reader.result))
        console.log("CID",cid.toString());
        gun.get('CesurPolatGames').put({
          file: cid.toString()
        })
        this.fileList.push({ uid: 'sdsds', url: reader.result, status: 'done' })
      })
      reader.readAsDataURL(event.target.files[0])
    }
  }
}
</script>

<template>
  <div v-for="file in fileList" :key="file.uid" class="m-1 overflow-hidden">
    <div v-if="file.status == 'done'" class="border rounded-lg w-28 h-28 p-1">
      <div
        class="absolute text-gray-400 opacity-0 hover:opacity-100 hover:bg-black hover:bg-opacity-40 w-[102px] h-[102px] flex items-center justify-center"
      >
        <div class="transition-all hover:[&>*]:text-white [&>*]:m-2">
          <EyeOutlined /><DeleteOutlined />
        </div>
      </div>
      <img :src="file.url" />
    </div>
    <div
      v-else-if="file.status == 'uploading'"
      class="flex flex-col items-center justify-center w-28 h-28 border rounded-lg"
    >
      Uploading <LoadingOutlined />
    </div>
    <div
      v-else
      class="border border-red-600 rounded-lg w-28 h-28 text-red-600 text-center items-center inline-grid"
    >
      Error
    </div>
  </div>
  <div
    @click="$refs.file.click()"
    class="border border-dashed transition-all hover:border-blue-600 rounded-lg w-28 h-28 flex flex-col items-center justify-center m-1"
  >
    <input type="file" ref="file" style="display: none" @change="previewFiles" />
    <PlusOutlined />
    Upload
  </div>
</template>

<style>
/* you can make up upload button and sample style by using stylesheets */
.ant-upload-select-picture-card i {
  font-size: 32px;
  color: #999;
}

.ant-upload-select-picture-card .ant-upload-text {
  margin-top: 8px;
  color: #666;
}
</style>
