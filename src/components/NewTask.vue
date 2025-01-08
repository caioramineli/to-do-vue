<template>
    <div class="newTask">
        <v-text-field 
            @keyup.enter="addTask" 
            v-model="inputValue" 
            label="Nova Tarefa" 
            :error="showError" 
            :error-messages="showError ? 'O campo é obrigatório.' : ''"
            placeholder="Estudar" 
            outlined 
            dense 
            required>
        </v-text-field>
        <v-btn @click="addTask" elevation="2" color="primary">
            Adicionar
        </v-btn>
    </div>
</template>

<script>
export default {
    data: () => ({
        inputValue: '',
        showError: false,
    }),
    methods: {
        addTask(e) {
            e.preventDefault();
            if (!this.inputValue.trim()) {
                this.showError = true;
                return;
            }
            this.showError = false;
            this.$emit('taskAdded', { name: this.inputValue });
            this.inputValue = '';
        },
    },
};
</script>

<style>
.newTask {
    display: flex;
    justify-content: center;
    gap: 8px;
}
</style>
