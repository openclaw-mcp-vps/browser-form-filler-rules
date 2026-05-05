import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FormFiller Rules — Smart form filling with conditional rules",
  description:
    "Browser extension that fills forms with different data sets based on URL patterns and form field detection. Built for frontend developers and QA engineers."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          defer
          src="https://umami.microtool.dev/script.js"
          data-website-id="4a589787-e13f-4deb-b774-2ab24ec20e44"
        />
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
