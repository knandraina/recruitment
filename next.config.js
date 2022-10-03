let securityHeaders = []

const ContentSecurityPolicy = `
    default-src 'self';
    script-src 'self' 'unsafe-eval' 'unsafe-inline' *.youtube.com *.twitter.com *.segment.com ;
    script-src-elem *;
    connect-src 'self' https://cdn.segment.com/v1/projects/l9AnFLhpWlu8mt67R6LRR49PH9e8wOPq/settings https://cdn.segment.com/v1/projects/PzoD1qlC1wpvDGhNckresPQM3zcX8I1s/settings *.amazonaws.com *.bugsnag.com *.firebaseio.com *.giphy.com *.launchdarkly.com *.netlify.com *.segment.io netlify-cocoon.netlify.app netlify-slapp.netlify.app netlilink.netlify.app ws://localhost:3000 wss://*.services.netlify.com;
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
