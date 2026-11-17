import { enquiryForm } from '../data/content'

/**
 * Send a lead to the RES-Q-RITY inbox through Web3Forms.
 * Returns 'sent' | 'error', or 'mailto' when no access key is configured (the visitor's mail app opens instead).
 */
export async function sendEnquiry({ subject, fields }) {
  if (!enquiryForm.web3formsKey) {
    const body = Object.entries(fields).map(([k, v]) => `${k}: ${v}`).join('\n')
    window.location.href = `mailto:${enquiryForm.recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    return 'mailto'
  }
  try {
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        access_key: enquiryForm.web3formsKey,
        subject,
        from_name: 'RES-Q-RITY website',
        replyto: fields.email,
        ...fields,
      }),
    })
    const data = await res.json()
    return data.success ? 'sent' : 'error'
  } catch {
    return 'error'
  }
}
