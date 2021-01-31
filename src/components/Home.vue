<template>
  <div class="viewBody">
    <el-container>
      <el-header>
        <share></share>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <Aside></Aside>
        </el-aside>
        <el-container>
          <el-main>
            <router-view />
          </el-main>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import Share from "./component/Share";
import Aside from "./component/Aside";
export default {
  name: "Home",
  components: {
    share: Share,
    Aside: Aside,
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>
<style scoped>
.viewBody,
.viewBody > .el-container {
  height: 100%;
  background: #f1f1f1;
}
.el-container {
  overflow: hidden;
}
.el-header,
.el-footer {
  color: #333;
  text-align: center;
  line-height: 60px;
  padding: 0;
}

.el-aside {
  background-color: #ffffff;
  color: #333;
  text-align: center;
  line-height: 200px;
}
.el-main {
  color: #333;
  height: calc(100%);
  padding: 30px 0 30px 30px;
}
.el-main > div {
  width: 100%;
  height: 100%;
  overflow: hidden;
  overflow-y: auto;
}
</style>