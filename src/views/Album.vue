<template>
    <div class="q-pa-md q-gutter-sm">
        <q-dialog v-model="dialog" persistent :maximized="maximizedToggle" transition-show="slide-up"
            transition-hide="slide-down">
            <q-card class="bg-primary text-white">
                <q-bar class="menub">
                    <q-space />
                    <q-btn dense flat icon="minimize" @click="maximizedToggle = false" :disable="!maximizedToggle">
                        <q-tooltip v-if="maximizedToggle" class="bg-white text-primary">Minimize</q-tooltip>
                    </q-btn>
                    <q-btn dense flat icon="crop_square" @click="maximizedToggle = true" :disable="maximizedToggle">
                        <q-tooltip v-if="!maximizedToggle" class="bg-white text-primary">Maximize</q-tooltip>
                    </q-btn>
                    <q-btn dense flat icon="close" v-close-popup bgcolor="red">
                        <q-tooltip class="bg-white text-primary">Close</q-tooltip>
                    </q-btn>
                </q-bar>
                <div class="popdesk">
                    <img :src="selectedPhotoUrl" v-if="selectedPhotoUrl" alt="Selected Photo">
                    <div class="isidesk">
                        <p v-if="selectedPhoto">{{ selectedPhoto.title }}</p>
                    </div>
                </div>
            </q-card>
        </q-dialog>
    </div>
    <div class="galwrap">
        <div class="galwrap1">
            <span v-if="page">
                <div class="row">
                    <div class="col">Nomor
                        <div class="row">
                            <p>dadadadada</p>
                        </div>
                    </div>
                    <div class="col">Judul</div>
                    <div class="col" style="padding-left: 300px;">IdAlbum</div>
                </div>
                <div class="row ls" v-for="album in albums" :key="album.id" @click="selectAlbum(album.id)">
                    <div class="col">
                        {{ album.id }}
                    </div>
                    <div class="col-6">
                        {{ album.title }}
                    </div>
                    <div class="col">
                        {{ album.userId }}
                    </div>
                </div>
            </span>
            <div v-else>
                <div v-if="selectedAlbumId" class="photo-list">
                    <div class="photos">
                        <h3>Photos in Album {{ selectedAlbumId }}</h3>
                        <button @click="backalbum">Back To Album</button>
                    </div>
                    <div class="photov">
                        <h2>Foto</h2>
                        <h2>Judul Foto</h2>
                    </div>
                    <div class="photo" v-for="photo in filteredPhotos" :key="photo.id"
                        @click="showOriginalPhoto(photo)">
                        <img :src="photo.thumbnailUrl" :alt="photo.title">
                        <q-btn label="" class="hilang" @click="showOriginalPhoto(photo.url)" />
                        <p>{{ photo.title }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref, onMounted, toRefs } from 'vue';
import { useAlbumStore } from '../stores/albumStore.js';
const albumStore = useAlbumStore();
const page = ref(true); 
const dialog = ref(false);
const maximizedToggle = ref(true);
const selectedPhotoUrl = ref('');
const selectedPhoto = ref(null);
onMounted(async () => {
    await albumStore.fetchAlbums();
    await albumStore.fetchPhotos();
    console.log(albumStore.albums); 
    console.log(albumStore.photos); 
});
const { albums, selectedAlbumId, filteredPhotos } = toRefs(albumStore);
const selectAlbum = (albumId) => {
    albumStore.setSelectedAlbum(albumId);
    page.value = false; 
};
const backalbum = () => {
    page.value = true; 
};
const showOriginalPhoto = (photo) => {
    selectedPhoto.value = photo; 
    selectedPhotoUrl.value = photo.url; 
    dialog.value = true; 
};
</script>
<style>
.photov{
    display: flex;
    gap: 200px;
    margin: 25px 0;
}
.galwrap {
    color: aliceblue;
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: end;
}
.popdesk{
    display: flex;
    align-items:center ;
    justify-content: center;
    flex-direction: column;
}
.isidesk{
    text-align: center;
    width: 34%;
}
.photos{
    display: flex;
    gap: 50px;
}
.galwrap1 {

    height: 100%;
    width: 67%;
    overflow: auto;
}
.row {
    display: flex;
    padding: 10px;
    cursor: pointer;
}
.ls:hover {
    background-color: lightgray;
}
.hilang{
    background-color: transparent;
    position: absolute;
    height: 100px;
    width: 110px;
}
.menub{
    height: 50px;
}
.col {
    flex: 1;
    padding: 10px;
}
.col-6 {
    flex: 2;
    padding: 10px;
}
.photo-list {
    margin-top: 20px;
    
}
.masterfoto{
    align-self: center;
}
.photo {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 10px;
    gap: 210px;
    position: relative;
}
.photo img {
    max-width: 100px;
    max-height: 100px;
    margin-left: 5px;
}
</style>
