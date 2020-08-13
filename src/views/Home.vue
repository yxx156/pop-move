<template>
  <div class="home">
    <button></button>
    <popout
      v-for="item in arr"
      :key="item.id"
      :Id="item.id"
      :title="item.title"
      :size="size"
      :noArea="false"
      :maxTop="250"
      :maxLeft="800"
      :minTop="30"
      :minLeft="20"
      :zIndex="zindex"
      @change="changeHancle"
      @closeMe="close"
    >
      <div>弹框</div>
    </popout>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapMutations } from "vuex";
import popout from "@/components/MovePopout.vue";

export default {
  components: {
    popout,
  },
  data() {
    return {
      nums: 0,
      arr: [
        {
          id: "a",
          title: "a",
        },
        {
          id: "b",
          title: "b",
        },
        {
          id: "c",
          title: "c",
        },
      ],
      size: {
        big: ["100%", "100%"],
        middle: ["750px", "750px"],
        small: ["300px", "40px"],
      },
      zindex: 1,
    };
  },
  methods: {
    changeHancle(e) {
      this.zindex = e;
    },
    close(id) {
      console.log(id);
    },
  },
};
</script>
<style scoped>
.home {
  position: relative;
  height: 1000px;
  background: #eee;
}
</style>
