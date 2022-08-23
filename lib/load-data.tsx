import Compensation from "../models/compensation"


export async function loadData(params: any | void) {
    // Call an external API endpoint to get posts
    if (params === '') {
        const res = await Compensation.find({ approved: true }).populate("company")
        return JSON.parse(JSON.stringify(res))
    } else {
        const res = await Compensation.find({ department_lower_case: params, approved: true }).populate("company");
        return JSON.parse(JSON.stringify(res))
    }
}

export async function loadDepartmentData() {
    const res = await Compensation.find({ approved: true })

    const response = await res.map(data => {
        return { params: { country: 'france', department: data.department_lower_case } }
    })

    return response
}