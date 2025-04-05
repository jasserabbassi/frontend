// components/vehicles/TypeBadge.tsx
export default function TypeBadge({ type }: { type: 'mission' | 'responsable' }) {
    return (
      <span
        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
          type === 'mission'
            ? 'bg-blue-100 text-blue-800'
            : 'bg-green-100 text-green-800'
        }`}
      >
        {type.charAt(0).toUpperCase() + type.slice(1)}
      </span>
    )
  }