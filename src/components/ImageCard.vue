<template>
    <div class="image-card">
        <div v-if="image" class="image-card-title">{{image.author}}</div>
        <img v-if="image" class="image-card-image" :src="image.download_url" />
    </div>
</template>

<script>
export default {
    props: ['image']
}
</script>

<style scoped>
.image-card {
    padding: 10px;
    text-align: center;
    margin: 10px;
    max-width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 14px;
}

img {
    max-width: 200px;
    max-height: 300px;
}
</style>