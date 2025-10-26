"use client";
import SimpleMDE from './SimpleMDE';
import { Button, Text, TextField } from '@radix-ui/themes';
import { useForm, Controller } from "react-hook-form";
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { createIssueSchema } from '@/app/validationSchemas';
import { z } from "zod";

type IssueForm = z.infer<typeof createIssueSchema>;

const NewIssuePage = () => {

  const router = useRouter()
  const { register, control, handleSubmit, formState: { errors } } = useForm<IssueForm>({
    resolver: zodResolver(createIssueSchema)
  });

  return (
    <form
      className='max-w-xl space-y-3'
      onSubmit={handleSubmit(async (data) => {
        try {
          await axios.post("/api/issues", data);
          router.push("/issues");
        } catch (error) {
          console.log(error);
        }
      })}
    >
      <TextField.Root
        placeholder='Title'
        {...register('title')}
      ></TextField.Root>
      {errors.title && <Text color="red">{errors.title.message}</Text>}
      <Controller
        name='description'
        control={control}
        render={({ field }) => <SimpleMDE {...field} />}
      />
      {errors.description && <Text color="red">{errors.description.message}</Text>}
      <Button>Submit New Issue</Button>
    </form>
  )
}

export default NewIssuePage
