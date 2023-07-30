import { CarProps, FilterProps } from "@/types";

export async function fetchCars(filters:FilterProps) {
    const {manufacturer,year, model, limit, fuel} = filters
    const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'ef7dcc8a17msh00983ca5a2cafadp1231ccjsn9baad106b619',
          'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
        }
      };
    try{
        const response = await fetch(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`,
    options);
    const result = await response.json();
    return result;
    } catch(err){
        console.log(err)
    }
}
export const calculateCarRent = (cit_mpg:number,year:number)=>{
    const basePricePerDay = 50;
    const mileageFactor = 0.2;
    const ageFactor = 0.05;
    const mileageRate = cit_mpg*mileageFactor;
    const ageRate = (new Date().getFullYear()-year)*ageFactor;
    const rentalRatePerDay = basePricePerDay + mileageRate*ageRate;
    return rentalRatePerDay.toFixed(0);
}

export const mpgToKmpl=(city_mpg:number)=>{
    return (city_mpg*1.609344).toFixed(2)
}

export const generateCarImageUrl = (car:CarProps,angle?:string)=>{
    const url = new URL('https://cdn.imagin.studio/getimage')
    const {make,year,model} = car;
    url.searchParams.append('customer','hrjavascript-mastery');
    url.searchParams.append('make',make);
    url.searchParams.append('modelFamily',model.split(' ')[0]);
    url.searchParams.append('zoomType','fullscreen');
    url.searchParams.append('modelYear',`${year}`);
    url.searchParams.append('angle',`${angle}`);

    return `${url}`
}

export const updateSearchParams = (type:string, value:string)=>{
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set(type,value)
    const newPathName = `${window.location.pathname}?${searchParams.toString()}`
    return newPathName
}
