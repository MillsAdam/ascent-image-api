import axios from 'axios';

const http = axios.create({
    baseURL: "https://picsum.photos"
});

export default {
    getImages() {
        return http.get('/v2/list');
    },
    getImage() {
        return http.get('/200/300');
    },
    getRandom() {
        return http.get('200/300/random=1')
    }
}