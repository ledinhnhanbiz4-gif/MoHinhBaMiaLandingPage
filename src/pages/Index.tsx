import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, MessageCircle, Sun, Moon } from 'lucide-react';
import { FaTiktok } from 'react-icons/fa';
import { SiShopee } from 'react-icons/si'; // Thêm import cho icon Shopee
import { Button } from '@/components/ui/button';
import { useTheme } from 'next-themes';
import ZaloIcon from '@/components/ui/ZaloIcon';

const Index = () => {
  const { theme, setTheme } = useTheme();

  const socialLinks = [
  {
    name: 'Zalo',
    icon: ZaloIcon,
    url: 'https://zalo.me/g/cfadwi596',
    color: 'bg-blue-500 hover:bg-blue-600',
    description: 'Chat trực tiếp qua Zalo'
  },
  {
    name: 'Facebook',
    icon: Facebook,
    url: 'https://www.facebook.com/MoHinhBaMia',
    color: 'bg-blue-600 hover:bg-blue-700',
    description: 'Theo dõi Facebook'
  },
  {
    name: 'TikTok',
    icon: FaTiktok,
    url: 'https://www.tiktok.com/@bamiamohinh',
    color: 'bg-black hover:bg-gray-800',
    description: 'Xem video TikTok'
  },
  {
    name: 'Shopee',
    icon: SiShopee, // Thay đổi icon thành SiShopee
    url: 'https://shopee.vn/mohinhbamia',
    color: 'bg-orange-500 hover:bg-orange-600',
    description: 'Mua sắm trên Shopee'
  }
];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 dark:from-gray-900 dark:via-gray-800 dark:to-green-900 transition-colors duration-500">
      {/* Theme Toggle */}
      <div className="fixed top-4 right-4 z-50">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="rounded-full shadow-lg backdrop-blur-sm bg-white/80 dark:bg-gray-800/80"
        >
          {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </Button>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Header với Banner 3D */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          {/* Banner 3D */}
          <motion.div
            className="relative mx-auto mb-8 w-64 h-64 md:w-80 md:h-80"
            initial={{ rotateY: -15, rotateX: 10 }}
            animate={{ rotateY: [-15, 15, -15], rotateX: [10, -5, 10] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
          >
            {/* Khung 3D chính */}
            <div className="relative w-full h-full bg-gradient-to-br from-green-400 via-green-500 to-green-600 rounded-3xl shadow-2xl transform-gpu">
              {/* Hiệu ứng ánh sáng */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent rounded-3xl"></div>
              
              {/* Nội dung banner */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8">
                <motion.div
                  animate={{ rotate: [0, 0] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="mb-0"
                >
                  <div className="w-40 h-40 bg-white-400 rounded-full flex items-center justify-center shadow-lg overflow-hidden">
                    <img
                      src="/public/logo.png"
                      alt="Logo"
                      className="w-30 h-30 object-contain"
                    />
                  </div>
                </motion.div>

                
                <h1 className="text-3xl md:text-3xl font-bold mb-1 text-center leading-tight">
                  Mô Hình
                </h1>
                <h2 className="text-2xl md:text-2xl font-bold text-yellow-300">
                  Ba Mía
                </h2>
              </div>

              {/* Hiệu ứng shadow 3D */}
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-green-700/30 rounded-3xl -z-10 blur-sm"></div>
            </div>

            {/* Particles floating */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-yellow-400 rounded-full"
                style={{
                  left: `${20 + i * 15}%`,
                  top: `${10 + i * 10}%`,
                }}
                animate={{
                  y: [-10, 10, -10],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2 + i * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
          </motion.div>

          {/* Mô tả */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed"
          >
            Khám phá mô hình kinh doanh Ba Mía độc đáo - Kết nối với chúng tôi qua các nền tảng mạng xã hội
          </motion.p>
        </motion.div>

        {/* Social Links Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 + index * 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className={`${link.color} text-white p-6 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl`}>
                <div className="flex items-center space-x-4">
                  <div className="bg-white/20 p-3 rounded-xl">
                    <link.icon size={32} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-1">{link.name}</h3>
                    <p className="text-white/90 text-sm">{link.description}</p>
                  </div>
                  <div className="text-white/60">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="text-center mt-16 py-8"
        >
          <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 max-w-md mx-auto">
            <p className="text-gray-600 dark:text-gray-400 mb-2">
              © 2025 Mô Hình Ba Mía
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500">
              Kết nối - Chia sẻ - Phát triển
            </p>
          </div>
        </motion.footer>
      </div>

      {/* Background decorations */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-green-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Index;