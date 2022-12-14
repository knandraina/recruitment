const { i18n } = require('./next-i18next.config');

const ContentSecurityPolicy = `
    default-src 'self';
    script-src 'self' 'unsafe-eval' 'unsafe-inline' *.youtube.com *.twitter.com *.segment.com ;
    script-src-elem *;
    connect-src 'self' https://cdn.segment.com/v1/projects/ https://api.segment.io/v1/p ;
    frame-src https://app.netlify.com/ ;
    child-src *.youtube.com *.google.com *.twitter.com *.segment.com ;
    style-src 'self' 'unsafe-inline' *.googleapis.com ;
    img-src * blob: data: ;
    media-src 'none' ;
`;

securityHeaders = ContentSecurityPolicy


module.exports = {
  i18n,
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
  rewrites: async () => [
    {
      source: '/sitemap.xml',
      destination: '/api/sitemap',
    },
  ],
}
