<template>
  <div>
    <v-row>
      <v-subheader class="overline">{{ tableData.title }}</v-subheader>
      <v-col cols="12">
        <v-simple-table>
          <template v-slot:default>
            <tbody>
              <tr v-for="(d, index) in tableData.items" :key="d.name">
                <td>{{ d[0] }}</td>
                <td>
                  <v-text-field
                    :disabled="typeof d[1] != 'number'"
                    type="number"
                    @input="setValue($event, index, 1)"
                    :value="d[1] ? d[1] : 0"
                  ></v-text-field>
                </td>
                <td>
                  <v-text-field
                    :disabled="typeof d[2] != 'number'"
                    type="number"
                    @input="setValue($event, index, 2)"
                    :value="d[2] ? d[2] : 0"
                  ></v-text-field>
                </td>
                <td>
                  <v-text-field
                    :disabled="typeof d[3] != 'number'"
                    type="number"
                    @input="setValue($event, index, 3)"
                    :value="d[3] ? d[3] : 0"
                  ></v-text-field>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  props: {
    tableData: Object
  },

  components: {},

  data() {
    return {};
  },

  methods: {
    setValue(e, index, position) {
      this.$emit("setTableValue", e, index, position);
    }
  }
};
</script>
<style></style>
