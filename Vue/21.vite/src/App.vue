<template>
  <input
    v-model="title"
    @keydown.enter="searchMovies" />
  <button @click="searchMovies">Search</button>
  <button @click="resetMovies">reset</button>
  <ul>
    <li
      v-for="movie in movieStore.filteredMovies"
      :key="movie.imdbID">
      {{ movie.Title }}
    </li>
  </ul>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useMovieStore } from "./store/movie";
const title = ref("");
const movieStore = useMovieStore();

async function searchMovies() {
  await movieStore.fetchMovie(title.value);
  console.log(movieStore.movies);
}

function resetMovies() {
  title.value = "";
  movieStore.$reset();
  console.log(movieStore.movies);
}
</script>
