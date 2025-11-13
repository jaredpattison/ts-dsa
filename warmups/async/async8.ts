import superagent, { Response } from 'superagent';

interface Person {
  url: string,
  name: string
}

const swapiUrl = "https://swapi.info/api/people";

const fetchPeopleWithPromisees = (): Promise<string[]> => {
  return superagent.get(swapiUrl)
    .then((response: Response) => {
      const peopleRequests: Response[] = response.body.map((person: Person) => {
        return superagent.get(person.url);
      });
      return Promise.all(peopleRequests)
        .then(people => {
          const names: string[] = [];
          for (const data of people) {
            names.push(data.body.name);
          }
          return names;
        });
    });
}

fetchPeopleWithPromisees()
  .then(peopleWithPromises => console.log({ peopleWithPromises }));

  const fetchPeopleWithAsync = async (): Promise<string []> => {
    const response: Response = await superagent.get(swapiUrl);
    const peopleRequests: Response[] = response.body.map((person: Person) => {
      return superagent.get(person.url);
    });

    const names = await Promise.all(peopleRequests)
      .then(people => {
        const names: string[] = [];
        for (const data of people) names.push(data.body.name);
        return names;
      });
      return names;
  }

fetchPeopleWithAsync()
  .then(peopleWithAsync => console.log({ peopleWithAsync }));
  