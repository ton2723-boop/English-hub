import { HashRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { AuthProvider, useAuth } from './lib/auth'
import { LangProvider } from './lib/lang'
import { StoreProvider } from './lib/store'
import { AccountPage } from './pages/AccountPage'
import { AdminPage } from './pages/AdminPage'
import { CoursesPage } from './pages/CoursesPage'
import { ExamSectionPage, ExamsPage } from './pages/ExamsPage'
import { HomePage } from './pages/HomePage'
import { LoginPage } from './pages/LoginPage'
import { NotFound } from './pages/NotFound'
import { ProgressPage } from './pages/ProgressPage'
import { ResultPage } from './pages/ResultPage'
import { TestPage } from './pages/TestPage'
import { UnitPage } from './pages/UnitPage'
import { VocabPage } from './pages/VocabPage'

export function App() {
  return (
    <LangProvider>
      <AuthProvider>
        <Gate />
      </AuthProvider>
    </LangProvider>
  )
}

/** Everything needs a signed-in account; each account gets its own progress store. */
function Gate() {
  const { session } = useAuth()
  if (!session) return <LoginPage />
  return (
    <StoreProvider key={session.user.userId}>
      <HashRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="test/:kind" element={<TestPage />} />
            <Route path="result/:kind" element={<ResultPage />} />
            <Route path="courses" element={<CoursesPage />} />
            <Route path="unit/:id" element={<UnitPage />} />
            <Route path="exams" element={<ExamsPage />} />
            <Route path="exams/:id" element={<ExamSectionPage />} />
            <Route path="vocab" element={<VocabPage />} />
            <Route path="progress" element={<ProgressPage />} />
            <Route path="account" element={<AccountPage />} />
            <Route path="admin" element={<AdminPage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </HashRouter>
    </StoreProvider>
  )
}
