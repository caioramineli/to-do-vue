<template>
    <v-progress-linear :value="progress" height="30" :disabled="true">
        <strong>{{ Math.ceil(progress) }}%</strong>
    </v-progress-linear>
</template>

<script>
export default {
    props: {
        progress: {
            type: Number
        }
    }
};
</script>

<style></style>