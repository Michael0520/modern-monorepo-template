import { Button } from '@repo/shared/components/button';
import { formatDate } from '@repo/shared/lib/utils';
import type { User } from '@repo/shared/types';
import { useState } from 'react';

const demoUser: User = {
  createdAt: new Date(),
  email: 'jane@example.com',
  id: '1',
  name: 'Jane Doe',
};

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-8 p-8">
      <h1 className="text-4xl font-bold">Modern Monorepo Template</h1>
      <p className="text-muted-foreground">React + Vite + Tailwind CSS v4 + shadcn/ui + Elysia</p>
      <div className="flex flex-col items-center gap-4 rounded-lg border p-6">
        <p className="text-lg">
          Welcome, <span className="font-semibold">{demoUser.name}</span>
        </p>
        <p className="text-muted-foreground text-sm">Joined {formatDate(demoUser.createdAt)}</p>
        <div className="flex gap-2">
          <Button onClick={() => setCount((c) => c + 1)}>Count: {count}</Button>
          <Button onClick={() => setCount(0)} variant="outline">
            Reset
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
