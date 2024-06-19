<template>
  <div class="allhome">
    <ul class="navb">
      <li>
        <router-link to="/" class="menu"><span>HOME</span></router-link>
      </li>
      <li>
        <router-link to="/tugas1" class="menu"><span>TUGAS KE 1</span></router-link>
      </li>
      <li>
        <router-link to="/tugas2" class="menu"><span>TUGAS KE 2</span></router-link>
      </li>
      <li>
        <router-link to="/tugas3" class="menu"><span>TUGAS KE 3</span></router-link>
      </li>
      <li>
        <router-link to="/tugas4" class="menu"><span>TUGAS KE 4</span></router-link>
      </li>
      <li>
        <router-link to="/tugas5" class="menu"><span>TUGAS KE 5</span></router-link>
      </li>
      <li>
        <router-link to="/tugas6" class="menu"><span>TUGAS KE 6</span></router-link>
      </li>
      <li>
        <router-link to="/tugas7" class="menu"><span>TUGAS KE 7</span></router-link>
      </li>
    </ul>
    <div class="tampilan">
      <video autoplay loop muted>
        <source src="./assets/BGBG.mp4">
      </video>
      <router-view />
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style>
video {
  position: absolute;
  height: 100%;
  top: 0;
  right: 0px;
  z-index: -5;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.allhome {
  display: flex;
  height: 100vh;
}

.navb {
  height: 100%;
  width: 15%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: black;
}

.navb>ul {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  list-style-type: none;
  padding: 0;
}

.navb>ul>li {
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.tampilan::before {
  content: '';
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: -4;
}

.tampilan {
  background-repeat: no-repeat;
  width: 85%;
  height: 100%;
  position: relative;
  overflow: hidden;
}

.menu {
  color: purple;
  text-transform: uppercase;
  text-decoration: none;
  border: 2px solid purple;
  padding: 10px 20px;
  font-size: 17px;
  font-weight: bold;
  background: transparent;
  position: relative;
  transition: all 1s;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

span {
  position: relative;
  z-index: 2;
}

.menu:hover {
  color: black;
}

.menu::before {
  content: '';
  position: absolute;
  height: 100%;
  width: 0%;
  top: 0;
  left: -40px;
  transform: skewX(45deg);
  background-color: aliceblue;
  z-index: 1;
  transition: all 1s;
}

.menu:hover::before {
  width: 160%;
}
</style>
