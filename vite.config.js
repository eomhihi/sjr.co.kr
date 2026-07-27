import { defineConfig } from "vite";

// Vercel 정적 배포에 최적화된 설정.
// base: "/" 로 두어 모든 에셋이 웹 표준 절대 경로로 빌드되도록 한다.
export default defineConfig({
  base: "/",
  build: {
    outDir: "dist",
    emptyOutDir: true,
    assetsDir: "assets",
  },
});
