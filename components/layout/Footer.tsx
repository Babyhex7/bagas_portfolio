import Link from 'next/link';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Mail, href: 'mailto:bagas@example.com', label: 'Email' },
  ];

  return (
    <footer className="relative bg-space-darker border-t border-cosmic-purple/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-cosmic-purple to-cosmic-pink bg-clip-text text-transparent mb-4">
              Bagas Aji Handoko
            </h3>
            <p className="text-gray-400 text-sm">
              Fullstack Developer & AI Enthusiast. Passionate about building amazing web and mobile applications.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-cosmic-purple transition-colors text-sm">
                  About Me
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-400 hover:text-cosmic-purple transition-colors text-sm">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/skills" className="text-gray-400 hover:text-cosmic-purple transition-colors text-sm">
                  Skills
                </Link>
              </li>
              <li>
                <Link href="/achievements" className="text-gray-400 hover:text-cosmic-purple transition-colors text-sm">
                  Achievements
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-space-light flex items-center justify-center text-gray-400 hover:text-white hover:bg-cosmic-purple transition-all"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-cosmic-purple/10 text-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} Bagas Aji Handoko. All rights reserved.
          </p>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cosmic-purple/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cosmic-pink/5 rounded-full blur-3xl" />
      </div>
    </footer>
  );
}
