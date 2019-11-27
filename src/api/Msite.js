import {get,post} from './http'

export function getLinkList(params){
    let url='api/restapi/shopping/v2/entries?latitude=39.904239&longitude=116.406468&templates[]=main_template&templates[]=favourable_template&templates[]=svip_template&terminal=h5'
    return get({url,params})
}

export function login(params) { 
    let url = '/api/login';
    return post({url,params});
 }

 export function getRestaurants(params){
     let url = '/api/restapi/shopping/v3/restaurants';
     return get({url,params})
 }

 export function getRank(){
     let url = '/api/pizza/shopping/restaurants/batch_filter?latitude=39.904179&longitude=116.407387&terminal=h5'
     return get({url})
 }

 export function getDetail(params,id){
     let url = `/api/pizza/shopping/restaurants/${id}/batch_shop?user_id=6225488146&code=0.11130707480876256&extras=%5B%22activities%22%2C%22albums%22%2C%22license%22%2C%22identification%22%2C%22qualification%22%5D&terminal=h5&latitude=39.904179&longitude=116.407387`;
     
    return get({url,params})

 }


