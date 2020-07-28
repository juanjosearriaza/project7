<template>
  <div class="card mb-3" style="width:100%">
    <div class="card-header mx-0 my-0">
      <p class="text-left">user.image + user.email</p>
    </div>
    <div class="card-body">
      <h5 class="card-title text-left">{{ title }}</h5>
      <p class="card-text text-left">{{ description }}</p>
      <router-link :to="{ name: 'Singlepost', params:{ id }}">
        <b-card-img :src="image" alt="Image" class="rounded-0" style="width:100%"></b-card-img>
      </router-link>

  
      <a href="#" class="card-link float-right mt-3 ml-2">Comments</a>
    </div>
  </div>
</template>

<script>



export default {
  name: "Card",
  props: ["id", "title", "description", "image"],  
};
</script>

<style scoped>
</style>