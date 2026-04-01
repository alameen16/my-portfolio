import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-muted-foreground text-center md:text-left">
            <p className="flex items-center gap-2">
              © {new Date().getFullYear()} AKINTOLA AL-AMEEN . Made with {' '}
              <Heart className="w-4 h-4 text-red-500 fill-red-500" /> and React
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
