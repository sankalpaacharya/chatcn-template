import ChatPromptInput from "@/components/chat-prompt-input";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen relative">
      <div className="flex-1 border">hello this is me sankalpa</div>
      <div className="sticky bottom-0 w-full left-0 border">
        <div className="max-w-2xl mx-auto p-3">
          <ChatPromptInput />
        </div>
      </div>
    </div>
  );
}
