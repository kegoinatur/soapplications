import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SOApplications",
  description: "Simple Open-source Applications",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
