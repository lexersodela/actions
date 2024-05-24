import express from 'express';
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (_, res) => {
    res.send("Hi! I'm built using CI / CD!");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
