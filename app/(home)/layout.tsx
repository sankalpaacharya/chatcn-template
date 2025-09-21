import Sidebar from "@/components/sidebar";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex border">
      <aside className="w-64">
        <Sidebar />
      </aside>
      <div className="grow border relative">{children}</div>
    </div>
  );
}
