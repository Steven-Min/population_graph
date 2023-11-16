import { describe, test, expect } from 'vitest'
import { PopulationService } from './PopulationService'

describe('PopulationService', () => {
  const populationService = new PopulationService()

  test('initialize', async () => {
    await populationService.initialize()
    expect(populationService.stateInitialized).toBe(true)
    expect(populationService.statePrefectures.length).toBe(47)
  })
})
