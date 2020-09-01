# HomePage
 Browser Startpage created in React & Node. Also works well in mobile since it's a PWA.
   
 ## Some of the functionalities
  * Current time
  * Current weather based on location
  * Gmail latest emails
  * Github notifications
  * Todoist (task manager) integration
  * Favourite websites
  * Google search
  * Dribbble feed
  * News feed
  * HackerNews feed
  * Movies feed
  * TV Shows feed
    
  ## Prints
  * [Home](https://imgurl.me/image/dPApM)
  * [Settings](https://imgurl.me/image/dPoch)
  * [Movies](https://imgurl.me/image/dPmMv)
  * [HackerNews](https://imgurl.me/image/dPljH)
  * [News](https://imgurl.me/image/dPOGR)
  
  ## How to use
  * First make sure you have node installed on your machine
  * Using your terminal, 'cd' to the folder you want and do ‘git clone https://github.com/nixton9/HomePage.git’
  * ‘cd HomePage’
  * ‘npm install’
  * 'cd client'
  * ‘npm install’
  * 'cd ..'
  * Create a .env file on the 'client' folder with the following keys for the features you want:
      * Google API Client ID & Google API Key for Gmail - REACT_APP_GOOGLE_CLIENT_ID & REACT_APP_GOOGLE_API_KEY 
      * OpenWeatherMap API key for Weather - REACT_APP_WEATHER_API_KEY 
      * NewsAPI key for News feed - REACT_APP_NEWS_API_KEY
      * TheMoviesDB API key for Movies & TV Shows feeds - REACT_APP_MOVIES_API_KEY
      * Tiingo API key for stocks data feed - REACT_APP_TIINGO_KEY
      * Password for 'login' - not optional - REACT_APP_LOGIN_KEY
  * Example for env file: https://imgurl.me/image/dhJnu
  * To have news from your country, open file 'news.js' and change 'COUNTRYCODE' on line 6 to whatever country you want. See codes [here](https://newsapi.org/sources)
  * Run locally with ‘npm run dev’
  * App should open now on browser
  * Open the settings and fill with name, Github API key, Todoist API key and the URL for a background image
  * Check if everything is alright. If so, you can now deploy it online in a service like Heroku. Guide to deploy [here](https://www.eduardo-araujo.com/tips/post-202)
  * On Heroku, go to ‘Config vars’ section and add all the vars that we have on the .env file
  
  ## Common problems
  * If during initial install you see an error related to 'react-scrips' do: 'npm install react-scripts --save'
  * If during initial install you see an error related to 'typescript' do: 'npm install typescript'
  
  ## Commands
  * 'npm run dev' to start both frontend and server
  * 'npm run client' to start frontend only
  * 'npm run server' to start server only
  * 'heroku-postbuild' to deploy on Heroku
  


