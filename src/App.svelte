<script>
  import {Router, Route, navigate } from "svelte-routing"
  import Inicio from "./components/inicio/inicio.svelte";
  import BooksVista from "./components/books/books_vista.svelte";
  import BooksCreate from "./components/books/books_create.svelte";
  import BooksEdit from "./components/books/books_edit.svelte";
  import EditorialsVista from "./components/editorials/editorials_vista.svelte";
  import EditorialsCreate from "./components/editorials/editorials_create.svelte";
  import EditorialsEdit from "./components/editorials/editorials_edit.svelte";
  import AuthorsVista from "./components/authors/authors_vista.svelte";
  import AuthorsCreate from "./components/authors/authors_create.svelte";
  import AuhtorsEdit from "./components/authors/auhtors_edit.svelte";
</script>

<main>
  <Router>
    <Route exact path='/editorials'><EditorialsVista /></Route>
    <Route exact path='/editorial/new'><EditorialsCreate /></Route>
    <Route exact path='/editorial/edit'><EditorialsEdit /></Route>
    <Route exact path='/books'><BooksVista /></Route>
    <Route exact path='/book/new'><BooksCreate /></Route>
    <Route exact path='/book/edit'><BooksEdit /></Route>
    <Route exact path='/authors'><AuthorsVista /></Route>
    <Route exact path='/author/new'><AuthorsCreate /></Route>
    <Route exact path='/author/edit'><AuhtorsEdit /></Route>
    <Route exact path='/'><Inicio /></Route>
  </Router>
</main>

<style>

</style>
