export const company = {
  name: 'Craft By Us',
  tagline: 'Shaping Your Thoughts',
  email: 'craftbyyus@gmail.com',
  phone: '+92 313 6950865',
  whatsapp: '+92 313 6950865',
  instagram: {
    url: 'https://www.instagram.com/craft_byy_us?igsh=dXZlM2tubDhzbm1m',
    username: 'craft_byy_us',
  },
  location: 'Lahore, Pakistan',
};

export const getWhatsAppLink = (message: string = '') => {
  const phone = company.whatsapp.replace(/[^0-9]/g, '');
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phone}${message ? `?text=${encodedMessage}` : ''}`;
};

export const getEmailLink = (subject: string = '', body: string = '') => {
  const params = new URLSearchParams();
  if (subject) params.set('subject', subject);
  if (body) params.set('body', body);
  const queryString = params.toString();
  return `mailto:${company.email}${queryString ? `?${queryString}` : ''}`;
};
