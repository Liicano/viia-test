<template>
  <div class="home">
    <v-divider></v-divider>
    <v-row>
      <v-col>
        <center>
          <matriz1 id="matriz1"></matriz1>
        </center>
      </v-col>
      <v-divider vertical></v-divider>
      <v-col>
        <center>
          <matriz2 id="matriz2"></matriz2>
        </center>
      </v-col>
    </v-row>
    <v-divider inset></v-divider>
    <v-row>
      <v-col>
        <center>
          <matriz3 id="matriz3"></matriz3>
        </center>
      </v-col>
      <v-divider vertical></v-divider>
    </v-row>
  </div>
</template>

<script>
import matriz1 from "@/components/matrices/matriz1";
import matriz2 from "@/components/matrices/matriz2";
import matriz3 from "@/components/matrices/matriz3";
export default {
  name: "Home",

  components: {
    matriz1,
    matriz2,
    matriz3
  }
};
</script>
