<template>
    <Undergraduate />
    <Postgraduate />
    <Skilldev />
</template>


<script>

import Undergraduate from './undergraduate.vue';
import Postgraduate from './postgraduate.vue';
import Skilldev from './skilldev.vue';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'all-courses',
    components: {
        Undergraduate,
        Postgraduate,
        Skilldev
    }
});

</script>


<style scoped>

</style>