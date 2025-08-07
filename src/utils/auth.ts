interface User {
  email: string;
  password: string;
}

export function saveUser(user: User): void {
  localStorage.setItem("user", JSON.stringify(user));
}

export function getUser(): User | null {
  const stored = localStorage.getItem("user");
  return stored ? JSON.parse(stored) : null;
}
