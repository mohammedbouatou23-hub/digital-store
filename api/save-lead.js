import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const filePath = path.join('/tmp', 'leads.json');

  if (req.method === 'POST') {
    const { phone, date } = req.body;
    
    let leads = [];
    if (fs.existsSync(filePath)) {
      leads = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    }
    
    leads.push({ phone, date });
    fs.writeFileSync(filePath, JSON.stringify(leads));
    
    console.log('Lead جديد من DIGITAL MAROC:', phone);
    return res.status(200).json({ ok: true });
  }

  if (req.method === 'GET') {
    let leads = [];
    if (fs.existsSync(filePath)) {
      leads = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    }
    return res.status(200).json(leads);
  }
}
