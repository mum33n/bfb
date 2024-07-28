interface HeroProps {}

const Hero: React.FC<HeroProps> = () => {
  return (
    <div className="text-white text-center my-60 md:w-2/3 mx-auto">
      <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold">
        BAND FOR BAND CTO
      </h1>
      <div className="text-xl lg:text-3xl mt-5">
        BAND FOR BAND is a Bullish narrative abandoned by a greedy Dev and
        takeover by Chads and transparent community.
      </div>
      <div className="flex mt-10 items-center justify-center gap-5">
        <a
          href="https://jup.ag/swap/SOL-4JjLk3DcbZfRqkSoNfJxjKXSs8tcfiH1LSpDj3i6pump"
          className="px-5 py-2 rounded-full bg-white text-[#37ac2f] font-bold"
        >
          Buy $BFB
        </a>
        <a
          href="https://dexscreener.com/solana/hmmqfanb1ee8gmsmaesgzv6pohhlrbtvqbywcyrlfrof"
          className="px-5 py-2 rounded-full bg-white text-[#37ac2f] font-bold"
        >
          Dexscreener
        </a>
      </div>
    </div>
  );
};

export default Hero;
