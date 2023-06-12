import {CssSidebar} from '@/components/index'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex layout2">
      <div className="flex-shrink-0 first">
        <CssSidebar />
      </div>
      <div className="m-3 second">{children}</div>
    </div>
  );
}
