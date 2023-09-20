import { NAV_ITEMS,HOURS_IN_DAY,MIDNIGHT_HOUR } from '/src/constans'


export function isPageValid(page){
    return Object.keys(NAV_ITEMS).includes(page)

}

export function isTimeLineValid({hour}){
    return typeof hour ==='number' && hour>=MIDNIGHT_HOUR && hour<HOURS_IN_DAY 

}

export function validateSelectOptions(options){
        return options.every(isSelectOptionValid)
    }


function isSelectOptionValid({value,label}){
   return typeof value=='number' && typeof label=="string"
}


export function validateTimelineItems(timelineItem){
    return timelineItem.every(isTimeLineValid)
}


export function isUndefinedOrNull(value){
    return isNull(value) || value === undefined
}

export function isNumberOrNull(value){
    return typeof isNull(value) || value==="number"
}

function isNull(value){
  return  value===null
}