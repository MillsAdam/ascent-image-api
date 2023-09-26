<template>
    <div class="image-scroll">

        <div class="image-card-container">
            <ImageCard :image="currentImage" />
        </div>
        <div class="button-container">
            <button class="prev-btn" @click="prevImage" :disabled="currentIndex === 0">
                <img src="../assets/angle-left.png" />
            </button>
            <button class="next-btn" @click="nextImage" :disabled="currentIndex === images.length">
                <img src="../assets/angle-right.png" />
            </button>
        </div>
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
            images: [],
            currentIndex: 0,
        };
    },
    computed: {
        currentImage() {
            return this.images[this.currentIndex];
        }
    },
    methods: {
        prevImage() {
            if (this.currentIndex > 0) {
                this.currentIndex -= 1;
            }
        },
        nextImage() {
            if (this.currentIndex < this.images.length -1) {
                this.currentIndex += 1;
            }
        },
    },
    created() {
        ImageService.getImages().then( (response) => {
            this.images = response.data;
        });
    }
}

</script>

<style>
.image-scroll {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1%;
    grid-template-areas:
        "image"
        "buttons";
    flex-grow: 1;
}

.image-card-container {
    grid-area: image;
    display: flex;
    justify-content: center;
}

.button-container {
    grid-area: buttons;
    display: flex;
    justify-content: center;
    font-size: 14px;
}



img {
    max-width: 14px;
    max-height: 14px;
}
</style>