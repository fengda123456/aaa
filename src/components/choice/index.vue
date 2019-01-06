<template>
  <div class="choice">
    <div class="swiper">
      <div class="swiper_left">
        <!-- 轮播图 -->
        <el-carousel indicator-position="outside">
          <el-carousel-item v-for="(item,index) in list" :key="index">
            <img :src="item.url" alt>
          </el-carousel-item>
        </el-carousel>
      </div>

      <!-- youce -->
      <div class="swiper_right">
        <div>
          <i class="el-icon-info"></i>
          <span>大家都爱看</span>
        </div>
        <!-- youce  gezi -->
        <div class="swiper_r_">
          <ul>
            <li class="swiper_r_li" v-for="(item,index) in pic_4" :key="index">
              <div class="swiper_r_li_img">
                <img :src="item.url" alt>
              </div>
              <div class="swiper_r_li_pspan">
                <p>龙争虎斗</p>
                <span>决战</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- 为你精选 -->
    <div class="chosen">
      <div class="chosen_title">
        <el-tag>
          <i class="el-icon-info"></i>
        </el-tag>
        <span>为你精选</span>
      </div>

      <div class="chosen_list">
        <ul>
          <li class="li" v-for="(item,index) in pic_8" :key="index">
            <div class="img">
              <img :src="item.url" alt>
            </div>
            <p>李小龙</p>
            <p>双节棍</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        {
          url:
            "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3496733439,1344131136&fm=26&gp=0.jpg"
        },
        {
          url:
            "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2354849823,60773720&fm=26&gp=0.jpg"
        }
      ],
      currentDate: new Date(),
      pic_8: [
        {
          url:
            "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2753237156,1039294375&fm=26&gp=0.jpg"
        },
        {
          url:
            "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2753237156,1039294375&fm=26&gp=0.jpg"
        },
           {
          url:
            "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3456228071,3494281026&fm=26&gp=0.jpg"
        },
        {
          url:
            "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3456228071,3494281026&fm=26&gp=0.jpg"
        },
           {
          url:
            "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1193510708,1250167361&fm=26&gp=0.jpg"
        },
        {
          url:
            "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1193510708,1250167361&fm=26&gp=0.jpg"
        },
           {
          url:
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1806868753,1557858097&fm=26&gp=0.jpg"
        },
        {
          url:
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1806868753,1557858097&fm=26&gp=0.jpg"
        },
   
      ],
      pic_4: [
        {
          url:
            "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=4212344965,3014159590&fm=26&gp=0.jpg"
        },
        {
          url:
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2894880744,1802315820&fm=26&gp=0.jpg"
        },
           {
          url:
            "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=435942341,1844397869&fm=26&gp=0.jpg"
        },
        {
          url:
            "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=435942341,1844397869&fm=26&gp=0.jpg"
        },
      ]
    };
  },
  created() {
    console.log(this.list);
  }
};
</script>
<style >
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #545c64;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #545c64;
}

.choice {
  background: #545c64;
}
/* lunbo */
.el-carousel__container {
  height: 20rem;
}
.swiper {
  overflow: hidden;
}
/* zuoce */
.swiper_left {
  width: 70%;
  display: inline-block;
  float: left;
}
.swiper_left img {
  width: 100%;
}

/* youce */
.swiper_right {
  width: 28%;
  height: 300px;
  overflow: auto;
  display: inline-block;
  float: right;
  color: #fff;
}
.swiper_r_ {
}
.swiper_r_li {
  width: 100%;
  margin: 0.2rem auto;
}
.swiper_r_li_img {
  width: 50%;
  display: inline-block;
}
.swiper_r_li img {
  width: 100%;
}
.swiper_r_li .swiper_r_li_pspan {
  display: inline-block;
}
/* lunbo */
/* jinxuan */

.chosen {
  display: block;
}
.chosen_title {
  font-size: 18px;
  text-align: left;
  margin: 20px auto;
  color: #fff;
}
.chosen_list {
  text-align: center;
}
.chosen_list p {
  display: block;
  text-align: center;
}

.li {
  display: inline-block;

  width: 24.5%;
}
.li .img {
  width: 85%;
  margin: 0 auto;
}
.img img {
  width: 100%;
}
.li p {
  color: #fff;
}
.li span {
  color: #fff;
}
/* jinxuan */
</style>
