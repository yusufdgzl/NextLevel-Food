export default function LoadingIndicator() {
  return (
    <div className="m-auto my-20  relative w-40 h-10  ">
      <span className="absolute rounded-full h-14 w-1 bg-pink-700 -translate-y-3 rotate-[30deg] translate-x-6 animate-pulse "></span>
      <span className="absolute rounded-full h-14 w-1 rotate-[30deg] translate-y-1 translate-x-9 bg-pink-700  "></span>
      <span className="absolute rounded-full h-14 w-1 rotate-[30deg] translate-y-2 translate-x-[60px] bg-pink-700 animate-pulse"></span>
      <span className="absolute rounded-full h-14 w-1 rotate-[30deg] translate-y-3 translate-x-[84px] bg-pink-700 animate-pulse"></span>
      <span className="absolute rounded-full h-14 w-1 rotate-[30deg] translate-y-2 translate-x-[108px] bg-pink-700 "></span>
      <span className="absolute rounded-full h-14 w-1 rotate-[30deg] -translate-y-1 translate-x-[136px] bg-pink-700 animate-pulse"></span>
      <p className="absolute -top-4 right-8 bg-transparent bg-clip-text text-transparent  bg-gradient-to-r from-pink-400 animate-pulse to-slate-300">
        loading...
      </p>
    </div>
  );
}
