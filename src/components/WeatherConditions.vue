<template>
<div class="conditions">
    <h2 class="conditions__title">AIR CONDITIONS</h2>
    <div class="conditions__wrapper">
    <div class="conditions__item">
        <div class="conditions__item-name">
        <img src="../assets/images/thermometer.png" alt="real feel temperature">
        <span>Real Feel</span>
        </div>
        <span class="conditions__item-value">{{ feel }} &deg;</span>
    </div>
    <!-- conditions__item -->
    <div class="conditions__item">
        <div class="conditions__item-name">
        <img src="../assets/images/wind.png" alt="wind">
        <span>Wind</span>
        </div>
        <span class="conditions__item-value">{{ wind }} km/h</span>
    </div>
    <!-- conditions__item -->
    <div class="conditions__item">
        <div class="conditions__item-name">
        <img src="../assets/images/humidity.png" alt="humidity">
        <span>Humidity</span>
        </div>
        <span class="conditions__item-value">{{ humidity }}</span>
    </div>
    <!-- conditions__item -->
    <div class="conditions__item">
        <div class="conditions__item-name">
        <img src="../assets/images/uv-index.png" alt="uv-index">
        <span>UV Index</span>
        </div>
        <span class="conditions__item-value">{{ uv }}</span>
    </div>
    <!-- conditions__item -->
    </div>
</div>
</template>

<script setup lang="ts">
interface Props {
    feel: number,
    wind: number,
    humidity: number,
    uv: number
}

defineProps<Props>()
</script>
