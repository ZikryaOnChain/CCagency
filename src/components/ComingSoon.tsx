import { SparklesCore } from './ui/sparkles';
import { useEffect } from 'react';

const ComingSoon = () => {
  useEffect(() => {
    console.log('ComingSoon component mounted');
  }, []);

  return (
    <div className="h-screen relative w-full bg-slate-950 flex flex-col items-center justify-center overflow-hidden">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlescomingsoon"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
          speed={1}
        />
      </div>
      
      {/* Add gradient effects */}
      <div className="relative z-20 space-y-2">
        <div className="w-[48rem] h-20 relative">
          {/* Gradients */}
          <div className="absolute left-[55%] -translate-x-1/2 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute left-[55%] -translate-x-1/2 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <div className="absolute left-[55%] -translate-x-1/2 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute left-[55%] -translate-x-1/2 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
        </div>
        
        <div className="flex items-center justify-center min-h-[160px]">
          <h1 className="md:text-6xl text-2xl lg:text-8xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 tracking-wider uppercase">
            COMING SOON!
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon; 