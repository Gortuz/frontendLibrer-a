<script>
    import axios from "axios"
    import { BASEURLWEB } from "../../assets/apiRutas";
    import {onMount} from "svelte"
    import { each } from "svelte/internal";
    import {navigate} from "svelte-routing"
    import { editorialEdit} from "../../assets/store"

    let datos = []

    const getEditorial = async() => {
        const response = await axios.get(BASEURLWEB+"/editorial")
        datos = response.data
        console.log(response.data)
    }

    onMount(() => {
        getEditorial()
        
    })

    const buttonNew = () => {
        navigate("/editorial/new")
    }

    const buttonEdit = (editorial) =>{
        editorialEdit.set(editorial)
        navigate("/editorial/edit")
        return undefined
    }

    const buttonDelete = async (id) =>{
        try{
            const confirmation = window.confirm("¿Esta seguro de eliminar esta editorial?")
            if(confirmation){
                const response = await axios.delete(BASEURLWEB + "/editorial/" + id)
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
            <h3>Tabla de Editoriales</h3>
            <div class="max"></div>
            <button on:click={ buttonNew } class="border">
                <span class="material-symbols-outlined">add</span>
            </button>
        </nav>
        <table  class="border large-space">
            <thead>
                <tr>
                    <th>id</th>
                    <th>Nombre</th> 
                    <th>País</th>
                    <th>Ciudad</th>
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
                    {#each datos as editorial}
                        <tr>
                            <td>{editorial.edi_id}</td>
                            <td>{editorial.edi_name}</td>
                            <td>{editorial.edi_country}</td>
                            <td>{editorial.edi_city}</td>
                            <td>
                                <button class = "transparent square" on:click={buttonEdit(editorial)}>
                                    <i class="material-symbols-outlined"> edit </i>
                                </button>
                                <button class="transparent square" on:click={onDeleteClick(event,editorial.edi_id)}>
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
