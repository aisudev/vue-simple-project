<template>
  <div class="nav">
    <router-link :to="{ name: 'Passenger', params: { passenger, airline } }"
      >Passenger</router-link
    >
    <router-link :to="{ name: 'Detail', params: { passenger } }"
      >Detail</router-link
    >
    <router-link :to="{ name: 'Airline', params: { airline } }"
      >Airline</router-link
    >
  </div>
  <router-view :passenger="passenger" :airline="airline" />
</template>

<script>
import api from "@/service/api";
export default {
  name: "Layout",
  props: ["id"],
  data() {
    return {
      passenger: {
        name: "",
        trip: "",
      },
      airline: {},
    };
  },
  created() {
    api
      .getPassenger(this.id)
      .then((result) => {
        this.passenger = { name: result.data.name, trip: result.data.trips };
        this.airline = result.data.airline[0];
      })
      .catch((err) => {
        console.error(err.message);
      });
  },
};
</script>

<style scoped>
.nav{
  width: 100%;
  display: flex;
  justify-content: space-evenly;
}
</style>
