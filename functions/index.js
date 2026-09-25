import { initializeApp } from 'firebase-admin/app'
import { getFirestore } from 'firebase-admin/firestore'
import { getMessaging } from 'firebase-admin/messaging'
import { onDocumentCreated } from 'firebase-functions/v2/firestore'
import { defineSecret } from 'firebase-functions/params'

initializeApp()
const approvedUids = defineSecret('APPROVED_UIDS')
export const notifyPartner = onDocumentCreated({ document: 'submissions/{submissionId}', secrets: [approvedUids] }, async event => {
  const approved = () => approvedUids.value().split(',').map(x => x.trim()).filter(Boolean)
  const submission = event.data?.data(); if (!submission || !approved().includes(submission.userId)) return
  const recipient = approved().find(uid => uid !== submission.userId); if (!recipient) return
  const user = await getFirestore().doc(`users/${recipient}`).get()
  const tokens = user.data()?.fcmTokens || []; if (!tokens.length) return
  const response = await getMessaging().sendEachForMulticast({ tokens, notification: { title: `${submission.userName} submitted a bookmark`, body: `Selected: ${submission.value === 'bookmark_now' ? 'Bookmark now' : submission.value === 'bookmark_later' ? 'Bookmark later' : 'None'}` }, webpush: { fcmOptions: { link: '/' } } })
  const invalid = response.responses.map((r, i) => !r.success ? tokens[i] : null).filter(Boolean)
  if (invalid.length) await user.ref.update({ fcmTokens: tokens.filter(t => !invalid.includes(t)) })
})
