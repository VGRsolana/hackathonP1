import React, { useCallback } from 'react';
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  useEdgesState,
  useNodesState,
  addEdge,
  Connection,
  Edge,
  MarkerType,
} from 'reactflow';
import 'reactflow/dist/style.css';
import '../pages/Cours.css'; // Style personnalisé

let id = 0;
const getId = () => `node_${id++}`;

const Cours = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  const onConnect = useCallback(
    (params: Edge | Connection) =>
      setEdges((eds) =>
        addEdge(
          {
            ...params,
            type: 'default',
            markerEnd: { type: MarkerType.ArrowClosed },
          },
          eds
        )
      ),
    [setEdges]
  );

  const addBlock = (type: string) => {
    const blockText = {
      note: '📝 Note',
      idea: '💡 Idée',
      question: '❓ Question',
    }[type];

    setNodes((nds) => [
      ...nds,
      {
        id: getId(),
        data: { label: blockText || 'Bloc' },
        position: { x: Math.random() * 400 + 200, y: Math.random() * 400 + 100 },
      },
    ]);
  };

  return (
    <div className="app-block-container">
      <aside className="sidebar">
        <h2>📚 Blocs</h2>
        <button onClick={() => addBlock('note')}>➕ Note</button>
        <button onClick={() => addBlock('idea')}>➕ Idée</button>
        <button onClick={() => addBlock('question')}>➕ Question</button>
      </aside>

      <div className="flow-area">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onConnect={onConnect}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          fitView
        >
          <MiniMap />
          <Controls />
          <Background />
        </ReactFlow>
      </div>
    </div>
  );
};

export default Cours;