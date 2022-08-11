
import { getUser } from './api/apiBasicAuth.js'
import { CancelToken } from 'apisauce'
import apiCat from './api/apiCategory.js'
import apiItem from './api/apiItem.js'


const token = '3Gjn7RNb010RDlrMc55PMkwfqyg0sU3KvMX27dBm78g'
const source = CancelToken.source()
// source.token returns the cancel token

const login = async (cancelToken)=>{
    const {user, error} = await getUser('kevinb@codingtemple.com', '123', cancelToken )
    console.log(error?error:"It works")
    console.log(user)

}

// login(source.token)


const cat_get = async (cancelToken) =>{
    const {error, categories} = await apiCat.get(cancelToken)
    console.log(error?error:"It works")
    console.log(categories)
}

const cat_post = async (cancelToken) =>{
    const {error} = await apiCat.post(token,'Gummy',cancelToken)
    console.log(error?error:"It works")
}

const cat_put = async (cancelToken) =>{
    const {error} = await apiCat.put(token,2,'No Gio',cancelToken)
    console.log(error?error:"It works")
}

const cat_del = async (cancelToken) =>{
    const {error} = await apiCat.del(token, 2, cancelToken)
    console.log(error?error:"It works")
}

// cat_get(source.token)
// cat_post(source.token)
// cat_put(source.token)
// cat_del(source.token)


const item_get = async (cancelToken) =>{
    const {error, items} = await apiItem.get(cancelToken)
    console.log(error?error:"It works")
    console.log(items)
}

const item_get_by_id = async (cancelToken) =>{
    const {error, item} = await apiItem.getItem(3, cancelToken)
    console.log(error?error:"It works")
    console.log(item)
}
const item_get_by_cat_id = async (cancelToken) =>{
    const {error, items} = await apiItem.getByCat(3, cancelToken)
    console.log(error?error:"It works")
    console.log(items)
}
const item_post = async (cancelToken) =>{
    const newItem={
        "name" : "gfhg",
        "desc" : "zbzvcbxcvb",
        "img": "https://m.media-amazon.com/images/I/812egwRC2RL._SL1500_.jpg",
        "price": 99.99,
        "category_id":5
    }
    const {error} = await apiItem.post(token, newItem ,cancelToken)
    console.log(error?error:"It works")
}
const item_put = async (cancelToken) =>{
    const newItem={
        "name" : "JellyBelly Harry Potter jelly slugs candy",
        "desc" : "Ron's favourite food. Eat slugs!",
        "img": "https://m.media-amazon.com/images/I/812egwRC2RL._SL1500_.jpg",
        "price": 99.99,
        "category_id":5
    }
    const {error} = await apiItem.put(token,5,newItem,cancelToken)
    console.log(error?error:"It works")
}
const item_delete = async (cancelToken) =>{
    const {error} = await apiItem.del(token, 6, cancelToken)
    console.log(error?error:"It works")
}

// item_get(source.token)
// item_get_by_id(source.token)
// item_get_by_cat_id(source.token)
// item_post(source.token)
// item_put(source.token)
// item_delete(source.token)