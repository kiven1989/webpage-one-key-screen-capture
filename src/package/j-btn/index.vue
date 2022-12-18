<template>
  <i
    @click="onClick"
    v-if="screenCaptureBtnVisible"
    class="iconfont icon-xiangji1fill screen-capture-btn"
  ></i>
</template>
<script>
import html2canvas from "html2canvas";
export default {
  name: "JBtn",
  props: {
    fileName: {
      type: String,
      default: "全屏截图",
    },
  },
  data() {
    return {
      screenCaptureBtnVisible: true,
    };
  },
  methods: {
    /**
     * 裁切方法
     */
    screenCaptureHandler() {
      const configs = {
        useCORS: true,
        allowTaint: true,
      };
      return html2canvas(document.body, configs).then((canvas) => {
        // canvas为转换后的Canvas对象
        let tempImg = new Image();
        tempImg.src = canvas.toDataURL(); // 导出图片
        // 牵扯跨域
        this.downloadNetMethod(tempImg.src, this.fileName);
      });
    },
    /**
     * 下载裁切
     */
    downloadNetMethod(src, name) {
      var eleLink = document.createElement("a");
      eleLink.href = src; // 转换后的图片地址
      eleLink.download = name;
      document.body.appendChild(eleLink);
      // 触发点击
      eleLink.click();
      // 然后移除
      document.body.removeChild(eleLink);
    },

    onClick() {
      // 隐藏裁切按钮
      this.screenCaptureBtnVisible = false;
      // 等待数据相应后，在执行裁切
      this.$nextTick(async () => {
        // 异步裁切
        await this.screenCaptureHandler();
        // 恢复按钮显示
        this.screenCaptureBtnVisible = true;
      });
    },
  },
};
</script>
<style scoped lang="scss">
@import "@/assets/main.css";
.screen-capture-btn {
  width: 40px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  position: fixed;
  bottom: 20px;
  right: 20px;
  border: 1px solid rgba(0, 128, 0, 0.4);
  z-index: 999;
  border-radius: 50%;
  font-size: 20px;
  cursor: pointer;
  color: green;
}
</style>
