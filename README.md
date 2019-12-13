# Classic Arcade Game Project

## Table of Contents

* [How the Game Works](#How-the-Game-Works)
* [Technologies](#Technologies)
* [Main Functions](#Main-Functions)

## How-the-Game-Works

In this game you have a Player and Enemies (bugs). The goal of the player is to reach the water, without colliding into any one of the enemies.

Each turn:
* The player can move left, right, up and down
* The enemies move at varying speeds on the paved block portion of the game board
* Once a the player collides with an enemy, the game is reset and the player moves back to the        starting square
* Once the player reaches the water (i.e., the top of the game board), the game is won



## Technologies
HTML, CSS and ES6.


## Main-Functions

* Character class the main class that other classes inherit from
* Enemy class which render the bugs to the screen with all their functions
* Player class which render the player character to the screen with all his functions
* collision function determin if the player collides with an enemy
