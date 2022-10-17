<script>
  import {navigate} from "svelte-routing"

  const navegacionAuhtors = () =>{
      navigate("/authors")
  }

  const navegacionBooks = () => {
      navigate("/books")
  }
  const navegacionEditorials = () => {
      navigate("/editorials")
  }
</script>

<main>
  <div class="fluid">
      <h2>Librería JS</h2>
      <div class="row">
          <div>
              <button on:click={navegacionAuhtors}>
                  <h3>Autores</h3>
              </button>
          </div>
          <div>
              <button on:click={navegacionBooks}>
                  <h3>Libros</h3>
              </button>
          </div>
          <div>
            <button on:click={navegacionEditorials}>
                <h3>Editoriales</h3>
            </button>
        </div>
      </div>
  </div>
</main>

<style>

</style>