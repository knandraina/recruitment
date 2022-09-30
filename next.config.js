let securityHeaders = []

const ContentSecurityPolicy = `
    default-src 'self';
    script-src 'self' 'unsafe-eval' 'unsafe-inline' *.youtube.com *.twitter.com *.segment.com https://netlify-cdp-loader.netlify.app/netlify.js;
    child-src *.youtube.com *.google.com *.twitter.com *.segment.com https://netlify-cdp-loader.netlify.app/netlify.js;
    frame-src *.segment.com https://netlify-cdp-loader.netlify.app/netlify.js;
    style-src 'self' 'unsafe-inline' *.googleapis.com;
    img-src * blob: data:;
    media-src 'none';
    connect-src *;
    font-src * data:';
`;

securityHeaders = ContentSecurityPolicy


module.exports = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: '/:path*',
        headers: [{key: 'Content-Security-Policy', value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim()}],
      },
    ]
  },
}
