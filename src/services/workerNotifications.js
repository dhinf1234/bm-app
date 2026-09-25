export async function notifyPartner(submissionId, user) {
  const endpoint = import.meta.env.VITE_NOTIFICATION_WORKER_URL
  if (!endpoint) return
  const token = await user.getIdToken()
  const response = await fetch(`${endpoint.replace(/\/$/, '')}/notify`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ submissionId }),
  })
  if (!response.ok) throw new Error('Notification delivery failed.')
}
