import * as actionTypes from './actionTypes'
// // const { fromJS } = require('immutable')
export const getNewsList = ()=>({
    type:actionTypes.GETNEWSLIST,
})
export const setNewsList = (data)=>({
    type:actionTypes.SETNEWSLIST,
    data:data
})
export const getVideosList = ()=>({
    type:actionTypes.GETVIDEOSLIST,
})
export const setVideosList = (data)=>({
    type:actionTypes.SETVIDEOSLIST,
    data:data
})