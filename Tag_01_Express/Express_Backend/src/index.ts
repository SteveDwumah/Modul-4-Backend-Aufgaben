// @ts-nocheck
import express from 'express';
import { IPerson } from './models/IPerson';
import { IStarship } from './models/IStarship';
import cors from "cors";

const app = express();
const port = 3000;

app.use(cors());

const people: IPerson[] = [
  { id: 1, name: 'Luke Skywalker', species: 'Mensch', homeworld: 'Tatooine', affiliation: 'Rebellenallianz', role: 'Jedi' },
  { id: 2, name: 'Darth Vader', species: 'Mensch', homeworld: 'Tatooine', affiliation: 'Galaktisches Imperium', role: 'Sith-Lord' },
  { id: 3, name: 'Leia Organa', species: 'Mensch', homeworld: 'Alderaan', affiliation: 'Rebellenallianz', role: 'Senatorin' },
  { id: 4, name: 'Han Solo', species: 'Mensch', homeworld: 'Corellia', affiliation: 'Rebellenallianz', role: 'Schmuggler' },
  { id: 5, name: 'Chewbacca', species: 'Wookiee', homeworld: 'Kashyyyk', affiliation: 'Rebellenallianz', role: 'Co-Pilot' },
  { id: 6,  name: 'Obi-Wan Kenobi', species: 'Mensch', homeworld: 'Stewjon', affiliation: 'Jedi', role: 'Jedi-Meister' },
  { id: 7,  name: 'Yoda', species: 'Yoda-Spezies', homeworld: 'Unknown', affiliation: 'Jedi', role: 'Jedi-Meister' }
];

const starships: IStarship[] = [
  { id: 1, name: 'Millennium Falcon', class: 'Frachter', maxSpeed: 120, crewSize: 3, weaponType: 'Laserkanone' },
  { id: 2, name: 'X-Wing', class: 'Jäger', maxSpeed: 150, crewSize: 1, weaponType: 'Laserkanone' },
  { id: 3, name: 'TIE Fighter', class: 'Jäger', maxSpeed: 180, crewSize: 1, weaponType: 'Laserkanone' },
  { id: 4, name: 'Imperialer Sternenzerstörer', class: 'Schlachtschiff', maxSpeed: 95, crewSize: 2700, weaponType: 'Turbolaser' },
  { id: 5, name: 'Nebulon-B Spähkreuzer', class: 'Kreuzer', maxSpeed: 100, crewSize: 850, weaponType: 'Turbolaser' },
  { id: 6, name: 'Lambda-Klasse T-4a-Schnelltransporter', class: 'Transport', maxSpeed: 110, crewSize: 10, weaponType: 'Laserkanone' },
  { id: 7, name: 'Venator-Klasse Sternenzerstörer', class: 'Schlachtschiff', maxSpeed: 90, crewSize: 3700, weaponType: 'Turbolaser' }
]

app.get('/people', (req, res) => {
  res.json(people);
});

app.get('/starships', (req, res) => {
  res.json(starships);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});