import superagent, { Response } from "superagent";

interface Person {
  url: string,
  name: string
}

const swapiUrl = "https://swapi.info/api/people";

const fetchPeopleWithPromises = (): Promise<string[]> => {
  return superagent.get(swapiUrl)
    .then((response: Response) => {
      const peopleRequests = response.body.map((person: Person) => superagent.get(person.url));
      return Promise.all(peopleRequests)
        .then(people => people.map(data => data.body.name));
    });
}

fetchPeopleWithPromises()
  .then(peopleWithPromises => console.log({ peopleWithPromises }));

const fetchPeopleWithAsync = async(): Promise<string[]> => {
  const response: Response = await superagent.get(swapiUrl);
  const peopleRequests = response.body.map((person: Person) => superagent.get(person.url));

  const names = await Promise.all(peopleRequests);
  return names.map(data => data.body.name);
}

fetchPeopleWithAsync()
  .then(peopleWithAsync => console.log({ peopleWithAsync }));