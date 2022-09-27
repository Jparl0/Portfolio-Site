# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

dndProj = Project.create(title: "DnD Crawl", link: "https://github.com/Jparl0/D-D-Crawl", description: "A simplified dungeon adventure game with various selectable classes, items and dynamic rooms selection. Select a class and find the dragon to win the game!")
satisProj = Project.create(title: "Satisfactory Planner", link: "https://github.com/Jparl0/Satsifactory-Planner-2.0", description: "This app allows players of the video game Satisfactory to visualize the game’s data based on their personal factory systems to assist in strategizing future planning.")
groceryProj = Project.create(title: "Grocery Tracker", link: "", description: "")