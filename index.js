import express from "express";
const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render('index.ejs');
});

app.post("/submit", (req, res) => {
    res.render ('read.ejs');
})

app.listen(port, () => {
    console.log(`Server already at port ${port}.`);
}); 

// The application will allow users to create and view blog posts. 
// Posts will not persist between sessions as no database will be used in this version of the application.
// Features
// 1. Post Creation: Users should be able to create new posts.

// 2. Post Viewing: The home page should allow the user to view all their posts.

// 3. Post Update/Delete: Users should be edit and delete posts as needed.

// 3. Styling: The application should be well-styled and responsive, ensuring a good user experience on both desktop and mobile devices.