import { useEffect, useRef, useState } from "react";

const NE_110M_URL =
  "https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_110m_admin_0_countries.geojson";

// Simple Mercator projection
function project(lon: number, lat: number, cx: number, cy: number, zoom: number): [number, number] {
  const x = (lon - cx) * zoom;
  const latRad = (lat * Math.PI) / 180;
  const cyRad = (cy * Math.PI) / 180;
  const y = -(Math.log(Math.tan(latRad / 2 + Math.PI / 4)) - Math.log(Math.tan(cyRad / 2 + Math.PI / 4))) * (180 / Math.PI) * zoom;
  return [x, y];
}

function coordsToPath(
  coords: number[][],
  cx: number,
  cy: number,
  zoom: number
): string {
  return coords
    .map((c, i) => {
      const [x, y] = project(c[0], c[1], cx, cy, zoom);
      return `${i === 0 ? "M" : "L"}${x.toFixed(2)},${y.toFixed(2)}`;
    })
    .join(" ") + " Z";
}

function geometryToPaths(
  geometry: any,
  cx: number,
  cy: number,
  zoom: number
): string[] {
  const paths: string[] = [];
  if (geometry.type === "Polygon") {
    for (const ring of geometry.coordinates) {
      paths.push(coordsToPath(ring, cx, cy, zoom));
    }
  } else if (geometry.type === "MultiPolygon") {
    for (const polygon of geometry.coordinates) {
      for (const ring of polygon) {
        paths.push(coordsToPath(ring, cx, cy, zoom));
      }
    }
  }
  return paths;
}

interface SicilyMapboxProps {
  className?: string;
  bgColor?: string;
  strokeColor?: string;
  labelColor?: string;
  markerLon?: number;
  markerLat?: number;
  markerLabel?: string;
  centerLon?: number;
  centerLat?: number;
  mapZoom?: number;
  markerStyle?: "dot-line" | "pill-only";
}

export const SicilyMapbox = ({ className = "", bgColor = "#1B4229", strokeColor = "#ECA948", labelColor = "#FFFAEA", markerLon = 12.95, markerLat = 37.65, markerLabel = "Belice Valley", centerLon, centerLat, mapZoom, markerStyle = "dot-line" }: SicilyMapboxProps) => {
  const [paths, setPaths] = useState<string[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const cx = centerLon ?? 14.5;
  const cy = centerLat ?? 41.5;
  const zoom = mapZoom ?? 14;

  // SVG viewBox dimensions
  const vw = 500;
  const vh = 350;

  useEffect(() => {
    fetch(NE_110M_URL)
      .then((r) => r.json())
      .then((geojson) => {
        const allPaths: string[] = [];
        for (const feature of geojson.features) {
          allPaths.push(...geometryToPaths(feature.geometry, cx, cy, zoom));
        }
        setPaths(allPaths);
      })
      .catch(console.error);
  }, [cx, cy, zoom]);

  // Marker
  const [bx, by] = project(markerLon, markerLat, cx, cy, zoom);

  return (
    <div ref={containerRef} className={`rounded-2xl overflow-hidden ${className}`} style={{ minHeight: 280, backgroundColor: bgColor }}>
      <svg
        viewBox={`${-vw / 2} ${-vh / 2} ${vw} ${vh}`}
        width="100%"
        height="100%"
        preserveAspectRatio="xMidYMid slice"
        style={{ display: "block" }}
      >
        <rect x={-vw / 2} y={-vh / 2} width={vw} height={vh} fill={bgColor} />

        {paths.map((d, i) => (
          <path
            key={i}
            d={d}
            fill="none"
            stroke={strokeColor}
            strokeWidth={4}
            strokeLinejoin="round"
            strokeLinecap="round"
          />
        ))}

        {/* Marker dot + line + pill */}
        {(() => {
          const pillW = markerLabel.length * 11 + 16;
          const pillH = 28;
          if (markerStyle === "pill-only") {
            return (
              <>
                <rect
                  x={bx - pillW / 2}
                  y={by - pillH / 2}
                  rx={14}
                  ry={14}
                  width={pillW}
                  height={pillH}
                  fill={labelColor}
                />
                <text
                  x={bx}
                  y={by + 5}
                  fill={bgColor}
                  fontFamily="'UDC Working Man Sans', sans-serif"
                  fontSize={16}
                  fontWeight={700}
                  textAnchor="middle"
                >
                  {markerLabel}
                </text>
              </>
            );
          }
          const ox = pillW * 0.35;
          const oy = pillH * 2;
          const pillCx = bx + ox;
          const pillCy = by + oy;
          return (
            <>
              <circle cx={bx} cy={by} r={4} fill={labelColor} />
              <line x1={bx} y1={by} x2={pillCx} y2={pillCy} stroke={labelColor} strokeWidth={1.5} />
              <rect
                x={pillCx - pillW / 2}
                y={pillCy - pillH / 2}
                rx={14}
                ry={14}
                width={pillW}
                height={pillH}
                fill={labelColor}
              />
              <text
                x={pillCx}
                y={pillCy + 5}
                fill={bgColor}
                fontFamily="'UDC Working Man Sans', sans-serif"
                fontSize={16}
                fontWeight={700}
                textAnchor="middle"
              >
                {markerLabel}
              </text>
            </>
          );
        })()}
      </svg>
    </div>
  );
};
