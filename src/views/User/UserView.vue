<template>
  <ContainerMobileFull class="mt-4 sm:mt-0">
    <div class="grid grid-cols-1 lg:grid-cols-2 sm:gap-4 sm:mb-4 lg:h-32">
      <UserCard class="px-6 py-4 h-full" />
      <FunctionsCard class="p-2 h-full" />
    </div>
    <MyCollections class="px-6" />
    <MyFollow class="px-6 sm:my-4" />
    <AdminLinks class="mx-6 sm:mx-0" />
  </ContainerMobileFull>
</template>

<script setup>
import { onMounted } from "vue";
import ContainerMobileFull from "../../components/Layout/PageContainer/ContainerMobileFull.vue";
import UserCard from "../../components/My/User/UserCard.vue";
import FunctionsCard from "../../components/My/FunctionsCard.vue";
import MyCollections from "../../components/My/MyCollections.vue";
import MyFollow from "../../components/My/MyFollow.vue";
import AdminLinks from "../../components/Admin/AdminLinks.vue";

onMounted(() => {
  document.title = "我的 | 熔岩番剧库 LavaAnimeLib";
});
</script>
