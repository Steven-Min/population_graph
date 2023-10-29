<template>
  <div>
    <Header>都道府県別の総人口推移グラフ</Header>
  </div>
</template>
<script lang="ts">
import { PopulationService } from '../services/PopulationService'
export default {
  name: 'PopulationGraph',
  data() {
    return {
      service: new PopulationService()
    }
  }
}
</script>
