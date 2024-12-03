# TucShop
==============


##To start the project you will need :

 - Visual Studio Code for the client side of the project.
 - Visual Studio Community for the server side of the project. (All the necessary files are located in the folder "ÖgötaSolutions"!)
 - DB Browser for SQLite app from Downloads - DB Browser for SQLite . Install the 64-bit version https://download.sqlitebrowser.org/DB.Browser.for.SQLite-v3.13.1-win64.msi  to be able to see the data in the database.

##Step by step start up:

###Visual Studio Code
 - Open VScode terminal or Visual Studio Community terminal or any terminal of your choice.
 - In the terminal navigate to the folder "ÖgötaSolutions/client".
 - From there enter the command npm run dev and press enter.
 - Amongst other info that comes to the terminal, locate the "http://localhost:5173/" link.
 - Press Ctr + click on that link.
 - Your browser should open now with the home page of the project.
** Warning, It might be necessery to run the command npm install to install missing or outdated dependencies before run the command.

###Visual Studio Community
 - Execute the OgotaSolutions solution to open the project in Visual Studio Community.
 - Install EntityFrameworkCore.SQLite and EnityFrameWork Tools from the extensions to avoid any problems with the database.
 - Run the program.cs file from the solution explorer by clicking the play button.
 - This should build up the solution and launch the swagger page that will have the link https://localhost:7259/swagger/index.html, that holds the database documentation and start the database link.
   SQLite
 - After the installation of the app, look for the tab "Open Database" to check the data in the database.
** DB browser for SQLite is not necessary for the project to work but it's a plus if one wants to check the data.
