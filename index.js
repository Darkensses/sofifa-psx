const fetch = require('node-fetch');
const xpath = require('xpath')
const dom = require('xmldom').DOMParser

const base_url = 'https://sofifa.com';
let html = ''

async function getLeagues() {
    const res = await fetch(base_url+'/leagues');
    html = await res.text();    
    //console.log(html);
    const doc = new dom({errorHandler:{warning:(w) => {return}}}).parseFromString(html)
    const nodes = xpath.select("//a[contains(@href,'/league/')]", doc)
    for(var i = 0; i < nodes.length; i++){
        console.log((i+1) + ': ' + nodes[i].firstChild.data);
    }
    //console.log(nodes[0].localName + ": " + nodes[0].firstChild.data)
    //console.log("Node: " + nodes[0].toString())
}

getLeagues();