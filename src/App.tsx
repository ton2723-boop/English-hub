import { HashRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { StoreProvider } from './lib/store'
import { CoursesPage } from './pages/CoursesPage'
import { ExamSectionPage, ExamsPage } from './pages/ExamsPage'
import { HomePage } from './pages/HomePage'
import { NotFound } from './pages/NotFound'
import { ProgressPage } from './pages/ProgressPage'
import { ResultPage } from './pages/ResultPage'
import { TestPage } from './pages/TestPage'
import { UnitPage } from './pages/UnitPage'
import { VocabPage } from './pages/VocabPage'

// HashRouter keeps deep links working on static hosts such as GitHub Pages.
export function App() {
  return (
    <StoreProvider>
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
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </HashRouter>
    </StoreProvider>
  )
}
