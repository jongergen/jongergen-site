import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-ink/10">
      <div className="mx-auto max-w-page px-6 py-10 sm:px-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-utility text-sm text-ink-muted">
            &copy; {new Date().getFullYear()} Jon Gergen. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 font-utility text-sm text-ink-muted">
            <li>
              <Link href="/contact" className="hover:text-cloth">
                Contact
              </Link>
            </li>
            {/* TODO: swap in real profile URLs, or remove any you don't use */}
            <li>
              <a
                href="https://instagram.com/"
                className="hover:text-cloth"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="mailto:hello@jongergen.com"
                className="hover:text-cloth"
              >
                hello@jongergen.com
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
