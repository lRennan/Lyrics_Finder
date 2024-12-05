# Getting Started with Create React App
# Lyrics Finder 🎶

A simple **React.js** application that allows users to search for and view song lyrics. This project uses the **Lyrics.ovh API** to fetch song lyrics based on the artist and song name.

---

### Features
- **Search for lyrics**: Enter the **artist name** and **song title** to find the lyrics.
- **Error handling**: Displays an error message if no results are found or if the input is empty.
- **Simple UI**: The app provides a clean and responsive interface to view the lyrics.

---

### Technologies Used
- **React.js**: For building the frontend of the application.
- **Axios**: For making HTTP requests to the Lyrics.ovh API.
- **Lyrics.ovh API**: Used to retrieve song lyrics.

---

### How to Use

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/lyrics-finder.git
    cd lyrics-finder
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Start the application**:
    ```bash
    npm start
    ```

4. Open your browser and navigate to `http://localhost:3000` to see the app in action!

---

### How it Works
- The app uses **React state** to handle user input and song lyrics display.
- Users can type the name of the artist and the song in the respective fields.
- When the user clicks the search button, the app sends a request to the **Lyrics.ovh API** using **Axios**.
- If the song is found, the lyrics are displayed on the page. If the song is not found or there is an error, an appropriate error message is shown.

---

### Code Structure

- **App.js**: Main component that handles state, user input, and API requests.
- **App.css**: Contains basic styles for the layout and design of the app.

---

### Improvements

- Add a loading spinner to show while waiting for the API response.
- Display album artwork or other song details along with the lyrics.
- Integrate more APIs for better song data retrieval.

---

### Contributing

Feel free to fork this project, make improvements, and submit **pull requests**. If you encounter any issues, please open an **issue** and I will try to address it as soon as possible.

---

### License

This project is open-source and available under the [MIT License](LICENSE).

---

### Acknowledgments
- **GeeksforGeeks**: For the tutorial on building the basic song lyrics finder app.
- **Lyrics.ovh**: For providing the free API to fetch song lyrics.













































This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
