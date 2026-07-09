// app/routes/home.tsx (または src/routes/home.tsx)
import { AboutUs } from "~/pages/company/AboutUs";
import type { Route } from "./+types/AboutUs";

// ページのメタデータ（SEOやタブのタイトル）を定義
export function meta({}: Route.MetaArgs) {
  return [
    { title: "二島急行 - 二島サーバー" },
    { name: "description", content: "二島急行の公式サイトへようこそ。" },
  ];
}

// React Router v7 では、Loaderなどで取得したデータをこの args から型安全に受け取れます
export default function Page({ loaderData }: Route.ComponentProps) {
  // 実際の見た目は外部の Page コンポーネントに任せる
  return <AboutUs/>
}