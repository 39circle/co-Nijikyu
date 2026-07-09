import { Link } from "react-router";

export function NotFound() {
  return (
    <div className="max-w-md mx-auto px-6 py-16 font-sans text-center">
      
      {/* 迷子・脱線をイメージしたマイクラ風の絵文字 */}
      <div className="text-6xl mb-6 animate-pulse">🛒💥</div>

      <span className="inline-block bg-red-100 text-red-700 text-xs font-bold px-3 py-1 rounded-full mb-3 font-mono">
        404 NOT FOUND
      </span>

      <h1 className="text-2xl font-bold text-gray-950 mb-3">
        線路が行き止まりになっています
      </h1>
      
      <p className="text-xs text-gray-500 mb-8 leading-relaxed">
        入力されたURLの先には、まだレールが敷かれていないか、駅が移転した可能性があります。<br />
        下のボタンから安全な本線へお戻りください。
      </p>

      {/* アクションボタン */}
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Link 
          to="/" 
          className="bg-blue-900 hover:bg-blue-800 text-white font-medium text-xs px-5 py-3 rounded-lg shadow transition-colors"
        >
          二島急行トップへ戻る
        </Link>
        <Link 
          to="/train" 
          className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium text-xs px-5 py-3 rounded-lg transition-colors"
        >
          運行情報を確認する
        </Link>
      </div>
      
    </div>
  );
}