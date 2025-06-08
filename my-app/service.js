export const getData = async (url) => {
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || '';
    try{
        const res = await fetch(`${baseUrl}${url}`, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
            }
        })
        if(res.ok){
            const data = await res.json();
            return data;
        }
        throw new Error(`HTTP error! status: ${res.status}`);
    }
    catch (error){
        console.error('Error fetching data:', error);
        throw error;
    }
}