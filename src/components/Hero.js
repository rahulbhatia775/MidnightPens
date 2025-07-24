import React from 'react';

const Hero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 border-4 border-orange-200">

      {/* Background Text Animation */}
      <div className="absolute -inset-[50%] z-0 rotate-45 overflow-hidden">
        <div className="flex flex-col space-y-8 text-orange-300 opacity-30 select-none pointer-events-none text-4xl font-bold whitespace-nowrap animate-diagonalScroll">
          {Array.from({ length: 50 }).map((_, i) => (
            <div key={i} className="flex space-x-12">
              {Array.from({ length: 50 }).map((_, j) => (
                <span key={j}>MIDNIGHTPENS</span>
              ))}
            </div>
          ))}
        </div>
      </div>



      
      {/* Main Content */}
      <div className="relative flex flex-col items-center justify-center h-full px-8 z-10 text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-orange-900 mb-4 leading-tight">
          MidnightPens
        </h1>
        <p className="text-lg md:text-xl text-orange-800 mb-6 max-w-2xl mx-auto leading-relaxed">
          Where words come alive — share stories, spark ideas, and let your midnight thoughts shine.
          <span className="block mt-1 text-orange-600 font-semibold">
            Write. Connect. Inspire.
          </span>
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
          <a
            href="/#"
            className="bg-orange-600 text-white px-6 py-3 rounded-xl hover:bg-orange-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-center"
          >
            Join Community
          </a>
          <a
            href="/write"
            className="border-2 border-orange-300 text-orange-700 px-6 py-3 rounded-xl hover:border-orange-400 hover:bg-orange-50 transition-all duration-300 font-semibold text-center"
          >
            Explore Blogs
          </a>
        </div>
      </div>

      {/* Floating UI elements */}
      <div className="absolute top-20 left-8 z-30 bg-white rounded-xl p-3 shadow-lg border border-orange-200 transform rotate-2 hover:rotate-0 transition-transform duration-500">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <span className="text-orange-800 font-medium text-sm">New story published</span>
        </div>
      </div>

      <div className="absolute top-32 right-8 z-30 bg-white rounded-xl p-3 shadow-lg border border-orange-200 transform -rotate-1 hover:rotate-0 transition-transform duration-500">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
          <span className="text-orange-800 font-medium text-sm">5 comments received</span>
        </div>
      </div>

      <div className="absolute bottom-32 left-8 z-30 bg-white rounded-xl p-3 shadow-lg border border-orange-200 transform rotate-1 hover:rotate-0 transition-transform duration-500">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
          <span className="text-orange-800 font-medium text-sm">Draft saved</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
