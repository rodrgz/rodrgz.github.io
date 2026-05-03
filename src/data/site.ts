type ExternalSiteLink = {
  label: string;
  href: string;
};

type EmailSiteLink = {
  label: string;
  kind: 'email';
  user: string;
  domain: string;
  tld: string;
  fallbackText?: string;
};

export type SiteLink = ExternalSiteLink | EmailSiteLink;

type SiteConfig = {
  title: string;
  description: string;
  url: string;
  author: string;
  language: string;
  socialHandle?: string;
  defaultOgImage?: string;
  links: SiteLink[];
};

export const site: SiteConfig = {
  title: 'Erik Rodriguez',
  description:
    'Software engineer working on banking platforms, applied AI, modernization, and computational mechanics.',
  url: 'https://rodrgz.github.io',
  author: 'Erik Rodriguez',
  language: 'en',
  socialHandle: undefined,
  defaultOgImage: undefined,
  links: [
    {
      label: 'Email',
      kind: 'email',
      user: 'erik',
      domain: 'rodgz',
      tld: 'com',
      fallbackText: 'erik [at] rodgz [dot] com'
    },
    { label: 'GitHub', href: 'https://github.com/rodrgz' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/erik-rodrgz/' },
    { label: 'ORCID', href: 'https://orcid.org/0000-0002-9795-8666' }
  ]
};
