<template>
    <div>
        <pre class="table-intro">类名为：swx-table-simple    element的size为mini   开启stripe</pre>
        <el-table
                class="swx-table-simple"
                size="mini"
                stripe
                highlight-current-row
                :data="tableData"
                style="width: 100%">
            <el-table-column
                    prop="date"
                    label="日期"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="姓名"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="address"
                    label="地址">
            </el-table-column>
            <el-table-column type="selection" fixed="right"></el-table-column>
        </el-table>
        <pre class="table-intro">类名为：swx-table-colors    element的size为mini   开启stripe   开启  highlight-current-row</pre>
        <el-table
                class="swx-table-colors"
                highlight-current-row
                size="mini"
                stripe
                :data="tableData"
                style="width: 100%">
            <el-table-column type="index"></el-table-column>
            <el-table-column
                    prop="date"
                    label="日期"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="姓名"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="address"
                    label="地址">
            </el-table-column>
            <el-table-column type="selection" fixed="right"></el-table-column>
        </el-table>

        <pre class="table-intro">类名为：swx-table-multi-header    element的size为mini   开启stripe   开启  highlight-current-row</pre>

        <el-table
                :data="tableData3"
                class="swx-table-multi-header"
                size="mini"
                highlight-current-row
                stripe
                style="width: 100%">
            <el-table-column
                    prop="date"
                    label="日期"
                    >
            </el-table-column>
            <el-table-column label="配送信息">
                <el-table-column
                        prop="name"
                        label="姓名"
                       >
                </el-table-column>
                <el-table-column label="地址">
                    <el-table-column
                            prop="province"
                            label="省份"
                           >
                    </el-table-column>
                    <el-table-column
                            prop="city"
                            label="市区"
                          >
                    </el-table-column>
                    <el-table-column
                            prop="address"
                            label="地址"
                          >
                    </el-table-column>
                    <el-table-column
                            prop="zip"
                            label="邮编"
                            >
                    </el-table-column>
                </el-table-column>
            </el-table-column>
            <el-table-column type="selection" fixed="right"></el-table-column>
        </el-table>
    </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ],
      tableData3: [
        {
          date: "2016-05-03",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-08",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-06",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        }
      ]
    };
  }
};
</script>
<style>
.table-intro {
  padding: 0 10px;
  font-size: 16px;
}
</style>
