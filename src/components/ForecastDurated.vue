<template>
<div class="durated">
    <h2 class="durated__title">7-day forecast</h2>
    <div class="durated__item" v-for="(item, index) in hourData" :key="index">
    <time class="durated__item-data">{{ item.date }}</time>
    <div class="durated__item-status">
        <img class="durated__item-img" :src="item.day!.condition!.icon" :alt="item.day!.condition!.text + ' icon'">
        <span>{{ item.day!.condition!.text }}</span>
    </div>
    <div class="durated__item-temperature">
        <span>{{ item.day!.avgtemp_c }}&deg;</span>
    </div>
    </div>
</div>
</template>

<script setup lang="ts">
type conditionVal = {
    icon?: string;
    text?: string
}

type conditionType = {
    condition?: conditionVal;
    // eslint-disable-next-line camelcase
    avgtemp_c?: number;
}

type hourDataType = {
    date?: number;
    day?: conditionType;
};

interface Props {
    hourData: Array<hourDataType>
}

defineProps<Props>()
</script>
