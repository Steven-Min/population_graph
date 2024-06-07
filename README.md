# population_graph

都道府県別の総人口推移グラフを表示するSPA(Single Page Application)

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

## APIキーの取得
```sh
vqQnYCGTe75uDG9JEiLzuekj4JoBndW9jiyjl80q
```


## 実装のTODOs
- 全体的な`Service`を作る
  - [ ] 名前は`PopulationService`とする
    - [ ] props
      - [ ] `prefectures`
      - [ ] `selectedPrefectures`
      - [ ] `graphData`
    - [ ] constructorの際に都道府県を取得しておく
      - [ ] `prefectures`に格納する
    - [ ] 選択した都道府県を`selectedPrefectures`に格納する
    - [ ] 選択した都道府県に対して、人口推移グラフのデータを取得する
      - [ ] `graphData`に格納する
- ヘッダーのタイトル部分をコンポーネントとして作る