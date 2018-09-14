<template>
    <div class='swx-switch' @click="changeValue" :class="{'swx-switch-type-btn':type==='btn','swx-switch-type-round':type==='round','active':value}">
        <div class="swx-switch-inner" >
            <span class="off">{{offText}}</span>
            <span class="circle"></span>
            <span class="on">{{onText}}</span>
        </div>
    </div>
</template>
<script>
export default {
  name: "swx-switch",
  props: {
    value: { type: Boolean, default: true },
    onText: { type: String, default: "on" },
    offText: { type: String, default: "off" },
    type: { type: String, default: "round" }
  },
  data() {
    return {};
  },
  methods: {
    changeValue() {
      this.$emit("input", !this.value);
    }
  }
};
</script>
<style lang="less">
.swx-switch {
  display: inline-block;
  overflow: hidden;
  user-select: none;
  cursor: pointer;
  &.swx-switch-type-round {
    width: 63px;
    height: 25px;
    border-radius: 13px;
    .swx-switch-inner {
      height: 100%;
      width: 150%;
      background-color: red;
      transition: margin-left 0.3s, background-color 0.3s;
    }
    &.active > .swx-switch-inner {
      margin-left: -50%;
      background-color: #15a663;
    }
    .off,
    .on,
    .circle {
      float: left;
      text-align: center;
      color: #fff;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      line-height: 25px;
    }
    .off {
      width: 40%;
    }
    .on {
      width: 40%;
    }
    .circle {
      position: relative;
      height: 80%;
      width: 20%;
      top: 10%;
      border-radius: 50%;
      background-color: #fff;
    }
  }
  &.swx-switch-type-btn {
    border-radius: 6px;
    width: 122px;
    height: 27px;
    background-color: #1677ac;
    color: #ffffff;
    .swx-switch-inner {
      position: relative;
      width: 100%;
      height: 100%;
      .off,
      .on {
        position: absolute;
        z-index: 2;
        width: 40%;
        height: 80%;
        top: 10%;
        text-align: center;
        line-height: 22px;
        color: #fff;
        overflow: hidden;
        box-sizing: border-box;
        white-space: nowrap;
        text-overflow: ellipsis;
        border-radius: 3px;
      }
      .off {
        left: 5%;
      }
      .on {
        left: 55%;
      }
      .circle {
        position: absolute;
        top: 11%;
        left: 5%;
        width: 40%;
        height: 80%;
        background-color: #2399df;
        border-radius: 3px;
        transition: left 0.3s;
      }
    }
    &.active {
      .circle {
        left: 55%;
      }
    }
  }
}
</style>
