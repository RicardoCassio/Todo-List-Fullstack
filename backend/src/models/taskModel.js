const conn = require('./connection');

const getAll = async () => {
    const [tasks] = await conn.execute('SELECT * FROM tasks');
    return tasks;
};

const createTask = async (task) => {
    const { title, description, user_id } = task;

    const query = 'INSERT INTO tasks (title, description, user_id) VALUES (?, ?, ?)';

    const [createdTask] = await conn.execute(query, [title, description, user_id]);

    return {insertID: createdTask.insertID};
}; 

const deleteTask = async (id) => {
    const removedTask = await conn.execute('DELETE FROM tasks WHERE id = ?', [id]);
    return removedTask;
};

const updateTask = async (id, task) => {
    const { title, description, user_id } = task;

    const query = 'UPDATE tasks SET title = ?, description = ?, user_id = ? WHERE id = ?';

    const updatedTask = await conn.execute(query, [title, description, user_id, id]);
    return updatedTask;
};

module.exports = {
    getAll,
    createTask,
    deleteTask,
    updateTask
}