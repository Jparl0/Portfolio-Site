# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

user1 = User.create(name: "Joey", email: "joeyparlamenti@yahoo.com")

dndProj = Project.create(
    title: "DnD Crawl", 
    link: "./images/DNDcrawl.jpeg", 
    description: "A simplified dungeon adventure game with various selectable classes, items and dynamic rooms selection. Select a class and find the dragon to win the game!"
)
satisProj = Project.create(
    title: "Satisfactory Planner", 
    link: "./images/Satisfactory.jpeg", 
    description: "This app allows players of the video game Satisfactory to visualize the game’s data based on their personal factory systems to assist in strategizing future planning."
)
dc2DataTracker = Project.create(
    title: "DC2 Data Manager", 
    link: "./images/Satisfactory.jpeg", 
    description: ""
)

groceryTracker =  Project.create(
    title: "Grocery-Tracker", 
    link: "./images/Satisfactory.jpeg", 
    description: ""
)