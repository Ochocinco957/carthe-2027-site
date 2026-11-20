/* ============================================================
   WHATSAPP SETTINGS
   ============================================================

   communityInvite
     The CARTHE community/group where updates are posted.
     WhatsApp → your community or group → Invite via link → Copy.
     Looks like: https://chat.whatsapp.com/ABC123xyz456

   directNumber
     The number people reach for one-to-one enquiries.
     Full international format, digits only, no + or spaces.
     Canada example: 14376621151
     Nigeria example: 2347042114404

   AUTO-RESPONSE
     WhatsApp itself sends the auto-reply — it cannot be set from
     a website. Set it on the business account that owns
     directNumber below:
       WhatsApp Business → Settings → Business tools →
       Greeting message (for first-time enquiries) and
       Away message (for outside business hours).
     Paste the text in AUTO_REPLY_TEMPLATE into that greeting so
     every new enquiry receives the community link automatically.
   ============================================================ */

export const WHATSAPP = {
  communityInvite: "https://chat.whatsapp.com/REPLACE_WITH_YOUR_INVITE_CODE",
  directNumber: "2348000000000",
  prefilledMessage:
    "Hello, I'd like to ask about CARTHE 2027 (3-10 June, Brampton).",
  showFloatingButton: true,
};

/* Copy this into WhatsApp Business → Greeting message.
   Replace the link with your real community invite. */
export const AUTO_REPLY_TEMPLATE = `Thank you for contacting CARTHE 2027 — the Canada-Africa Real Estate, Tourism & Hospitality Exchange, 3-10 June 2027 at Brampton City Hall, Ontario.

Join our WhatsApp community for programme updates, delegate information and announcements:
https://chat.whatsapp.com/REPLACE_WITH_YOUR_INVITE_CODE

A member of our team will respond to you personally shortly.`;

export function whatsappChatLink() {
  return `https://wa.me/${WHATSAPP.directNumber}?text=${encodeURIComponent(
    WHATSAPP.prefilledMessage
  )}`;
}

export function communityLinkIsSet() {
  return !WHATSAPP.communityInvite.includes("REPLACE_WITH");
}
