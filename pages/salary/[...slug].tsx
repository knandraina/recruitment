import { GetStaticPaths, GetStaticProps } from "next";

import connectionDB from "../../lib/connectionDB";
import Compensation from "../../models/compensation";


export const getStaticProps: GetStaticProps = async (context: any) => {

    return {
        props: {
            post: 'test'
        }
    }
}

export const getStaticPaths: GetStaticPaths = async () => {

    await connectionDB();
    const response = await Compensation.find({}).populate('company')
    const uniqueDepartment = response.map(item => item.department_lower_case)
    .filter((value, index, self) => self.indexOf(value) === index)
    console.log(uniqueDepartment);
    const uniqueGender = response.map(item => item.gender)
    .filter((value, index, self) => self.indexOf(value) === index)
    const uniqueRole = response.map(item => item.category_role)
    .filter((value, index, self) => self.indexOf(value) === index)

    const department_gender = uniqueDepartment.map(items => {
        return uniqueGender.map(data => {
          return { france: 'france', items, data: data.toLowerCase() }
        })
      })
      
      const department_gender_to_array = department_gender.map((data, i, arr) => {
        return data.map((items, j) => {
          return Object.values(arr[i][j])
        })
      })
      
      const flat_department_sex_to_array = department_gender_to_array.flat();
      
      const country_gender = uniqueGender.map(items => {
        return {france: 'france', data: items.toLowerCase()}
        })
      const country_gender_to_array = country_gender.map((data, i, arr) => {
        return Object.values(arr[i])
        
      })
      
      const france_department = uniqueDepartment.map(items => {
        return {
          france: 'france',
          items
        }
      })

      const flat_country_department_to_array = france_department.map((data, i, arr) =>{
        return Object.values(arr[i])
      })
      
      const france_role = uniqueRole.map( data => {
        return {france: 'france', data}
      })
      
      const flat_france_role_to_array = france_role.map((data,i,arr) => {
        return Object.values(arr[i])
      })
      
      
      const france_role_gender = uniqueRole.map( data => {
        return uniqueGender.map(items => {
          return {france: 'france', data, items: items.toLowerCase() }
        })
      })
      
      const france_role_gender_to_array = france_role_gender.map((data,i,arr) => {
        return data.map((items,j ) => {
          return Object.values(arr[i][j])
        })
      })
      
      const flat_france_role_gender_to_array = france_role_gender_to_array.flat();
      
      
      const france_department_role_gender = uniqueDepartment.map( area => {
        return uniqueRole.map( title => {
          return uniqueGender.map( gender => {
            return {
              france:'france',
              area,
              title,
              gender:gender.toLowerCase()
            }
          })
        })
      })
      
      
      
      const france_department_role_gender_to_array = france_department_role_gender.map((data, i, arr) => {
        return data.map((items, j) => {
          return items.map((res,x) => {
            return Object.values(arr[i][j][x])
          })
        })
      })
      


      const flat_france_department_role_sex_to_array = france_department_role_gender_to_array.flat(2);

      const france_department_role = uniqueDepartment.map( (area) => {
        return uniqueRole.map( (role:any) => {
            return {
                france: 'france',
                department: area,
                role: role
            }
        })
      })
      
      const france_department_role_to_array = france_department_role.map((data, i, arr) => {
        return data.map(( items: any, j: number) => {
          return Object.values(arr[i][j])
        })
      })

      const flat_france_department_role_to_array = france_department_role_to_array.flat();



      const concatenation = flat_france_department_role_sex_to_array.concat(flat_country_department_to_array,flat_department_sex_to_array, flat_france_role_gender_to_array, country_gender_to_array, flat_country_department_to_array, flat_france_role_to_array, flat_france_department_role_to_array)

      const path = concatenation.map(data => {
  return {
    params: {slug: data}
  }
})
console.log(path[0].params)


    return {
        paths: path,
        fallback: false
    }
}


const AllPages = () => {



    return (
        <>
        Salaries
        </>
    )
}

export default AllPages;