import axios from 'axios'
import { RESAS_API_URL, API_KEY } from '../const'
import type { PREFECTURE } from '../type'

/**
 * 人口データを取得するサービス
 */
export class PopulationService {
  public prefectures: PREFECTURE[] = []
  public selectedPrefectures: string[] = []
  public graphData: any = {}

  constructor() {
    this._initData()
  }

  private async _initData() {
    const res = await axios.get(`${RESAS_API_URL}/api/v1/prefectures`, {
      headers: {
        'X-API-KEY': API_KEY
      }
    })
    this.prefectures = res.data.result
  }
}
