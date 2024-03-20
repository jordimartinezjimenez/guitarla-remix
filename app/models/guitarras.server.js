export async function getGuitarras() {
    const res = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`)
    return await res.json()
}