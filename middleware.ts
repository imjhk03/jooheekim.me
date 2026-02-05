import { rewrite } from "@vercel/edge";

export default function middleware(request: Request) {
  const accept = request.headers.get("accept") || "";
  const url = new URL(request.url);

  if (url.pathname.endsWith("/raw.md") || !accept.includes("text/markdown")) {
    return;
  }

  const path = url.pathname.endsWith("/")
    ? url.pathname + "raw.md"
    : url.pathname + "/raw.md";

  return rewrite(new URL(path, request.url));
}

export const config = {
  matcher: "/posts/:path*",
};
