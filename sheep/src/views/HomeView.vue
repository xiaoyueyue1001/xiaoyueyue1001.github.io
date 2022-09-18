<template>
  <div class="game">
    <div class="bg" :style="{backgroundImage:`url('${bg}')`}"></div>
    <div class="wrap">
      <div class="canvas">
        <div
          class="item"
          :class="{disabled:!item.isTop}"
          v-for="(item,index) in data.list"
          :key="item.id"
          :style="{
        width:`${data.cardSize * len}rem`,
        height:`${data.cardSize * len}rem`,
        left:`${item.x * len}rem`,
        top:`${item.y * len}rem`,
        backgroundImage:`url('${item.type.imgSrc}')`,
        zIndex:index+1
      }"
          @click="clickHandle(item)"
        ></div>
      </div>
      <div class="list">
        <div
          class="item"
          v-for="(item,index) in data.cacheList"
          :key="item.id"
          :style="{
        backgroundImage:`url('${item.type.imgSrc}')`,
        left:`${index}rem`
      }"
        ></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref, getCurrentInstance } from "vue";
import Game, { cardType } from "@/plugins/game";
type dataType = {
  list: cardType[];
  cacheList: cardType[];
  cardSize: number;
};

let game = new Game(8, 12);
let len = ref(6 / game.gameMap.width);
let data: dataType = reactive({
  list: JSON.parse(JSON.stringify(game.list)),
  cacheList: game.cacheList,
  cardSize: game.cardSize
});
const render = () => {
  data.list = JSON.parse(JSON.stringify(game.list));
  data.cacheList = JSON.parse(JSON.stringify(game.cacheList));
  setTimeout(() => {
    if (data.list.length === 0) {
      if (confirm("你赢了...")) {
        window.location.reload();
      }
    }
    if (data.cacheList.length >= 7) {
      if (confirm("你失败了，请重新开始...")) {
        window.location.reload();
      }
    }
  }, 20);
};
const renderCacheList = () => {
  let map = new Map();
  data.cacheList.forEach(item => {
    if (map.get(item.type)) {
      map.set(item.type, map.get(item.type) + 1);
    } else {
      map.set(item.type, 1);
    }
  });

  for (let item of map) {
    if (item[1] >= 3) {
      let id = item[0].id;
      data.cacheList = data.cacheList.filter(iitem => iitem.type.id !== id);
    }
  }
};

const clickHandle = (item: cardType) => {
  if (item.isTop) {
    game.removeItem(item);
    render();
  }
};

let bglist = [
  require("@/assets/bg/bg1.jpg"),
  require("@/assets/bg/bg2.jpg"),
  require("@/assets/bg/bg3.jpg"),
  require("@/assets/bg/bg4.jpg"),
  require("@/assets/bg/bg5.jpg")
];

let bg = bglist[Math.floor(Math.random() * 5)];
</script>

<style lang="scss" scoped>
.game {
  height: 100%;
  width: 100%;
  position: relative;
  > .bg {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    filter: blur(3px);
  }
  > .wrap {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    > .canvas {
      margin: 0 auto;
      width: 6rem;
      height: 9rem;
      position: relative;
      > .item {
        position: absolute;
        background-size: 100% 100%;
        transform-origin: 50% 50%;
        transform: scale(0.9);
        border-radius: 0.1rem;
        overflow: hidden;
        &.disabled {
          &::before {
            content: "";
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            background-color: rgba(255, 255, 255, 0.4);
          }
        }
      }
    }
    > .list {
      margin: 0.5rem auto;
      width: 7rem;
      height: 1rem;
      display: flex;
      background-color: #21304b;
      position: relative;
      > .item {
        position: absolute;
        top: 0;
        transition: all 0.5s;
        width: 1rem;
        height: 1rem;
        background-size: 100% 100%;
      }
    }
  }
}
</style>

<style>
/* 下面我们会解释这些 class 是做什么的 */
.v-enter-active,
.v-leave-active {
  transition: all 2s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
