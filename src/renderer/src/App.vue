<script setup lang="ts">
  import { CameraFive, InnerShadowTopLeft, SettingOne } from '@icon-park/vue-next';
  import Camera from './components/Camera.vue';
  import Setting from './components/Setting.vue';
  import useDrag from './composables/useDrag';
  import { useConfigStore } from './store/useConfigStore';
  const { config } = useConfigStore()
  const { drag } = useDrag()
  drag.run()
  const quit = () => {
    window.api.quit()
  }
  const changeRound = () => {
    config.rounded = !config.rounded
    if (config.rounded) {
      window.api.setWindowSize({ aspectRatio: 1, width: 300, height: 300 })
    } else {
      window.api.setWindowSize({ aspectRatio: 16 / 9, width: 500, height: 280 })
    }
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
          v-if="config.page === 'camera'" @click="changeRound" />
      </section>
      <section>
        <Camera v-if="config.page === 'camera'"></Camera>
        <Setting v-else></Setting>
      </section>
    </main>
  </Suspense>
</template>

<style></style>