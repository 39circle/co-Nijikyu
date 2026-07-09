import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import logoUrl from "./assets/logo.svg"
import adwLogoUrl from "./assets/adw_log.svg"
import "./app.css"

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      {/* ページ全体を flex flex-col min-h-screen にしてフッターを最下部に固定 */}
      <body className="flex flex-col min-h-screen">

        {/* メインコンテンツ領域（残りの高さをすべて使う） */}
        <div className="">
          {children}
        </div>
        
        {/* フッターエリア */}
        <footer className="w-full border-t border-gray-200 bg-gray-50 py-8 text-xs text-gray-500">
          <div className="container mx-auto px-6 flex flex-col md:flex-row md:justify-between md:items-center gap-4">
            
            {/* 左側：注意書き（文字色を薄くし、フォントサイズを小さくして脇役に） */}
            <p className="order-2 md:order-1 text-center md:text-left leading-relaxed">
              ※このページの内容はフィクションです。
            </p>
            
            {/* 右側：ロゴエリア（ロゴ同士にスペースを空け、高さを少し控えめに） */}
            <div className="order-1 md:order-2 flex justify-center md:justify-end items-center gap-6">
              <img src={logoUrl} alt="NijimaLogo" className="h-6 w-auto opacity-80 hover:opacity-100 transition-opacity" />
              <img src={adwLogoUrl} alt="AdwLogo" className="h-6 w-auto opacity-80 hover:opacity-100 transition-opacity" />
            </div>

          </div>
        </footer>

        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "エラー";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404 Not Found" : "Error";
    details =
      error.status === 404
        ? "ページが見つかませんでした"
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message} </h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
