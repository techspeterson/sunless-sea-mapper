# Sunless Sea Mapper
A tool for the game [Sunless Sea](https://www.failbettergames.com/sunless/), to aid in planning trade routes. Built with [Create React App](https://github.com/facebook/create-react-app). Still very much a work in progress!

## How to use

Run `yarn start` to start the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

Each tile on the map is either fixed (shown in grey), or randomly chosen from a given set of tiles (grouped by colour). Click on the name of a region to assign it to that tile and view the ports in that region.

Track the port reports you've collected with the checklist on the side. Choose to either grey out the collected reports or hide them completely. Hit "Clear All" to reset the checklist.

Data is saved to local storage and will persist upon reloading the page.

## Planned features
- Quick visualisation of shop contents for each port
- Filter ports by item availability
- Make notes, mark ports as must-visit locations