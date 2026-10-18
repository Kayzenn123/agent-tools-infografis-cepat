import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    { text: 'Racik', href: getPermalink('/#racik') },
    { text: 'Jalur Saji', href: getPermalink('/#jalur') },
    { text: 'Syarat', href: getPermalink('/#syarat') },
    { text: 'Ekspor', href: getPermalink('/#ekspor') },
    { text: 'FAQ', href: getPermalink('/#faq') },
  ],
  actions: [{ text: 'Mulai Meracik', href: getPermalink('/#racik'), target: '_self' }],
};

export const footerData = {
  links: [
    {
      title: 'Dapur',
      links: [
        { text: 'Racik naskah', href: getPermalink('/#racik') },
        { text: 'Jalur saji', href: getPermalink('/#jalur') },
        { text: 'Checklist syarat', href: getPermalink('/#syarat') },
      ],
    },
    {
      title: 'Bantuan',
      links: [
        { text: 'Panduan tipografi', href: getPermalink('/#tipografi') },
        { text: 'FAQ', href: getPermalink('/#faq') },
        { text: 'Ekspor naskah', href: getPermalink('/#ekspor') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Naskah tersimpan lokal di browser kamu — tidak dikirim ke mana pun.', href: getPermalink('/') },
  ],
  socialLinks: [],
  footNote: 'InfografisCepat — dapur naskah lomba infografis. Disajikan hangat.',
};
