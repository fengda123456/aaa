<template>
  <div class="sidebar">
    <ul class="sidebar_content">
      <li
        @click="jump(item.url,index)"
        class="sidebar_content_item"
        :class="[current_index == index ? 'sidebar_selected_active' : '']"
        v-for="(item,index) in listData"
        :key="index"
      >{{item.title}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      current_index: 0,
      menuList: [],
      listData: [
        {
          title: "精选",
          url: "/sys/choice"
        },
        {
          title: "电视剧",
          url: "/sys/Tvplay"
        },
              {
          title: "电影",
          url: "/sys/Moview"
        },
            {
          title: "VIP会员",
          url: "/sys/Tvplay"
        },
              {
          title: "综艺",
          url: "/sys/Tvplay"
        },
            {
          title: "少儿",
          url: "/sys/Tvplay"
        },
              {
          title: "动漫",
          url: "/sys/Tvplay"
        },
            {
          title: "热点短视屏",
          url: "/sys/Tvplay"
        },
              {
          title: "游戏",
          url: "/sys/Tvplay"
        },
                 {
          title: "绝地求生",
          url: "/sys/Tvplay"
        },
                 {
          title: "王者荣耀",
          url: "/sys/Tvplay"
        },
                 {
          title: "今日影院",
          url: "/sys/Tvplay"
        },
                 {
          title: "影集盘点",
          url: "/sys/Tvplay"
        },
                 {
          title: "NBA",
          url: "/sys/Tvplay"
        },
                 {
          title: "英雄联盟",
          url: "/sys/Tvplay"
        },
                 {
          title: "广场舞",
          url: "/sys/Tvplay"
        },
                 {
          title: "动漫混剪",
          url: "/sys/Tvplay"
        },
                 {
          title: "纪录片",
          url: "/sys/Tvplay"
        },
                 {
          title: "搞笑",
          url: "/sys/Tvplay"
        },
                 {
          title: "音乐",
          url: "/sys/Tvplay"
        },
      ]
    };
  },
  created() {
    this.initData();
  },
  methods: {
    initData() {
      this.get_sidebar_data();
    },
    get_sidebar_data() {},
    jump(url, index) {
      this.current_index = index;
      this.$router.push({
        path: url
      });
    }
  }
};
</script>
<style scoped>
.sidebar_content {
  background-color: #545c64;
  height: 100%;
  overflow: hidden;
}
.sidebar_content_item {
  line-height: 52px;
  font-size: 15px;
  color: #f9fbfc;
  text-align: left;
  padding-left: 70px;
  cursor: pointer;
}

.sidebar_content_item:hover {
  opacity: 0.5;
  color: saddlebrown;
}
.sidebar_selected_active {
  color: saddlebrown;
  background-color: #333;
}
.sidebar_title {
  padding-left: 67px;
  font-size: 22px;
  color: #fff;
  line-height: 60px;
  background-color: #3b81c3;
}


</style>

