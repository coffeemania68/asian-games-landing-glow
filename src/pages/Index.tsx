
import { useState } from "react";
import { motion } from "framer-motion";

const Index = () => {
  const [isHovered, setIsHovered] = useState<string | null>(null);

  const buttonVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.05 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* Header Container with Coupang Notice */}
      <div className="w-full">
        <div className="flex h-[150px] relative">
          <img
            src="https://weboss.harbin2025.com/media/20241216/01534384680c21c1f18f13193b9f098443.png"
            alt="하얼빈 동계 아시안게임 1"
            className="w-1/2 object-cover"
          />
          <img
            src="https://weboss.harbin2025.com/media/20241216/01d1e0e3fe7acbac2bda713c1218bd3497.png"
            alt="하얼빈 동계 아시안게임 2"
            className="w-1/2 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30 flex flex-col items-center justify-between py-2">
            <div className="bg-white/90 backdrop-blur px-4 py-1 rounded-lg mx-4">
              <p className="text-gray-700 text-xs leading-relaxed text-center">
                이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다.
              </p>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white text-center leading-relaxed mb-4">
              제9회 하얼빈<br />동계아시안게임
            </h1>
          </div>
        </div>
      </div>

      {/* Main Action Buttons */}
      <div className="container mx-auto px-4 space-y-3 mb-6 mt-6">
        <motion.a
          href="https://m.sports.naver.com/general/video?category=harbin2025&sort=date&tab=latest"
          className="block w-full p-4 bg-[#FEC6A1] text-gray-700 text-center rounded-xl shadow-lg font-bold text-lg hover:bg-[#FDE1D3] transition-all"
          variants={buttonVariants}
          initial="initial"
          whileHover="hover"
        >
          실시간 중계 보기
        </motion.a>
        <motion.a
          href="https://namu.wiki/w/2025%20%ED%95%98%EC%96%BC%EB%B9%88%20%EB%8F%99%EA%B3%84%20%EC%95%84%EC%8B%9C%EC%95%88%20%EA%B2%8C%EC%9E%84#s-8"
          className="block w-full p-4 bg-[#F2FCE2] text-gray-700 text-center rounded-xl shadow-lg font-bold text-lg hover:bg-[#E5DEFF] transition-all"
          variants={buttonVariants}
          initial="initial"
          whileHover="hover"
        >
          2025 경기 일정 보기
        </motion.a>
        <motion.a
          href="https://coffeemania68.github.io/onairlink/"
          className="block w-full p-4 bg-[#FFDEE2] text-gray-700 text-center rounded-xl shadow-lg font-bold text-lg hover:bg-[#FDE1D3] transition-all"
          variants={buttonVariants}
          initial="initial"
          whileHover="hover"
        >
          진행 경기 보러가기
        </motion.a>
      </div>

      {/* Highlight Sections - Always 1x2 Layout */}
      <div className="container mx-auto px-4 flex gap-4 mb-6">
        <motion.a
          href="https://m.sports.naver.com/general/video?category=harbin2025&sort=date&tab=latest"
          className="w-1/2 aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-[#F2FCE2] to-[#E5DEFF] p-6 text-gray-700 flex flex-col items-center justify-center cursor-pointer shadow-lg"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <h3 className="text-2xl font-bold mb-2">하이라이트</h3>
          <p className="text-center opacity-90">주요 경기 하이라이트 영상</p>
        </motion.a>
        <motion.a
          href="https://namu.wiki/w/2025%20%ED%95%98%EC%96%BC%EB%B9%88%20%EB%8F%99%EA%B3%84%20%EC%95%84%EC%8B%9C%EC%95%88%20%EA%B2%8C%EC%9E%84#s-8"
          className="w-1/2 aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-[#FEF7CD] to-[#FDE1D3] p-6 text-gray-700 flex flex-col items-center justify-center cursor-pointer shadow-lg"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <h3 className="text-2xl font-bold mb-2">실시간 한국 순위</h3>
          <p className="text-center opacity-90">메달 획득 현황</p>
        </motion.a>
      </div>

      {/* Galaxy Promotion Banner */}
      <div className="w-[95%] mx-auto">
        <a href="https://link.coupang.com/a/cdKvMW" className="block">
          <div className="bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 text-white rounded-xl shadow-lg overflow-hidden transform transition-all hover:scale-[1.02]">
            <div className="p-3 flex flex-col md:flex-row items-center justify-between">
              <div className="mb-2 md:mb-0 md:mr-6">
                <h3 className="text-xl font-bold mb-1">Galaxy S25 Series 최저가</h3>
                <p className="text-sm opacity-80">놓치지 마세요</p>
              </div>
              <div>
                <span className="px-4 py-2 bg-white text-black font-bold rounded-full text-base hover:bg-gray-100 transition-all">
                  지금 바로가기
                </span>
              </div>
            </div>
          </div>
        </a>
      </div>

      {/* Footer */}
      <footer className="bg-gray-100 mt-12 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-600">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
            <p>웹사이트 제작: <a href="https://drivemoments.kr" className="text-blue-600 hover:text-blue-800 transition-colors">DriveM</a></p>
            <div className="hidden sm:block text-gray-400">|</div>
            <p>문의: <a href="mailto:yourmoments@gmail.com" className="hover:text-gray-800 transition-colors">yourmoments@gmail.com</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
