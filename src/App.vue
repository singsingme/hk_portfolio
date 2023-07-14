<template>
  <div>
    <!-- template 에 컴포넌트 등록을 해 줘야지 쓸 수 있음 -->
    <Content></Content>
  </div>
</template>

<script>
import Content from "@/Content.vue"

export default {
  name: 'App',
  components: {
    Content,
  }
}
</script>

<style>

</style>
