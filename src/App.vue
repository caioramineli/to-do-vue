<template>
  <v-app>
    <div class="app">
      <h1>Tarefas</h1>
      <ProgressBar :progress="progress" />

      <NewTask @taskAdded="addTask" />

      <TaskCards :tasks="tasks" @taskDeleted="deleteTask" @taskCompleted="completeTask" />
    </div>
  </v-app>
</template>

<script>
import NewTask from './components/NewTask.vue';
import ProgressBar from './components/ProgressBar.vue';
import TaskCards from './components/TaskCards.vue';

export default {
  name: 'App',
  components: {
    NewTask, ProgressBar, TaskCards
  },
  data: () => ({
    tasks: []
  }),
  methods: {
    addTask(task) {
      const sameName = t => t.name === task.name
      const reallyNew = this.tasks.filter(sameName).length == 0
      if (reallyNew) {
        this.tasks.push({
          name: task.name,
          pending: true
        })
      }
    },
    deleteTask(taskName) {
      this.tasks = this.tasks.filter(task => task.name !== taskName);
    },
    completeTask(taskName) {
      const task = this.tasks.find(task => task.name === taskName);
      if (task) {
        task.pending = !task.pending;
      }
    },
  },
  computed: {
    progress() {
      const totalTasks = this.tasks.length;
      const pendingTasks = this.tasks.filter(task => !task.pending).length;

      return totalTasks > 0 ? (pendingTasks / totalTasks) * 100 : 0;
    }
  }
}
</script>

<style>
.app {
  display: flex;
  flex-direction: column;
  width: 90%;
  row-gap: 1rem;
  margin: 0 auto;
}

.app h1 {
  margin-top: 1rem;
  font-weight: 400;
  font-size: 2rem;
}
</style>
