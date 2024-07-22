# SBA 320 - Two Page React Application

This News Application is a dynamic React-based single page web application that provides the latest news from many different sources and new ones are added throughout the day. You can browse news articles that are placed on a card format. Each card has a headline, description, and image. If the article does not come with an image then I have a placeholder image to take its place. Clicking on a card brings you to the article page which is a view of the article, that has a link if you want to continue to the full story.

> [!NOTE]
> Explanations of the technologies used.
- Axios - This handles data fetching with an API such as the news API.

- REACT - To be able to use reusable components to build a single page application. Navigates between different pages while all in a single page application.

- CSS - Makes my application pretty and easy on the eyes and fun animations.

- HTML - Hyper Text Markup Language and with the index.html file to have a div to then use react to build up the application.

- Vite - This is a fast development environment setup to quickly get started with REACT.

> [!TIP]
> Explanations of the approach taken.
- I started with the idea of either a bus route api application or a news application. Given the limited time allowed to work on either project, the news api looked to check all the boxes required from the rubric and simple-ish enough to learn with and create something. It was still very hard and ran in to a lot of bugs especially import errors that caused CSS to not work at all many times. I leanred now that you have to attach .css to the end of the import file path... But for jsx imports you do not need to add the file tag.
I started with choosing an api, got that to be connected to my react vite server on my local machine and then when I did not have anymore errors I then went on to work with css to make it functional and pretty.

> [!IMPORTANT]
> A link to your live site.
> https://github.com/iiSurf/sba320

> [!WARNING]
> Usage instructions, if relevant.
1. Clone repository to your local machine.
2. Open the project folder in Visual Studio Code and in terminal type npm install.
3. You will need to go to https://newsapi.org and get a API KEY.
4. Delete line 10 in HomePage.jsx file.
5. Delete on line 12 where it says API_KEY that is inside curly braces that looks like ${API_KEY} and insert your API Key right in there.
6. Make sure to install Vite by typing in the terminal of VS Code with, 'npm create vite@latest'
7. Once that finishes then you can type, 'npm run dev'
8. Cntrl + Click (On Windows) or Cmnd + Click (On iMac) to then be taken to your browser and running on your local server.

> [!CAUTION]
> Unsolved problems.
> Comments! The commented out text for better code readability and for future reading of the code is going crazy. At times it will not accept '//' or '/* */' commented out code. It will show up in the pages and also VS Code seems to also add curly braces around each commented out text. Once deleted they appear again.
> I also see more text in some of the article news cards that were not there before. This at least is an easy to solve fix. But for it to work it will have to behave.
Besides this, no otherissues I see.
