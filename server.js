const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// Route for /1 that returns the specified JSON structure
app.get('/1', (req, res) => {
  const response = {
    data: [
      {
        home_team: {
          short_code: "ARG"
        },
        away_team: {
          short_code: "FRA"
        },
        stats: {
          home_score: 4,
          away_score: 2
        },
        goals: {
          overall: 8
        }
      },
      {
        goals: {
          overall: 7
        }
      },
      {
        goals: {
          overall: 4
        }
      },
      {
        goals: {
          overall: 4
        }
      },
      {
        goals: {
          overall: 3
        }
      },
      {
        goals: {
          overall: 3
        }
      }
    ]
  };
  
  res.json(response);
});

// Basic route for root path
app.get('/', (req, res) => {
  res.json({ message: 'Server is running! Try /1 for the data' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`Access the data at http://localhost:${PORT}/1`);
}); 