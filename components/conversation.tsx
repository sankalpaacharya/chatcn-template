import React from "react";
import {
  Message,
  MessageAvatar,
  MessageContent,
} from "@/components/chatcn/message";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function Conversation() {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session) {
    redirect("/");
  }
  const user = session.user;
  return (
    <div className="space-y-8">
      <Message className="items-center">
        <MessageAvatar src={user.image || ""} alt="AI" />
        <MessageContent className="bg-transparent">
          Hello, I'm {user.name}
        </MessageContent>
      </Message>

      {/* <Message className="justify-end">
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
      </Message> */}
    </div>
  );
}
