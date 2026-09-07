import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Diyetisyen Ali Koşar | Antalya Beslenme ve Diyet Danışmanlığı";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Google Fonts'tan Türkçe karakterleri destekleyen bir kesit indirir. */
async function loadFont(text: string) {
  const css = await fetch(
    `https://fonts.googleapis.com/css2?family=Inter:wght@600&text=${encodeURIComponent(text)}`,
    { headers: { "User-Agent": "Mozilla/5.0" } }
  ).then((res) => res.text());

  const url = css.match(/src: url\((.+?)\) format\('(opentype|truetype)'\)/)?.[1];
  if (!url) throw new Error("Inter fontu indirilemedi");

  return fetch(url).then((res) => res.arrayBuffer());
}

export default async function OpengraphImage() {
  const title = "Diyetisyen Ali Koşar";
  const subtitle = "Antalya Beslenme ve Diyet Danışmanlığı";
  const tagline = "Lezzetten ödün vermeden sağlıklı yaşam";

  const [portrait, font] = await Promise.all([
    readFile(join(process.cwd(), "public/images/ali-kosar-portre.jpg")),
    loadFont(`${title}${subtitle}${tagline}`),
  ]);

  const portraitSrc = `data:image/jpeg;base64,${portrait.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#F5F5F0",
          fontFamily: "Inter",
        }}
      >
        <img
          src={portraitSrc}
          width={472}
          height={630}
          style={{ objectFit: "cover" }}
          alt=""
        />
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "0 72px",
          }}
        >
          <div style={{ fontSize: 26, color: "#5A9178", letterSpacing: 2 }}>
            {tagline.toLocaleUpperCase("tr-TR")}
          </div>
          <div style={{ fontSize: 66, color: "#1E3A5F", marginTop: 22, lineHeight: 1.1 }}>
            {title}
          </div>
          <div style={{ fontSize: 30, color: "#525252", marginTop: 22, lineHeight: 1.35 }}>
            {subtitle}
          </div>
          <div
            style={{
              width: 120,
              height: 6,
              background: "#7CB69D",
              borderRadius: 3,
              marginTop: 36,
            }}
          />
        </div>
      </div>
    ),
    { ...size, fonts: [{ name: "Inter", data: font, style: "normal", weight: 600 }] }
  );
}
