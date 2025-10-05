import LoginCard from "@/components/login-card";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen relative">
      <div className="flex-1 flex items-center justify-center pt-16 md:pt-0 px-3 md:px-0">
        <LoginCard />
      </div>
    </div>
  );
}
