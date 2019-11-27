import {get,post} from './http'

export function getTopList (params){
    //restapi/member/v1/discover?platform=1&block_index=0&latitude=39.904179&longitude=116.407387
    let url = '/api/restapi/member/v1/discover'
    return get({url,params})
}

//restapi/shopping/v1/find/recommendation?latitude=39.904179&longitude=116.407387&offset=0&limit=6&user_id=6225488146
export function getSuppose(params){
    let url = '/api/restapi/shopping/v1/find/recommendation'
    return get({url,params})
}

//https://h5.ele.me/restapi/member/gifts/suggest
export function getLimTime(){
    let url = '/api/restapi/member/gifts/suggest'
    return get({url})
}

