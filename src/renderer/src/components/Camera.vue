<script setup lang="ts">
    import { onMounted } from 'vue';

    onMounted(() => {
        const video = document.querySelector("video")!;
        const constraints = {
            audio: false,
            video: true,
        };
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