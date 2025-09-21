export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex border border-amber-400">
      <aside>this is random bullshit</aside>
      <div className="flex-1">{children}</div>
    </div>
  );
}
