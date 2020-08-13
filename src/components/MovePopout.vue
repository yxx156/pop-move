<template>
  <div
    :id="'yxMove'+Id"
    :style="{width:size.middle[0],height:size.middle[1],position:'absolute',top:minTop+'px',left:minLeft+'px'}"
  >
    <div class="yx-container">
      <div class="yx-header" @mousedown="mousedown">
        <div class="title">{{title}}</div>
        <div class="yx-btn">
          <i class="iconfont icon-jianhao" @click="shrinkfn"></i>
          <i :class="['iconfont', iconClass]" @click="pluscomfn"></i>
          <i class="iconfont icon-guanbi" @click="close"></i>
        </div>
      </div>
      <div class="yx-main">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    Id: String, //给定一个唯一Id（必须）
    title: {
      type: String,
      default: "",
    }, //移动框的头部标题，可以不给（）
    size: {
      type: Object,
      default: {
        big: ["100%", "100%"],
        middle: ["750px", "750px"],
        small: ["300px", "40px"],
      },
    }, //弹框的三个size,
    noArea: {
      type: Boolean,
      default: true,
    }, //弹框是否有区域移动限制
    maxTop: {
      type: Number,
      default: null,
    }, //竖直方向最大移动
    maxLeft: {
      type: Number,
      default: null,
    }, //水平方向最大移动
    minTop: {
      type: Number,
      default: 0,
    }, //竖直方向最小移动
    minLeft: {
      type: Number,
      default: 0,
    }, //水平方向最小移动
    zIndex: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      iconClass: "icon-fangda",
      selectElement: null,
      shrink: false,
    };
  },
  methods: {
    // 缩小弹框
    shrinkfn() {
      this.selectElement = document.getElementById("yxMove" + this.Id);
      console.log(this.selectElement);
      this.shrink = true;
      this.selectElement.style.borderRadius = "4px";
      this.selectElement.style.width = this.size.small[0];
      this.selectElement.style.height = this.size.small[1];
      this.selectElement.style.overflow = "hidden";
      this.iconClass = "icon-fangda";
    },
    // 放大弹框
    pluscomfn() {
      this.selectElement = document.getElementById("yxMove" + this.Id);
      const _width = this.selectElement.style.width;
      this.selectElement.style.borderRadius = "10px";
      if (_width === this.size.small[0]) {
        this.selectElement.style.width = this.size.middle[0];
        this.selectElement.style.height = this.size.middle[1];
        this.iconClass = "icon-fangda";
        this.selectElement.style.top = this.minTop + "px";
        this.selectElement.style.left = this.minLeft + "px";
      } else if (_width === this.size.middle[0]) {
        this.selectElement.style.width = this.size.big[0];
        this.selectElement.style.height = this.size.big[1];
        this.selectElement.style.top = this.minTop + "px";
        this.selectElement.style.left = this.minLeft + "px";
        this.iconClass = "icon-suoxiao";
      } else if (_width === this.size.big[0]) {
        this.selectElement.style.width = this.size.middle[0];
        this.selectElement.style.height = this.size.middle[1];
        this.iconClass = "icon-fangda";
        this.selectElement.style.top = this.minTop + "px";
        this.selectElement.style.left = this.minLeft + "px";
      }
    },
    // 移动弹框
    mousedown(event) {
      this.selectElement = document.getElementById("yxMove" + this.Id);
      const div1 = this.selectElement;

      const distanceX = event.clientX - this.selectElement.offsetLeft;
      const distanceY = event.clientY - this.selectElement.offsetTop;
      let that = this;
      document.onmousemove = function (ev) {
        const oevent = ev || event;
        let _top = oevent.clientY - distanceY;
        let _left = oevent.clientX - distanceX;
        // console.log(that.maxLeft);
        if (!that.noArea) {
          if (_top < that.minTop) {
            _top = that.minTop;
          }

          if (that.maxTop != null) {
            if (_top >= that.maxTop) {
              _top = that.maxTop;
            }
          }

          if (_left < that.minLeft) {
            _left = that.minLeft;
          }

          if (that.maxLeft != null) {
            if (_left >= that.maxLeft) {
              _left = that.maxLeft;
            }
          }
        }
        div1.style.left = `${_left}px`;
        div1.style.top = `${_top}px`;
      };
      const zindex = this.zIndex + 1;
      document.onmouseup = function () {
        document.onmousemove = null;
        document.onmouseup = null;
        div1.style.zIndex = zindex;
        that.$emit("change", zindex);
      };
    },
    close() {
      this.selectElement = document.getElementById("yxMove" + this.Id);
      const div1 = this.selectElement;
      div1.style.display = "none";
      let item = {
        id: this.Id,
      };
      this.$emit("closeMe", item);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.yx-container {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background: #fff;
  color: #333;
  box-shadow: 0 8px 12px 0 rgba(220, 229, 242, 0.2);
  border-radius: 10px;
  overflow: hidden;
  user-select: none;
  .yx-header {
    display: flex;
    height: 40px;
    color: #fff;
    align-items: center;
    justify-content: space-between;
    background: #396aff;
    padding: 0 30px;
    box-sizing: border-box;
    cursor: move;
    .yx-btn {
      display: flex;
      i {
        margin-left: 10px;
        cursor: pointer;
      }
    }
  }
}
</style>
