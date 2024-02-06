import React from 'react';

interface HelloProps {
    name: string;
    description?: string;
    label?: string;
    onSmthHappen: (name: string) => void;
}

const Hello: React.FC<HelloProps> = ({ name, description, onSmthHappen }) => {
  React.useEffect(() => {
    onSmthHappen(name);
  }, [name, onSmthHappen]);

  return (
    <div>
      <h1>Hello {name}</h1>
      <h3>{description}</h3>
      
    </div>
  );
}

export default Hello;
