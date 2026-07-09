import { Link } from "react-router";

interface PendingPageProps {
  title: string;
}

export function PendingPage({ title }: PendingPageProps) {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20 font-sans text-center">
      
      {/* マイクラのレッドストーンダストや作業中をイメージしたピッケル絵文字 */}
      <div className="text-6xl mb-6 animate-bounce">⛏️</div>

      <h1 className="text-3xl font-bold text-gray-950 mb-2">
        {title} は現在工事中です
      </h1>
      
      <p className="text-sm text-gray-500 max-w-md mx-auto mb-8 leading-relaxed">
        二島急行保線区メンバーが鋭意ブロックを設置中（またはダイヤ調整中）です。<br />
        開通まで今しばらくお待ちください。
      </p>

      {/* 進行状況バーを模した遊び心デザイン */}
      <div className="max-w-xs mx-auto bg-gray-200 h-2.5 rounded-full mb-10 overflow-hidden">
        <div className="bg-emerald-500 h-full w-2/3 rounded-full animate-pulse"></div>
      </div>

      <Link 
        to="/" 
        className="inline-block bg-blue-900 hover:bg-blue-800 text-white font-medium text-sm px-6 py-3 rounded-lg shadow transition-colors"
      >
        二島急行トップへ戻る
      </Link>
      
    </div>
  );
}