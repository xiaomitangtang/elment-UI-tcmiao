<template>
    <div class='anka-form'>
        <div class="anka-form-part" v-for="(form,index) in anka?anka.CaseCardTemplete.TabsList:[]" :key="'form'+index">
            <div class="form-list-title">{{form.TabsName}}</div>
            <ul class="form-list-ul">
                <li class="form-list-item" :class="{'anka-form-active':activeItem===item}" @click="formClick(item)" v-for="(item,index2) in form.TableList" :key="'item'+index+index2">{{item.TableName}}</li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
  props: {
    anka: { type: Object }
  },
  data() {
    return {
      activeItem: null,
      forms: [
        {
          title: "受理情况",
          list: [{ text: "基本信息" }, { text: "侵犯知识产权情况" }]
        },
        {
          title: "嫌疑人审结及变更情况",
          list: [
            { text: "审结情况" },
            { text: "审结变更情况" },
            { text: "羁押必要性审查" }
          ]
        }
      ]
    };
  },
  methods: {
    formClick(item) {
      this.activeItem = item;
      this.$emit("ankaTableClick", item);
    }
  },
  mounted() {
    this.activeItem = this.anka
      ? this.anka.CaseCardTemplete.TabsList[0].TableList[0]
      : null;
  }
};
</script>
<style lang="less">
.anka-form {
  padding: 20px 15px;
  height: 100%;
  .anka-form-part {
    .form-list-title {
      color: #40638e;
      font-weight: 600;
      font-size: 14px;
    }
    .form-list-ul {
      /*margin: 0;*/
      padding: 0;
      list-style: none;
      .form-list-item {
        position: relative;
        border-bottom: 1px solid #d5e0ee;
        min-height: 40px;
        line-height: 40px;
        list-style: none;
        font-size: 13px;
        color: #7b99b6;
        padding-left: 20px;
        cursor: pointer;
        &::before {
          content: "";
          position: absolute;
          top: 50%;
          left: 8px;
          margin-top: -2px;
          width: 4px;
          height: 4px;
          background-color: #abc1de;
          border-radius: 50%;
        }
        &:first-child {
          border-top: 1px solid #d5e0ee;
        }
      }
      .anka-form-active {
        background-color: #ddeeff;
        color: #40638e;
        &::before {
          background-color: #40638e;
        }
      }
    }
  }
}
</style>
