"use client";

import { authClient } from "@/lib/auth-client";
import {AlertDialog, Button} from "@heroui/react";

export function DeleteBookingAlert({booking}) {

    const handleDeleteBooking=async()=>{
      const{data:tokenData}=await authClient.token()
        const res=await fetch(`${process.env.SURVER_URI}/bookings/${booking}`,{
            method:"DELETE",
            headers:{
                'content-type':'application/json',
                authorization:`Bearer ${tokenData?.token}`
            }
        })
        const data=await res.json()
        // console.log(data)
        window.location.reload();
    }
  return (
    <AlertDialog>
      <Button variant='outline' className={'bg-red-100 rounded-2xl text-red-400'}>Cancel</Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Delete Booking permanently?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete <strong className="font-bold text-xl">{booking?.tutor}</strong> and all of its
                data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close"  variant="tertiary">
                Cancel
              </Button>
              <Button onClick={handleDeleteBooking} slot="close" variant="danger">
                Delete 
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}