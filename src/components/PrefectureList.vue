<template>
  <div class="p-2">
    <h2 class="fs-18">都道府県</h2>
    <div class="prefecture-list" v-if="populationService.state.initialized">
      <label class="prefecture-item" v-for="(item, index) in prefectures" :key="index">
        <input type="checkbox" @change="changePrefecture" :value="item.prefCode" />
        {{ item.prefName }}
      </label>
    </div>
  </div>
</template>
<script lang="ts">
import { PopulationService } from '@/services/PopulationService'
import type { PREFECTURE } from '@/type'
import { inject } from 'vue'

export default {
  name: 'PrefectureList',
  inject: ['populationService'],
  computed: {
    prefectures(): PREFECTURE[] {
      return this.populationService.state.prefectures
    }
  },
  methods: {
    changePrefecture(event: Event) {
      const target = event.target as HTMLInputElement
      const prefCode = Number(target.value)
      if (target.checked) {
        this.populationService.addPrefecture(prefCode)
      } else {
        this.populationService.removePrefecture(prefCode)
      }
    }
  }
}
</script>
<style scoped lang="scss">
.prefecture-list {
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  .prefecture-item {
    display: flex;
    align-items: center;
    width: 25%;
    font-size: 15px;
    margin-bottom: 4px;
  }
}
</style>
