<template>
  <component :is="layout">
    <slot />
  </component>
</template>

<script>
export default {
  name: "AppLayout",
  computed: {
    async layout() {
      const layout = this.$route.meta.layout || "DefaultLayout";
      console.log(layout);
      return () => import(`@/layouts/${meta.layout}.vue`);
    },
  },
};
</script>

<!-- <script>
import { shallowRef, watch } from "vue";
import { useRoute } from "vue-router";
import DefaultLayout from "./DefaultLayout.vue";

export default {
  name: "AppLayout",
  setup() {
    const layout = shallowRef(DefaultLayout);
    const route = useRoute();
    watch(
      () => route.meta,
      async (meta) => {
        try {
          const component = await require(`@/layouts/${meta.layout}.vue`);
          layout.value = component?.default || DefaultLayout;
        } catch (e) {
          layout.value = DefaultLayout;
        }
      }
    );
    return { layout };
  },
};
</script> -->
