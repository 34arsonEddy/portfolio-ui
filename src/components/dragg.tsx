import React, { useState } from 'react';

function DragDropExample() {
  const [items, setItems] = useState<string[]>(['Item 1', 'Item 2', 'Item 3']);
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);

  const onDragStart = (e: React.DragEvent<HTMLDivElement>, index: number) => {
    console.log("On drag Start" + index)
    setDraggedIndex(index);
    // e.dataTransfer.effectAllowed = 'move';
  };

  const onDragOver = (e: React.DragEvent<HTMLDivElement>, index: number) => {
    console.log("onDrag OVER" + index);
    e.preventDefault();
  };

  const onDrop = (e: React.DragEvent<HTML>, dropIndex: number) => {
    console.log("onDrop" + dropIndex);
    e.preventDefault();
    if (draggedIndex === null || draggedIndex === dropIndex) return;

    const newItems = [...items];
    const [draggedItem] = newItems.splice(draggedIndex, 1);
    newItems.splice(dropIndex, 0, draggedItem);
    setItems(newItems);
    setDraggedIndex(null);
  };

  return (
    <div style={{ width: 200, margin: 'auto' }}>
      {items.map((item, index) => (
        <div className='rounded-xl bg-yellow-800'
          key={item}
          draggable
          onDragStart={(e) => onDragStart(e, index)}
          onDragOver={(e) => onDragOver(e, index)}
          onDrop={(e) => onDrop(e, index)}
          style={{
            border: '1px solid gray',
            margin: '5px',
            padding: '10px',
            cursor: 'move'
          }}
        >
          {item}
        </div>
      ))}
    </div>
  );
}

export default DragDropExample;
