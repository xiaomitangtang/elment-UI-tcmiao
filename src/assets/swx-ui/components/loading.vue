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
        <div class="loading" v-else-if="type==='loading-round-1'">
            <div class="loading-center">
                <div class="loading-center-absolute">
                    <div class="object object_one"></div>
                    <div class="object object_two"></div>
                    <div class="object object_three"></div>

                </div>
            </div>

        </div>
        <div class="loading" v-else-if="type==='loading-round-2'">
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
                    <div class="object object_big"></div>
                </div>
            </div>

        </div>
        <div class="loading" v-else-if="type==='loading-round-3'">
            <div class="loading-center">
                <div class="loading-center-absolute">
                    <div class="object first_object" ></div>
                    <div class="object second_object"  style="float:right;"></div>

                </div>
            </div>

        </div>
        <div class="loading" v-else-if="type==='loading-round-4'">
            <div class="loading-center">
                <div class="loading-center-absolute">
                    <div class="object"></div>
                    <div class="object"></div>
                    <div class="object"></div>
                    <div class="object"></div>
                    <div class="object"></div>
                    <div class="object"></div>
                    <div class="object"></div>
                    <div class="object"></div>
                    <div class="object"></div>
                </div>
            </div>

        </div>
        <div class="loading" v-else-if="type==='loading-round-5'">
            <div class="loading-center">
                <div class="loading-center-absolute-one">
                    <div class="object-one"></div>
                    <div class="object-one"></div>
                    <div class="object-one"></div>
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
                    <div class="object-two"></div>
                    <div class="object-two"></div>
                    <div class="object-two"></div>
                </div>
            </div>

        </div>
        <div class="loading" v-else-if="type==='loading-round-6'">
            <div class="loading-center">
                <div class="loading-center-absolute">
                    <div class="object object_one"></div>
                    <div class="object object_two"></div>
                    <div class="object object_three"></div>
                    <div class="object object_four"></div>

                </div>
            </div>

        </div>
        <div class="loading" v-else-if="type==='loading-round-7'">
            <div class="loading-center">
                <div class="loading-center-absolute">
                    <div class="object object_one"></div>
                    <div class="object object_two"></div>
                    <div class="object object_three"></div>
                    <div class="object object_four"></div>

                </div>
            </div>

        </div>
        <div class="loading" v-else-if="type==='loading-round-8'">
            <div class="loading-center">
                <div class="loading-center-absolute">
                    <div class="object object_one"></div>
                    <div class="object object_two" style="left:20px;"></div>
                    <div class="object object_three" style="left:40px;"></div>
                    <div class="object object_four" style="left:60px;"></div>
                    <div class="object object_five" style="left:80px;"></div>
                </div>
            </div>

        </div>
        <div class="loading"  v-else-if="type==='loading-round-9'">
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
        <div class="loading" v-else-if="type==='loading-round-10'">
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

                </div>
            </div>

        </div>
        <div class="loading" v-else-if="type==='loading-various-1'">
            <div class="loading-center">
                <div class="loading-center-absolute">
                    <div class="object object_one"></div>
                    <div class="object object_two"></div>
                    <div class="object object_three"></div>


                </div>
            </div>

        </div>
        <div class="loading" v-else-if="type==='loading-various-2'">
            <div class="loading-center">
                <div class="loading-center-absolute">
                    <div class="object object_one"></div>
                    <div class="object object_two"></div>
                    <div class="object object_three"></div>
                    <div class="object object_four"></div>

                </div>
            </div>

        </div>
        <div class="loading" v-else-if="type==='loading-various-3'">
            <div class="loading-center">
                <div class="loading-center-absolute">
                    <div class="object object_one" ></div>
                </div>
            </div>

        </div>
        <div class="loading" v-else-if="type==='loading-various-4'">
            <div class="loading-center">
                <div class="loading-center-absolute">
                    <div class="object"></div>
                    <div class="object"></div>
                    <div class="object"></div>
                    <div class="object"></div>
                    <div class="object"></div>
                    <div class="object"></div>
                    <div class="object"></div>
                    <div class="object"></div>
                    <div class="object"></div>
                    <div class="object"></div>
                </div>
            </div>

        </div>
        <div class="loading" v-else-if="type==='loading-various-5'">
            <div class="loading-center">
                <div class="loading-center-absolute">
                    <div class="object"></div>
                    <div class="object"></div>
                    <div class="object"></div>
                    <div class="object"></div>
                    <div class="object"></div>
                    <div class="object"></div>
                    <div class="object"></div>
                    <div class="object"></div>
                    <div class="object"></div>
                    <div class="object"></div>
                </div>
            </div>

        </div>
        <div class="loading" v-else-if="type==='loading-various-6'">
            <div class="loading-center">
                <div class="loading-center-absolute">
                    <div class="object"></div>
                    <div class="object"></div>
                    <div class="object"></div>
                    <div class="object"></div>
                    <div class="object"></div>
                    <div class="object"></div>
                    <div class="object"></div>
                    <div class="object"></div>
                    <div class="object"></div>
                    <div class="object"></div>
                </div>
            </div>

        </div>
        <div class="loading" v-else-if="type==='loading-various-7'">
            <div class="loading-center">
                <div class="loading-center-absolute">
                    <div class="object object_four"></div>
                    <div class="object object_three"></div>
                    <div class="object object_two"></div>
                    <div class="object object_one"></div>

                </div>
            </div>

        </div>
        <div class="loading"  v-else-if="type==='loading-various-8'">
            <div class="loading-center">
                <div class="loading-center-absolute">
                    <div class="object object_four" ></div>
                    <div class="object object_three" ></div>
                    <div class="object object_two" ></div>
                    <div class="object object_one" ></div>

                </div>
            </div>

        </div>
        <div class="loading"  v-else-if="type==='loading-various-9'">
            <div class="loading-center">
                <div class="loading-center-absolute">
                    <div class="object"></div>
                    <div class="object"></div>
                    <div class="object"></div>
                    <div class="object"></div>
                    <div class="object"></div>
                    <div class="object"></div>
                    <div class="object"></div>
                    <div class="object"></div>
                    <div class="object"></div>
                    <div class="object"></div>
                    <div class="object"></div>
                    <div class="object"></div>
                    <div class="object"></div>
                    <div class="object"></div>
                    <div class="object"></div>
                    <div class="object"></div>
                    <div class="object"></div>
                    <div class="object"></div>
                    <div class="object"></div>
                    <div class="object"></div>
                </div>
            </div>

        </div>
        <div class="loading" v-else-if="type==='loading-various-10'">
            <div class="loading-center">
                <div class="loading-center-absolute">
                    <div class="object"></div>
                    <div class="object"></div>
                    <div class="object"></div>
                    <div class="object"></div>
                    <div class="object"></div>
                    <div class="object"></div>
                    <div class="object"></div>
                    <div class="object"></div>
                    <div class="object"></div>
                    <div class="object"></div>
                    <div class="object"></div>
                    <div class="object"></div>
                    <div class="object"></div>
                    <div class="object"></div>
                    <div class="object"></div>
                    <div class="object"></div>
                    <div class="object"></div>
                    <div class="object"></div>
                    <div class="object"></div>
                    <div class="object"></div>
                    <div class="object"></div>
                    <div class="object"></div>
                    <div class="object"></div>
                    <div class="object"></div>
                    <div class="object"></div>
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
.loading-round-1 {
  .loading {
    background-color: #374140;
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
  }
  .object {
    width: 20px;
    height: 20px;
    background-color: #fff;
    float: left;
    margin-right: 20px;
    margin-top: 65px;
    -moz-border-radius: 50% 50% 50% 50%;
    -webkit-border-radius: 50% 50% 50% 50%;
    border-radius: 50% 50% 50% 50%;
  }

  .object_one {
    -webkit-animation: object_one11 1.5s infinite;
    animation: object_one11 1.5s infinite;
  }
  .object_two {
    -webkit-animation: object_two11 1.5s infinite;
    animation: object_two11 1.5s infinite;
    -webkit-animation-delay: 0.25s;
    animation-delay: 0.25s;
  }
  .object_three {
    -webkit-animation: object_three11 1.5s infinite;
    animation: object_three11 1.5s infinite;
    -webkit-animation-delay: 0.5s;
    animation-delay: 0.5s;
  }

  @-webkit-keyframes object_one11 {
    75% {
      -webkit-transform: scale(0);
    }
  }

  @keyframes object_one11 {
    75% {
      transform: scale(0);
      -webkit-transform: scale(0);
    }
  }

  @-webkit-keyframes object_two11 {
    75% {
      -webkit-transform: scale(0);
    }
  }

  @keyframes object_two11 {
    75% {
      transform: scale(0);
      -webkit-transform: scale(0);
    }
  }

  @-webkit-keyframes object_three11 {
    75% {
      -webkit-transform: scale(0);
    }
  }

  @keyframes object_three11 {
    75% {
      transform: scale(0);
      -webkit-transform: scale(0);
    }
  }
}
.loading-round-2 {
  .loading {
    background-color: #dc3522;
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
    position: absolute;
    left: 65px;
    top: 65px;
    -moz-border-radius: 50% 50% 50% 50%;
    -webkit-border-radius: 50% 50% 50% 50%;
    border-radius: 50% 50% 50% 50%;
  }
  .object:nth-child(2n + 0) {
    margin-right: 0px;
  }
  .object_one {
    -webkit-animation: object_one12 2s infinite;
    animation: object_one12 2s infinite;
    -webkit-animation-delay: 0.2s;
    animation-delay: 0.2s;
  }
  .object_two {
    -webkit-animation: object_two12 2s infinite;
    animation: object_two12 2s infinite;
    -webkit-animation-delay: 0.3s;
    animation-delay: 0.3s;
  }
  .object_three {
    -webkit-animation: object_three12 2s infinite;
    animation: object_three12 2s infinite;
    -webkit-animation-delay: 0.4s;
    animation-delay: 0.4s;
  }
  .object_four {
    -webkit-animation: object_four12 2s infinite;
    animation: object_four12 2s infinite;
    -webkit-animation-delay: 0.5s;
    animation-delay: 0.5s;
  }
  .object_five {
    -webkit-animation: object_five12 2s infinite;
    animation: object_five12 2s infinite;
    -webkit-animation-delay: 0.6s;
    animation-delay: 0.6s;
  }
  .object_six {
    -webkit-animation: object_six12 2s infinite;
    animation: object_six12 2s infinite;
    -webkit-animation-delay: 0.7s;
    animation-delay: 0.7s;
  }
  .object_seven {
    -webkit-animation: object_seven12 2s infinite;
    animation: object_seven12 2s infinite;
    -webkit-animation-delay: 0.8s;
    animation-delay: 0.8s;
  }
  .object_eight {
    -webkit-animation: object_eight12 2s infinite;
    animation: object_eight12 2s infinite;
    -webkit-animation-delay: 0.9s;
    animation-delay: 0.9s;
  }

  .object_big {
    position: absolute;
    width: 50px;
    height: 50px;
    left: 50px;
    top: 50px;
    -webkit-animation: object_big12 2s infinite;
    animation: object_big12 2s infinite;
    -webkit-animation-delay: 0.5s;
    animation-delay: 0.5s;
  }

  @-webkit-keyframes object_big12 {
    50% {
      -webkit-transform: scale(0.5);
    }
  }

  @keyframes object_big12 {
    50% {
      transform: scale(0.5);
      -webkit-transform: scale(0.5);
    }
  }

  @-webkit-keyframes object_one12 {
    50% {
      -webkit-transform: translate(-65px, -65px);
    }
  }

  @keyframes object_one12 {
    50% {
      transform: translate(-65px, -65px);
      -webkit-transform: translate(-65px, -65px);
    }
  }

  @-webkit-keyframes object_two12 {
    50% {
      -webkit-transform: translate(0, -65px);
    }
  }

  @keyframes object_two12 {
    50% {
      transform: translate(0, -65px);
      -webkit-transform: translate(0, -65px);
    }
  }

  @-webkit-keyframes object_three12 {
    50% {
      -webkit-transform: translate(65px, -65px);
    }
  }

  @keyframes object_three12 {
    50% {
      transform: translate(65px, -65px);
      -webkit-transform: translate(65px, -65px);
    }
  }

  @-webkit-keyframes object_four12 {
    50% {
      -webkit-transform: translate(65px, 0);
    }
  }

  @keyframes object_four12 {
    50% {
      transform: translate(65px, 0);
      -webkit-transform: translate(65px, 0);
    }
  }

  @-webkit-keyframes object_five12 {
    50% {
      -webkit-transform: translate(65px, 65px);
    }
  }

  @keyframes object_five12 {
    50% {
      transform: translate(65px, 65px);
      -webkit-transform: translate(65px, 65px);
    }
  }

  @-webkit-keyframes object_six12 {
    50% {
      -webkit-transform: translate(0, 65px);
    }
  }

  @keyframes object_six12 {
    50% {
      transform: translate(0, 65px);
      -webkit-transform: translate(0, 65px);
    }
  }

  @-webkit-keyframes object_seven12 {
    50% {
      -webkit-transform: translate(-65px, 65px);
    }
  }

  @keyframes object_seven12 {
    50% {
      transform: translate(-65px, 65px);
      -webkit-transform: translate(-65px, 65px);
    }
  }

  @-webkit-keyframes object_eight12 {
    50% {
      -webkit-transform: translate(-65px, 0);
    }
  }

  @keyframes object_eight12 {
    50% {
      transform: translate(-65px, 0);
      -webkit-transform: translate(-65px, 0);
    }
  }
}
.loading-round-3 {
  .loading {
    background-color: #88a825;
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
    width: 200px;
    margin-top: -25px;
    margin-left: -100px;
  }
  .object {
    width: 20px;
    height: 20px;
    background-color: #fff;
    float: left;
    margin-top: 15px;
    -moz-border-radius: 50% 50% 50% 50%;
    -webkit-border-radius: 50% 50% 50% 50%;
    border-radius: 50% 50% 50% 50%;
  }

  .first_object {
    -webkit-animation: first_object13 2s infinite;
    animation: first_object13 2s infinite;
  }

  .second_object {
    -webkit-animation: second_object13 2s infinite;
    animation: second_object13 2s infinite;
  }

  @-webkit-keyframes first_object13 {
    25% {
      -ms-transform: translate(90px, 0) scale(2);
      -webkit-transform: translate(90px, 0) scale(2);
      transform: translate(90px, 0) scale(2);
    }

    50% {
      -ms-transform: translate(180px, 0) scale(1);
      -webkit-transform: translate(180px, 0) scale(1);
      transform: translate(180px, 0) scale(1);
    }

    75% {
      -ms-transform: translate(90px, 0) scale(2);
      -webkit-transform: translate(90px, 0) scale(2);
      transform: translate(90px, 0) scale(2);
    }
  }
  @keyframes first_object13 {
    25% {
      -ms-transform: translate(90px, 0) scale(2);
      -webkit-transform: translate(90px, 0) scale(2);
      transform: translate(90px, 0) scale(2);
    }

    50% {
      -ms-transform: translate(180px, 0) scale(1);
      -webkit-transform: translate(180px, 0) scale(1);
      transform: translate(180px, 0) scale(1);
    }

    75% {
      -ms-transform: translate(90px, 0) scale(2);
      -webkit-transform: translate(90px, 0) scale(2);
      transform: translate(90px, 0) scale(2);
    }
  }

  @-webkit-keyframes second_object13 {
    25% {
      -ms-transform: translate(-90px, 0) scale(2);
      -webkit-transform: translate(-90px, 0) scale(2);
      transform: translate(-90px, 0) scale(2);
    }

    50% {
      -ms-transform: translate(-180px, 0) scale(1);
      -webkit-transform: translate(-180px, 0) scale(1);
      transform: translate(-180px, 0) scale(1);
    }

    75% {
      -ms-transform: translate(-90px, 0) scale(2);
      -webkit-transform: translate(-90px, 0) scale(2);
      transform: translate(-90px, 0) scale(2);
    }
  }
  @keyframes second_object13 {
    25% {
      -ms-transform: translate(-90px, 0) scale(2);
      -webkit-transform: translate(-90px, 0) scale(2);
      transform: translate(-90px, 0) scale(2);
    }

    50% {
      -ms-transform: translate(-180px, 0) scale(1);
      -webkit-transform: translate(-180px, 0) scale(1);
      transform: translate(-180px, 0) scale(1);
    }

    75% {
      -ms-transform: translate(-90px, 0) scale(2);
      -webkit-transform: translate(-90px, 0) scale(2);
      transform: translate(-90px, 0) scale(2);
    }
  }
}
.loading-round-4 {
  .loading {
    background-color: #35203b;
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
    width: 300px;
    margin-top: -25px;
    margin-left: -150px;
  }
  .object {
    width: 18px;
    height: 18px;
    background-color: #fff;
    float: left;
    margin-top: 15px;
    margin-right: 15px;
    -moz-border-radius: 50% 50% 50% 50%;
    -webkit-border-radius: 50% 50% 50% 50%;
    border-radius: 50% 50% 50% 50%;
    -webkit-animation: object14 1s infinite;
    animation: object14 1s infinite;
  }
  .object:last-child {
    margin-right: 0px;
  }

  .object:nth-child(9) {
    -webkit-animation-delay: 0.9s;
    animation-delay: 0.9s;
  }
  .object:nth-child(8) {
    -webkit-animation-delay: 0.8s;
    animation-delay: 0.8s;
  }
  .object:nth-child(7) {
    -webkit-animation-delay: 0.7s;
    animation-delay: 0.7s;
  }
  .object:nth-child(6) {
    -webkit-animation-delay: 0.6s;
    animation-delay: 0.6s;
  }
  .object:nth-child(5) {
    -webkit-animation-delay: 0.5s;
    animation-delay: 0.5s;
  }
  .object:nth-child(4) {
    -webkit-animation-delay: 0.4s;
    animation-delay: 0.4s;
  }
  .object:nth-child(3) {
    -webkit-animation-delay: 0.3s;
    animation-delay: 0.3s;
  }
  .object:nth-child(2) {
    -webkit-animation-delay: 0.2s;
    animation-delay: 0.2s;
  }

  @-webkit-keyframes object14 {
    50% {
      -ms-transform: translate(0, -50px);
      -webkit-transform: translate(0, -50px);
      transform: translate(0, -50px);
    }
  }
  @keyframes object14 {
    50% {
      -ms-transform: translate(0, -50px);
      -webkit-transform: translate(0, -50px);
      transform: translate(0, -50px);
    }
  }
}
.loading-round-5 {
  .loading {
    background-color: #911146;
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
    left: 50%;
    top: 50%;
    height: 300px;
    width: 50px;
    margin-top: -150px;
    margin-left: -25px;
  }
  .loading-center-absolute-two {
    position: absolute;
    left: 50%;
    top: 50%;
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
    -moz-border-radius: 50% 50% 50% 50%;
    -webkit-border-radius: 50% 50% 50% 50%;
    border-radius: 50% 50% 50% 50%;
    -webkit-animation: object-one15 1s infinite;
    animation: object-one15 1s infinite;
  }
  .object-two {
    width: 18px;
    height: 18px;
    background-color: #fff;
    float: left;
    margin-top: 15px;
    margin-right: 15px;
    -moz-border-radius: 50% 50% 50% 50%;
    -webkit-border-radius: 50% 50% 50% 50%;
    border-radius: 50% 50% 50% 50%;
    -webkit-animation: object-two15 1s infinite;
    animation: object-two15 1s infinite;
  }

  .object-one:nth-child(9) {
    -webkit-animation-delay: 0.9s;
    animation-delay: 0.9s;
  }
  .object-one:nth-child(8) {
    -webkit-animation-delay: 0.8s;
    animation-delay: 0.8s;
  }
  .object-one:nth-child(7) {
    -webkit-animation-delay: 0.7s;
    animation-delay: 0.7s;
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

  @-webkit-keyframes object-one15 {
    50% {
      -ms-transform: translate(100px, 0);
      -webkit-transform: translate(100px, 0);
      transform: translate(100px, 0);
    }
  }
  @keyframes object-one15 {
    50% {
      -ms-transform: translate(100px, 0);
      -webkit-transform: translate(100px, 0);
      transform: translate(100px, 0);
    }
  }

  @-webkit-keyframes object-two15 {
    50% {
      -ms-transform: translate(-100px, 0);
      -webkit-transform: translate(-100px, 0);
      transform: translate(-100px, 0);
    }
  }
  @keyframes object-two15 {
    50% {
      -ms-transform: translate(-100px, 0);
      -webkit-transform: translate(-100px, 0);
      transform: translate(-100px, 0);
    }
  }
}
.loading-round-6 {
  .loading {
    background-color: #cf4a30;
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
    height: 60px;
    width: 60px;
    margin-top: -30px;
    margin-left: -30px;
    -webkit-animation: loading-center-absolute16 1s infinite;
    animation: loading-center-absolute16 1s infinite;
  }
  .object {
    width: 20px;
    height: 20px;
    background-color: #fff;
    float: left;
    -moz-border-radius: 50% 50% 50% 50%;
    -webkit-border-radius: 50% 50% 50% 50%;
    border-radius: 50% 50% 50% 50%;
    margin-right: 20px;
    margin-bottom: 20px;
  }
  .object:nth-child(2n + 0) {
    margin-right: 0px;
  }
  .object_one {
    -webkit-animation: object_one16 1s infinite;
    animation: object_one16 1s infinite;
  }
  .object_two {
    -webkit-animation: object_two16 1s infinite;
    animation: object_two16 1s infinite;
  }
  .object_three {
    -webkit-animation: object_three16 1s infinite;
    animation: object_three16 1s infinite;
  }
  .object_four {
    -webkit-animation: object_four16 1s infinite;
    animation: object_four16 1s infinite;
  }

  @-webkit-keyframes loading-center-absolute16 {
    100% {
      -ms-transform: rotate(360deg);
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes loading-center-absolute16 {
    100% {
      -ms-transform: rotate(360deg);
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  @-webkit-keyframes object_one16 {
    50% {
      -ms-transform: translate(20px, 20px);
      -webkit-transform: translate(20px, 20px);
      transform: translate(20px, 20px);
    }
  }
  @keyframes object_one16 {
    50% {
      -ms-transform: translate(20px, 20px);
      -webkit-transform: translate(20px, 20px);
      transform: translate(20px, 20px);
    }
  }

  @-webkit-keyframes object_two16 {
    50% {
      -ms-transform: translate(-20px, 20px);
      -webkit-transform: translate(-20px, 20px);
      transform: translate(-20px, 20px);
    }
  }
  @keyframes object_two16 {
    50% {
      -ms-transform: translate(-20px, 20px);
      -webkit-transform: translate(-20px, 20px);
      transform: translate(-20px, 20px);
    }
  }

  @-webkit-keyframes object_three16 {
    50% {
      -ms-transform: translate(20px, -20px);
      -webkit-transform: translate(20px, -20px);
      transform: translate(20px, -20px);
    }
  }
  @keyframes object_three16 {
    50% {
      -ms-transform: translate(20px, -20px);
      -webkit-transform: translate(20px, -20px);
      transform: translate(20px, -20px);
    }
  }

  @-webkit-keyframes object_four16 {
    50% {
      -ms-transform: translate(-20px, -20px);
      -webkit-transform: translate(-20px, -20px);
      transform: translate(-20px, -20px);
    }
  }
  @keyframes object_four16 {
    50% {
      -ms-transform: translate(-20px, -20px);
      -webkit-transform: translate(-20px, -20px);
      transform: translate(-20px, -20px);
    }
  }
}
.loading-round-7 {
  .loading {
    background-color: #ed8c2b;
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
    height: 20px;
    width: 140px;
    margin-top: -10px;
    margin-left: -70px;
    -webkit-animation: loading-center-absolute17 1s infinite;
    animation: loading-center-absolute17 1s infinite;
  }
  .object {
    width: 20px;
    height: 20px;
    background-color: #fff;
    float: left;
    -moz-border-radius: 50% 50% 50% 50%;
    -webkit-border-radius: 50% 50% 50% 50%;
    border-radius: 50% 50% 50% 50%;
    margin-right: 20px;
    margin-bottom: 20px;
  }
  .object:last-child {
    margin-right: 0px;
  }
  .object_one {
    -webkit-animation: object_one17 1s infinite;
    animation: object_one17 1s infinite;
  }
  .object_two {
    -webkit-animation: object_two17 1s infinite;
    animation: object_two17 1s infinite;
  }
  .object_three {
    -webkit-animation: object_three17 1s infinite;
    animation: object_three17 1s infinite;
  }
  .object_four {
    -webkit-animation: object_four17 1s infinite;
    animation: object_four17 1s infinite;
  }

  @-webkit-keyframes loading-center-absolute17 {
    100% {
      -ms-transform: rotate(360deg);
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes loading-center-absolute17 {
    100% {
      -ms-transform: rotate(360deg);
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  @-webkit-keyframes object_one17 {
    50% {
      -ms-transform: translate(20px, 20px);
      -webkit-transform: translate(20px, 20px);
      transform: translate(20px, 20px);
    }
  }
  @keyframes object_one17 {
    50% {
      -ms-transform: translate(20px, 20px);
      -webkit-transform: translate(20px, 20px);
      transform: translate(20px, 20px);
    }
  }

  @-webkit-keyframes object_two17 {
    50% {
      -ms-transform: translate(-20px, 20px);
      -webkit-transform: translate(-20px, 20px);
      transform: translate(-20px, 20px);
    }
  }
  @keyframes object_two17 {
    50% {
      -ms-transform: translate(-20px, 20px);
      -webkit-transform: translate(-20px, 20px);
      transform: translate(-20px, 20px);
    }
  }

  @-webkit-keyframes object_three17 {
    50% {
      -ms-transform: translate(20px, -20px);
      -webkit-transform: translate(20px, -20px);
      transform: translate(20px, -20px);
    }
  }
  @keyframes object_three17 {
    50% {
      -ms-transform: translate(20px, -20px);
      -webkit-transform: translate(20px, -20px);
      transform: translate(20px, -20px);
    }
  }

  @-webkit-keyframes object_four17 {
    50% {
      -ms-transform: translate(-20px, -20px);
      -webkit-transform: translate(-20px, -20px);
      transform: translate(-20px, -20px);
    }
  }
  @keyframes object_four17 {
    50% {
      -ms-transform: translate(-20px, -20px);
      -webkit-transform: translate(-20px, -20px);
      transform: translate(-20px, -20px);
    }
  }
}
.loading-round-8 {
  .loading {
    background-color: #db5800;
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
    height: 20px;
    width: 100px;
    margin-top: -10px;
    margin-left: -50px;
  }
  .object {
    width: 20px;
    height: 20px;
    background-color: #fff;
    -moz-border-radius: 50% 50% 50% 50%;
    -webkit-border-radius: 50% 50% 50% 50%;
    border-radius: 50% 50% 50% 50%;
    margin-right: 20px;
    margin-bottom: 20px;
    position: absolute;
  }

  .object_one {
    -webkit-animation: object18 2s linear infinite;
    animation: object18 2s linear infinite;
  }
  .object_two {
    -webkit-animation: object18 2s linear infinite -0.4s;
    animation: object18 2s linear infinite -0.4s;
  }
  .object_three {
    -webkit-animation: object18 2s linear infinite -0.8s;
    animation: object18 2s linear infinite -0.8s;
  }
  .object_four {
    -webkit-animation: object18 2s linear infinite -1.2s;
    animation: object18 2s linear infinite -1.2s;
  }
  .object_five {
    -webkit-animation: object18 2s linear infinite -1.6s;
    animation: object18 2s linear infinite -1.6s;
  }

  @-webkit-keyframes object18 {
    0% {
      left: 100px;
      top: 0;
    }
    80% {
      left: 0;
      top: 0;
    }
    85% {
      left: 0;
      top: -20px;
      width: 20px;
      height: 20px;
    }
    90% {
      width: 40px;
      height: 15px;
    }
    95% {
      left: 100px;
      top: -20px;
      width: 20px;
      height: 20px;
    }
    100% {
      left: 100px;
      top: 0;
    }
  }
  @keyframes object18 {
    0% {
      left: 100px;
      top: 0;
    }
    80% {
      left: 0;
      top: 0;
    }
    85% {
      left: 0;
      top: -20px;
      width: 20px;
      height: 20px;
    }
    90% {
      width: 40px;
      height: 15px;
    }
    95% {
      left: 100px;
      top: -20px;
      width: 20px;
      height: 20px;
    }
    100% {
      left: 100px;
      top: 0;
    }
  }
}
.loading-round-9 {
  .loading {
    background-color: #ff9000;
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
    -moz-border-radius: 50% 50% 50% 50%;
    -webkit-border-radius: 50% 50% 50% 50%;
    border-radius: 50% 50% 50% 50%;
  }
  .object:nth-child(3n + 0) {
    margin-right: 0px;
  }

  .object_one {
    -webkit-animation: animate19 1s -0.9s ease-in-out infinite;
    animation: animate19 1s -0.9s ease-in-out infinite;
  }
  .object_two {
    -webkit-animation: animate19 1s -0.8s ease-in-out infinite;
    animation: animate19 1s -0.8s ease-in-out infinite;
  }
  .object_three {
    -webkit-animation: animate19 1s -0.7s ease-in-out infinite;
    animation: animate19 1s -0.7s ease-in-out infinite;
  }
  .object_four {
    -webkit-animation: animate19 1s -0.6s ease-in-out infinite;
    animation: animate19 1s -0.6s ease-in-out infinite;
  }
  .object_five {
    -webkit-animation: animate19 1s -0.5s ease-in-out infinite;
    animation: animate19 1s -0.5s ease-in-out infinite;
  }
  .object_six {
    -webkit-animation: animate19 1s -0.4s ease-in-out infinite;
    animation: animate19 1s -0.4s ease-in-out infinite;
  }
  .object_seven {
    -webkit-animation: animate19 1s -0.3s ease-in-out infinite;
    animation: animate19 1s -0.3s ease-in-out infinite;
  }
  .object_eight {
    -webkit-animation: animate19 1s -0.2s ease-in-out infinite;
    animation: animate19 1s -0.2s ease-in-out infinite;
  }
  .object_nine {
    -webkit-animation: animate19 1s -0.1s ease-in-out infinite;
    animation: animate19 1s -0.1s ease-in-out infinite;
  }

  @-webkit-keyframes animate19 {
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

  @keyframes animate19 {
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
.loading-round-10 {
  .loading {
    background-color: #f0c600;
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
    -moz-border-radius: 50% 50% 50% 50%;
    -webkit-border-radius: 50% 50% 50% 50%;
    border-radius: 50% 50% 50% 50%;
  }
  .object {
    width: 20px;
    height: 20px;
    background-color: #fff;
    position: absolute;
    -moz-border-radius: 50% 50% 50% 50%;
    -webkit-border-radius: 50% 50% 50% 50%;
    border-radius: 50% 50% 50% 50%;
    -webkit-animation: animate20 0.8s infinite;
    animation: animate20 0.8s infinite;
  }

  .object_one {
    top: 19px;
    left: 19px;
  }
  .object_two {
    top: 0px;
    left: 65px;
    -webkit-animation-delay: 0.1s;
    animation-delay: 0.1s;
  }
  .object_three {
    top: 19px;
    left: 111px;
    -webkit-animation-delay: 0.2s;
    animation-delay: 0.2s;
  }
  .object_four {
    top: 65px;
    left: 130px;
    -webkit-animation-delay: 0.3s;
    animation-delay: 0.3s;
  }
  .object_five {
    top: 111px;
    left: 111px;
    -webkit-animation-delay: 0.4s;
    animation-delay: 0.4s;
  }
  .object_six {
    top: 130px;
    left: 65px;
    -webkit-animation-delay: 0.5s;
    animation-delay: 0.5s;
  }
  .object_seven {
    top: 111px;
    left: 19px;
    -webkit-animation-delay: 0.6s;
    animation-delay: 0.6s;
  }
  .object_eight {
    top: 65px;
    left: 0px;
    -webkit-animation-delay: 0.7s;
    animation-delay: 0.7s;
  }

  @-webkit-keyframes animate20 {
    25% {
      -ms-transform: scale(1.5);
      -webkit-transform: scale(1.5);
      transform: scale(1.5);
    }

    75% {
      -ms-transform: scale(0);
      -webkit-transform: scale(0);
      transform: scale(0);
    }
  }

  @keyframes animate20 {
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
.loading-various-1 {
  .loading {
    background-color: #8ea106;
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
    width: 40px;
    margin-top: -50px;
    margin-left: -20px;
  }
  .object {
    width: 40px;
    height: 8px;
    margin-bottom: 20px;
    background-color: #fff;
    -webkit-animation: animate21 0.8s infinite;
    animation: animate21 0.8s infinite;
  }

  .object_two {
    -webkit-animation-delay: 0.2s;
    animation-delay: 0.2s;
  }
  .object_three {
    -webkit-animation-delay: 0.4s;
    animation-delay: 0.4s;
  }

  @-webkit-keyframes animate21 {
    50% {
      -ms-transform: scale(1.5);
      -webkit-transform: scale(1.5);
      transform: scale(1.5);
    }
  }

  @keyframes animate21 {
    50% {
      -ms-transform: scale(1.5);
      -webkit-transform: scale(1.5);
      transform: scale(1.5);
    }
  }
}
.loading-various-2 {
  .loading {
    background-color: #59631e;
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
    width: 50px;
    margin-top: -50px;
    margin-left: -25px;
  }
  .object {
    width: 50px;
    height: 8px;
    margin-bottom: 15px;
    background-color: #fff;
    -webkit-animation: animate22 0.8s infinite;
    animation: animate22 0.8s infinite;
  }

  .object_two {
    -webkit-animation-delay: 0.2s;
    animation-delay: 0.2s;
  }

  .object_four {
    -webkit-animation-delay: 0.2s;
    animation-delay: 0.2s;
  }

  @-webkit-keyframes animate22 {
    50% {
      -ms-transform: translate(50%, 0);
      -webkit-transform: translate(50%, 0);
      transform: translate(50%, 0);
    }
  }

  @keyframes animate {
    50% {
      -ms-transform: translate(50%, 0);
      -webkit-transform: translate(50%, 0);
      transform: translate(50%, 0);
    }
  }
}
.loading-various-3 {
  .loading {
    background-color: #334d5c;
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
  }
  .object {
    width: 50px;
    height: 5px;
    background-color: #fff;
    -webkit-animation: animate23 2s infinite;
    animation: animate23 2s infinite;
    position: absolute;
    top: 0px;
    right: -200px;
  }

  @-webkit-keyframes animate23 {
    50% {
      -ms-transform: translate(-400px, 0) rotate(-360deg);
      -webkit-transform: translate(-400px, 0) rotate(-360deg);
      transform: translate(-400px, 0) rotate(-360deg);
    }

    100% {
      -ms-transform: translate(0, 0) rotate(360deg);
      -webkit-transform: translate(0, 0) rotate(360deg);
      transform: translate(0, 0) rotate(360deg);
    }
  }

  @keyframes animate23 {
    50% {
      -ms-transform: translate(-400px, 0) rotate(-360deg);
      -webkit-transform: translate(-400px, 0) rotate(-360deg);
      transform: translate(-400px, 0) rotate(-360deg);
    }

    100% {
      -ms-transform: translate(0, 0) rotate(360deg);
      -webkit-transform: translate(0, 0) rotate(360deg);
      transform: translate(0, 0) rotate(360deg);
    }
  }
}
.loading-various-4 {
  .loading {
    background-color: #45b29d;
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
    width: 150px;
    margin-top: -25px;
    margin-left: -75px;
  }
  .object {
    width: 8px;
    height: 50px;
    margin-right: 5px;
    background-color: #fff;
    -webkit-animation: animate24 1s infinite;
    animation: animate24 1s infinite;
    float: left;
  }

  .object:last-child {
    margin-right: 0px;
  }

  .object:nth-child(10) {
    -webkit-animation-delay: 0.9s;
    animation-delay: 0.9s;
  }
  .object:nth-child(9) {
    -webkit-animation-delay: 0.8s;
    animation-delay: 0.8s;
  }
  .object:nth-child(8) {
    -webkit-animation-delay: 0.7s;
    animation-delay: 0.7s;
  }
  .object:nth-child(7) {
    -webkit-animation-delay: 0.6s;
    animation-delay: 0.6s;
  }
  .object:nth-child(6) {
    -webkit-animation-delay: 0.5s;
    animation-delay: 0.5s;
  }
  .object:nth-child(5) {
    -webkit-animation-delay: 0.4s;
    animation-delay: 0.4s;
  }
  .object:nth-child(4) {
    -webkit-animation-delay: 0.3s;
    animation-delay: 0.3s;
  }
  .object:nth-child(3) {
    -webkit-animation-delay: 0.2s;
    animation-delay: 0.2s;
  }
  .object:nth-child(2) {
    -webkit-animation-delay: 0.1s;
    animation-delay: 0.1s;
  }

  @-webkit-keyframes animate24 {
    50% {
      -ms-transform: scaleY(0);
      -webkit-transform: scaleY(0);
      transform: scaleY(0);
    }
  }

  @keyframes animate24 {
    50% {
      -ms-transform: scaleY(0);
      -webkit-transform: scaleY(0);
      transform: scaleY(0);
    }
  }
}
.loading-various-5 {
  .loading {
    background-color: #efc94c;
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
    width: 150px;
    margin-top: -25px;
    margin-left: -75px;
  }
  .object {
    width: 8px;
    height: 50px;
    margin-right: 5px;
    background-color: #fff;
    -webkit-animation: animate25 1s infinite;
    animation: animate25 1s infinite;
    float: left;
  }

  .object:last-child {
    margin-right: 0px;
  }

  .object:nth-child(10) {
    -webkit-animation-delay: 0.9s;
    animation-delay: 0.9s;
  }
  .object:nth-child(9) {
    -webkit-animation-delay: 0.8s;
    animation-delay: 0.8s;
  }
  .object:nth-child(8) {
    -webkit-animation-delay: 0.7s;
    animation-delay: 0.7s;
  }
  .object:nth-child(7) {
    -webkit-animation-delay: 0.6s;
    animation-delay: 0.6s;
  }
  .object:nth-child(6) {
    -webkit-animation-delay: 0.5s;
    animation-delay: 0.5s;
  }
  .object:nth-child(5) {
    -webkit-animation-delay: 0.4s;
    animation-delay: 0.4s;
  }
  .object:nth-child(4) {
    -webkit-animation-delay: 0.3s;
    animation-delay: 0.3s;
  }
  .object:nth-child(3) {
    -webkit-animation-delay: 0.2s;
    animation-delay: 0.2s;
  }
  .object:nth-child(2) {
    -webkit-animation-delay: 0.1s;
    animation-delay: 0.1s;
  }

  @-webkit-keyframes animate25 {
    50% {
      -ms-transform: translateX(-25px) scaleY(0.5);
      -webkit-transform: translateX(-25px) scaleY(0.5);
      transform: translateX(-25px) scaleY(0.5);
    }
  }

  @keyframes animate25 {
    50% {
      -ms-transform: translateX(-25px) scaleY(0.5);
      -webkit-transform: translateX(-25px) scaleY(0.5);
      transform: translateX(-25px) scaleY(0.5);
    }
  }
}
.loading-various-6 {
  .loading {
    background-color: #e27a3f;
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
    width: 150px;
    margin-top: -25px;
    margin-left: -75px;
  }
  .object {
    width: 8px;
    height: 50px;
    margin-right: 5px;
    background-color: #fff;
    -webkit-animation: animate26 1s infinite;
    animation: animate26 1s infinite;
    float: left;
  }

  .object:last-child {
    margin-right: 0px;
  }

  .object:nth-child(10) {
    -webkit-animation-delay: 0.9s;
    animation-delay: 0.9s;
  }
  .object:nth-child(9) {
    -webkit-animation-delay: 0.8s;
    animation-delay: 0.8s;
  }
  .object:nth-child(8) {
    -webkit-animation-delay: 0.7s;
    animation-delay: 0.7s;
  }
  .object:nth-child(7) {
    -webkit-animation-delay: 0.6s;
    animation-delay: 0.6s;
  }
  .object:nth-child(6) {
    -webkit-animation-delay: 0.5s;
    animation-delay: 0.5s;
  }
  .object:nth-child(5) {
    -webkit-animation-delay: 0.4s;
    animation-delay: 0.4s;
  }
  .object:nth-child(4) {
    -webkit-animation-delay: 0.3s;
    animation-delay: 0.3s;
  }
  .object:nth-child(3) {
    -webkit-animation-delay: 0.2s;
    animation-delay: 0.2s;
  }
  .object:nth-child(2) {
    -webkit-animation-delay: 0.1s;
    animation-delay: 0.1s;
  }

  @-webkit-keyframes animate26 {
    50% {
      -ms-transform: translateX(-25px) scaleY(2);
      -webkit-transform: translateX(-25px) scaleY(2);
      transform: translateX(-25px) scaleY(2);
    }
  }

  @keyframes animate26 {
    50% {
      -ms-transform: translateX(-25px) scaleY(2);
      -webkit-transform: translateX(-25px) scaleY(2);
      transform: translateX(-25px) scaleY(2);
    }
  }
}
.loading-various-7 {
  .loading {
    background-color: #df5a49;
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
    -moz-border-radius: 50% 50% 50% 50%;
    -webkit-border-radius: 50% 50% 50% 50%;
    border-radius: 50% 50% 50% 50%;
    position: absolute;
    border-left: 5px solid #fff;
    border-right: 5px solid #fff;
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
    -webkit-animation: animate27 2s infinite;
    animation: animate27 2s infinite;
  }

  .object_one {
    left: 75px;
    top: 75px;
    width: 50px;
    height: 50px;
  }

  .object_two {
    left: 65px;
    top: 65px;
    width: 70px;
    height: 70px;
    -webkit-animation-delay: 0.1s;
    animation-delay: 0.1s;
  }

  .object_three {
    left: 55px;
    top: 55px;
    width: 90px;
    height: 90px;
    -webkit-animation-delay: 0.2s;
    animation-delay: 0.2s;
  }
  .object_four {
    left: 45px;
    top: 45px;
    width: 110px;
    height: 110px;
    -webkit-animation-delay: 0.3s;
    animation-delay: 0.3s;
  }

  @-webkit-keyframes animate27 {
    50% {
      -ms-transform: rotate(180deg);
      -webkit-transform: rotate(180deg);
      transform: rotate(180deg);
    }

    100% {
      -ms-transform: rotate(0deg);
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
  }

  @keyframes animate27 {
    50% {
      -ms-transform: rotate(180deg);
      -webkit-transform: rotate(180deg);
      transform: rotate(180deg);
    }

    100% {
      -ms-transform: rotate(0deg);
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
  }
}
.loading-various-8 {
  .loading {
    background-color: #17607d;
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
    -ms-transform: rotate(-135deg);
    -webkit-transform: rotate(-135deg);
    transform: rotate(-135deg);
  }
  .object {
    -moz-border-radius: 50% 50% 50% 50%;
    -webkit-border-radius: 50% 50% 50% 50%;
    border-radius: 50% 50% 50% 50%;
    position: absolute;
    border-top: 5px solid #fff;
    border-bottom: 5px solid transparent;
    border-left: 5px solid #fff;
    border-right: 5px solid transparent;

    -webkit-animation: animate28 2s infinite;
    animation: animate28 2s infinite;
  }

  .object_one {
    left: 75px;
    top: 75px;
    width: 50px;
    height: 50px;
  }

  .object_two {
    left: 65px;
    top: 65px;
    width: 70px;
    height: 70px;
    -webkit-animation-delay: 0.2s;
    animation-delay: 0.2s;
  }

  .object_three {
    left: 55px;
    top: 55px;
    width: 90px;
    height: 90px;
    -webkit-animation-delay: 0.4s;
    animation-delay: 0.4s;
  }
  .object_four {
    left: 45px;
    top: 45px;
    width: 110px;
    height: 110px;
    -webkit-animation-delay: 0.6s;
    animation-delay: 0.6s;
  }

  @-webkit-keyframes animate28 {
    50% {
      -ms-transform: rotate(360deg) scale(0.8);
      -webkit-transform: rotate(360deg) scale(0.8);
      transform: rotate(360deg) scale(0.8);
    }
  }

  @keyframes animate28 {
    50% {
      -ms-transform: rotate(360deg) scale(0.8);
      -webkit-transform: rotate(360deg) scale(0.8);
      transform: rotate(360deg) scale(0.8);
    }
  }
}
.loading-various-9 {
  .loading {
    background-color: #ff9311;
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
    position: absolute;
    height: 10px;
    width: 50px;
    background-color: #fff;
  }
  .object:nth-child(2n + 0) {
    -webkit-animation: animate_right29 2s infinite;
    animation: animate_right29 2s infinite;
  }
  .object:nth-child(2n + 1) {
    -webkit-animation: animate_left29 2s infinite;
    animation: animate_left29 2s infinite;
  }
  .object:nth-child(1) {
    top: 0px;
    left: 0px;
  }
  .object:nth-child(2) {
    top: 0px;
    left: 50px;
  }
  .object:nth-child(3) {
    top: 10px;
    left: 0px;
    -webkit-animation-delay: 0.1s;
    animation-delay: 0.1s;
  }
  .object:nth-child(4) {
    top: 10px;
    left: 50px;
    -webkit-animation-delay: 0.1s;
    animation-delay: 0.1s;
  }
  .object:nth-child(5) {
    top: 20px;
    left: 0px;
    -webkit-animation-delay: 0.2s;
    animation-delay: 0.2s;
  }
  .object:nth-child(6) {
    top: 20px;
    left: 50px;
    -webkit-animation-delay: 0.2s;
    animation-delay: 0.2s;
  }
  .object:nth-child(7) {
    top: 30px;
    left: 0px;
    -webkit-animation-delay: 0.3s;
    animation-delay: 0.3s;
  }
  .object:nth-child(8) {
    top: 30px;
    left: 50px;
    -webkit-animation-delay: 0.3s;
    animation-delay: 0.3s;
  }
  .object:nth-child(9) {
    top: 40px;
    left: 0px;
    -webkit-animation-delay: 0.4s;
    animation-delay: 0.4s;
  }
  .object:nth-child(10) {
    top: 40px;
    left: 50px;
    -webkit-animation-delay: 0.4s;
    animation-delay: 0.4s;
  }
  .object:nth-child(11) {
    top: 50px;
    left: 0px;
    -webkit-animation-delay: 0.5s;
    animation-delay: 0.5s;
  }
  .object:nth-child(12) {
    top: 50px;
    left: 50px;
    -webkit-animation-delay: 0.5s;
    animation-delay: 0.5s;
  }
  .object:nth-child(13) {
    top: 60px;
    left: 0px;
    -webkit-animation-delay: 0.6s;
    animation-delay: 0.6s;
  }
  .object:nth-child(14) {
    top: 60px;
    left: 50px;
    -webkit-animation-delay: 0.6s;
    animation-delay: 0.6s;
  }
  .object:nth-child(15) {
    top: 70px;
    left: 0px;
    -webkit-animation-delay: 0.7s;
    animation-delay: 0.7s;
  }
  .object:nth-child(16) {
    top: 70px;
    left: 50px;
    -webkit-animation-delay: 0.7s;
    animation-delay: 0.7s;
  }
  .object:nth-child(17) {
    top: 80px;
    left: 0px;
    -webkit-animation-delay: 0.8s;
    animation-delay: 0.8s;
  }
  .object:nth-child(18) {
    top: 80px;
    left: 50px;
    -webkit-animation-delay: 0.8s;
    animation-delay: 0.8s;
  }
  .object:nth-child(19) {
    top: 90px;
    left: 0px;
    -webkit-animation-delay: 0.9s;
    animation-delay: 0.9s;
  }
  .object:nth-child(20) {
    top: 90px;
    left: 50px;
    -webkit-animation-delay: 0.9s;
    animation-delay: 0.9s;
  }

  @-webkit-keyframes animate_right29 {
    50% {
      -ms-transform: translate(200px, -200px) rotate(180deg);
      -webkit-transform: translate(200px, -200px) rotate(180deg);
      transform: translate(200px, -200px) rotate(180deg);
    }
  }

  @keyframes animate_right29 {
    50% {
      -ms-transform: translate(200px, -200px) rotate(180deg);
      -webkit-transform: translate(200px, -200px) rotate(180deg);
      transform: translate(200px, -200px) rotate(180deg);
    }
  }

  @-webkit-keyframes animate_left29 {
    50% {
      -ms-transform: translate(-200px, -200px) rotate(180deg);
      -webkit-transform: translate(-200px, -200px) rotate(180deg);
      transform: translate(-200px, -200px) rotate(180deg);
    }
  }

  @keyframes animate_left29 {
    50% {
      -ms-transform: translate(-200px, -200px) rotate(180deg);
      -webkit-transform: translate(-200px, -200px) rotate(180deg);
      transform: translate(-200px, -200px) rotate(180deg);
    }
  }
}
.loading-various-10 {
  .loading {
    background-color: #d64700;
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
    position: absolute;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 20px solid #fff;
  }
  .object:nth-child(25) {
    bottom: 0px;
    left: 80px;
    -webkit-animation: animate_2530 3s infinite ease-in-out;
    animation: animate_2530 3s infinite ease-in-out;
  }
  .object:nth-child(24) {
    bottom: 0px;
    left: 60px;
    -webkit-animation: animate_2430 3s infinite ease-in-out;
    animation: animate_2430 3s infinite ease-in-out;
  }
  .object:nth-child(23) {
    bottom: 0px;
    left: 40px;
    -webkit-animation: animate_2330 3s infinite ease-in-out;
    animation: animate_2330 3s infinite ease-in-out;
  }
  .object:nth-child(22) {
    bottom: 0px;
    left: 20px;
    -webkit-animation: animate_2230 3s infinite ease-in-out;
    animation: animate_2230 3s infinite ease-in-out;
  }
  .object:nth-child(21) {
    bottom: 0px;
    left: 0px;
    -webkit-animation: animate_2130 3s infinite ease-in-out;
    animation: animate_2130 3s infinite ease-in-out;
  }
  .object:nth-child(20) {
    bottom: 0px;
    left: 70px;
    -ms-transform: rotate(180deg);
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
    -webkit-animation: animate_2030 3s infinite ease-in-out;
    animation: animate_2030 3s infinite ease-in-out;
  }
  .object:nth-child(19) {
    bottom: 0px;
    left: 50px;
    -ms-transform: rotate(180deg);
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
    -webkit-animation: animate_1930 3s infinite ease-in-out;
    animation: animate_1930 3s infinite ease-in-out;
  }
  .object:nth-child(18) {
    bottom: 0px;
    left: 30px;
    -ms-transform: rotate(180deg);
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
    -webkit-animation: animate_1830 3s infinite ease-in-out;
    animation: animate_1830 3s infinite ease-in-out;
  }
  .object:nth-child(17) {
    bottom: 0px;
    left: 10px;
    -ms-transform: rotate(180deg);
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
    -webkit-animation: animate_1730 3s infinite ease-in-out;
    animation: animate_1730 3s infinite ease-in-out;
  }
  .object:nth-child(16) {
    bottom: 20px;
    left: 70px;
    -webkit-animation: animate_1630 3s infinite ease-in-out;
    animation: animate_1630 3s infinite ease-in-out;
  }
  .object:nth-child(15) {
    bottom: 20px;
    left: 50px;
    -webkit-animation: animate_1530 3s infinite ease-in-out;
    animation: animate_1530 3s infinite ease-in-out;
  }
  .object:nth-child(14) {
    bottom: 20px;
    left: 30px;
    -webkit-animation: animate_1430 3s infinite ease-in-out;
    animation: animate_1430 3s infinite ease-in-out;
  }
  .object:nth-child(13) {
    bottom: 20px;
    left: 10px;
    -webkit-animation: animate_1330 3s infinite ease-in-out;
    animation: animate_1330 3s infinite ease-in-out;
  }
  .object:nth-child(12) {
    bottom: 20px;
    left: 60px;
    -ms-transform: rotate(180deg);
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
    -webkit-animation: animate_1230 3s infinite ease-in-out;
    animation: animate_1230 3s infinite ease-in-out;
  }
  .object:nth-child(11) {
    bottom: 20px;
    left: 40px;
    -ms-transform: rotate(180deg);
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
    -webkit-animation: animate_1130 3s infinite ease-in-out;
    animation: animate_1130 3s infinite ease-in-out;
  }
  .object:nth-child(10) {
    bottom: 20px;
    left: 20px;
    -ms-transform: rotate(180deg);
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
    -webkit-animation: animate_1030 3s infinite ease-in-out;
    animation: animate_1030 3s infinite ease-in-out;
  }
  .object:nth-child(9) {
    bottom: 40px;
    left: 60px;
    -webkit-animation: animate_930 3s infinite ease-in-out;
    animation: animate_930 3s infinite ease-in-out;
  }
  .object:nth-child(8) {
    bottom: 40px;
    left: 40px;
    -webkit-animation: animate_830 3s infinite ease-in-out;
    animation: animate_830 3s infinite ease-in-out;
  }
  .object:nth-child(7) {
    bottom: 40px;
    left: 20px;
    -webkit-animation: animate_730 3s infinite ease-in-out;
    animation: animate_730 3s infinite ease-in-out;
  }
  .object:nth-child(6) {
    bottom: 40px;
    left: 50px;
    -ms-transform: rotate(180deg);
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
    -webkit-animation: animate_630 3s infinite ease-in-out;
    animation: animate_630 3s infinite ease-in-out;
  }
  .object:nth-child(5) {
    bottom: 40px;
    left: 30px;
    -ms-transform: rotate(180deg);
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
    -webkit-animation: animate_530 3s infinite ease-in-out;
    animation: animate_530 3s infinite ease-in-out;
  }
  .object:nth-child(4) {
    bottom: 60px;
    left: 50px;
    -webkit-animation: animate_430 3s infinite ease-in-out;
    animation: animate_430 3s infinite ease-in-out;
  }
  .object:nth-child(3) {
    bottom: 60px;
    left: 30px;
    -webkit-animation: animate_330 3s infinite ease-in-out;
    animation: animate_330 3s infinite ease-in-out;
  }
  .object:nth-child(2) {
    bottom: 60px;
    left: 40px;
    -ms-transform: rotate(180deg);
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
    -webkit-animation: animate_230 3s infinite ease-in-out;
    animation: animate_230 3s infinite ease-in-out;
  }
  .object:nth-child(1) {
    bottom: 80px;
    left: 40px;
    -webkit-animation: animate_130 3s infinite ease-in-out;
    animation: animate_130 3s infinite ease-in-out;
  }

  @-webkit-keyframes animate_130 {
    50% {
      -ms-transform: translate(0, -100px) rotate(180deg);
      -webkit-transform: translate(0, -100px) rotate(180deg);
      transform: translate(0, -100px) rotate(180deg);
    }
  }
  @keyframes animate_130 {
    50% {
      -ms-transform: translate(0, -100px) rotate(180deg);
      -webkit-transform: translate(0, -100px) rotate(180deg);
      transform: translate(0, -100px) rotate(180deg);
    }
  }

  @-webkit-keyframes animate_230 {
    50% {
      -ms-transform: translate(0, -80px) rotate(180deg);
      -webkit-transform: translate(0, -80px) rotate(180deg);
      transform: translate(0, -80px) rotate(180deg);
    }
  }
  @keyframes animate_230 {
    50% {
      -ms-transform: translate(0, -80px) rotate(180deg);
      -webkit-transform: translate(0, -80px) rotate(180deg);
      transform: translate(0, -80px) rotate(180deg);
    }
  }

  @-webkit-keyframes animate_330 {
    50% {
      -ms-transform: translate(-100px, -100px) rotate(180deg);
      -webkit-transform: translate(-100px, -100px) rotate(180deg);
      transform: translate(-100px, -100px) rotate(180deg);
    }
  }
  @keyframes animate_330 {
    50% {
      -ms-transform: translate(-100px, -100px) rotate(180deg);
      -webkit-transform: translate(-100px, -100px) rotate(180deg);
      transform: translate(-100px, -100px) rotate(180deg);
    }
  }

  @-webkit-keyframes animate_430 {
    50% {
      -ms-transform: translate(100px, -100px) rotate(180deg);
      -webkit-transform: translate(100px, -100px) rotate(180deg);
      transform: translate(100px, -100px) rotate(180deg);
    }
  }
  @keyframes animate_430 {
    50% {
      -ms-transform: translate(100px, -100px) rotate(180deg);
      -webkit-transform: translate(100px, -100px) rotate(180deg);
      transform: translate(100px, -100px) rotate(180deg);
    }
  }

  @-webkit-keyframes animate_530 {
    50% {
      -ms-transform: translate(-40px, -100px) rotate(180deg);
      -webkit-transform: translate(-40px, -100px) rotate(180deg);
      transform: translate(-40px, -100px) rotate(180deg);
    }
  }
  @keyframes animate_530 {
    50% {
      -ms-transform: translate(-40px, -100px) rotate(180deg);
      -webkit-transform: translate(-40px, -100px) rotate(180deg);
      transform: translate(-40px, -100px) rotate(180deg);
    }
  }

  @-webkit-keyframes animate_630 {
    50% {
      -ms-transform: translate(40px, -100px) rotate(180deg);
      -webkit-transform: translate(40px, -100px) rotate(180deg);
      transform: translate(40px, -100px) rotate(180deg);
    }
  }
  @keyframes animate_630 {
    50% {
      -ms-transform: translate(40px, -100px) rotate(180deg);
      -webkit-transform: translate(40px, -100px) rotate(180deg);
      transform: translate(40px, -100px) rotate(180deg);
    }
  }

  @-webkit-keyframes animate_730 {
    50% {
      -ms-transform: translate(-80px, -60px) rotate(180deg);
      -webkit-transform: translate(-80px, -60px) rotate(180deg);
      transform: translate(-80px, -60px) rotate(180deg);
    }
  }
  @keyframes animate_730 {
    50% {
      -ms-transform: translate(-80px, -60px) rotate(180deg);
      -webkit-transform: translate(-80px, -60px) rotate(180deg);
      transform: translate(-80px, -60px) rotate(180deg);
    }
  }

  @-webkit-keyframes animate_830 {
    50% {
      -ms-transform: translate(0, -60px) rotate(180deg);
      -webkit-transform: translate(0, -60px) rotate(180deg);
      transform: translate(0, -60px) rotate(180deg);
    }
  }
  @keyframes animate_830 {
    50% {
      -ms-transform: translate(0, -60px) rotate(180deg);
      -webkit-transform: translate(0, -60px) rotate(180deg);
      transform: translate(0, -60px) rotate(180deg);
    }
  }

  @-webkit-keyframes animate_930 {
    50% {
      -ms-transform: translate(80px, -60px) rotate(180deg);
      -webkit-transform: translate(80px, -60px) rotate(180deg);
      transform: translate(80px, -60px) rotate(180deg);
    }
  }
  @keyframes animate_930 {
    50% {
      -ms-transform: translate(80px, -60px) rotate(180deg);
      -webkit-transform: translate(80px, -60px) rotate(180deg);
      transform: translate(80px, -60px) rotate(180deg);
    }
  }

  @-webkit-keyframes animate_1030 {
    50% {
      -ms-transform: translate(-100px, -40px) rotate(180deg);
      -webkit-transform: translate(-100px, -40px) rotate(180deg);
      transform: translate(-100px, -40px) rotate(180deg);
    }
  }
  @keyframes animate_1030 {
    50% {
      -ms-transform: translate(-100px, -40px) rotate(180deg);
      -webkit-transform: translate(-100px, -40px) rotate(180deg);
      transform: translate(-100px, -40px) rotate(180deg);
    }
  }

  @-webkit-keyframes animate_1130 {
    50% {
      -ms-transform: translate(0, -40px) rotate(180deg);
      -webkit-transform: translate(0, -40px) rotate(180deg);
      transform: translate(0, -40px) rotate(180deg);
    }
  }
  @keyframes animate_1130 {
    50% {
      -ms-transform: translate(0, -40px) rotate(180deg);
      -webkit-transform: translate(0, -40px) rotate(180deg);
      transform: translate(0, -40px) rotate(180deg);
    }
  }

  @-webkit-keyframes animate_1230 {
    50% {
      -ms-transform: translate(100px, -40px) rotate(180deg);
      -webkit-transform: translate(100px, -40px) rotate(180deg);
      transform: translate(100px, -40px) rotate(180deg);
    }
  }
  @keyframes animate_1230 {
    50% {
      -ms-transform: translate(100px, -40px) rotate(180deg);
      -webkit-transform: translate(100px, -40px) rotate(180deg);
      transform: translate(100px, -40px) rotate(180deg);
    }
  }

  @-webkit-keyframes animate_1330 {
    50% {
      -ms-transform: translate(80px, -80px) rotate(180deg);
      -webkit-transform: translate(80px, -80px) rotate(180deg);
      transform: translate(80px, -80px) rotate(180deg);
    }
  }
  @keyframes animate_1330 {
    50% {
      -ms-transform: translate(80px, -80px) rotate(180deg);
      -webkit-transform: translate(80px, -80px) rotate(180deg);
      transform: translate(80px, -80px) rotate(180deg);
    }
  }

  @-webkit-keyframes animate_1430 {
    50% {
      -ms-transform: translate(80px, -40px) rotate(180deg);
      -webkit-transform: translate(80px, -40px) rotate(180deg);
      transform: translate(80px, -40px) rotate(180deg);
    }
  }
  @keyframes animate_1430 {
    50% {
      -ms-transform: translate(80px, -40px) rotate(180deg);
      -webkit-transform: translate(80px, -40px) rotate(180deg);
      transform: translate(80px, -40px) rotate(180deg);
    }
  }

  @-webkit-keyframes animate_1530 {
    50% {
      -ms-transform: translate(-60px, -80px) rotate(180deg);
      -webkit-transform: translate(-60px, -80px) rotate(180deg);
      transform: translate(-60px, -80px) rotate(180deg);
    }
  }
  @keyframes animate_1530 {
    50% {
      -ms-transform: translate(-60px, -80px) rotate(180deg);
      -webkit-transform: translate(-60px, -80px) rotate(180deg);
      transform: translate(-60px, -80px) rotate(180deg);
    }
  }

  @-webkit-keyframes animate_1630 {
    50% {
      -ms-transform: translate(-100px, -40px) rotate(180deg);
      -webkit-transform: translate(-100px, -40px) rotate(180deg);
      transform: translate(-100px, -40px) rotate(180deg);
    }
  }
  @keyframes animate_1630 {
    50% {
      -ms-transform: translate(-100px, -40px) rotate(180deg);
      -webkit-transform: translate(-100px, -40px) rotate(180deg);
      transform: translate(-100px, -40px) rotate(180deg);
    }
  }

  @-webkit-keyframes animate_1730 {
    50% {
      -ms-transform: translate(-100px, -20px) rotate(180deg);
      -webkit-transform: translate(-100px, -20px) rotate(180deg);
      transform: translate(-100px, -20px) rotate(180deg);
    }
  }
  @keyframes animate_1730 {
    50% {
      -ms-transform: translate(-100px, -20px) rotate(180deg);
      -webkit-transform: translate(-100px, -20px) rotate(180deg);
      transform: translate(-100px, -20px) rotate(180deg);
    }
  }

  @-webkit-keyframes animate_1830 {
    50% {
      -ms-transform: translate(-60px, -20px) rotate(180deg);
      -webkit-transform: translate(-60px, -20px) rotate(180deg);
      transform: translate(-60px, -20px) rotate(180deg);
    }
  }
  @keyframes animate_1830 {
    50% {
      -ms-transform: translate(-60px, -20px) rotate(180deg);
      -webkit-transform: translate(-60px, -20px) rotate(180deg);
      transform: translate(-60px, -20px) rotate(180deg);
    }
  }

  @-webkit-keyframes animate_1930 {
    50% {
      -ms-transform: translate(0, -20px) rotate(180deg);
      -webkit-transform: translate(0, -20px) rotate(180deg);
      transform: translate(0, -20px) rotate(180deg);
    }
  }
  @keyframes animate_1930 {
    50% {
      -ms-transform: translate(0, -20px) rotate(180deg);
      -webkit-transform: translate(0, -20px) rotate(180deg);
      transform: translate(0, -20px) rotate(180deg);
    }
  }

  @-webkit-keyframes animate_2030 {
    50% {
      -ms-transform: translate(60px, -20px) rotate(180deg);
      -webkit-transform: translate(60px, -20px) rotate(180deg);
      transform: translate(60px, -20px) rotate(180deg);
    }
  }
  @keyframes animate_2030 {
    50% {
      -ms-transform: translate(60px, -20px) rotate(180deg);
      -webkit-transform: translate(60px, -20px) rotate(180deg);
      transform: translate(60px, -20px) rotate(180deg);
    }
  }

  @-webkit-keyframes animate_2130 {
    50% {
      -ms-transform: translate(-80px, 30px) rotate(180deg);
      -webkit-transform: translate(-80px, 30px) rotate(180deg);
      transform: translate(-80px, 30px) rotate(180deg);
    }
  }
  @keyframes animate_2130 {
    50% {
      -ms-transform: translate(-80px, 30px) rotate(180deg);
      -webkit-transform: translate(-80px, 30px) rotate(180deg);
      transform: translate(-80px, 30px) rotate(180deg);
    }
  }

  @-webkit-keyframes animate_2230 {
    50% {
      -ms-transform: translate(-40px, 30px) rotate(180deg);
      -webkit-transform: translate(-40px, 30px) rotate(180deg);
      transform: translate(-40px, 30px) rotate(180deg);
    }
  }
  @keyframes animate_2230 {
    50% {
      -ms-transform: translate(-40px, 30px) rotate(180deg);
      -webkit-transform: translate(-40px, 30px) rotate(180deg);
      transform: translate(-40px, 30px) rotate(180deg);
    }
  }

  @-webkit-keyframes animate_2330 {
    50% {
      -ms-transform: translate(0, 30px) rotate(180deg);
      -webkit-transform: translate(0, 30px) rotate(180deg);
      transform: translate(0, 30px) rotate(180deg);
    }
  }
  @keyframes animate_2330 {
    50% {
      -ms-transform: translate(0, 30px) rotate(180deg);
      -webkit-transform: translate(0, 30px) rotate(180deg);
      transform: translate(0, 30px) rotate(180deg);
    }
  }

  @-webkit-keyframes animate_2430 {
    50% {
      -ms-transform: translate(40px, 30px) rotate(180deg);
      -webkit-transform: translate(40px, 30px) rotate(180deg);
      transform: translate(40px, 30px) rotate(180deg);
    }
  }
  @keyframes animate_2430 {
    50% {
      -ms-transform: translate(40px, 30px) rotate(180deg);
      -webkit-transform: translate(40px, 30px) rotate(180deg);
      transform: translate(40px, 30px) rotate(180deg);
    }
  }

  @-webkit-keyframes animate_2530 {
    50% {
      -ms-transform: translate(80px, 30px) rotate(180deg);
      -webkit-transform: translate(80px, 30px) rotate(180deg);
      transform: translate(80px, 30px) rotate(180deg);
    }
  }
  @keyframes animate_2530 {
    50% {
      -ms-transform: translate(80px, 30px) rotate(180deg);
      -webkit-transform: translate(80px, 30px) rotate(180deg);
      transform: translate(80px, 30px) rotate(180deg);
    }
  }
}
</style>
