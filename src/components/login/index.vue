<template>
  <div class="login">
    <div class="Sign">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="账号" style="margin:40px 20px">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="密码" style="margin:40px 20px">
          <el-input v-model="form.pass"></el-input>
        </el-form-item>

        <el-form-item style="margin:40px 20px">
          <el-button
            type="primary"
            @click="onSubmit"
            v-loading.fullscreen.lock="fullscreenLoading"
          >确定</el-button>
          <el-button @click="onCancel">取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        name: "",
        pass: ""
      },
      fullscreenLoading: false
    };
  },
  methods: {
    async onSubmit() {
      console.log(this.form);
      if (this.form.name === "") {
        this.$message("账号不能为空");
        return false;
      } else if (this.form.pass === "") {
        this.$message("密码不能为空");
        return false;
      } else {
        this.$message({
          type: "success",
          message: "登录成功"
        });
        this.fullscreenLoading = true;
        setTimeout(() => {
          this.fullscreenLoading = false;
        }, 2000);
       this.$router.push({path:'/sys'})
      }
    },
    onCancel() {
      this.$message("取消");
      this.form.name = "";
      this.form.pass = "";
      return;
    }
  }
};
</script>
<style >
.login {
  width: 100%;
  height: 40rem;
  background: url(../../assets/images/img_bg.png);
}
body {
  position: relative;
}
.Sign {
  width: 500px;
  height: 350px;
  border: 1px solid black;
  margin: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: #fff;
  opacity: 0.6;
}
</style>
