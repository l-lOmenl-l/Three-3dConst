import { Vector3 } from "three";

export const useBuild = (sizes: DomainSizes) => {

    // Ф-ия размещения стоевых на линии
    const getPositionStanding = (index: number, total: number) => {
        const start = [0 - (sizes.width[0] / 2) + 1, (sizes.height[0] / 2) - 2, 0.25];
        const end = [(sizes.width[0] / 2) - 1, (sizes.height[0] / 2) - 2, 0.25];
        const t = index / (total - 1);
        return new Vector3(start[0] + t * (end[0] - start[0]), start[1] + t * (end[1] - start[1]), start[2] + t * (end[2] - start[2]))
    };

    // Ф-ия размещения hover объектов на линии
    const getPositionHoverObject = (index: number, total: number) => {
        const start = [(0 - (sizes.width[0] / 2) + (sizes.width[0] / (sizes.amount_section)) / 2) + 1, (sizes.height[0] / 2) - 1, (sizes.depth[0] / 2) - 8];
        const end = [((sizes.width[0] / 2) - (sizes.width[0] / (sizes.amount_section)) / 2) - 1, (sizes.height[0] / 2) - 1, (sizes.depth[0] / 2) - 8];
        const t = index / (total - 1);
        return new Vector3(start[0] + t * (end[0] - start[0]), start[1] + t * (end[1] - start[1]), start[2] + t * (end[2] - start[2]))
    };
    //Ф-ия размещения модулей на линии по горизонтали
    const getPositionModuleHorizontal = (index: number, total: number) => {
        const start = [(0 - (sizes.width[0] / 2) + (sizes.width[0] / (sizes.amount_section)) / 2), sizes.height[0] / 2, -2.75];
        const end = [((sizes.width[0] / 2) - (sizes.width[0] / (sizes.amount_section)) / 2), sizes.height[0] / 2, -2.75];
        const t = index / (total - 1);
        return new Vector3(start[0] + t * (end[0] - start[0]), start[1] + t * (end[1] - start[1]), start[2] + t * (end[2] - start[2]))
    };
    //Ф-ия размещения модулей на линии по вертикали
    const getPositionModuleVertical = (index: number, total: number) => {
        const start = [0, 0 - (sizes.height[0] / 2) + 4, 0];
        const end = [0, (sizes.height[0] / 2) - 8, 0];
        const t = index / (total - 1);
        return new Vector3(start[0] + t * (end[0] - start[0]), start[1] + t * (end[1] - start[1]), start[2] + t * (end[2] - start[2]))
    };

    return {
        getPositionStanding,
        getPositionHoverObject,
        getPositionModuleHorizontal,
        getPositionModuleVertical
    }

}