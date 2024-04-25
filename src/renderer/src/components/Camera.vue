<script setup lang="ts">
    import { useConfigStore } from '@renderer/store/useConfigStore';
    import { onMounted } from 'vue';
    const { config } = useConfigStore()

    onMounted(() => {
        const video = document.querySelector("video")!;
        const constraints = {
            audio: false,
            video: {
                deviceId: config.deviceId, width: 1920, height: 1080
            },
        } as MediaStreamConstraints;
        navigator.mediaDevices
            .getUserMedia(constraints)
            .then(function (stream) {
                video.srcObject = stream
                video.play()
            })
    })


</script>
<template>
    <main class="w-screen h-screen flex" :class="{ 'rounded-full': config.rounded }"
        :style="`border:solid ${config.borderWidth} ${config.borderColor}`">
        <video class="object-cover h-full" :class="{ 'rounded-full': config.rounded }"></video>
    </main>
</template>

<style lang="scss" scoped></style>