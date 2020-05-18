# Colton Wiklund

## World of Warcraft: Reborn
A theoretical version of World of Warcraft based on the original game. Contains updated abilities, talents, equipment, and a new system to promote player discovery.

- [Website](https://www.worldofwarcraftreborn.com)
- [Source](docs/CONTRIBUTING.md)

## Hero Arena
A Dota 2 custom game written in Lua and published on the steam workshop. Players battle against the other team in a deathmatch arena.

- [Steam Page](https://steamcommunity.com/sharedfiles/filedetails/?id=821151547&searchtext=dota+2+arena+1v1)
- [Code Example](Hero%20Arena/game_controller.lua)
- [Source](Hero%20Arena)

## Creator
A Unity project written in C# where the player creates simple structures that interact with the physics engine.

- [Code Example](Creator/Frame/FrameTool.cs)
- [Source](Creator)

#### Overview
![Frame Tool](Images/creator_1.jpg)
> The Frame Tool is used to create a Frame Segment between two points in world space. Frame Segments will automatically connect to any adjacent Frame Segments to create a unified structure.

![Panel Tool](Images/creator_2.jpg)
> The Panel Tool is used to create Panels between Frame Segments. The player selects a vertex and any Panels that can be made will be indicated. Clicking an indicator will build a Panel at that location.

![Structure](Images/creator_3.jpg)
> A structure made from the Frame and Panel Tools. The structure has a mass appriopriate for its size and can be interacted with through the physics engine.
