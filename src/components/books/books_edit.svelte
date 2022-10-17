<script>
    import axios from "axios"
    import { BASEURLWEB } from "../../assets/apiRutas"
    import { navigate } from "svelte-routing"
    import {bookEdit} from "../../assets/store"

    let formBook = {
        id: $bookEdit.book_id,
        name: $bookEdit.book_name,
        year: $bookEdit.book_year,
        id_author: $bookEdit.book_id_author,
        id_editorial: $bookEdit.book_id_editorial,
    }



    const editarEditorial = async () => {
        console.log(formBook);
        try {
            const response = await axios.put(
                BASEURLWEB + "/books",
                formBook
            );
            if (response.status == 200) {
                navigate("/books");
            }
        } catch (e) {
            console.error(e.response);
            window.alert(e.response.data.message)    
        }
    };
</script>

<main>
    <div class="fluid">
        <div>
            <nav class="padding-title">
                <h3>Editar libro</h3>
            </nav>
        </div>

        <div>
            <div class="field label border round">
                <input
                    type="text"
                    id="id"
                    bind:value={formBook.id}
                />
                <label for="id"> ID </label>
            </div>
            <div class="field label border round">
                <input
                    type="text"
                    id="name"
                    bind:value={formBook.name}
                />
                <label for="name">Nombre</label>
            </div>

            <div class="field label border round">
                <input
                    type="text"
                    id="year"
                    bind:value={formBook.year}
                />
                <label for="year">País</label>
            </div>
            <div class="field label border round">
                <input
                    type="text"
                    id="author"
                    bind:value={formBook.id_author}
                />
                <label for="author">Autor</label>
            </div>
            <div class="field label border round">
                <input
                    type="text"
                    id="editorial"
                    bind:value={formBook.id_editorial}
                />
                <label for="editorial">Editorial</label>
            </div>
            <button on:click={editarEditorial}> Editar author </button>
        </div>
    </div>
</main>


<style>
    .padding-title {
        padding-top: 1%;
        padding-bottom: 2%;
    }
</style>
