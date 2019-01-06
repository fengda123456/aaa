<template>
  <div class="header">
    <el-row :gutter="10">
      <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1" class="logo_p">
        <div class="grid-content bg-purple logo">
          <img src="../../assets/images/logo.jpg" alt>
        </div>
        <p style="display:inline-block;">腾讯影视</p>
      </el-col>
      <el-col :xs="15" :sm="6" :md="8" :lg="9" :xl="11" class="search">
        <div class="grid-content bg-purple-light">
          <el-input
            placeholder="请输入内容"
            v-model="input5"
            class="input-with-select"
            @focus="focus"
            @blur="blur"
          >
            <el-button
              slot="append"
              icon="el-icon-search"
              @click="search"
              style="background:#545c64"
            >全网搜</el-button>
          </el-input>
        </div>
        <div class="search_child" v-if="flag">
          <ul>
            <li v-for="(item,index) in list" :key="index" @click="li_click(item,index)">{{item}}</li>
          </ul>
        </div>
      </el-col>

      <el-col :xs="0" :sm="6" :md="8" :lg="9" :xl="11" class="icon icon_3">
        <el-row hidden-md-and-up>
          <i class="el-icon-document"></i>
          <i class="el-icon-download"></i>
          <i class="el-icon-share"></i>
          <i class="el-icon-refresh"></i>
        </el-row>
      </el-col>
      <el-col :xs="0" :sm="6" :md="4" :lg="3" :xl="1" class="icon icon_4">
        <div class="grid-content bg-purple-light">
          <i class="el-icon-minus"></i>
          
          <i class="el-icon-close"></i>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      input5: "",
      select: "",
      flag: false,
      list: []
    };
  },
  created() {},
  methods: {
    search() {
      console.log(this.input5, "````````````this.input5");
      sessionStorage.setItem("inputval", this.input5);
      var arr = {};
      arr = sessionStorage.getItem("inputval");
      this.list.push(arr);
      var arr1 = this.list;

      let obj = {};
      let temp = [];
      for (let i = 0; i < arr1.length; i++) {
        let type = Object.prototype.toString.call(arr1[i]); //不加类型 分不清 1 '1'
        if (!obj[arr1[i] + type]) {
          temp.push(arr1[i]);
          obj[arr1[i] + type] = true; //这里给true 利于代码阅读和判断。  如果给 0,'' ,false ,undefined 都会在if那里判断为 false 不利于代码阅读
        }
      }
      this.list = temp;
      console.log(temp);
    },
    focus() {
      console.log("focus");
      this.flag = true;
    },

    li_click(a) {
      event.stopPropagation();
      console.log("li_click");
      this.flag = false;
      console.log(a);
      console.log(this.input5);
      this.input5 = a;
    },
    blur() {
      console.log("blur");

    }
  }
};
</script>
<style>
.el-col {
  border-radius: 4px;
}

.bg-purple {
  background: #545c64;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
/* 1 */
.el-select .el-input {
  width: 130px;
}

/* toubu */
.header {
  height: 60px;
  overflow: hidden;
}
.logo_p {
  font-family: "Microsoft YaHei";
}
.logo_p p {
  color: #fff;
}
.logo {
  display: inline-block;
}
.logo img {
  width: 2.5rem;
  border-radius: 15%;
}
.search {
  display: inline-block;
}
.icon {
  color: #fff;
}
.icon i {
  font-size: 25px;
  margin: 0 auto;
}
.icon_4 {
  font-size: 20px;
}
.icon_4 i {
  margin: 0 10px;
}
.icon_3 i {
  margin-left: 20px;
}
.search {
  position: relative;
}
.search_child {
  position: fixed;
  width: 25%;
  border: 1px dashed;
  background: #545c64;
  z-index: 200;
  max-height: 200px;
  overflow: auto;
}
.search_child li {
  background: #fff;
}
.search_child li:hover {
  background: rgba(167, 149, 149, 0.445);
}
</style>

