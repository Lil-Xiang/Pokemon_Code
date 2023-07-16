<script setup></script>

<template>
  <div class="loadingBg">
    <div class="ball1"></div>
    <div class="ball2"></div>
    <div class="ball3"></div>
  </div>
</template>

<style scoped lang="scss">
.loadingBg {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  margin: 0 auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  background-color: var(--black);
}

.ball1 {
  animation: jump1 ease-in-out 1s infinite;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: var(--white); 
}
.ball2 {
  animation: jump2 ease-in-out 1.15s infinite;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin: 0 5px 0 5px;
  background-color: var(--navyBlue);
}
.ball3 {
  animation: jump3 ease-in-out 1.25s infinite;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: var(--orange);
}
@keyframes jump1 {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0px);
  }
}
@keyframes jump2 {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0px);
  }
}
@keyframes jump3 {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0px);
  }
}
</style>
