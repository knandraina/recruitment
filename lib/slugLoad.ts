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


    // const pathFromCountryGender = await countryGenderPath(uniqueGender);
    // const pathFromCountryDepartment = await countryDepartmentPath(uniqueDepartment);
    // const pathFromCountryRole = await countryRolePath(uniqueRole);

    // const pathFromDepartmentGender = await departmentGenderPath(uniqueDepartment, uniqueGender);
    // const pathFromCountryRoleGender = await countryRoleGenderPath(uniqueRole, uniqueGender);
    // const pathFromCountryDepartmentRoleGender = await countryDepartmentRoleGenderPath(uniqueRole, uniqueGender, uniqueDepartment);
    // const pathFromCountryDepartmentRole = await countryDepartmentRolePath(uniqueRole, uniqueDepartment);

    const concatenation = resultsGender.concat(resultsDepartment, resultsRole 
        // pathFromCountryRoleGender, pathFromCountryDepartmentRoleGender, pathFromCountryDepartmentRole, pathFromDepartmentGender
        )


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

// const countryDepartmentRolePath = async (uniqueRole: any, uniqueDepartment: any) => {
//     const france_department_role = uniqueDepartment.map((area: any) => {
//         return uniqueRole.map((role: any) => {
//             return {
//                 france: 'france',
//                 department: area,
//                 role: role
//             }
//         })
//     })

//     const france_department_role_to_array = france_department_role.map((data: any, i: any, arr: any) => {
//         return data.map((items: any, j: number) => {
//             return Object.values(arr[i][j])
//         })
//     })

//     const flat_france_department_role_to_array = france_department_role_to_array.flat();

//     return flat_france_department_role_to_array
// }

// const countryDepartmentRoleGenderPath = (uniqueRole: any, uniqueGender: any, uniqueDepartment: any) => {
//     const france_department_role_gender = uniqueDepartment.map((area: any) => {
//         return uniqueRole.map((title: any) => {
//             return uniqueGender.map((gender: any) => {
//                 return {
//                     france: 'france',
//                     area,
//                     title,
//                     gender: gender.toLowerCase()
//                 }
//             })
//         })
//     })



//     const france_department_role_gender_to_array = france_department_role_gender.map((data: any, i: any, arr: any) => {
//         return data.map((items: any, j: any) => {
//             return items.map((res: any, x: any) => {
//                 return Object.values(arr[i][j][x])
//             })
//         })
//     })



//     const flat_france_department_role_sex_to_array = france_department_role_gender_to_array.flat(2);
//     return flat_france_department_role_sex_to_array
// }

// const countryRoleGenderPath = async (uniqueRole: any, uniqueGender: any) => {
//     const france_role_gender = uniqueRole.map((data: any) => {
//         return uniqueGender.map((items: any) => {
//             return { france: 'france', data, items: items.toLowerCase() }
//         })
//     })

//     const france_role_gender_to_array = france_role_gender.map((data: any, i: any, arr: any) => {
//         return data.map((items: any, j: any) => {
//             return Object.values(arr[i][j])
//         })
//     })

//     const flat_france_role_gender_to_array = france_role_gender_to_array.flat();
//     return flat_france_role_gender_to_array;
// }

// const countryRolePath = async (uniqueRole: any) => {
//     const france_role = uniqueRole.map((data: any) => {
//         return { france: 'france', data }
//     })

//     const flat_france_role_to_array = france_role.map((data: any, i: any, arr: any) => {
//         return Object.values(arr[i])
//     })

//     return flat_france_role_to_array;
// }

// const countryDepartmentPath = async (uniqueDepartment: any) => {
//     const france_department = uniqueDepartment.map((items: any) => {
//         return {
//             france: 'france',
//             items
//         }
//     })

//     const flat_country_department_to_array = france_department.map((data: any, i: any, arr: any) => {
//         return Object.values(arr[i])
//     })

//     return flat_country_department_to_array
// }

// const countryGenderPath = async (uniqueGender: any) => {
//     const country_gender = uniqueGender.map((items: any) => {
//         return { france: 'france', data: items.toLowerCase() }
//     })
//     const country_gender_to_array = country_gender.map((data: any, i: any, arr: any) => {
//         return Object.values(arr[i])

//     })

//     return country_gender_to_array
// }



// const departmentGenderPath = async (uniqueDepartment: any, uniqueGender: any) => {
//     const department_gender = uniqueDepartment.map((items: any) => {
//         return uniqueGender.map((data: any) => {
//             return { france: 'france', items, data: data.toLowerCase() }
//         })
//     })

//     const department_gender_to_array = department_gender.map((data: any, i: any, arr: any) => {
//         return data.map((items: any, j: any) => {
//             return Object.values(arr[i][j])
//         })
//     })

//     const flat_department_sex_to_array = department_gender_to_array.flat();
//     return flat_department_sex_to_array
// }