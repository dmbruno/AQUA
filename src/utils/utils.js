import  mock_data  from "../data/mock_data.json"


export const pedirDatos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(mock_data)
        }, 1000)
    })
}