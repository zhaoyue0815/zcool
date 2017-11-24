import Mock from 'mockjs'
import apiData from './mockData.json'   // 分类 主页
import apiPlace from './allplace.json'   // 地区，已经不用
/*import apiMain from './mainData.json'     // 主页*/

Mock.mock('/api/category', {code: 0, data: apiData.category})
Mock.mock('/api/brands', {code: 0, data: apiData.brands})
Mock.mock('/api/place', {code: 0, data: apiPlace.place})

/* 主页main的数据 */
Mock.mock('/api/main', {code:0, data: apiData.main})
