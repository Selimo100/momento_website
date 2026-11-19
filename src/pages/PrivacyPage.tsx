import { ShieldCheck, Server, BarChart2, Megaphone, HardDrive, Image, MousePointer } from 'lucide-react'
import { useEffect } from 'react'
import { motion } from 'framer-motion'

const EFFECTIVE_DATE = '28 October 2026'
const CONTACT_EMAIL = 'selimo.contact@gmail.com'

const commitments = [
  {
    icon: ShieldCheck,
    title: 'No account required',
    description:
      'Momento works entirely without registration. There is no login, no profile, no identity stored anywhere.',
  },
  {
    icon: Server,
    title: 'No backend',
    description:
      'There is no server, no API, and no cloud infrastructure involved in using Momento.',
  },
  {
    icon: BarChart2,
    title: 'No analytics',
    description:
      'Momento does not track usage, collect crash reports, or send any data to third parties.',
  },
  {
    icon: Megaphone,
    title: 'No ads',
    description:
      'The app contains no advertising and no monetisation that involves your data.',
  },
  {
    icon: HardDrive,
    title: 'Data stays on your device',
    description:
      'All moments, photos, stories and notes are stored locally on your iPhone. Nothing leaves your device unless you explicitly choose to export.',
  },
  {
    icon: Image,
    title: 'Photo access only with permission',
    description:
      'Momento only accesses Apple Photos when you actively choose to add photos to a moment. The app does not scan or index your library in the background.',
  },
  {
    icon: MousePointer,
    title: 'Export only on your action',
    description:
      'An Apple Photos album is only created when you explicitly choose to export a moment. No automatic syncing or uploading happens.',
  },
]

/** Every system permission the app can request, and what it is used for. */
const permissions = [
  {
    title: 'Photo library',
    body:
      'Requested when you add photos to a moment, and when you export a moment back to Apple Photos. Momento stores references to the photos you pick, not copies of your library. Your original photos in Apple Photos are never modified or deleted by the app.',
  },
  {
    title: 'Contacts',
    body:
      'Requested only when you open the contact picker to tag someone in a moment. Momento reads the names you select and stores them on your device as part of that moment. Your address book is never uploaded, indexed in the background, or shared.',
  },
  {
    title: 'Face ID',
    body:
      'Used only to unlock moments you have marked as private. Authentication is handled entirely by iOS. Momento never receives, stores, or has any access to your biometric data — it only receives a yes-or-no result from the system.',
  },
  {
    title: 'Notifications',
    body:
      'If you set a reminder for a time capsule, Momento schedules a local notification on your device. These notifications are generated and delivered on-device. No push server is involved and no notification content is transmitted anywhere.',
  },
  {
    title: 'Place search',
    body:
      'If you attach a location to a moment, Momento uses Apple Maps to search for a place by name. The text you type in that search field is sent to Apple so it can return results, and is handled under Apple’s privacy policy. Momento never receives your device’s GPS location — the app does not request location access at all.',
  },
]

/** Plain-language answers to the questions a policy is expected to cover. */
const policySections = [
  {
    title: 'What we collect',
    body:
      'Nothing. Momento has no servers, so there is no mechanism by which the developer could receive your data. We do not collect personal information, usage analytics, crash reports, advertising identifiers, or any other data from the app.',
  },
  {
    title: 'How your data is stored',
    body:
      'Everything you create in Momento — moments, titles, stories, moods, notes, tagged names, photo references and time capsule dates — is stored in a private database inside the app’s own storage on your device, protected by iOS app sandboxing and device encryption.',
  },
  {
    title: 'Data retention and deletion',
    body:
      'Your data stays on your device for as long as you keep the app installed. You can delete any individual moment from inside the app at any time. Deleting the app removes all of its data from your device permanently. Because nothing is ever transmitted to us, there is no copy anywhere else for us to delete, and no data deletion request is necessary.',
  },
  {
    title: 'Sharing and third parties',
    body:
      'Momento contains no third-party SDKs, analytics libraries, advertising networks, or tracking code of any kind. Your information is never sold, rented, or shared. Content leaves your device only when you deliberately export or share it yourself, in which case it goes wherever you choose to send it.',
  },
  {
    title: 'Children’s privacy',
    body:
      'Momento does not collect data from anyone, including children. The app requires no account and gathers no personal information, so no information is knowingly collected from children of any age.',
  },
  {
    title: 'Changes to this policy',
    body:
      'If this policy changes, the updated version will be published on this page with a new effective date. Because the app collects no data, any future change would be about clarity rather than about new data practices.',
  },
]

const stagger = {
  show: { transition: { staggerChildren: 0.06 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.32, 0.72, 0, 1] as const } },
}

export default function PrivacyPage() {
  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])

  return (
    <main className="pt-[104px] md:pt-[120px] pb-16 md:pb-24 min-h-screen bg-canvas">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
          className="mb-16 md:mb-24"
        >
          <div className="flex items-center gap-3 mb-12">
            <span className="tag">
              <span className="accent-dot" style={{ width: 6, height: 6 }} />
              Privacy policy
            </span>
            <span className="rule flex-1" />
            <span className="mono text-micro text-ink-3">Effective {EFFECTIVE_DATE}</span>
          </div>

          <h1
            className="display display-fade max-w-[16ch]"
            style={{ fontSize: 'clamp(56px, 9vw, 128px)' }}
          >
            Your privacy is the default
          </h1>
          <p className="mt-12 text-body-sm md:text-body text-ink-2 max-w-[56ch]">
            This is the privacy policy for Momento, an iOS app for keeping personal photo moments.
            Momento was built with privacy as the foundation, not an afterthought. Here is exactly
            what we do, and what we do not do.
          </p>
          <p className="mt-6 text-body-sm text-ink-2 max-w-[56ch]">
            The short version: Momento has no servers and no accounts, and the developer receives no
            data from the app whatsoever. Everything you create stays on your device.
          </p>
        </motion.div>

        {/* Commitments — hairline rows, not cards */}
        <motion.div variants={stagger} initial="hidden" animate="show" className="mb-16 md:mb-24">
          {commitments.map(({ icon: Icon, title, description }, i) => (
            <motion.div
              key={title}
              variants={fadeUp}
              className="grid gap-3 md:grid-cols-[64px_1fr_1fr] py-6 items-start"
              style={{ borderTop: '1px solid var(--s-line)' }}
            >
              <div className="flex items-center gap-3">
                <span className="mono text-micro text-ink-3">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <Icon size={16} className="text-ink-3" strokeWidth={1.75} />
              </div>
              <h2 className="text-body-sm text-ink max-w-[24ch]">{title}</h2>
              <p className="text-micro text-ink-2 leading-[1.5] max-w-[56ch]">{description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Permissions the app can request */}
        <section className="mb-24">
          <div className="flex items-center gap-3 mb-12">
            <span className="tag">
              <span className="accent-dot" style={{ width: 6, height: 6 }} />
              Permissions
            </span>
            <span className="rule flex-1" />
          </div>
          <h2 className="text-body md:text-body text-ink mb-3 max-w-[32ch]">
            What Momento asks for, and why
          </h2>
          <p className="text-body-sm text-ink-2 max-w-[56ch] mb-12">
            Every permission below is requested only at the moment you use the feature that needs
            it, and you can decline any of them and keep using the rest of the app.
          </p>
          <div>
            {permissions.map(({ title, body }) => (
              <div
                key={title}
                className="grid gap-3 md:grid-cols-[1fr_2fr] py-6 items-start"
                style={{ borderTop: '1px solid var(--s-line)' }}
              >
                <h3 className="text-body-sm text-ink max-w-[24ch]">{title}</h3>
                <p className="text-micro text-ink-2 leading-[1.5] max-w-[64ch]">{body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Formal policy sections */}
        <section className="mb-24">
          <div className="flex items-center gap-3 mb-12">
            <span className="tag">
              <span className="accent-dot" style={{ width: 6, height: 6 }} />
              The details
            </span>
            <span className="rule flex-1" />
          </div>
          <div>
            {policySections.map(({ title, body }) => (
              <div
                key={title}
                className="grid gap-3 md:grid-cols-[1fr_2fr] py-6 items-start"
                style={{ borderTop: '1px solid var(--s-line)' }}
              >
                <h3 className="text-body-sm text-ink max-w-[24ch]">{title}</h3>
                <p className="text-micro text-ink-2 leading-[1.5] max-w-[64ch]">{body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Summary */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="panel p-6 flex flex-col gap-3"
        >
          <span
            className="tag-ghost self-start"
            style={{ background: 'transparent', borderColor: 'var(--s-line)', color: 'var(--s-ink-3)' }}
          >
            Questions
          </span>
          <p className="text-body-sm text-ink-2 max-w-[56ch]">
            If you have any questions about privacy or about this policy, please contact us at{' '}
            <a href={`mailto:${CONTACT_EMAIL}`} className="ghost-link">
              {CONTACT_EMAIL}
            </a>
          </p>
          <p className="text-micro text-ink-3 max-w-[56ch]">
            Momento is developed by Selina Mogicato. This policy was last updated on {EFFECTIVE_DATE}.
          </p>
        </motion.div>
      </div>
    </main>
  )
}
