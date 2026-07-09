import { Link, useLocation } from "react-router";

export function Header() {
  // 現在のURL（パス）を取得して、アクティブなメニューに色をつける準備
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <header className="w-full bg-white border-b border-gray-200 shadow-sm font-sans">
      {/* 上段：ロゴとメインナビゲーション */}
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* ロゴエリア */}
        <Link to="/" className="flex items-center gap-2 group">
          {/* 鉄道のラインカラー（例：紺と赤）をイメージしたアクセント */}
          <span className="w-3 h-6 bg-blue-900 rounded-sm block group-hover:bg-red-600 transition-colors"></span>
          <span className="font-bold text-xl tracking-wider text-gray-900">二島急行</span>
        </Link>

        {/* メインナビゲーション */}
        <nav className="flex gap-6 h-full">
          <Link
            to="/train"
            className={`h-full flex items-center text-sm font-medium border-b-2 transition-colors ${
              currentPath.startsWith("/train")
                ? "border-blue-900 text-blue-900"
                : "border-transparent text-gray-600 hover:text-blue-900 hover:border-gray-300"
            }`}
          >
            電車のこと
          </Link>
          <Link
            to="/company"
            className={`h-full flex items-center text-sm font-medium border-b-2 transition-colors ${
              currentPath.startsWith("/company")
                ? "border-blue-900 text-blue-900"
                : "border-transparent text-gray-600 hover:text-blue-900 hover:border-gray-300"
            }`}
          >
            企業のこと
          </Link>
        </nav>
      </div>

      {/* 下段：サブナビゲーション（現在選択されているカテゴリに応じて下層メニューを表示） */}
      <div className="w-full bg-slate-50 border-t border-gray-100 py-2 text-xs">
        <div className="max-w-7xl mx-auto px-4 flex gap-6 text-gray-500">
          {currentPath.startsWith("/train") && (
            <>
              <Link to="/train/fare" className="hover:text-blue-900 hover:underline">きっぷ料金</Link>
              <Link to="/train/timetable" className="hover:text-blue-900 hover:underline">時刻表</Link>
              <Link to="/train/map" className="hover:text-blue-900 hover:underline">路線図</Link>
            </>
          )}
          {currentPath.startsWith("/company") && (
            <>
              <Link to="/company/about" className="hover:text-blue-900 hover:underline">我々について</Link>
            </>
          )}
          {!currentPath.startsWith("/train") && !currentPath.startsWith("/company") && (
            <span className="text-gray-400">二島急行をご利用いただきありがとうございます</span>
          )}
        </div>
      </div>
    </header>
  );
}