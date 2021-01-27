<template>
  <div class="viewBody">
    <Aside></Aside>
  </div>
</template>
<script>
import Aside from "../component/Aside";
export default {
  components: { Aside: Aside },
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>
<style  scoped>
.viewBody {
  height: 100%;
  width: 100%;
  background: #ffffff;
}
</style>