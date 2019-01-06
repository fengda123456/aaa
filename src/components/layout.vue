<template>
  <el-container class="container">
    <el-header>
      <SubHeader></SubHeader>
    </el-header>
    <el-container>
      <el-aside>
        <Sider></Sider>
      </el-aside>

      <Main></Main>
    </el-container>
  </el-container>
</template>
<script>
import SubHeader from "./commonvue/SubHeader.vue";
import Sider from "./commonvue/Sider.vue";
import Main from "./commonvue/Main.vue";

export default {
  components: {
    SubHeader,
    Sider,
    Main
  }
};
</script>
<style>
@media (max-width: 768px) {
  .container {
    width: 768px;
    max-height: 580px;
 
  }
}
@media (min-width: 768px) {
  .container {
    width: 100%;
    max-height:650px ;   

  }
}
@media (min-width: 970px) {
  .container {
    width: 100%;
    max-height: 680px;

  }
}
@media (min-width: 1360px) {
  .container {
    width: 100%;
    min-height: 850px;

  }
}
html,
body {
  margin: 0;
  padding: 0;
}
.el-header,
.el-footer {
  background-color: #545c64;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #545c64;
  color: #333;
  text-align: center;
  line-height: 200px;
  overflow: auto;
}
::-webkit-scrollbar {
  width: 5px;
  height: 5px;
  background-color: #f5f5f5;
}

::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  background-color: #f5f5f5;
}
/*定义滑块 内阴影+圆角*/
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #555;
}

.el-main {
  background-color: #545c64;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>