export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <nav className="bg-white shadow p-4 sticky top-0 z-10">Burondwa Dashboard</nav>
      <main className="p-6">{children}</main>
    </div>
  );
}
