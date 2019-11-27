import {get,post} from './http'
//https://h5.ele.me/restapi/swarm/v2/hot_search_words?latitude=39.904179&longitude=116.407387

export function hotSearchWords(params){
    let url = '/api/restapi/swarm/v2/hot_search_words'
    return get({url,params})
}

//https://h5.ele.me/restapi/shopping/v1/typeahead?kw=鱼%&latitude=39.904179&longitude=116.407387&city_id=3
export function getSearchlist(params){
    let url = '/api/restapi/shopping/v1/typeahead'
    return get({url,params})
}

//https://h5.ele.me/restapi/shopping/v2/restaurants/search
export function getRestaurants(params){
    let url = '/api/restapi/shopping/v2/restaurants/search'
    return get({url,params})
}