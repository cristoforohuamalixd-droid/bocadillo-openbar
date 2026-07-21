/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  headers: async () => [
    {
      source: "/(.*)",
      headers: [
        {
          key: "X-Content-Type-Options",
          value: "nosniff",
        },
        {
          key: "X-Frame-Options",
          value: "DENY",
        },
        {
          key: "X-XSS-Protection",
          value: "1; mode=block",
        },
        {
          key: "Referrer-Policy",
          value: "strict-origin-when-cross-origin",
        },
        {
          key: "Permissions-Policy",
          value: "camera=(), microphone=(), geolocation=()",
        },
        {
          key: "Strict-Transport-Security",
          value: "max-age=63072000; includeSubDomains; preload",
        },
        {
          key: "Content-Security-Policy",
          value: [
            "default-src 'self' *",
            "script-src 'self' 'unsafe-eval' 'unsafe-inline' *",
            "style-src 'self' 'unsafe-inline' *",
            "font-src 'self' *",
            "img-src 'self' data: *",
            "frame-src *",
            "connect-src 'self' *",
          ].join("; "),
        },
      ],
    },
  ],
};

module.exports = nextConfig;
