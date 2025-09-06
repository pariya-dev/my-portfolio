// pages/404.jsx
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Custom404() {
  return (
    <main
      style={{
        fontFamily:
          'system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
        height: "100vh",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div>
        <h1
          style={{
            display: "inline-block",
            margin: "0 20px 0 0",
            padding: "0 23px 0 0",
            fontSize: "24px",
            fontWeight: 500,
            verticalAlign: "top",
            lineHeight: "49px",
            borderRight: "1px solid rgba(0,0,0,.3)",
          }}
        >
          404
        </h1>
        <div style={{ display: "inline-block", margin:10  }}>
          <h2 style={{ fontSize: "14px", fontWeight: 400, lineHeight: "49px", margin: 0 }}>
            This page could not be found.
          </h2>
        </div>
      </div>

      <Link href="/">
        <Button size="lg" className="rounded-full text-base">
          <Link href="/about">Back to Homepage</Link>
        </Button>
      </Link>
    </main>
  );
}
