import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-md bg-gradient-to-br from-blue-600 to-purple-600" />
              <span className="text-xl font-bold">RedFox Studios</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              Building innovative digital experiences that help businesses thrive in the modern world.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-foreground transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/announcements" className="text-muted-foreground hover:text-foreground transition-colors">
                  Announcements
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Connect</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link 
                  href="https://github.com/redfox-studios/redfox-studios" 
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  GitHub
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 border-t pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2025 RedFox Studios. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground mt-2 sm:mt-0">
            Built with Next.js and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}