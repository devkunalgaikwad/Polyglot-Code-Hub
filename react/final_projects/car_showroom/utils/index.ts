export async function fetchCars() {
    const headers={
        'X-RapidAPI-Key': 'ef7dcc8a17msh00983ca5a2cafadp1231ccjsn9baad106b619',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }
    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=bmw',{
        headers:headers
    })
    const result = await response.json();
    return result;
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
    return (city_mpg*2.35214584).toFixed(2)
}