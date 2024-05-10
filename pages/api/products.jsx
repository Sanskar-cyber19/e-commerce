import data from '@/data/db.json'

export default async function handler(req,res){
	if(req.method !== 'GET'){
		return res.status(401).json({massage:"method error"})
	}else{
		return res.status(200).json(data);
	}
}