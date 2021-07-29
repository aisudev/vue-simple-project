<template>
  <div class="container">
    <h1>PASSENGER</h1>
    <Card
      v-for="passenger in passengers"
      :key="passenger._id"
      :name="passenger.name"
      :trip="passenger.trips"
      @click="getDetail(passenger._id)"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import Card from "@/components/Card";
import api from "@/service/api";
import { watchEffect } from "@vue/runtime-core";

export default {
  name: "Home",

  props: {
    page: {
      type: Number,
      required: true,
    },
    size: {
      type: Number,
      required: true,
    },
  },

  data() {
    return {
      passengers: [],
    };
  },

  components: {
    Card,
  },

  created() {
    watchEffect(() => {
      api
        .getPassengers(this.page, this.size)
        .then((result) => {
          this.passengers = result.data.data;
        })
        .catch((err) => {
          console.log(err);
        });
    });
  },

  methods: {
    getDetail(id) {
      this.$router.push({ name: "Passenger", params: { id: id } });
    },
  },
};
</script>

<style scoped>
.container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
