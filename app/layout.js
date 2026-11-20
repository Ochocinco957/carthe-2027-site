/* Inter is bundled with the project (@fontsource-variable/inter) rather than
   fetched from Google Fonts. This means the site does not depend on a
   third-party network request at build or runtime — it builds offline, loads
   faster, and does not break on unstable connections. */
import "@fontsource-variable/inter";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://getelevatedincarthe.com"),
  icons: { icon: "/logo.jpg" },
  openGraph: {
    title: "CARTHE 2027 | Canada–Africa Real Estate, Tourism & Hospitality Exchange",
    description: "100 African professionals meet Canadian counterparts at Brampton City Hall, Ontario, 3–10 June 2027.",
    images: [{ url: "/logo.jpg", width: 1170, height: 806 }],
    type: "website",
  },
  title: "CARTHE 2027 | Canada–Africa Real Estate, Tourism & Hospitality Exchange",
  description:
    "The Canada–Africa Real Estate, Tourism & Hospitality Exchange. 100 African professionals meet Canadian counterparts and facilitators at Brampton City Hall, Ontario, 3–10 June 2027.",
};

// Runs before paint so the correct theme is applied with no flash.
const noFlashScript = `
(function () {
  try {
    var t = localStorage.getItem('carthe-theme');
    if (t !== 'light' && t !== 'dark') {
      t = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    }
    document.documentElement.setAttribute('data-theme', t);
  } catch (e) {}
})();
`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: noFlashScript }} />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
