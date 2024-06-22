<script setup lang="ts"></script>
<template>
  <div class="wrapper">
    <div class="textContainer">
      <span class="mainText">Hey!</span>
      <span class="subText1">You seem to be a lil'<br />too early for the party!</span>
      <span class="subText2">I'm still building this thing!</span>
    </div>
    <div class="imgContainer">
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
    </div>
  </div>
</template>
<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400&display=swap');
html,
body, #app {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  background-color: #202020;
  font-family: 'Montserrat', sans-serif;
  color: white;
  overflow: hidden;
}
.wrapper {
  display: flex;
  height: 100%;
}
.textContainer {
  display: flex;
  flex-direction: column;
  padding: 8rem;
  height: calc(100% - 16rem);
}
.mainText {
  font-size: 6rem;
}
.subText1 {
  font-size: 3rem;
  font-weight: 200;
  margin-top: 2rem;
}
.subText2 {
  margin-top: auto;
  font-weight: 200;
  font-size: 1.5rem;
}
.imgContainer {
  position: relative;
  flex-grow: 1;
}
.box {
  position: absolute;
  bottom: -100%;
  background-color: #ffffffaa;
}
.box:nth-child(1) {
  right: 10%;
  width: 100px;
  height: 100px;
  border-radius: 12px;
  animation: boxFloat 20s ease-out infinite;
}
.box:nth-child(2) {
  right: 40%;
  width: 200px;
  height: 200px;
  border-radius: 16px;
  animation: boxFloat 40s 6s ease-out infinite;
}
.box:nth-child(3) {
  right: 20%;
  width: 50px;
  height: 50px;
  border-radius: 8px;
  animation: boxFloat 15s 9s ease-out infinite;
}
.box:nth-child(4) {
  right: 60%;
  width: 100px;
  height: 100px;
  border-radius: 12px;
  animation: boxFloat 25s 3s ease-out infinite;
}
.box:nth-child(5) {
  right: 30%;
  width: 150px;
  height: 150px;
  border-radius: 15px;
  animation: boxFloat 28s 12s ease-out infinite;
}
@keyframes boxFloat {
  from {
    bottom: -10%;
    transform: rotate(0deg);
  }
  to {
    bottom: 110%;
    transform: rotate(360deg);
  }
}
</style>
