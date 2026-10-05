let leads = []; // هنا غادي يتجمعو مؤقتا

export default function handler(req, res) {
  if(req.method === 'POST'){
    const {phone, date} = req.body;
    leads.push({phone, date});
    console.log('Lead جديد:', phone);
    // تقدر تشوفهم فـ Vercel Logs
    return res.status(200).json({ok:true});
  }
  if(req.method === 'GET'){
    return res.status(200).json(leads);
  }
}
