

import {writable} from "svelte/store"

const authorEdit = writable({
    aut_id: "",
    aut_forename: "",
    aut_surname: ""
})
const bookEdit = writable({
    book_id:"",
    book_name: "",
    book_year: "",
    book_id_author: "",
    book_id_editorial: ""
})
const editorialEdit = writable({
    edi_id: "",
    edi_name: "",
    edi_city: "",
    edi_country: ""
})
export{authorEdit,bookEdit,editorialEdit}

