<template>
    <div>
        <i class="el-icon-location-outline" style="color: #7fa7d8"></i>
        <el-breadcrumb class="swx-breadcrumb" separator-class="el-icon-arrow-right">
            <el-breadcrumb-item v-for="(item,index) in routerList " :key="'swx-breadcrumb'+index" :to="item">{{item.name}}</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["routerList"])
  }
};
</script>
