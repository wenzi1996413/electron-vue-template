<template>
    <div class="container">
        <div class="left_container">
            <div class="chg_btn">
                <div @click="actiIndex = 0" :class="actiIndex == 0 ? 'active' : ''">笔</div>
                <div @click="actiIndex = 1" :class="actiIndex == 1 ? 'active' : ''">墨</div>
            </div>
            <div class="edit_btn">
                <div @click="undo">
                    <i class="iconfont icon-chehui"></i>
                    <p>撤回</p>
                </div>
                <div @click="clear"><i class="iconfont icon-shanchu"></i>
                    <p>删除</p>
                </div>
            </div>

        </div>
        <div class="mid_container">
            <div class="float_btn" v-show="actiIndex == 0">
                <div @click="changeWidth(0)">细</div>
                <div @click="changeWidth(1)">粗</div>
                <div @click="changeWidth(2)">毛笔粗</div>
            </div>
            <div class="float_btn" v-show="actiIndex == 1">
                <div @click="changeColor(0)">红色</div>
                <div @click="changeColor(1)">蓝色</div>
                <div @click="changeColor(2)">橘色</div>
                <div @click="changeColor(3)">黑色</div>
            </div>
            <canvas ref="canvas" id="canvas" />
        </div>
        <div class="right_container"></div>

    </div>
</template>

<script lang="ts" setup>
import { ref, reactive, onMounted } from 'vue'
import SmoothSignature from "smooth-signature";
const actiIndex = ref(0)
let signature: any = null;
const colorArr = ['#c21f30', '#158cb7', '#ffa510', '#363533']  //颜色数组
const fontWidthArr = [{ minWidth: 2, maxWidth: 6 }, { minWidth: 6, maxWidth: 10 }, { minWidth: 14, maxWidth: 20, openSmooth: true }]
onMounted(() => {
    const canvas = document.querySelector('#canvas');
    signature = new SmoothSignature(canvas, {
        width: 0.7 * window.innerWidth,
        height: 0.8 * window.innerHeight,
        scale: 2,
        minWidth: 4,
        openSmooth: true,
        maxWidth: 10,
        color: '#c21f30',
        bgColor: '#f2d988'
    });
})

const clear = () => {
    signature.clear()
}
const undo = () => {
    signature.undo()
}
const changeColor = (index: number) => {
    signature.color = colorArr[index]
}
const changeWidth = (index: number) => {
    signature.minWidth = fontWidthArr[index].minWidth
    signature.maxWidth = fontWidthArr[index].maxWidth
    if (fontWidthArr[index].openSmooth) {
        signature.openSmooth = true
    } else {
        signature.openSmooth = false
    }
}
</script>

<style  lang="less" scoped>
.container {
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: flex-start;

    .left_container {
        box-sizing: border-box;
        width: 20%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .chg_btn {
            padding-top: 70px;

            div {
                border: 1px solid #79644f;
                height: 160px;
                width: 160px;
                margin-left: 25%;
                border-radius: 50%;
                line-height: 160px;
                text-align: center;
                margin-bottom: 40px;
                font-size: 40px;
                color: #79644f;
            }

            .active {
                background-color: #79644f;
                color: #f5e9db;
            }

        }

        .edit_btn {
            div {
                position: relative;
                background-color: #c9b292;
                height: 100px;
                width: 100px;
                margin-left: 30%;
                border-radius: 50%;

                text-align: center;
                margin-bottom: 20px;
                font-size: 20px;
                color: #79644f;

                i {
                    position: absolute;
                    font-size: 40px;
                    left: 26px;
                    top: 16px;
                    z-index: 100;
                    width: 50px;
                    height: 50px;
                }

                p {
                    padding-top: 60px;
                }
            }
        }
    }

    .mid_container {
        width: 60%;
        position: relative;

        .float_btn {
            position: absolute;

            div {
                width: 100px;
                border-radius: 50%;
                margin-bottom: 10px;
                height: 100px;
                line-height: 100px;
                text-align: center;
                border: 1px solid #c21f30;
            }
        }
    }
}
</style>