import axios from 'axios'
import { reactive, computed, toRefs } from 'vue'
import {
  RESAS_API_URL,
  API_KEY,
  singletonInstanceSummoner,
  makeItReactive,
  GRAPH_YEARS
} from '../const'
import type { PREFECTURE, POPULATION_DATA, GRAPH_DATASET } from '../type'

/**
 * 人口データを取得するサービス
 */
export class PopulationService {
  private state = reactive({
    initialized: false,
    prefectures: [] as PREFECTURE[],
    selectedPrefectures: [] as number[],
    graphData: {} as any,
    currentType: '総人口' as string
  })

  constructor() {
    Object.assign(this, toRefs(this.state))
  }

  get stateInitialized() {
    return this.state.initialized
  }

  get statePrefectures() {
    return this.state.prefectures
  }

  get stateSelectedPrefectures() {
    return this.state.selectedPrefectures
  }

  get stateGraphData() {
    return this.state.graphData
  }

  public async initialize() {
    await this._initData()
  }

  private async _initData() {
    this.state.initialized = false
    const res = await axios.get(`${RESAS_API_URL}/api/v1/prefectures `, {
      headers: {
        'X-API-KEY': API_KEY
      }
    })
    this.state.prefectures = res.data.result
    this.state.initialized = true
  }

  /**
   * 選択された都道府県を設定する
   * @param prefCode 都道府県コード
   */
  public addPrefecture(prefCode: number) {
    this.state.selectedPrefectures.push(prefCode)
    this._fetchPopulationData()
  }

  /**
   * 選択された都道府県を削除する
   * @param prefCode 都道府県コード
   */
  public removePrefecture(prefCode: number) {
    this.state.selectedPrefectures = this.state.selectedPrefectures.filter(
      (pref) => pref !== prefCode
    )
    this._fetchPopulationData()
  }

  // selectedPrefecturesが変更されるタイミング毎に、人口データを取得する
  private async _fetchPopulationData() {
    await Promise.all(
      this.state.selectedPrefectures.map(async (prefCode) => await this._fetchPopulation(prefCode))
    )
  }

  private async _fetchPopulation(prefCode: number) {
    const res = await axios.get(`${RESAS_API_URL}/api/v1/population/composition/perYear`, {
      headers: {
        'X-API-KEY': API_KEY
      },
      params: {
        prefCode,
        cityCode: '-'
      }
    })
    this.state.graphData[prefCode] = {
      総人口: res.data.result.data[0].data,
      年少人口: res.data.result.data[1].data,
      生産年齢人口: res.data.result.data[2].data,
      老年人口: res.data.result.data[3].data
    }
  }

  get chartData() {
    let labels = GRAPH_YEARS()
    let datasets: GRAPH_DATASET[] = []
    Object.keys(this.state.graphData).forEach((prefCode) => {
      const detailGraphData = this.state.graphData[prefCode][
        this.state.currentType
      ] as POPULATION_DATA[]
      const prefectureData = {
        label: this.state.prefectures.find((pref) => pref.prefCode === Number(prefCode))?.prefName,
        backgroundColor: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
        data: detailGraphData.map((data) => data.value)
      } as GRAPH_DATASET
      datasets.push(prefectureData)
    })
    return {
      labels,
      datasets
    }
  }

  changeType(type: string) {
    this.state.currentType = type
  }
}
