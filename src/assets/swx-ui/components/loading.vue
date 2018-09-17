<template>
    <div :class='type' class="swx-loading">
        <div class="loading" v-if="type==='loading-square-1'">
            <div class="loading-center">
                <div class="loading-center-absolute">
                    <div class="object"></div>
                </div>
            </div>

        </div>
        <div class="loading" v-else-if="type==='loading-square-2'">
            <div class="loading-center">
                <div class="loading-center-absolute">
                    <div class="object object_one" ></div>
                    <div class="object object_two" ></div>
                    <div class="object object_three" ></div>
                    <div class="object object_four" ></div>
                    <div class="object object_five" ></div>
                    <div class="object object_six" ></div>
                    <div class="object object_seven" ></div>
                    <div class="object object_eight" ></div>
                    <div class="object object_big" ></div>
                </div>
            </div>
        </div>
        <div class="loading" v-else-if="type==='loading-square-3'">
            <div class="loading-center">
                <div class="loading-center-absolute">
                    <div  class="object first_object"></div>
                    <div  class="object second_object"></div>
                    <div  class="object third_object"></div>
                </div>
            </div>

        </div>
        <div class="loading" v-else-if="type==='loading-square-4'">
            <div class="loading-center">
                <div class="loading-center-absolute">
                    <div class="object first_object" ></div>
                    <div class="object second_object" ></div>
                    <div class="object third_object" ></div>
                    <div class="object forth_object" ></div>
                </div>
            </div>

        </div>
        <div class="loading" v-else-if="type==='loading-square-5'">
            <div class="loading-center">
                <div class="loading-center-absolute">
                    <div class="object object_one"></div>
                    <div class="object object_two"></div>
                    <div class="object object_three"></div>
                    <div class="object object_four"></div>
                    <div class="object object_five"></div>
                    <div class="object object_six"></div>
                    <div class="object object_seven"></div>
                    <div class="object object_eight"></div>
                    <div class="object object_nine"></div>
                </div>
            </div>

        </div>
        <div class="loading" v-else-if="type==='loading-square-6'">
            <div class="loading-center">
                <div class="loading-center-absolute">
                    <div class="object object_one"></div>
                    <div class="object object_two"></div>
                    <div class="object object_three"></div>
                    <div class="object object_four"></div>
                    <div class="object object_five"></div>
                    <div class="object object_six"></div>
                </div>
            </div>

        </div>
        <div class="loading" v-else-if="type==='loading-square-7'">
            <div class="loading-center">
                <div class="loading-center-absolute">
                    <div class="object object_one"></div>
                    <div class="object object_two"></div>
                    <div class="object object_three"></div>
                    <div class="object object_four"></div>
                </div>
            </div>

        </div>
        <div class="loading" v-else-if="type==='loading-square-8'">
            <div class="loading-center">
                <div class="loading-center-absolute">
                    <div class="object object_one"></div>
                    <div class="object object_two"></div>
                    <div class="object object_three"></div>
                    <div class="object object_four"></div>
                </div>
            </div>

        </div>
        <div class="loading" v-else-if="type==='loading-square-9'">
            <div class="loading-center">
                <div class="loading-center-absolute">
                    <div class="object object_one"></div>
                    <div class="object object_two"></div>
                    <div class="object object_three"></div>
                    <div class="object object_four"></div>
                    <div class="object object_big"></div>
                </div>
            </div>

        </div>
        <div class="loading" v-else-if="type==='loading-square-10'">
            <div class="loading-center">
                <div class="loading-center-absolute-one">
                    <div class="object-one"></div>
                    <div class="object-one"></div>
                    <div class="object-one"></div>
                    <div class="object-one"></div>
                    <div class="object-one"></div>
                    <div class="object-one"></div>
                </div>
                <div class="loading-center-absolute-two">
                    <div class="object-two"></div>
                    <div class="object-two"></div>
                    <div class="object-two"></div>
                    <div class="object-two"></div>
                    <div class="object-two"></div>
                    <div class="object-two"></div>
                </div>
            </div>

        </div>
    </div>
</template>
<script>
export default {
  name: "swx-loading",
  props: { type: { type: String, default: "loading-square-2" } }
};
</script>
<style lang="less">
.swx-loading {
  width: 300px;
  height: 300px;
}
.loading-square-1 {
  .loading {
    background-color: #bd4932;
    height: 100%;
    width: 100%;
  }
  .loading-center {
    position: relative;
    width: 100%;
    height: 100%;
  }
  .loading-center-absolute {
    position: absolute;
    left: 50%;
    top: 50%;
    height: 200px;
    width: 200px;
    margin-top: -100px;
    margin-left: -100px;
  }
  .object {
    width: 80px;
    height: 80px;
    background-color: #fff;
    -webkit-animation: animate1 1s infinite ease-in-out;
    animation: animate1 1s infinite ease-in-out;
    margin-right: auto;
    margin-left: auto;
    margin-top: 60px;
  }
  @-webkit-keyframes animate1 {
    0% {
      -webkit-transform: perspective(160px);
    }
    50% {
      -webkit-transform: perspective(160px) rotateY(-180deg);
    }
    100% {
      -webkit-transform: perspective(160px) rotateY(-180deg) rotateX(-180deg);
    }
  }

  @keyframes animate {
    0% {
      transform: perspective(160px) rotateX(0deg) rotateY(0deg);
      -webkit-transform: perspective(160px) rotateX(0deg) rotateY(0deg);
    }
    50% {
      transform: perspective(160px) rotateX(-180deg) rotateY(0deg);
      -webkit-transform: perspective(160px) rotateX(-180deg) rotateY(0deg);
    }
    100% {
      transform: perspective(160px) rotateX(-180deg) rotateY(-180deg);
      -webkit-transform: perspective(160px) rotateX(-180deg) rotateY(-180deg);
    }
  }
}
.loading-square-2 {
  .loading {
    position: relative;
    background-color: #db9e36;
    height: 100%;
    width: 100%;
    /*position: fixed;*/
    /*height: 300px;*/
    /*width: 300px;*/
    z-index: 1;
    /*margin-top: 0px;*/
    /*top: 0px;*/
  }
  .loading-center {
    position: relative;
    width: 100%;
    height: 100%;
  }
  .loading-center-absolute {
    position: absolute;
    left: 50%;
    top: 50%;
    height: 150px;
    width: 150px;
    margin-top: -75px;
    margin-left: -75px;
    -ms-transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
  }
  .object {
    width: 20px;
    height: 20px;
    background-color: #fff;
    position: absolute;
    left: 65px;
    top: 65px;
  }
  .object:nth-child(2n + 0) {
    margin-right: 0px;
  }
  .object_one {
    -webkit-animation: object_one2 2s infinite;
    animation: object_one2 2s infinite;
    -webkit-animation-delay: 0.2s;
    animation-delay: 0.2s;
  }
  .object_two {
    -webkit-animation: object_two2 2s infinite;
    animation: object_two2 2s infinite;
    -webkit-animation-delay: 0.3s;
    animation-delay: 0.3s;
  }
  .object_three {
    -webkit-animation: object_three2 2s infinite;
    animation: object_three2 2s infinite;
    -webkit-animation-delay: 0.4s;
    animation-delay: 0.4s;
  }
  .object_four {
    -webkit-animation: object_four2 2s infinite;
    animation: object_four2 2s infinite;
    -webkit-animation-delay: 0.5s;
    animation-delay: 0.5s;
  }
  .object_five {
    -webkit-animation: object_five2 2s infinite;
    animation: object_five2 2s infinite;
    -webkit-animation-delay: 0.6s;
    animation-delay: 0.6s;
  }
  .object_six {
    -webkit-animation: object_six2 2s infinite;
    animation: object_six2 2s infinite;
    -webkit-animation-delay: 0.7s;
    animation-delay: 0.7s;
  }
  .object_seven {
    -webkit-animation: object_seven2 2s infinite;
    animation: object_seven2 2s infinite;
    -webkit-animation-delay: 0.8s;
    animation-delay: 0.8s;
  }
  .object_eight {
    -webkit-animation: object_eight2 2s infinite;
    animation: object_eight2 2s infinite;
    -webkit-animation-delay: 0.9s;
    animation-delay: 0.9s;
  }

  .object_big {
    position: absolute;
    width: 50px;
    height: 50px;
    left: 50px;
    top: 50px;
    -webkit-animation: object_big2 2s infinite;
    animation: object_big2 2s infinite;
    -webkit-animation-delay: 0.5s;
    animation-delay: 0.5s;
  }

  @-webkit-keyframes object_big2 {
    50% {
      -webkit-transform: scale(0.5);
    }
  }

  @keyframes object_big2 {
    50% {
      transform: scale(0.5);
      -webkit-transform: scale(0.5);
    }
  }

  @-webkit-keyframes object_one2 {
    50% {
      -webkit-transform: translate(-65px, -65px);
    }
  }

  @keyframes object_one2 {
    50% {
      transform: translate(-65px, -65px);
      -webkit-transform: translate(-65px, -65px);
    }
  }

  @-webkit-keyframes object_two2 {
    50% {
      -webkit-transform: translate(0, -65px);
    }
  }

  @keyframes object_two2 {
    50% {
      transform: translate(0, -65px);
      -webkit-transform: translate(0, -65px);
    }
  }

  @-webkit-keyframes object_three2 {
    50% {
      -webkit-transform: translate(65px, -65px);
    }
  }

  @keyframes object_three2 {
    50% {
      transform: translate(65px, -65px);
      -webkit-transform: translate(65px, -65px);
    }
  }

  @-webkit-keyframes object_four2 {
    50% {
      -webkit-transform: translate(65px, 0);
    }
  }

  @keyframes object_four2 {
    50% {
      transform: translate(65px, 0);
      -webkit-transform: translate(65px, 0);
    }
  }

  @-webkit-keyframes object_five2 {
    50% {
      -webkit-transform: translate(65px, 65px);
    }
  }

  @keyframes object_five2 {
    50% {
      transform: translate(65px, 65px);
      -webkit-transform: translate(65px, 65px);
    }
  }

  @-webkit-keyframes object_six2 {
    50% {
      -webkit-transform: translate(0, 65px);
    }
  }

  @keyframes object_six2 {
    50% {
      transform: translate(0, 65px);
      -webkit-transform: translate(0, 65px);
    }
  }

  @-webkit-keyframes object_seven2 {
    50% {
      -webkit-transform: translate(-65px, 65px);
    }
  }

  @keyframes object_seven2 {
    50% {
      transform: translate(-65px, 65px);
      -webkit-transform: translate(-65px, 65px);
    }
  }

  @-webkit-keyframes object_eight2 {
    50% {
      -webkit-transform: translate(-65px, 0);
    }
  }

  @keyframes object_eight2 {
    50% {
      transform: translate(-65px, 0);
      -webkit-transform: translate(-65px, 0);
    }
  }
}
.loading-square-3 {
  .loading {
    background-color: #ffd34e;
    height: 100%;
    width: 100%;
  }
  .loading-center {
    width: 100%;
    height: 100%;
    position: relative;
  }
  .loading-center-absolute {
    position: absolute;
    left: 50%;
    top: 50%;
    height: 200px;
    width: 200px;
    margin-top: -100px;
    margin-left: -100px;
  }
  .object {
    width: 50px;
    height: 50px;
    background-color: rgba(255, 255, 255, 0);
    margin-right: auto;
    margin-left: auto;
    border: 4px solid #fff;
    left: 73px;
    top: 73px;
    position: absolute;
  }

  .first_object {
    -webkit-animation: first_object_animate3 1s infinite ease-in-out;
    animation: first_object_animate3 1s infinite ease-in-out;
  }

  .second_object {
    -webkit-animation: second_object3 1s forwards,
      second_object_animate3 1s infinite ease-in-out;
    animation: second_object3 1s forwards,
      second_object_animate3 1s infinite ease-in-out;
  }
  .third_object {
    -webkit-animation: third_object3 1s forwards,
      third_object_animate3 1s infinite ease-in-out;
    animation: third_object3 1s forwards,
      third_object_animate3 1s infinite ease-in-out;
  }
  @-webkit-keyframes second_object3 {
    100% {
      width: 100px;
      height: 100px;
      left: 48px;
      top: 48px;
    }
  }
  @keyframes second_object3 {
    100% {
      width: 100px;
      height: 100px;
      left: 48px;
      top: 48px;
    }
  }
  @-webkit-keyframes third_object3 {
    100% {
      width: 150px;
      height: 150px;
      left: 23px;
      top: 23px;
    }
  }
  @keyframes third_object3 {
    100% {
      width: 150px;
      height: 150px;
      left: 23px;
      top: 23px;
    }
  }
  @-webkit-keyframes first_object_animate3 {
    0% {
      -webkit-transform: perspective(100px);
    }
    50% {
      -webkit-transform: perspective(100px) rotateY(-180deg);
    }
    100% {
      -webkit-transform: perspective(100px) rotateY(-180deg) rotateX(-180deg);
    }
  }
  @keyframes first_object_animate3 {
    0% {
      transform: perspective(100px) rotateX(0deg) rotateY(0deg);
      -webkit-transform: perspective(100px) rotateX(0deg) rotateY(0deg);
    }
    50% {
      transform: perspective(100px) rotateX(-180deg) rotateY(0deg);
      -webkit-transform: perspective(100px) rotateX(-180deg) rotateY(0deg);
    }
    100% {
      transform: perspective(100px) rotateX(-180deg) rotateY(-180deg);
      -webkit-transform: perspective(100px) rotateX(-180deg) rotateY(-180deg);
    }
  }
  @-webkit-keyframes second_object_animate3 {
    0% {
      -webkit-transform: perspective(200px);
    }
    50% {
      -webkit-transform: perspective(200px) rotateY(180deg);
    }
    100% {
      -webkit-transform: perspective(200px) rotateY(180deg) rotateX(180deg);
    }
  }
  @keyframes second_object_animate3 {
    0% {
      transform: perspective(200px) rotateX(0deg) rotateY(0deg);
      -webkit-transform: perspective(200px) rotateX(0deg) rotateY(0deg);
    }
    50% {
      transform: perspective(200px) rotateX(180deg) rotateY(0deg);
      -webkit-transform: perspective(200px) rotateX(180deg) rotateY(0deg);
    }
    100% {
      transform: perspective(200px) rotateX(180deg) rotateY(180deg);
      -webkit-transform: perspective(200px) rotateX(180deg) rotateY(180deg);
    }
  }
  @-webkit-keyframes third_object_animate3 {
    0% {
      -webkit-transform: perspective(300px);
    }
    50% {
      -webkit-transform: perspective(300px) rotateY(-180deg);
    }
    100% {
      -webkit-transform: perspective(300px) rotateY(-180deg) rotateX(-180deg);
    }
  }
  @keyframes third_object_animate3 {
    0% {
      transform: perspective(300px) rotateX(0deg) rotateY(0deg);
      -webkit-transform: perspective(300px) rotateX(0deg) rotateY(0deg);
    }
    50% {
      transform: perspective(300px) rotateX(-180deg) rotateY(0deg);
      -webkit-transform: perspective(300px) rotateX(-180deg) rotateY(0deg);
    }
    100% {
      transform: perspective(300px) rotateX(-180deg) rotateY(-180deg);
      -webkit-transform: perspective(300px) rotateX(-180deg) rotateY(-180deg);
    }
  }
}
.loading-square-4 {
  .loading {
    background-color: rgba(255, 255, 255, 1);
    height: 100%;
    width: 100%;
  }
  .loading-center {
    position: relative;
    width: 100%;
    height: 100%;
  }
  .loading-center-absolute {
    position: absolute;
    left: 50%;
    top: 50%;
    height: 100px;
    width: 100px;
    margin-top: -50px;
    margin-left: -50px;
  }
  .object {
    width: 25px;
    height: 25px;
    background-color: rgba(255, 255, 255, 0);
    margin-right: auto;
    margin-left: auto;
    border: 4px solid rgba(239, 74, 74, 1);
    left: 37px;
    top: 37px;
    position: absolute;
  }

  .first_object {
    -webkit-animation: first_object4 1s infinite;
    animation: first_object4 1s infinite;
    -webkit-animation-delay: 0.5s;
    animation-delay: 0.5s;
  }
  .second_object {
    -webkit-animation: second_object4 1s infinite;
    animation: second_object4 1s infinite;
  }
  .third_object {
    -webkit-animation: third_object4 1s infinite;
    animation: third_object4 1s infinite;
    -webkit-animation-delay: 0.5s;
    animation-delay: 0.5s;
  }
  .forth_object {
    -webkit-animation: forth_object4 1s infinite;
    animation: forth_object4 1s infinite;
  }

  @-webkit-keyframes first_object4 {
    0% {
      -ms-transform: translate(1, 1) scale(1, 1);
      -webkit-transform: translate(1, 1) scale(1, 1);
      transform: translate(1, 1) scale(1, 1);
    }
    50% {
      -ms-transform: translate(150%, 150%) scale(2, 2);
      -webkit-transform: translate(150%, 150%) scale(2, 2);
      transform: translate(150%, 150%) scale(2, 2);
    }

    100% {
      -ms-transform: translate(1, 1) scale(1, 1);
      -webkit-transform: translate(1, 1) scale(1, 1);
      transform: translate(1, 1) scale(1, 1);
    }
  }
  @keyframes first_object4 {
    0% {
      -ms-transform: translate(1, 1) scale(1, 1);
      -webkit-transform: translate(1, 1) scale(1, 1);
      transform: translate(1, 1) scale(1, 1);
    }
    50% {
      -ms-transform: translate(150%, 150%) scale(2, 2);
      -webkit-transform: translate(150%, 150%) scale(2, 2);
      transform: translate(150%, 150%) scale(2, 2);
    }

    100% {
      -ms-transform: translate(1, 1) scale(1, 1);
      -webkit-transform: translate(1, 1) scale(1, 1);
      transform: translate(1, 1) scale(1, 1);
    }
  }

  @-webkit-keyframes second_object4 {
    0% {
      -ms-transform: translate(1, 1) scale(1, 1);
      -webkit-transform: translate(1, 1) scale(1, 1);
      transform: translate(1, 1) scale(1, 1);
    }
    50% {
      -ms-transform: translate(-150%, 150%) scale(2, 2);
      -webkit-transform: translate(-150%, 150%) scale(2, 2);
      transform: translate(-150%, 150%) scale(2, 2);
    }
    100% {
      -ms-transform: translate(1, 1) scale(1, 1);
      -webkit-transform: translate(1, 1) scale(1, 1);
      transform: translate(1, 1) scale(1, 1);
    }
  }
  @keyframes second_object4 {
    0% {
      -ms-transform: translate(1, 1) scale(1, 1);
      -webkit-transform: translate(1, 1) scale(1, 1);
      transform: translate(1, 1) scale(1, 1);
    }
    50% {
      -ms-transform: translate(-150%, 150%) scale(2, 2);
      -webkit-transform: translate(-150%, 150%) scale(2, 2);
      transform: translate(-150%, 150%) scale(2, 2);
    }
    100% {
      -ms-transform: translate(1, 1) scale(1, 1);
      -webkit-transform: translate(1, 1) scale(1, 1);
      transform: translate(1, 1) scale(1, 1);
    }
  }

  @-webkit-keyframes third_object4 {
    0% {
      -ms-transform: translate(1, 1) scale(1, 1);
      -webkit-transform: translate(1, 1) scale(1, 1);
      transform: translate(1, 1) scale(1, 1);
    }
    50% {
      -ms-transform: translate(-150%, -150%) scale(2, 2);
      -webkit-transform: translate(-150%, -150%) scale(2, 2);
      transform: translate(-150%, -150%) scale(2, 2);
    }
    100% {
      -ms-transform: translate(1, 1) scale(1, 1);
      -webkit-transform: translate(1, 1) scale(1, 1);
      transform: translate(1, 1) scale(1, 1);
    }
  }
  @keyframes third_object4 {
    0% {
      -ms-transform: translate(1, 1) scale(1, 1);
      -webkit-transform: translate(1, 1) scale(1, 1);
      transform: translate(1, 1) scale(1, 1);
    }
    50% {
      -ms-transform: translate(-150%, -150%) scale(2, 2);
      -webkit-transform: translate(-150%, -150%) scale(2, 2);
      transform: translate(-150%, -150%) scale(2, 2);
    }
    100% {
      -ms-transform: translate(1, 1) scale(1, 1);
      -webkit-transform: translate(1, 1) scale(1, 1);
      transform: translate(1, 1) scale(1, 1);
    }
  }

  @-webkit-keyframes forth_object4 {
    0% {
      -ms-transform: translate(1, 1) scale(1, 1);
      -webkit-transform: translate(1, 1) scale(1, 1);
      transform: translate(1, 1) scale(1, 1);
    }
    50% {
      -ms-transform: translate(150%, -150%) scale(2, 2);
      -webkit-transform: translate(150%, -150%) scale(2, 2);
      transform: translate(150%, -150%) scale(2, 2);
    }
    100% {
      -ms-transform: translate(1, 1) scale(1, 1);
      -webkit-transform: translate(1, 1) scale(1, 1);
      transform: translate(1, 1) scale(1, 1);
    }
  }
  @keyframes forth_object4 {
    0% {
      -ms-transform: translate(1, 1) scale(1, 1);
      -webkit-transform: translate(1, 1) scale(1, 1);
      transform: translate(1, 1) scale(1, 1);
    }
    50% {
      -ms-transform: translate(150%, -150%) scale(2, 2);
      -webkit-transform: translate(150%, -150%) scale(2, 2);
      transform: translate(150%, -150%) scale(2, 2);
    }
    100% {
      -ms-transform: translate(1, 1) scale(1, 1);
      -webkit-transform: translate(1, 1) scale(1, 1);
      transform: translate(1, 1) scale(1, 1);
    }
  }
}
.loading-square-5 {
  .loading {
    background-color: #2980b9;
    height: 100%;
    width: 100%;
  }
  .loading-center {
    width: 100%;
    height: 100%;
    position: relative;
  }
  .loading-center-absolute {
    position: absolute;
    left: 50%;
    top: 50%;
    height: 118px;
    width: 118px;
    margin-top: -59px;
    margin-left: -59px;
  }

  .object {
    width: 20px;
    height: 20px;
    background-color: #fff;
    margin-right: 20px;
    float: left;
    margin-bottom: 20px;
  }
  .object:nth-child(3n + 0) {
    margin-right: 0px;
  }

  .object_one {
    -webkit-animation: animate5 1s -0.9s ease-in-out infinite;
    animation: animate5 1s -0.9s ease-in-out infinite;
  }
  .object_two {
    -webkit-animation: animate5 1s -0.8s ease-in-out infinite;
    animation: animate5 1s -0.8s ease-in-out infinite;
  }
  .object_three {
    -webkit-animation: animate5 1s -0.7s ease-in-out infinite;
    animation: animate5 1s -0.7s ease-in-out infinite;
  }
  .object_four {
    -webkit-animation: animate5 1s -0.6s ease-in-out infinite;
    animation: animate5 1s -0.6s ease-in-out infinite;
  }
  .object_five {
    -webkit-animation: animate5 1s -0.5s ease-in-out infinite;
    animation: animate5 1s -0.5s ease-in-out infinite;
  }
  .object_six {
    -webkit-animation: animate5 1s -0.4s ease-in-out infinite;
    animation: animate5 1s -0.4s ease-in-out infinite;
  }
  .object_seven {
    -webkit-animation: animate5 1s -0.3s ease-in-out infinite;
    animation: animate5 1s -0.3s ease-in-out infinite;
  }
  .object_eight {
    -webkit-animation: animate5 1s -0.2s ease-in-out infinite;
    animation: animate5 1s -0.2s ease-in-out infinite;
  }
  .object_nine {
    -webkit-animation: animate5 1s -0.1s ease-in-out infinite;
    animation: animate5 1s -0.1s ease-in-out infinite;
  }

  @-webkit-keyframes animate5 {
    50% {
      -ms-transform: scale(1.5, 1.5);
      -webkit-transform: scale(1.5, 1.5);
      transform: scale(1.5, 1.5);
    }

    100% {
      -ms-transform: scale(1, 1);
      -webkit-transform: scale(1, 1);
      transform: scale(1, 1);
    }
  }

  @keyframes animate5 {
    50% {
      -ms-transform: scale(1.5, 1.5);
      -webkit-transform: scale(1.5, 1.5);
      transform: scale(1.5, 1.5);
    }

    100% {
      -ms-transform: scale(1, 1);
      -webkit-transform: scale(1, 1);
      transform: scale(1, 1);
    }
  }
}
.loading-square-6 {
  .loading {
    background-color: #3498db;
    height: 100%;
    width: 100%;
  }
  .loading-center {
    width: 100%;
    height: 100%;
    position: relative;
  }
  .loading-center-absolute {
    position: absolute;
    left: 50%;
    top: 50%;
    height: 118px;
    width: 72px;
    margin-top: -59px;
    margin-left: -36px;
  }
  .object {
    width: 26px;
    height: 26px;
    background-color: #fff;
    margin-right: 20px;
    float: left;
    margin-bottom: 20px;
  }
  .object:nth-child(2n + 0) {
    margin-right: 0px;
  }

  .object_one {
    -webkit-animation: object_one 1s infinite;
    animation: object_one 1s infinite;
  }
  .object_two {
    -webkit-animation: object_two 1s infinite;
    animation: object_two 1s infinite;
  }
  .object_three {
    -webkit-animation: object_three 1s infinite;
    animation: object_three 1s infinite;
  }
  .object_four {
    -webkit-animation: object_four 1s infinite;
    animation: object_four 1s infinite;
  }
  .object_five {
    -webkit-animation: object_five 1s infinite;
    animation: object_five 1s infinite;
  }
  .object_six {
    -webkit-animation: object_six 1s infinite;
    animation: object_six 1s infinite;
  }

  @-webkit-keyframes object_one {
    50% {
      -ms-transform: translate(-100px, 46px) rotate(-179deg);
      -webkit-transform: translate(-100px, 46px) rotate(-179deg);
      transform: translate(-100px, 46px) rotate(-179deg);
    }

    100% {
      -ms-transform: translate(0, 0);
      -webkit-transform: translate(0, 0);
      transform: translate(0, 0);
    }
  }

  @keyframes object_one {
    50% {
      -ms-transform: translate(-100px, 46px) rotate(-179deg);
      -webkit-transform: translate(-100px, 46px) rotate(-179deg);
      transform: translate(-100px, 46px) rotate(-179deg);
    }

    100% {
      -ms-transform: translate(0, 0);
      -webkit-transform: translate(0, 0);
      transform: translate(0, 0);
    }
  }

  @-webkit-keyframes object_two {
    50% {
      -ms-transform: translate(100px, 46px) rotate(179deg);
      -webkit-transform: translate(100px, 46px) rotate(179deg);
      transform: translate(100px, 46px) rotate(179deg);
    }

    100% {
      -ms-transform: translate(0, 0);
      -webkit-transform: translate(0, 0);
      transform: translate(0, 0);
    }
  }

  @keyframes object_two {
    50% {
      -ms-transform: translate(100px, 46px) rotate(179deg);
      -webkit-transform: translate(100px, 46px) rotate(179deg);
      transform: translate(100px, 46px) rotate(179deg);
    }

    100% {
      -ms-transform: translate(0, 0);
      -webkit-transform: translate(0, 0);
      transform: translate(0, 0);
    }
  }

  @-webkit-keyframes object_three {
    50% {
      -ms-transform: translate(-100px, 0) rotate(-179deg);
      -webkit-transform: translate(-100px, 0) rotate(-179deg);
      transform: translate(-100px, 0) rotate(-179deg);
    }

    100% {
      -ms-transform: translate(0, 0);
      -webkit-transform: translate(0, 0);
      transform: translate(0, 0);
    }
  }

  @keyframes object_three {
    50% {
      -ms-transform: translate(-100px, 0) rotate(-179deg);
      -webkit-transform: translate(-100px, 0) rotate(-179deg);
      transform: translate(-100px, 0) rotate(-179deg);
    }

    100% {
      -ms-transform: translate(0, 0);
      -webkit-transform: translate(0, 0);
      transform: translate(0, 0);
    }
  }

  @-webkit-keyframes object_four {
    50% {
      -ms-transform: translate(100px, 0) rotate(179deg);
      -webkit-transform: translate(100px, 0) rotate(179deg);
      transform: translate(100px, 0) rotate(179deg);
    }

    100% {
      -ms-transform: translate(0, 0);
      -webkit-transform: translate(0, 0);
      transform: translate(0, 0);
    }
  }

  @keyframes object_four {
    50% {
      -ms-transform: translate(100px, 0) rotate(179deg);
      -webkit-transform: translate(100px, 0) rotate(179deg);
      transform: translate(100px, 0) rotate(179deg);
    }

    100% {
      -ms-transform: translate(0, 0);
      -webkit-transform: translate(0, 0);
      transform: translate(0, 0);
    }
  }

  @-webkit-keyframes object_five {
    50% {
      -ms-transform: translate(-100px, -46px) rotate(-179deg);
      -webkit-transform: translate(-100px, -46px) rotate(-179deg);
      transform: translate(-100px, -46px) rotate(-179deg);
    }

    100% {
      -ms-transform: translate(0, 0);
      -webkit-transform: translate(0, 0);
      transform: translate(0, 0);
    }
  }

  @keyframes object_five {
    50% {
      -ms-transform: translate(-100px, -46px) rotate(-179deg);
      -webkit-transform: translate(-100px, -46px) rotate(-179deg);
      transform: translate(-100px, -46px) rotate(-179deg);
    }

    100% {
      -ms-transform: translate(0, 0);
      -webkit-transform: translate(0, 0);
      transform: translate(0, 0);
    }
  }

  @-webkit-keyframes object_six {
    50% {
      -ms-transform: translate(100px, -46px) rotate(179deg);
      -webkit-transform: translate(100px, -46px) rotate(179deg);
      transform: translate(100px, -46px) rotate(179deg);
    }

    100% {
      -ms-transform: translate(0, 0);
      -webkit-transform: translate(0, 0);
      transform: translate(0, 0);
    }
  }

  @keyframes object_six {
    50% {
      -ms-transform: translate(100px, -46px) rotate(179deg);
      -webkit-transform: translate(100px, -46px) rotate(179deg);
      transform: translate(100px, -46px) rotate(179deg);
    }

    100% {
      -ms-transform: translate(0, 0);
      -webkit-transform: translate(0, 0);
      transform: translate(0, 0);
    }
  }
}
.loading-square-7 {
  .loading {
    background-color: #e74c3c;
    height: 100%;
    width: 100%;
  }
  .loading-center {
    width: 100%;
    height: 100%;
    position: relative;
  }
  .loading-center-absolute {
    position: absolute;
    left: 50%;
    top: 50%;
    height: 100px;
    width: 100px;
    margin-top: -50px;
    margin-left: -50px;
  }
  .object {
    width: 25px;
    height: 25px;
    background-color: #fff;
    margin-right: 50px;
    float: left;
    margin-bottom: 50px;
  }
  .object:nth-child(2n + 0) {
    margin-right: 0px;
  }

  .object_one {
    -webkit-animation: object_one7 2s infinite;
    animation: object_one7 2s infinite;
  }
  .object_two {
    -webkit-animation: object_two7 2s infinite;
    animation: object_two7 2s infinite;
  }
  .object_three {
    -webkit-animation: object_three7 2s infinite;
    animation: object_three7 2s infinite;
  }
  .object_four {
    -webkit-animation: object_four7 2s infinite;
    animation: object_four7 2s infinite;
  }

  @-webkit-keyframes object_one7 {
    25% {
      -webkit-transform: translate(75px, 0) rotate(-90deg) scale(0.5);
    }
    50% {
      -webkit-transform: translate(75px, 75px) rotate(-180deg);
    }
    75% {
      -webkit-transform: translate(0, 75px) rotate(-270deg) scale(0.5);
    }
    100% {
      -webkit-transform: rotate(-360deg);
    }
  }

  @keyframes object_one7 {
    25% {
      transform: translate(75px, 0) rotate(-90deg) scale(0.5);
      -webkit-transform: translate(75px, 0) rotate(-90deg) scale(0.5);
    }
    50% {
      transform: translate(75px, 75px) rotate(-180deg);
      -webkit-transform: translate(75px, 75px) rotate(-180deg);
    }
    75% {
      transform: translate(0, 75px) rotate(-270deg) scale(0.5);
      -webkit-transform: translate(0, 75px) rotate(-270deg) scale(0.5);
    }
    100% {
      transform: rotate(-360deg);
      -webkit-transform: rotate(-360deg);
    }
  }

  @-webkit-keyframes object_two7 {
    25% {
      -webkit-transform: translate(0, 75px) rotate(-90deg) scale(0.5);
    }
    50% {
      -webkit-transform: translate(-75px, 75px) rotate(-180deg);
    }
    75% {
      -webkit-transform: translate(-75px, 0) rotate(-270deg) scale(0.5);
    }
    100% {
      -webkit-transform: rotate(-360deg);
    }
  }

  @keyframes object_two7 {
    25% {
      transform: translate(0, 75px) rotate(-90deg) scale(0.5);
      -webkit-transform: translate(0, 75px) rotate(-90deg) scale(0.5);
    }
    50% {
      transform: translate(-75px, 75px) rotate(-180deg);
      -webkit-transform: translate(-75px, 75px) rotate(-180deg);
    }
    75% {
      transform: translate(-75px, 0) rotate(-270deg) scale(0.5);
      -webkit-transform: translate(-75px, 0) rotate(-270deg) scale(0.5);
    }
    100% {
      transform: rotate(-360deg);
      -webkit-transform: rotate(-360deg);
    }
  }

  @-webkit-keyframes object_three7 {
    25% {
      -webkit-transform: translate(0, -75px) rotate(-90deg) scale(0.5);
    }
    50% {
      -webkit-transform: translate(75px, -75px) rotate(-180deg);
    }
    75% {
      -webkit-transform: translate(75px, 0) rotate(-270deg) scale(0.5);
    }
    100% {
      -webkit-transform: rotate(-360deg);
    }
  }

  @keyframes object_three7 {
    25% {
      transform: translate(0, -75px) rotate(-90deg) scale(0.5);
      -webkit-transform: translate(0, -75px) rotate(-90deg) scale(0.5);
    }
    50% {
      transform: translate(75px, -75px) rotate(-180deg);
      -webkit-transform: translate(75px, -75px) rotate(-180deg);
    }
    75% {
      transform: translate(75px, 0) rotate(-270deg) scale(0.5);
      -webkit-transform: translate(75px, 0) rotate(-270deg) scale(0.5);
    }
    100% {
      transform: rotate(-360deg);
      -webkit-transform: rotate(-360deg);
    }
  }

  @-webkit-keyframes object_four7 {
    25% {
      -webkit-transform: translate(-75px, 0) rotate(-90deg) scale(0.5);
    }
    50% {
      -webkit-transform: translate(-75px, -75px) rotate(-180deg);
    }
    75% {
      -webkit-transform: translate(0, -75px) rotate(-270deg) scale(0.5);
    }
    100% {
      -webkit-transform: rotate(-360deg);
    }
  }

  @keyframes object_four7 {
    25% {
      transform: translate(-75px, 0) rotate(-90deg) scale(0.5);
      -webkit-transform: translate(-75px, 0) rotate(-90deg) scale(0.5);
    }
    50% {
      transform: translate(-75px, -75px) rotate(-180deg);
      -webkit-transform: translate(-75px, -75px) rotate(-180deg);
    }
    75% {
      transform: translate(0, -75px) rotate(-270deg) scale(0.5);
      -webkit-transform: translate(0, -75px) rotate(-270deg) scale(0.5);
    }
    100% {
      transform: rotate(-360deg);
      -webkit-transform: rotate(-360deg);
    }
  }
}
.loading-square-8 {
  .loading {
    background-color: #2c3e50;
    height: 100%;
    width: 100%;
  }
  .loading-center {
    width: 100%;
    height: 100%;
    position: relative;
  }
  .loading-center-absolute {
    position: absolute;
    left: 50%;
    top: 50%;
    height: 50px;
    width: 50px;
    margin-top: -25px;
    margin-left: -25px;
    -ms-transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
    -webkit-animation: loading-center-absolute8 1.5s infinite;
    animation: loading-center-absolute8 1.5s infinite;
  }
  .object {
    width: 25px;
    height: 25px;
    background-color: #fff;
    float: left;
  }

  .object_one {
    -webkit-animation: object_one8 1.5s infinite;
    animation: object_one8 1.5s infinite;
  }
  .object_two {
    -webkit-animation: object_two8 1.5s infinite;
    animation: object_two8 1.5s infinite;
  }
  .object_three {
    -webkit-animation: object_three8 1.5s infinite;
    animation: object_three8 1.5s infinite;
  }
  .object_four {
    -webkit-animation: object_four8 1.5s infinite;
    animation: object_four8 1.5s infinite;
  }

  @-webkit-keyframes loading-center-absolute8 {
    100% {
      -webkit-transform: rotate(-45deg);
    }
  }

  @keyframes loading-center-absolute8 {
    100% {
      transform: rotate(-45deg);
      -webkit-transform: rotate(-45deg);
    }
  }

  @-webkit-keyframes object_one8 {
    25% {
      -webkit-transform: translate(0, -50px) rotate(-180deg);
    }
    100% {
      -webkit-transform: translate(0, 0) rotate(-180deg);
    }
  }

  @keyframes object_one8 {
    25% {
      transform: translate(0, -50px) rotate(-180deg);
      -webkit-transform: translate(0, -50px) rotate(-180deg);
    }
    100% {
      transform: translate(0, 0) rotate(-180deg);
      -webkit-transform: translate(0, 0) rotate(-180deg);
    }
  }

  @-webkit-keyframes object_two8 {
    25% {
      -webkit-transform: translate(50px, 0) rotate(-180deg);
    }
    100% {
      -webkit-transform: translate(0, 0) rotate(-180deg);
    }
  }

  @keyframes object_two8 {
    25% {
      transform: translate(50px, 0) rotate(-180deg);
      -webkit-transform: translate(50px, 0) rotate(-180deg);
    }
    100% {
      transform: translate(0, 0) rotate(-180deg);
      -webkit-transform: translate(0, 0) rotate(-180deg);
    }
  }

  @-webkit-keyframes object_three8 {
    25% {
      -webkit-transform: translate(-50px, 0) rotate(-180deg);
    }
    100% {
      -webkit-transform: translate(0, 0) rotate(-180deg);
    }
  }

  @keyframes object_three8 {
    25% {
      transform: translate(-50px, 0) rotate(-180deg);
      -webkit-transform: translate(-50px, 0) rotate(-180deg);
    }
    100% {
      transform: translate(0, 0) rotate(-180deg);
      -webkit-transform: rtranslate(0, 0) rotate(-180deg);
    }
  }

  @-webkit-keyframes object_four8 {
    25% {
      -webkit-transform: translate(0, 50px) rotate(-180deg);
    }
    100% {
      -webkit-transform: translate(0, 0) rotate(-180deg);
    }
  }

  @keyframes object_four8 {
    25% {
      transform: translate(0, 50px) rotate(-180deg);
      -webkit-transform: translate(0, 50px) rotate(-180deg);
    }
    100% {
      transform: translate(0, 0) rotate(-180deg);
      -webkit-transform: translate(0, 0) rotate(-180deg);
    }
  }
}
.loading-square-9 {
  .loading {
    background-color: #1e1e20;
    height: 100%;
    width: 100%;
  }
  .loading-center {
    width: 100%;
    height: 100%;
    position: relative;
  }
  .loading-center-absolute {
    position: absolute;
    left: 50%;
    top: 50%;
    height: 150px;
    width: 150px;
    margin-top: -75px;
    margin-left: -75px;
    -ms-transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
  }
  .object {
    width: 20px;
    height: 20px;
    background-color: #fff;
    margin-right: 110px;
    float: left;
    margin-bottom: 110px;
  }
  .object:nth-child(2n + 0) {
    margin-right: 0px;
  }

  .object_one {
    -webkit-animation: object_one9 2s infinite;
    animation: object_one9 2s infinite;
  }
  .object_two {
    -webkit-animation: object_two9 2s infinite;
    animation: object_two9 2s infinite;
  }
  .object_three {
    -webkit-animation: object_three9 2s infinite;
    animation: object_three9 2s infinite;
  }
  .object_four {
    -webkit-animation: object_four9 2s infinite;
    animation: object_four9 2s infinite;
  }
  .object_big {
    -webkit-animation: object_big9 0.5s infinite;
    animation: object_big9 0.5s infinite;
    position: absolute;
    width: 50px;
    height: 50px;
    left: 50px;
    top: 50px;
  }

  @-webkit-keyframes object_big9 {
    25% {
      -webkit-transform: scale(0.5);
    }
  }

  @keyframes object_big9 {
    25% {
      transform: scale(0.5);
      -webkit-transform: scale(0.5);
    }
  }

  @-webkit-keyframes object_one9 {
    25% {
      -webkit-transform: translate(130px, 0) rotate(-90deg);
    }
    50% {
      -webkit-transform: translate(130px, 130px) rotate(-180deg);
    }
    75% {
      -webkit-transform: translate(0, 130px) rotate(-270deg);
    }
    100% {
      -webkit-transform: rotate(-360deg);
    }
  }

  @keyframes object_one9 {
    25% {
      transform: translate(130px, 0) rotate(-90deg);
      -webkit-transform: translate(130px, 0) rotate(-90deg);
    }
    50% {
      transform: translate(130px, 130px) rotate(-180deg);
      -webkit-transform: translate(130px, 130px) rotate(-180deg);
    }
    75% {
      transform: translate(0, 130px) rotate(-270deg);
      -webkit-transform: translate(0, 130px) rotate(-270deg);
    }
    100% {
      transform: rotate(-360deg);
      -webkit-transform: rotate(-360deg);
    }
  }

  @-webkit-keyframes object_two9 {
    25% {
      -webkit-transform: translate(0, 130px) rotate(-90deg);
    }
    50% {
      -webkit-transform: translate(-130px, 130px) rotate(-180deg);
    }
    75% {
      -webkit-transform: translate(-130px, 0) rotate(-270deg);
    }
    100% {
      -webkit-transform: rotate(-360deg);
    }
  }

  @keyframes object_two9 {
    25% {
      transform: translate(0, 130px) rotate(-90deg);
      -webkit-transform: translate(0, 130px) rotate(-90deg);
    }
    50% {
      transform: translate(-130px, 130px) rotate(-180deg);
      -webkit-transform: translate(-130px, 130px) rotate(-180deg);
    }
    75% {
      transform: translate(-130px, 0) rotate(-270deg);
      -webkit-transform: translate(-130px, 0) rotate(-270deg);
    }
    100% {
      transform: rotate(-360deg);
      -webkit-transform: rotate(-360deg);
    }
  }

  @-webkit-keyframes object_three9 {
    25% {
      -webkit-transform: translate(0, -130px) rotate(-90deg);
    }
    50% {
      -webkit-transform: translate(130px, -130px) rotate(-180deg);
    }
    75% {
      -webkit-transform: translate(130px, 0) rotate(-270deg);
    }
    100% {
      -webkit-transform: rotate(-360deg);
    }
  }

  @keyframes object_three9 {
    25% {
      transform: translate(0, -130px) rotate(-90deg);
      -webkit-transform: translate(0, -130px) rotate(-90deg);
    }
    50% {
      transform: translate(130px, -130px) rotate(-180deg);
      -webkit-transform: translate(130px, -130px) rotate(-180deg);
    }
    75% {
      transform: translate(130px, 0) rotate(-270deg);
      -webkit-transform: translate(130px, 0) rotate(-270deg);
    }
    100% {
      transform: rotate(-360deg);
      -webkit-transform: rotate(-360deg);
    }
  }

  @-webkit-keyframes object_four9 {
    25% {
      -webkit-transform: translate(-130px, 0) rotate(-90deg);
    }
    50% {
      -webkit-transform: translate(-130px, -130px) rotate(-180deg);
    }
    75% {
      -webkit-transform: translate(0, -130px) rotate(-270deg);
    }
    100% {
      -webkit-transform: rotate(-360deg);
    }
  }

  @keyframes object_four9 {
    25% {
      transform: translate(-130px, 0) rotate(-90deg);
      -webkit-transform: translate(-130px, 0) rotate(-90deg);
    }
    50% {
      transform: translate(-130px, -130px) rotate(-180deg);
      -webkit-transform: translate(-130px, -130px) rotate(-180deg);
    }
    75% {
      transform: translate(0, -130px) rotate(-270deg);
      -webkit-transform: translate(0, -130px) rotate(-270deg);
    }
    100% {
      transform: rotate(-360deg);
      -webkit-transform: rotate(-360deg);
    }
  }
}
.loading-square-10 {
  .loading {
    background-color: #2a2c2b;
    height: 100%;
    width: 100%;
  }
  .loading-center {
    width: 100%;
    height: 100%;
    position: relative;
  }
  .loading-center-absolute-one {
    position: absolute;
    left: 45%;
    top: 60%;
    height: 300px;
    width: 50px;
    margin-top: -150px;
    margin-left: -25px;
  }
  .loading-center-absolute-two {
    position: absolute;
    left: 45%;
    top: 60%;
    height: 300px;
    width: 50px;
    margin-top: -150px;
    margin-left: 50px;
  }
  .object-one {
    width: 18px;
    height: 18px;
    background-color: #fff;
    float: left;
    margin-top: 15px;
    margin-right: 15px;
    -ms-transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
    -webkit-animation: object-one10 1s infinite;
    animation: object-one10 1s infinite;
  }
  .object-two {
    width: 18px;
    height: 18px;
    background-color: #fff;
    float: left;
    margin-top: 15px;
    margin-right: 15px;
    -ms-transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
    -webkit-animation: object-two10 1s infinite;
    animation: object-two10 1s infinite;
  }

  .object-one:nth-child(6) {
    -webkit-animation-delay: 0.6s;
    animation-delay: 0.6s;
  }
  .object-one:nth-child(5) {
    -webkit-animation-delay: 0.5s;
    animation-delay: 0.5s;
  }
  .object-one:nth-child(4) {
    -webkit-animation-delay: 0.4s;
    animation-delay: 0.4s;
  }
  .object-one:nth-child(3) {
    -webkit-animation-delay: 0.3s;
    animation-delay: 0.3s;
  }
  .object-one:nth-child(2) {
    -webkit-animation-delay: 0.2s;
    animation-delay: 0.2s;
  }

  .object-two:nth-child(9) {
    -webkit-animation-delay: 0.9s;
    animation-delay: 0.9s;
  }
  .object-two:nth-child(8) {
    -webkit-animation-delay: 0.8s;
    animation-delay: 0.8s;
  }
  .object-two:nth-child(7) {
    -webkit-animation-delay: 0.7s;
    animation-delay: 0.7s;
  }
  .object-two:nth-child(6) {
    -webkit-animation-delay: 0.6s;
    animation-delay: 0.6s;
  }
  .object-two:nth-child(5) {
    -webkit-animation-delay: 0.5s;
    animation-delay: 0.5s;
  }
  .object-two:nth-child(4) {
    -webkit-animation-delay: 0.4s;
    animation-delay: 0.4s;
  }
  .object-two:nth-child(3) {
    -webkit-animation-delay: 0.3s;
    animation-delay: 0.3s;
  }
  .object-two:nth-child(2) {
    -webkit-animation-delay: 0.2s;
    animation-delay: 0.2s;
  }

  @-webkit-keyframes object-one10 {
    50% {
      -ms-transform: translate(100px, 0);
      -webkit-transform: translate(100px, 0);
      transform: translate(100px, 0);
    }
  }
  @keyframes object-one10 {
    50% {
      -ms-transform: translate(100px, 0);
      -webkit-transform: translate(100px, 0);
      transform: translate(100px, 0);
    }
  }

  @-webkit-keyframes object-two10 {
    50% {
      -ms-transform: translate(-100px, 0);
      -webkit-transform: translate(-100px, 0);
      transform: translate(-100px, 0);
    }
  }
  @keyframes object-two10 {
    50% {
      -ms-transform: translate(-100px, 0);
      -webkit-transform: translate(-100px, 0);
      transform: translate(-100px, 0);
    }
  }
}
</style>
