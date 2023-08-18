<template>
    <h2 class="forecast__title">Today's forecast</h2>
    <div class="forecast">
        <div class="forecast__item" v-for="i in 6" :key="i">
        <time class="forecast__item-time">{{ setForecastTime(i) }}:00</time>
        <img class="forecast__item-img" :src="hourData.hour![setForecastTime(i)]?.condition?.icon" alt="weather">
        <span class="forecast__temperature">{{ hourData.hour![setForecastTime(i)]?.temp_c }}&deg;</span>
        </div>
    </div> <!-- /.forecast -->
</template>

<script setup lang="ts">
type icon = {
    icon?: string
}

type hourVal = {
    condition?: icon,
    // eslint-disable-next-line camelcase
    temp_c: number
}

type hour = {
    hour?: Array<hourVal>
}

interface Props {
    hourData: hour
}

const setForecastTime = (i: number) => 3 + (i * 3)

defineProps<Props>()
</script>
