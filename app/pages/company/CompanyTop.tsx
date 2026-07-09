import { Link } from "react-router";

export function CompanyTop() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 font-sans">
      
      {/* ページヘッダー */}
      <div className="border-b border-gray-200 pb-6 mb-10">
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">企業のこと</h1>
        <p className="text-sm text-gray-500 mt-2">
          二島急行の企業情報・経営理念をご案内いたします。
        </p>
      </div>

      {/* イントロダクション */}
      <div className="bg-slate-100 rounded-xl p-6 mb-10">
        <p className="text-gray-700 leading-relaxed text-sm">
          二島急行は、二島サーバー内の安心・安全な輸送を支える鉄道会社です。
          地域の皆様に信頼され、共に発展する企業を目指し、日々の安全運行に努めています。
        </p>
      </div>

      {/* メニューカード一覧（今後、IR情報や採用情報が増えても並べられます） */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        
        {/* 我々について（会社概要・理念）へのカードリンク */}
        <Link 
          to="/company/about" 
          className="group block bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md hover:border-blue-900 transition-all"
        >
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-lg font-bold text-gray-900 group-hover:text-blue-900 transition-colors">
              我々について
            </h2>
            {/* 矢印アイコン風の装飾 */}
            <span className="text-gray-400 group-hover:translate-x-1 transition-transform inline-block">
              &rarr;
            </span>
          </div>
          <p className="text-xs text-gray-500 leading-relaxed">
            二島急行の企業理念、社長挨拶、および沿革・会社概要についてご紹介します。
          </p>
        </Link>

        {/* 将来用のダミーカード（鉄道サイトっぽさを出す演出） */}
        <div className="bg-gray-50 border border-gray-100 rounded-xl p-6 opacity-60">
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-lg font-bold text-gray-400">
              サステナビリティ（準備中）
            </h2>
          </div>
          <p className="text-xs text-gray-400 leading-relaxed">
            安全への取り組みや、地域社会への貢献活動について公開予定です。
          </p>
        </div>

      </div>

    </div>
  );
}