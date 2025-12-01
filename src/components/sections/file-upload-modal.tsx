"use client";

import { useState } from "react";
import Image from "next/image";
import { Layers, MessageCircle, Mic, UploadCloud } from "lucide-react";
import { Button } from "@/components/ui/button";

type AgentType = "Chat" | "Voice" | "Multi-modal";

const AGENT_TYPES: { name: AgentType; icon: React.ReactNode }[] = [
  { name: "Chat", icon: <MessageCircle className="h-4 w-4" /> },
  { name: "Voice", icon: <Mic className="h-4 w-4" /> },
  { name: "Multi-modal", icon: <Layers className="h-4 w-4" /> },
];

export default function FileUploadModal() {
  const [selectedAgentType, setSelectedAgentType] = useState<AgentType>("Chat");

  return (
    <div className="flex w-[440px] flex-col gap-6 rounded-3xl bg-card p-8 shadow-[0_8px_32px_rgba(0,0,0,0.12),0_1px_3px_rgba(0,0,0,0.1)]">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Image
          src="https://framerusercontent.com/images/LaQ6HFt6vou1m4B0lxuFvMrjejI.png?width=96&height=96"
          alt="Create new agent icon"
          width={48}
          height={48}
          className="shrink-0"
        />
        <h3 className="text-xl font-medium text-foreground">Create new agent</h3>
      </div>

      {/* Agent Type Selector */}
      <div className="flex space-x-1 rounded-lg bg-secondary p-1">
        {AGENT_TYPES.map(({ name, icon }) => (
          <button
            key={name}
            onClick={() => setSelectedAgentType(name)}
            className={`flex flex-1 items-center justify-center gap-2 rounded-md px-2 py-1.5 text-sm font-medium transition-colors ${
              selectedAgentType === name
                ? "bg-card text-foreground shadow-sm"
                : "text-muted-foreground hover:bg-card/50"
            }`}
          >
            {icon}
            <span>{name}</span>
          </button>
        ))}
      </div>

      {/* File Upload Zone */}
      <div className="flex flex-col gap-4">
        <div>
          <p className="text-base font-medium text-foreground">Add training documents</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Attach files to give your agent business context
          </p>
        </div>
        <div className="flex cursor-pointer flex-col items-center justify-center gap-4 rounded-xl border-2 border-dashed border-border bg-secondary p-6 text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border bg-card">
            <UploadCloud className="h-6 w-6 text-muted-foreground" />
          </div>
          <p className="text-sm text-muted-foreground">
            Drag files here or{" "}
            <span className="font-medium text-foreground">click to browse</span>
          </p>
        </div>
      </div>

      {/* Footer Actions */}
      <div className="flex justify-end gap-3 pt-2">
        <Button variant="outline" className="h-12 rounded-full px-6 text-base font-medium">
          Cancel
        </Button>
        <Button className="h-12 rounded-full px-6 text-base font-medium">
          Create agent
        </Button>
      </div>
    </div>
  );
}