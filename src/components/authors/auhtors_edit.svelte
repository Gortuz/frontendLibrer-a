<script>
    import axios from "axios";
    import { BASEURLWEB } from "../../assets/apiRutas";
    import { navigate } from "svelte-routing";
    import {authorEdit} from "../../assets/store"

    let formAutor = {
        id: $authorEdit.aut_id,
        forename: $authorEdit.aut_forename,
        surname: $authorEdit.aut_surname
    };


    const editarAuhtor = async () => {
        console.log(formAutor);
        try {
            const response = await axios.put(
                BASEURLWEB + "/author",
                formAutor
            );
            if (response.status == 200) {
                navigate("/authors");
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
                <h3>Editar estudiante</h3>
            </nav>
        </div>

        <div>
            <div class="field label border round">
                <input
                    type="text"
                    id="id"
                    bind:value={formAutor.id}
                    disabled
                />
                <label for="cedula"> ID </label>
            </div>
            <div class="field label border round">
                <input
                    type="text"
                    id="nombres"
                    bind:value={formAutor.forename}
                />
                <label for="nombres">Nombres</label>
            </div>

            <div class="field label border round">
                <input
                    type="text"
                    id="apellidos"
                    bind:value={formAutor.surname}
                />
                <label for="apellidos">Apellidos</label>
            </div>

            <button on:click={editarAuhtor}> Editar author </button>
        </div>
    </div>
</main>


<style>
    .padding-title {
        padding-top: 1%;
        padding-bottom: 2%;
    }
</style>
