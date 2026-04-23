import { CharacterCounter } from './components/CharacterCounter/CharacterCounter.tsx'
import './App.css'

function App() {

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <CharacterCounter
          minWords={25}
          maxWords={100}
        />
      </div>
    </div>
  )
}

export default App
