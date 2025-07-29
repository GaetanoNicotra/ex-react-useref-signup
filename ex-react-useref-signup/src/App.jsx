import { useMemo, useState } from 'react'

function App() {

  // stringhe per la validazione
  const letters = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = '!@#$%^&*()-_=+[]{}|;:\\",.<>?/`~';

  // variabili di stato per i campi input della form
  const [name, setName] = useState('');

  const [username, setUsername] = useState('');

  const [password, setPassword] = useState('');

  const [special, setSpecial] = useState('');

  const [anni, setAnni] = useState('');

  const [bio, setBio] = useState('');

  // funzione per l'invio dei dati
  const sendData = (e) => {

    e.preventDefault()
    if (
      !name.trim().includes() ||
      !username.trim() ||
      !password.trim() ||
      !special.trim() ||
      !anni <= 0 ||
      !bio.trim()) {
      alert('Complia correttamente tutti i campi');
      return
    }
    console.log(`Riepilogo dati:
      - Nome = ${name};
      - Username = ${username}
      - Password = ${password}
      - Specializzazione = ${special}
      - Anni di ex. = ${anni}
      - Biografia = ${bio}
      `)
  }

  // controllo del campo username
  const usernameValid = useMemo(() => {
    const valid = username.split('').every(char =>
      letters.includes(char.toLocaleLowerCase()) || numbers.includes(char)
    )
    return valid && username.length >= 6
  }, [username])

  // controllo della password
  const passwordValid = useMemo(() => {
    return (
      password.length >= 6 && password.split("").some(char => letters.includes(char)) &&
      password.length >= 6 && password.split("").some(char => numbers.includes(char)) &&
      password.length >= 6 && password.split("").some(char => symbols.includes(char))
    )
  }, [password])

  return (
    <>
      <header className='p-4 text-center text-white bg-primary'>EX - Web Developer Signup</header>
      <main>
        <div className="container mt-5">
          <div className="row ">
            <div className="col-lg-3 d-flex flex-column">
              <form onSubmit={sendData}>
                <input type="text" className=" mb-3 form-control" value={name} placeholder='Nome completo' onChange={(e) => setName(e.target.value)} required />
                <input type="text" className=" mb-3 form-control" placeholder=' Username' value={username} onChange={(e) => setUsername(e.target.value)} required />
                <input type="password" className=" mb-3 form-control" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} required />
                <select className=" mb-3 form-control" value={special} onChange={(e) => setSpecial(e.target.value)} >
                  <option >&#9660; Scegli la specializzazione </option>
                  <option value="Full stack">Full Stack </option>
                  <option value="Frontend">Frontend</option>
                  <option value="Backend">Backend</option>
                </select>
                <input type="number" className=" mb-3 form-control" placeholder='Anni di esperienza' value={anni} onChange={(e) => setAnni(e.target.value)} required />
                <textarea className=" mb-3 form-control" placeholder='Breve descrizione' value={bio} onChange={(e) => setBio(e.target.value)} required></textarea>
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
