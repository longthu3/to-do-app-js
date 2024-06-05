class Task {

    static currentId = 0;

    constructor(label, isDone = false, isEdit = false) {
        this.id = Task.incrementId();
        this.label = label;
        this.isDone = isDone;
        this.isEdit = isEdit;
    }

    toggleComplete() {
        this.isDone = !this.isDone;
    }

    setEdit() {
        this.isEdit = !this.isEdit;
    }

    setLabel(label) {
        this.label = label;
    }

    static incrementId() {
        return ++Task.currentId; // Increment and return the current ID
    }

    getTaskHtml() {
        if (this.isEdit) {
            return `
            <div style="display: flex;">
                <input type="text" placeholder="Update task" value=${this.label} class="input-custom" data-id=${this.id}>
                <button onclick="handleEdit(${this.id})" id="btn-add-task">Add Task</button>
            </div>`;
        }
        return `
            <div class="task">
                <div class="task-content">
                    <span onClick="setStatus(${this.id})" class="${this.isDone ? 'task-done' : ''}">
                        ${this.label}
                    </span>
                    <div style="display: flex; gap: 10px;">
                        <i onClick="setEdit(${this.id})" class="fa-solid fa-pen-to-square"></i>
                        <i onClick="deleteTask(${this.id})" class="fa-solid fa-trash" onClick="removeTask(${this.id})"></i>
                    </div>
                </div>
            </div>`;
    }
}

export default Task;