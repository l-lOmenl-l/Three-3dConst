import * as THREE from "three";
import materialJson from "./material.json";

class closet{
    constructor(series, option,amount_section, height, width, depth, materialCorpus, materialProfile) {
        this.series = series
        this.option = option
        this.amount_section = amount_section
        this.sizes = {height: height, width: width, depth: depth}
        this.materials = { corpus: materialCorpus, profile:materialProfile}
        this.mesh = []

        this.get_size = function ()
        {
            return this.sizes
        }

        this.get_material = function ()
        {
            return this.materials.corpus.name
        }
    }
}

var xmlHttp = new XMLHttpRequest();
xmlHttp.open( "GET", "http://127.0.0.1:8100/albums", false ); // false for synchronous request
xmlHttp.setRequestHeader("Access-Control-Allow-Origin", "*")
xmlHttp.send();
console.log(xmlHttp.responseText) 

let data = JSON.parse(JSON.stringify(materialJson))
console.log(data["шк"].corpus[0].name + ": " +data["шк"].corpus[0].url)
console.log(data["шк"].corpus)
let texture = new THREE.TextureLoader().load(data["шк"].corpus[0].url);

let material = new THREE.MeshBasicMaterial( { map: texture } );
material.name = data["шк"].corpus[0].name
export let params_closet = new closet(  "ШК",
                                                "",
                                                2,
                                                220,
                                                180,
                                                60,
                                                material,
                                                "Серебро")


