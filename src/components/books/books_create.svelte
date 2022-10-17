<script>
    import axios from "axios"
    import { BASEURLWEB } from "../../assets/apiRutas";
    import {onMount} from "svelte"
    import { navigate } from "svelte-routing"

    let authorsData = []

    let editorialsData = []



    let formBook = {
        name: "",
        year: "",
        id_author: "",
        id_editorial: ""
    }


    const errorToast = document.getElementById("errorToast")

    const getAuthors = async() => {
        const response = await axios.get(BASEURLWEB+"/author")
        authorsData = response.data
        console.log(response.data)
    }

    const getEditorials = async() => {
        const response = await axios.get(BASEURLWEB+"/editorial")
        editorialsData = response.data
        console.log(response.data)
    }

    const crearBook = async () => {
        console.log(formBook)
        try {
            const response = await axios.post(BASEURLWEB+"/books",formBook)
            if (response.status == 201) {
                navigate("/books")
            }
        } catch (er) {
            console.log(er.response)
            //window.alert(er.response.data.message)
            document.createElement("toast")
            let toast = document.getElementsByTagName("toast")
        }
    }

    onMount(() => {
        getAuthors(),getEditorials()
    })

</script>

<main>
    <div class="fluid">
        <nav class="padding-titulo">
            <h3>Nuevo libro</h3>
        </nav>
        <div id="errorToast">

        </div>
        <div>
            <div class="field label border">
                <input type="text" id="name" bind:value={formBook.name}>
                <label for="name">Título</label>
            </div>
            <div class="field label border">
                <input type="number" id="year" bind:value={formBook.year}>
                <label for="year">Año</label>
            </div>
            <div class="field label suffix border">
                <select id="id_author" bind:value={formBook.id_author}>
                    {#if authorsData.length == 0}
                        <option value="">Cargando</option>
                    {:else}
                        {#each authorsData as author}
                            <option value={author.aut_id}>
                                {author.aut_forename + " " + author.aut_surname}
                            </option>
                        {/each}
                    {/if}
                </select>
                <i>arrow_drop_down</i>
                <!-- svelte-ignore a11y-label-has-associated-control -->
                <label class="active">Autores</label>
              </div>
              <div class="field label suffix border">
                <select id="id_editorial" bind:value={formBook.id_editorial}>
                    {#if editorialsData.length == 0}
                        <option value="">Cargando</option>
                    {:else}
                        {#each editorialsData as editorial}
                            <option value={editorial.edi_id}>
                                {editorial.edi_name}
                            </option>
                        {/each}
                    {/if}
                </select>
                <i>arrow_drop_down</i>
                <!-- svelte-ignore a11y-label-has-associated-control -->
                <label class="active">Editoriales</label>
              </div>
            <button on:click={crearBook}>Añadir libro</button>
        </div>
    </div>
</main>

<style>
    /*
    <div class="field label border">
                <input type="text" id="id_editorial" bind:value={formBook.id_editorial}>
                <label for="id_editorial">Editorial</label>
            </div>
    <div class="field label border">
                <input type="text" id="id_author" bind:value={formBook.id_author}>
                <label for="id_author">Autor</label>
            </div>
            */
</style>