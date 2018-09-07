<template>
    <div>
        <el-button  size="small" @click="$emit('rmenuClick')" icon="el-icon-menu"></el-button>
        <span class="swx-ui-main-rh-ltext">同方赛威讯信息系统</span>
        <div class="swx-ui-main-rh-r">
            <div class="swx-ui-main-rh-ritem swx-ui-main-rh-power"></div>
            <div class="swx-ui-main-rh-ritem swx-ui-main-rh-bell"><div class="swx-ui-main-rh-ritem-badge">1</div></div>
            <div class="swx-ui-main-rh-ritem swx-ui-main-rh-bubble"><div class="swx-ui-main-rh-ritem-badge">23</div></div>
            <div class="swx-ui-main-rh-ruser">
                <span></span>
                欢迎您，系统管理员！
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style lang="less">
.swx-ui-main-rh-ltext {
  display: inline-block;
  margin-left: 22px;
  font-size: 24px;
  vertical-align: middle;
  color: #1865a7;
}
.swx-ui-main-rh-r {
  float: right;
  height: 100%;
  width: 500px;
  .swx-ui-main-rh-ritem {
    position: relative;
    float: right;
    top: 50%;
    margin: -13px 23px 0;
    width: 22px;
    height: 22px;
    background: no-repeat center center/100% 100%;
    cursor: pointer;
  }
  .swx-ui-main-rh-power {
    background-image: url("../icons/power.png");
  }
  .swx-ui-main-rh-bell {
    background-image: url("../icons/bell.png");
  }
  .swx-ui-main-rh-bubble {
    background-image: url("../icons/bubble.png");
  }
  .swx-ui-main-rh-ritem-badge {
    position: absolute;
    right: -4px;
    top: -8px;
    min-width: 14px;
    min-height: 14px;
    text-align: center;
    margin-right: -50%;
    padding: 0 4px;
    color: #fff;
    line-height: 14px;
    font-size: 12px;
    border-radius: 7px;
    background-color: #ff4800;
  }
  .swx-ui-main-rh-ruser {
    float: right;
    height: 100%;
    line-height: 60px;
    margin-right: 90px;
    span {
      display: inline-block;
      width: 22px;
      height: 22px;
      margin-right: 15px;
      background: url("../icons/user.png") no-repeat center center/100% 100%;
    }
  }
}
</style>
