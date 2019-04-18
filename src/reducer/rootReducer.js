
export default function todosReducer(state = initialState, action) {
    switch(action.type) {
        case 'CREATE_TODO':
            return {...state, 
                todos: [...state.todos, { id: Math.random(), name: action.todo.name}]
            };
        case 'CREATE_TASK':
            return {...state, 
                tasks: [...state.tasks,{
                    id: Math.random(),
                    name: action.task.name,
                    creator: action.task.creator,
                    deadline: action.task.deadline,
                    selectedOption: action.task.selectedOption,
                    details: action.task.details,
                    taskID: action.task.taskID
                }]
            };
        default:
            return state;
    }
}

const initialState = { todos: [], filter: "", tasks: [] }