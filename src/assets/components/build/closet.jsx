class closet{
    constructor(series, option,amount_section, height, width, depth, materialCorpus, materialProfile) {
        this.series = series
        this.option = option
        this.amount_section = amount_section
        this.sizes = {height: height, width: width, depth: depth}
        this.materials = {corpus: materialCorpus, profile: materialProfile}
        this.mesh = []

        this.get_size = function ()
        {
            console.log(this.sizes)
        }

        this.get_material = function ()
        {
            console.log(this.materials)
        }
    }
}
export let params_closet = new closet(
                                                "Экспресс",
                                                "standart",
                                                2,
                                                220,
                                                180,
                                                60,
                                                "Дуб Табачный",
                                                "Серебро"
                                                )

params_closet.get_size()
params_closet.get_material()

