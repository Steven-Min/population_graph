<template>
  <div class="tab-group">
    <button
      v-for="(type, index) in populationTypes"
      :key="index"
      @click="selectTab(type)"
      :class="{ active: populationService.state.currentType === type }"
    >
      {{ type }}
    </button>
  </div>
</template>
<script lang="ts">
import { POPULATION_TYPES } from '@/const'
export default {
  inject: ['populationService'],
  computed: {
    populationTypes(): string[] {
      return POPULATION_TYPES
    }
  },
  methods: {
    selectTab(type) {
      this.populationService.changeType(type)
    }
  }
}
</script>
<style lang="scss" scoped>
.tab-group {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
}
button {
  margin-right: 8px;
  margin-bottom: 8px;
  height: 40px;
  width: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
  &.active {
    background-color: #f09415;
    color: #fff;
    border: 0;
    border-radius: 4px;
  }
}
</style>
