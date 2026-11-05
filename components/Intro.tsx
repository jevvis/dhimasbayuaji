'use client'

import { useEffect, useRef } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'

/**
 * Layar pembuka: kotak suara tergambar garis demi garis, nama muncul, lalu layar terbelah ke atas-bawah
 * dan hero terungkap bertahap (lihat .hero-anim di globals.css).
 * - Tampil di setiap muat ulang dan kunjungan baru; dilewati hanya bila datang dari halaman lain di situs ini (skrip di <head> di layout.tsx menyembunyikannya sebelum cat pertama).
 * - Bisa dilewati: klik, Esc, atau Enter.
 * - Pengaman: bila JavaScript gagal, CSS menyembunyikan layar ini sendiri setelah beberapa detik.
 */
const OPEN_AT_MS = 1900 // kapan layar mulai terbelah (setelah kotak suara + nama selesai)
const HERO_AFTER_MS = 200 // hero mulai terungkap sesaat setelah layar mulai terbelah
const DONE_AFTER_MS = 1100 // layar disembunyikan setelah animasi belah selesai

export default function Intro() {
  const { lang } = useLanguage()
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const root = document.documentElement
    if (root.classList.contains('intro-done')) return // sudah dilihat di sesi ini

    root.classList.add('intro-lock')
    const timers: number[] = []
    let opened = false

    const open = () => {
      if (opened) return
      opened = true
      ref.current?.classList.add('is-open')
      timers.push(window.setTimeout(() => root.classList.add('hero-go'), HERO_AFTER_MS))
      timers.push(
        window.setTimeout(() => {
          root.classList.add('intro-done')
          root.classList.remove('intro-lock')
        }, DONE_AFTER_MS)
      )
    }

    const openTimer = window.setTimeout(open, OPEN_AT_MS)
    const skip = () => {
      window.clearTimeout(openTimer)
      open()
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === 'Enter') skip()
    }
    window.addEventListener('keydown', onKey)
    const el = ref.current
    el?.addEventListener('click', skip)

    return () => {
      window.clearTimeout(openTimer)
      timers.forEach((t) => window.clearTimeout(t))
      window.removeEventListener('keydown', onKey)
      el?.removeEventListener('click', skip)
      root.classList.remove('intro-lock')
    }
  }, [])

  return (
    <div ref={ref} data-intro className="intro" role="presentation" aria-hidden="true">
      <div className="intro-panel intro-top" />
      <div className="intro-panel intro-bottom" />

      <div className="intro-content">
        <svg className="intro-capsule" viewBox="0 0 160 124" fill="none" aria-hidden="true">
          {/* kotak suara (ilmu politik): kertas suara dengan centang masuk ke kotak */}
          <rect className="intro-cap-fill-right" x="56" y="6" width="48" height="56" rx="5" />
          <path className="intro-cap-mid" d="M56 60V11a5 5 0 0 1 5-5h38a5 5 0 0 1 5 5v49" pathLength="100" />
          <path className="intro-cap-mid" d="M69 32l8 8 15-17" pathLength="100" />
          <rect className="intro-cap-fill-left" x="22" y="56" width="116" height="62" rx="8" />
          <rect className="intro-cap-line" x="22" y="56" width="116" height="62" rx="8" pathLength="100" />
          <path className="intro-cap-mid intro-cap-slot" d="M52 74h56" pathLength="100" />
        </svg>
        <p className="intro-name">Dhimas Bayu Aji</p>
        <p className="intro-role">SALES & SALES SUPPORT</p>
      </div>

      <p className="intro-skip">{lang === 'en' ? 'Click to skip' : 'Klik untuk melewati'}</p>
    </div>
  )
}
