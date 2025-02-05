import { initServer } from "./init-app";

const app = initServer();
const PORT = 3232;

app.listen(PORT, () => {
	console.log(`Running on Port ${PORT}`);
});