import { motion } from 'framer-motion';
import { CheckCircleIcon, TrashIcon } from '@heroicons/react/24/outline';

export default function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <motion.li
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm mb-2 group"
    >
      <div className="flex items-center gap-3">
        <button
          onClick={() => onToggle(todo.id)}
          className={`w-6 h-6 rounded-full border-2 flex items-center justify-center
            ${todo.completed ? 'border-green-500 bg-green-500' : 'border-gray-300'}`}
        >
          {todo.completed && <CheckCircleIcon className="w-5 h-5 text-white" />}
        </button>
        <span className={`${todo.completed ? 'line-through text-gray-400' : 'text-gray-700'}`}>
          {todo.text}
        </span>
      </div>
      <button
        onClick={() => onDelete(todo.id)}
        className="opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <TrashIcon className="w-5 h-5 text-red-500 hover:text-red-600" />
      </button>
    </motion.li>
  );
}
