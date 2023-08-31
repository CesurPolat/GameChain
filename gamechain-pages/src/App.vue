<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { CloseOutlined, BorderOutlined, LineOutlined, HomeOutlined, AppstoreOutlined, UserOutlined } from '@ant-design/icons-vue'

</script>

<template>
  <div
    style="-webkit-app-region: drag"
    class="bg-gray-900 text-white w-full h-7 flex justify-between items-center p-0 m-0"
  >
    <!-- Not Change With Page -->
    <div>GameChain</div>
    <!-- TODO: inline-grid -->
    <div style="-webkit-app-region: no-drag" class="[&>*]:inline-grid [&>*]:items-center">
      <button class="w-10 h-7 hover:bg-gray-400 hover:bg-opacity-40"><LineOutlined /></button>
      <button class="w-10 h-7 hover:bg-gray-400 hover:bg-opacity-40"><BorderOutlined /></button>
      <button class="w-10 h-7 hover:bg-red-600"><CloseOutlined /></button>
    </div>
  </div>
  <div class="flex">
    <div
      class="bg-gray-800 text-white w-14 h-[calc(100vh-28px)] flex flex-col items-center [&>*]:m-1"
    >
      <a-tooltip placement="right">
        <template #title>
          <span>Home</span>
        </template>
        <RouterLink to="/"><div class="hover:bg-gray-600 w-10 h-10 rounded-xl inline-grid items-center text-2xl"><HomeOutlined /></div></RouterLink>
      </a-tooltip>

      <a-tooltip placement="right">
        <template #title>
          <span>Library</span>
        </template>
        <RouterLink to="about"><div class="hover:bg-gray-600 w-10 h-10 rounded-xl inline-grid items-center text-2xl"><AppstoreOutlined /></div></RouterLink>
      </a-tooltip>

      <a-divider class="bg-gray-400 m-2" />

      <a-divider class="bg-gray-400 m-2" />

      <a-tooltip placement="right">
        <template #title>
          <span>Log in</span>
        </template>
        <RouterLink to="about"><div class="hover:bg-gray-600 w-10 h-10 rounded-xl inline-grid items-center text-2xl"><UserOutlined /></div></RouterLink>
      </a-tooltip>

    </div>
    <RouterView class="w-[calc(100vw-56px)] h-[calc(100vh-28px)] overflow-auto" />
  </div>
</template>

<style scoped></style>
