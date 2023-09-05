<script>
//import { UploadProps } from 'ant-design-vue'
import { PlusOutlined, LoadingOutlined, EyeOutlined, DeleteOutlined } from '@ant-design/icons-vue'
import { createHelia } from 'helia'
import { strings } from '@helia/strings'
import { unixfs } from '@helia/unixfs'
import { CID } from 'multiformats/cid'
import {Buffer} from 'buffer';

const helia = await createHelia()
const fs = unixfs(helia)
const s = strings(helia)

export default {
  data() {
    return {
      previewVisible: false,
      previewImage: '',
      previewTitle: '',

      fileList: [
        {
          uid: '-1',
          name: 'image.png',
          status: 'done',
          url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
        },
        {
          uid: '-xxx',
          percent: 50,
          name: 'image.png',
          status: 'uploading',
          url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
        },
        {
          uid: '-5',
          name: 'image.png',
          status: 'error'
        }
      ]
    }
  },
  components: { PlusOutlined, LoadingOutlined, EyeOutlined, DeleteOutlined },
  mounted: async () => {

  },
  methods: {
    previewFiles(event) {
      const reader = new FileReader()
      reader.addEventListener('load', async () => {
        const cid = await fs.addBytes(Buffer.from(reader.result));
        console.log(cid);
        this.fileList.push({uid:"sdsds",url:await s.get(cid),status:"done"})
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
        class="absolute text-white opacity-0 hover:opacity-100 hover:bg-black hover:bg-opacity-40 w-[102px] h-[102px] flex items-center justify-center [&>*]:m-2"
      >
        <EyeOutlined /><DeleteOutlined />
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
