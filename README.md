# Weather App

A simple web application to get current weather information for any city using the OpenWeatherMap API.

## Technologies Used

- Node.js
- Express.js
- Axios
- dotenv
- HTML, CSS, JavaScript (frontend)

## Features

- Search weather by city name
- Displays temperature, description, and weather icon
- Responsive and user-friendly interface
- API key securely managed on the backend

## Setup Instructions

1. **Clone the repository:**

   ```sh
   git clone https://github.com/RushikeshShinde62/WeatherApp.git
   ```

2. **go inside repo**

   ```sh
   cd weather-app
   ```

3. **Install dependencies:**

   ```sh
   npm install
   ```

4. **Configure environment variables:**

   - Create a `.env` file in the root directory.
   - Add your OpenWeatherMap API key:
     ```env
     OPENWEATHER_API_KEY=your_actual_api_key_here
     ```

5. **Start the server:**

   ```sh
   node app.js
   # or for auto-reload during development
   npx nodemon app.js
   ```

6. **Open the app:**
   - Visit [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
weather-app/
├── app.js              # Express server and backend logic
├── package.json        # Project metadata and dependencies
├── .env                # Environment variables (not committed)
├── public/
│   ├── index.html      # Main frontend page
│   ├── script.js       # Frontend JS logic
│   └── style.css       # Stylesheet
```

## Security Notes

- **Never commit your `.env` file or API keys to public repositories.**
- Add `.env` and `node_modules/` to your `.gitignore`.

## License

This project is licensed under the ISC License.

## Author

Rushikesh Shinde
