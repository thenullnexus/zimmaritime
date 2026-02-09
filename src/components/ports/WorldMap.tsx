import { useState, useMemo } from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
} from 'react-simple-maps';
import { motion, AnimatePresence } from 'framer-motion';

const geoUrl = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json';

interface Port {
  name: string;
  coordinates: [number, number];
  region: string;
  type: string;
}

interface Country {
  name: string;
  id: string | number;
  iso: string;
  region?: string;
}

const ports: Port[] = [
  // India
  { name: 'Tuticorin', coordinates: [78.1348, 8.7642], region: 'India', type: 'Primary Hub' },
  { name: 'Chennai', coordinates: [80.2707, 13.0827], region: 'India', type: 'Major Port' },
  { name: 'Mumbai', coordinates: [72.8777, 19.0760], region: 'India', type: 'Major Port' },
  { name: 'Kandla', coordinates: [70.2167, 23.0333], region: 'India', type: 'Major Port' },
  { name: 'Visakhapatnam', coordinates: [83.2185, 17.6868], region: 'India', type: 'Major Port' },
  { name: 'Cochin', coordinates: [76.2673, 9.9312], region: 'India', type: 'Major Port' },
  { name: 'Mundra', coordinates: [69.7192, 22.8394], region: 'India', type: 'Private Port' },
  { name: 'Kolkata', coordinates: [88.3639, 22.5726], region: 'India', type: 'Major Port' },

  // Persian Gulf
  { name: 'Dubai (Jebel Ali)', coordinates: [55.0272, 25.0136], region: 'Persian Gulf', type: 'Major Hub' },
  { name: 'Abu Dhabi', coordinates: [54.3773, 24.4539], region: 'Persian Gulf', type: 'Major Port' },
  { name: 'Sohar', coordinates: [56.7256, 24.3461], region: 'Persian Gulf', type: 'Major Port' },
  { name: 'Salalah', coordinates: [54.0924, 17.0151], region: 'Persian Gulf', type: 'Transshipment' },
  { name: 'Kuwait', coordinates: [47.9774, 29.3759], region: 'Persian Gulf', type: 'Major Port' },
  { name: 'Hamad (Qatar)', coordinates: [51.5310, 25.2854], region: 'Persian Gulf', type: 'Major Port' },
  { name: 'Dammam', coordinates: [50.1033, 26.4207], region: 'Persian Gulf', type: 'Major Port' },

  // Southeast Asia
  { name: 'Singapore', coordinates: [103.8198, 1.3521], region: 'Southeast Asia', type: 'Global Hub' },
  { name: 'Port Klang', coordinates: [101.3855, 3.0006], region: 'Southeast Asia', type: 'Major Port' },
  { name: 'Tanjung Pelepas', coordinates: [103.5515, 1.3621], region: 'Southeast Asia', type: 'Transshipment' },
  { name: 'Laem Chabang', coordinates: [100.8825, 13.0827], region: 'Southeast Asia', type: 'Major Port' },
  { name: 'Manila', coordinates: [120.9842, 14.5995], region: 'Southeast Asia', type: 'Major Port' },
  { name: 'Jakarta', coordinates: [106.8456, -6.2088], region: 'Southeast Asia', type: 'Major Port' },
  { name: 'Surabaya', coordinates: [112.7508, -7.2575], region: 'Southeast Asia', type: 'Major Port' },

  // Maldives & Vietnam
  { name: 'Malé', coordinates: [73.5093, 4.1755], region: 'Maldives & Vietnam', type: 'Capital Port' },
  { name: 'Ho Chi Minh City', coordinates: [106.6297, 10.8231], region: 'Maldives & Vietnam', type: 'Major Port' },
  { name: 'Hai Phong', coordinates: [106.6881, 20.8449], region: 'Maldives & Vietnam', type: 'Major Port' },
  { name: 'Da Nang', coordinates: [108.2022, 16.0544], region: 'Maldives & Vietnam', type: 'Regional Port' },
  { name: 'Cai Mep', coordinates: [107.0144, 10.5055], region: 'Maldives & Vietnam', type: 'Deep Water' },
];

const regionColors: Record<string, string> = {
  'India': '#0EA5E9', // Sky Blue
  'Persian Gulf': '#F59E0B', // Amber
  'Southeast Asia': '#10B981', // Emerald
  'Maldives & Vietnam': '#8B5CF6', // Violet
};

// Map ISO Numeric Code (from topojson) to ISO 2-letter Code
const countryIsoMap: Record<string, string> = {
  '356': 'in', // India
  '784': 'ae', // UAE
  '512': 'om', // Oman
  '682': 'sa', // Saudi Arabia
  '634': 'qa', // Qatar
  '414': 'kw', // Kuwait
  '364': 'ir', // Iran
  '702': 'sg', // Singapore
  '458': 'my', // Malaysia
  '764': 'th', // Thailand
  '608': 'ph', // Philippines
  '360': 'id', // Indonesia
  '704': 'vn', // Vietnam
  '462': 'mv', // Maldives
};

// Map ISO 2-letter Code to Region Name for coloring
const isoToRegion: Record<string, string> = {
  'in': 'India',
  'ae': 'Persian Gulf',
  'om': 'Persian Gulf',
  'sa': 'Persian Gulf',
  'qa': 'Persian Gulf',
  'kw': 'Persian Gulf',
  'ir': 'Persian Gulf',
  'sg': 'Southeast Asia',
  'my': 'Southeast Asia',
  'th': 'Southeast Asia',
  'ph': 'Southeast Asia',
  'id': 'Southeast Asia',
  'vn': 'Maldives & Vietnam',
  'mv': 'Maldives & Vietnam',
};

// Custom Flag Positioning Settings
const flagSettings: Record<string, { scale: number; x: number; y: number }> = {
  'in': { scale: 1, x: -0.025, y: 0 }, // Scale up and shift slightly to align Chakra
};

const WorldMap = () => {
  const [hoveredPort, setHoveredPort] = useState<Port | null>(null);
  const [hoveredCountry, setHoveredCountry] = useState<Country | null>(null);

  // Memoize usage stats to prevent recalculation
  const stats = useMemo(() => [
    { region: 'India', count: 8, color: regionColors['India'] },
    { region: 'Persian Gulf', count: 7, color: regionColors['Persian Gulf'] },
    { region: 'Southeast Asia', count: 7, color: regionColors['Southeast Asia'] },
    { region: 'Maldives & Vietnam', count: 5, color: regionColors['Maldives & Vietnam'] },
  ], []);

  // Unique ISOs for generating patterns
  const supportedIsos = useMemo(() => Object.keys(isoToRegion), []);

  return (
    <section className="section-padding bg-slate-900 overflow-hidden relative">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-900 to-slate-900 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center">

          {/* Map + Legend Area */}
          <div className="w-full lg:w-3/4">
            <div className="text-center lg:text-left mb-8">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-blue-400 font-medium mb-2 uppercase tracking-wider text-sm inline-block"
              >
                Global Connectivity
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="font-serif text-3xl sm:text-4xl font-bold text-white mb-4"
              >
                Strategic Port Network
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-slate-400 max-w-2xl mx-auto lg:mx-0"
              >
                Our vessels operate across major maritime hubs, ensuring seamless connectivity and efficient logistics solutions.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative bg-slate-800/50 rounded-2xl border border-white/10 shadow-2xl overflow-hidden backdrop-blur-sm"
              style={{ minHeight: '500px' }}
            >
              {/* Map Controls / Legend Overlay */}
              <div className="absolute top-4 left-4 z-10 bg-slate-900/90 backdrop-blur-md rounded-lg p-4 border border-white/10 shadow-xl pointer-events-none">
                <h4 className="font-semibold text-white text-xs uppercase tracking-wider mb-3">Regions</h4>
                <div className="space-y-2">
                  {Object.entries(regionColors).map(([region, color]) => (
                    <div key={region} className="flex items-center gap-2">
                      <div
                        className="w-2.5 h-2.5 rounded-full shadow-[0_0_8px]"
                        style={{ backgroundColor: color, boxShadow: `0 0 8px ${color}` }}
                      />
                      <span className="text-xs text-slate-300">{region}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Combined Hover Tooltip */}
              <AnimatePresence>
                {(hoveredPort || hoveredCountry) && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 5, scale: 0.9 }}
                    className="absolute z-30 pointer-events-none bg-slate-900/95 backdrop-blur-xl rounded-xl p-4 border border-white/10 shadow-2xl min-w-[200px]"
                    style={{
                      top: '20px',    // Keep it fixed for stability
                      right: '20px'
                    }}
                  >
                    {hoveredPort ? (
                      <>
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: regionColors[hoveredPort.region] }} />
                          <span className="text-xs text-slate-400 uppercase tracking-wider">{hoveredPort.region}</span>
                        </div>
                        <h4 className="font-bold text-white text-lg leading-tight">{hoveredPort.name}</h4>
                        <p className="text-sm text-blue-400 mt-1 font-medium">{hoveredPort.type}</p>
                      </>
                    ) : hoveredCountry ? (
                      <div className="flex items-center gap-4">
                        <img
                          src={`https://flagcdn.com/w80/${hoveredCountry.iso}.png`}
                          alt={hoveredCountry.name}
                          className="w-12 h-auto rounded shadow-sm"
                        />
                        <div>
                          <h4 className="font-bold text-white text-lg leading-tight">{hoveredCountry.name}</h4>
                          <span className="text-xs text-slate-400 uppercase tracking-wider" style={{ color: hoveredCountry.region ? regionColors[hoveredCountry.region] : '#94a3b8' }}>
                            {hoveredCountry.region || 'Active Region'}
                          </span>
                        </div>
                      </div>
                    ) : null}
                  </motion.div>
                )}
              </AnimatePresence>

              <ComposableMap
                projection="geoMercator"
                projectionConfig={{
                  center: [78, 20],
                  scale: 550,
                }}
                style={{ width: '100%', height: '100%', minHeight: '500px' }}
              >
                {/* Define SVG Patterns for Country Flags */}
                <defs>
                  {supportedIsos.map(iso => {
                    // Get custom settings or defaults
                    const settings = flagSettings[iso] || { scale: 1, x: 0, y: 0 };
                    return (
                      <pattern
                        key={iso}
                        id={`flag-${iso}`}
                        patternUnits="objectBoundingBox"
                        patternContentUnits="objectBoundingBox"
                        width="1"
                        height="1"
                      >
                        <image
                          href={`https://flagcdn.com/w320/${iso}.png`}
                          x={settings.x}
                          y={settings.y}
                          width={settings.scale}
                          height={settings.scale}
                          preserveAspectRatio={iso === 'in' ? "xMidYMid slice" : "none"}
                        />
                      </pattern>
                    );
                  })}
                </defs>

                <ZoomableGroup center={[78, 20]} zoom={1} maxZoom={4} minZoom={1}>
                  <Geographies geography={geoUrl}>
                    {({ geographies }) =>
                      geographies.map((geo) => {
                        const iso = countryIsoMap[geo.id];
                        const isInteractive = !!iso;
                        // Determine if this country is currently being hovered
                        const isHovered = hoveredCountry?.id === geo.id;

                        return (
                          <Geography
                            key={geo.rsmKey}
                            geography={geo}
                            fill={
                              isHovered && iso
                                ? `url(#flag-${iso})` // Fill with flag pattern on hover
                                : (isInteractive ? "#1E293B" : "#0F172A")
                            }
                            stroke="#334155"
                            strokeWidth={0.5}
                            style={{
                              default: { outline: 'none', transition: 'all 0.3s' },
                              hover: {
                                fill: iso ? `url(#flag-${iso})` : '#334155',
                                outline: 'none',
                                stroke: isInteractive ? '#60A5FA' : '#334155', // Add a border glow when flag is shown
                                strokeWidth: isInteractive ? 1 : 0.5,
                                opacity: 1
                              },
                              pressed: { outline: 'none' },
                            }}
                            onMouseEnter={() => {
                              if (isInteractive) {
                                setHoveredCountry({
                                  name: geo.properties.name,
                                  id: geo.id,
                                  iso: iso,
                                  region: isoToRegion[iso]
                                });
                              }
                            }}
                            onMouseLeave={() => setHoveredCountry(null)}
                          />
                        );
                      })
                    }
                  </Geographies>

                  {/* Connecting Lines (Decorative) */}
                  <Marker coordinates={[78.1348, 8.7642]}>
                    <circle r={0} />
                  </Marker>


                  {/* Port Markers */}
                  {ports.map((port) => {
                    const isMajor = port.type.includes('Hub') || port.type.includes('Capital');
                    return (
                      <Marker
                        key={port.name}
                        coordinates={port.coordinates}
                        onMouseEnter={() => setHoveredPort(port)}
                        onMouseLeave={() => setHoveredPort(null)}
                      >
                        <g className="cursor-pointer group">
                          {/* Pulsing Effect for Major Hubs */}
                          {isMajor && (
                            <motion.circle
                              r={10}
                              fill={regionColors[port.region]}
                              initial={{ opacity: 0.3, scale: 1 }}
                              animate={{ opacity: 0, scale: 2 }}
                              transition={{ duration: 1.5, repeat: Infinity }}
                            />
                          )}

                          {/* Main Dot */}
                          <circle
                            r={isMajor ? 4 : 2.5}
                            fill={regionColors[port.region]}
                            stroke="white"
                            strokeWidth={1.5}
                            className="transition-all duration-300 group-hover:r-6 group-hover:stroke-[3px]"
                          />

                          {/* Hit Area for easier hovering */}
                          <circle r={12} fill="transparent" />
                        </g>
                      </Marker>
                    );
                  })}
                </ZoomableGroup>
              </ComposableMap>
            </motion.div>
          </div>

          {/* Stats Side Panel */}
          <div className="w-full lg:w-1/4">
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.region}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-slate-800/40 p-5 rounded-xl border border-white/5 backdrop-blur-sm"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className="text-3xl font-bold font-serif"
                      style={{ color: stat.color }}
                    >
                      {stat.count}
                    </span>
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: stat.color }} />
                  </div>
                  <p className="text-sm text-slate-400 font-medium">{stat.region} Ports</p>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-blue-600/10 p-5 rounded-xl border border-blue-500/20 backdrop-blur-sm mt-4 col-span-2 lg:col-span-1"
              >
                <div className="text-3xl font-bold font-serif text-blue-400 mb-1">
                  30+
                </div>
                <p className="text-sm text-blue-200/70 font-medium">Total Ports Worldwide</p>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WorldMap;
