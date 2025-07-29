import { useMemo, useState, useRef } from 'react'

function App() {

  // stringhe per la validazione
  const letters = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = '!@#$%^&*()-_=+[]{}|;:\\",.<>?/`~';

  // campi non controllati
  const name = useRef('');
  console.log(name)

  const special = useRef('');

  const anni = useRef('');

  // variabili di stato per i campi input controllati della form
  const [username, setUsername] = useState('');

  const [password, setPassword] = useState('');

  const [bio, setBio] = useState('');

  // funzione per l'invio dei dati
  const sendData = (e) => {
    const nomeVal = name.current.value.trim();
    const specialVal = special.current.value.trim();
    const anniVal = Number(anni.current.value);

    e.preventDefault()
    if (
      !nomeVal ||
      !username.trim() ||
      !password.trim() ||
      !specialVal ||
      anniVal <= 0 ||
      !usernameValid ||
      !passwordValid ||
      !bioValid ||
      !bio.trim()) {
      alert('Complia correttamente tutti i campi');
      return
    }
    console.log(`Riepilogo dati:
      - Nome = ${nomeVal};
      - Username = ${username}
      - Password = ${password}
      - Specializzazione = ${specialVal}
      - Anni di ex. = ${anniVal}
      - Biografia = ${bio}
      `)
  }

  // controllo della username
  const usernameValid = useMemo(() => {
    const valid = username.split('').every(char =>
      letters.includes(char.toLocaleLowerCase()) || numbers.includes(char)
    )
    return valid && username.trim().length >= 6
  }, [username])

  // controllo della password
  const passwordValid = useMemo(() => {
    return (
      password.length >= 6 && password.split("").some(char => letters.includes(char)) &&
      password.length >= 6 && password.split("").some(char => numbers.includes(char)) &&
      password.length >= 6 && password.split("").some(char => symbols.includes(char))
    )
  }, [password])

  // controllo della bio
  const bioValid = useMemo(() => {
    return bio.trim().length >= 100 && bio.trim().length <= 1000
  }, [bio])


  return (
    <>
      <header className='p-4 text-center text-white bg-primary'>EX - Web Developer Signup</header>
      <main>
        <div className="container mt-5">
          <div className="row ">
            <div className="col-lg-3 d-flex flex-column">
              <form onSubmit={sendData}>
                <input type="text" className=" mb-3 form-control" placeholder='Nome completo' ref={name} required />
                <div>
                  <input type="text" className=" mb-3 form-control" placeholder=' Username' value={username} onChange={(e) => setUsername(e.target.value)} required />
                  {username.trim() && (<p style={{ color: usernameValid ? 'green' : 'red' }}> {usernameValid ? "Username Valido" : "Username non valido"}</p>)}
                </div>
                <div>
                  <input type="password" className=" mb-3 form-control" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} required />
                  {password.trim() && (<p style={{ color: passwordValid ? 'green' : 'red' }}>{passwordValid ? "Password valida" : "Password non valida"}</p>)}
                </div>
                <select className=" mb-3 form-control" ref={special} >
                  <option >&#9660; Scegli la specializzazione </option>
                  <option value="Full stack">Full Stack </option>
                  <option value="Frontend">Frontend</option>
                  <option value="Backend">Backend</option>
                </select>
                <input type="number" className=" mb-3 form-control" placeholder='Anni di esperienza' ref={anni} required />
                <div>
                  <textarea className=" mb-3 form-control" placeholder='Breve descrizione' value={bio} onChange={(e) => setBio(e.target.value)} required></textarea>
                  {bio.trim() && (<p style={{ color: bioValid ? 'green' : 'red' }}>{bioValid ? "Descrizione valida" : "Descrizione troppo corta o lunga"}</p>)}
                </div>

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
