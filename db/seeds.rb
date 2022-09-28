# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

user1 = User.create(name: "Joey", email: "joeyparlamenti@yahoo.com")

dndProj = Project.create(title: "DnD Crawl", link: "https://media-exp1.licdn.com/dms/image/sync/C4E27AQHiSjdtmKARHQ/articleshare-shrink_800/0/1663303990363?e=1664899200&v=beta&t=5RUoXZqh-OL27uS1l1v-cxiqDZDKLur4APMyFvLRYhE", description: "A simplified dungeon adventure game with various selectable classes, items and dynamic rooms selection. Select a class and find the dragon to win the game!")
satisProj = Project.create(title: "Satisfactory Planner", link: "https://media-exp1.licdn.com/dms/image/C4E2DAQFDOIWgWDmf_w/profile-treasury-image-shrink_800_800/0/1658165573093?e=1664899200&v=beta&t=bn4FTf2dP9atTVRZmH0zR4z50teuVxC4Otplia1Yp4Q", description: "This app allows players of the video game Satisfactory to visualize the game’s data based on their personal factory systems to assist in strategizing future planning.")
groceryProj = Project.create(title: "Grocery Tracker", link: "", description: "")