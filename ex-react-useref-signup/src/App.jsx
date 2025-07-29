import { useState } from 'react'

function App() {

  const [name, setName] = useState('');

  const [username, setUsername] = useState('');

  const [password, setPassword] = useState('');

  const [special, setSpecial] = useState('');

  const [anni, setAnni] = useState('');

  const [bio, setBio] = useState('');

  const sendData = (e) => {
    e.preventDefault()
    console.log(`Riepilogo dati:
      - Nome = ${name};
      - Username = ${username}
      - Password = ${password}
      - Specializzazione = ${special}
      - Anni di ex. = ${anni}
      - Biografia = ${bio}
      `)
  }

  return (
    <>
      <header className='p-4 text-center text-white bg-primary'>EX - Web Developer Signup</header>
      <main>
        <div className="container mt-5">
          <div className="row ">
            <div className="col-lg-3 d-flex flex-column">
              <form onSubmit={sendData}>
                <input type="text" className=" mb-3 form-control" value={name} placeholder='Nome completo' onChange={(e) => setName(e.target.value)} />
                <input type="text" className=" mb-3 form-control" placeholder=' Username' value={username} onChange={(e) => setUsername(e.target.value)} />
                <input type="password" className=" mb-3 form-control" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                <select className=" mb-3 form-control" value={special} onChange={(e) => setSpecial(e.target.value)}>
                  <option >&#9660; Scegli la specializzazione </option>
                  <option value="Full stack">Full Stack </option>
                  <option value="Frontend">Frontend</option>
                  <option value="Backend">Backend</option>
                </select>
                <input type="number" className=" mb-3 form-control" placeholder='Anni di esperienza' value={anni} onChange={(e) => setAnni(e.target.value)} />
                <textarea className=" mb-3 form-control" placeholder='Breve descrizione' value={bio} onChange={(e) => setBio(e.target.value)}></textarea>
                <button className='btn btn-primary'>Invia</button>
              </form>
            </div>

          </div>
        </div>
      </main>
    </>
  )
}

export default App
