<template>
  <div class="wrap">
    <div class="passenger-wrap">
      <Card
        :name="passenger.name"
        :trip="passenger.trip"
        @click="getDetail(passenger)"
      />
    </div>
    <div class="airline-wrap" @click="getAirline(airline)">
      <span><img :src="airline.logo"/></span>
      <h3>{{ airline.name }}</h3>
    </div>
  </div>
  <router-link :to="{ name: 'Home' }">Home</router-link>
</template>

<script>
import Card from "@/components/Card";

export default {
  name: "Passenger",
  props: ["passenger", "airline"],
  components: {
    Card,
  },
};
</script>

<style scoped>
.passenger-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.airline-wrap {
  padding: 10px;
  box-shadow: 5px 5px 5px #e0e0e0;
  width: 50%;
}

.airline-wrap:hover {
  box-shadow: 5px 5px 10px #999999;
  cursor: pointer;
}

.wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
