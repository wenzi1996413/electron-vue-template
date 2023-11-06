<template>
    <div class="container">
        <n-message-provider>
            <div class="left" @click="govideo('left')"></div>
            <div class="right" @click="govideo('right')"></div>
        </n-message-provider>

    </div>
</template>

<script setup lang="ts">
import { createDiscreteApi } from 'naive-ui'
import { useRouter } from 'vue-router'
const router = useRouter();
const { message } = createDiscreteApi(['message']);
const govideo = (type: string) => {
    message.warning(type);
    console.log(router)
    if (type == 'left') {
        router.push('/videoPlay')
    } else {
        router.push('/drawSign')
    }

}   
</script>


<style scoped lang="less">
.container {
    width: 100vw;
    height: 100vh;
    background-image: url("/图片1.png");

    div {
        width: 24vw;
        height: 33vh;

    }

    ;

    .left {
        position: absolute;
        left: 16vw;
        top: 34vh;
    }

    .right {
        position: absolute;
        right: 16vw;
        top: 34vh;
    }
}
</style>