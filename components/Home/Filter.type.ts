import { ParamsType } from "../../hooks/useCurrencies"

type FilterType = {
    getActiveType : (value:number) => void
    activeType : number
    fetchSearchData : (params : ParamsType) => void
    applySort: (params : ParamsType) => void
}


export default FilterType;