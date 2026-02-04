import { NEXT_PUBLIC_WEBAPP_URL } from '@documenso/lib/constants/app';

export const appMetaTags = (title?: string) => {
  const description =
    'DokuHR - Professional document signing platform for HR departments. Streamline your document workflows with secure, efficient e-signatures. Fast, reliable, and easy to use.';

  return [
    {
      title: title ? `${title} - DokuHR` : 'DokuHR',
    },
    {
      name: 'description',
      content: description,
    },
    {
      name: 'keywords',
      content:
        'DokuHR, HR document signing, e-signature, document management, HR workflows, electronic signatures, contract signing, employee documents',
    },
    {
      name: 'author',
      content: 'DokuHR',
    },
    {
      name: 'robots',
      content: 'index, follow',
    },
    {
      property: 'og:title',
      content: 'DokuHR - Professional Document Signing',
    },
    {
      property: 'og:description',
      content: description,
    },
    {
      property: 'og:image',
      content: `${NEXT_PUBLIC_WEBAPP_URL()}/opengraph-image.jpg`,
    },
    {
      property: 'og:type',
      content: 'website',
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image',
    },
    {
      name: 'twitter:site',
      content: '@dokuhr',
    },
    {
      name: 'twitter:description',
      content: description,
    },
    {
      name: 'twitter:image',
      content: `${NEXT_PUBLIC_WEBAPP_URL()}/opengraph-image.jpg`,
    },
  ];
};
