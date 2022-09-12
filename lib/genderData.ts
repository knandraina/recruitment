import Compensation from "../models/compensation"


export const genderData = async () => {
    const responseFemale = await Compensation.find({ gender: 'female' }).populate('company');
    const responseMale = await Compensation.find({ gender: 'male' }).populate('company');

    return {
        responseFemale: JSON.parse(JSON.stringify(responseFemale)),
        responseMale: JSON.parse(JSON.stringify(responseMale)),
    }
}