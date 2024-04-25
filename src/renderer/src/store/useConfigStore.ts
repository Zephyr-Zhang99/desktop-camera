import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useConfigStore = defineStore(
  'counter',
  () => {
    const config = ref({
      page: 'camera', // 页面
      deviceId: '', // 设备id
      borderWidth: '5px',
      borderColor: '#c04851',
      rounded: false // 是否圆角
    })
    return { config }
  },
  {
    persist: true
  }
)
