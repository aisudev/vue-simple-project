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
    <div class="pageination">
      <router-link
        id="page-prev"
        :to="{ name: 'Home', query: { page: page - 1, size: size } }"
      >
        <h4>prev</h4>
      </router-link>
      <router-link
        id="page-next"
        :to="{ name: 'Home', query: { page: page + 1, size: size } }"
      >
        <h4>next</h4>
      </router-link>
    </div>
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
      total: 0,
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
          this.total = result.headers["x-total-count"];
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

  computed: {
    hasNextPage() {
      let totalPages = Math.ceil(this.total / this.size);
      return this.page < totalPages;
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

.pageination {
  display: flex;
  width: 290px;
}

.pageination a {
  flex: 1;
  text-decoration: none;
  color: #2c3e40;
}

#page-prev {
  text-align: left;
}

#page-next {
  text-align: right;
}
</style>
