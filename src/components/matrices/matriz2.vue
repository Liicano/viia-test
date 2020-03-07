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
        chartType: "ColumnChart",
        title: "Matriz numero 2 - Marcas de autos",
        items: [
          ["Año", "2018", "2019", "2020"],
          ["Toyota", 555, 153, 97],
          ["BMW", 753, 456, 836],
          ["FORD", 235, 583, 426]
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
