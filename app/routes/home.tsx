import type { Route } from "./+types/home";
import { Page } from "../home/index";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "二島急行 - 二島サーバー" },
  ];
}

export default function Home() {
  return <Page />;
}
