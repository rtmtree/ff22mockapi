# FF22 Mock API

A simple Node.js Express server that returns mock data.

## Installation

```bash
npm install
```

## Running the server

```bash
# Start the server
npm start

# Or run with nodemon for development
npm run dev
```

## API Endpoints

- `GET /` - Returns a welcome message
- `GET /1` - Returns the mock data with home_team short_code as "ARG" and away_team short_code as "FRA"

## Example Response from /1

```json
{
  "data": [
    {
      "home_team": {
        "short_code": "ARG"
      },
      "away_team": {
        "short_code": "FRA"
      }
    }
  ]
}
```

The server runs on port 3000 by default. You can change this by setting the PORT environment variable. # ff22mockapi
