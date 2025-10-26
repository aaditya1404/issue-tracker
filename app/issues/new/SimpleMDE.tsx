// app/issues/new/SimpleMDE.tsx
'use client';

import dynamic from 'next/dynamic';
import 'easymde/dist/easymde.min.css';
import { SimpleMDEEditorProps } from 'react-simplemde-editor';
import { JSX } from 'react/jsx-runtime';

// Dynamically import react-simplemde-editor with ssr disabled
const SimpleMdeEditor = dynamic(
  () => import('react-simplemde-editor'),
  { ssr: false }
);

const SimpleMDE = (props: JSX.IntrinsicAttributes & SimpleMDEEditorProps) => {
  return <SimpleMdeEditor {...props} />;
};

export default SimpleMDE;
