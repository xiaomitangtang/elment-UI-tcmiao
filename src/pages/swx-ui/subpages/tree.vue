<template>
    <div class='my-el-tree'>
        <el-tree
                :data="data4"
                class="swx-checkbox"
                :show-checkbox="true"
                node-key="id"
                default-expand-all
                :expand-on-click-node="false"
                @node-click="nodeClick"
                :render-content="renderContent">
        </el-tree>
        <pre class="swx-pre">
            tree因为根据需要内容不同，所以暂未进行封装，
            需要根据需求书写  render-content函数给每一个节点返回不同内容，
            同时加上相对应的css代码即可
            这里给一个demo供给大家参考
        render-content函数
           renderContent(h, { node }) {
                  if (node.childNodes.length) {
                    return (
                      &lt;span&gt;
                        &lt;span class="folder" /&gt;
                        {node.data.label}
                      &lt;/span&gt;
                    );
                  } else {
                    return (
                      &lt;span&gt;
                        &lt;span class="file" /&gt;
                        {node.data.label}
                      &lt;/span&gt;
                    );
                  }
                }

        相对应的类名
              .folder,
              .file {
                display: inline-block;
                width: 14px;
                height: 14px;
                margin-right: 10px;
              }
              .folder {
                background: url("../../../assets/swx-ui/icons/folder.png") no-repeat center
                  center/100% 100%;
              }
              .file {
                background: url("../../../assets/swx-ui/icons/file.png") no-repeat center
                  center/100% 100%;
              }
              .is-expanded > .el-tree-node__content > span > .folder {
                background: url("../../../assets/swx-ui/icons/folder-active.png") no-repeat
                  center center/100% 100%;
              }

            提供给大家参考
        </pre>


        <el-tree
                class="swx-checkbox"
                :data="data4"
                :show-checkbox="true"
                node-key="id"
                default-expand-all
                :expand-on-click-node="false"
                @node-click="nodeClick"
                :render-content="renderContent2">
        </el-tree>

        <pre class="swx-pre">
            tree因为根据需要内容不同，所以暂未进行封装，
            需要根据需求书写  render-content函数给每一个节点返回不同内容，
            同时加上相对应的css代码即可
            这里给一个demo供给大家参考
        render-content函数
           renderContent(h, { node }) {
                  if (node.childNodes.length) {
                    return (
                      &lt;span&gt;
                        &lt;span class="folderblue" /&gt;
                        {node.data.label}
                      &lt;/span&gt;
                    );
                  } else {
                    return (
                      &lt;span&gt;
                        &lt;span class="fileblue" /&gt;
                        {node.data.label}
                      &lt;/span&gt;
                    );
                  }
                }

        相对应的类名
              .folderblue,
              .fileblue {
                display: inline-block;
                width: 14px;
                height: 14px;
                margin-right: 10px;
              }
              .folderblue {
                background: url("../../../assets/swx-ui/icons/folderblue.png") no-repeat center
                  center/100% 100%;
              }
              .fileblue {
                background: url("../../../assets/swx-ui/icons/fileblue.png") no-repeat center
                  center/100% 100%;
              }
              .is-expanded > .el-tree-node__content > span > .folderblue {
                background: url("../../../assets/swx-ui/icons/folderblue-active.png") no-repeat
                  center center/100% 100%;
              }

            提供给大家参考
        </pre>
        <h3>隐藏箭头：添加类名
            swx-tree-hidden-arrow
            没有箭头需要将expand-on-click-node属性设置为true，否则树无法展开收缩</h3>
        <el-tree
                class="swx-tree-hidden-arrow swx-checkbox"
                :data="data4"
                :show-checkbox="true"
                node-key="id"
                default-expand-all
                :expand-on-click-node="true"
                @node-click="nodeClick"
                :render-content="renderContent">
        </el-tree>
        <h3>swx-tree-arrow-style-one  箭头的内容为字体图标，如果需要替换，建议将图标转换为字体图标，然后修改content即可</h3>
        <el-tree
                class="swx-tree-arrow-style-one swx-checkbox"
                :data="data4"
                :show-checkbox="true"
                node-key="id"
                default-expand-all
                :expand-on-click-node="true"
                @node-click="nodeClick"
                :render-content="renderContent">
        </el-tree>
        <h3> swx-tree-arrow-style-two   根据层级，显示不同的图标</h3>
        <el-tree
                class="swx-tree-arrow-style-two  swx-checkbox"
                :data="data4"
                node-key="id"
                :indent="16"
                default-expand-all
                :expand-on-click-node="true"
                @node-click="nodeClick"
                :render-content="renderContent3">
        </el-tree>
        <pre class="swx-pre">
                renderContent3(h, { node }) {
                          let temClass = "swx-icon-span swx-icon-span-" + node.level;
                          return (
                            &lt;span&gt;
                              &lt;span class={temClass} /&gt;
                              {node.data.label}
                            &lt;/span&gt;
                          );
                        }


            相应类名
              .swx-icon-span{
                    display: inline-block;
                    width: 16px;
                    height: 16px;
                    margin-right: 10px;
                  }
                  .swx-icon-span-1{
                    background: url("../icons/emblem.png") no-repeat center center/100% 100%;
                  }
                  .swx-icon-span-2{
                    background: url("../icons/squre.png") no-repeat center center/100% 100%;
                  }
                  .swx-icon-span-3{
                    background: url("../icons/default-portrait.png") no-repeat center center/100% 100%;
                  }
        </pre>
    </div>
</template>
<script>
export default {
  data() {
    return {
      data4: [
        {
          id: 1,
          label: "一级 1",
          children: [
            {
              id: 4,
              label: "二级 1-1",
              children: [
                {
                  id: 9,
                  label: "三级 1-1-1"
                },
                {
                  id: 10,
                  label: "三级 1-1-2"
                }
              ]
            }
          ]
        },
        {
          id: 2,
          label: "一级 2",
          children: [
            {
              id: 5,
              label: "二级 2-1"
            },
            {
              id: 6,
              label: "二级 2-2"
            }
          ]
        },
        {
          id: 3,
          label: "一级 3",
          children: [
            {
              id: 7,
              label: "二级 3-1"
            },
            {
              id: 8,
              label: "二级 3-2"
            }
          ]
        }
      ]
    };
  },
  methods: {
    nodeClick(data, node, com) {
      this.$emit("treeNodeClick", data, node, com);
    },
    renderContent(h, { node }) {
      if (node.childNodes.length) {
        return (
          <span>
            <span class="folder" />
            {node.data.label}
          </span>
        );
      } else {
        return (
          <span>
            <span class="file" />
            {node.data.label}
          </span>
        );
      }
    },
    renderContent2(h, { node }) {
      if (node.childNodes.length) {
        return (
          <span>
            <span class="folderblue" />
            {node.data.label}
          </span>
        );
      } else {
        return (
          <span>
            <span class="fileblue" />
            {node.data.label}
          </span>
        );
      }
    },
    renderContent3(h, { node }) {
      let temClass = "swx-icon-span swx-icon-span-" + node.level;
      return (
        <span>
          <span class={temClass} />
          {node.data.label}
        </span>
      );
    }
  }
};
</script>
<style lang="less">
.my-el-tree {
  /*height: 300px;*/
  .folder,
  .file {
    display: inline-block;
    width: 14px;
    height: 14px;
    margin-right: 10px;
  }
  .folder {
    background: url("../icons/folder.png") no-repeat center center/100% 100%;
  }
  .file {
    background: url("../icons/file.png") no-repeat center center/100% 100%;
  }
  .is-expanded > .el-tree-node__content > span > .folder {
    background: url("../icons/folder-active.png") no-repeat center center/100%
      100%;
  }

  .folderblue,
  .fileblue {
    display: inline-block;
    width: 14px;
    height: 14px;
    margin-right: 10px;
  }
  .folderblue {
    background: url("../icons/folderblue.png") no-repeat center center/100% 100%;
  }
  .fileblue {
    background: url("../icons/fileblue.png") no-repeat center center/100% 100%;
  }
  .is-expanded > .el-tree-node__content > span > .folderblue {
    background: url("../icons/folderblue-active.png") no-repeat center
      center/100% 100%;
  }
}
.custom-tree-node {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  padding-right: 8px;
}
</style>
