<script>
    import axios from "axios"
    import { BASEURLWEB } from "../../assets/apiRutas";
    import {onMount} from "svelte"
    import { navigate } from "svelte-routing"
    import { authorEdit } from "../../assets/store";

    let datos = []

    const getAuthors = async() => {
        const response = await axios.get(BASEURLWEB+"/author")
        datos = response.data
        console.log(response.data)
    }

    onMount(() => {
        getAuthors()
        
    })
    const buttonNew = () => {
        navigate("/author/new")
    }

    const buttonEdit = (author) =>{
        authorEdit.set(author)
        navigate("/author/edit")
        return undefined
    }

    const buttonDelete = async (id) =>{
        try{
            const confirmation = window.confirm("¿Esta seguro de eliminar este autor?")
            if(confirmation){
                const response = await axios.delete(BASEURLWEB + "/author/" + id)
                window.alert(response.data.message)
                location.reload()
            }
        }catch (e){
            window.alert(e.response.data.message)
        }
        
    }

    const onDeleteClick = (e,id) => {
        buttonDelete(id)
        return undefined
    }
</script>

<main>
    <div class="fluid">
        <nav class="padding-titulo">
            <h3>Tabla de Autores</h3>
            <div class="max"></div>
            <button on:click={ buttonNew } class="border">
                <span class="material-symbols-outlined">person_add</span>
            </button>
        </nav>
        <table  class="border large-space">
            <thead>
                <tr>
                    <th>id</th>
                    <th>Nombres</th> 
                    <th>Apellidos</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {#if (datos.length == 0)}
                    <tr>
                        <th>Cargando</th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                {:else}
                    {#each datos as authors}
                        <tr>
                            <td>{authors.aut_id}</td>
                            <td>{authors.aut_forename}</td>
                            <td>{authors.aut_surname}</td>
                            <td>
                                <button class = "transparent square" on:click={buttonEdit(authors)}>
                                    <i class="material-symbols-outlined"> edit </i>
                                </button>
                                <button class="transparent square" on:click={onDeleteClick(event,authors.aut_id)}>
                                    <i class="material-symbols-outlined"> delete </i>
                                </button>
                            </td>
                        </tr>
                    {/each}
                {/if}
            </tbody>
        </table>
    </div>
</main>
<style>

</style>