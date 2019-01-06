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
            "http://img.mp.itc.cn/upload/20170426/fe0e8ffeec914d449781e89aeb9ca292_th.gif"
        },
        {
          url:
            "http://img2.imgtn.bdimg.com/it/u=3219913283,3579809083&fm=26&gp=0.jpg"
        }
      ],
      currentDate: new Date(),
      pic_8: [
        {
          url:
            "http://img4.imgtn.bdimg.com/it/u=551212855,1074963255&fm=26&gp=0.jpg"
        },
        {
          url:
            "http://img3.imgtn.bdimg.com/it/u=3442599418,740989097&fm=26&gp=0.jpg"
        },
           {
          url:
            "http://img5.imgtn.bdimg.com/it/u=3576958559,3648920788&fm=26&gp=0.jpg"
        },
        {
          url:
            "http://img0.imgtn.bdimg.com/it/u=3993692165,2758608605&fm=26&gp=0.jpg"
        },
           {
          url:
            "http://img2.imgtn.bdimg.com/it/u=4266283075,2225261567&fm=26&gp=0.jpg"
        },
        {
          url:
            "http://img3.imgtn.bdimg.com/it/u=4158051773,490627928&fm=26&gp=0.jpg"
        },
           {
          url:
            "http://img3.imgtn.bdimg.com/it/u=4158051773,490627928&fm=26&gp=0.jpg"
        },
        {
          url:
            "http://img3.imgtn.bdimg.com/it/u=1137765778,3871466523&fm=26&gp=0.jpg"
        },
   
      ],
      pic_4: [
        {
          url:
            "http://img0.imgtn.bdimg.com/it/u=2014712730,3557610490&fm=26&gp=0.jpg"
        },
        {
          url:
            "http://img0.imgtn.bdimg.com/it/u=2014712730,3557610490&fm=26&gp=0.jpg"
        },
           {
          url:
            "http://img0.imgtn.bdimg.com/it/u=2014712730,3557610490&fm=26&gp=0.jpg"
        },
        {
          url:
            "http://img0.imgtn.bdimg.com/it/u=2014712730,3557610490&fm=26&gp=0.jpg"
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
