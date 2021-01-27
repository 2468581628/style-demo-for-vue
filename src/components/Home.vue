<template>
  <div class="viewBody">
    <el-container>
      <el-header>
        <share></share>
      </el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
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
export default {
  name: "Home",
  components: {
    share: Share,
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
.el-header,
.el-footer {
  color: #333;
  text-align: center;
  line-height: 60px;
  padding: 0;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #ffffff;
  color: #333;
  height: calc(100%-60px);
  margin: 30px;
  padding: 0;
}
</style>