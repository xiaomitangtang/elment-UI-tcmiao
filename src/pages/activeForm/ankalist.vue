<template>
    <div class='anka'>
        <div class="anka-title"><i class="anka-title-icon"></i> 案卡信息</div>
        <div class="anka-item" v-for="(anka,index) in ankalist"
             :class="{'active-anka-item':active===index}" :key="'anka'+index"
            @click="ankaClick(index,anka)"
        >
            {{anka.text}}
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      active: 0,
      ankalist: [
        { text: "审查起诉受理情况" },
        { text: "案件办理及审结情况" },
        { text: "审查起诉出庭、判决情况" },
        { text: "单位犯罪情况" },
        { text: "侦查活动监督情况" },
        { text: "审判活动监督情况" },
        { text: "检察建议及线索移交情况" },
        { text: "受理信息" }
      ]
    };
  },
  methods: {
    ankaClick(index) {
      this.active = index;
    }
  }
};
</script>
<style lang="less">
.anka {
  height: 100%;
  width: 100%;
  border: 1px solid #abc1de;
  border-top: 3px solid #2d6fd0;
  background-color: #e4f0fb;
  font-size: 14px;
  .anka-title {
    height: 40px;
    line-height: 36px;
    padding-left: 10px;
    border-bottom: 1px solid #c7d8ec;
    .anka-title-icon {
      display: inline-block;
      position: relative;
      top: 2px;
      width: 13px;
      height: 16px;
      background: url("./icons/anka-list-title-icon.png") no-repeat center
        center/100% 100%;
    }
  }
  .anka-item {
    min-height: 40px;
    padding-left: 10px;
    line-height: 40px;
    color: #3b6b9f;
    user-select: none;
    cursor: pointer;
    border-bottom: 1px solid #c7d8ec;
    &.active-anka-item {
      background-color: #658dc9;
      color: #ffffff;
    }
  }
}
</style>
