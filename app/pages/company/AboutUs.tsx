export function AboutUs() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 font-sans">
      
      {/* ページヘッダー */}
      <div className="border-b border-gray-200 pb-6 mb-10">
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">我々について</h1>
        <p className="text-sm text-gray-500 mt-2">
          二島急行電鉄の概要と、これまでの歩みをご紹介します。
        </p>
      </div>

      {/* セクション：二島急行とは（企業理念・紹介） */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-gray-900 border-l-4 border-blue-900 pl-3 mb-4">
          二島急行とは
        </h2>
        <div className="text-gray-700 text-sm leading-relaxed space-y-4 bg-slate-50 p-6 rounded-xl border border-gray-100">
          <p>
            二島急行は、<strong className="text-gray-950 font-semibold">大島空港から八の宮を結ぶ</strong>、地域住民の皆様の足となる鉄道路線です。
          </p>
          <p>
            当路線は<strong className="text-blue-900 font-semibold">「二島サーバー最古の鉄道路線」</strong>としての歴史を持ち、開業以来、安全・確実な輸送を第一に、サーバー内の発展と共に歩んでまいりました。
          </p>
        </div>
      </section>

      {/* セクション：会社概要（テーブル形式でプロっぽく） */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-gray-900 border-l-4 border-blue-900 pl-3 mb-4">
          会社概要
        </h2>
        <div className="overflow-hidden border border-gray-200 rounded-lg shadow-sm">
          <table className="w-full text-sm text-left border-collapse">
            <tbody>
              <tr className="border-b border-gray-200">
                <th className="w-1/4 bg-slate-50 p-4 font-bold text-gray-700">社名</th>
                <td className="p-4 text-gray-900">二島急行電鉄株式会社</td>
              </tr>
              <tr className="border-b border-gray-200">
                <th className="bg-slate-50 p-4 font-bold text-gray-700">路線区間</th>
                <td className="p-4 text-gray-900">大島空港駅 ～ 八の宮駅</td>
              </tr>
              <tr className="border-b border-gray-200">
                <th className="bg-slate-50 p-4 font-bold text-gray-700">特徴</th>
                <td className="p-4 text-gray-900">二島サーバー最古の鉄道路線</td>
              </tr>
              <tr>
                <th className="bg-slate-50 p-4 font-bold text-gray-700">運行目的</th>
                <td className="p-4 text-gray-900">二島サーバー内の円滑な移動手段の提供、および地域発展への貢献</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

    </div>
  );
}