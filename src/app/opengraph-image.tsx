import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "João Victor Macedo — Full Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    padding: "72px",
                    background:
                        "radial-gradient(60% 50% at 85% 0%, rgba(194,65,12,0.35) 0%, transparent 70%), #0b0b0c",
                    color: "#ece9e2",
                    fontFamily: "serif",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 14,
                        fontFamily: "monospace",
                        fontSize: 22,
                        letterSpacing: 6,
                        textTransform: "uppercase",
                        color: "#8a8780",
                    }}
                >
                    <span style={{ width: 10, height: 10, borderRadius: 999, background: "#c2410c" }} />
                    JV / Macedo
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                    <div
                        style={{
                            fontSize: 150,
                            lineHeight: 1,
                            letterSpacing: -3,
                            display: "flex",
                        }}
                    >
                        João Victor
                    </div>
                    <div
                        style={{
                            fontSize: 150,
                            lineHeight: 1,
                            letterSpacing: -3,
                            fontStyle: "italic",
                            color: "#8a8780",
                            display: "flex",
                        }}
                    >
                        Macedo
                        <span style={{ color: "#c2410c" }}>.</span>
                    </div>
                </div>

                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-end",
                        fontFamily: "monospace",
                        fontSize: 22,
                        letterSpacing: 4,
                        textTransform: "uppercase",
                        color: "#8a8780",
                    }}
                >
                    <span>Full Stack Developer</span>
                    <span>Brasília · BR</span>
                </div>
            </div>
        ),
        { ...size }
    );
}
