let securityHeaders = []

const ContentSecurityPolicy = `
    default-src 'self';
    script-src 'self' 'unsafe-eval' 'unsafe-inline' *.youtube.com *.twitter.com *.segment.com ;
    script-src-elem *;
    connect-src 'self' https://cdn.segment.com/v1/projects/PzoD1qlC1wpvDGhNckresPQM3zcX8I1s/settings 'unsafe-inline' 'unsafe-eval';
    frame-src https://app.netlify.com/;
    child-src *.youtube.com *.google.com *.twitter.com *.segment.com;
    style-src 'self' 'unsafe-inline' *.googleapis.com;
    img-src * blob: data:;
    media-src 'none';
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
