<script>
    import axios from "axios"
    import { BASEURLWEB } from "../../assets/apiRutas";
    import { navigate } from "svelte-routing"

    let formEditorial = {
        name: "",
        country: "",
        city:""
    }

    const errorToast = document.getElementById("errorToast")

    const crearEditorial = async () => {
        console.log(formEditorial)
        try {
            const response = await axios.post(BASEURLWEB+"/editorial",formEditorial)
            if (response.status == 201) {
                navigate("/editorials")
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
            <h3>Nueva Editorial</h3>
        </nav>
        <div id="errorToast">

        </div>
        <div>
            <div class="field label border">
                <input type="text" id="forename" bind:value={formEditorial.name}>
                <label for="name">Nombre</label>
            </div>
            <div class="field label border">
                <input type="text" id="country" bind:value={formEditorial.country}>
                <label for="country">País</label>
            </div>
            <div class="field label border">
                <input type="text" id="city" bind:value={formEditorial.city}>
                <label for="city">Ciudad</label>
            </div>
            <button on:click={crearEditorial}>Añadir editorial</button>
        </div>
    </div>
</main>
<style>

</style>