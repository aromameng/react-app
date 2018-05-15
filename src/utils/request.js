import axios from 'axios'

const parse = (url,data)=>{
	if(!data) return url;
	if(typeof data === 'object'){
		Object.keys(data).forEach((obj,index)=>{
			if(url.indexOf('?')===-1){
				url += `?${obj}=${data[obj]}`;
			}else{
				url += `&${obj}=${data[obj]}`;
			}
		})
	}
	return url;
}

/**
 * [request_get 封装get请求]
 * @param  {[string]} url [请求地址]
 * @return {[object]}     [promise]
 */
export function request_get(url,data) {
	var newUrl = parse(url,data);
	return axios.get(newUrl).then((res) => {
			if(res.data.code===1){
				return Promise.reject(res.data.msg);
			}
			return Promise.resolve(res.data.data)
		})
}

/**
 * [request_post 封装post请求]
 * @param  {[string]} url  [请求地址]
 * @param  {[object]} data [数据]
 * @return {[object]}      [promise]
 */
export function request_post(url, data) {
	return axios.post(url, data)
		.then((res) => {
			if(res.data.code===1 || res.data.status.code === 1){
				return Promise.reject(res.data.msg);
			}
			return Promise.resolve(res.data.data)
		})
}

/**
 * [request_put 封装put请求]
 * @param  {[string]} url  [请求地址]
 * @return {[object]}      [promise]
 */
export function request_put(url,data={}) {
	return axios.put(url,data)
		.then((res) => {
			if(res.data.code===1){
				return Promise.reject(res.data.msg);
			}
			return Promise.resolve(res.data.data)
		})
}

/**
 * [request_delete 封装delete请求]
 * @param  {[string]} url  [请求地址]
 * @return {[object]}      [promise]
 */
export function request_delete(url) {
	return axios.delete(url)
		.then((res) => {
			if(res.data.code===1){
				return Promise.reject(res.data.msg);
			}
			return Promise.resolve(res.data.data)
		})
}
