// app/layouts/RootLayout.tsx
import { Outlet, Link } from "react-router";
import { Footer } from "../components/Footer"
import { Header } from "~/components/Header";

export default function RootLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 二島急行共通のヘッダー */}
      <Header/>

      {/* 各ページのコンテンツ（HomeやFareなど）がここに表示される */}
      <main className="flex-grow bg-slate-50 p-6">
        <Outlet />
      </main>

      {/* 二島急行共通のフッター */}
      <Footer/>
    </div>
  );
}