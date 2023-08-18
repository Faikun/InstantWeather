<template>
  <div class="weather">
    <div class="container">
      <div class="weather__wrapper" v-if="!isLoading">
        <div class="weather__info">
          <weather-search
            @chooseCity="changeCity"/>
          <weather-regular
            v-if="currentWeather"
            :city="city"
            :feel="currentWeather?.feelslike_c!"
            :temperature="currentWeather?.temp_c!"
            :icon="currentWeather?.condition?.icon!"
          />
          <div class="wrapper">
            <forecast-today
              v-if="forecastWeather"
              :hourData="forecastWeather[0]"
            />
          </div> <!-- /.wrapper -->

          <div class="wrapper">
            <weather-conditions
              v-if="currentWeather"
              :feel="currentWeather?.feelslike_c!"
              :wind="currentWeather?.wind_kph!"
              :humidity="currentWeather?.humidity!"
              :uv="currentWeather?.uv!"
            />
          </div>
        </div>
        <!-- /.weather__info -->
        <div class="weather__forecast">
          <div class="wrapper">
            <forecast-durated
              v-if="forecastWeather"
              :hourData="forecastWeather"
            />
          </div>
        </div>
      </div>
      <!-- /.weather__wrapper -->
      <div class="loader__container" v-else>
        <div class="loader">
          <div></div>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- eslint-disable camelcase -->
<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { getCurrentWeather, getForecastWeather } from './api'
import ForecastToday from './components/ForecastToday.vue'
import ForecastDurated from './components/ForecastDurated.vue'
import WeatherConditions from './components/WeatherConditions.vue'
import WeatherRegular from './components/WeatherRegular.vue'
import WeatherSearch from './components/WeatherSearch.vue'

onMounted(() => {
  const weatherCity = localStorage.getItem('weather_city')
  if (weatherCity) {
    city.value = weatherCity
    return
  }
  city.value = 'Moscow'
  updateData()
})

type conditionIcon = {
  icon?: string
}

type currentWeatherType = {
  feelslike_c?: number;
  temp_c?: number;
  condition?: conditionIcon;
  wind_kph?: number;
  humidity?: number;
  uv?: number;
};

const currentWeather = ref<currentWeatherType | null>(null)
const forecastWeather = ref<Array<object> | null>(null)
const city = ref<string>('')
const isLoading = ref<boolean>(true)

const changeCity = function (newCity: string) {
  city.value = newCity
  localStorage.setItem('weather_city', newCity)
}

const updateData = async function () {
  isLoading.value = true
  currentWeather.value = await getCurrentWeather(city.value)
  forecastWeather.value = await getForecastWeather(city.value)
  isLoading.value = false
}

watch(city, () => {
  updateData()
})

</script>
