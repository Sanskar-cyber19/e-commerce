import data from '@/data/db.json';

export function getProduct(){
	return data;
}

export function getAllCategory(){
	const categorys = [
	{"id":1,"name":"ayur","products":"100"},
	{"id":2,"name":"ayuredge","products":"128"},
	{"id":3,"name":"real","products":"123"},
	{"id":4,"name":"food","products":"45"},
	{"id":5,"name":"cloth","products":"25"},
	{"id":6,"name":"clean","products":"10"},
	{"id":7,"name":"agri","products":"30"},
	]
	
	return categorys;
}

export function category(category){
	console.log(category)
	if (category === 'all'){
		console.log('ok');
		return data;
	}else{
		const product = data.filter(product => product.category === category);
		console.log(category);
		return product;
	}
}