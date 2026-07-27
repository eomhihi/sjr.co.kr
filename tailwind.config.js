/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts}"],
  theme: {
    extend: {
      colors: {
        // 브랜드 컬러 시스템
        primary: {
          DEFAULT: "#124252", // Deep Teal
          50: "#eef3f5",
          100: "#d6e1e6",
          700: "#173e4c",
          900: "#0d2f3a",
        },
        secondary: {
          DEFAULT: "#76939C", // Muted Teal Gray
          light: "#9fb4bb",
        },
        accent: {
          DEFAULT: "#aecbd5", // Hero highlight (soft teal)
          soft: "#d9e8ed", // 아이콘 칩 배경 (ice teal)
        },
        cream: "#F4F7F2", // Light Cream 배경
        line: "#E0E4DE", // 1px 테두리
        ink: "#0D2F3A", // Deep Teal Dark (전역 배경)
        "dark-teal": "#0D2F3A",
        surface: {
          DEFAULT: "#124252", // 카드 표면 (primary)
          light: "#173e4c", // 호버/강조 표면
        },
      },
      fontFamily: {
        // 전역 폰트: Pretendard
        sans: [
          "Pretendard",
          "-apple-system",
          "BlinkMacSystemFont",
          "system-ui",
          "Roboto",
          "Segoe UI",
          "sans-serif",
        ],
      },
      maxWidth: {
        content: "1200px",
      },
      borderRadius: {
        card: "20px",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(18, 66, 82, 0.04)",
      },
    },
  },
  plugins: [],
};
