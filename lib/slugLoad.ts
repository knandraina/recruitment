export const buildPath = async (response: any) => {
    const res = await findUniqueValues(response);
    const { uniqueDepartment, uniqueGender, uniqueRole } = res

    const resultsDepartment = await uniqueDepartment.map((data: any) => {
        return {
            params: {
                country: 'france',
                index: data,
            }
        }
    })

    const resultsGender = await uniqueGender.map((data: any) => {
        return {
            params: {
                country: 'france',
                index: data.toLowerCase()
            }
        }
    })

    const resultsRole = await uniqueRole.map((data: any) => {
        return {
            params: {
                country: 'france',
                index: data,
            }
        }
    })


    const concatenation = resultsGender.concat(resultsDepartment, resultsRole  )


    return concatenation
}

export const findUniqueValues = async (response: any) => {

    const uniqueDepartment = response.map((item: any) => item.department_lower_case)
        .filter((value: any, index: any, self: any) => self.indexOf(value) === index)

    const uniqueGender = response.map((item: any) => item.gender)
        .filter((value: any, index: any, self: any) => self.indexOf(value) === index)

    const uniqueRole = response.map((item: any) => item.category_role)
        .filter((value: any, index: any, self: any) => self.indexOf(value) === index)

    return {
        uniqueDepartment,
        uniqueGender,
        uniqueRole
    }
}

