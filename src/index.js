const express = require('express');
const v1Router = require('./v1/routes');
const v1WorkoutRouter = require('./v1/routes/workoutRoutes');

const app = express();
const PORT = process.env.PORT || 3000;



app.use('/api/v1/workouts', v1WorkoutRouter);
app.use('/api/v1', v1Router);


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});


