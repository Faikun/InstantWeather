
<template>
    <div class="weather__search">
       <input type="text" placeholder="Search for cities... Min 3 symbols" v-model="search" @input="getCities">
    </div>
    <div v-show="autocomplete" class="weather__autocomplete">
        <div
          class="weather__autocomplete-item"
          v-for="city in filteredAutocomplete"
          :key="city.id"
          @click="chooseCity(city.name)"
        >
            {{ city.name }} - {{ city.country }}
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { searchCities } from '../api'

const emit = defineEmits<{
  chooseCity: [value: string]
}>()

const autocomplete = ref<Array<object> | null>(null)
const filteredAutocomplete = computed(() => autocomplete.value?.slice(0, 3))

const getCities = async function () {
  if (search.value.length > 1) {
    autocomplete.value = await searchCities(search.value)
  }
}

const chooseCity = function (city: string) {
  emit('chooseCity', city)
  autocomplete.value = null
  search.value = ''
}

const search = ref<string>('')

</script>
