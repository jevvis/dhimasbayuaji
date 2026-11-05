'use client'

import TypewriterTitle from './TypewriterTitle'
import { InternshipImageStack } from './WorkGallery'
import { useLanguage } from '@/contexts/LanguageContext'

const groups = [
  {
    labelKey: 'org.label.org',
    items: [
      { n: 1, images: ['/projects/org-hmj-1.jpg', '/projects/org-hmj-2.jpg', '/projects/org-hmj-3.jpg', '/projects/org-hmj-4.jpg'] },
      { n: 2, images: ['/projects/org-ukm-1.jpg', '/projects/org-ukm-2.jpg', '/projects/org-ukm-3.jpg'] },
    ],
  },
  {
    labelKey: 'org.label.panitia',
    items: [
      { n: 3, images: ['/projects/panitia-ravelnas-1.jpg', '/projects/panitia-ravelnas-2.jpg'] },
      { n: 4, images: ['/projects/panitia-seminar-1.jpg', '/projects/panitia-seminar-2.jpg'] },
      { n: 5, images: ['/projects/panitia-lkmm-1.jpg', '/projects/panitia-lkmm-2.jpg'] },
      { n: 6, images: ['/projects/panitia-futsal-1.jpg'] },
    ],
  },
]

export default function AcademicOrg() {
  const { t } = useLanguage()
  let row = 0

  return (
    <section id="trainings" className="relative py-24 px-4 md:px-8 overflow-x-clip font-sans">
      {/* Background Waves */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.1] z-0">
        <svg className="w-full h-full" viewBox="0 0 1440 800" preserveAspectRatio="none" fill="none" stroke="currentColor">
          <path d="M0 200C300 100 400 300 720 200C1040 100 1140 300 1440 200" strokeWidth="2" />
          <path d="M0 400C300 300 400 500 720 400C1040 300 1140 500 1440 400" strokeWidth="2" />
          <path d="M0 600C300 500 400 700 720 600C1040 500 1140 700 1440 600" strokeWidth="2" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase text-[var(--muted)] mb-4 font-semibold">{t('trainings.label')}</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              <TypewriterTitle text={t('trainings.title')} />
            </h2>
          </div>
          <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--card-bg)] border border-[var(--card-border)] text-xs font-semibold tracking-wider text-[var(--muted)] shrink-0 w-max">
            {t('trainings.campus')}
          </span>
        </div>

        {groups.map((group, gIdx) => (
          <div key={group.labelKey} className={gIdx > 0 ? 'mt-24' : ''}>
            <p className="text-[10px] tracking-[0.3em] uppercase text-blue-500 mb-10 font-semibold">{t(group.labelKey)}</p>
            <div className="flex flex-col gap-20 lg:gap-28">
              {group.items.map((item) => {
                const left = row++ % 2 === 1
                return (
                  <div
                    key={item.n}
                    className={`flex flex-col lg:flex-row gap-10 lg:gap-16 items-center ${left ? 'lg:flex-row-reverse' : ''}`}
                  >
                    <div className="w-full lg:w-1/2 flex flex-col">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-blue-500/10 text-blue-500 border border-blue-500/20">
                          0{item.n}
                        </span>
                        <span className="text-[11px] tracking-widest text-[var(--muted)] uppercase font-semibold">{t(`org.${item.n}.period`)}</span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-[var(--foreground)] mb-1">{t(`org.${item.n}.inst`)}</h3>
                      <h4 className="text-lg md:text-xl font-semibold text-blue-500 mb-2">{t(`org.${item.n}.role`)}</h4>
                      <p className="text-xs md:text-sm font-semibold text-[var(--muted)] mb-5">{t(`org.${item.n}.sub`)}</p>
                      <p className="text-[var(--muted)] text-sm leading-relaxed mb-6 text-justify">{t(`org.${item.n}.desc`)}</p>
                      <div className="flex flex-wrap gap-2">
                        {t(`org.${item.n}.tags`).split('|').map((tag) => (
                          <span key={tag} className="text-[10px] font-medium px-3 py-1.5 rounded-lg bg-[var(--card-bg)] border border-[var(--card-border)] text-[var(--foreground)] opacity-90">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="w-full lg:w-1/2">
                      <InternshipImageStack images={item.images} title={t(`org.${item.n}.inst`)} align={left ? 'left' : 'right'} />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
