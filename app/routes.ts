// app/routes.ts (または src/routes.ts プロジェクトの配置に合わせてください)
import {
  type RouteConfig,
  index,
  layout,
  prefix,
  route,
} from "@react-router/dev/routes";

export default [
  // 1. 全画面共通のレイアウト（ヘッダー・フッターなど）を適用
  layout("layouts/RootLayout.tsx", [
    // ホーム画面 (/)
    index("routes/Home.tsx"),

    // 2. 「電車のこと」グループ (/train/...)
    ...prefix("train", [
      index("routes/train/TrainTop.tsx"),       // /train
      route("fare", "routes/train/Fare.tsx"),   // /train/fare
      route("timetable", "routes/train/Timetable.tsx"), // /train/timetable
      route("map", "routes/train/RouteMap.tsx"),   // /train/map
    ]),

    // 3. 「企業のこと」グループ (/company/...)
    ...prefix("company", [
      index("routes/company/CompanyTop.tsx"),   // /company
      route("about", "routes/company/AboutUs.tsx"), // /company/about
    ]),

    // 4. 404 Not Found (どこにもマッチしない場合)
    route("*", "routes/NotFound.tsx"),
  ]),
] satisfies RouteConfig;