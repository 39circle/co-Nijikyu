import type { Route } from "./+types/home";
import { Page } from "../home/index";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "仮想都市:岩山 - 二島サーバー" },
  ];
}

export default function Home() {
  return <Page />;
}
