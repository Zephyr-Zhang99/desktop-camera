<script setup lang="ts">

    import { onMounted } from 'vue';
    const devices = await navigator.mediaDevices.enumerateDevices();
    const cameras = devices.filter(d => d.kind.includes('video'))
    console.log(cameras);

    onMounted(() => {
        const video = document.querySelector("video")!;
        const constraints = {
            audio: false,
            video: {
                deviceId: cameras[1].deviceId
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
    <main class="w-screen h-screen flex">
        <video class="object-cover"></video>
    </main>
</template>

<style lang="scss" scoped></style>