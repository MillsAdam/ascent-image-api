<template>
    <div class="image-list">
        <ImageCard v-for="image in images" :key="image.id" :image="image" />
    </div>
</template>

<script>
import ImageService from '../services/ImageService';
import ImageCard from '../components/ImageCard';

export default {
    components: {
        ImageCard
    },
    data() {
        return {
            images: []
        };
    },
    created() {
        ImageService.getImages().then( (response) => {
            this.images = response.data;
        });
    },
};
</script>

<style scoped>
.image-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
</style>