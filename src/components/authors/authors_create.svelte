<script>
    import axios from "axios"
    import { BASEURLWEB } from "../../assets/apiRutas";
    import { navigate } from "svelte-routing"

    let formAutor = {
        forename: "",
        surname: "",
    }

    const errorToast = document.getElementById("errorToast")

    const crearAutor = async () => {
        console.log(formAutor)
        try {
            const response = await axios.post(BASEURLWEB+"/author",formAutor)
            if (response.status == 201) {
                navigate("/authors")
            }
        } catch (er) {
            console.log(er.response)
            //window.alert(er.response.data.message)
            document.createElement("toast")
            let toast = document.getElementsByTagName("toast")
        }
    }

</script>

<main>
    <div class="fluid">
        <nav class="padding-titulo">
            <h3>Nuevo autor</h3>
        </nav>
        <div id="errorToast">

        </div>
        <div>
            <div class="field label border">
                <input type="text" id="forename" bind:value={formAutor.forename}>
                <label for="forename">Nombres</label>
            </div>
            <div class="field label border">
                <input type="text" id="surname" bind:value={formAutor.surname}>
                <label for="surname">Apellidos</label>
            </div>
            <button on:click={crearAutor}>Añadir autor</button>
        </div>
    </div>
</main>
<style>

</style>