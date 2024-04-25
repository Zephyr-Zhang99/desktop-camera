<script setup lang="ts">
  import { CameraFive, InnerShadowTopLeft, SettingOne } from '@icon-park/vue-next';
  import Camera from './components/Camera.vue';
  import Setting from './components/Setting.vue';
  import { useConfigStore } from './store/useConfigStore';
  const { config } = useConfigStore()
  const quit = () => {
    window.api.quit()
  }
</script>

<template>
  <Suspense>
    <main class="relative group" @contextmenu="quit">
      <section>
        <!-- 参数设置 -->
        <setting-one theme="outline" size="24"
          class="absolute left-1/2 -translate-x-1/2 mt-3 text-white opacity-80 cursor-pointer z-10 hidden group-hover:block"
          v-if="config.page === 'camera'" @click="config.page = 'setting'">
        </setting-one>
        <!-- 摄像头 -->
        <camera-five theme="outline" size="24"
          class="absolute left-1/2 -translate-x-1/2 mt-3 text-white opacity-80 cursor-pointer z-10 hidden group-hover:block"
          v-if="config.page === 'setting'" @click="config.page = 'camera'">
        </camera-five>
        <inner-shadow-top-left theme="outline" size="24"
          class="absolute left-1/2 -translate-x-1/2 mt-3 bottom-3 text-white opacity-80 cursor-pointer z-10 hidden group-hover:block"
          v-if="config.page === 'camera'" @click=" config.rounded = !config.rounded" />
      </section>
      <section>
        <Camera v-if="config.page === 'camera'"></Camera>
        <Setting v-else></Setting>
      </section>
    </main>
  </Suspense>
</template>

<style></style>