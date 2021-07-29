<template>
    <div>{{passenger.name}}</div>
    <div>{{passenger.trip}}</div>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim eius, tempora magni minus ullam rem optio. Nulla accusantium, quibusdam sed nam veniam facere voluptas reiciendis ipsum? Accusantium suscipit voluptates doloribus.</p>
</template>

<script>
export default {
    name:'Detail',
    props:['passenger']
}
</script>