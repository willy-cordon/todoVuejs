<template>
    <div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">
            <div v-bind:key="todo.id" v-for="todo in todoslist">
                <TodoItem v-bind:todo="todo" v-on:delete-todo="$emit('delete-todo', todo.id)" />
            </div>
        </li>
       
    </ul>
      
    </div>
</template>

<script>
import TodoItem from './TodoItem';

    export default {
        name: 'Todos',
        props: ['todoslist'],
        components:{TodoItem}
    }
</script>

<style></style>