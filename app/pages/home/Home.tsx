import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel, FreeMode } from "swiper/modules";

// Swiperのスタイルをインポート
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/zoom";
import pic1 from "./pic1.png"
import pic2 from "./pic2.png"
import pic3 from "./pic3.png"

// モーダル（ライブラリなしのアプローチと同じ）
function ImageModal({ src, alt, onClose }: { src: string; alt: string; onClose: () => void }) {
  // SwiperのZoomモジュールをモーダル内で使用することも可能ですが、
  // ここではシンプルにライブラリなしのアプローチのモーダルを再利用します。
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4 cursor-pointer"
      onClick={onClose}
    >
      <img src={src} alt={alt} className="max-w-full max-h-full rounded-lg shadow-2xl" />
      <button className="absolute top-4 right-4 text-white text-3xl">&times;</button>
    </div>
  );
}

export function LandscapeSwiperGallery() {
  const images = [
    { src: pic1, alt: "岩山市の風景1" },
    { src: pic2, alt: "岩山市の風景2" },
    { src: pic3, alt: "岩山市の風景3" },
  ];

  const [selectedImageIndex, setSelectedImageIndex] = useState(-1);
  const openModal = (index: number) => setSelectedImageIndex(index);
  const closeModal = () => setSelectedImageIndex(-1);

  return (
    <>
      <div className="w-full mb-10 pb-10 relative">
      <Swiper
        // 使用するモジュールを登録
        modules={[Pagination, Mousewheel, FreeMode]}
        
        // レイアウト設定
        slidesPerView={"auto"} // 画像のサイズ（w-80）を活かす
        spaceBetween={16}      // 画像同士の隙間 (gap-4相当)
        grabCursor={true}      // PCでホバーしたときにマウスカーソルを「掴む手」の形にする
        
        // 🚀 PCでのスクロール・ドラッグを快適にする設定
        freeMode={true}        // 滑らかなスクロール（ピタッと止まらず慣性が効く）
        mousewheel={{
          forceToAxis: true,   // 縦スクロール中に反応しにくくし、横方向の意志があるときだけ動かす
        }}

        // 🚀 ドット（Pagination）の設定
        pagination={{
          clickable: true,     // ドットをクリック可能にする
        }}
        className="w-full"
      >
          {images.map((image, index) => (
            <SwiperSlide key={index} className="w-auto!">
              <img
                src={image.src}
                alt={image.alt}
                className="w-80 aspect-video object-cover rounded-lg cursor-zoom-in transition-transform duration-300 hover:scale-105"
                // クリックでモーダルを開く
                onClick={() => openModal(index)}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        {/* 💡 もしこれでもドットが見えない場合用のカスタムCSS（Swiperのドットの色を強制指定） */}
      <style>{`
        .swiper-pagination-bullet {
          background: #cbd5e1 !important; /* 薄いグレー */
          opacity: 1;
        }
        .swiper-pagination-bullet-active {
          background: #3b82f6 !important; /* アクティブなドットを青に */
        }
        .swiper-pagination {
          bottom: 0px !important; /* 位置を少し上に調整 */
        }
      `}</style>
      </div>

      {/* モーダルの表示 */}
      {selectedImageIndex !== -1 && (
        <ImageModal
          src={images[selectedImageIndex].src}
          alt={images[selectedImageIndex].alt}
          onClose={closeModal}
        />
      )}
    </>
  );
}

export function Home() {
  return (
      <div className="max-w-3xl mx-auto px-6 py-12">

        {/* タイトル */}
        <h1 className="text-4xl font-bold mb-4">二島急行</h1>
        <p className="text-lg text-gray-700 mb-8">
          二島サーバー 二島急行の公式ページです
        </p>

        {/* 横スクロール画像ギャラリー */}
        <LandscapeSwiperGallery></LandscapeSwiperGallery>

        {/* セクション：岩山市とは */}
        <h2 className="text-2xl font-semibold mb-4">二島急行とは</h2>

        <p className="text-gray-700 leading-relaxed space-y-4">
          <span className="block">
            大島空港から八の宮を結ぶ路線です。
          </span>
          <span className="block">
            二島サーバー最古の鉄道路線です。
          </span>
        </p>

      </div>
  );
}
