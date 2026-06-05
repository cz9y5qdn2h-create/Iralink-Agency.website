"use client";

import { useState, useRef, useEffect } from "react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const SUGGESTED_QUESTIONS = [
  "Qu'est-ce que le DIP ?",
  "Quels sont les risques juridiques ?",
  "Comment fonctionne DIPpro ?",
];

function LoadingDots() {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          style={{
            width: "5px",
            height: "5px",
            borderRadius: "50%",
            background: "var(--gold)",
            opacity: 0.6,
            animation: `chat-bounce 1.2s ease-in-out ${i * 0.2}s infinite`,
          }}
        />
      ))}
    </span>
  );
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [streaming, setStreaming] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const abortRef = useRef<AbortController | null>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, streaming]);

  useEffect(() => {
    if (open && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [open]);

  async function sendMessage(text: string) {
    if (!text.trim() || streaming) return;

    const userMessage: Message = { role: "user", content: text.trim() };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput("");
    setStreaming(true);

    // Placeholder for streaming assistant reply
    setMessages((prev) => [...prev, { role: "assistant", content: "" }]);

    abortRef.current = new AbortController();

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
        signal: abortRef.current.signal,
      });

      if (!res.ok || !res.body) {
        const errData = await res.json().catch(() => null);
        const errText =
          res.status === 503
            ? "L'assistant est temporairement indisponible. Contactez-nous directement à theo@iralink-agency.com."
            : (errData?.error ?? "Une erreur est survenue. Veuillez réessayer.");
        setMessages((prev) => {
          const updated = [...prev];
          updated[updated.length - 1] = {
            role: "assistant",
            content: errText,
          };
          return updated;
        });
        setStreaming(false);
        return;
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder();

      while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value, { stream: true });
        setMessages((prev) => {
          const updated = [...prev];
          const last = updated[updated.length - 1];
          updated[updated.length - 1] = {
            ...last,
            content: last.content + chunk,
          };
          return updated;
        });
      }
    } catch (err: unknown) {
      if (err instanceof Error && err.name === "AbortError") return;
      setMessages((prev) => {
        const updated = [...prev];
        updated[updated.length - 1] = {
          role: "assistant",
          content: "Connexion interrompue. Veuillez réessayer.",
        };
        return updated;
      });
    } finally {
      setStreaming(false);
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  }

  const showSuggestions = messages.length === 0 && !streaming;

  return (
    <>
      {/* Keyframe injection */}
      <style>{`
        @keyframes chat-bounce {
          0%, 80%, 100% { transform: scale(0.7); opacity: 0.4; }
          40% { transform: scale(1); opacity: 1; }
        }
        @keyframes chat-slide-up {
          from { opacity: 0; transform: translateY(16px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        .chat-panel {
          animation: chat-slide-up 0.22s ease forwards;
        }
        @media (max-width: 480px) {
          .chat-panel {
            width: 100vw !important;
            height: 100dvh !important;
            bottom: 0 !important;
            right: 0 !important;
            border-radius: 0 !important;
            position: fixed !important;
          }
        }
      `}</style>

      {/* Floating container */}
      <div
        style={{
          position: "fixed",
          bottom: "24px",
          right: "24px",
          zIndex: 9990,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          gap: "12px",
        }}
      >
        {/* Chat panel */}
        {open && (
          <div
            className="chat-panel"
            style={{
              width: "360px",
              height: "480px",
              background: "var(--black)",
              border: "1px solid var(--border)",
              borderRadius: "2px",
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
              boxShadow: "0 24px 80px rgba(0,0,0,0.7)",
            }}
          >
            {/* Header */}
            <div
              style={{
                padding: "16px 20px",
                borderBottom: "1px solid var(--border-dim)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexShrink: 0,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    background: "var(--gold)",
                    flexShrink: 0,
                    boxShadow: "0 0 6px rgba(200,169,110,0.6)",
                  }}
                />
                <span
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "13px",
                    fontWeight: 500,
                    color: "var(--white)",
                    letterSpacing: "0.04em",
                  }}
                >
                  Assistant DIPpro
                </span>
              </div>
              <button
                onClick={() => {
                  abortRef.current?.abort();
                  setOpen(false);
                }}
                aria-label="Fermer"
                style={{
                  background: "none",
                  border: "none",
                  color: "var(--grey)",
                  cursor: "pointer",
                  padding: "4px",
                  display: "flex",
                  alignItems: "center",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLButtonElement).style.color =
                    "var(--white)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLButtonElement).style.color =
                    "var(--grey)")
                }
              >
                <svg
                  width="16"
                  height="16"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Messages */}
            <div
              style={{
                flex: 1,
                overflowY: "auto",
                padding: "16px 20px",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                scrollbarWidth: "thin",
                scrollbarColor: "#1E1E1E var(--black)",
              }}
            >
              {/* Welcome + suggestions */}
              {showSuggestions && (
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <p
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "13px",
                      fontWeight: 300,
                      color: "var(--grey)",
                      lineHeight: 1.6,
                    }}
                  >
                    Bonjour, posez-moi vos questions sur le DIP, la loi Doubin
                    et DIPpro.
                  </p>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "6px",
                    }}
                  >
                    {SUGGESTED_QUESTIONS.map((q) => (
                      <button
                        key={q}
                        onClick={() => sendMessage(q)}
                        style={{
                          background: "var(--grey-light)",
                          border: "1px solid var(--border-dim)",
                          color: "var(--grey)",
                          fontFamily: "'DM Sans', sans-serif",
                          fontSize: "12px",
                          fontWeight: 300,
                          padding: "8px 12px",
                          textAlign: "left",
                          cursor: "pointer",
                          transition: "border-color 0.2s ease, color 0.2s ease",
                          borderRadius: "2px",
                        }}
                        onMouseEnter={(e) => {
                          const el = e.currentTarget as HTMLButtonElement;
                          el.style.borderColor = "var(--gold)";
                          el.style.color = "var(--white)";
                        }}
                        onMouseLeave={(e) => {
                          const el = e.currentTarget as HTMLButtonElement;
                          el.style.borderColor = "var(--border-dim)";
                          el.style.color = "var(--grey)";
                        }}
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Message history */}
              {messages.map((msg, idx) => {
                const isUser = msg.role === "user";
                const isLastAssistant =
                  !isUser && idx === messages.length - 1 && streaming;
                return (
                  <div
                    key={idx}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: isUser ? "flex-end" : "flex-start",
                      gap: "4px",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'DM Mono', monospace",
                        fontSize: "9px",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: isUser ? "#3A3A3A" : "var(--gold)",
                      }}
                    >
                      {isUser ? "Vous" : "DIPpro"}
                    </span>
                    <div
                      style={{
                        maxWidth: "88%",
                        background: isUser ? "#111111" : "var(--grey-light)",
                        border: `1px solid ${isUser ? "var(--border-dim)" : "var(--border)"}`,
                        padding: "10px 14px",
                        borderRadius: "2px",
                      }}
                    >
                      {isLastAssistant && msg.content === "" ? (
                        <LoadingDots />
                      ) : (
                        <p
                          style={{
                            fontFamily: "'DM Sans', sans-serif",
                            fontSize: "13px",
                            fontWeight: 300,
                            color: "var(--white)",
                            lineHeight: 1.65,
                            margin: 0,
                            whiteSpace: "pre-wrap",
                            wordBreak: "break-word",
                          }}
                        >
                          {msg.content}
                          {isLastAssistant && (
                            <span
                              style={{
                                display: "inline-block",
                                width: "2px",
                                height: "13px",
                                background: "var(--gold)",
                                marginLeft: "2px",
                                verticalAlign: "text-bottom",
                                animation: "chat-bounce 1s ease infinite",
                              }}
                            />
                          )}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div
              style={{
                padding: "12px 16px",
                borderTop: "1px solid var(--border-dim)",
                display: "flex",
                gap: "8px",
                alignItems: "center",
                flexShrink: 0,
              }}
            >
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                disabled={streaming}
                placeholder="Posez votre question…"
                style={{
                  flex: 1,
                  background: "var(--grey-light)",
                  border: "1px solid var(--border-dim)",
                  color: "var(--white)",
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "13px",
                  fontWeight: 300,
                  padding: "10px 14px",
                  outline: "none",
                  borderRadius: "2px",
                  transition: "border-color 0.2s ease",
                  opacity: streaming ? 0.5 : 1,
                }}
                onFocus={(e) =>
                  ((e.target as HTMLInputElement).style.borderColor =
                    "var(--gold)")
                }
                onBlur={(e) =>
                  ((e.target as HTMLInputElement).style.borderColor =
                    "var(--border-dim)")
                }
              />
              <button
                onClick={() => sendMessage(input)}
                disabled={streaming || !input.trim()}
                aria-label="Envoyer"
                style={{
                  width: "38px",
                  height: "38px",
                  background: streaming || !input.trim() ? "transparent" : "var(--gold)",
                  border: `1px solid ${streaming || !input.trim() ? "var(--border-dim)" : "var(--gold)"}`,
                  color: streaming || !input.trim() ? "var(--grey)" : "var(--black)",
                  cursor: streaming || !input.trim() ? "not-allowed" : "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  borderRadius: "2px",
                  transition: "background 0.2s ease, border-color 0.2s ease",
                }}
              >
                <svg
                  width="15"
                  height="15"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.75}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                  />
                </svg>
              </button>
            </div>
          </div>
        )}

        {/* Toggle button */}
        <button
          onClick={() => setOpen((prev) => !prev)}
          aria-label={open ? "Fermer l'assistant" : "Ouvrir l'assistant DIPpro"}
          style={{
            width: "56px",
            height: "56px",
            borderRadius: "50%",
            background: "var(--black)",
            border: "1px solid var(--gold)",
            color: "var(--gold)",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 4px 24px rgba(200,169,110,0.18)",
            transition: "background 0.2s ease, transform 0.2s ease",
            flexShrink: 0,
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLButtonElement;
            el.style.background = "rgba(200,169,110,0.08)";
            el.style.transform = "scale(1.06)";
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLButtonElement;
            el.style.background = "var(--black)";
            el.style.transform = "scale(1)";
          }}
        >
          {open ? (
            <svg
              width="20"
              height="20"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          ) : (
            <svg
              width="22"
              height="22"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
              />
            </svg>
          )}
        </button>
      </div>
    </>
  );
}
