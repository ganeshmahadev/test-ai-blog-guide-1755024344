export const metadata = {
  title: 'AI-Powered Development Guide',
  description: 'This is a test blog post demonstrating our AI blog generation and deployment pipeline.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style jsx global>{`
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 800px;
            margin: 0 auto;
            padding: 2rem;
            background: #fff;
          }
          h1 { color: #2563eb; margin-bottom: 1rem; }
          h2 { color: #1e40af; margin-top: 2rem; }
          h3 { color: #1d4ed8; }
          code {
            background: #f3f4f6;
            padding: 0.25rem 0.5rem;
            border-radius: 0.25rem;
            font-size: 0.875rem;
          }
          pre {
            background: #1f2937;
            color: #f9fafb;
            padding: 1rem;
            border-radius: 0.5rem;
            overflow-x: auto;
          }
          blockquote {
            border-left: 4px solid #3b82f6;
            padding-left: 1rem;
            margin: 1rem 0;
            font-style: italic;
          }
          .blog-meta {
            color: #6b7280;
            font-size: 0.875rem;
            margin-bottom: 2rem;
            padding-bottom: 1rem;
            border-bottom: 1px solid #e5e7eb;
          }
        `}
        </style>
      </head>
      <body>{children}</body>
    </html>
  )
}
