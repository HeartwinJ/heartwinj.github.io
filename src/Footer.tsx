import {
  AtIcon,
  GithubLogoIcon,
  LinkedinLogoIcon,
} from "@phosphor-icons/react";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-neutral-700 px-6 py-8 text-neutral-100">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <h2 className="text-lg font-semibold">Heartwin Haveluck</h2>
          <p className="text-sm">Building elegant solutions with code.</p>
        </div>
        <div className="flex gap-3 mt-2">
          <a
            href="mailto:heartwinhaveluck@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="E-Mail"
          >
            <AtIcon size={32} weight="duotone" />
          </a>
          <a
            href="https://github.com/heartwinj"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <GithubLogoIcon size={32} weight="duotone" />
          </a>
          <a
            href="https://linkedin.com/in/heartwinhaveluck"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <LinkedinLogoIcon size={32} weight="duotone" />
          </a>
        </div>
      </div>
      <div className="mt-6 text-center text-xs text-neutral-300">
        &copy; {currentYear} Heartwin Haveluck. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
