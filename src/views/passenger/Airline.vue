<template>
  <div>
    <div>
      <img :src="airline.logo" />
    </div>
    <div>
      {{ airline.name }}
    </div>
    <div>
      {{ airline.slogan }}
    </div>
    <div>
      {{ airline.country }}
    </div>
    <div>
      {{ airline.head_quaters }}
    </div>
    <div>
      {{ airline.established }}
    </div>
    <div>
      <a :href="airline.website">website</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Airline",
  props: ["airline"],
};
</script>
