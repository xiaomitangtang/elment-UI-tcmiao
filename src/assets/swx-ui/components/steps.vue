<template>
    <div class='swx-steps' :style="stepsBoxStyle" :class="swxStepslineBoxClass">
        <div v-if="type==='theme2'"  :style="{ width: stepWidth + 'px',backgroundColor:getColor(index)}" class="swx-step"  v-for="(step ,index) in data" :key="'swx-step'+index">
            <span class="swx-step-index" :style="{backgroundColor:backgroundColor,borderColor:getColor(index),color:getColor(index)}">{{index+1}}</span>
            <span class="swx-step-text">
                {{step.title}}
            </span>
        </div>
        <div v-if="type==='theme3'"  :style="{ width: stepWidth + 'px'}" class="swx-step" :class="{'swx-step-active':index===active}" v-for="(step ,index) in data" :key="'swx-step'+index">
            <span class="swx-step-index" :style="{backgroundColor:backgroundColor}">{{index+1}}</span>
            <span class="swx-step-text">
                {{step.title}}
            </span>
        </div>
        <div v-if="type!=='theme2'&&type!=='theme3'" :style="{ width: stepWidth + 'px'}" class="swx-step"  v-for="(step ,index) in data" :key="'swx-step'+index">
            <div class="swx-step-line" v-if="index<data.length-1" :style="{borderColor:getColor(index)}"></div>
            <span class="swx-step-index" :style="{backgroundColor:backgroundColor,borderColor:getColor(index),color:getColor(index)}">{{index+1}}</span>
            <span class="swx-step-text" :style="{color:getColor(index)}">
                <div>{{step.title}}</div>
                <div>{{step.content}}</div>
            </span>
        </div>

    </div>
</template>
<script>
export default {
  name: "swx-steps",
  props: {
    active: { type: Number, default: 0 },
    type: { type: String, default: "default" },
    backgroundColor: {
      type: String,
      default: "#ffffff"
    },
    activeColor: { type: String, default: "#55b9b7" },
    defaultColor: { type: String, default: "#358dd7" },
    stepWidth: { type: Number, default: 130 },
    data: {
      type: Array
    }
  },
  data() {
    return {};
  },
  methods: {
    getColor(index) {
      if (index === this.active) {
        return this.activeColor;
      }
      return this.defaultColor;
    }
  },
  computed: {
    stepsBoxStyle() {
      let temp = {
        backgroundColor: this.backgroundColor,
        width: this.stepWidth * this.data.length + 30 + "px"
      };
      return temp;
    },
    swxStepslineBoxClass() {
      if (this.type === "theme2") {
        return "swx-steps-theme2";
      } else if (this.type === "theme3") {
        return "swx-steps-theme3";
      } else {
        return "swx-steps-simple";
      }
    }
  }
};
</script>
<style lang="less">
.swx-steps {
  display: inline-block;
  padding: 10px;
  .swx-step {
    display: inline-block;
  }
  &.swx-steps-simple {
    height: 110px;
    .swx-step {
      position: relative;
      width: 130px;
      .swx-step-line {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        border-top: 2px solid #5da4df;
      }
      .swx-step-index {
        position: absolute;
        top: -15px;
        left: 0;
        width: 30px;
        height: 30px;
        border: 2px solid #5da4df;
        border-radius: 50%;
        text-align: center;
        line-height: 30px;
      }
      .swx-step-text {
        position: absolute;
        top: 30px;
        left: 0;
        width: 100%;
        font-size: 13px;
      }
    }
  }
  &.swx-steps-theme2 {
    .swx-step {
      position: relative;
      height: 26px;
      background-color: #358dd7;
      border-radius: 13px;
      .swx-step-index {
        position: absolute;
        right: -18px;
        top: -5px;
        z-index: 2;
        width: 33px;
        height: 33px;
        text-align: center;
        line-height: 33px;
        color: #3a90d8;
        border-radius: 50%;
        border: 2px solid #3a90d8;
      }
      .swx-step-text {
        display: inline-block;
        width: 100%;
        height: 100%;
        color: #ffffff;
        line-height: 26px;
        text-align: center;
      }
    }
  }
  &.swx-steps-theme3 {
    .swx-step {
      height: 40px;
      background: url("../icons/step-theme3.png") no-repeat center center/100%
        100%;
      .swx-step-index {
        display: inline-block;
        width: 25px;
        height: 25px;
        text-align: center;
        line-height: 25px;
        margin-left: 30px;
        margin-top: 7px;
        border-radius: 50%;
        font-weight: 900;
        color: #7b7b7b;
      }
      .swx-step-text {
        margin-left: 10px;
      }
    }
    .swx-step-active {
      background-image: url("../icons/step-theme3-active.png");
      .swx-step-index {
        color: #ffffff;
        background-color: #2d69bb !important;
      }
      .swx-step-text {
        color: #ffffff;
      }
    }
  }
}
</style>
