<template>
  <div>
    <Header>都道府県別の総人口推移グラフ</Header>
    <PrefectureList />
    <div>
      <PopulationType />
      <PopulationGraphPart />
    </div>
  </div>
</template>
<script lang="ts">
import PrefectureList from '@/components/PrefectureList.vue'
import PopulationGraphPart from '@/components/PopulationGraphPart.vue'
import PopulationType from '@/components/PopulationType.vue'
import { PopulationService } from '@/services/PopulationService'
import { provide, watchEffect, ref, onMounted, computed } from 'vue'

export default {
  name: 'PopulationGraph',
  components: {
    PrefectureList,
    PopulationGraphPart,
    PopulationType
  },
  setup() {
    const populationService = new PopulationService()
    provide(
      'populationService',
      computed(() => populationService)
    )

    onMounted(async () => {
      await populationService.initialize()
    })
  }
}
</script>
