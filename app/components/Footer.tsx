import { Link } from "react-router";
import logoUrl from "../assets/logo.svg";
import adwLogoUrl from "../assets/adw_log.svg";

export function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 bg-gray-50 pt-10 pb-6 text-xs text-gray-500">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* 1. 【追加】フッターナビゲーション（サイトマップ風リンク） */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 pb-8 border-b border-gray-200 mb-6">
          <div>
            <p className="font-bold text-gray-800 mb-3 text-sm">電車のこと</p>
            <ul className="space-y-2">
              <li><Link to="/train/fare" className="hover:text-blue-900 hover:underline">きっぷ料金</Link></li>
              <li><Link to="/train/timetable" className="hover:text-blue-900 hover:underline">時刻表</Link></li>
              <li><Link to="/train/map" className="hover:text-blue-900 hover:underline">路線図</Link></li>
            </ul>
          </div>
          <div>
            <p className="font-bold text-gray-800 mb-3 text-sm">企業のこと</p>
            <ul className="space-y-2">
              <li><Link to="/company/about" className="hover:text-blue-900 hover:underline">我々について</Link></li>
            </ul>
          </div>
          <div className="col-span-2 md:col-span-1">
            <p className="font-bold text-gray-800 mb-3 text-sm">その他</p>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-blue-900 hover:underline">ホーム</Link></li>
            </ul>
          </div>
        </div>

        {/* 2. 下段エリア（元のコードをベースに調整） */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6">
          
          {/* 左側：注意書き ＆ コピーライト */}
          <div className="order-2 md:order-1 text-center md:text-left space-y-2">
            <p className="leading-relaxed text-[11px] text-gray-400">
              ※このページの内容はフィクションです。実在の鉄道会社や団体とは一切関係ありません。
            </p>
            <p className="text-[10px] text-gray-400 font-mono">
              &copy; 2026 二島急行 / 二島サーバー All Rights Reserved.
            </p>
          </div>
          
          {/* 右側：ロゴエリア */}
          <div className="order-1 md:order-2 flex justify-center md:justify-end items-center gap-6">
            <img src={logoUrl} alt="NijimaLogo" className="h-6 w-auto opacity-75 hover:opacity-100 transition-opacity" />
            <img src={adwLogoUrl} alt="AdwLogo" className="h-6 w-auto opacity-75 hover:opacity-100 transition-opacity" />
          </div>

        </div>
      </div>
    </footer>
  );
}