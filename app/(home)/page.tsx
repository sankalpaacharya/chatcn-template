import ChatPromptInput from "@/components/chat-prompt-input";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1 border">hello this is me sankalpa</div>

      <div className="fixed bottom-0 w-full">
        <div className="max-w-2xl mx-auto p-3">
          <ChatPromptInput />
        </div>
      </div>
    </div>
  );
}
