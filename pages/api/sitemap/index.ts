import type { NextApiRequest, NextApiResponse } from 'next';
import { createGzip } from 'zlib'
import { SitemapStream } from 'sitemap'
import connectDB from '../../../middleware/connectDB'
import { buildPath } from '../../../lib/slugLoad'
import { loadDepartmentData } from '../../../lib/load-data'

async function handler(req: NextApiRequest, res: NextApiResponse) {
    res.setHeader('Content-Type', 'application/xml')
    res.setHeader('Content-Encoding', 'gzip');

    const path = await buildPath();
    const pathFourVariable = await loadDepartmentData();
    const pathFrance: any = [{ params: { country: 'france' } }];

    const {
        answerDepartment,
        answerDepartmentRole,
        answerDepartmentGender,
        answerDepartmentRoles,
        answerRoleGender } = path

    const urlDepartment = answerDepartment.map((data: any) => `https://salaries.cc/salaries/france/${data.params.department}`);
    const urlDepartmentRole = answerDepartmentRole.map((data: any) => {
        return `https://salaries.cc/salaries/france/${data.params.department}/${data.params.role}`
    })
    const urlDepartmentGender = answerDepartmentGender.map((data: any) => {
        return `https://salaries.cc/salaries/france/${data.params.department}/${data.params.role}`
    })
    const urlDepartmentRoles = answerDepartmentRoles.map((data: any) => {
        return `https://salaries.cc/salaries/france/${data.params.department}/${data.params.role}`
    })
    const urlRoleGender = answerRoleGender.map((data: any) => {
        return `https://salaries.cc/salaries/france/${data.params.department}/${data.params.role}`
    })
    const urlFourVariable = pathFourVariable.map((data: any) => {
        return `https://salaries.cc/salaries/france/${data.params.department}/${data.params.role}/${data.params.gender}`
    })
    const urlFrance = `https://salaries.cc/salaries/france`

    const uniqueUrl = urlDepartment.concat(urlDepartmentRole, urlDepartmentGender, urlDepartmentRoles, urlRoleGender, urlFourVariable, urlFrance)
    const uniqueUrlArray = uniqueUrl.map((data: any) => {
        return {
            url: data,
            changefreq: 'daily',
            priority: 1
        }
    })

        const sitemapStream = new SitemapStream()
        const pipeline = sitemapStream.pipe(createGzip())

        uniqueUrlArray.forEach((url) => {
            sitemapStream.write(url)
        })

        sitemapStream.end()

        // stream write the response
        pipeline.pipe(res).on('error', (err) => {
            throw err
        })

}

export default connectDB(handler);