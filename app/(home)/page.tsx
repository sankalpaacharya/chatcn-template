import ChatPromptInput from "@/components/chat-prompt-input";
import Conversation from "@/components/conversation";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen relative">
      <div className="grow p-3 pt-12">
        <Conversation />
      </div>
      <div className="sticky bottom-0 w-full">
        <div className="p-3">
          <ChatPromptInput />
        </div>
      </div>
    </div>
  );
}
