
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
      {/* Coupang Partners Notice */}
      <div className="w-[95%] mx-auto bg-gradient-to-r from-white to-gray-50 border border-gray-100 rounded-lg p-4 shadow-sm mt-4">
        <p className="text-gray-600 text-sm leading-relaxed text-center">
          이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다.
        </p>
      </div>

      {/* Hero Section */}
      <div className="relative w-full h-[60vh] overflow-hidden mb-8">
        <img
          src="/lovable-uploads/ef5d6b57-ffd7-4b36-8dba-ac4292265413.png"
          alt="2025 하얼빈 동계 아시안게임"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30">
          <div className="container mx-auto px-4 h-full flex items-center justify-center">
            <h1 className="text-4xl md:text-6xl text-white font-bold text-center animate-fade-in">
              제9회 하얼빈 동계 아시안게임
            </h1>
          </div>
        </div>
      </div>

      {/* Main Action Buttons */}
      <div className="container mx-auto px-4 space-y-4 mb-8">
        <motion.a
          href="#"
          className="block w-full p-4 bg-red-600 text-white text-center rounded-xl shadow-lg font-bold text-lg hover:bg-red-700 transition-all"
          variants={buttonVariants}
          initial="initial"
          whileHover="hover"
        >
          실시간 중계 보기
        </motion.a>
        <motion.a
          href="#"
          className="block w-full p-4 bg-amber-400 text-white text-center rounded-xl shadow-lg font-bold text-lg hover:bg-amber-500 transition-all"
          variants={buttonVariants}
          initial="initial"
          whileHover="hover"
        >
          2025 경기 일정 보기
        </motion.a>
        <motion.a
          href="#"
          className="block w-full p-4 bg-blue-600 text-white text-center rounded-xl shadow-lg font-bold text-lg hover:bg-blue-700 transition-all"
          variants={buttonVariants}
          initial="initial"
          whileHover="hover"
        >
          경기 종목 보기
        </motion.a>
      </div>

      {/* Highlight Sections */}
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <motion.div
          className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-purple-500 to-pink-500 p-6 text-white flex flex-col items-center justify-center cursor-pointer"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <h3 className="text-2xl font-bold mb-2">하이라이트</h3>
          <p className="text-center opacity-90">주요 경기 하이라이트 영상</p>
        </motion.div>
        <motion.div
          className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-blue-500 to-cyan-500 p-6 text-white flex flex-col items-center justify-center cursor-pointer"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <h3 className="text-2xl font-bold mb-2">실시간 한국 순위</h3>
          <p className="text-center opacity-90">메달 획득 현황</p>
        </motion.div>
      </div>

      {/* Galaxy Promotion Banner */}
      <div className="w-[95%] mx-auto mt-4">
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
