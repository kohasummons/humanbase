
import { Sidebar } from '@/components/layout/sidebar';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen max-w-[1642px]">
      <div className="flex fixed">
        <Sidebar />
        <main className="flex-1 pl-8 pr-6 mt-12">
          {children}
        </main>
      </div>
    </div>
  );
}