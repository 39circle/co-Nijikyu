import { useState } from "react";

// 駅のリスト（大島空港〜八の宮）
const STATIONS = ["大島空港", "二島", "山沢高戸", "北砂岡", "森山", "美利港", "ﾏｲﾝｸﾗﾌﾄ博物館", "八ノ宮", "藤台中央"];

export function Fare() {
   const [fromStation, setFromStation] = useState("");
   const [toStation, setToStation] = useState("");
 
   // 両方の駅が選択されているかチェック
   const isCalculated = fromStation !== "" && toStation !== "";

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 font-sans">
      
      {/* ページヘッダー */}
      <div className="border-b border-gray-200 pb-6 mb-10">
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">きっぷ料金</h1>

      </div>

      {/* 1. 運賃検索機（何を選んでもタダ） */}
      <section className="mb-12 bg-emerald-50 border border-emerald-100 rounded-xl p-6 shadow-sm">
        <h2 className="text-lg font-bold text-emerald-950 mb-4 flex items-center gap-2">
          運賃・きっぷ検索
        </h2>
        <p className="text-xs text-gray-400 mt-3">※主要駅のみ対応してます</p>
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between mb-6">
          <div className="w-full sm:w-2/5">
            <label className="block text-xs font-bold text-gray-600 mb-1">乗車駅</label>
            <select 
              value={fromStation} 
              onChange={(e) => setFromStation(e.target.value)}
              className="w-full bg-white border border-gray-300 rounded-lg p-2.5 text-sm font-medium focus:ring-2 focus:ring-emerald-600"
            >
            <option value="" disabled>選択してください</option>
              {STATIONS.map(st => <option key={st} value={st}>{st}</option>)}
            </select>
          </div>

          <div className="text-emerald-400 font-bold rotate-90 sm:rotate-0">&rarr;</div>

          <div className="w-full sm:w-2/5">
            <label className="block text-xs font-bold text-gray-600 mb-1">降車駅</label>
            <select 
              value={toStation} 
              onChange={(e) => setToStation(e.target.value)}
              className="w-full bg-white border border-gray-300 rounded-lg p-2.5 text-sm font-medium focus:ring-2 focus:ring-emerald-600"
            >
            <option value="" disabled>選択してください</option>
              {STATIONS.map(st => <option key={st} value={st}>{st}</option>)}
            </select>
          </div>
        </div>

        {/* 運賃表示（ここがタダ！） */}
        <div className="bg-white border border-emerald-200 rounded-xl p-6 text-center shadow-inner">
          <span className="text-xs text-emerald-700 font-bold block mb-1">片道運賃（大人・子供共通）</span>
          {isCalculated ? (
            <div>
                <div className="flex justify-center items-baseline gap-2">
                    <span className="text-5xl font-black text-emerald-600 tracking-tight">0</span>
                    <span className="text-xl font-bold text-emerald-600">円</span>
                    <span className="ml-2 px-2 py-0.5 bg-red-100 text-red-600 font-bold text-xs rounded-full animate-bounce">
                        タダ！
                    </span>
                </div>
                <p className="text-xs text-gray-400 mt-3">
                    ※自動改札機に何も入れずに、そのまま通り抜けてください（トロッコ・チェスト付きトロッコ共通）。
                </p>
            </div>
          ) : (
            <div className="text-gray-400 py-2 font-medium">
              乗車駅と降車駅を選択してください
            </div>
          )}
        </div>
      </section>

      {/* 2. マイクラ鯖用特注の運賃表 */}
      <section>
        <h2 className="text-xl font-bold text-gray-900 border-l-4 border-emerald-600 pl-3 mb-4">
          全線普通運賃表（ゲーム内通貨含む）
        </h2>
        
        <div className="overflow-hidden border border-gray-200 rounded-lg shadow-sm">
          <table className="w-full text-sm text-center border-collapse">
            <thead>
              <tr className="bg-slate-100 border-b border-gray-200 text-gray-700 font-bold">
                <th className="p-4 text-left">切符の種類</th>
                <th className="p-4">必要アイテム</th>
                <th className="p-4 text-right">状態</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200 hover:bg-slate-50">
                <td className="p-4 text-left font-bold text-gray-900">普通乗車券（片道）</td>
                <td className="p-4 font-medium text-gray-700">空気 × 0</td>
                <td className="p-4 text-right font-bold text-emerald-600">￥0</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-slate-50">
                <td className="p-4 text-left font-bold text-gray-900">定期券（永久）</td>
                <td className="p-4 font-medium text-gray-700">ダイヤモンド × 0</td>
                <td className="p-4 text-right font-bold text-emerald-600">￥0</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="p-4 text-left font-bold text-gray-900">トロッコ持ち込み料</td>
                <td className="p-4 font-medium text-gray-700">不要（ご自由にどうぞ）</td>
                <td className="p-4 text-right font-bold text-emerald-600">無料</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

    </div>
  );
}