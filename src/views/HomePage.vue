<template>
    <div class="container">
        <div class="q-pa-md row items-start q-gutter-md">
            <q-card class="my-card text-white">
                <q-card-section>
                    <div class="text-h6 jdl"><span>Temperature Check Web APP</span></div>
                </q-card-section>
                <q-card-section>
                    <span class="sec1">
                        <q-input rounded outlined class="inputf" style="color: white;" v-model="city"
                            placeholder="Enter city name" @keyup.enter="getWeather"></q-input>
                        <q-btn icon="search" style="border-radius: 100%;" @click="getWeather" />
                    </span>
                </q-card-section>
                <q-separator dark></q-separator>
                <div class="desk" v-if="weather">
                    <h4 class="jdl j1"><span class="subju">Lokasi</span> <br>{{ weather.name }}</h4>
                    <h4 class="jdl j1"><span class="subju">Temperature</span> <br>{{ weather.main.temp }}°C</h4>
                    <h4 class="jdl j1"><span class="subju">Description</span> <br>{{ weather.weather[0].description }}
                    </h4>
                </div>
            </q-card>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';

const city = ref('');
const weather = ref(null);
const apiKey = 'd8a3a0d801ef69e7479b7fb114bc79ac';

const getWeather = async () => {
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather`, {
            params: {
                q: city.value,
                units: 'metric',
                appid: apiKey
            }
        });
        weather.value = response.data;
    } catch (error) {
        console.error(error);
        alert('City not found!');
    }
};
</script>

<style scoped>
.subju{
    background-color: aqua;
    padding: 0 10px;
    border-radius: 100px;
    color: black;
}
.desk {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 25px;
}
.jdl{
    font-family: "Bebas Neue", sans-serif;
        font-weight: 400;
        font-style: normal;
        text-align: center;
        font-size: 40px;
        margin: 25px 0 0;

}
.j1{
    font-size: 30px;

}
.container {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

span.sec1 {
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
}

.inputf {
    width: 85%;
    background-color: aliceblue;
    font-size: 20px;
    border-radius: 100px;font-family: "Exo 2", sans-serif;
    font-optical-sizing: auto;
    font-style: normal;
}

.my-card {

    width: 30vw;
    border-radius: 20px;
    background-color: rgba(255, 255, 255, 0.2);
}
</style>
