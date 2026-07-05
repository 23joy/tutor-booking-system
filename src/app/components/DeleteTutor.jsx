"use client";
import { authClient } from '@/lib/auth-client';
import { AlertDialog, Button } from '@heroui/react';
import React from 'react';
import { TiDeleteOutline } from 'react-icons/ti';

const DeleteTutor = ({tutor}) => {
    const handleDeleteTutor=async()=>{

          const{data:tokenData}=await authClient.token()
          
            const res=await fetch(`${process.env.NEXT_PUBLIC_SERVER_URI}/addtutor/${tutor._id}`,{
                method:"DELETE",
                headers:{
                    'content-type':'application/json',
                    authorization:`Bearer ${tokenData?.token}`
                }
            })
            const data=await res.json()
    
            window.location.reload();
        }
    return (
         <AlertDialog>
              <Button variant='danger' className={'w-12 h-12 rounded-2xl bg-gradient-to-r from-fuchsia-600 via-purple-500 to-cyan-500 flex items-center justify-center text-white'}><TiDeleteOutline /></Button>
              <AlertDialog.Backdrop>
                <AlertDialog.Container>
                  <AlertDialog.Dialog className="sm:max-w-[400px]">
                    <AlertDialog.CloseTrigger />
                    <AlertDialog.Header>
                      <AlertDialog.Icon status="danger" />
                      <AlertDialog.Heading className='text-2xl font-bold bg-gradient-to-r from-fuchsia-600 via-purple-500 to-cyan-500 bg-clip-text text-transparent'>Delete Booking permanently?</AlertDialog.Heading>
                    </AlertDialog.Header>
                    <AlertDialog.Body>
                      <p className='text-sm text-gray-500'>
                        This will permanently delete <strong className="font-bold text-xl">{tutor?.name}</strong> and all of its
                        data. This action cannot be undone.
                      </p>
                    </AlertDialog.Body>
                    <AlertDialog.Footer>
                      <Button slot="close"  variant="tertiary">
                        Cancel
                      </Button>
                      <Button onClick={handleDeleteTutor} slot="close" variant="danger">
                        Delete 
                      </Button>
                    </AlertDialog.Footer>
                  </AlertDialog.Dialog>
                </AlertDialog.Container>
              </AlertDialog.Backdrop>
            </AlertDialog>
    );
};

export default DeleteTutor;