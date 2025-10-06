import Sidebar from "@/components/sidebar";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex">
      <aside>
        <Sidebar />
      </aside>
      <div className="grow relative mx-auto max-w-4xl">{children}</div>
    </div>
  );
}
