import superagent, { Response } from 'superagent';

interface Person {
  url: URL,
  name: String
}

const swapiUrl = "https://swapi.info/api/people";

const fetchPeopleWithPromises = (): Promise<string[]> => {
  return superagent.get(swapiUrl)
    .then((response: Response) => {
      const peopleRequests = response.body.map((person: Person) => {
        return superagent.get(person.url)
      })
      return Promise.all(peopleRequests)
        .then(people => {
          const names = [];
          for (const data of people) {
            names.push(data.body.name);
          }
          return names;
        });
    });
}

fetchPeopleWithPromises()
  .then(peopleWithPromises => console.log({ peopleWithPromises }));

const fetchPeopleWithAsync = async (): Promise<string[]> => {
  const response = await superagent.get(swapiUrl);
  const people = response.body || [];
  const peopleRequests = people.map((person: Person) => {
    return superagent.get(person.url);
  });

  const names = await Promise.all(peopleRequests)
    .then(people => {
      const names = [];
      for (const data of people) names.push(data.body.name);
      return names;
    });
    return names;
}

fetchPeopleWithAsync()
  .then(peopleWithAsync => console.log({ peopleWithAsync }));