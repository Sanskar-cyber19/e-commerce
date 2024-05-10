import data from '@/data/user.json'

export default function handler(req,res){
	if(req.method !== 'POST'){
		return res.status(401).json({massage:"method error"})
	}
	const { email, password } = req.body;
	
	const user = data.find(
		(user) => user.email === email && user.password === password
	);
	
	if (user) {
    return res.status(200).json({name:user.name,email:user.email,orders:user.orders,password:user.password });
  } else {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
}
