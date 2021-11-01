export const setSelectValue = (label: string , value: string | number) =>  {
    return value !== '' ? 
        Object.assign({}, {label: label}, {value: value}) : 
        Object.assign({}, {label: 'Choose...'}, {value: ''})
}