<script setup lang="ts">
    import { ref } from 'vue';

    const devices = await navigator.mediaDevices.enumerateDevices();
    const cameras = devices.filter(d => d.kind.includes('video'))
    const deviceId = ref('');
    const onSubmit = () => {

    }
</script>

<template>
    <main class="bg-[#2c3e50] w-screen h-screen p-5">
        <h2 class="text-gray-50 text-center text-sm mb-5 opacity-70">参数设置</h2>
        <el-form ref="form" label-width="80px" :inline="false" size="large" label-position="top">
            <el-form-item>
                <el-select v-model="deviceId" placeholder="选择摄像头" clearable filterable>
                    <el-option v-for="item in cameras" :key="item.deviceId" :label="item.label"
                        :value="item.deviceId" />
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-button type="success" plain @click="onSubmit">保存</el-button>
            </el-form-item>
        </el-form>
    </main>
</template>

<style lang="scss" scoped></style>