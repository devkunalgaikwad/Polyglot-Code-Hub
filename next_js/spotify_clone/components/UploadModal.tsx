'use client'

import React,{useState} from 'react'
import Modal from './Modal'
import useUploadModal from '@/hooks/useUploadModal'
import { useForm, FieldValues, SubmitHandler,  } from 'react-hook-form'
import uniqid from 'uniqid'
import { Input } from './index'
import { Button } from './support_components'
import { toast } from 'react-hot-toast'
import { useUser } from '@/hooks/useUser'
import { SupabaseClient, useSupabaseClient } from '@supabase/auth-helpers-react'
import { useRouter } from 'next/navigation'

const UploadModal = () => {
    const router = useRouter()
    const uploadModal = useUploadModal()
    const {user} = useUser()
    const supabaseClient = useSupabaseClient()
    const {register, handleSubmit, reset} = useForm<FieldValues>({
        defaultValues :{
            author : '',
            title : '',
            song: null,
            image : null,
        }
    })
    const [isLoading, setIsLoading] = useState(false)
    const onChange = (open : boolean) =>{
        if (!open) {
            reset()
            uploadModal.onClose()
        }
    }

    const onSubmit: SubmitHandler<FieldValues> = async (values) => {
        try {
            setIsLoading(true)
            const imageFile = values.image?.[0]
            const songFile = values.song?.[0]
            if (!imageFile || !songFile || !user){
                toast.error('Files are not selected')
                return;
            }
            const uniqueID = uniqid()
            const {data:songData,error:songError,} = await supabaseClient.storage.from('songs').upload(`song-${values.title}-${uniqueID}`,songFile,{cacheControl:'3600',upsert:false})
            if (songError){
                setIsLoading(false)
                return toast.error('Failed to upload song')
            }
            const {data:imageData,error:imageError,} = await supabaseClient.storage.from('images').upload(`image-${values.title}-${uniqueID}`,imageFile,{cacheControl:'3600',upsert:false})
            if (imageError){
                setIsLoading(false)
                return toast.error('Failed to upload Image')
            }
            const {error:supabaseError}= await supabaseClient.from('songs').insert({
                user_id : user.id,
                title: values.title,
                author : values.author,
                image_path : imageData.path,
                song_path : songData.path
            });
            if (supabaseError){
                setIsLoading(false)
                return toast.error(`Supabase error : ${supabaseError.message}`)
            }
            router.refresh()
            setIsLoading(false)
            toast.success('Song is uploaded')
            reset()
            uploadModal.onClose()
        } catch (error) {
            toast.error('Something went wrong')
        } finally{
            setIsLoading(false)
        }
    }
  return (
    <Modal title='Add a song' description='Upload an mp3 file'  isOpen={uploadModal.isOpen} onChange={onChange}>
        <form className='flex flex-col gap-y-4' onSubmit={handleSubmit(onSubmit)}>
            <Input id={"title"} disabled ={isLoading} {...register('title',{required:true})} placeholder = {'Song title'}/>
            <Input id={"author"} disabled ={isLoading} {...register('author',{required:true})} placeholder = {'Song author'}/>
            <div>
                <div className='pb-1'>
                    select a song file
                    <Input id={"song"} type='file' disabled ={isLoading} {...register('song',{required:true})} accept='.mp3'/>
                </div>
            </div>
            <div>
                <div className='pb-1'>
                    select a Image 
                    <Input id={"image"} type='file' disabled ={isLoading} {...register('image',{required:true})} accept='image/*'/>
                </div>
            </div>
            <Button disabled={isLoading} type='submit'>
                Create
            </Button>
        </form>
    </Modal>
  )
}

export default UploadModal