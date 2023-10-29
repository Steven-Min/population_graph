/**
 * 人口データを取得するサービス
 */
export class PopulationService {
  public prefectures: string[] = []
  public selectedPrefectures: string[] = []
  public graphData: any = {}

  constructor() {
    this._initData()
  }

  private async _initData() {}
}
