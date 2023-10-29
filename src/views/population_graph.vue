<template>
  <div></div>
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
