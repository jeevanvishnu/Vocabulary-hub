import { useState, useEffect } from 'react';

export default function AmazingLoader() {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          setIsComplete(true);
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  const reset = () => {
    setProgress(0);
    setIsComplete(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-8">
      <div className="relative">
        {/* Outer rotating ring */}
        <div className="absolute inset-0 animate-spin" style={{ animationDuration: '3s' }}>
          <div className="w-64 h-64 rounded-full border-4 border-transparent border-t-purple-500 border-r-pink-500"></div>
        </div>
        
        {/* Middle rotating ring */}
        <div className="absolute inset-4 animate-spin" style={{ animationDuration: '2s', animationDirection: 'reverse' }}>
          <div className="w-56 h-56 rounded-full border-4 border-transparent border-t-cyan-400 border-l-blue-500"></div>
        </div>
        
        {/* Inner pulsing circle */}
        <div className="absolute inset-8 flex items-center justify-center">
          <div className="w-48 h-48 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 animate-pulse flex items-center justify-center shadow-2xl shadow-purple-500/50">
            <div className="w-40 h-40 rounded-full bg-slate-900/90 backdrop-blur-sm flex flex-col items-center justify-center p-6">
              {!isComplete ? (
                <>
                  <div className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                    {progress}%
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 ease-out"
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                  <div className="text-slate-400 text-xs mt-3 tracking-wider">LOADING</div>
                </>
              ) : (
                <>
                  <svg className="w-16 h-16 text-green-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div className="text-slate-300 text-sm mb-3">Complete!</div>
                  <button 
                    onClick={reset}
                    className="px-4 py-1.5 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                  >
                    Reset
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
        
        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-purple-400 rounded-full animate-ping"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.2}s`,
                animationDuration: '2s'
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}