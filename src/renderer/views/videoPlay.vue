<template>
    <div class="container">
        <div>
            <vue3VideoPlay v-bind="options"
                poster="https://pic1.zhimg.com/80/v2-2f4faaf96423758211cfb77fa20eaa70_720w.webp" />
            <i class="iconfont icon-close" @click="back"></i>
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();
const options = reactive({
    width: '800px', //播放器高度
    height: '450px', //播放器高度
    color: "#409eff", //主题色
    title: '', //视频名称
    src: "https://media.w3.org/2010/05/sintel/trailer.mp4", //视频源
    muted: false, //静音
    webFullScreen: true,
    speedRate: ["0.75", "1.0", "1.25", "1.5", "2.0"], //播放倍速
    autoPlay: false, //自动播放
    loop: false, //循环播放
    mirror: false, //镜像画面
    ligthOff: false,  //关灯模式
    volume: 0.6, //默认音量大小
    control: false, //是否显示控制器
})
const back = () => {
    router.go(-1)
}
</script>

<style scoped lang="less">
.container {
    width: 100vw;
    height: 100vh;

    i {
        font-size: 80px;
        color: white;
        position: absolute;
        z-index: 9999999;
    }

    p {
        font-size: 30px;
        font-weight: bold;
        text-align: center;
    }
}
</style>