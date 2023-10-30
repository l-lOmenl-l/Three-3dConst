import * as THREE from 'three';
class closet{
    constructor(series, option,amount_section, z, x, y, materialCorpus, materialProfile) {
        this.series = series
        this.option = option
        this.amount_section = 2
        this.z = 220
        this.x = 160
        this.y = 60
        this.materialCorpus = materialCorpus
        this.materialProfile = materialProfile

        this.mesh = []

        this.get_size = function ()
        {
            return new THREE.Vector3(this.x, this.y, this.z)
        }

        this.get_material = function ()
        {
            return this.materialCorpus
        }
    }
}

export  let params_closet = new closet()