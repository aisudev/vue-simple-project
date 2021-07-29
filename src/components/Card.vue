<template>
  <div class="card">
    <span class="card-name">NAME: {{ name }}</span>
    <span class="card-trip">TRIP: {{ trip }}</span>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    trip: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 50%;
  padding: 10px;
  margin: 10px 0;
  box-shadow: 5px 5px 5px #e0e0e0;
  transition: all 200ms;
}

.card:hover {
  box-shadow: 5px 5px 10px #999999;
  cursor: pointer;
}

.card-name {
  font-size: 24px;
}

.card-trip {
  font-size: 18px;
}
</style>
