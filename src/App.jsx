// src/App.jsx
import Header from './components/Header'
import Skills from './components/Skills'
import ProjectGrid from './components/ProjectGrid'
import './App.css'

function App() {
  return (
    <main className="app">
      <Header />
      <ProjectGrid />
      <Skills />
    </main>
  )
}

export default App