// components/TrustedBy.js

const brands = [
  { name: "Tinder", src: "/logos/tinder.svg", height: "h-[1.2rem]" },
  { name: "Portola", src: "/logos/portola.svg", height: "h-[1.45rem]" },
  { name: "HeyGen", src: "/logos/heygen.svg", height: "h-[1.45rem]" },
  { name: "ElevenLabs", src: "/logos/elevenlabs.svg", height: "h-[1.2rem]" },
  { name: "Oracle", src: "/logos/oracle.svg", height: "h-[0.8rem]" },

];

export default function TrustedBy() {
  return (
    <div className="w-full border-b border-separator1 lg:border-t ">
      <div className="grid grid-cols-2 items-center overflow-hidden lg:mx-auto lg:max-w-7xl lg:grid-cols-6">
        {/* Left Text Cell */}
        <div className="flex h-16 items-center justify-center border-r border-t border-separator1 lg:border-l lg:border-t-0">
          <div className="text-balance px-4 text-[#b2b2b2] text-center text-sm font-semibold text-fg1 lg:text-left">
            Powering billions of calls in production for:
          </div>
        </div>

        {/* Logos */}
        {brands.map((brand, i) => (
          <div
            key={brand.name}
            className={`relative h-16 items-center justify-center overflow-hidden border-separator1 border-t ${
              i % 2 === 0 ? "odd:border-r" : ""
            } lg:border-r lg:border-t-0`}
          >
            <div className="absolute flex h-full w-full items-center justify-center transform origin-bottom opacity-100">
              <img
                alt={brand.name}
                src={brand.src}
                className={`w-auto ${brand.height}`}
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
