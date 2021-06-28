
// const axios = require('axios');
import axios from 'axios'
const base_url = "http://127.0.0.1:3000/api"





export const addnew = async (name: string, comment: string, imageUrl: string, yumFactor: number) => {


    try {



        const result = await axios.put(
            base_url + '/cakes',
            {
                name: name,
                comment: comment,
                imageUrl: imageUrl,
                yumFactor: yumFactor
            },
            { headers: { 'Content-Type': 'application/json' } },

        )
        return result
    } catch (e) {
        // console.log(e)
        return e;
    }

}


export const deletecake = async (id: string) => {
    // console.log(email, fydaddress)

    try {


        console.log(base_url + '/cakes/' + id)
        const result = await axios.delete(
            base_url + '/cakes/' + id,
            { headers: { 'Content-Type': 'application/json' } }


        )
        return result
    } catch (e) {
        // console.log(e)
        return e;
    }

}

export default addnew;




