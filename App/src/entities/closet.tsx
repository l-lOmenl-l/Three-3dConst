import materialJson from '/src/config/material.json'
import * as THREE from "three";


interface IMaterials{
    corpus:string,
    profile:string
}

interface ISizes{
    width: number,
    height:number,
    depth:number,
}

interface ICloset{
    sizes:ISizes,
    materials:IMaterials,
    section:number,
    mesh:object[]
    
}

class Closet implements ICloset{
    section: number;
    mesh: object[];
    sizes: ISizes;
    materials:IMaterials;
    constructor(width:number,height:number,depth:number,section:number,mesh:object[],materialCorpus:string,materialProfile:string) {
        this.sizes = {height: height, width: width, depth: depth}
        this.materials = { corpus: materialCorpus, profile:materialProfile}
        this.section = section;
        this.mesh = mesh;
    }
    showInfoCloset(){
        console.log('Высота:' + this.sizes.height + '\nШирина:'+this.sizes.width+'\nГлубина:'+this.sizes.depth)
    }
    changeHeight = (height:number)=>{
        closet.sizes.height = height;
    } 
    changeWidth = (width:number)=>{
        closet.sizes.width = width;
    } 
    changeDeep = (depth:number)=>{
        closet.sizes.depth = depth;
    }
    changeSection = (section:number)=>{
        closet.section = section;
    }
}

const data = JSON.parse(JSON.stringify(materialJson))
console.log(data["шк"].corpus[0].name + ": " +data["шк"].corpus[0].url)
console.log(data["шк"].corpus)
const texture = new THREE.TextureLoader().load(data["шк"].corpus[0].url);

const material = new THREE.MeshBasicMaterial( { map: texture } );
material.name = data["шк"].corpus[0].name


const closet = new Closet(220,180,60,2,[],material,'Серебро')

export default closet