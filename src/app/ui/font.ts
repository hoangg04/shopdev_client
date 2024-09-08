import { Inter } from "next/font/google";
import localFont from "next/font/local";
const interFont = Inter({ subsets: ["latin"] });

const playWriteCubaFont = localFont({
	src: "./font/PlaywriteCU-VariableFont_wght.ttf",
});
export { interFont, playWriteCubaFont };
