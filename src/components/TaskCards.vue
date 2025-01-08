<template>
  <div class="containerTasks">
    <v-card v-for="task in tasks" :key="task.name" :class="stateClass(task)" width="350"
      @click="completeTask(task.name)">
      <v-card-title>
        <span class="headline">Tarefa</span>
      </v-card-title>

      <v-card-subtitle>
        <span id="description" :class="{ scratch: !task.pending }">
          {{ task.name }}
        </span>
      </v-card-subtitle>

      <v-card-actions>
        <v-btn color="red" @click="deleteTask(task.name)">Excluir</v-btn>
      </v-card-actions>
    </v-card>

    <div v-if="tasks.length === 0">
      <p>Nenhuma tarefa encontrada!</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tasks: { type: Array, required: true }
  },
  methods: {
    deleteTask(task) {
      this.$emit('taskDeleted', task)
    },
    completeTask(task) {
      this.$emit('taskCompleted', task)
    },
    stateClass(task) {
      return task.pending ? 'pending' : 'done';
    }
  }
} 
</script>

<style>
.containerTasks {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.done {
  transition: 0.3s !important;
  background-color: rgb(247, 151, 151) !important;
}

.scratch {
  transition: 0.3s !important;
  text-decoration: line-through;
}

#description {
  font-size: 1rem;
}
</style>