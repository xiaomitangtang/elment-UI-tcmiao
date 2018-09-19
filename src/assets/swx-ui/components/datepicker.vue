<template>
  <div class="date-pickers" @mouseleave="clearShow=false" :class="{'disabled':disabled}">
    <input type="text" :placeholder="placehoder" @click.stop="pikerClick"  @mouseenter="clearShow=true"   @focus="trueDateBox" :value="date" readonly/>
    <span class="data-picker-arrow"><i class="el-icon-date"></i></span>
    <span class="data-clear-span" v-show="!disabled&&clearable&&clearShow&&date" @click="day=0"><i class="el-icon-circle-close"></i></span>
    <transition name="datepickerfade">
      <div class="date-box" v-if="dateBoxFlag">
        <div class="weeks">
          <span v-for="(weekInfo,index) in week" :key="'swx-week'+index">{{ weekInfo }}</span>
        </div>
        <div class="day-select" @click.stop>
          <div>
            <button @click="reduceYear"><i class="el-icon-d-arrow-left"></i></button>
            <button @click="reduceMonth"><i class="el-icon-arrow-left"></i></button>
          </div>
          <div>
            <input type="text" @click="selected" v-model="year"/>年
            <input type="text" @click="selected" v-model="month"/>月
          </div>
          <div>
            <button @click="addMonth"><i class="el-icon-arrow-right"></i></button>
            <button @click="addYear"><i class="el-icon-d-arrow-right"></i></button>
          </div>
        </div>
        <div class="day-screen">
          <div class="days" @click="selectDay">
            <span v-for="(day,index) in previousMonth" class="previousMonth" :key="'previousMonth'+index"> {{ day }} </span>
            <span v-for="(day,index) in monthDay[month - 1]" :class="isActive(day)" class="currentMonth" :key="'monthDay'+index">{{ day }}</span>
            <span v-for="(day,index) in nextMonth" class="nextMonth" :key="'nextMonth'+index">{{ day }}</span>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "swx-datepicker",
  props: {
    value: {
      type: String
    },
    placehoder: {
      type: String,
      default: "日期"
    },
    clearable: {
      type: Boolean,
      default: true
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      resetFunc: "",
      dateBoxFlag: false,
      year: 0,
      month: 0,
      day: 0,
      previousMonth: [],
      nextMonth: [],
      week: ["日", "一", "二", "三", "四", "五", "六"],
      monthDay: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
      clearShow: false
    };
  },
  computed: {
    date() {
      if (this.year === 0 || this.month === 0 || this.day === 0) {
        return "";
      }
      return this.year + "-" + this.month + "-" + this.day;
    }
  },
  watch: {
    year: function(val) {
      let reg = /^[1-9]\d*$/g;
      if (!reg.test(val)) {
        let date = new Date();
        this.year = date.getFullYear();
      }
      if (val < 0) {
        this.year = 1;
      }
      if (val > 10000) {
        this.year = 10000;
      }
      this.dayScreen();
    },
    month: function(val) {
      let reg = /^[1-9]\d*$/g;
      if (!reg.test(val)) {
        let date = new Date();
        this.month = date.getMonth() + 1;
      }
      if (val < 1) {
        this.month = 1;
      }
      if (val > 12) {
        this.month = 12;
      }
      this.dayScreen();
    },
    date(val) {
      this.clearShow = false;
      this.$emit("input", val);
    }
  },
  methods: {
    // 突出显示当前日期
    isActive(index) {
      if (index === this.day) {
        return {
          active: true
        };
      }
    },
    // 显示日期盒子并初始化
    trueDateBox() {
      if (this.disabled) return;
      if (this.date === "") {
        let date = new Date();
        this.year = date.getFullYear();
        if (this.isLeapYear(this.year)) {
          this.monthDay[1] = 29;
        } else {
          this.monthDay[1] = 28;
        }
        this.month = date.getMonth() + 1;
        this.day = date.getDate();
      }
      this.dayScreen();
      //        this.dateBoxFlag = true
    },
    // 增减年份
    addYear() {
      this.year++;
      if (this.isLeapYear(this.year)) {
        this.monthDay[1] = 29;
      } else {
        this.monthDay[1] = 28;
      }
    },
    reduceYear() {
      this.year--;
      if (this.isLeapYear(this.year)) {
        this.monthDay[1] = 29;
      } else {
        this.monthDay[1] = 28;
      }
    },
    // 增减月份
    addMonth() {
      this.month++;
      if (this.month > 12) {
        this.month = 1;
        this.year++;
      }
    },
    reduceMonth() {
      this.month--;
      if (this.month < 1) {
        this.month = 12;
        this.year--;
      }
    },
    // 获取input里的文字
    selected(e) {
      e.target.select();
    },
    // 选择日期
    selectDay(e) {
      let targetClass = e.target.className;
      if (targetClass === "previousMonth") {
        if (this.month === 1) {
          this.month = 12;
          this.year--;
        } else {
          this.month = this.month - 1;
        }
        this.day = parseInt(e.target.innerText);
      } else if (targetClass === "nextMonth") {
        if (this.month === 12) {
          this.month = 1;
          this.year++;
        } else {
          this.month = this.month + 1;
        }
        this.day = parseInt(e.target.innerText);
      } else {
        this.day = parseInt(e.target.innerText);
      }
      this.dateBoxFlag = false;
    },
    // 日期显示
    dayScreen() {
      // 上一个月
      let firstDate = new Date(this.year, this.month - 1, 1);
      let firstWeek = firstDate.getDay();
      let preMonthDay = null;
      if (this.month === 1) {
        preMonthDay = this.monthDay[11];
      } else {
        preMonthDay = this.monthDay[this.month - 2];
      }
      for (let i = 0; i < preMonthDay; i++) {
        this.previousMonth[i] = i + 1;
      }
      if (firstWeek === 0) {
        this.previousMonth = this.previousMonth.slice(-7);
      } else {
        this.previousMonth = this.previousMonth.slice(-firstWeek);
      }
      // 下一个月
      let endDate = new Date(
        this.year,
        this.month - 1,
        this.monthDay[this.month - 1]
      );
      let endWeek = endDate.getDay();
      let nextMonthDay = null;
      if (this.month === 12) {
        nextMonthDay = this.monthDay[0];
      } else {
        nextMonthDay = this.monthDay[this.month];
      }
      for (let i = 0; i < nextMonthDay; i++) {
        this.nextMonth[i] = i + 1;
      }
      if (endWeek === 6) {
        this.nextMonth = this.nextMonth.slice(0, 7);
      } else {
        this.nextMonth = this.nextMonth.slice(0, 6 - endWeek);
      }
    },
    // 判断是否是闰年
    isLeapYear(year) {
      return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
    },
    pikerClick() {
      if (this.disabled) return;
      this.dateBoxFlag = true;
    }
  },
  mounted() {
    this.resetFunc = () => {
      this.dateBoxFlag = false;
    };
    document.addEventListener("click", this.resetFunc);
    if (this.value) {
      var temdate = this.value.split("-");
      this.year = temdate[0];
      this.month = temdate[1];
      this.day = temdate[2];
    }
  },
  beforeDestroy() {
    document.removeEventListener("click", this.resetFunc);
  }
};
</script>

<style lang="less" scoped>
.date-pickers {
  position: relative;
  width: 290px;
  height: 32px;
  &.disabled {
    > input {
      background-color: rgba(234, 234, 234, 0.8);
      cursor: not-allowed;
    }
  }
  > .data-picker-arrow {
    position: absolute;
    right: 13px;
    color: #cccccc;
    line-height: 32px;
  }
  > .data-clear-span {
    position: absolute;
    right: 35px;
    top: 50%;
    width: 15px;
    height: 15px;
    margin-top: -7.5px;
    text-align: center;
    line-height: 13px;
    border-radius: 50%;
    color: #ccc;
    cursor: pointer;
    &:hover {
      color: #a6a6a6;
    }
  }
  > input {
    width: 100%;
    min-width: 100px;
    height: 32px;
    border-radius: 3px;
    text-indent: 0.2rem;
    border: 1px solid #ccc;
    box-sizing: border-box;
    color: #333333;
    padding: 0 5px;
    cursor: pointer;
    user-select: none;
  }
  .date-box {
    position: absolute;
    top: 44px;
    left: 0.5px;
    border: 1px solid #a0ceed;
    /*width: 100%;*/
    width: 296px;
    box-shadow: 2px 2px 2px #eee;
    background: white;
    z-index: 99;
    div.day-select {
      /*display: flex;*/
      height: 30px;
      line-height: 30px;
      color: #888888;
      & > div {
        float: left;
        text-align: center;
        color: #000;
      }
      input,
      button {
        border: none;
        border-radius: 3px;
        background: white;
        text-align: center;
        outline: none;
        cursor: pointer;
      }
      button {
        color: #228cd6;
      }
      button:active {
        background-color: #228cd6;
        color: #ffffff;
      }
      input {
        line-height: 22px;
      }
      > div:nth-child(1),
      > div:nth-child(3) {
        text-align: center;
        width: 20%;
      }
      > div:nth-child(2) {
        width: 60%;
        display: flex;
        justify-content: center;
        input:hover {
          background: #eee;
        }
        input:nth-child(1) {
          width: 50px;
        }
        input:nth-child(2) {
          width: 30px;
        }
      }
    }
    div.day-screen {
      > div {
        width: 100%;
        /*padding: 0 5px;*/
        font-size: 14px;
        line-height: 40px;
        flex-wrap: wrap;
        span {
          display: inline-block;
          width: 40px;
          margin: 1px 1px 0;
          height: 40px;
          text-align: center;
          line-height: 40px;
        }
      }
      > .days {
        padding-bottom: 10px;
        span {
          cursor: pointer;
          color: black;

          &:hover,
          &.active {
            background: #1987d4;
            border-radius: 3px;
            color: white;
          }
          &:nth-child(7n),
          &:nth-child(7n + 1) {
            color: #e82323;
          }
        }
        span.previousMonth,
        span.nextMonth {
          color: #888888;
        }
      }
    }
    .weeks {
      /*width: 100%;*/
      margin-right: -1px;
      height: 36px;
      line-height: 36px;
      background-color: #1987d4;
      color: #ffffff;
      text-align: center;
      margin-top: -1px;
      span {
        display: inline-block;
        width: 14.285%;
      }
    }
  }
  .datepickerfade-enter-active,
  .datepickerfade-leave-active {
    transition: opacity 0.3s, transform 0.3s;
    /*transition: all 0.5s;*/
  }
  .datepickerfade-enter,
  .datepickerfade-leave-active {
    opacity: 0;
    transform: translateY(-15px);
  }
}
</style>
