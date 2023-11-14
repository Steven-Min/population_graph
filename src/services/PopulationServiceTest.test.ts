import { describe, test, expect } from 'vitest'
import { PopulationService } from './PopulationService'

describe('PopulationService', () => {
  const populationService = new PopulationService()

  test('initialize', async () => {
    await populationService.initialize()
    expect(populationService.initialized).toBe(true)
    expect(populationService.prefectures.length).toBe(47)
  })
})
