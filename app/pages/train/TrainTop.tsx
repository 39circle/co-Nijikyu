import { Link } from "react-router";

export function TrainTop() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 font-sans">
      
      {/* ページヘッダー */}
      <div className="border-b border-gray-200 pb-6 mb-10">
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">電車のこと</h1>
        <p className="text-sm text-gray-500 mt-2">
          大島空港 ～ 八の宮を結ぶ、二島急行の運行情報・乗車案内のトップページです。
        </p>
      </div>

      {/* 運行状況（マイクラ鯖鉄おなじみのネタ） */}
      <div className="mb-10 bg-emerald-50 border border-emerald-200 rounded-xl p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="flex h-3 w-3 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
          </span>
          <span className="text-sm font-bold text-emerald-900">運行状況：平常運転</span>
        </div>
        <p className="text-xs text-emerald-700 hidden sm:block">
          クリーパーによる線路爆破の報告はありません。安全に運行中。
        </p>
      </div>

      {/* 各種案内メニュー（3カラムのカード型リンク） */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        
        {/* カード1：きっぷ料金 */}
        <Link 
          to="/train/fare" 
          className="group block bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md hover:border-emerald-500 transition-all text-left"
        >
          <div className="text-3xl mb-3 group-hover:scale-110 transition-transform inline-block">🎫</div>
          <h2 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
            きっぷ料金
          </h2>
          <p className="text-xs text-gray-500 leading-relaxed">
            全区間「0円（タダ）」のご案内と、乗車時のルールについて。
          </p>
        </Link>

        {/* カード2：時刻表 */}
        <Link 
          to="/train/timetable" 
          className="group block bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md hover:border-blue-900 transition-all text-left"
        >
          <div className="text-3xl mb-3 group-hover:scale-110 transition-transform inline-block">⏱️</div>
          <h2 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-900 transition-colors">
            時刻表
          </h2>
          <p className="text-xs text-gray-500 leading-relaxed">
            発着ダイヤのご案内（自動発車タイマー設置駅の情報など）。
          </p>
        </Link>

        {/* カード3：路線図 */}
        <Link 
          to="/train/map" 
          className="group block bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md hover:border-orange-500 transition-all text-left"
        >
          <div className="text-3xl mb-3 group-hover:scale-110 transition-transform inline-block">🗺️</div>
          <h2 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
            路線図
          </h2>
          <p className="text-xs text-gray-500 leading-relaxed">
            大島空港から八の宮までの全停車駅と、周辺マップはこちら。
          </p>
        </Link>

      </div>

      {/* 乗車にあたってのお願い（マイクラ仕様） */}
      <section className="bg-slate-50 border border-gray-200 rounded-xl p-6">
        <h3 className="font-bold text-gray-900 text-sm mb-3 flex items-center gap-2">
          <span>⚠️</span> 乗客の皆様へのお願い
        </h3>
        <ul className="text-xs text-gray-600 space-y-2 list-disc pl-4 leading-relaxed">
          <li>列車を<strong className="text-gray-900">叩かないで</strong>ください。 車両が消える恐れがあります。</li>
          <li>線路上へのブロック設置、および動力用レッドストーンの無断改造は固くお断りいたします。</li>
        </ul>
      </section>

    </div>
  );
}