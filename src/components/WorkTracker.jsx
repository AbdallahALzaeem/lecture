import { useRef, useState } from 'react'
import { CheckCircle2, Circle, Clock3, Trash2 } from 'lucide-react'

const STORAGE_KEY = 'zaeem-work-tracker-v1'
const TASK_STATUSES = ['todo', 'in-progress', 'done']

const statusLabels = {
  todo: 'To do',
  'in-progress': 'In progress',
  done: 'Done',
}

const isStoredTask = (task) =>
  task !== null &&
  typeof task === 'object' &&
  typeof task.id === 'string' &&
  typeof task.title === 'string' &&
  task.title.trim().length > 0 &&
  task.title.length <= 120 &&
  TASK_STATUSES.includes(task.status)

const readStoredTasks = () => {
  try {
    const storedTasks = window.localStorage.getItem(STORAGE_KEY)
    if (storedTasks === null) return { tasks: [], error: '' }

    const tasks = JSON.parse(storedTasks)
    if (!Array.isArray(tasks) || !tasks.every(isStoredTask)) {
      throw new Error('Saved task data has an invalid format.')
    }

    return { tasks, error: '' }
  } catch (error) {
    console.error('Unable to load saved work tracker tasks.', error)
    return {
      tasks: [],
      error:
        'Saved tasks could not be loaded. Existing browser data was left unchanged.',
    }
  }
}

const WorkTracker = () => {
  const [initialState] = useState(readStoredTasks)
  const [tasks, setTasks] = useState(initialState.tasks)
  const [taskTitle, setTaskTitle] = useState('')
  const [formError, setFormError] = useState('')
  const [storageError, setStorageError] = useState(initialState.error)
  const canSave = useRef(!initialState.error)

  const saveTasks = (nextTasks) => {
    setTasks(nextTasks)
    if (!canSave.current) return
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(nextTasks))
    } catch (error) {
      console.error('Unable to save work tracker tasks.', error)
      setStorageError(
        'Changes could not be saved in this browser. Keep a separate copy of your tasks.',
      )
      canSave.current = false
    }
  }

  const completedTasks = tasks.filter((task) => task.status === 'done').length
  const progress =
    tasks.length === 0 ? 0 : Math.round((completedTasks / tasks.length) * 100)

  const handleAddTask = (event) => {
    event.preventDefault()
    const title = taskTitle.trim()

    if (title.length < 2) {
      setFormError('Enter a task name with at least 2 non-space characters.')
      return
    }

    saveTasks([
      ...tasks,
      {
        id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
        title,
        status: 'todo',
      },
    ])
    setTaskTitle('')
    setFormError('')
  }

  const updateTaskStatus = (taskId, status) => {
    saveTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, status } : task,
      ),
    )
  }

  const deleteTask = (taskId) => {
    saveTasks(tasks.filter((task) => task.id !== taskId))
  }

  return (
    <section id="work-tracker" className="px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Coding workflow
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Work tracker
          </h2>
          <p className="mt-4 max-w-2xl leading-7 text-slate-400">
            Add tasks, update their status, and keep an eye on your progress.
            Tasks are saved in this browser only; don&apos;t include passwords,
            secrets, or confidential client information.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-xl shadow-black/20 sm:p-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm text-slate-400">
                {completedTasks} of {tasks.length} tasks completed
              </p>
              <p className="mt-1 text-2xl font-bold text-white">{progress}%</p>
            </div>
            <div
              className="h-3 w-full overflow-hidden rounded-full bg-slate-800 sm:max-w-sm"
              role="progressbar"
              aria-label="Task completion"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={progress}
            >
              <div
                className="h-full rounded-full bg-cyan-400 transition-all"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <form onSubmit={handleAddTask} className="mt-8">
            <label
              htmlFor="work-task-title"
              className="text-sm font-medium text-slate-200"
            >
              New coding task
            </label>
            <div className="mt-2 flex flex-col gap-3 sm:flex-row">
              <input
                id="work-task-title"
                name="taskTitle"
                type="text"
                required
                minLength={2}
                maxLength={120}
                value={taskTitle}
                onChange={(event) => {
                  setTaskTitle(event.target.value)
                  setFormError('')
                }}
                placeholder="e.g. Build the contact form"
                className="min-w-0 flex-1 rounded-lg border border-slate-700 bg-slate-950/70 px-4 py-3 text-white placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
                aria-describedby={formError ? 'task-form-error' : undefined}
              />
              <button
                type="submit"
                className="rounded-lg bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-slate-900"
              >
                Add task
              </button>
            </div>
            {formError && (
              <p
                id="task-form-error"
                className="mt-2 text-sm text-rose-300"
                role="alert"
              >
                {formError}
              </p>
            )}
          </form>

          {storageError && (
            <p className="mt-5 text-sm text-amber-300" role="alert">
              {storageError}
            </p>
          )}

          <ul className="mt-6 divide-y divide-slate-800">
            {tasks.map((task) => (
              <li
                key={task.id}
                className="flex flex-col gap-3 py-4 sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="flex min-w-0 items-center gap-3">
                  {task.status === 'done' ? (
                    <CheckCircle2
                      size={20}
                      className="shrink-0 text-emerald-400"
                      aria-hidden="true"
                    />
                  ) : task.status === 'in-progress' ? (
                    <Clock3
                      size={20}
                      className="shrink-0 text-cyan-300"
                      aria-hidden="true"
                    />
                  ) : (
                    <Circle
                      size={20}
                      className="shrink-0 text-slate-500"
                      aria-hidden="true"
                    />
                  )}
                  <span
                    className={`break-words ${
                      task.status === 'done'
                        ? 'text-slate-500 line-through'
                        : 'text-white'
                    }`}
                  >
                    {task.title}
                  </span>
                </div>

                <div className="flex items-center gap-3 pl-8 sm:pl-0">
                  <label className="sr-only" htmlFor={`task-status-${task.id}`}>
                    Status for {task.title}
                  </label>
                  <select
                    id={`task-status-${task.id}`}
                    value={task.status}
                    onChange={(event) =>
                      updateTaskStatus(task.id, event.target.value)
                    }
                    className="rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-400/40"
                  >
                    {TASK_STATUSES.map((status) => (
                      <option key={status} value={status}>
                        {statusLabels[status]}
                      </option>
                    ))}
                  </select>
                  <button
                    type="button"
                    onClick={() => deleteTask(task.id)}
                    aria-label={`Delete task: ${task.title}`}
                    className="rounded-lg p-2 text-slate-400 transition hover:bg-rose-400/10 hover:text-rose-300 focus:outline-none focus:ring-2 focus:ring-rose-300"
                  >
                    <Trash2 size={18} aria-hidden="true" />
                  </button>
                </div>
              </li>
            ))}
          </ul>

          {tasks.length === 0 && (
            <p className="mt-6 rounded-lg border border-dashed border-slate-700 px-4 py-6 text-center text-sm text-slate-400">
              No tasks yet. Add one above to get started.
            </p>
          )}
        </div>
      </div>
    </section>
  )
}

export default WorkTracker
