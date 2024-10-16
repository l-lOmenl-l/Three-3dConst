import { DomainProduct, DomainSizes } from "../generated/data-contracts";

class Product implements DomainProduct {
    type_product?: string | undefined;
    series_closet?: string| undefined;
    option_series?: string| undefined;
    sizes?: Sizes | undefined;
    base?: string | undefined;
    floor?: string | undefined;
    back_wall?: string | undefined;
    standing?: string | undefined;
    roof?: string | undefined;    
    constructor(
        type_product?: string | undefined,
        series_closet?: string | undefined,
        option_series?: string | undefined,
        sizes?: Sizes | undefined,
        base?: string | undefined,
        floor?: string | undefined,
        back_wall?: string | undefined,
        standing?: string | undefined,
        roof?: string | undefined    
    ){
        this.type_product = type_product;
        this.series_closet = series_closet;
        this.option_series = option_series;
        this.sizes = sizes;
        this.base = base;
        this.floor = floor;
        this.back_wall = back_wall;
        this.standing = standing;
        this.roof = roof; 
    }
    initProduct(objects: Product){
        this.type_product = objects.type_product;
        this.series_closet = objects.series_closet;
        this.option_series = objects.option_series;
        this.sizes = objects.sizes;
        this.base = objects.base;
        this.floor = objects.floor;
        this.back_wall = objects.back_wall;
        this.standing = objects.standing;
        this.roof = objects.roof;
    }
}

class Sizes implements DomainSizes{
    amount_section?: number | undefined;
    depth?: number[] | undefined;
    height?: number[] | undefined;
    width?: number[] | undefined;
    constructor(
        amount_section?: number | undefined,
        depth?: number[] | undefined,
        height?: number[] | undefined,
        width?: number[] | undefined
    ){
        this.amount_section = amount_section;
        this.depth = depth;
        this.height = height;
        this.width = width;
    }
    initProduct(objects: DomainSizes){
        this.amount_section = objects.amount_section;
        this.depth = objects.depth;
        this.height = objects.height;
        this.width = objects.width;
    }
    changeHeight(height:number[]|undefined){
        this.height = height
    }
    changeWidth(width:number[]|undefined){
        this.width = width
    }
    changeDepth(depth:number[]|undefined){
        this.depth = depth
    }
    changeSection(section:number|undefined){
        this.amount_section = section
    }
}


const sizes = new Sizes(2, [50], [240], [180])

const product = new Product("", "", "", sizes, "Стандарт", "Стандарт", "", "Стандарт", "")

export default product