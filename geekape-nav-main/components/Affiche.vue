<template>
  <div class="affiche" v-if="show">
    <el-carousel
    height="30px"
    direction="vertical"
    indicator-position="none"
  >
    <el-carousel-item>
      <p class="medium">
        科技俱乐部，专注科技探索者网站。<a
          class="link"
          href="https://www.kejijulebu.cn/"
          target="_blank"
          >去访问</a
        >
      </p>
    </el-carousel-item>
    <el-carousel-item>
      <p class="medium">
        一个好的产品要经历千锤百炼，我们需要你的建议。<a
          class="link"
          href="https://www.kejijulebu.cn/requests"
          target="_blank"
          >去围观</a
        >
      </p>
    </el-carousel-item>
    <el-carousel-item>
      <p class="medium">
        支持提交网站带个人信息了，欢迎大家提交网站
      </p>
    </el-carousel-item>
  </el-carousel>
  <i class="el-icon-close" @click="show=false"></i>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true
    }
  }
};
</script>

<style lang="scss" scoped>
.affiche {
  width: auto;
  font-size: 14px;
  background: #fff;
  border-radius: 5px;
  padding: 5px 15px;
  display: flex;
  align-items: center;
  p.medium {
    margin: 0;
  }
  i {
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
  }
  .el-carousel {
    flex: 1;
  }
  .el-carousel__item {
    line-height: 30px;
  }

  .el-carousel__button {
    width: 20px;
    height: 20px;
  }
  .icon-group {
    display: flex;
    float: right;
    color: #999;
    span {
      border: 1px solid #999;
      margin-left: 10px;
      cursor: pointer;
    }
    .icon {
      color: #333;
      margin-left: 20px;
    }
  }
  .link {
    color: #2a97ff;
    text-decoration: underline;
  }
}
</style>
