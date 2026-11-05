import Navbar from '@/components/Navbar'
import ProjectList from '@/components/ProjectList'

export const metadata = {
  title: 'Pengalaman & Portofolio | Dhimas Bayu Aji',
  description: 'Pengalaman sales, magang administrasi, organisasi, dan kepanitiaan',
}

export default function ProjectsPage() {
  return (
    <main className="min-h-screen pt-20">
      <Navbar />
      <ProjectList />
      
      {/* Footer */}
      <footer className="py-8 px-4 text-center border-t border-[var(--card-border)] mt-20">
        <p className="text-[var(--muted)] text-sm">
          © {new Date().getFullYear()} Dhimas Bayu Aji. All rights reserved.
        </p>
      </footer>
    </main>
  )
}
