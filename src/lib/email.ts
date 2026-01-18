import { company } from './company';

const WEB3FORMS_ACCESS_KEY = 'ba5cfc38-bff5-4e9a-a8f3-692945251e8d';

interface EmailData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

export const sendEmail = async (data: EmailData): Promise<{ success: boolean; message: string }> => {
  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        access_key: WEB3FORMS_ACCESS_KEY,
        to: company.email,
        from_name: data.name,
        subject: data.subject,
        name: data.name,
        email: data.email,
        phone: data.phone || 'Not provided',
        message: data.message,
      }),
    });

    const result = await response.json();

    if (result.success) {
      return { success: true, message: 'Email sent successfully!' };
    } else {
      return { success: false, message: result.message || 'Failed to send email' };
    }
  } catch (error) {
    console.error('Email sending error:', error);
    return { success: false, message: 'Failed to send email. Please try again.' };
  }
};

interface OrderEmailData {
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  shippingAddress: string;
  orderNotes?: string;
  items: Array<{
    name: string;
    quantity: number;
    price: number;
  }>;
  totalPrice: number;
}

export const sendOrderEmail = async (data: OrderEmailData): Promise<{ success: boolean; message: string }> => {
  const itemsList = data.items
    .map((item) => `• ${item.name} × ${item.quantity} = PKR ${(item.price * item.quantity).toFixed(2)}`)
    .join('\n');

  const message = `
🛒 NEW ORDER RECEIVED!

👤 Customer Details:
━━━━━━━━━━━━━━━━━━
Name: ${data.customerName}
Email: ${data.customerEmail}
Phone: ${data.customerPhone}

📦 Shipping Address:
━━━━━━━━━━━━━━━━━━
${data.shippingAddress}

📝 Order Notes:
${data.orderNotes || 'No special instructions'}

🛍️ Order Items:
━━━━━━━━━━━━━━━━━━
${itemsList}

💰 TOTAL: PKR ${data.totalPrice.toFixed(2)}
━━━━━━━━━━━━━━━━━━

Order placed on: ${new Date().toLocaleString('en-PK', { timeZone: 'Asia/Karachi' })}
  `.trim();

  return sendEmail({
    name: data.customerName,
    email: data.customerEmail,
    phone: data.customerPhone,
    subject: `🛒 New Order from ${data.customerName} - PKR ${data.totalPrice.toFixed(2)}`,
    message,
  });
};

export const sendContactEmail = async (data: {
  name: string;
  email: string;
  phone?: string;
  message: string;
}): Promise<{ success: boolean; message: string }> => {
  return sendEmail({
    name: data.name,
    email: data.email,
    phone: data.phone,
    subject: `💬 New Message from ${data.name} - Craft By Us`,
    message: `
📧 NEW CONTACT MESSAGE

From: ${data.name}
Email: ${data.email}
Phone: ${data.phone || 'Not provided'}

Message:
━━━━━━━━━━━━━━━━━━
${data.message}
━━━━━━━━━━━━━━━━━━

Received on: ${new Date().toLocaleString('en-PK', { timeZone: 'Asia/Karachi' })}
    `.trim(),
  });
};
