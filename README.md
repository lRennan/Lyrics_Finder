# Lyrics Finder 🎶

A simple **React.js** application that allows users to search for and view song lyrics. This project uses the **Lyrics.ovh API** to fetch song lyrics based on the artist and song name.

---

### Features
- **Search for lyrics**: Enter the **artist name** and **song title** to find the lyrics.
- **Error handling**: Displays an error message if no results are found or if the input is empty.
- **Simple UI**: The app provides a clean and responsive interface to view the lyrics.

        This is the home and only page

    ![Pagene](https://github.com/user-attachments/assets/f967a1ff-2821-4e30-a07d-eed9cf9fb95e)

      if you put all correctly the lyrics and the singer
  
  ![Pageto](https://github.com/user-attachments/assets/48c41d67-1d55-4151-b92b-3e84d44a47bd)

  but if you put incorrectly

  ![fail](https://github.com/user-attachments/assets/ad317733-b804-494c-8d4b-78f6fb503e90)


  




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







This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
