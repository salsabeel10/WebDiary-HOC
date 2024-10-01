import { ContactForm } from './Component/Contact'
import { UserForm } from './Component/User'

function App() {
  return (
    <div className="bg-gray-500 h-full">
      <div className="pt-4">
        <ContactForm />
        <div className='pt-4 pb-4'>
        <UserForm />
        </div>
      </div>
    </div>
  )
}

export default App
