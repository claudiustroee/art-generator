const fs = require("fs");
const width = 32;
const height = 32;
const dir = __dirname;
const rarity = [
    { key: "", val: "original" },
    { key: "_r", val: "rare" },
    { key: "_sr", val: "super rare"},
];

const addRarity = (_str) => {
    let itemRarity;
    rarity.forEach((r) => {
        if (_str.includes(r.key)) {
            itemRarity = r.val;
        }    
    });
    return itemRarity;
}

const cleanName = (_str) =>{
    let name = _str.slice(0, -4);
    rarity.forEach((r) => {
        name = name.replace(r.key, "");        
    });
    return name;
};

const getElements = (path) =>{
    return fs
        .readdirSync(path)
        .filter((item) => !/(^|\/)\.[^\/\.]/g.test(item))
        .map((i,index) => {
            return {
                id: index + 1,
                name: cleanName(i),
                fileName: i,
                rarity: addRarity(i),
            };
        });
};

const layers = [
    {
        id: 1,
        name: "sky",
        location: `${dir}/SKY/`,
        elements: getElements(`${dir}/SKY/`),
        position: {x: 0, y: 0},
        size: {width: width, height: height},
    },
    {
        id: 2,
        name: "ground",
        location: `${dir}/GROUND/`,
        elements: getElements(`${dir}/GROUND/`),
        position: {x: 0, y: 0},
        size: {width: width, height: height},
    },
    {
        id: 3,
        name: "body",
        location: `${dir}/BODY/`,
        elements: getElements(`${dir}/BODY/`),
        position: {x: 0, y: 0},
        size: {width: width, height: height},
    },
    {
        id: 4,
        name: "head",
        location: `${dir}/HEAD/`,
        elements: getElements(`${dir}/HEAD/`),
        position: {x: 0, y: 0},
        size: {width: width, height: height},
    },
    {
        id: 5,
        name: "eyes",
        location: `${dir}/EYES/`,
        elements: getElements(`${dir}/EYES/`),
        position: {x: 0, y: 0},
        size: {width: width, height: height},
    },
    {
        id: 6,
        name: "hair",
        location: `${dir}/HAIR/`,
        elements: getElements(`${dir}/HAIR/`),
        position: {x: 0, y: 0},
        size: {width: width, height: height},
    },

    {
        id: 7,
        name: "mouth",
        location: `${dir}/MOUTH/`,
        elements: getElements(`${dir}/MOUTH/`),
        position: {x: 0, y: 0},
        size: {width: width, height: height},
    },
    {
        id: 8,
        name: "base",
        location: `${dir}/BASE/`,
        elements: getElements(`${dir}/BASE/`),
        position: {x: 0, y: 0},
        size: {width: width, height: height},
    },
    {
        id: 9,
        name: "accesory",
        location: `${dir}/ACCESORY/`,
        elements: getElements(`${dir}/ACCESORY/`),
        position: {x: 0, y: 0},
        size: {width: width, height: height},
    },
    {
        id: 10,
        name: "outfit",
        location: `${dir}/OUTFIT/`,
        elements: getElements(`${dir}/OUTFIT/`),
        position: {x: 0, y: 0},
        size: {width: width, height: height},
    },

];

module.exports = {layers , width, height};