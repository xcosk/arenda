import { createSlice, nanoid } from 'reduxjs/toolkit'

const arr = JSON.parse(localStorage.getItem('product')) ?? {value: []}

const productSlice = createSlice({
    name: 'makson',
    initialState: arr,
    reducers: {
        reg: (s, a) => {
            if(a.payload) {
                const { name, numbers } = a.payload

                s.value.push({
                    id: nanoid(),
                    name,
                    numbers
                })
            }
        }

    }
})

export default productSlice.reducer

export const { reg } = productSlice.actions