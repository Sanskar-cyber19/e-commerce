import Order from '@/data/toolsdata.json';
import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
	if (req.method !== 'POST'){
		return res.status(405).json({ message:'Method not allowed' });
	}
	
	const { firstName,
		lastName,
		email,
		address1,
		address2,
		state,
		pinCode,
		upi,
		cart } = req.body;
	
	const newOrder = {
		id:Order.length + 1,
		firstName,
		lastName,
		email,
		address1,
		address2,
		state,
		pinCode,
		upi,
		cart
	};
	
	Order.push(newOrder);
	
	const orderFilePath = path.join(process.cwd(), '/data/toolsdata.json');
	fs.writeFileSync(orderFilePath, JSON.stringify(
	Order, null,2));
	
	return res.status(201).json({ massage:'order plced' });
}