import Sidebar from "@/components/components/html-css-js/sidebar/page";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex layout2">
      <div className="flex-shrink-0 first">
        <Sidebar />
      </div>
      <div className="m-3 second">{children}</div>
    </div>
  );
}