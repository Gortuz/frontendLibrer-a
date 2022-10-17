<script>
    import axios from "axios"
    import { BASEURLWEB } from "../../assets/apiRutas";
    import {onMount} from "svelte"
    import { navigate }   from "svelte-routing"
    import { bookEdit } from "../../assets/store";

    let datos = []

    const getBooks = async() => {
        const response = await axios.get(BASEURLWEB+"/name/books")
        datos = response.data
        console.log(response.data)
    }

    onMount(() => {
        getBooks()
        
    })

    const buttonNew = () => {
        navigate("/book/new")
    }

    const buttonEdit = (book) =>{
        bookEdit.set(book)
        navigate("/book/edit")
        return undefined
    }

    const buttonDelete = async (id) =>{
        try{
            const confirmation = window.confirm("¿Esta seguro de eliminar este libro?")
            if(confirmation){
                const response = await axios.delete(BASEURLWEB + "/books/" + id)
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
            <h3>Tabla de Libros</h3>
            <div class="max"></div>
            <button on:click={ buttonNew } class="border">
                <span class="material-symbols-outlined">bookadd</span>
            </button>
        </nav>
        <table  class="border large-space">
            <thead>
                <tr>
                    <th>id</th>
                    <th>Nombre</th> 
                    <th>Año</th>
                    <th>Autor</th>
                    <th>Editorial</th>
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
                    {#each datos as books}
                        <tr>
                            <td>{books.book_id}</td>
                            <td>{books.book_name}</td>
                            <td>{books.book_year}</td>
                            <td>{books.concant}</td>
                            <td>{books.edi_name}</td>
                            <td>
                                <button class = "transparent square" on:click={buttonEdit(books)}>
                                    <i class="material-symbols-outlined"> edit </i>
                                </button>
                                <button class="transparent square" on:click={onDeleteClick(event,books.book_id)}>
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