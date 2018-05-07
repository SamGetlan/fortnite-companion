function Location(name, camelCase, image) {
  this.name = name;
  this.camelCase = camelCase;
  this.image = image;
  this.checked = true;
}
const names = ['Chair', 'Loot Lake House', 'West of Loot Lake', 'North of Loot Lake', 'Prison', 'Shipping Containers', 'Lucky Landing', 'Flush Factory', 'Tilted Towers', 'Shifty Shafts', 'Haunted Hills', 'Anarchy Acres', 'Lonely Lodge', 'Wailing Woods', 'Moisty Mire', 'Fatal Fields', 'Greasy Grove', 'Snobby Shores', 'Junk Junction', 'Pleasant Park', 'Dusty Depot', 'Salty Springs', 'Retail Row', 'Tomato Town', 'House on the Hill', 'Town west of Motel', 'Town south of Dusty Depot', 'Town northeast of Flush Factory', 'Buildings West of Tilted Towers', 'Buildings North of the Prison', 'Motel', 'Risky Reels', 'Dusty Divot', 'Mansion South of Lonely Lodge', 'Buildings East of Flush Factory', 'Lair in Mountain Northeast of Snobby Shores'];
const chair = new Location(names[0], 'chair', './placeHolder.jpg');
const lootLakeHouse = new Location(names[1], 'lootLakeHouse', './placeHolder.jpg');
const westLootLake = new Location(names[2], 'westLootLake', './placeHolder.jpg');
const northLootLake = new Location(names[3], 'northLootLake', './placeHolder.jpg');
const prison = new Location(names[4], 'prison', './placeHolder.jpg');
const shippingContainers = new Location(names[5], 'shippingContainers', './placeHolder.jpg');
const luckyLanding = new Location(names[6], 'luckyLanding', './placeHolder.jpg');
const flushFactory = new Location(names[7], 'flushFactory', './placeHolder.jpg');
const tiltedTowers = new Location(names[8], 'tiltedTowers', './placeHolder.jpg');
const shiftyShafts = new Location(names[9], 'shiftyShafts', './placeHolder.jpg');
const hauntedHills = new Location(names[10], 'hauntedHills', './placeHolder.jpg');
const anarchyAcres = new Location(names[11], 'anarchyAcres', './placeHolder.jpg');
const lonelyLodge = new Location(names[12], 'lonelyLodge', './placeHolder.jpg');
const wailingWoods = new Location(names[13], 'wailingWoods', './placeHolder.jpg');
const moistyMire = new Location(names[14], 'moistyMire', './placeHolder.jpg');
const fatalFields = new Location(names[15], 'fatalFields', './placeHolder.jpg');
const greasyGrove = new Location(names[16], 'greasyGrove', './placeHolder.jpg');
const snobbyShores = new Location(names[17], 'snobbyShores', './placeHolder.jpg');
const junkJunction = new Location(names[18], 'junkJunction', './placeHolder.jpg');
const pleasantPark = new Location(names[19], 'pleasantPark', './placeHolder.jpg');
const dustyDepot = new Location(names[20], 'dustyDepot', './placeHolder.jpg');
const saltySprings = new Location(names[21], 'saltySprings', './placeHolder.jpg');
const retailRow = new Location(names[22], 'retailRow', './placeHolder.jpg');
const tomatoTown = new Location(names[23], 'tomatoTown', './placeHolder.jpg');
const houseOnHill = new Location(names[24], 'houseOnHill', './placeHolder.jpg');
const townWestOfMotel = new Location(names[25], 'townWestOfMotel', './placeHolder.jpg');
const townSouthOfDustyDepot = new Location(names[26], 'townSouthOfDustyDepot', './placeHolder.jpg');
const townNorthEastOfFlushFactory = new Location(names[27], 'townNorthEastOfFlushFactory', './placeHolder.jpg');
const buildingsWestOfTiltedTowers = new Location(names[28], 'buildingsWestOfTiltedTowers', './placeHolder.jpg');
const buildingsNorthOfPrison = new Location(names[29], 'buildingsNorthOfPrison', './placeHolder.jpg');
const motel = new Location(names[30], 'motel', './placeHolder.jpg');
const riskyReels = new Location(names[31], 'riskyReels', './placeHolder.jpg');
const mansionSouthOfLonelyLodge = new Location(names[32], 'mansionSouthOfLonelyLodge', './placeHolder.jpg');
const dustyDivot = new Location(names[33], 'dustyDivot', './placeHolder.jpg');
const buildingsEastOfFlushFactory = new Location(names[34], 'buildingsEastOfFlushFactory', './placeHolder.jpg');
const lairNortheastOfSnobbyShores = new Location(names[35], 'lairNortheastOfSnobbyShores', './placeHolder.jpg');
const locations = [chair, lootLakeHouse, westLootLake, northLootLake, prison, shippingContainers, luckyLanding, flushFactory, tiltedTowers, shiftyShafts, hauntedHills, anarchyAcres, lonelyLodge, wailingWoods, moistyMire, fatalFields, greasyGrove, snobbyShores, junkJunction, pleasantPark, dustyDepot, saltySprings, retailRow, tomatoTown, houseOnHill, townWestOfMotel, townSouthOfDustyDepot, townNorthEastOfFlushFactory, buildingsWestOfTiltedTowers, buildingsNorthOfPrison, motel, riskyReels, mansionSouthOfLonelyLodge, dustyDivot, buildingsEastOfFlushFactory, lairNortheastOfSnobbyShores];

export default locations;
