import data from '@/data/user.json'

export default function handler(req, res){
	if (req.method !== 'POST'){
		return res.status(405).json({ message:'Method not allowed' });
	}
	
const { name, email, password } = req.body;
	  
	  const user = data.find(
		(user) => user.name === name && user.email === email
	  );
	  
	  if(user){
		  return res.status(401).json({ message: 'Invalid credentials' })
	  }
		  const newUser = {
			  id:data.length + 1,
			  name,
			  email,
			  password
		  }
		  data.push(newUser);
	
		const UserFilePath = path.join(process.cwd(), '/data/user.json');
		fs.writeFileSync(UserFilePath, JSON.stringify(Order, null,2));
	
		return res.status(201).json({ message:'order plced'});
}
