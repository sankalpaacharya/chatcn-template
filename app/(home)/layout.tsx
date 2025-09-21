import Sidebar from "@/components/sidebar";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex">
      <aside className="w-72">
        <Sidebar />
      </aside>
      <div className="grow relative">{children}</div>
    </div>
  );
}
