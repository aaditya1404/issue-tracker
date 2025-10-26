"use client";
import SimpleMDE from './SimpleMDE';
import { Button, TextField } from '@radix-ui/themes';

const NewIssuePage = () => {
  return (
    <div className='max-w-xl space-y-3'>
      <TextField.Root
        placeholder='Title'
      ></TextField.Root>
      <SimpleMDE onChange={() => { }} />
      <Button>Submit New Issue</Button>
    </div>
  )
}

export default NewIssuePage
