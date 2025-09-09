const createNextIntlPlugin = require("next-intl/plugin");

const withNextIntl = createNextIntlPlugin();

const nextConfig = {
    images: {
        domains: ["https://images.unsplash.com", "https://wapi.lunaproxy.com"],
        unoptimized: true,
        formats: ["image/avif", "image/webp"],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        minimumCacheTTL: 60 * 60 * 24 * 365,
    },
    async headers() {
        return [{
            source: "/:path*",
            headers: [{
                    key: "Access-Control-Allow-Origin",
                    value: "*",
                },
                {
                    key: "Access-Control-Allow-Methods",
                    value: "GET,HEAD,PUT,PATCH,POST,DELETE",
                },
                {
                    key: 'X-Frame-Options',
                    value: 'DENY',
                },
            ],
        }, ];
    },
    experimental: {
        optimizePackageImports: ["@/components", "@/utils"],
        scrollRestoration: true,
    },
};

module.exports = withNextIntl(nextConfig);