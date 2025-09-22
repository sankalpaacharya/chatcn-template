import ChatPromptInput from "@/components/chat-prompt-input";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen relative">
      <div className="flex-1 pt-16 md:pt-0 px-4 md:px-0">
        hello this is me sankalpa
      </div>
      <div className="sticky bottom-0 w-full left-0">
        <div className="max-w-4xl mx-auto p-3">
          <ChatPromptInput />
        </div>
      </div>
    </div>
  );
}
