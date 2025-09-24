import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const PORT = 3000;
const app = express();
app.use(cors());

app.get("/quests", async (req, res) => {
	const query = `
    {
      tasks {
        name
        kappaRequired
        trader {
          name
        }
      }
    }
  `;

	const response = await fetch("https://api.tarkov.dev/graphql", {
		method: "POST",
		headers: {"Content-Type": "application/json"},
		body: JSON.stringify({query})
	});

	const data = await response.json();
	res.json(data.data.tasks);
});

app.get("/traders", async (req, res) => {
	const query = `
    {
      traders {
        name
        imageLink
      }
    }
  `;

	const response = await fetch("https://api.tarkov.dev/graphql", {
		method: "POST",
		headers: {"Content-Type": "application/json"},
		body: JSON.stringify({query})
	});

	const data = await response.json();
	res.json(data.data.traders);
});

app.listen(PORT, () => console.log(`Server läuft auf http://localhost:${PORT}`));
