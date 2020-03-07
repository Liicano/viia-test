<template>
  <div>
    <v-row>
      <v-col>
        <center>
          <chart :chartValues="matrizData" />
        </center>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <center>
          <tableComponent :tableData="matrizData" @setTableValue="setTableValue"></tableComponent>
        </center>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import tableComponent from "@/components/table";
import chart from "@/components/charts/chartDefault";
export default {
  props: {},

  components: {
    tableComponent,
    chart
  },

  data() {
    return {
      matrizData: {
        chartType: "BubbleChart",
        title: "Matriz numero 3 - Marcas de celulares",
        items: [
          ["Año", "2018", "2019", "2020"],
          ["Samsung", 789, 234, 56],
          ["Xiaiomi", 234, 45, 764],
          ["Huawei", 234, 650, 345]
        ]
      }
    };
  },

  methods: {
    setTableValue(v, i, position) {
      this.matrizData.items[i].splice(position, 1, parseFloat(v));
    }
  },

  computed: {},

  watch: {}
};
</script>
<style></style>
