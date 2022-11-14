//import react from "react";
import "./App.css";
//import { useQuery } from "react-query";
import { gql, GraphQLClient, request } from "graphql-request";

//user:gh.85221f37-23e7-4f87-8014-91f1593a9501:tASTH-lQt4CNunVxqxvSBg

/*const exampleQuery = `allFilms {
    films {
      director
      title
    } 
  }
`;*/
function App() {
  async function getData() {
    const url = "	https://swapi-graphql.netlify.app/.netlify/functions/index";

    const graphGlClient = new GraphQLClient(url, {
      method: "POST",
      "Content-Type": "application/json",
    });
    const query = gql`
      {
        allFilms {
          films {
            id
            director
            title
          }
        }
      }
    `;
    const data = await graphGlClient.request(query);
    console.log(data);
    console.log(data.allFilms.films[0].director);
  }
  getData();

  return (
    <div className="App">
      <p>{JSON.stringify(gql)}</p>
    </div>
  );
  /*const { data } = useQuery([]);

  const url = "https://swapi-graphql.netlify.app/.netlify/functions/index";

  useEffect(() => {
    fetch(url, {
      method: "POST",
      //mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: exampleQuery,
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, [data]);*/
}

export default App;

/*{data.map((film) => {
        return (
          <ul>
            <li key={film.id}>{film.title}</li>
          </ul>
        );
      })}*/
//Authorization:
// "Bearer 85221f37-23e7-4f87-8014-91f1593a9501:tASTH-lQt4CNunVxqxvSBg",
//"Content-type": "application/json",
//"Access-Control-Allow-Origin": "https://studio.apollographql.com",
// "Access-Control-Allow-Credentials": true,
//},

/*async function getData() {
  const endpoint = "	https://swapi-graphql.netlify.app/.netlify/functions/index";

  const graphGlClient = new GraphQLClient(endpoint, {
    method: "POST",
  });
  const query = gql`
    {
      allFilms {
        films {
          director
          title
        }
      }
    }
  `;
  const data = await graphGlClient.request(query);
  console.log(JSON.stringify(data));
}
getData();*/
