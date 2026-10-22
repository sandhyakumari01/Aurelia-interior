import Link from 'next/link';

const footerLinks = [
  {
    title: 'Explore',
    links: [
      { label: 'Home', href: '/' },
      { label: 'Collections', href: '/collections' },
      { label: 'Services', href: '/services' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Contact Us', href: '/contact' },
      { label: 'FAQs', href: '/faq' },
      { label: 'Privacy Policy', href: '/privacy' },
    ],
  },
];

export default function Footer() {
  const CURRENT_YEAR = 2026;
  return (
    <footer className="bg-[#5C2E00] text-white">
      <div className="mx-auto max-w-[1440px] px-5 py-10 sm:px-8 lg:px-16">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">

  
          <div>
            <Link
              href="/"
              className="text-xl font-bold tracking-wider text-[#E8C9A8]"
            >
              AURELIA INTERIOR
            </Link>

            <p className="mt-3 max-w-sm text-sm leading-6 text-[#F3E8DC]">
              Timeless furniture and thoughtful designs for beautiful,
              comfortable living spaces.
            </p>
          </div>

                  {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-[#E8C9A8]">
                {section.title}
              </h3>

              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/80 transition hover:text-[#E8C9A8]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 border-t border-white/20 pt-5 text-center sm:flex sm:justify-between sm:text-left">
        <p className="text-xs text-white/70">
  © {CURRENT_YEAR} Aurelia Interior. All rights reserved.
</p>

          <p className="mt-2 text-xs text-white/70 sm:mt-0">
            Designed for better living.
          </p>
        </div>
      </div>
    </footer>
  );
}
