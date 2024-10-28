import { useEffect, useState } from 'react'

type Starship = {
  id: number;
  name: string
  class: string;
  maxSpeed: number;
  crewSize: number;
  waponType: string;
}

type People = {
  id: number,
  name: string
  species: string;
  homeworld: string;
  affiliation: string;
  role: string;
}

function App() {
  const [starshipdata, setStarshipdata] = useState<Starship[]>([]);
  useEffect(() => {
    fetch("http://localhost:3000/starships")
      .then((response) => response.json())
      .then((json) => setStarshipdata(json));
  },[]);

  const [peopledata, setPeopledata] = useState<People[]>([]);
  useEffect(()=>{
    fetch("http://localhost:3000/people")
      .then((response) =>response.json())
      .then((json) => setPeopledata(json))
  })



  return (<>
    <div>
      <h2>My Starships:</h2>
      {starshipdata.map((starship) => (
        <>
        <h3 key={starship.id}>{starship.name}</h3>
        <ul>
          <li>Klasse: {starship.class}</li>
          <li>Max. Geschwindigkeit: {starship.maxSpeed}</li>
          <li>Besatzungsgröße: {starship.crewSize}</li>
          <li>Waffentyp: {starship.waponType}</li>
        </ul>
        </>
      ))}
    </div>
    <br />
    <div>
      <h2>My People:</h2>
      {peopledata.map((people) =>(
        <>
        <h3 key={people.id}>{people.name}</h3>
        <ul>
          <li>Spezies: {people.species}</li>
          <li>Heimatplanet: {people.homeworld}</li>
          <li>Zugehörigkeit: {people.affiliation}</li>
          <li>Rolle: {people.role}</li>
        </ul>
        </>
      ))}
    </div>
  </>
  );
}

export default App
