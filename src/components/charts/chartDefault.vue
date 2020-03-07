<template>
  <div>
    <GChart :type="chartValues.chartType" :data="chartValues.items" :options="CHART_OPTIONS" />
  </div>
</template>
<script>
export default {
  props: {
    chartValues: Object
  },

  components: {},

  data() {
    return {};
  },

  computed: {
    CHART_OPTIONS() {
      return {
        chart: {
          title: this.chartValues.title
        }
      };
    }
  }
};
</script>
<style></style>
