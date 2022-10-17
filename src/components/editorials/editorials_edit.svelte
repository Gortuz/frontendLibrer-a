<script>
    import axios from "axios";
    import { BASEURLWEB } from "../../assets/apiRutas";
    import { navigate } from "svelte-routing";
    import {editorialEdit} from "../../assets/store"

    let formEditorial = {
        id: $editorialEdit.edi_id,
        name: $editorialEdit.edi_name,
        id_country: $editorialEdit.edi_country,
        id_city: $editorialEdit.edi_city
    };


    const editarEditorial = async () => {
        console.log(formEditorial);
        try {
            const response = await axios.put(
                BASEURLWEB + "/editorial",
                formEditorial
            );
            if (response.status == 200) {
                navigate("/editorials");
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
                <h3>Editar editorial</h3>
            </nav>
        </div>

        <div>
            <div class="field label border round">
                <input
                    type="text"
                    id="id"
                    bind:value={formEditorial.id}
                    disabled
                />
                <label for="id"> ID </label>
            </div>
            <div class="field label border round">
                <input
                    type="text"
                    id="nombre"
                    bind:value={formEditorial.name}
                />
                <label for="nombre">Nombre</label>
            </div>

            <div class="field label border round">
                <input
                    type="text"
                    id="country"
                    bind:value={formEditorial.country}
                />
                <label for="country">País</label>
            </div>
            <div class="field label border round">
                <input
                    type="text"
                    id="city"
                    bind:value={formEditorial.city}
                />
                <label for="city">Ciudad</label>
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
