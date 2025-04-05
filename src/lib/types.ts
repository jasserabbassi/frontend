// src/lib/types.ts
export interface User {
  id: string
  email: string
  name: string
  role: 'admin' | 'manager' | 'driver'
}

export interface AuthResponse {
  token: string
  user: User
}