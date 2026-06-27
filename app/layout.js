import './globals.css';

export const metadata = {
  title: 'The Spatial Edit - Spatial Design Studio, Hyderabad',
  description: 'Spaces designed to work. Finished to last. The Spatial Edit is a spatial design studio in Hyderabad crafting homes that are beautiful, functional and effortless.',
  keywords: 'spatial design, interior design, Hyderabad, home design, spatial planning',
  openGraph: {
    title: 'The Spatial Edit - Spatial Design Studio, Hyderabad',
    description: 'Spaces designed to work. Finished to last.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500;1,600&family=Inter:wght@200;300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
