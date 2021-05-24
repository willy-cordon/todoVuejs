<template>
  <div >
    <div id="header">
    <!-- Navigation -->
<nav class="navbar navbar-expand-lg navbar-dark bg-dark static-top">
  <div class="container">
    <h1 class="navbar-brand pt-3" href="#" >
        <font-awesome-icon class="h1" icon="clipboard-check" />
    </h1>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
    <div class="collapse navbar-collapse" id="navbarResponsive">
      <ul class="navbar-nav ml-auto">

      </ul>
      <Search v-on:query-change="querySearch" />
    </div>
  </div>
</nav>
    </div>

    <div class="card p-3" id="main-container">
      <h2>Listado de tareas</h2>
      <TodoAdd v-on:add-todo="addTodo"/>
      <span class="text-center h5" v-if="copyTodos.length <= 0" >Sin tareas por el momento 🦾</span>
      <Todos v-else  v-bind:todoslist="copyTodos" v-on:delete-todo="deleteTodo" />
    </div>
  </div>
</template>

<script>
import Search from './components/Search';
import Todos from './components/Todos';
import TodoAdd from './components/TodoAdd';

export default {
  name: 'App',
  components: {
    Todos, TodoAdd, Search
  },
  methods: {
    deleteTodo(id){
      this.todos = this.todos.filter(todo => todo.id != id);
      this.copyTodos = [...this.todos];
    },
    addTodo(todo){
      this.todos.push(todo);
      this.copyTodos = [...this.todos];
    },
    querySearch(query){
      if(query.trim() === ''){
        this.copyTodos = [...this.todos];
      }else{
        const temp = this.todos.filter(todo =>{
          return todo.title.includes(query)
        });

        this.copyTodos = [...temp];
      }
    }
  },
  data(){
    return {
      todos: [
       
      ],
      copyTodos: []
    }
  },
  created(){
    this.copyTodos = [...this.todos];
  }
}
</script>

<style>
  *{
    box-sizing: border-box;
  }

  body{
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 1.5em;
    padding: 0;
    margin: 0;
    background-image: url('./assets/fondo.svg');
    background-repeat: no-repeat ;
    background-size: cover;
  }

  #main-container{
    border: solid 1px #ccc;
    width: 600px;
    margin: 100px auto;
  }

  #header{
    padding: 0px;
  }

  h2{
    padding: 0 10px;
  }
</style>
