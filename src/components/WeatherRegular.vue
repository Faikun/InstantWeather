<template>
<div class="regular">
    <div class="regular__info">
        <h2 class="regular__city">{{ city }}</h2>
        <span class="regular__humidity">Real feel is {{ feel }}</span>
        <span class="regular__temperature">{{ temperature }}&deg;</span>
    </div>
    <div class="regular__image">
        <img :src="icon" alt="">
    </div>
</div>
</template>

<script setup lang="ts">
interface Props {
    city: string,
    feel: number,
    temperature: number,
    icon: string
}

defineProps<Props>()
</script>
