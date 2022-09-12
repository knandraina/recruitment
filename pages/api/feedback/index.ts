// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

var Airtable = require('airtable');
var base = new Airtable({ apiKey: process.env.NEXT_PUBLIC_AIRTABLE_KEY }).base('appkuQ9Rzvw0sjelz');

async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { feedback, area } = req.body;

    if (feedback != '') {
        await base('Table 1').create({
            product_feedback: feedback,
            area
        })
    }


    res.status(200).json('done')
}

export default handler;