// "use client";

// import { useEffect, useState, useRef } from "react";
// import dynamic from "next/dynamic";

// // Dynamically import Globe
// const Globe = dynamic(() => import("react-globe.gl"), { ssr: false });

// export default function FancyGlobe() {
//   const [mounted, setMounted] = useState(false);
//   const globeRef = useRef(null);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   useEffect(() => {
//     if (!globeRef.current) return;

//     const controls = globeRef.current.controls();
//     if (controls) {
//       controls.autoRotate = true; // auto rotate globe
//       controls.autoRotateSpeed = 1; // speed
//       controls.enableZoom = false; // ❌ disable zoom with scroll
//       controls.enablePan = false; // ❌ disable dragging globe
//     }
//     // 👇 London par POV set
//     globeRef.current.pointOfView(
//       { lat: 51.5074, lng: -0.1278, altitude: 2.5 },
//       2000 // 2 sec smooth animation
//     );
//   }, [mounted]);

//   if (!mounted) {
//     return <div className="text-white text-center p-10">Loading globe...</div>;
//   }

//   // const cities = [
//   //   { lat: 28.7041, lng: 77.1025, size: 1.5, name: "Delhi" },
//   //   { lat: 51.5074, lng: -0.1278, size: 1.5, name: "London" },
//   //   { lat: 40.7128, lng: -74.006, size: 1.5, name: "New York" },
//   //   { lat: 35.6762, lng: 139.6503, size: 1.5, name: "Tokyo" },
//   //   { lat: 5.6037, lng: -0.187, size: 1.5, name: "Accra (Ghana)" }, // 🇬🇭 Ghana
//   // ];

//   const cities = [
//   { lat: 28.7041, lng: 77.1025, size: 1.5, name: "Delhi" },
//   { lat: 51.5074, lng: -0.1278, size: 1.5, name: "London" },
//   { lat: 40.7128, lng: -74.006, size: 1.5, name: "New York" },
//   { lat: 35.6762, lng: 139.6503, size: 1.5, name: "Tokyo" },
//   { lat: 5.6037, lng: -0.1870, size: 1.5, name: "Accra (Ghana)" },
//   { lat: 48.8566, lng: 2.3522, size: 1.5, name: "Paris" },
//   { lat: 55.7558, lng: 37.6173, size: 1.5, name: "Moscow" },
//   { lat: -33.8688, lng: 151.2093, size: 1.5, name: "Sydney" },
//   { lat: -23.5505, lng: -46.6333, size: 1.5, name: "São Paulo" },
//   { lat: 39.9042, lng: 116.4074, size: 1.5, name: "Beijing" },
//   { lat: -1.2921, lng: 36.8219, size: 1.5, name: "Nairobi" },
//   { lat: 19.4326, lng: -99.1332, size: 1.5, name: "Mexico City" },
//   { lat: 52.52, lng: 13.405, size: 1.5, name: "Berlin" },
//   { lat: -26.2041, lng: 28.0473, size: 1.5, name: "Johannesburg" },
//   { lat: 37.7749, lng: -122.4194, size: 1.5, name: "San Francisco" },
//   { lat: 41.0082, lng: 28.9784, size: 1.5, name: "Istanbul" },
//   { lat: 34.0522, lng: -118.2437, size: 1.5, name: "Los Angeles" },
//   { lat: -34.6037, lng: -58.3816, size: 1.5, name: "Buenos Aires" },
//   { lat: 31.2304, lng: 121.4737, size: 1.5, name: "Shanghai" },
//   { lat: 43.6532, lng: -79.3832, size: 1.5, name: "Toronto" },
//   { lat: 25.2048, lng: 55.2708, size: 1.5, name: "Dubai" },
//   { lat: 59.3293, lng: 18.0686, size: 1.5, name: "Stockholm" },
//   { lat: 1.3521, lng: 103.8198, size: 1.5, name: "Singapore" },
//   { lat: 30.0444, lng: 31.2357, size: 1.5, name: "Cairo" },
//   { lat: 13.7563, lng: 100.5018, size: 1.5, name: "Bangkok" }
// ];

//   return (
//     <div className="relative flex items-center justify-center min-h-screen bg-black overflow-hidden">
//       {/* 🔳 Grid Background */}
//       <div
//         className="absolute inset-0"
//         style={{
//           backgroundImage: `
//             linear-gradient(to right, #1F1F1F 0px, #1F1F1F 1px, transparent 1px, transparent 70px),
//             linear-gradient(to bottom, #1F1F1F 0px, #1F1F1F 1px, transparent 1px, transparent 70px)
//           `,
//           backgroundSize: "70px 70px",
//         }}
//       />

//       {/* 🌍 Globe */}
//       <div className="relative z-10 w-[600px] h-[600px] flex items-center justify-center">
//         <Globe
//           ref={globeRef}
//           globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
//           backgroundColor="rgba(0,0,0,0)" // transparent bg
//           showAtmosphere={true}
//           atmosphereColor="cyan"
//           atmosphereAltitude={0.25}
//           width={600}
//           height={600}
//           pointsData={cities}
//           pointLat="lat"
//           pointLng="lng"
//           pointColor={() => "#00ffff"}
//           pointAltitude={0.05}
//           pointRadius={0.5}
//           labelsData={cities}
//           labelLat="lat"
//           labelLng="lng"
//           labelText="name"
//           labelColor={() => "#00ffff"}
//           labelSize={2}
//           labelDotRadius={0.3}
//           labelAltitude={0.01}
//           pointOfView={{ lat: 28.7041, lng: 77.1025, altitude: 2.5 }} // Correct syntax
//         />
//       </div>
//     </div>
//   );
// // }
// "use client";

// import { useEffect, useState, useRef } from "react";
// import dynamic from "next/dynamic";

// // Dynamically import Globe
// const Globe = dynamic(() => import("react-globe.gl"), { ssr: false });

// export default function FancyGlobe() {
//   const [mounted, setMounted] = useState(false);
//   const globeRef = useRef(null);

//   const [selectedCountry, setSelectedCountry] = useState(null);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   useEffect(() => {
//     if (!globeRef.current) return;

//     const controls = globeRef.current.controls();
//     if (controls) {
//       controls.autoRotate = true;
//       controls.autoRotateSpeed = 1;
//       controls.enableZoom = false;
//       controls.enablePan = false;
//     }
//     // Default POV (London)
//     globeRef.current.pointOfView(
//       { lat: 51.5074, lng: -0.1278, altitude: 2.5 },
//       2000
//     );
//   }, [mounted]);

//   // Cities Data
//   const cities = [
//     { lat: -33.8688, lng: 151.2093, name: "Australia" },
//     { lat: -23.5505, lng: -46.6333, name: "Brazil" },
//     { lat: 48.8566, lng: 2.3522, name: "France" },
//     { lat: 52.52, lng: 13.405, name: "Germany" },
//     { lat: 28.7041, lng: 77.1025, name: "India" },
//     { lat: 31.2304, lng: 121.4737, name: "India 2" },
//     { lat: 32.0853, lng: 34.7818, name: "Israel" },
//     { lat: 35.6762, lng: 139.6503, name: "Japan" },
//     { lat: 24.7136, lng: 46.6753, name: "Saudi Arabia" },
//     { lat: 1.3521, lng: 103.8198, name: "Singapore" },
//     { lat: -26.2041, lng: 28.0473, name: "South Africa" },
//   ];

//   // Arrows (arc) data
//   const arcsData = selectedCountry
//     ? [
//         {
//           startLat: 0, // center origin
//           startLng: 0,
//           endLat: selectedCountry.lat,
//           endLng: selectedCountry.lng,
//           color: "cyan",
//         },
//       ]
//     : [];

//   // Handle click on country list
//   const handleCountryClick = (country) => {
//     setSelectedCountry(country);
//     if (globeRef.current) {
//       globeRef.current.pointOfView(
//         { lat: country.lat, lng: country.lng, altitude: 2.5 },
//         2000
//       );
//     }
//   };

//   if (!mounted) {
//     return <div className="text-white text-center p-10">Loading globe...</div>;
//   }

//   return (
//     <div className="relative flex items-center justify-center min-h-screen bg-black overflow-hidden text-white">
//       {/* Grid Background */}
//       <div
//         className="absolute inset-0"
//         style={{
//           backgroundImage: `
//             linear-gradient(to right, #1F1F1F 0px, #1F1F1F 1px, transparent 1px, transparent 70px),
//             linear-gradient(to bottom, #1F1F1F 0px, #1F1F1F 1px, transparent 1px, transparent 70px)
//           `,
//           backgroundSize: "70px 70px",
//         }}
//       />

//       {/* Left Side Stats */}
//       <div className="absolute left-10 top-1/2 -translate-y-1/2 space-y-6 text-gray-300">
//         <div>
//           <p>GDPR ✓</p>
//           <p>SOC 2 TYPE 2 ✓</p>
//           <p>HIPAA ✓</p>
//         </div>
//         <div>
//           <p className="text-xl font-bold">99.99%</p>
//           <p>UPTIME</p>
//         </div>
//         <div>
//           <p className="text-xl font-bold">100ms</p>
//           <p>GLOBAL LATENCY</p>
//         </div>
//         <div>
//           <p className="text-xl font-bold">100,000+</p>
//           <p>DEVELOPERS</p>
//         </div>
//         <div>
//           <p className="text-xl font-bold">3,000,000,000+</p>
//           <p>CALLS ANNUALLY</p>
//         </div>
//       </div>

//       {/* Center Globe */}
//       <div className="relative z-10 w-[600px] h-[600px] flex items-center justify-center">
//         <Globe
//           ref={globeRef}
//           globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
//           backgroundColor="rgba(0,0,0,0)"
//           showAtmosphere={true}
//           atmosphereColor="cyan"
//           atmosphereAltitude={0.25}
//           width={600}
//           height={600}
//           pointsData={cities}
//           pointLat="lat"
//           pointLng="lng"
//           pointColor={() => "#00ffff"}
//           pointAltitude={0.05}
//           pointRadius={0.5}
//           labelsData={cities}
//           labelLat="lat"
//           labelLng="lng"
//           labelText="name"
//           labelColor={() => "#00ffff"}
//           labelSize={1.5}
//           labelDotRadius={0.3}
//           labelAltitude={0.01}
//           arcsData={arcsData}
//           arcColor={(d) => d.color}
//           arcStroke={1.5}
//           arcDashLength={0.3}
//           arcDashGap={0.015}
//           arcDashAnimateTime={2000}
//         />
//       </div>

//       {/* Right Side Country List */}
//       <div className="absolute right-10 top-1/2 -translate-y-1/2 space-y-3 text-gray-400">
//         <h2 className="font-bold text-white mb-4">17+ REGIONS GLOBALLY</h2>
//         {cities.map((c, idx) => (
//           <div
//             key={idx}
//             onClick={() => handleCountryClick(c)}
//             className={`cursor-pointer px-2 py-1 ${
//               selectedCountry?.name === c.name ? "bg-cyan-800 text-white" : ""
//             }`}
//           >
//             {c.name}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// "use client";

// import { useEffect, useState, useRef } from "react";
// import dynamic from "next/dynamic";
// import * as d3 from "d3";
// import * as topojson from "topojson-client";

// // Dynamically import Globe
// const Globe = dynamic(() => import("react-globe.gl"), { ssr: false });

// export default function FancyGlobe() {
//   const [mounted, setMounted] = useState(false);
//   const globeRef = useRef(null);
//   const [countries, setCountries] = useState([]);

//   useEffect(() => {
//     setMounted(true);

//     // ✅ Load simplified world polygons
//     fetch("//unpkg.com/world-atlas/countries-50m.json")
//       .then((res) => res.json())
//       .then((world) => {
//         const countries = topojson.feature(world, world.objects.countries).features;

//         // Only valid Polygon / MultiPolygon
//         const validCountries = countries.filter(
//           (d) =>
//             d.geometry &&
//             (d.geometry.type === "Polygon" || d.geometry.type === "MultiPolygon")
//         );

//         setCountries(validCountries);
//       });
//   }, []);

//   useEffect(() => {
//     if (!globeRef.current) return;

//     const controls = globeRef.current.controls();
//     if (controls) {
//       controls.autoRotate = true;
//       controls.autoRotateSpeed = 1;
//       controls.enableZoom = false;
//       controls.enablePan = false;
//     }

//     // Default POV
//     globeRef.current.pointOfView(
//       { lat: 20, lng: 80, altitude: 2.5 },
//       2000
//     );
//   }, [mounted]);

//   if (!mounted) {
//     return <div className="text-white text-center p-10">Loading globe...</div>;
//   }

//   return (
//     <div className="relative flex items-center justify-center min-h-screen bg-black overflow-hidden text-white">
//       {/* Left Stats */}
//       <div className="absolute left-10 top-1/2 -translate-y-1/2 space-y-6 text-gray-300">
//         <div>
//           <p>GDPR ✓</p>
//           <p>SOC 2 TYPE 2 ✓</p>
//           <p>HIPAA ✓</p>
//         </div>
//         <div>
//           <p className="text-xl font-bold">99.99%</p>
//           <p>UPTIME</p>
//         </div>
//         <div>
//           <p className="text-xl font-bold">100ms</p>
//           <p>GLOBAL LATENCY</p>
//         </div>
//         <div>
//           <p className="text-xl font-bold">100,000+</p>
//           <p>DEVELOPERS</p>
//         </div>
//         <div>
//           <p className="text-xl font-bold">3,000,000,000+</p>
//           <p>CALLS ANNUALLY</p>
//         </div>
//       </div>

//       {/* Center Globe */}
//       <div className="relative z-10 w-[700px] h-[700px] flex items-center justify-center">
//         <Globe
//           ref={globeRef}
//           globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
//           backgroundColor="rgba(0,0,0,0)"
//           showAtmosphere={true}
//           atmosphereColor="cyan"
//           atmosphereAltitude={0.25}
//           width={700}
//           height={700}
//           hexPolygonsData={countries}   // ✅ polygons
//           hexPolygonResolution={3}      // detail level
//           hexPolygonMargin={0.6}        // spacing between hexes
//           hexPolygonColor={() =>
//             d3.schemeCategory10[Math.floor(Math.random() * 10)]
//           }
//         />
//       </div>
//     </div>
//   );
// }

// "use client";

// import { useEffect, useState, useRef } from "react";
// import dynamic from "next/dynamic";
// import * as d3 from "d3";
// import * as topojson from "topojson-client";

// // Dynamically import Globe
// const Globe = dynamic(() => import("react-globe.gl"), { ssr: false });

// export default function FancyGlobe() {
//   const [mounted, setMounted] = useState(false);
//   const globeRef = useRef(null);
//   const [countries, setCountries] = useState([]);

//   useEffect(() => {
//     setMounted(true);

//     // ✅ Load simplified world polygons
//     fetch("//unpkg.com/world-atlas/countries-50m.json")
//       .then((res) => res.json())
//       .then((world) => {
//         const countries = topojson.feature(world, world.objects.countries).features;

//         // Only valid Polygon / MultiPolygon
//         const validCountries = countries.filter(
//           (d) =>
//             d.geometry &&
//             (d.geometry.type === "Polygon" || d.geometry.type === "MultiPolygon")
//         );

//         setCountries(validCountries);
//       });
//   }, []);

//   useEffect(() => {
//     if (!globeRef.current) return;

//     const controls = globeRef.current.controls();
//     if (controls) {
//       controls.autoRotate = true;
//       controls.autoRotateSpeed = 1;
//       controls.enableZoom = false;
//       controls.enablePan = false;
//     }

//     // Default POV
//     globeRef.current.pointOfView(
//       { lat: 20, lng: 80, altitude: 2.5 },
//       2000
//     );
//   }, [mounted]);

//   if (!mounted) {
//     return <div className="text-white text-center p-10">Loading globe...</div>;
//   }

//   return (
//     <div className="relative flex items-center justify-center min-h-screen bg-black overflow-hidden text-white">
//       {/* Left Stats */}
//       <div className="absolute left-10 top-1/2 -translate-y-1/2 space-y-6 text-gray-300">
//         <div>
//           <p>GDPR ✓</p>
//           <p>SOC 2 TYPE 2 ✓</p>
//           <p>HIPAA ✓</p>
//         </div>
//         <div>
//           <p className="text-xl font-bold">99.99%</p>
//           <p>UPTIME</p>
//         </div>
//         <div>
//           <p className="text-xl font-bold">100ms</p>
//           <p>GLOBAL LATENCY</p>
//         </div>
//         <div>
//           <p className="text-xl font-bold">100,000+</p>
//           <p>DEVELOPERS</p>
//         </div>
//         <div>
//           <p className="text-xl font-bold">3,000,000,000+</p>
//           <p>CALLS ANNUALLY</p>
//         </div>
//       </div>

//       {/* Center Globe */}
//       <div className="relative z-10 w-[700px] h-[700px] flex items-center justify-center">
//         <Globe
//           ref={globeRef}
//           globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
//           backgroundColor="rgba(0,0,0,0)"
//           showAtmosphere={true}
//           atmosphereColor="cyan"
//           atmosphereAltitude={0.25}
//           width={700}
//           height={700}
//           hexPolygonsData={countries}   // ✅ polygons
//           hexPolygonResolution={3}      // detail level
//           hexPolygonMargin={0.6}        // spacing between hexes
//           hexPolygonColor={() =>
//             d3.schemeCategory10[Math.floor(Math.random() * 10)]
//           }
//         />
//       </div>
//     </div>
//   );
// }

"use client";

import { useEffect, useState, useRef } from "react";
import dynamic from "next/dynamic";
import * as d3 from "d3";
import * as topojson from "topojson-client";

// Dynamically import Globe
const Globe = dynamic(() => import("react-globe.gl"), { ssr: false });

export default function FancyGlobe() {
  const [mounted, setMounted] = useState(false);
  const globeRef = useRef(null);
  const [countries, setCountries] = useState([]);

  // ✅ 25 popular cities
  const cities = [
    { name: "New York", lat: 40.7128, lng: -74.006 },
    { name: "Los Angeles", lat: 34.0522, lng: -118.2437 },
    { name: "London", lat: 51.5074, lng: -0.1278 },
    // { name: "Paris", lat: 48.8566, lng: 2.3522 },
    { name: "Tokyo", lat: 35.6895, lng: 139.6917 },
    { name: "Beijing", lat: 39.9042, lng: 116.4074 },
    { name: "Shanghai", lat: 31.2304, lng: 121.4737 },
    { name: "Dubai", lat: 25.276987, lng: 55.296249 },
    { name: "Singapore", lat: 1.3521, lng: 103.8198 },
    { name: "Hong Kong", lat: 22.3193, lng: 114.1694 },
    { name: "Sydney", lat: -33.8688, lng: 151.2093 },
    { name: "Melbourne", lat: -37.8136, lng: 144.9631 },
    // { name: "Berlin", lat: 52.52, lng: 13.405 },
    { name: "Moscow", lat: 55.7558, lng: 37.6173 },
    { name: "Mumbai", lat: 19.076, lng: 72.8777 },
    { name: "Delhi", lat: 28.7041, lng: 77.1025 },
    { name: "Bangalore", lat: 12.9716, lng: 77.5946 },
    { name: "Seoul", lat: 37.5665, lng: 126.978 },
    { name: "Bangkok", lat: 13.7563, lng: 100.5018 },
    { name: "Istanbul", lat: 41.0082, lng: 28.9784 },
    { name: "Rome", lat: 41.9028, lng: 12.4964 },
    { name: "Madrid", lat: 40.4168, lng: -3.7038 },
    { name: "Toronto", lat: 43.65107, lng: -79.347015 },
    { name: "Mexico City", lat: 19.4326, lng: -99.1332 },
    { name: "São Paulo", lat: -23.5505, lng: -46.6333 },
    { name: "Accra (Ghana)", lat: 5.6037, lng: -0.187 },
  ];

  useEffect(() => {
    setMounted(true);

    // ✅ Load simplified world polygons
    fetch("//unpkg.com/world-atlas/countries-50m.json")
      .then((res) => res.json())
      .then((world) => {
        const countries = topojson.feature(
          world,
          world.objects.countries
        ).features;

        // Only valid Polygon / MultiPolygon
        const validCountries = countries.filter(
          (d) =>
            d.geometry &&
            (d.geometry.type === "Polygon" ||
              d.geometry.type === "MultiPolygon")
        );

        setCountries(validCountries);
      });
  }, []);

  useEffect(() => {
    if (!globeRef.current) return;

    const controls = globeRef.current.controls();
    if (controls) {
      controls.autoRotate = true;
      controls.autoRotateSpeed = 1;
      controls.enableZoom = false;
      controls.enablePan = false;

      controls.enablePan = false; // optional
    }

    // Default POV
    globeRef.current.pointOfView(
      { lat: 51.5074, lng: -0.1278, altitude: 2.5 },
      2000
    );
  }, [mounted]);

  if (!mounted) {
    return <div className="text-white text-center p-10">Loading globe...</div>;
  }

  return (
    <div>
      {/* Heading */}
      <div className="space-y-2 text-fg0 z-10 text-center">
        <div className="font-mono text-sm font-bold uppercase tracking-[0.2em] text-white">
          Built for scale
        </div>
        <h2 className="z-20 text-pretty tracking-tight lg:text-4xl text-3xl font-light">
          <span
            style={{
              opacity: 1,
              color: "rgb(31, 213, 249)",
              filter: "drop-shadow(rgb(3, 92, 109) 0px 0px 8px)",
            }}
          >
            Enterprise &nbsp;
          </span>
          <span className="text-white">
            grade
            <br />
          </span>
          <span className="text-white">infrastructure </span>
        </h2>
      </div>

      {/* Globe + Stats */}
      <div className="relative flex items-center justify-center min-h-screen bg-black overflow-hidden text-white">
        {/* Left Stats */}
        <div className="absolute left-10 top-1/2 -translate-y-1/2 space-y-6 text-gray-300">
          <div>
            <p>GDPR ✓</p>
            <p>SOC 2 TYPE 2 ✓</p>
            <p>HIPAA ✓</p>
          </div>
          <div>
            <p className="text-xl font-bold">99.99%</p>
            <p>UPTIME</p>
          </div>
          <div>
            <p className="text-xl font-bold">100ms</p>
            <p>GLOBAL LATENCY</p>
          </div>
          <div>
            <p className="text-xl font-bold">100,000+</p>
            <p>DEVELOPERS</p>
          </div>
          <div>
            <p className="text-xl font-bold">3,000,000,000+</p>
            <p>CALLS ANNUALLY</p>
          </div>
        </div>

        {/* Center Globe */}
        <div className="relative z-10 w-[700px] h-[700px] flex items-center justify-center">
          <Globe
            ref={globeRef}
            globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
            backgroundColor="rgba(0,0,0,0)"
            showAtmosphere={true}
            atmosphereColor="grey"
            atmosphereAltitude={0.25}
            width={700}
            height={700}
            hexPolygonsData={countries} // ✅ country polygons
            hexPolygonResolution={3}
            hexPolygonMargin={0.6}
            hexPolygonColor={() => "grey"}
            // ✅ Auto Rotate direct prop se
            autoRotate={true}
            autoRotateSpeed={1}
            // ✅ Point of View direct
            pointOfView={{ lat: 20, lng: 80, altitude: 2.5 }}
            // ✅ Add cities as points
            pointShape="square"
            pointsData={cities}
            pointLat="lat"
            pointLng="lng"
            pointColor={() => "cyan"}
            pointAltitude={0}
            pointRadius={0.6}
            // ✅ Labels for cities
            labelsData={cities}
            labelLat="lat"
            labelLng="lng"
            labelText="name"
            labelColor={() => "white"}
            labelSize={1.5}
            labelDotRadius={0.3}
            labelAltitude={0.02}
          />
        </div>
      </div>
    </div>
  );
}
