import {GET_DATA} from '../constant/actionType';

export const getData = (data:any) => {
    return {
        type:GET_DATA,
        payload:data
    }
}

export default {
    getData
}