import product from "@/entities/testProduct"
import { useEffect, useState } from "react"
import materialJSON from "@/config/material.json"

export const useBaseOptions = ()=>{
    const [base, setBase] = useState<boolean>(true)
    const [section, setSection] = useState<string[]>([])
    const [texture, setTexture] = useState<string>(materialJSON.шк.corpus[0].url)
    const [color, setColor] = useState<string>(materialJSON.шк.profile[0].color)
    const [minWidth, setMinWidth] = useState(0)
    const [maxWidth, setMaxWidth] = useState(0)
    const [sizes, setSizes] = useState<DomainSizes>(
        {
            amount_section: product.sizes?.amount_section,
            depth: product.sizes?.depth,
            height: product.sizes?.height,
            width: product.sizes?.width,
        }
    )
    const ChangeTexture = (value:string)=>{
        setTexture(value)
    }
    const ChangeColorProfile = (value:string)=>{
        setColor(value)
    }
    const ChangeHeight = (value: number[]) => {
        setSizes({ ...sizes, height: value })
        product.sizes?.changeHeight(value)
    }
    const ChangeWidth = (value: number[]) => {
        setSizes({ ...sizes, width: value })
        product.sizes?.changeWidth(value)
    }
    const ChangeDepth = (value: number[]) => {
        setSizes({ ...sizes, depth: value })
        product.sizes?.changeDepth(value)
    }
    const changeSection = (value: number) => {
        setSizes({ ...sizes, amount_section: value })
        setMinWidth(value * 50)

        if((value * 120)>600){
            setMaxWidth(600)
        }
        else{
            setMaxWidth(value * 120)
        }
        
        if (sizes.width[0] < (value * 50)) {
            setSizes({ ...sizes, width: [value * 50], amount_section: value })
            product.sizes?.changeWidth([value * 50])
            product.sizes?.changeSection(value)
        }
        else if (sizes.width[0] > (value * 120)) {
            setSizes({ ...sizes, width: [value * 120], amount_section: value })
            product.sizes?.changeWidth([value * 120])
            product.sizes?.changeSection(value)
        }

    }
    const ChangeBase = ()=>{
        setBase(!base)
    }
    useEffect(() => {
        const countSection = 10;
        const obj = []
        for (let index = 1; index < countSection; index++) {
            obj.push(String(index + 1))
        }
        setSection(obj)
        sizes.amount_section && setMinWidth(sizes.amount_section * 50)
        sizes.amount_section && setMaxWidth(sizes.amount_section * 120)
    }, []);

    return {
        base,
        texture,
        color,
        section,
        sizes,
        changeSection,
        ChangeHeight,
        ChangeDepth,
        ChangeWidth,
        ChangeTexture,
        ChangeBase,
        ChangeColorProfile,
        minWidth,
        maxWidth,
        materialJSON,
    }

}