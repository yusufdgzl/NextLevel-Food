
export default async function getMeals(){
    const response = await fetch('/api/meals');

    if(!response.ok){
        throw new Error('An error occur during getMeals function')
    }

    return response.json();
}