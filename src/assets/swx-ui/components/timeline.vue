<template>
    <div class='swx-timeline' :class="swxTimelineBoxClass" :style="timelineboxStyle">
        <div class="line" :style="{height:itemsHeight}"></div>
        <div  v-if="type==='default'" class="swx-timeline-item" v-for="(time,index) in data" :key="'timeline'+index">
            <span class="swx-timeline-item-dot" :style="{backgroundColor:colors[index%colors.length]}"></span>
           <span class="swx-timeline-item-date"> {{dateFormat(time.date).all}}</span>
            <span  class="swx-timeline-item-content" :style="{backgroundColor:colors[index%colors.length]}">
                <span class="swx-timeline-item-content-arrow" :style="{backgroundColor:colors[index%colors.length]}"></span>
               <div class="swx-timeline-item-content-text">
                   <div class="swx-timeline-item-content-title" v-if="time.title">{{time.title}}</div>
                   {{time.content}}</div>
            </span>
        </div>
        <div  v-if="type==='theme2'" class="swx-timeline-item" v-for="(time,index) in data" :key="'timeline'+index">
            <span class="swx-timeline-item-date"  :style="{backgroundColor:colors[index%colors.length]}">
                 <span> {{dateFormat(time.date).all}}</span>
                 <span  class="swx-timeline-item-content" >
                 <div class="swx-timeline-item-content-title" v-if="time.title">{{time.title}}</div>
                 <div class="swx-timeline-item-content-text">{{time.content}}</div>
            </span>
            </span>
        </div>
        <div  v-if="type==='theme3'" class="swx-timeline-item" v-for="(time,index) in data" :key="'timeline'+index">
            <span class="swx-timeline-item-date"  :style="{backgroundColor:backgroundColor}" >
                 <div class="swx-timeline-item-day"> {{dateFormat(time.date).day}}</div>
                 <div class="swx-timeline-item-yearAndMonth"> {{dateFormat(time.date).yearAndMonth}}</div>
                 <span  class="swx-timeline-item-content" >
                 <div class="swx-timeline-item-content-title" v-if="time.title">{{time.title}}</div>
                 <div class="swx-timeline-item-content-text">{{time.content}}</div>
            </span>
            </span>
        </div>
    </div>
</template>
<script>
export default {
  name: "swx-timeline",
  props: {
    type: { type: String, default: "default" },
    height: { type: [Number, String], default: 400 },
    colors: {
      type: Array,
      default: () => ["#3b73b7", "#5b9bd5", "#e4a255", "#61b888", "#8e999c"]
    },
    backgroundColor: { type: String, default: "#ffffff" },
    data: {
      type: Array
    }
  },
  data() {
    return {};
  },
  methods: {
    dateFormat(date) {
      let temdate = new Date(date);
      let temp = {
        year: temdate.getFullYear(),
        month: temdate.getMonth() + 1,
        day: temdate.getDate(),
        all: `${temdate.getFullYear()}.${temdate.getMonth() +
          1}.${temdate.getDate()}`,
        yearAndMonth: `${temdate.getFullYear()}.${temdate.getMonth() + 1}`
      };
      if (isNaN(temp.year)) {
        let temarr = date.split("-");
        temp = {
          year: temarr[0],
          month: temarr[1],
          day: temarr[2],
          all: `${temarr[0]}.${temarr[1]}.${temarr[2]}`,
          yearAndMonth: `${temarr[0]}.${temarr[1]}`
        };
      }
      return temp;
    }
  },
  computed: {
    timelineboxStyle() {
      let temSty = {};
      if (typeof this.height === "number") {
        temSty.height = this.height + "px";
      } else if (typeof this.height === "string") {
        temSty.height = this.height;
      }
      temSty.backgroundColor = this.backgroundColor;
      return temSty;
    },
    swxTimelineBoxClass() {
      if (this.type === "default") {
        return "swx-timeline-simple";
      } else if (this.type === "theme2") {
        return "swx-timeline-theme2";
      } else if (this.type === "theme3") {
        return "swx-timeline-theme3";
      }
    },
    itemsHeight() {
      return this.data.length * 150 + "px";
    }
  }
};
</script>
<style lang="less">
.swx-timeline {
  position: relative;
  display: inline-block;
  width: 400px;
  padding: 10px;
  overflow: auto;
  .line {
    position: absolute;
    left: 30%;
    height: 100%;
    border-left: 2px solid #cccccc;
  }
  &.swx-timeline-simple {
    .line::before {
      content: "";
      position: absolute;
      top: -4px;
      left: -6px;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      border: 1px solid #cccccc;
      background-color: #fff;
    }
    .swx-timeline-item {
      position: relative;
      left: 30%;
      width: 0;
      height: 150px;
      .swx-timeline-item-dot {
        position: absolute;
        width: 8px;
        height: 8px;
        left: -7px;
        top: 30%;
        border-radius: 50%;
      }
      .swx-timeline-item-date {
        position: absolute;
        top: 30%;
        right: 10px;
        font-size: 12px;
        margin-top: -5px;
      }
      .swx-timeline-item-content {
        position: absolute;
        left: 36px;
        top: 33%;
        width: 180px;
        height: 50px;
        margin-top: -30px;
        padding: 5px 8px;
        border-radius: 3px;
        font-size: 12px;
        color: #ffffff;
        .swx-timeline-item-content-arrow {
          position: absolute;
          z-index: 0;
          left: -18px;
          border-radius: 10px 10px 10px 0;
          width: 47px;
          height: 47px;
          margin-top: 1px;
          transform: rotate(45deg);
        }
        .swx-timeline-item-content-text {
          position: absolute;
          z-index: 1;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          padding: 4px;
          overflow: auto;
          .swx-timeline-item-content-title {
            padding: 2px;
          }
        }
      }
    }
  }
  &.swx-timeline-theme2 {
    .line {
      left: 20%;
      border-left-style: dashed;
    }
    .swx-timeline-item {
      position: relative;
      left: 20%;
      width: 0;
      height: 150px;
      .swx-timeline-item-date {
        position: absolute;
        top: 0;
        left: -52px;
        width: 100px;
        height: 30px;
        border-radius: 15px;
        text-align: center;
        line-height: 30px;
        font-size: 12px;
        margin-top: -5px;
        color: #ffffff;
      }
      .swx-timeline-item-content {
        position: absolute;
        left: 116px;
        top: 0;
        width: 200px;
        background-color: #fff;
        color: #000;
        text-align: left;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
        border-radius: 3px;
        padding: 8px;
        &::before {
          content: "";
          position: absolute;
          width: 10px;
          height: 10px;
          background-color: #fff;
          left: -5px;
          top: 10px;
          transform: rotate(45deg);
        }
        .swx-timeline-item-content-title {
          font-size: 14px;
          line-height: 14px;
        }
        .swx-timeline-item-content-text {
          line-height: 16px;
          font-size: 12px;
          color: #666666;
          padding: 4px;
        }
      }
    }
  }
  &.swx-timeline-theme3 {
    .line {
      left: 20%;
      border-left-style: dashed;
    }
    .swx-timeline-item {
      position: relative;
      left: 20%;
      width: 0;
      height: 150px;
      .swx-timeline-item-date {
        position: absolute;
        top: 0;
        left: -28px;
        width: 48px;
        height: 54px;
        text-align: center;
        font-size: 12px;
        .swx-timeline-item-day {
          font-size: 24px;
          text-align: center;
        }
        .swx-timeline-item-yearAndMonth {
          font-size: 12px;
          text-align: center;
          color: #999999;
        }
      }
      .swx-timeline-item-content {
        position: absolute;
        left: 70px;
        top: 0;
        width: 200px;
        background-color: #fff;
        color: #000;
        text-align: left;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
        border-radius: 3px;
        padding: 8px;
        &::before {
          content: "";
          position: absolute;
          width: 10px;
          height: 10px;
          background-color: #fff;
          left: -5px;
          top: 10px;
          transform: rotate(45deg);
        }
        .swx-timeline-item-content-title {
          font-size: 14px;
          line-height: 14px;
        }
        .swx-timeline-item-content-text {
          line-height: 16px;
          font-size: 12px;
          color: #666666;
          padding: 4px;
        }
      }
    }
  }
}
</style>
