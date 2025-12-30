export const metadata = {
  title: "Echelon Elite CMS",
  description: "Content management for Echelon Elite Properties",
};

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  );
}

