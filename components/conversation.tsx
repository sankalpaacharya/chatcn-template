import React from "react";
import {
  Message,
  MessageAvatar,
  MessageContent,
} from "@/components/chatcn/message";

export default function Conversation() {
  return (
    <div className="space-y-10">
      <Message className="justify-end">
        <MessageAvatar
          src="https://github.com/sankalpaacharya.png"
          alt="Sankalpa Acharya"
        />
        <MessageContent>
          Hey AI, can you help me with my project?
        </MessageContent>
      </Message>

      <Message>
        <MessageAvatar src="" alt="AI" />
        <MessageContent className="bg-transparent">
          Of course! What are you working on right now?
        </MessageContent>
      </Message>

      <Message className="justify-end">
        <MessageAvatar
          src="https://github.com/sankalpaacharya.png"
          alt="Sankalpa Acharya"
        />
        <MessageContent>
          I’m building a finance tracker, but I’m stuck on the charts.
        </MessageContent>
      </Message>

      <Message>
        <MessageAvatar src="" alt="AI" />
        <MessageContent className="bg-transparent">
          Got it. Are you using Recharts or Chart.js?
        </MessageContent>
      </Message>

      <Message className="justify-end">
        <MessageAvatar
          src="https://github.com/sankalpaacharya.png"
          alt="Sankalpa Acharya"
        />
        <MessageContent>
          I’m using Recharts, but the data isn’t updating in real time.
        </MessageContent>
      </Message>

      <Message>
        <MessageAvatar src="" alt="AI" />
        <MessageContent className="bg-transparent">
          We can fix that by adding a `useEffect` to listen for new transactions
          and re-render your chart.
        </MessageContent>
      </Message>
    </div>
  );
}
